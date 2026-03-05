import React from 'react'
import * as z from "zod";

export const layoutId = 'monochrome-noir-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in monochrome noir style.'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth'),
        value: z.string().min(1).max(10).default('250%'),
        description: z.string().min(10).max(150).default('Exceptional revenue growth driven by strategic market expansion and innovative product development initiatives.')
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '250%',
            description: 'Exceptional revenue growth driven by strategic market expansion and innovative product development initiatives.'
        },
        {
            label: 'Client Retention',
            value: '98%',
            description: 'Outstanding client retention rate demonstrating strong customer satisfaction and superior service delivery quality.'
        },
        {
            label: 'Market Share',
            value: '35%',
            description: 'Dominant market position achieved through aggressive competitive strategy and superior product differentiation.'
        },
        {
            label: 'ROI',
            value: '180%',
            description: 'Exceptional return on investment reflecting efficient capital allocation and strategic operational excellence.'
        }
    ])
})

export { Schema }

interface MonochromeNoirMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const MonochromeNoirMetricsSlide: React.FC<MonochromeNoirMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Space Grotesk)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-base font-bold"
                                    style={{ color: 'var(--background-text, #000000)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-8 w-32 h-32"
                    style={{ background: 'var(--primary-color, #000000)', opacity: 0.1 }}
                />
                <div 
                    className="absolute bottom-8 left-8 w-24 h-24"
                    style={{ background: 'var(--primary-color, #000000)', opacity: 0.15 }}
                />

                {/* Main Content */}
                <div className="relative z-20 px-8 py-16 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ color: "var(--background-text, #000000)" }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div 
                            className="w-24 h-1"
                            style={{ background: "var(--primary-color, #000000)" }}
                        />
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {metrics.map((metric, index) => (
                            <div 
                                key={index}
                                className="p-4 flex flex-col"
                                style={{ 
                                    border: "2px solid var(--primary-color, #000000)",
                                    background: "#ffffff",
                                    borderRadius: "0"
                                }}
                            >
                                {/* Metric Number Label */}
                                <div 
                                    className="w-8 h-8 flex items-center justify-center text-sm font-bold mb-3"
                                    style={{ 
                                        background: "var(--primary-color, #000000)",
                                        color: "var(--primary-text, #ffffff)"
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Value */}
                                <div 
                                    className="text-4xl font-bold mb-2"
                                    style={{ color: "var(--primary-color, #000000)" }}
                                >
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div 
                                    className="text-base font-600 mb-3"
                                    style={{ color: "var(--background-text, #000000)" }}
                                >
                                    {metric.label}
                                </div>

                                {/* Description */}
                                <div 
                                    className="text-sm leading-tight flex-1"
                                    style={{ color: "var(--background-text, #000000)" }}
                                >
                                    {metric.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonochromeNoirMetricsSlide