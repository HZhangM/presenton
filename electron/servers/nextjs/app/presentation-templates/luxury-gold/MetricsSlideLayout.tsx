import React from 'react'
import * as z from "zod";

export const layoutId = 'luxury-gold-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A luxurious metrics slide showcasing 2-4 key numeric metrics with premium gold and black styling'

const luxuryGoldMetricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('EXECUTIVE METRICS').meta({
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
            value: '$2.5M',
            label: 'ANNUAL REVENUE',
            description: 'Premium revenue growth driven by exclusive partnerships and high-value client relationships across luxury markets.'
        },
        {
            value: '98%',
            label: 'CLIENT RETENTION',
            description: 'Exceptional client satisfaction and loyalty through personalized service and uncompromising quality standards.'
        },
        {
            value: '25+',
            label: 'STRATEGIC PARTNERS',
            description: 'Exclusive partnerships with industry leaders, providing unparalleled access to premium opportunities and resources.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export const Schema = luxuryGoldMetricsSlideSchema

export type LuxuryGoldMetricsSlideData = z.infer<typeof luxuryGoldMetricsSlideSchema>

interface LuxuryGoldMetricsSlideLayoutProps {
    data?: Partial<LuxuryGoldMetricsSlideData>
}

const LuxuryGoldMetricsSlideLayout: React.FC<LuxuryGoldMetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cinzel)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold tracking-wide" style={{ color: 'var(--primary-color, #d4a843)' }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Gold Crown Elements */}
                <div className="absolute top-8 left-8 opacity-20">
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path d="M5 35L15 10L25 20L35 10L45 15L55 35H5Z" stroke="var(--primary-color, #d4a843)" strokeWidth="1" fill="none"/>
                        <circle cx="15" cy="10" r="3" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="25" cy="20" r="4" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="35" cy="10" r="3" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="45" cy="15" r="2" fill="var(--primary-color, #d4a843)"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 right-8 opacity-15">
                    <svg width="80" height="2" viewBox="0 0 80 2" fill="none">
                        <line x1="0" y1="1" x2="80" y2="1" stroke="var(--primary-color, #d4a843)" strokeWidth="1"/>
                        <circle cx="10" cy="1" r="2" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="70" cy="1" r="2" fill="var(--primary-color, #d4a843)"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-12 pb-10 flex-1 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <div className="mb-4">
                                <div className="w-24 h-px mx-auto" style={{ background: 'var(--primary-color, #d4a843)' }}></div>
                            </div>
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider"
                                style={{ 
                                    color: "var(--background-text, #e8d5b0)",
                                    background: "linear-gradient(135deg, var(--primary-color, #d4a843) 0%, #f4e4a6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}
                            >
                                {slideData?.title || 'EXECUTIVE METRICS'}
                            </h1>
                            <div className="mt-4">
                                <div className="w-24 h-px mx-auto" style={{ background: 'var(--primary-color, #d4a843)' }}></div>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 place-content-center place-items-center max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Label */}
                                        <div 
                                            className="text-sm font-medium tracking-widest"
                                            style={{ 
                                                color: "var(--primary-color, #d4a843)",
                                                fontFamily: "var(--heading-font-family, Cinzel)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Large Metric Value */}
                                        <div 
                                            className="text-4xl sm:text-5xl lg:text-5xl font-black"
                                            style={{ 
                                                color: "var(--background-text, #e8d5b0)",
                                                fontFamily: "var(--heading-font-family, Cinzel)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="rounded p-4 mt-3 border"
                                            style={{ 
                                                border: "1px solid var(--stroke, rgba(212, 168, 67, 0.3))",
                                                background: "var(--card-color, rgba(212, 168, 67, 0.06))",
                                                borderRadius: "4px"
                                            }}
                                        >
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #e8d5b0)",
                                                    fontFamily: "var(--body-font-family, 'EB Garamond')"
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

export default LuxuryGoldMetricsSlideLayout