import React from 'react'
import * as z from "zod";

export const layoutId = 'slate-minimal-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in a clean slate minimal design'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Performance Metrics').meta({
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
            value: '156K',
            label: 'Monthly Active Users',
            description: 'Consistent growth in user engagement with 23% increase from last quarter across all platform segments.'
        },
        {
            value: '99.8%',
            label: 'System Uptime',
            description: 'Mission-critical reliability maintained through robust infrastructure and proactive monitoring systems.'
        },
        {
            value: '$2.4M',
            label: 'Annual Revenue',
            description: 'Revenue milestone achieved through strategic partnerships and optimized conversion funnels.'
        },
        {
            value: '47ms',
            label: 'Average Response Time',
            description: 'Performance optimization delivering exceptional user experience across global edge locations.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

export type SlateMinimalMetricsSlideData = z.infer<typeof Schema>

interface SlateMinimalMetricsSlideProps {
    data?: Partial<SlateMinimalMetricsSlideData>
}

const SlateMinimalMetricsSlide: React.FC<SlateMinimalMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getGridCols = (count: number) => {
        return count <= 2 ? 'grid-cols-2' : 'grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Inter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1e293b)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-8 w-2 h-2 rounded-full opacity-40" style={{ background: 'var(--primary-color, #3b82f6)' }}></div>
                <div className="absolute top-24 right-12 w-1 h-1 rounded-full opacity-30" style={{ background: 'var(--primary-color, #3b82f6)' }}></div>
                <div className="absolute bottom-20 left-8 w-16 h-0.5 opacity-20" style={{ background: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}></div>

                {/* Main Content */}
                <div className="px-8 pt-16 pb-8 h-full flex flex-col">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-3xl font-semibold mb-4"
                            style={{ color: "var(--background-text, #1e293b)" }}
                        >
                            {slideData?.title || 'Key Performance Metrics'}
                        </h1>
                        <div className="w-12 h-px" style={{ background: 'var(--primary-color, #3b82f6)' }}></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center">
                        <div className={`grid ${getGridCols(metrics.length)} gap-6 w-full`}>
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="p-6 rounded-lg border"
                                    style={{ 
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                        border: '1px solid rgba(0,0,0,0.06)',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                    }}
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="w-1 h-12 rounded-sm flex-shrink-0" style={{ background: 'var(--primary-color, #3b82f6)' }}></div>
                                        <div className="flex-1 min-w-0">
                                            <div 
                                                className="text-sm font-medium mb-1"
                                                style={{ color: "var(--background-text, #1e293b)" }}
                                            >
                                                {metric.label}
                                            </div>
                                            <div 
                                                className="text-3xl font-bold"
                                                style={{ color: "var(--primary-color, #3b82f6)" }}
                                            >
                                                {metric.value}
                                            </div>
                                        </div>
                                    </div>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--background-text, #1e293b)", opacity: 0.7 }}
                                    >
                                        {metric.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlateMinimalMetricsSlide