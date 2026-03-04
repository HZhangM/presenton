import React from 'react'
import * as z from "zod";

export const layoutId = 'blueprint-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A blueprint-themed slide showcasing 2-4 key numeric metrics with technical drawing aesthetics and monospace typography'

const blueprintMetricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('System Performance').meta({
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
            value: '99.8%',
            label: 'SYSTEM_UPTIME',
            description: 'Critical infrastructure maintains operational status with minimal service interruption across all monitored endpoints.'
        },
        {
            value: '2.3ms',
            label: 'AVG_RESPONSE',
            description: 'Server response latency optimized through enhanced caching protocols and distributed architecture implementation.'
        },
        {
            value: '1.2TB',
            label: 'DATA_PROCESSED',
            description: 'Daily throughput capacity demonstrates robust processing capabilities under peak operational loads.'
        },
        {
            value: '847',
            label: 'ACTIVE_NODES',
            description: 'Distributed network topology ensures redundancy and load distribution across geographical regions.'
        }
    ]).meta({
        description: "List of key technical metrics to display",
    })
})

export const Schema = blueprintMetricsSlideSchema

export type BlueprintMetricsSlideData = z.infer<typeof blueprintMetricsSlideSchema>

interface BlueprintMetricsSlideLayoutProps {
    data?: Partial<BlueprintMetricsSlideData>
}

const BlueprintMetricsSlideLayout: React.FC<BlueprintMetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count <= 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-2 md:grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                }}
            >
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--stroke, rgba(77,171,247,0.35))" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Crosshair Markers */}
                <div className="absolute top-4 left-4 text-lg font-bold" style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</div>
                <div className="absolute top-4 right-4 text-lg font-bold" style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</div>
                <div className="absolute bottom-4 left-4 text-lg font-bold" style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</div>
                <div className="absolute bottom-4 right-4 text-lg font-bold" style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div 
                            className="inline-block px-3 py-1 text-xs uppercase tracking-wider border-2"
                            style={{ 
                                border: "1px dashed rgba(77,171,247,0.35)", 
                                background: "rgba(77,171,247,0.06)",
                                color: "var(--primary-text, #0d2137)",
                                borderRadius: "2px"
                            }}
                        >
                            {(slideData as any)?.__companyName__ || 'ENGINEERING_DEPT'}
                        </div>
                    </div>
                )}

                {/* Title Block */}
                <div className="relative z-10 px-8 pt-20 pb-8">
                    <div 
                        className="inline-block px-4 py-2 border-2"
                        style={{ 
                            border: "1px dashed rgba(77,171,247,0.4)",
                            background: "var(--card-color, rgba(77,171,247,0.08))",
                            borderRadius: "2px"
                        }}
                    >
                        <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--background-text, #c8d8e8)" }}>
                            SYSTEM_METRICS_v2.1
                        </div>
                        <h1 className="text-4xl font-bold uppercase tracking-wide" style={{ color: "var(--primary-color, #4dabf7)" }}>
                            {slideData?.title || 'SYSTEM PERFORMANCE'}
                        </h1>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="relative z-10 px-8 pb-8 flex-1">
                    <div className={`${getLayoutClasses(metrics.length)} gap-6 h-full`}>
                        {metrics.map((metric, index) => (
                            <div 
                                key={index}
                                className="p-6 border-2 flex flex-col justify-center"
                                style={{ 
                                    border: "1px dashed rgba(77,171,247,0.35)", 
                                    background: "rgba(77,171,247,0.06)",
                                    borderRadius: "2px",
                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                }}
                            >
                                {/* Metric Header */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</span>
                                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--background-text, #c8d8e8)" }}>
                                        {metric.label}
                                    </div>
                                </div>

                                {/* Large Value */}
                                <div className="text-3xl font-bold mb-4 tracking-tight" style={{ color: "var(--primary-color, #4dabf7)" }}>
                                    {metric.value}
                                </div>

                                {/* Technical Divider */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</span>
                                    <div 
                                        className="flex-1 h-px"
                                        style={{ 
                                            background: "repeating-linear-gradient(to right, var(--stroke, rgba(77,171,247,0.35)) 0, var(--stroke, rgba(77,171,247,0.35)) 5px, transparent 5px, transparent 10px)"
                                        }}
                                    ></div>
                                    <span style={{ color: "var(--stroke, rgba(77,171,247,0.35))" }}>+</span>
                                </div>

                                {/* Description */}
                                <div className="text-xs leading-relaxed" style={{ color: "var(--background-text, #c8d8e8)" }}>
                                    {metric.description}
                                </div>

                                {/* Technical Annotation */}
                                <div className="mt-3 text-xs opacity-60" style={{ color: "var(--background-text, #c8d8e8)" }}>
                                    [{String(index + 1).padStart(2, '0')}]_METRIC_DATA
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Footer */}
                <div className="absolute bottom-2 left-8 right-8">
                    <div 
                        className="flex items-center gap-4 text-xs"
                        style={{ color: "var(--background-text, #c8d8e8)" }}
                    >
                        <span>SCALE: 1:1</span>
                        <div 
                            className="flex-1 h-px"
                            style={{ 
                                background: "repeating-linear-gradient(to right, var(--stroke, rgba(77,171,247,0.35)) 0, var(--stroke, rgba(77,171,247,0.35)) 3px, transparent 3px, transparent 6px)"
                            }}
                        ></div>
                        <span>REV: {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueprintMetricsSlideLayout