import React from 'react'
import * as z from "zod";

export const layoutId = 'chalk-pastel-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in a soft chalk pastel art style'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Key Metrics').meta({
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
            label: 'Happy Clients',
            description: 'Building meaningful relationships with creative businesses across various industries and markets.'
        },
        {
            value: '95%',
            label: 'Satisfaction Rate',
            description: 'Our handcrafted approach ensures every project meets the unique vision of our artistic partners.'
        },
        {
            value: '$2.5M',
            label: 'Revenue Growth',
            description: 'Steady growth through authentic connections and beautifully executed creative solutions.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

type MetricsSlideData = z.infer<typeof Schema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const ChalkPastelMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 2) {
            return 'grid grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-3'
        } else {
            return 'grid grid-cols-4'
        }
    }

    const pastelColors = ['#e57373', '#64b5f6', '#fff176', '#aed581']

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Kalam)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #3a3530)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative chalk dot markers */}
                <div className="absolute top-16 right-20 opacity-30">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: '#e57373' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: '#64b5f6' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: '#fff176' }}></div>
                    </div>
                </div>

                {/* Soft pastel accent block */}
                <div 
                    className="absolute bottom-10 left-10 w-32 h-6 opacity-20 rounded-lg transform -rotate-2"
                    style={{ background: 'var(--primary-color, #e57373)' }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-12 pb-10 flex-1 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Title with hand-drawn style underline */}
                        <div className="text-center">
                            <h1 
                                className="text-5xl sm:text-5xl lg:text-5xl font-bold relative inline-block"
                                style={{ color: "var(--background-text, #3a3530)" }}
                            >
                                {slideData?.title || 'Our Key Metrics'}
                                <svg 
                                    className="absolute -bottom-4 left-0 w-full h-4"
                                    viewBox="0 0 300 20"
                                    style={{ stroke: 'var(--primary-color, #e57373)', opacity: 0.6 }}
                                >
                                    <path 
                                        d="M5 12C50 8 100 16 150 10C200 4 250 12 295 8" 
                                        fill="none" 
                                        strokeWidth="3" 
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </h1>
                        </div>

                        {/* Metrics Grid */}
                        <div className="flex justify-center">
                            <div className={`${getLayoutClasses(metrics.length)} gap-6 max-w-6xl`}>
                                {metrics.map((metric, index) => (
                                    <div key={index} className="text-center space-y-6">
                                        {/* Metric Card */}
                                        <div
                                            className="p-5 relative"
                                            style={{
                                                background: "var(--card-color, rgba(255, 255, 255, 0.45))",
                                                border: "2px solid var(--stroke, rgba(229, 115, 115, 0.15))",
                                                borderRadius: "16px"
                                            }}
                                        >
                                            {/* Colorful accent dot */}
                                            <div 
                                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                                                style={{ background: pastelColors[index % pastelColors.length] }}
                                            ></div>

                                            {/* Large Metric Value */}
                                            <div 
                                                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
                                                style={{ color: "var(--primary-color, #e57373)" }}
                                            >
                                                {metric.value}
                                            </div>

                                            {/* Label */}
                                            <div 
                                                className="text-lg font-semibold mb-4"
                                                style={{ color: "var(--background-text, #3a3530)" }}
                                            >
                                                {metric.label}
                                            </div>

                                            {/* Wavy divider */}
                                            <svg 
                                                className="w-16 h-2 mx-auto mb-4"
                                                viewBox="0 0 60 8"
                                                style={{ stroke: 'var(--stroke, rgba(229, 115, 115, 0.25))' }}
                                            >
                                                <path 
                                                    d="M2 4C15 2 25 6 35 4C45 2 55 6 58 4" 
                                                    fill="none" 
                                                    strokeWidth="2" 
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            {/* Description */}
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #3a3530)",
                                                    fontFamily: "var(--body-font-family, Nunito)"
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
            </div>
        </>
    )
}

export default ChalkPastelMetricsSlide