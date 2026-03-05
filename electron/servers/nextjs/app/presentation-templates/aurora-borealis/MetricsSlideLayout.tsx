import React from 'react'
import * as z from "zod";

export const layoutId = 'aurora-borealis-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'Northern lights gradient with ethereal green and purple streaks on dark sky'

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
            value: '12.5K',
            label: 'Active Users',
            description: 'Monthly active users showing consistent growth across all key demographics and regions.'
        },
        {
            value: '98.7%',
            label: 'Uptime Achieved',
            description: 'Exceptional service reliability delivering seamless experience for our global user base.'
        },
        {
            value: '4.9',
            label: 'User Rating',
            description: 'Outstanding customer satisfaction reflecting our commitment to quality and excellence.'
        },
        {
            value: '$2.3M',
            label: 'Revenue Growth',
            description: 'Year-over-year revenue increase demonstrating strong market demand and business momentum.'
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

const AuroraMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Poppins)" 
                }}
            >
                {/* Aurora-inspired decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute top-0 left-0 w-96 h-96 opacity-20 rounded-full blur-3xl"
                        style={{
                            background: "linear-gradient(135deg, var(--primary-color, #4ecca3) 0%, rgba(78, 204, 163, 0.3) 50%, rgba(147, 51, 234, 0.2) 100%)"
                        }}
                    ></div>
                    <div 
                        className="absolute bottom-0 right-0 w-80 h-80 opacity-15 rounded-full blur-3xl"
                        style={{
                            background: "linear-gradient(45deg, rgba(147, 51, 234, 0.3) 0%, var(--primary-color, #4ecca3) 100%)"
                        }}
                    ></div>
                </div>

                {/* Flowing curves decoration */}
                <div className="absolute top-1/4 left-0 right-0 overflow-hidden">
                    <svg className="w-full h-32 opacity-10" viewBox="0 0 1280 128" preserveAspectRatio="none">
                        <path 
                            d="M0,96 C320,32 640,96 960,64 C1120,48 1280,80 1280,80 L1280,128 L0,128 Z" 
                            fill="url(#aurora-gradient)"
                        />
                        <defs>
                            <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--primary-color, #4ecca3)" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="var(--primary-color, #4ecca3)" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Company logo/name header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && 
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 flex-shrink-0" />
                            }
                            {(slideData as any)?.__companyName__ && 
                                <span 
                                    className="text-lg font-semibold"
                                    style={{ color: 'var(--background-text, #d0e8e0)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            }
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 px-12 py-16 flex flex-col h-full justify-center">
                    <div className="space-y-12">
                        {/* Title Section */}
                        <div className="text-center space-y-4">
                            <h1 
                                className="text-5xl font-bold"
                                style={{ color: "var(--background-text, #d0e8e0)" }}
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                            
                            {/* Gradient divider */}
                            <div 
                                className="mx-auto h-1 w-32 rounded-full"
                                style={{
                                    background: "linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.7) 100%)"
                                }}
                            ></div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="text-center space-y-4 p-6 rounded-2xl backdrop-blur-md"
                                    style={{
                                        border: "1px solid rgba(78,204,163,0.15)",
                                        background: "rgba(78,204,163,0.06)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    {/* Metric Value */}
                                    <div 
                                        className="text-4xl font-bold"
                                        style={{ color: "var(--primary-color, #4ecca3)" }}
                                    >
                                        {metric.value}
                                    </div>

                                    {/* Label */}
                                    <div 
                                        className="text-base font-medium"
                                        style={{ color: "var(--background-text, #d0e8e0)", fontFamily: "var(--body-font-family, 'Nunito Sans')" }}
                                    >
                                        {metric.label}
                                    </div>

                                    {/* Description */}
                                    <div 
                                        className="text-sm leading-relaxed px-2"
                                        style={{ 
                                            color: "var(--background-text, #d0e8e0)", 
                                            opacity: 0.8,
                                            fontFamily: "var(--body-font-family, 'Nunito Sans')"
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

export default AuroraMetricsSlide