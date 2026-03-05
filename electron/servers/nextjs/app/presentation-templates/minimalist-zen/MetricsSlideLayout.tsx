import React from 'react'
import * as z from "zod";

export const layoutId = 'minimalist-zen-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A zen-inspired minimalist slide showcasing key metrics with ultra-clean typography and generous whitespace'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M). Keep simple and short."
        }),
        description: z.string().min(10).max(150).meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            value: '150+',
            label: 'Clients',
            description: 'A diverse client base built on trust and consistent delivery across multiple industries.'
        },
        {
            value: '95%',
            label: 'Satisfaction',
            description: 'Exceptional customer satisfaction rate demonstrating our commitment to quality and service.'
        },
        {
            value: '$2M',
            label: 'Revenue',
            description: 'Annual recurring revenue showing sustainable growth and market validation.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface MinimalistZenMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const MinimalistZenMetricsSlide: React.FC<MinimalistZenMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Noto Serif JP)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 opacity-60" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-light tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #2d2d2d)',
                                        fontFamily: 'var(--body-font-family, Noto Sans JP)'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-24 left-16 w-12 h-px"
                    style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                />
                
                <div 
                    className="absolute top-1/2 right-16 w-8 h-8 rounded-full border transform -translate-y-1/2 opacity-30"
                    style={{ borderColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                />

                {/* Main Content */}
                <div className="px-16 pt-12 pb-10 h-full flex flex-col justify-center">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-light tracking-tight"
                            style={{ 
                                color: "var(--primary-color, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Noto Serif JP)"
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div 
                            className="w-16 h-px mx-auto mt-8"
                            style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                        />
                    </div>

                    {/* Metrics Grid */}
                    <div className={`grid gap-6 place-items-center ${
                        metrics.length === 2 ? 'grid-cols-2' :
                        metrics.length === 3 ? 'grid-cols-3' :
                        metrics.length === 4 ? 'grid-cols-4' : 'grid-cols-2'
                    }`}>
                        {metrics.map((metric, index) => (
                            <div key={index} className="text-center space-y-6 max-w-xs">
                                {/* Metric Value */}
                                <div 
                                    className="text-6xl font-normal tracking-tight"
                                    style={{ 
                                        color: "var(--primary-color, #1a1a1a)",
                                        fontFamily: "var(--heading-font-family, Noto Serif JP)"
                                    }}
                                >
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div 
                                    className="text-lg font-light tracking-wide"
                                    style={{ 
                                        color: "var(--background-text, #2d2d2d)",
                                        fontFamily: "var(--body-font-family, Noto Sans JP)"
                                    }}
                                >
                                    {metric.label}
                                </div>

                                {/* Divider */}
                                <div 
                                    className="w-8 h-px mx-auto"
                                    style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                                />

                                {/* Description */}
                                <div 
                                    className="text-sm font-light leading-relaxed opacity-80"
                                    style={{ 
                                        color: "var(--background-text, #2d2d2d)",
                                        fontFamily: "var(--body-font-family, Noto Sans JP)"
                                    }}
                                >
                                    {metric.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MinimalistZenMetricsSlide