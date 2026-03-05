import React from 'react'
import * as z from "zod";

export const layoutId = 'mountain-mist-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A misty mountain-themed slide showcasing key metrics with serene glass-morphism cards and muted blue-grey styling'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Growth Rate').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('147%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M). Keep simple and short."
        }),
        description: z.string().min(10).max(150).default('Consistent quarter-over-quarter growth demonstrating strong market traction and customer satisfaction across all business segments.').meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '147%',
            description: 'Consistent quarter-over-quarter growth demonstrating strong market traction and customer satisfaction across all business segments.'
        },
        {
            label: 'Active Users',
            value: '24.5K',
            description: 'Growing user base with high engagement rates and strong retention metrics indicating product-market fit and value delivery.'
        },
        {
            label: 'Client Retention',
            value: '94%',
            description: 'Exceptional client satisfaction and loyalty reflected in industry-leading retention rates and positive testimonials.'
        },
        {
            label: 'Market Share',
            value: '18%',
            description: 'Significant market penetration in target segments with continued expansion opportunities in adjacent markets.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface MetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const MountainMistMetricsSlide: React.FC<MetricsSlideProps> = ({ data }) => {
    const metrics = data?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Philosopher)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(data as any)?.__companyName__ && (
                                <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a2a3a)' }}>
                                    {(data as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative mist layers */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent blur-xl transform -rotate-1"></div>
                    <div className="absolute top-8 left-16 w-64 h-8 bg-gradient-to-r from-transparent via-white to-transparent blur-lg opacity-60 transform rotate-1"></div>
                    <div className="absolute top-16 right-24 w-48 h-6 bg-gradient-to-l from-transparent via-white to-transparent blur-md opacity-40 transform -rotate-2"></div>
                </div>

                <div className="absolute bottom-0 right-0 w-full h-24 opacity-15 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white to-transparent blur-2xl transform rotate-2"></div>
                    <div className="absolute bottom-4 left-32 w-72 h-4 bg-gradient-to-r from-transparent via-white to-transparent blur-lg opacity-50"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 pt-16 pb-8 flex flex-col h-full">
                    {/* Header Section */}
                    <div className="text-center mb-8 flex-shrink-0">
                        <h1 
                            className="text-4xl font-bold mb-4"
                            style={{ color: "var(--background-text, #1a2a3a)" }}
                        >
                            {data?.title || 'Key Metrics'}
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center">
                            <div 
                                className="w-32 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40"
                                style={{ color: "var(--stroke, rgba(84, 110, 122, 0.15))" }}
                            ></div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center min-w-0">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-5 border-radius-12"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.55))",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(255, 255, 255, 0.4)",
                                        borderRadius: "12px"
                                    }}
                                >
                                    {/* Metric Value */}
                                    <div 
                                        className="text-3xl font-bold mb-2"
                                        style={{ 
                                            color: "var(--primary-color, #546e7a)",
                                            fontFamily: "var(--heading-font-family, Philosopher)"
                                        }}
                                    >
                                        {metric.value}
                                    </div>
                                    
                                    {/* Label */}
                                    <div 
                                        className="text-sm font-medium mb-3"
                                        style={{ 
                                            color: "var(--background-text, #1a2a3a)",
                                            fontFamily: "var(--body-font-family, Karla)"
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    
                                    {/* Description */}
                                    <p 
                                        className="text-xs leading-relaxed line-clamp-3"
                                        style={{ 
                                            color: "var(--background-text, #1a2a3a)",
                                            opacity: "0.8",
                                            fontFamily: "var(--body-font-family, Karla)"
                                        }}
                                    >
                                        {metric.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MountainMistMetricsSlide