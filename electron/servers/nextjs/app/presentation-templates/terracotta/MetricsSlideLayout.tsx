import React from 'react'
import * as z from "zod";

export const layoutId = 'terracotta-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A Mediterranean-themed slide showcasing 2-4 key numeric metrics with warm terracotta styling and elegant typography'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
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
            label: 'Artisan Products',
            description: 'Handcrafted items created with traditional Mediterranean techniques and authentic materials.'
        },
        {
            value: '95%',
            label: 'Customer Satisfaction',
            description: 'Our commitment to quality craftsmanship has earned exceptional customer loyalty and trust.'
        },
        {
            value: '25',
            label: 'Years Experience',
            description: 'Over two decades of expertise in traditional Mediterranean artisanal practices and design.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export const Schema = metricsSlideSchema

export type MetricsSlideData = z.infer<typeof metricsSlideSchema>

interface TerracottaMetricsSlideProps {
    data?: Partial<MetricsSlideData>
}

const TerracottaMetricsSlide: React.FC<TerracottaMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 2) {
            return 'grid grid-cols-2 gap-12'
        } else if (count === 3) {
            return 'grid grid-cols-3 gap-8'
        } else if (count === 4) {
            return 'grid grid-cols-4 gap-6'
        }
        return 'grid grid-cols-2 gap-8'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #2d1a0e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Diamond Ornaments */}
                <div className="absolute top-20 left-20 opacity-20" style={{ color: 'var(--primary-color, #8d4e2a)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 6h6l-3 6 3 6h-6l-3 6-3-6H3l3-6-3-6h6l3-6z"/>
                    </svg>
                </div>

                <div className="absolute bottom-20 right-20 opacity-20" style={{ color: 'var(--primary-color, #8d4e2a)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 6h6l-3 6 3 6h-6l-3 6-3-6H3l3-6-3-6h6l3-6z"/>
                    </svg>
                </div>

                {/* Decorative Border Lines */}
                <div className="absolute top-32 left-8 right-8 h-px opacity-30" style={{ background: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>
                <div className="absolute bottom-32 left-8 right-8 h-px opacity-30" style={{ background: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>

                <div className="relative z-10 px-12 pt-12 pb-10 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-5xl font-bold"
                                style={{ 
                                    color: "var(--background-text, #2d1a0e)",
                                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                }}
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                            
                            {/* Decorative Divider with Diamond */}
                            <div className="flex items-center justify-center mt-8">
                                <div className="w-16 h-px" style={{ background: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>
                                <div className="mx-4 opacity-60" style={{ color: 'var(--primary-color, #8d4e2a)' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3 6h6l-3 6 3 6h-6l-3 6-3-6H3l3-6-3-6h6l3-6z"/>
                                    </svg>
                                </div>
                                <div className="w-16 h-px" style={{ background: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} max-w-5xl w-full`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Metric Value */}
                                        <div 
                                            className="text-6xl font-bold"
                                            style={{ 
                                                color: "var(--primary-color, #8d4e2a)",
                                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Label */}
                                        <div 
                                            className="text-xl font-semibold"
                                            style={{ 
                                                color: "var(--background-text, #2d1a0e)",
                                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="rounded-lg p-6 mx-auto max-w-sm"
                                            style={{ 
                                                background: "var(--card-color, rgba(255, 250, 240, 0.8))",
                                                border: "1px solid var(--stroke, rgba(141, 78, 42, 0.15))"
                                            }}
                                        >
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #2d1a0e)",
                                                    fontFamily: "var(--body-font-family, Libre Baskerville)"
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

export default TerracottaMetricsSlide