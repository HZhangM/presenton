import React from 'react'
import * as z from "zod";

export const layoutId = 'retro-synthwave-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = '80s retrowave aesthetic metrics slide with neon gradients, grid horizon, and bold display fonts showcasing 2-4 key numeric metrics'

const Schema = z.object({
    title: z.string().min(3).max(40).default('SYSTEM METRICS').meta({
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
            value: '2.5K',
            label: 'NEURAL NODES ACTIVE',
            description: 'Advanced AI processing units operating at peak efficiency across the digital network infrastructure.'
        },
        {
            value: '98.7%',
            label: 'SYSTEM UPTIME',
            description: 'Continuous operation maintaining ultra-high reliability standards for mission-critical applications.'
        },
        {
            value: '1.2TB',
            label: 'DATA PROCESSED',
            description: 'Massive volume of information analyzed through quantum computing algorithms in real-time.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

export type MetricsSlideData = z.infer<typeof Schema>

interface RetroSynthwaveMetricsSlideProps {
    data?: Partial<MetricsSlideData>
}

const RetroSynthwaveMetricsSlide: React.FC<RetroSynthwaveMetricsSlideProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bungee)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold tracking-wider" style={{ color: 'var(--background-text, #f0e0ff)' }}>
                                    {(slideData as any)?.__companyName__ || 'NEON CORP'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Grid Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1280 128" fill="none">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <line key={i} x1={i * 64} y1="0" x2={i * 64} y2="128" stroke="var(--primary-color, #ff3366)" strokeWidth="1" opacity="0.3" />
                        ))}
                        {Array.from({ length: 8 }).map((_, i) => (
                            <line key={i} x1="0" y1={i * 16} x2="1280" y2={i * 16} stroke="var(--primary-color, #ff3366)" strokeWidth="1" opacity="0.2" />
                        ))}
                    </svg>
                </div>

                {/* Scan Lines */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--primary-color, #ff3366) 2px, var(--primary-color, #ff3366) 4px)'
                }}></div>

                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-12 pb-10 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-5xl font-bold tracking-wider"
                                style={{
                                    background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 20px rgba(255, 51, 102, 0.5)'
                                }}
                            >
                                {slideData?.title || 'SYSTEM METRICS'}
                            </h1>
                        </div>

                        {/* Gradient Divider */}
                        <div className="w-full h-0.5" style={{
                            background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff, var(--primary-color, #ff3366))'
                        }}></div>

                        {/* Metrics Section */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 w-full max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Metric Card */}
                                        <div 
                                            className="p-5"
                                            style={{
                                                border: '2px solid rgba(255,51,102,0.3)',
                                                background: 'rgba(20,0,40,0.6)',
                                                backdropFilter: 'blur(4px)'
                                            }}
                                        >
                                            {/* Label */}
                                            <div 
                                                className="text-sm font-bold mb-4 tracking-widest"
                                                style={{ 
                                                    color: "var(--background-text, #f0e0ff)",
                                                    fontFamily: "var(--body-font-family, Rajdhani)"
                                                }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Large Metric Value */}
                                            <div 
                                                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                                                style={{
                                                    background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    textShadow: '0 0 20px rgba(255, 51, 102, 0.5)'
                                                }}
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Description */}
                                            <p 
                                                className="text-sm leading-relaxed font-medium"
                                                style={{ 
                                                    color: "var(--background-text, #f0e0ff)",
                                                    fontFamily: "var(--body-font-family, Rajdhani)"
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

export default RetroSynthwaveMetricsSlide