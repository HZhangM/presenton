import React from 'react'
import * as z from "zod";

export const layoutId = 'japanese-ukiyoe-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in traditional Japanese Ukiyo-e aesthetic'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
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
            value: '150+',
            label: 'Clients Served',
            description: 'Building trusted relationships across diverse industries with dedication and excellence in every partnership.'
        },
        {
            value: '95%',
            label: 'Satisfaction Rate',
            description: 'Consistently delivering exceptional service quality that exceeds expectations and builds lasting trust.'
        },
        {
            value: '$2.5M',
            label: 'Revenue Growth',
            description: 'Steady financial progress reflecting strong market position and sustainable business practices.'
        },
        {
            value: '24/7',
            label: 'Support Available',
            description: 'Round-the-clock assistance ensuring seamless operations and immediate response to client needs.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

export type MetricsSlideData = z.infer<typeof Schema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const JapaneseUkiyoeMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Shippori Mincho)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a1a3a)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-8 w-3 h-3 rounded-full opacity-80" style={{ background: "var(--primary-color, #c23b22)" }}></div>
                <div className="absolute top-24 right-16 w-2 h-2 rounded-full opacity-60" style={{ background: "var(--primary-color, #c23b22)" }}></div>
                
                <div className="absolute bottom-16 left-8 w-24 h-px opacity-30" style={{ background: "var(--background-text, #1a1a3a)" }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full" style={{ background: "var(--background-text, #1a1a3a)" }}></div>
                </div>

                <svg className="absolute top-1/4 left-4 w-16 h-8 opacity-20" viewBox="0 0 64 32" fill="none">
                    <path d="M0 16C8 8 16 24 24 16C32 8 40 24 48 16C56 8 64 16 64 16" stroke="var(--background-text, #1a1a3a)" strokeWidth="1" fill="none"/>
                </svg>

                {/* Main Content */}
                <div className="px-8 py-12 flex flex-col h-full">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-3xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #1a1a3a)",
                                fontFamily: "var(--heading-font-family, Shippori Mincho)"
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div className="w-16 h-px mx-auto" style={{ background: "var(--stroke, rgba(30, 30, 80, 0.15))" }}></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="p-4 rounded text-center"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 255, 250, 0.7))", 
                                        border: "1px solid rgba(30,30,80,0.08)",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <div 
                                        className="text-sm mb-2"
                                        style={{ 
                                            color: "var(--background-text, #1a1a3a)",
                                            fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    
                                    <div 
                                        className="text-3xl font-bold mb-3"
                                        style={{ 
                                            color: "var(--primary-color, #c23b22)",
                                            fontFamily: "var(--heading-font-family, Shippori Mincho)"
                                        }}
                                    >
                                        {metric.value}
                                    </div>
                                    
                                    <p 
                                        className="text-xs leading-relaxed line-clamp-3"
                                        style={{ 
                                            color: "var(--background-text, #1a1a3a)",
                                            fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                        }}
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

export default JapaneseUkiyoeMetricsSlide