import React from 'react'
import * as z from "zod";

export const layoutId = 'electric-purple-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in electric purple theme'

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
            value: '250+',
            label: 'Active Users',
            description: 'Growing user base with 85% monthly retention rate and strong engagement across all platforms.'
        },
        {
            value: '95%',
            label: 'Customer Satisfaction',
            description: 'Exceptional service quality delivering consistent value and building long-term relationships.'
        },
        {
            value: '$2.4M',
            label: 'Annual Revenue',
            description: 'Strong financial performance with 40% year-over-year growth and healthy profit margins.'
        },
        {
            value: '12x',
            label: 'Performance Boost',
            description: 'Significant efficiency improvements helping clients achieve their goals faster than ever.'
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

const ElectricPurpleMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Urbanist)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-semibold"
                                    style={{ color: 'var(--background-text, #e8d0ff)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                    <div 
                        className="w-full h-full rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, var(--primary-color, #bb86fc), transparent)',
                            filter: 'blur(20px)'
                        }}
                    />
                </div>
                
                <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon 
                            points="50,10 90,90 10,90" 
                            fill="var(--primary-color, #bb86fc)" 
                            opacity="0.3"
                        />
                        <polygon 
                            points="50,25 75,75 25,75" 
                            fill="var(--primary-color, #bb86fc)" 
                            opacity="0.2"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 py-12 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #e8d0ff)",
                                textShadow: `0 0 20px var(--primary-color, #bb86fc)40`
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div 
                            className="h-px w-32 mx-auto"
                            style={{
                                background: `linear-gradient(90deg, transparent, var(--primary-color, #bb86fc), transparent)`
                            }}
                        />
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-6 rounded-2xl backdrop-blur-sm"
                                    style={{
                                        border: '1px solid rgba(187,134,252,0.2)',
                                        background: 'rgba(187,134,252,0.08)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(8px)',
                                        boxShadow: `0 8px 32px rgba(187,134,252,0.1), 0 0 20px rgba(187,134,252,0.1)`
                                    }}
                                >
                                    {/* Label */}
                                    <div 
                                        className="text-sm font-medium mb-3 min-w-0"
                                        style={{ color: "var(--background-text, #e8d0ff)" }}
                                    >
                                        {metric.label}
                                    </div>

                                    {/* Value */}
                                    <div 
                                        className="text-4xl font-bold mb-4"
                                        style={{ 
                                            color: "var(--primary-color, #bb86fc)",
                                            textShadow: `0 0 15px var(--primary-color, #bb86fc)40`,
                                            fontFamily: "var(--heading-font-family, Urbanist)"
                                        }}
                                    >
                                        {metric.value}
                                    </div>

                                    {/* Description */}
                                    <div
                                        className="text-sm leading-relaxed min-w-0"
                                        style={{ 
                                            color: "var(--background-text, #e8d0ff)",
                                            opacity: 0.9
                                        }}
                                    >
                                        {metric.description}
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

export default ElectricPurpleMetricsSlide