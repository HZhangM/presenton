import React from 'react'
import * as z from "zod";

export const layoutId = 'pixel-retro-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A retro gaming pixel art style slide for showcasing key numeric metrics with 8-bit colors and blocky pixel typography'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('System Status').meta({
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
            label: 'Players Online',
            description: 'Active users connected to our gaming platform across all servers worldwide.'
        },
        {
            value: '200+',
            label: 'Levels Completed',
            description: 'Total game levels successfully cleared by our community of players.'
        },
        {
            value: '95%',
            label: 'Uptime Score',
            description: 'System reliability maintained at industry-leading performance standards.'
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

const PixelRetroMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div 
                            className="flex items-center gap-4 p-3"
                            style={{
                                border: "2px solid var(--stroke, rgba(80, 200, 120, 0.35))",
                                background: "var(--card-color, rgba(80, 200, 120, 0.08))"
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div 
                                    className="w-2 h-2 animate-pulse"
                                    style={{ background: "var(--primary-color, #50c878)" }}
                                ></div>
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-xs font-bold"
                                    style={{ 
                                        color: 'var(--background-text, #50c878)',
                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'RETRO CORP'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pixel decorative elements */}
                <div className="absolute top-20 left-8 opacity-20 z-10">
                    <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2"
                                style={{
                                    background: Math.random() > 0.7 ? "var(--primary-color, #50c878)" : "transparent"
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-20 right-8 opacity-20 z-10">
                    <div className="grid grid-cols-6 gap-1">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2"
                                style={{
                                    background: Math.random() > 0.8 ? "var(--stroke, rgba(80, 200, 120, 0.35))" : "transparent"
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-20 px-8 sm:px-12 lg:px-20 pt-16 pb-10 flex-1 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Title with terminal styling */}
                        <div className="text-center">
                            <div 
                                className="inline-block p-6 mb-4"
                                style={{
                                    border: "2px solid var(--stroke, rgba(80, 200, 120, 0.35))",
                                    background: "var(--card-color, rgba(80, 200, 120, 0.08))"
                                }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div 
                                        className="w-2 h-2"
                                        style={{ background: "var(--primary-color, #50c878)" }}
                                    ></div>
                                    <div 
                                        className="w-2 h-2"
                                        style={{ background: "var(--stroke, rgba(80, 200, 120, 0.35))" }}
                                    ></div>
                                    <div 
                                        className="w-2 h-2"
                                        style={{ background: "var(--stroke, rgba(80, 200, 120, 0.35))" }}
                                    ></div>
                                </div>
                                <h1 
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                                    style={{ 
                                        color: "var(--background-text, #50c878)",
                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                    }}
                                >
                                    {slideData?.title || 'SYSTEM STATUS'}
                                </h1>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 place-content-center place-items-center w-full`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6 w-full max-w-sm">
                                        {/* Metric Card */}
                                        <div
                                            className="p-6"
                                            style={{
                                                border: "2px solid var(--stroke, rgba(80, 200, 120, 0.35))",
                                                background: "var(--card-color, rgba(80, 200, 120, 0.08))"
                                            }}
                                        >
                                            {/* Label with pixel bullet */}
                                            <div className="flex items-center justify-center gap-2 mb-4">
                                                <div 
                                                    className="w-2 h-2"
                                                    style={{ background: "var(--primary-color, #50c878)" }}
                                                ></div>
                                                <div 
                                                    className="text-sm font-bold"
                                                    style={{ 
                                                        color: "var(--background-text, #50c878)",
                                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                                    }}
                                                >
                                                    {metric.label}
                                                </div>
                                            </div>

                                            {/* Large Metric Value */}
                                            <div 
                                                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                                                style={{ 
                                                    color: "var(--primary-color, #50c878)",
                                                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                                }}
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Dashed divider */}
                                            <div className="flex justify-center gap-1 mb-4">
                                                {Array.from({ length: 10 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 h-1"
                                                        style={{ background: "var(--stroke, rgba(80, 200, 120, 0.35))" }}
                                                    ></div>
                                                ))}
                                            </div>

                                            {/* Description */}
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #50c878)",
                                                    fontFamily: "var(--body-font-family, 'VT323')",
                                                    fontSize: "16px"
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

export default PixelRetroMetricsSlide