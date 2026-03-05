import React from 'react'
import * as z from "zod";

export const layoutId = 'desert-dune-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in desert dune theme'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth'),
        value: z.string().min(1).max(10).default('150%'),
        description: z.string().min(10).max(150).default('Consistent growth trajectory with strong market penetration and customer retention rates across all segments.')
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '150%',
            description: 'Consistent growth trajectory with strong market penetration and customer retention rates across all segments.'
        },
        {
            label: 'Active Users',
            value: '50K+',
            description: 'Growing user base with high engagement levels and positive feedback across multiple touchpoints and channels.'
        },
        {
            label: 'Market Share',
            value: '25%',
            description: 'Leading position in target market segments with expanding influence and competitive advantages.'
        },
        {
            label: 'Satisfaction',
            value: '98%',
            description: 'Exceptional customer satisfaction scores reflecting quality service delivery and continuous improvement efforts.'
        }
    ])
})

export { Schema }

interface DesertDuneMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const DesertDuneMetricsSlide: React.FC<DesertDuneMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Tenor Sans)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a2e1e)', fontFamily: "var(--body-font-family, Work Sans)" }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative arch elements */}
                <div className="absolute top-12 left-12 w-16 h-8 opacity-20">
                    <svg viewBox="0 0 64 32" fill="none" className="w-full h-full">
                        <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32H0Z" fill="var(--primary-color, #b8860b)" />
                    </svg>
                </div>
                <div className="absolute top-16 right-16 w-12 h-6 opacity-15">
                    <svg viewBox="0 0 48 24" fill="none" className="w-full h-full">
                        <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24H0Z" fill="var(--primary-color, #b8860b)" />
                    </svg>
                </div>

                {/* Golden accent lines */}
                <div className="absolute top-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" style={{ color: 'var(--primary-color, #b8860b)' }}></div>
                <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-current to-transparent opacity-30" style={{ color: 'var(--primary-color, #b8860b)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 pt-20 pb-8 flex-1 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8 flex-shrink-0">
                        <h1 
                            className="text-4xl font-normal mb-4"
                            style={{ color: "var(--background-text, #3a2e1e)" }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div className="w-24 h-px mx-auto" style={{ background: 'var(--primary-color, #b8860b)' }}></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="p-5 text-center"
                                    style={{
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--stroke, rgba(184, 134, 11, 0.2))',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <div 
                                        className="text-sm font-medium mb-2"
                                        style={{ 
                                            color: 'var(--primary-color, #b8860b)',
                                            fontFamily: "var(--body-font-family, Work Sans)"
                                        }}
                                    >
                                        {metric.label}
                                    </div>
                                    <div 
                                        className="text-4xl font-bold mb-3"
                                        style={{ color: 'var(--background-text, #3a2e1e)' }}
                                    >
                                        {metric.value}
                                    </div>
                                    <p 
                                        className="text-sm font-light leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #3a2e1e)',
                                            fontFamily: "var(--body-font-family, Work Sans)"
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

export default DesertDuneMetricsSlide