import React from 'react'
import * as z from "zod";

export const layoutId = 'woodgrain-cabin-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A rustic cabin-themed slide showcasing 2-4 key numeric metrics with warm wood plank texture and handcrafted typography'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Mountain Metrics').meta({
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
            label: 'Trails Mapped',
            description: 'Our experienced guides have explored and charted wilderness paths across three mountain ranges.'
        },
        {
            value: '98%',
            label: 'Guest Satisfaction',
            description: 'Visitors consistently rate their cabin experience as exceptional, creating lasting memories.'
        },
        {
            value: '15+',
            label: 'Years Operating',
            description: 'A trusted family business serving adventurers with authentic mountain hospitality since 2009.'
        },
        {
            value: '$2.1M',
            label: 'Revenue Growth',
            description: 'Steady business expansion through quality service and word-of-mouth recommendations.'
        }
    ]).meta({
        description: "List of key business metrics to display (2-4 items)",
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
        return 'grid grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Amatic SC')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--primary-text, #2a1a0e)', fontFamily: 'var(--body-font-family, Cabin)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 opacity-20">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 8L28 16L32 8L36 16L40 8V40H8V8L12 16L16 8L20 16L24 8Z" 
                              stroke="var(--primary-color, #d4a76a)" strokeWidth="2" fill="none"/>
                        <circle cx="24" cy="28" r="8" stroke="var(--primary-color, #d4a76a)" strokeWidth="1" fill="none"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8 opacity-15">
                    <div style={{ 
                        width: '60px', 
                        height: '2px', 
                        backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-4px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '8px',
                            height: '8px',
                            fontSize: '8px',
                            color: 'var(--primary-color, #d4a76a)'
                        }}>✕</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 pt-16 pb-8 flex-1 flex flex-col">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-4" style={{ 
                            color: "var(--background-text, #f5efe6)",
                            fontFamily: "var(--heading-font-family, 'Amatic SC')"
                        }}>
                            {slideData?.title || 'Mountain Metrics'}
                        </h1>
                        <div style={{ 
                            width: '120px', 
                            height: '2px', 
                            backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))',
                            position: 'relative',
                            margin: '0 auto'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-4px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '8px',
                                height: '8px',
                                fontSize: '8px',
                                color: 'var(--primary-color, #d4a76a)'
                            }}>✕</div>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className={`${getLayoutClasses(metrics.length)} gap-4 max-w-5xl w-full`}>
                            {metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div 
                                        className="p-5 rounded-lg border shadow-sm"
                                        style={{ 
                                            background: "var(--card-color, rgba(255, 250, 240, 0.9))",
                                            border: "2px solid var(--stroke, rgba(212, 167, 106, 0.3))",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        <div 
                                            className="text-sm font-semibold mb-2"
                                            style={{ 
                                                color: "var(--primary-text, #2a1a0e)",
                                                fontFamily: "var(--body-font-family, Cabin)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        <div 
                                            className="text-4xl font-bold mb-3"
                                            style={{ 
                                                color: "var(--primary-color, #d4a76a)",
                                                fontFamily: "var(--heading-font-family, 'Amatic SC')"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        <div 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                                color: "var(--primary-text, #2a1a0e)",
                                                fontFamily: "var(--body-font-family, Cabin)"
                                            }}
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
        </>
    )
}

export default MetricsSlideLayout