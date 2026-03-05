import React from 'react'
import * as z from "zod";

export const layoutId = 'arctic-ice-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in an arctic ice theme with frosted glass effects.'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Performance Metrics').meta({
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
            value: '247',
            label: 'Active Clients',
            description: 'Growing client base across multiple industries with consistent engagement and satisfaction rates.'
        },
        {
            value: '98.5%',
            label: 'Uptime',
            description: 'Industry-leading reliability ensuring continuous service availability for all customers.'
        },
        {
            value: '$3.2M',
            label: 'Revenue',
            description: 'Annual recurring revenue demonstrating strong market demand and sustainable growth.'
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
            <link
                href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-medium" style={{ color: 'var(--background-text, #1a3a50)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative crystal/ice elements */}
                <div className="absolute top-16 left-16 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,10 80,40 50,90 20,40" fill="var(--primary-color, #0288d1)" />
                        <polygon points="50,20 70,35 50,70 30,35" fill="transparent" stroke="var(--primary-color, #0288d1)" strokeWidth="1" />
                    </svg>
                </div>

                <div className="absolute bottom-20 right-20 w-16 h-16 opacity-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,5 75,25 75,75 50,95 25,75 25,25" fill="transparent" stroke="var(--stroke, rgba(2, 136, 209, 0.15))" strokeWidth="1" />
                        <polygon points="50,15 65,30 65,70 50,85 35,70 35,30" fill="transparent" stroke="var(--stroke, rgba(2, 136, 209, 0.15))" strokeWidth="1" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-20 flex flex-col justify-center h-full">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ color: "var(--background-text, #1a3a50)" }} 
                                className="text-5xl font-light tracking-wide"
                            >
                                {slideData?.title || 'Key Performance Metrics'}
                            </h1>
                            <div 
                                className="w-24 h-px mt-6 mx-auto"
                                style={{ background: "var(--primary-color, #0288d1)" }}
                            ></div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-12 max-w-5xl w-full`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Frosted glass card */}
                                        <div
                                            className="p-8 rounded-2xl"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.65)",
                                                backdropFilter: "blur(16px)",
                                                border: "1px solid rgba(255, 255, 255, 0.5)",
                                                borderRadius: "16px",
                                                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)"
                                            }}
                                        >
                                            {/* Metric Value */}
                                            <div 
                                                style={{ color: "var(--primary-color, #0288d1)" }} 
                                                className="text-6xl font-light mb-4"
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label */}
                                            <div 
                                                className="text-lg font-medium mb-6" 
                                                style={{ color: "var(--background-text, #1a3a50)" }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Description */}
                                            <div
                                                className="text-sm font-light leading-relaxed"
                                                style={{ color: "var(--background-text, #1a3a50)" }}
                                            >
                                                {metric.description}
                                            </div>
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