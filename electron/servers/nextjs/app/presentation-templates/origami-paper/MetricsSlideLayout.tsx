import React from 'react'
import * as z from "zod";

export const layoutId = 'origami-paper-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in origami paper theme'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Monthly Revenue'),
        value: z.string().min(1).max(10).default('$2.4M'),
        description: z.string().min(10).max(150).default('Steady growth in monthly recurring revenue with 15% month-over-month increase across all product lines.')
    })).min(2).max(4).default([
        {
            label: 'Monthly Revenue',
            value: '$2.4M',
            description: 'Steady growth in monthly recurring revenue with 15% month-over-month increase across all product lines.'
        },
        {
            label: 'Active Users',
            value: '125K',
            description: 'Growing user base with strong engagement metrics and low churn rate of under 3% monthly.'
        },
        {
            label: 'Customer Satisfaction',
            value: '4.8/5',
            description: 'High satisfaction scores based on customer surveys and feedback across all touchpoints.'
        },
        {
            label: 'Market Share',
            value: '18%',
            description: 'Increasing market presence in target segments with strong competitive positioning.'
        }
    ])
})

export { Schema }

interface OrigamiPaperMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const OrigamiPaperMetricsSlide: React.FC<OrigamiPaperMetricsSlideProps> = ({ data }) => {
    const metrics = data?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Outfit)" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(data as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium"
                                    style={{ color: 'var(--background-text, #2d2d3d)' }}
                                >
                                    {(data as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Paper Fold Elements */}
                <div className="absolute top-16 left-8 w-16 h-16 opacity-20">
                    <svg viewBox="0 0 64 64" fill="none">
                        <polygon points="0,0 32,0 64,32 32,64 0,32" fill="var(--primary-color, #e07a5f)" />
                        <polygon points="32,0 64,32 32,32" fill="rgba(0,0,0,0.1)" />
                    </svg>
                </div>
                
                <div className="absolute bottom-16 right-8 w-12 h-12 opacity-15">
                    <svg viewBox="0 0 48 48" fill="none">
                        <polygon points="0,24 24,0 48,24 24,48" fill="var(--stroke, rgba(224, 122, 95, 0.15))" />
                        <polygon points="24,0 48,24 24,24" fill="rgba(0,0,0,0.08)" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="px-8 pt-16 pb-8 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-6">
                        <h1 
                            className="text-4xl font-bold mb-4"
                            style={{ color: "var(--background-text, #2d2d3d)" }}
                        >
                            {data?.title || 'Key Metrics'}
                        </h1>
                        <div className="flex items-center justify-center gap-2">
                            <div 
                                className="h-px flex-1 max-w-16"
                                style={{ backgroundColor: "var(--stroke, rgba(224, 122, 95, 0.15))" }}
                            />
                            <div 
                                className="w-2 h-2 rotate-45"
                                style={{ backgroundColor: "var(--primary-color, #e07a5f)" }}
                            />
                            <div 
                                className="h-px flex-1 max-w-16"
                                style={{ backgroundColor: "var(--stroke, rgba(224, 122, 95, 0.15))" }}
                            />
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-5 border-4 rounded-sm"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 255, 255, 0.85))",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                        boxShadow: "4px 4px 0 rgba(0,0,0,0.04)"
                                    }}
                                >
                                    <div 
                                        className="text-sm font-medium mb-2"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--body-font-family, 'Nunito Sans')"
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    <div 
                                        className="text-3xl font-bold mb-3"
                                        style={{ color: "var(--primary-color, #e07a5f)" }}
                                    >
                                        {metric.value}
                                    </div>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--body-font-family, 'Nunito Sans')"
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

export default OrigamiPaperMetricsSlide