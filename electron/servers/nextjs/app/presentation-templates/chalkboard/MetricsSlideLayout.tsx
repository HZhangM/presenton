import React from 'react'
import * as z from "zod";

export const layoutId = 'chalkboard-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A chalkboard-themed slide showcasing 2-4 key numeric metrics with chalk-style typography and hand-drawn decorations.'

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
            label: 'Students Taught',
            description: 'Successfully educated over 150 students across various subjects and grade levels.'
        },
        {
            value: '98%',
            label: 'Pass Rate',
            description: 'Achieved an outstanding 98% pass rate through dedicated teaching methods.'
        },
        {
            value: '25',
            label: 'Courses Offered',
            description: 'Comprehensive curriculum covering 25 different courses and subjects.'
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

const ChalkboardMetricsSlideLayout: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #e8e8d0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative chalk dust dots */}
                <div className="absolute top-16 left-20 w-2 h-2 rounded-full opacity-30" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                <div className="absolute top-32 right-24 w-1 h-1 rounded-full opacity-20" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                <div className="absolute bottom-20 left-16 w-1.5 h-1.5 rounded-full opacity-25" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                <div className="absolute bottom-40 right-32 w-1 h-1 rounded-full opacity-30" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>

                {/* Chalk star decorations */}
                <div className="absolute top-24 right-16 text-2xl opacity-20" style={{ color: 'var(--primary-color, #f2c94c)' }}>✦</div>
                <div className="absolute bottom-32 left-12 text-xl opacity-15" style={{ color: 'var(--primary-color, #f2c94c)' }}>✧</div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center">
                    <div className="space-y-16">
                        {/* Title with hand-drawn underline */}
                        <div className="text-center">
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #e8e8d0)",
                                    borderBottom: "3px solid var(--primary-color, #f2c94c)",
                                    borderBottomStyle: "wavy"
                                }} 
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold inline-block pb-2"
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-center w-full max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Metric Value - Large chalk number */}
                                        <div 
                                            style={{ 
                                                color: "var(--primary-color, #f2c94c)",
                                                fontFamily: "var(--heading-font-family, Caveat)"
                                            }} 
                                            className="text-6xl sm:text-7xl lg:text-8xl font-bold"
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Label with wavy underline */}
                                        <div 
                                            className="text-xl font-semibold pb-1"
                                            style={{ 
                                                color: "var(--background-text, #e8e8d0)",
                                                fontFamily: "var(--heading-font-family, Caveat)",
                                                borderBottom: "2px solid var(--stroke, rgba(245, 240, 232, 0.25))",
                                                borderBottomStyle: "wavy"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Description Card with chalk outline */}
                                        <div
                                            className="rounded p-4 lg:p-5 text-center mt-4 max-w-xs mx-auto"
                                            style={{ 
                                                border: "1px dashed rgba(255,255,255,0.2)",
                                                background: "rgba(255,255,255,0.05)",
                                                borderRadius: "4px"
                                            }}
                                        >
                                            <p 
                                                style={{ 
                                                    color: "var(--background-text, #e8e8d0)",
                                                    fontFamily: "var(--body-font-family, Patrick Hand)"
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

                {/* Dashed divider line at bottom */}
                <div 
                    className="absolute bottom-8 left-20 right-20 h-px opacity-30"
                    style={{
                        borderBottom: "dashed 2px rgba(255,255,255,0.3)"
                    }}
                ></div>
            </div>
        </>
    )
}

export default ChalkboardMetricsSlideLayout