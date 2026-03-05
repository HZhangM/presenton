import React from 'react'
import * as z from "zod";

export const layoutId = 'glassmorphism-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A glassmorphism-themed slide showcasing 2-4 key numeric metrics with frosted glass cards and vibrant gradients'

const Schema = z.object({
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
            value: '150+',
            label: 'Active Users',
            description: 'Our platform has successfully onboarded over 150 active users, demonstrating strong market adoption and user engagement.'
        },
        {
            value: '95%',
            label: 'Satisfaction Rate',
            description: 'We maintain an exceptional 95% customer satisfaction rate through continuous product improvement and dedicated support.'
        },
        {
            value: '$2M',
            label: 'Revenue Growth',
            description: 'Achieved $2M in annual recurring revenue, showcasing our sustainable business model and market potential.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

type MetricsSlideData = z.infer<typeof Schema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const GlassmorphismMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 2) {
            return 'grid grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-3'
        } else if (count === 4) {
            return 'grid grid-cols-4'
        } else {
            return 'grid grid-cols-2'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6 z-30">
                        <div 
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
                            style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.2))",
                                backdropFilter: "blur(20px)",
                                border: "1px solid var(--stroke, rgba(255, 255, 255, 0.3))"
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold text-white">
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative frosted glass layers */}
                <div 
                    className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-30"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(40px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-20 right-20 w-48 h-48 rounded-2xl opacity-20 transform rotate-45"
                    style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(30px)",
                        border: "1px solid rgba(255, 255, 255, 0.25)"
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-10 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                            <div 
                                className="w-24 h-1 mx-auto rounded-full"
                                style={{ 
                                    background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)"
                                }}
                            ></div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 w-full max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div 
                                        key={index} 
                                        className="text-center p-5 rounded-3xl"
                                        style={{
                                            background: "var(--card-color, rgba(255, 255, 255, 0.2))",
                                            backdropFilter: "blur(20px)",
                                            border: "1px solid var(--stroke, rgba(255, 255, 255, 0.3))",
                                            boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        {/* Label */}
                                        <div className="text-sm text-white font-medium opacity-90 mb-4">
                                            {metric.label}
                                        </div>

                                        {/* Large Metric Value */}
                                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                            {metric.value}
                                        </div>

                                        {/* Description */}
                                        <div className="border-t border-white border-opacity-30 pt-4">
                                            <p className="text-xs sm:text-sm text-white opacity-90 leading-relaxed">
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

export default GlassmorphismMetricsSlide