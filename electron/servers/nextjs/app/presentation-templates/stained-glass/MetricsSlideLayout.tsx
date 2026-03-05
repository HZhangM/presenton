import React from 'react'
import * as z from "zod";

export const layoutId = 'stained-glass-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A cathedral stained glass themed slide showcasing key numeric metrics with ornate serif typography and jewel-tone accents'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Sacred Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Divine Growth').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('99%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).default('Through sacred dedication and unwavering commitment, we have achieved remarkable growth that reflects our divine mission.').meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            value: '150+',
            label: 'Souls Served',
            description: 'Our ministry has touched countless lives through compassionate service and sacred dedication to our community.'
        },
        {
            value: '95%',
            label: 'Faith Renewed',
            description: 'Through divine guidance and spiritual counsel, we witness the miraculous transformation of hearts.'
        },
        {
            value: '$2M',
            label: 'Sacred Offerings',
            description: 'The generous contributions of our faithful congregation enable us to expand our holy mission.'
        },
        {
            value: '25+',
            label: 'Years of Grace',
            description: 'A quarter-century of blessed service, building an eternal foundation of love and devotion.'
        }
    ]).meta({
        description: "List of key metrics to display with sacred significance",
    })
})

export { Schema }

export type StainedGlassMetricsData = z.infer<typeof Schema>

interface StainedGlassMetricsSlideProps {
    data?: Partial<StainedGlassMetricsData>
}

const StainedGlassMetricsSlide: React.FC<StainedGlassMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getGridClasses = (count: number) => {
        return count <= 2 ? 'grid-cols-2' : 'grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Merriweather)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-bold" style={{ color: 'var(--background-text, #e8e0d0)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Ornamental Cross Decoration */}
                <div className="absolute top-8 right-8 opacity-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 4V28M4 16H28" stroke="var(--primary-color, #c0392b)" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="16" cy="16" r="3" fill="var(--primary-color, #c0392b)" opacity="0.6"/>
                    </svg>
                </div>

                {/* Stained Glass Border Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 400 64" fill="none" preserveAspectRatio="none">
                        <path d="M0 32C50 16 100 48 150 32C200 16 250 48 300 32C350 16 400 48 400 32V64H0V32Z" fill="var(--primary-color, #c0392b)" opacity="0.4"/>
                        <path d="M0 48C40 40 80 56 120 48C160 40 200 56 240 48C280 40 320 56 360 48L400 48V64H0V48Z" fill="var(--stroke, rgba(192, 57, 43, 0.3))"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 pt-16 pb-12 flex flex-col h-full">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl font-black mb-4" 
                            style={{ color: "var(--background-text, #e8e0d0)" }}
                        >
                            {slideData?.title || 'Sacred Metrics'}
                        </h1>
                        
                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}></div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 2L9 6H13L10 9L11 13L8 11L5 13L6 9L3 6H7L8 2Z" fill="var(--primary-color, #c0392b)" opacity="0.8"/>
                            </svg>
                            <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}></div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(metrics.length)} gap-4 max-w-5xl w-full`}>
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-4 rounded-lg"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        background: "rgba(0,0,0,0.4)",
                                        backdropFilter: "blur(6px)"
                                    }}
                                >
                                    {/* Metric Label */}
                                    <div 
                                        className="text-sm font-medium mb-2"
                                        style={{ 
                                            color: "var(--background-text, #e8e0d0)",
                                            fontFamily: "var(--body-font-family, Merriweather Sans)"
                                        }}
                                    >
                                        {metric.label}
                                    </div>

                                    {/* Metric Value */}
                                    <div 
                                        className="text-3xl font-black mb-3"
                                        style={{ color: "var(--primary-color, #c0392b)" }}
                                    >
                                        {metric.value}
                                    </div>

                                    {/* Description */}
                                    <div 
                                        className="text-xs leading-relaxed px-2"
                                        style={{ 
                                            color: "var(--background-text, #e8e0d0)",
                                            fontFamily: "var(--body-font-family, Merriweather Sans)"
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
        </>
    )
}

export default StainedGlassMetricsSlide