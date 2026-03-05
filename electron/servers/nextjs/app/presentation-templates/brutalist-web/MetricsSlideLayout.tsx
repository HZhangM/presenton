import React from 'react'
import * as z from "zod";

export const layoutId = 'brutalist-web-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A brutalist slide layout for showcasing key business metrics with raw typography and heavy borders'

const Schema = z.object({
    title: z.string().min(3).max(40).default('KEY METRICS'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('REVENUE GROWTH'),
        value: z.string().min(1).max(10).default('250%'),
        description: z.string().min(10).max(150).default('Unprecedented revenue growth driven by aggressive market expansion and strategic client acquisition across multiple verticals.')
    })).min(2).max(4).default([
        {
            label: 'REVENUE GROWTH',
            value: '250%',
            description: 'Unprecedented revenue growth driven by aggressive market expansion and strategic client acquisition across multiple verticals.'
        },
        {
            label: 'USER BASE',
            value: '50K+',
            description: 'Explosive user adoption with zero marketing spend. Pure product-market fit validation through organic viral growth mechanics.'
        },
        {
            label: 'BURN RATE',
            value: '-60%',
            description: 'Ruthless operational efficiency improvements while maintaining aggressive growth targets and expanding technical infrastructure.'
        },
        {
            label: 'MARKET SHARE',
            value: '12%',
            description: 'Dominant position in core vertical with clear path to category leadership through continued product differentiation.'
        }
    ])
})

export { Schema }

interface BrutalistWebMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const BrutalistWebMetricsSlide: React.FC<BrutalistWebMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Anton)"
                }}
            >
                {/* Company Logo/Name Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img 
                                    src={(slideData as any)?._logo_url__} 
                                    alt="logo" 
                                    className="w-8 h-8" 
                                    style={{ border: "2px solid var(--stroke, rgba(0, 0, 0, 0.8))" }}
                                />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold tracking-wider"
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 right-0 w-32 h-16 opacity-30"
                    style={{ 
                        background: "var(--primary-color, #ff4500)",
                        border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))"
                    }}
                />
                
                <div 
                    className="absolute bottom-0 left-0 w-24 h-24 opacity-20"
                    style={{ 
                        background: "var(--stroke, rgba(0, 0, 0, 0.8))"
                    }}
                />

                {/* Main Content */}
                <div className="px-8 pt-16 pb-8 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div 
                                className="text-2xl font-bold px-2 py-1"
                                style={{ 
                                    background: "var(--primary-color, #ff4500)",
                                    color: "var(--primary-text, #ffffff)",
                                    border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))"
                                }}
                            >
                                01
                            </div>
                            <h1 
                                className="text-4xl font-bold tracking-wider flex-1"
                                style={{ 
                                    color: "var(--background-text, #111111)",
                                    fontFamily: "var(--heading-font-family, Anton)"
                                }}
                            >
                                {slideData?.title || 'KEY METRICS'}
                            </h1>
                        </div>
                        
                        <div 
                            className="w-full h-1"
                            style={{ background: "var(--stroke, rgba(0, 0, 0, 0.8))" }}
                        />
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="p-4"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 255, 255, 0.95))",
                                        border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))",
                                        boxShadow: "6px 6px 0 var(--stroke, rgba(0, 0, 0, 0.8))"
                                    }}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div 
                                            className="text-lg font-bold px-2 py-1 flex-shrink-0"
                                            style={{ 
                                                background: "var(--primary-color, #ff4500)",
                                                color: "var(--primary-text, #ffffff)",
                                                fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div 
                                                className="text-xs font-medium mb-1 tracking-wide"
                                                style={{ 
                                                    color: "var(--background-text, #111111)",
                                                    fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
                                                }}
                                            >
                                                {metric.label}
                                            </div>
                                            <div 
                                                className="text-3xl font-bold"
                                                style={{ 
                                                    color: "var(--primary-color, #ff4500)",
                                                    fontFamily: "var(--heading-font-family, Anton)"
                                                }}
                                            >
                                                {metric.value}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        className="w-full h-px mb-3"
                                        style={{ background: "var(--stroke, rgba(0, 0, 0, 0.8))" }}
                                    />
                                    
                                    <p 
                                        className="text-sm leading-tight font-medium"
                                        style={{ 
                                            color: "var(--background-text, #111111)",
                                            fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
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

export default BrutalistWebMetricsSlide