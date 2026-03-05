import React from 'react'
import * as z from "zod";

export const layoutId = 'newspaper-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A newspaper-style slide layout for showcasing key business metrics with classic serif typography and column-style presentation.'

const newspaperMetricsSlideSchema = z.object({
    title: z.string().min(5).max(40).default('BUSINESS METRICS').meta({
        description: "Main headline of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(5).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(20).max(150).meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            value: '2,500+',
            label: 'Daily Readers',
            description: 'Our publication has grown to serve over 2,500 dedicated readers across the metropolitan area, establishing a trusted voice in local journalism.'
        },
        {
            value: '95%',
            label: 'Accuracy Rate',
            description: 'Maintaining the highest standards of journalistic integrity with a 95% fact-checking accuracy rate verified by independent media watchdogs.'
        },
        {
            value: '48hrs',
            label: 'Breaking News Speed',
            description: 'From story development to print, our newsroom delivers comprehensive coverage of breaking news within 48 hours of initial reports.'
        }
    ]).meta({
        description: "Array of key business metrics to display",
    })
})

export const Schema = newspaperMetricsSlideSchema

export type NewspaperMetricsSlideData = z.infer<typeof newspaperMetricsSlideSchema>

interface NewspaperMetricsSlideLayoutProps {
    data?: Partial<NewspaperMetricsSlideData>
}

const NewspaperMetricsSlideLayout: React.FC<NewspaperMetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-2 md:grid-cols-2'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {/* Decorative ornamental border */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-solid opacity-20" style={{ borderColor: "var(--primary-color, #1a1a1a)" }}>
                </div>

                {/* Corner flourishes */}
                <div className="absolute top-8 left-8 w-16 h-16 opacity-15">
                    <svg viewBox="0 0 64 64" fill="none">
                        <path d="M8 8L56 8L56 16L16 16L16 56L8 56L8 8Z" fill="var(--primary-color, #1a1a1a)"/>
                        <path d="M8 24L32 24L32 32L8 32L8 24Z" fill="var(--primary-color, #1a1a1a)"/>
                    </svg>
                </div>

                {/* Company header block */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6" style={{ borderBottom: "2px solid var(--primary-color, #1a1a1a)" }}>
                        <div className="flex items-center justify-between pb-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <div style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--heading-font-family, Unna)" }} className="text-xl font-bold">
                                        {(slideData as any)?.__companyName__}
                                    </div>
                                )}
                            </div>
                            <div style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--body-font-family, Source Serif 4)" }} className="text-sm">
                                BUSINESS REPORT • {new Date().getFullYear()}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="px-12 pt-20 pb-10 flex flex-col h-full">
                    {/* Newspaper-style headline */}
                    <div className="text-center mb-6">
                        <div className="mb-2" style={{ borderTop: "4px solid var(--primary-color, #1a1a1a)", borderBottom: "1px solid var(--stroke, rgba(0,0,0,0.2))" }}>
                            <h1
                                className="text-4xl font-bold py-4 leading-tight"
                                style={{
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--heading-font-family, Unna)"
                                }}
                            >
                                {slideData?.title || 'BUSINESS METRICS'}
                            </h1>
                        </div>
                        <div className="w-24 mx-auto mb-4" style={{ borderTop: "1px solid var(--stroke, rgba(0,0,0,0.2))" }}></div>
                    </div>

                    {/* Metrics columns */}
                    <div className="flex-1 flex items-start justify-center">
                        <div className={`${getLayoutClasses(metrics.length)} gap-6 w-full max-w-5xl`}>
                            {metrics.map((metric, index) => (
                                <div key={index}>
                                    {/* Article-style metric card */}
                                    <div
                                        className="py-4"
                                        style={{
                                            borderTop: "2px solid var(--primary-color, #1a1a1a)",
                                            borderBottom: "1px solid var(--stroke, rgba(0,0,0,0.2))",
                                            background: "transparent"
                                        }}
                                    >
                                        {/* Metric value - newspaper headline style */}
                                        <div
                                            className="text-3xl font-bold text-center mb-2"
                                            style={{
                                                color: "var(--primary-color, #1a1a1a)",
                                                fontFamily: "var(--heading-font-family, Unna)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Metric label - subheading */}
                                        <div
                                            className="text-base font-semibold text-center mb-3 uppercase tracking-wide"
                                            style={{
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--body-font-family, Source Serif 4)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Column divider */}
                                        <div className="w-10 mx-auto mb-3" style={{ borderTop: "1px solid var(--stroke, rgba(0,0,0,0.2))" }}></div>

                                        {/* Description - body text */}
                                        <p
                                            className="text-sm leading-relaxed text-justify px-2"
                                            style={{
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--body-font-family, Source Serif 4)"
                                            }}
                                        >
                                            {metric.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewspaperMetricsSlideLayout