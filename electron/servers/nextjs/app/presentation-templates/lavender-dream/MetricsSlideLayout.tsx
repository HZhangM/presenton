import React from 'react'
import * as z from "zod";

export const layoutId = 'lavender-dream-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A soft lavender-themed slide showcasing 2-4 key numeric metrics with elegant typography and glass-morphism cards'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Growth Rate').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('250%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).default('Our platform has experienced remarkable growth this quarter, exceeding all expectations with sustainable momentum.').meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '250%',
            description: 'Our platform has experienced remarkable growth this quarter, exceeding all expectations with sustainable momentum.'
        },
        {
            label: 'Active Users',
            value: '15K+',
            description: 'A thriving community of engaged users who actively contribute to our platform ecosystem daily.'
        },
        {
            label: 'Customer Satisfaction',
            value: '98%',
            description: 'Exceptional customer experience with industry-leading satisfaction scores and positive feedback.'
        },
        {
            label: 'Market Share',
            value: '35%',
            description: 'Strong market position with significant competitive advantage in our target segments.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface LavenderDreamMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const LavenderDreamMetricsSlide: React.FC<LavenderDreamMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getGridCols = (count: number) => {
        return count <= 2 ? 'grid-cols-2' : 'grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />

            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-5">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-base font-medium" 
                                        style={{ 
                                            color: 'var(--background-text, #3a2050)',
                                            fontFamily: 'var(--body-font-family, Mulish)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-12 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                        <path 
                            d="M60 10 C90 30, 90 90, 60 110 C30 90, 30 30, 60 10 Z" 
                            fill="none" 
                            stroke="var(--primary-color, #9b59b6)" 
                            strokeWidth="1"
                            opacity="0.3"
                        />
                        <circle cx="60" cy="60" r="3" fill="var(--primary-color, #9b59b6)" opacity="0.4" />
                    </svg>
                </div>

                <div className="absolute bottom-20 left-16 w-24 h-24 opacity-8">
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                        <path 
                            d="M10 40 Q25 20, 40 40 Q55 60, 70 40" 
                            fill="none" 
                            stroke="var(--primary-color, #9b59b6)" 
                            strokeWidth="1"
                            opacity="0.2"
                        />
                        <path 
                            d="M15 50 Q30 30, 45 50 Q60 70, 75 50" 
                            fill="none" 
                            stroke="var(--primary-color, #9b59b6)" 
                            strokeWidth="1"
                            opacity="0.15"
                        />
                    </svg>
                </div>

                <div className="px-12 pt-16 pb-12 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8 flex-shrink-0">
                        <h1 
                            className="text-4xl font-bold mb-4" 
                            style={{ color: 'var(--background-text, #3a2050)' }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div className="flex justify-center">
                            <div 
                                className="h-px bg-current opacity-20" 
                                style={{ 
                                    width: '40%',
                                    backgroundColor: 'var(--primary-color, #9b59b6)'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridCols(metrics.length)} gap-6 w-full max-w-5xl`}>
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-6 rounded-[20px] backdrop-blur-[12px] border"
                                    style={{
                                        background: 'rgba(255,255,255,0.6)',
                                        border: '1px solid rgba(255,255,255,0.4)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    <div 
                                        className="text-sm font-medium mb-3"
                                        style={{ 
                                            color: 'var(--primary-color, #9b59b6)',
                                            fontFamily: 'var(--body-font-family, Mulish)'
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    
                                    <div 
                                        className="text-4xl font-bold mb-4" 
                                        style={{ color: 'var(--background-text, #3a2050)' }}
                                    >
                                        {metric.value}
                                    </div>
                                    
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #3a2050)',
                                            fontFamily: 'var(--body-font-family, Mulish)',
                                            opacity: '0.8'
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

export default LavenderDreamMetricsSlide