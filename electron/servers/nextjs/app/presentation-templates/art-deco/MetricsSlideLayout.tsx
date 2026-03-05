import React from 'react'
import * as z from "zod";

export const layoutId = 'art-deco-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide layout showcasing 2-4 key numeric metrics with Art Deco geometric patterns and gold accents'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('250%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).default('Exceptional growth trajectory demonstrating market expansion and increased customer acquisition across all business segments.').meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '250%',
            description: 'Exceptional growth trajectory demonstrating market expansion and increased customer acquisition across all business segments.'
        },
        {
            label: 'Client Retention',
            value: '94%',
            description: 'Outstanding client satisfaction and loyalty metrics reflecting our commitment to premium service delivery and innovation.'
        },
        {
            label: 'Market Share',
            value: '35%',
            description: 'Dominant position in our sector through strategic partnerships and continuous product development initiatives.'
        },
        {
            label: 'ROI',
            value: '$2.8M',
            description: 'Strong return on investment showcasing efficient capital allocation and profitable business operations.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface MetricsSlideLayoutProps {
    data?: Partial<z.infer<typeof Schema>>
}

const ArtDecoMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Poiret One)" }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-light tracking-wider" style={{ color: 'var(--background-text, #e8d8b8)', fontFamily: 'var(--heading-font-family, Poiret One)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Art Deco Sunburst Top Left */}
                <div className="absolute top-0 left-0 w-48 h-48 opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                        <g transform="translate(0,0)">
                            <path d="M0 0L60 60L0 120L40 80L80 120L120 80L80 40L120 0L60 40L0 0Z" fill="var(--primary-color, #d4af37)" opacity="0.3" />
                            <path d="M20 20L50 50L20 80L35 65L65 80L80 65L65 35L80 20L50 35L20 20Z" fill="var(--primary-color, #d4af37)" opacity="0.4" />
                        </g>
                    </svg>
                </div>

                {/* Art Deco Chevron Bottom Right */}
                <div className="absolute bottom-0 right-0 w-40 h-40 opacity-15 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
                        <g transform="translate(80,160)">
                            <path d="M0 0L-30 -30L-60 0L-40 -20L-80 -60L-40 -100L0 -60L40 -100L80 -60L40 -20L60 0L30 -30L0 0Z" fill="var(--primary-color, #d4af37)" />
                        </g>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 pt-16 pb-8 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl font-light tracking-widest uppercase"
                            style={{ 
                                color: "var(--background-text, #e8d8b8)", 
                                fontFamily: "var(--heading-font-family, Poiret One)",
                                letterSpacing: '0.25em'
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        
                        {/* Art Deco Divider */}
                        <div className="mt-6 flex items-center justify-center">
                            <div className="w-16 h-px" style={{ background: "var(--primary-color, #d4af37)" }}></div>
                            <div className="mx-3 w-2 h-2 transform rotate-45" style={{ border: "1px solid var(--primary-color, #d4af37)" }}></div>
                            <div className="w-16 h-px" style={{ background: "var(--primary-color, #d4af37)" }}></div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div key={index} className="relative">
                                    {/* Angular Corner Brackets */}
                                    <div className="absolute -top-2 -left-2 w-6 h-6">
                                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                            <path d="M0 6L0 0L6 0M0 6L6 6M6 0L6 6" stroke="var(--primary-color, #d4af37)" strokeWidth="1" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 transform rotate-90">
                                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                            <path d="M0 6L0 0L6 0M0 6L6 6M6 0L6 6" stroke="var(--primary-color, #d4af37)" strokeWidth="1" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 transform rotate-180">
                                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                            <path d="M0 6L0 0L6 0M0 6L6 6M6 0L6 6" stroke="var(--primary-color, #d4af37)" strokeWidth="1" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 w-6 h-6 transform rotate-270">
                                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                            <path d="M0 6L0 0L6 0M0 6L6 6M6 0L6 6" stroke="var(--primary-color, #d4af37)" strokeWidth="1" fill="none" />
                                        </svg>
                                    </div>

                                    {/* Card */}
                                    <div 
                                        className="p-5 text-center space-y-4"
                                        style={{ 
                                            border: "1px solid rgba(212,175,55,0.25)", 
                                            background: "rgba(212,175,55,0.04)",
                                            borderRadius: "0"
                                        }}
                                    >
                                        {/* Label */}
                                        <div 
                                            className="text-sm tracking-wider uppercase font-light"
                                            style={{ 
                                                color: "var(--background-text, #e8d8b8)",
                                                fontFamily: "var(--heading-font-family, Poiret One)"
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Value */}
                                        <div 
                                            className="text-4xl font-light tracking-wide"
                                            style={{ 
                                                color: "var(--primary-color, #d4af37)",
                                                fontFamily: "var(--heading-font-family, Poiret One)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Description */}
                                        <div 
                                            className="text-xs leading-relaxed font-light"
                                            style={{ 
                                                color: "var(--background-text, #e8d8b8)",
                                                fontFamily: "var(--body-font-family, Josefin Sans)"
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

export default ArtDecoMetricsSlide