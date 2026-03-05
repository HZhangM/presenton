import React from 'react'
import * as z from "zod";

export const layoutId = 'candy-pastel-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A playful pastel-themed slide for showcasing key numeric metrics with bubbly typography and rounded shapes.'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Sweet Success Metrics').meta({
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
            label: 'Happy Customers',
            description: 'Building sweet relationships with clients across different industries and creating lasting partnerships.'
        },
        {
            value: '95%',
            label: 'Success Rate',
            description: 'Consistently delivering delightful results that exceed expectations and bring joy to our clients.'
        },
        {
            value: '$2.5M',
            label: 'Revenue Growth',
            description: 'Sweet success in generating sustainable revenue growth through innovative solutions and partnerships.'
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
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Fredoka)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full" style={{ background: "var(--card-color, rgba(255, 255, 255, 0.7))", border: "2px solid var(--stroke, rgba(171, 71, 188, 0.2))" }}>
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 rounded-full" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #4a3560)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-16 w-20 h-20 opacity-20">
                    <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)' }}></div>
                </div>
                <div className="absolute top-32 left-12 w-12 h-12 opacity-15">
                    <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #a8edea, #fed6e3)' }}></div>
                </div>
                <div className="absolute bottom-20 right-20 w-16 h-16 opacity-10">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="var(--primary-color, #ab47bc)">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                <div className="absolute bottom-32 left-16 w-14 h-14 opacity-15">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#ffd93d">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ color: "var(--background-text, #4a3560)" }} 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                            >
                                {slideData?.title || 'Sweet Success Metrics'}
                            </h1>
                            <div className="flex justify-center mt-4">
                                <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #ff9a9e, #fecfef, #a8edea)' }}></div>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-center`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6 max-w-xs">
                                        {/* Metric Card */}
                                        <div 
                                            className="p-8 rounded-3xl transform hover:scale-105 transition-transform duration-300"
                                            style={{ 
                                                background: "var(--card-color, rgba(255, 255, 255, 0.7))",
                                                border: "2px solid var(--stroke, rgba(171, 71, 188, 0.2))",
                                                borderRadius: "24px",
                                                boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
                                            }}
                                        >
                                            {/* Label Pill */}
                                            <div className="mb-6">
                                                <span 
                                                    className="px-4 py-2 rounded-full text-sm font-semibold"
                                                    style={{ 
                                                        background: "var(--primary-color, #ab47bc)",
                                                        color: "var(--primary-text, #ffffff)"
                                                    }}
                                                >
                                                    {metric.label}
                                                </span>
                                            </div>

                                            {/* Large Metric Value */}
                                            <div 
                                                style={{ color: "var(--primary-color, #ab47bc)" }} 
                                                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Description */}
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #4a3560)",
                                                    fontFamily: "var(--body-font-family, Quicksand)"
                                                }} 
                                                className="text-sm leading-relaxed font-medium"
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