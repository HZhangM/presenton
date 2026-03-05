import React from 'react'
import * as z from "zod";

export const layoutId = 'magazine-editorial-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A bold editorial-style metrics slide with strong typography hierarchy and high contrast design'

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
            value: '2.5M+',
            label: 'Monthly Readers',
            description: 'Our editorial content reaches over 2.5 million engaged readers across digital and print platforms monthly.'
        },
        {
            value: '95%',
            label: 'Subscriber Retention',
            description: 'Industry-leading retention rate demonstrates the quality and relevance of our editorial content.'
        },
        {
            value: '48hrs',
            label: 'Breaking News Speed',
            description: 'Average time from story development to publication, ensuring timely and accurate news delivery.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface MagazineEditorialMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const MagazineEditorialMetricsSlide: React.FC<MagazineEditorialMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, DM Serif Display)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Large Drop Number Decoration */}
                <div className="absolute top-16 right-12 text-9xl font-bold opacity-5" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
                    01
                </div>

                {/* Horizontal Rule Decoration */}
                <div className="absolute bottom-16 left-0 w-48 h-1" style={{ background: 'var(--background-text, #1a1a1a)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-12 pt-12 pb-10 h-full flex flex-col justify-center">
                    <div className="space-y-6">
                        {/* Title with Red Accent Underline */}
                        <div className="text-left">
                            <h1 
                                className="text-6xl font-normal leading-tight mb-4" 
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)", 
                                    fontFamily: "var(--heading-font-family, DM Serif Display)" 
                                }}
                            >
                                {slideData?.title || 'Key Performance Metrics'}
                            </h1>
                            <div className="w-32 h-1" style={{ background: 'var(--primary-color, #e53935)' }}></div>
                        </div>

                        {/* Thick Black Horizontal Rule */}
                        <div className="w-full h-1" style={{ background: 'var(--background-text, #1a1a1a)' }}></div>

                        {/* Metrics Grid */}
                        <div className={`grid gap-6 ${metrics.length === 2 ? 'grid-cols-2' : metrics.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                            {metrics.map((metric, index) => (
                                <div key={index} className="space-y-6">
                                    {/* Metric Card */}
                                    <div 
                                        className="p-5 border-2 border-solid bg-white"
                                        style={{ 
                                            borderColor: 'var(--background-text, #1a1a1a)',
                                            background: '#ffffff',
                                            borderRadius: '0'
                                        }}
                                    >
                                        {/* Large Metric Value */}
                                        <div 
                                            className="text-5xl font-normal mb-4" 
                                            style={{ 
                                                color: "var(--background-text, #1a1a1a)", 
                                                fontFamily: "var(--heading-font-family, DM Serif Display)" 
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Label with Red Accent */}
                                        <div className="mb-4">
                                            <h3 
                                                className="text-xl font-bold mb-2" 
                                                style={{ 
                                                    color: "var(--background-text, #1a1a1a)", 
                                                    fontFamily: "var(--body-font-family, DM Sans)" 
                                                }}
                                            >
                                                {metric.label}
                                            </h3>
                                            <div className="w-12 h-0.5" style={{ background: 'var(--primary-color, #e53935)' }}></div>
                                        </div>

                                        {/* Description */}
                                        <p 
                                            className="text-sm leading-relaxed" 
                                            style={{ 
                                                color: "var(--background-text, #1a1a1a)", 
                                                fontFamily: "var(--body-font-family, DM Sans)" 
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
        </>
    )
}

export default MagazineEditorialMetricsSlide