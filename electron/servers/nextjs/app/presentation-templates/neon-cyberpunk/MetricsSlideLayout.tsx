import React from 'react'
import * as z from "zod";

export const layoutId = 'neon-cyberpunk-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A cyberpunk-themed slide for showcasing key numeric metrics with neon glow effects and futuristic styling'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('System Metrics').meta({
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
            value: '99.9%',
            label: 'UPTIME STATUS',
            description: 'Neural network maintains optimal performance with minimal system degradation across all nodes.'
        },
        {
            value: '2.8M',
            label: 'DATA PROCESSED',
            description: 'Advanced algorithms process massive data streams in real-time with quantum-level precision.'
        },
        {
            value: '147',
            label: 'ACTIVE NODES',
            description: 'Distributed network operates seamlessly across multiple secure connection points globally.'
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
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Orbitron)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wider"
                                        style={{ 
                                            color: 'var(--primary-color, #ff2d95)',
                                            textShadow: '0 0 10px var(--primary-color, #ff2d95)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'CYBER_CORP'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 left-0 w-1 h-full opacity-60"
                    style={{ 
                        background: 'linear-gradient(180deg, var(--primary-color, #ff2d95), #00ffff)',
                        boxShadow: '0 0 20px var(--primary-color, #ff2d95)'
                    }}
                />
                
                <div className="absolute top-6 left-8 space-y-2 opacity-30">
                    <div 
                        className="w-12 h-px"
                        style={{ 
                            background: 'var(--primary-color, #ff2d95)',
                            boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                        }}
                    />
                    <div 
                        className="w-8 h-px"
                        style={{ 
                            background: '#00ffff',
                            boxShadow: '0 0 8px #00ffff'
                        }}
                    />
                    <div 
                        className="w-16 h-px"
                        style={{ 
                            background: 'var(--primary-color, #ff2d95)',
                            boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                        }}
                    />
                </div>

                <div className="absolute top-6 right-8 text-xs opacity-50" style={{ color: 'var(--background-text, #e0e0f0)' }}>
                    [ SYSTEM_STATUS: ONLINE ]
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 opacity-40">
                    <div 
                        className="absolute top-0 left-0 w-full h-0.5"
                        style={{ background: 'var(--stroke, rgba(255, 45, 149, 0.3))' }}
                    />
                    <div 
                        className="absolute top-0 left-0 w-0.5 h-full"
                        style={{ background: 'var(--stroke, rgba(255, 45, 149, 0.3))' }}
                    />
                </div>

                <div className="absolute bottom-4 right-4 w-8 h-8 opacity-40">
                    <div 
                        className="absolute bottom-0 right-0 w-full h-0.5"
                        style={{ background: 'var(--stroke, rgba(255, 45, 149, 0.3))' }}
                    />
                    <div 
                        className="absolute bottom-0 right-0 w-0.5 h-full"
                        style={{ background: 'var(--stroke, rgba(255, 45, 149, 0.3))' }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-16">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider uppercase"
                                style={{ 
                                    color: "var(--background-text, #e0e0f0)",
                                    textShadow: '0 0 20px var(--primary-color, #ff2d95)'
                                }}
                            >
                                {slideData?.title || 'SYSTEM METRICS'}
                            </h1>
                            <div 
                                className="w-32 h-px mx-auto mt-4"
                                style={{ 
                                    background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)',
                                    boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                                }}
                            />
                        </div>

                        {/* Metrics Grid */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-8 lg:gap-12 place-content-center place-items-center w-full max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6 w-full">
                                        {/* Metric Value */}
                                        <div 
                                            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider"
                                            style={{ 
                                                color: index % 2 === 0 ? "var(--primary-color, #ff2d95)" : "#00ffff",
                                                textShadow: `0 0 25px ${index % 2 === 0 ? "var(--primary-color, #ff2d95)" : "#00ffff"}`
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Label */}
                                        <div 
                                            className="text-sm font-bold tracking-widest uppercase"
                                            style={{ 
                                                color: "var(--background-text, #e0e0f0)",
                                                fontFamily: "var(--body-font-family, Share Tech Mono)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Description Card */}
                                        <div
                                            className="p-6 text-center"
                                            style={{ 
                                                border: '1px solid rgba(255,45,149,0.2)',
                                                background: 'rgba(10,10,30,0.7)',
                                                backdropFilter: 'blur(8px)',
                                                borderRadius: '4px',
                                                boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                                            }}
                                        >
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #e0e0f0)",
                                                    fontFamily: "var(--body-font-family, Share Tech Mono)"
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

export default MetricsSlideLayout