import React from 'react'
import * as z from "zod";

export const layoutId = 'sunset-warm-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A warm sunset-themed slide showcasing 2-4 key numeric metrics with labels and descriptions in glass-morphism cards.'

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
            value: '150+',
            label: 'Happy Customers',
            description: 'Building trust and lasting relationships through exceptional service and dedicated support across all touchpoints.'
        },
        {
            value: '95%',
            label: 'Customer Satisfaction',
            description: 'Consistently exceeding expectations with personalized solutions and responsive customer care teams.'
        },
        {
            value: '$2.5M',
            label: 'Annual Revenue',
            description: 'Steady growth driven by innovative products and expanding market presence in key industry segments.'
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

const SunsetWarmMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Nunito)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #3d1e00)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative warm glow circles */}
                <div className="absolute top-20 right-32 w-64 h-64 rounded-full opacity-20" style={{
                    background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }}></div>

                <div className="absolute bottom-16 left-24 w-48 h-48 rounded-full opacity-15" style={{
                    background: 'radial-gradient(circle, #ff8a50 0%, transparent 70%)',
                    filter: 'blur(30px)'
                }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-12 pt-12 pb-10 flex flex-col justify-center h-full">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ color: "var(--background-text, #3d1e00)" }} 
                                className="text-5xl lg:text-6xl font-bold"
                            >
                                {slideData?.title || 'Key Performance Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Cards */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        {/* Glass-morphism card */}
                                        <div 
                                            className="w-full p-5 text-center space-y-4"
                                            style={{
                                                background: 'rgba(255,255,255,0.55)',
                                                backdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255,255,255,0.4)',
                                                borderRadius: '20px',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                            }}
                                        >
                                            {/* Metric Value */}
                                            <div 
                                                style={{ color: "var(--primary-color, #e65100)" }} 
                                                className="text-5xl lg:text-6xl font-extrabold"
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label with pill background */}
                                            <div 
                                                className="inline-block px-4 py-2 rounded-full font-semibold text-sm"
                                                style={{ 
                                                    background: 'var(--primary-color, #e65100)',
                                                    color: 'var(--primary-text, #ffffff)'
                                                }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Description */}
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #3d1e00)",
                                                    fontFamily: "var(--body-font-family, 'Nunito Sans')"
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

                        {/* Gradient divider */}
                        <div 
                            className="w-full h-px mx-auto"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #e65100) 50%, transparent 100%)',
                                opacity: 0.3
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunsetWarmMetricsSlide