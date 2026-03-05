import React from 'react'
import * as z from "zod";

export const layoutId = 'vintage-paper-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A vintage paper themed slide layout for showcasing key business metrics with classic typography and ornamental decorative elements.'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Company Performance').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M). No long values. Keep simple number."
        }),
        description: z.string().min(10).max(150).meta({
            description: "Detailed description of the metric. Explanation of the metric."
        }),
    })).min(2).max(4).default([
        {
            value: '150+',
            label: 'Distinguished Clients',
            description: 'Our establishment has cultivated relationships with distinguished clientele across various industries and sectors.'
        },
        {
            value: '95%',
            label: 'Customer Satisfaction',
            description: 'Through meticulous attention to detail and service excellence, we maintain exceptional satisfaction ratings.'
        },
        {
            value: '$2.5M',
            label: 'Annual Revenue',
            description: 'Our steadfast commitment to quality has yielded substantial growth in annual revenue streams.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export const Schema = metricsSlideSchema

export type MetricsSlideData = z.infer<typeof metricsSlideSchema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const VintagePaperMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else if (count === 4) {
            return 'grid grid-cols-2 md:grid-cols-4'
        } else {
            return 'grid grid-cols-2 md:grid-cols-3'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Playfair Display')",
                    color: "var(--background-text, #3a2e1e)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 opacity-80" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--primary-color, #8b4513)', fontFamily: "var(--heading-font-family, 'Playfair Display')" }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Flourish Elements */}
                <div className="absolute top-20 left-12 opacity-10" style={{ color: "var(--primary-color, #8b4513)" }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                        <path d="M10 40C20 20, 40 20, 60 40C80 20, 100 20, 110 40" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="60" cy="40" r="3" fill="currentColor" />
                        <path d="M50 35L60 40L50 45M70 35L60 40L70 45" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>

                <div className="absolute bottom-20 right-12 opacity-10" style={{ color: "var(--primary-color, #8b4513)" }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                        <path d="M10 40C20 60, 40 60, 60 40C80 60, 100 60, 110 40" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="60" cy="40" r="3" fill="currentColor" />
                        <path d="M50 45L60 40L50 35M70 45L60 40L70 35" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center">
                    <div className="space-y-16">
                        {/* Title with Drop Cap Style */}
                        <div className="text-center relative">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #3a2e1e)",
                                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                }}
                            >
                                {slideData?.title || 'Company Performance'}
                            </h1>
                            
                            {/* Ornamental divider */}
                            <div className="mt-6 flex items-center justify-center">
                                <div className="h-px flex-1 max-w-20" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                                <div className="mx-4 w-2 h-2 rotate-45" style={{ background: "var(--primary-color, #8b4513)" }}></div>
                                <div className="h-px flex-1 max-w-20" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-stretch max-w-5xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Large Metric Value with Drop Cap Style */}
                                        <div 
                                            className="text-6xl sm:text-7xl lg:text-8xl font-black"
                                            style={{ 
                                                color: "var(--primary-color, #8b4513)",
                                                fontFamily: "var(--heading-font-family, 'Playfair Display')",
                                                textShadow: "0 2px 4px rgba(139, 69, 19, 0.1)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Label */}
                                        <div 
                                            className="text-lg font-semibold tracking-wide"
                                            style={{ 
                                                color: "var(--background-text, #3a2e1e)",
                                                fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="rounded-sm p-6 shadow-sm"
                                            style={{ 
                                                border: "1px solid rgba(139,69,19,0.15)",
                                                background: "rgba(255,250,240,0.5)",
                                                borderRadius: "2px"
                                            }}
                                        >
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #3a2e1e)",
                                                    fontFamily: "var(--body-font-family, 'Crimson Text')"
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
            </div>
        </>
    )
}

export default VintagePaperMetricsSlide