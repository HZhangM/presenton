import React from 'react'
import * as z from "zod";

export const layoutId = 'botanical-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide layout for showcasing key business metrics with large numbers and descriptive text boxes in a botanical garden theme.'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Company Traction').meta({
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
            label: 'Clients Onboarded',
            description: 'We have successfully built a diverse client base, gaining trust across industries.'
        },
        {
            value: '200+',
            label: 'Projects Completed',
            description: 'Delivering comprehensive projects that consistently meet evolving client needs.'
        },
        {
            value: '95%',
            label: 'Client Satisfaction',
            description: 'With a strong focus on customer success, we maintain exceptional satisfaction rates.'
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

const BotanicalMetricsSlideLayout: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-medium" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative botanical elements */}
                <div className="absolute top-0 left-0 w-96 h-full opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 720" fill="none">
                        <path d="M50 100C75 120 100 140 125 160C150 180 175 200 200 220" stroke="var(--primary-color, #558b2f)" strokeWidth="2" fill="none" opacity="0.3"/>
                        <path d="M30 200C55 220 80 240 105 260C130 280 155 300 180 320" stroke="var(--primary-color, #558b2f)" strokeWidth="1.5" fill="none" opacity="0.4"/>
                        <circle cx="125" cy="160" r="4" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                        <circle cx="105" cy="260" r="3" fill="var(--primary-color, #558b2f)" opacity="0.5"/>
                        <path d="M120 155L130 150L125 165Z" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                        <path d="M100 255L110 250L105 265Z" fill="var(--primary-color, #558b2f)" opacity="0.5"/>
                    </svg>
                </div>

                <div className="absolute bottom-0 right-0 w-80 h-64 opacity-15 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                        <path d="M150 50C170 70 190 90 190 110C190 130 170 150 150 170" stroke="var(--primary-color, #558b2f)" strokeWidth="2" fill="none"/>
                        <path d="M170 30C190 50 200 70 200 90" stroke="var(--primary-color, #558b2f)" strokeWidth="1.5" fill="none"/>
                        <path d="M145 45L155 40L150 55Z" fill="var(--primary-color, #558b2f)"/>
                        <path d="M165 25L175 20L170 35Z" fill="var(--primary-color, #558b2f)"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #2d3a2e)",
                                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                                }} 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                            >
                                {slideData?.title || 'Company Traction'}
                            </h1>
                            <div className="mt-4 flex justify-center">
                                <div className="w-24 h-px" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
                                <div className="w-2 h-2 rounded-full mx-2" style={{ background: "var(--primary-color, #558b2f)" }}></div>
                                <div className="w-24 h-px" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-10 place-content-center place-items-center`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6 max-w-xs">
                                        {/* Metric Card */}
                                        <div 
                                            className="p-8 rounded-xl border text-center"
                                            style={{ 
                                                background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                                                border: "1px solid var(--stroke, rgba(85, 139, 47, 0.2))"
                                            }}
                                        >
                                            {/* Large Metric Value */}
                                            <div 
                                                style={{ color: "var(--primary-color, #558b2f)" }} 
                                                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label */}
                                            <div 
                                                className="text-lg font-medium mb-4"
                                                style={{ 
                                                    color: "var(--background-text, #2d3a2e)",
                                                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                                                }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Small decorative leaf */}
                                            <div className="flex justify-center mb-4">
                                                <div className="w-6 h-1 rounded-full" style={{ background: "var(--primary-color, #558b2f)", opacity: 0.3 }}></div>
                                            </div>

                                            {/* Description */}
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #2d3a2e)",
                                                    fontFamily: "var(--body-font-family, Lato)"
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

export default BotanicalMetricsSlideLayout