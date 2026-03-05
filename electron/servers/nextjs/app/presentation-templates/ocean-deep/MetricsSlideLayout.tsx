import React from 'react'
import * as z from "zod";

export const layoutId = 'ocean-deep-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in ocean deep theme'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            value: '2.5M+',
            label: 'Active Users',
            description: 'Our platform has reached over 2.5 million active users worldwide, demonstrating strong market adoption.'
        },
        {
            value: '98.9%',
            label: 'Uptime',
            description: 'Industry-leading reliability with 98.9% uptime, ensuring consistent service delivery for our clients.'
        },
        {
            value: '$12M',
            label: 'Annual Revenue',
            description: 'Strong financial performance with $12M in annual recurring revenue, showing sustainable growth.'
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

const OceanDeepMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 2) {
            return 'grid grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-3'
        } else if (count === 4) {
            return 'grid grid-cols-2'
        } else {
            return 'grid grid-cols-2'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Raleway)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #c8e0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Wave Elements */}
                <div className="absolute top-0 left-0 w-96 h-full opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 720" fill="none">
                        <path d="M0 150C80 200 160 100 240 150C270 165 300 150 300 150V0H0V150Z" fill="var(--primary-color, #00bcd4)" opacity="0.3" />
                        <path d="M0 350C120 400 180 300 300 350V300C225 325 150 300 75 325L0 350Z" fill="var(--primary-color, #00bcd4)" opacity="0.2" />
                    </svg>
                </div>

                {/* Circular Bubble Accents */}
                <div className="absolute top-20 right-16 w-32 h-32 rounded-full opacity-10" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                <div className="absolute bottom-24 right-32 w-20 h-20 rounded-full opacity-15" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                <div className="absolute top-40 right-48 w-12 h-12 rounded-full opacity-20" style={{ background: "var(--primary-color, #00bcd4)" }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ color: "var(--background-text, #c8e0f0)" }} 
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-center max-w-5xl w-full`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Metric Card */}
                                        <div
                                            className="p-8 rounded-2xl"
                                            style={{
                                                border: "1px solid rgba(0,188,212,0.15)",
                                                background: "rgba(0,188,212,0.06)",
                                                borderRadius: "16px",
                                                backdropFilter: "blur(8px)"
                                            }}
                                        >
                                            {/* Large Metric Value */}
                                            <div 
                                                style={{ color: "var(--primary-color, #00bcd4)" }} 
                                                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label */}
                                            <div 
                                                className="text-lg font-semibold mb-4" 
                                                style={{ 
                                                    color: "var(--background-text, #c8e0f0)",
                                                    fontFamily: "var(--body-font-family, 'Open Sans')"
                                                }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Description */}
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #c8e0f0)",
                                                    fontFamily: "var(--body-font-family, 'Open Sans')"
                                                }} 
                                                className="text-sm leading-relaxed opacity-90"
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

                {/* Flowing Gradient Line Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 opacity-30">
                    <div 
                        className="w-full h-full"
                        style={{
                            background: `linear-gradient(90deg, transparent 0%, var(--primary-color, #00bcd4) 25%, var(--primary-color, #00bcd4) 75%, transparent 100%)`
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default OceanDeepMetricsSlide