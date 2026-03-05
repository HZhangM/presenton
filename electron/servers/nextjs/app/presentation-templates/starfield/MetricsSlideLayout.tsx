import React from 'react'
import * as z from "zod";

export const layoutId = 'starfield-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A cosmic-themed slide layout for showcasing key business metrics with large numbers and descriptive text boxes against a starfield background.'

const starfieldMetricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Stellar Performance').meta({
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
            value: '1.2M',
            label: 'Active Users',
            description: 'Our platform has reached stellar growth with over 1.2 million active users across the galaxy of digital experiences.'
        },
        {
            value: '99.9%',
            label: 'System Uptime',
            description: 'Mission-critical reliability ensures our services maintain cosmic-level performance standards.'
        },
        {
            value: '$15M',
            label: 'Revenue Growth',
            description: 'Exponential revenue expansion demonstrates our trajectory toward market leadership and sustained success.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export const Schema = starfieldMetricsSlideSchema

export type StarfieldMetricsSlideData = z.infer<typeof starfieldMetricsSlideSchema>

interface StarfieldMetricsSlideLayoutProps {
    data?: Partial<StarfieldMetricsSlideData>
}

const StarfieldMetricsSlideLayout: React.FC<StarfieldMetricsSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Exo 2)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #d0d0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Star Elements */}
                <div className="absolute top-20 left-16 w-2 h-2 rounded-full opacity-60" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 12px var(--primary-color, #7c4dff)" }}></div>
                <div className="absolute top-32 right-24 w-1 h-1 rounded-full opacity-40" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 8px var(--primary-color, #7c4dff)" }}></div>
                <div className="absolute bottom-28 left-20 w-1.5 h-1.5 rounded-full opacity-50" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 10px var(--primary-color, #7c4dff)" }}></div>
                <div className="absolute bottom-40 right-16 w-2 h-2 rounded-full opacity-30" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 14px var(--primary-color, #7c4dff)" }}></div>

                {/* Orbital Curve Decoration */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20">
                    <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
                        <path d="M0 200C50 100 150 300 200 200" stroke="var(--primary-color, #7c4dff)" strokeWidth="1" fill="none" opacity="0.3"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-12 pb-10 flex-1 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-5xl font-bold tracking-tight"
                                style={{
                                    color: "var(--background-text, #d0d0f0)",
                                    textShadow: "0 0 20px rgba(124, 77, 255, 0.3)"
                                }}
                            >
                                {slideData?.title || 'Stellar Performance'}
                            </h1>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 place-content-center place-items-center w-full max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Label */}
                                        <div 
                                            className="text-sm sm:text-base font-medium tracking-wide uppercase opacity-80"
                                            style={{ color: "var(--background-text, #d0d0f0)" }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Large Metric Value */}
                                        <div 
                                            className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight"
                                            style={{ 
                                                color: "var(--primary-color, #7c4dff)",
                                                textShadow: "0 0 30px rgba(124, 77, 255, 0.6)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="rounded-xl p-4 mt-3 backdrop-blur-sm"
                                            style={{ 
                                                border: "1px solid rgba(124,77,255,0.15)",
                                                background: "rgba(124,77,255,0.06)",
                                                backdropFilter: "blur(8px)"
                                            }}
                                        >
                                            <p 
                                                className="text-sm sm:text-base leading-relaxed font-light"
                                                style={{ color: "var(--background-text, #d0d0f0)" }}
                                            >
                                                {metric.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Gradient Divider */}
                        <div className="flex justify-center mt-8">
                            <div 
                                className="h-px w-64 opacity-30"
                                style={{ 
                                    background: "linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)"
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarfieldMetricsSlideLayout