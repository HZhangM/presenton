import React from 'react'
import * as z from "zod";

export const layoutId = 'watercolor-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A watercolor-themed slide showcasing key numeric metrics with elegant serif typography and glass-morphism cards.'

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
            label: 'Happy Clients',
            description: 'We have successfully served over 150 clients across various industries with exceptional results and lasting partnerships.'
        },
        {
            value: '95%',
            label: 'Client Satisfaction',
            description: 'Our commitment to excellence has earned us a 95% client satisfaction rate, reflecting our dedication to quality.'
        },
        {
            value: '$2M',
            label: 'Revenue Generated',
            description: 'Through strategic initiatives and innovative solutions, we have generated over $2M in revenue this year.'
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

const WatercolorMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 rounded-full" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-medium" style={{ color: 'var(--background-text, #2d2d3d)', fontFamily: "var(--body-font-family, Lora)" }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative watercolor blobs */}
                <div className="absolute top-12 left-12 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--primary-color, #7c5cbf)' }}></div>
                <div className="absolute bottom-16 right-16 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ background: 'linear-gradient(135deg, var(--primary-color, #7c5cbf), rgba(124, 92, 191, 0.3))' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-12 py-16 flex-1 flex flex-col justify-center min-h-full">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-5xl lg:text-6xl font-bold"
                                style={{ 
                                    color: "var(--background-text, #2d2d3d)",
                                    fontFamily: "var(--heading-font-family, Playfair Display)"
                                }}
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Grid */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 max-w-6xl w-full`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Glass-morphism Card */}
                                        <div 
                                            className="p-8 rounded-2xl"
                                            style={{
                                                backdropFilter: 'blur(12px)',
                                                background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                                borderRadius: '24px',
                                                boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                                            }}
                                        >
                                            {/* Metric Value */}
                                            <div 
                                                className="text-5xl lg:text-6xl font-bold mb-4"
                                                style={{ 
                                                    color: "var(--primary-color, #7c5cbf)",
                                                    fontFamily: "var(--heading-font-family, Playfair Display)"
                                                }}
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label */}
                                            <h3 
                                                className="text-xl lg:text-2xl font-semibold mb-4"
                                                style={{ 
                                                    color: "var(--background-text, #2d2d3d)",
                                                    fontFamily: "var(--heading-font-family, Playfair Display)"
                                                }}
                                            >
                                                {metric.label}
                                            </h3>

                                            {/* Description */}
                                            <p 
                                                className="text-sm lg:text-base leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #2d2d3d)",
                                                    fontFamily: "var(--body-font-family, Lora)"
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

                {/* Gradient divider line */}
                <div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-0.5 rounded-full opacity-30"
                    style={{
                        background: `linear-gradient(90deg, transparent, var(--stroke, rgba(124, 92, 191, 0.25)), transparent)`
                    }}
                ></div>
            </div>
        </>
    )
}

export default WatercolorMetricsSlide