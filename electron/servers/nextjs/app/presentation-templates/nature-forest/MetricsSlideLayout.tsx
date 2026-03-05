import React from 'react'
import * as z from "zod";

export const layoutId = 'nature-forest-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in a natural forest theme'

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
            value: '95%',
            label: 'Customer Retention',
            description: 'Our sustainable approach has led to exceptional customer loyalty and long-term partnerships across all business segments.'
        },
        {
            value: '250+',
            label: 'Projects Delivered',
            description: 'Successfully completed over 250 eco-friendly projects, demonstrating our commitment to sustainable business practices.'
        },
        {
            value: '$2.5M',
            label: 'Annual Revenue',
            description: 'Strong financial growth through our focus on environmentally responsible solutions and organic business development.'
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

const MetricsSlideLayout: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-2 md:grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bitter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-bold" 
                                    style={{ color: 'var(--background-text, #e8efe0)' }}
                                >
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative organic leaf shapes */}
                <div className="absolute top-16 left-12 opacity-20">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                        <path 
                            d="M20 40C20 20 40 10 60 20C80 10 100 20 100 40C100 60 80 70 60 60C40 70 20 60 20 40Z" 
                            fill="var(--primary-color, #7cb342)"
                            opacity="0.4"
                        />
                        <path 
                            d="M15 55C15 40 30 35 45 42C60 35 75 40 75 55C75 70 60 75 45 68C30 75 15 70 15 55Z" 
                            fill="var(--primary-color, #7cb342)"
                            opacity="0.3"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-16 right-16 opacity-15">
                    <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
                        <path 
                            d="M30 50C30 25 50 15 70 25C90 15 110 25 110 50C110 75 90 85 70 75C50 85 30 75 30 50Z" 
                            fill="var(--primary-color, #7cb342)"
                            opacity="0.3"
                        />
                    </svg>
                </div>

                {/* Wavy organic divider */}
                <div className="absolute top-1/2 left-0 right-0 opacity-10">
                    <svg width="100%" height="4" viewBox="0 0 1280 4" fill="none" preserveAspectRatio="none">
                        <path 
                            d="M0 2C320 0 640 4 960 2C1120 1 1200 3 1280 2" 
                            stroke="var(--stroke, rgba(124, 179, 66, 0.25))" 
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-20 pb-16 flex-1 flex flex-col justify-center">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ color: "var(--background-text, #e8efe0)" }} 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-center max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Label with leaf bullet */}
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #7cb342)" }}></div>
                                            <div 
                                                className="text-sm font-medium"
                                                style={{ 
                                                    color: "var(--background-text, #e8efe0)",
                                                    fontFamily: "var(--body-font-family, Source Sans 3)"
                                                }}
                                            >
                                                {metric.label}
                                            </div>
                                        </div>

                                        {/* Large Metric Value */}
                                        <div 
                                            style={{ color: "var(--primary-color, #7cb342)" }} 
                                            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="rounded-xl p-6 mt-6"
                                            style={{ 
                                                border: "1px solid rgba(124,179,66,0.15)",
                                                background: "rgba(255,255,255,0.08)",
                                                borderRadius: "12px"
                                            }}
                                        >
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #e8efe0)",
                                                    fontFamily: "var(--body-font-family, Source Sans 3)"
                                                }} 
                                                className="text-sm leading-relaxed"
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

export default MetricsSlideLayout