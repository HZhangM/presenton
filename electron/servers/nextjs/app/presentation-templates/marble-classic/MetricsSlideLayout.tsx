import React from 'react'
import * as z from "zod";

export const layoutId = 'marble-classic-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in marble classic theme'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('150%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).default('Significant increase in annual revenue through strategic partnerships and market expansion initiatives across multiple sectors.').meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '150%',
            description: 'Significant increase in annual revenue through strategic partnerships and market expansion initiatives across multiple sectors.'
        },
        {
            label: 'Client Retention',
            value: '95%',
            description: 'Exceptional client satisfaction and loyalty demonstrated through long-term partnerships and consistent service excellence.'
        },
        {
            label: 'Market Reach',
            value: '25+',
            description: 'Expanded presence across diverse markets and geographical regions, establishing strong foundation for continued growth.'
        },
        {
            label: 'Team Growth',
            value: '200%',
            description: 'Strategic talent acquisition and team expansion to support increased demand and enhanced service delivery capabilities.'
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

const MarbleClassicMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold tracking-wide" style={{ color: 'var(--background-text, #2a2a2a)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                <div className="absolute top-8 left-8 w-32 h-32 opacity-5">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <rect x="40" y="40" width="20" height="20" fill="var(--primary-color, #4a4a4a)" />
                        <rect x="20" y="20" width="20" height="20" fill="var(--primary-color, #4a4a4a)" />
                        <rect x="60" y="20" width="20" height="20" fill="var(--primary-color, #4a4a4a)" />
                        <rect x="20" y="60" width="20" height="20" fill="var(--primary-color, #4a4a4a)" />
                        <rect x="60" y="60" width="20" height="20" fill="var(--primary-color, #4a4a4a)" />
                    </svg>
                </div>

                <div className="absolute top-8 right-8 w-16 h-16 opacity-5">
                    <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                        <circle cx="25" cy="25" r="20" stroke="var(--primary-color, #4a4a4a)" strokeWidth="2" fill="none" />
                        <circle cx="25" cy="25" r="8" fill="var(--primary-color, #4a4a4a)" />
                    </svg>
                </div>

                <div className="relative z-10 px-12 pt-16 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="space-y-8 flex-1 flex flex-col justify-center">
                        <div className="text-center space-y-4">
                            <h1 
                                className="text-4xl font-semibold tracking-wide"
                                style={{ 
                                    color: "var(--background-text, #2a2a2a)",
                                    letterSpacing: "0.05em"
                                }}
                            >
                                {slideData?.title || 'Key Metrics'}
                            </h1>
                            
                            <div className="flex items-center justify-center gap-4">
                                <div className="h-px bg-current opacity-20 flex-1 max-w-16"></div>
                                <div className="w-2 h-2 rotate-45 border border-current opacity-30"></div>
                                <div className="h-px bg-current opacity-20 flex-1 max-w-16"></div>
                            </div>
                        </div>

                        <div className="flex justify-center flex-1">
                            <div className="grid grid-cols-2 gap-6 place-content-center w-full max-w-4xl">
                                {metrics.map((metric, index) => (
                                    <div 
                                        key={index} 
                                        className="text-center space-y-3 p-6 rounded"
                                        style={{ 
                                            background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                                            border: "1px solid var(--stroke, rgba(0, 0, 0, 0.1))",
                                            borderRadius: "4px",
                                            boxShadow: "0 2px 16px rgba(0,0,0,0.04)"
                                        }}
                                    >
                                        <div 
                                            className="text-sm font-medium tracking-wide"
                                            style={{ 
                                                color: "var(--primary-color, #4a4a4a)",
                                                fontFamily: "var(--body-font-family, Montserrat)",
                                                letterSpacing: "0.025em"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        <div 
                                            className="text-4xl font-bold"
                                            style={{ color: "var(--background-text, #2a2a2a)" }}
                                        >
                                            {metric.value}
                                        </div>

                                        <div 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                                color: "var(--primary-color, #4a4a4a)",
                                                fontFamily: "var(--body-font-family, Montserrat)"
                                            }}
                                        >
                                            {metric.description}
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

export default MarbleClassicMetricsSlide