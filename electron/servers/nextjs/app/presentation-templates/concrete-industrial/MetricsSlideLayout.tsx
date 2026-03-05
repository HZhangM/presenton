import React from 'react'
import * as z from "zod";

export const layoutId = 'concrete-industrial-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in a raw concrete industrial style.'

const metricsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('KEY METRICS').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M). No long values. Keep simple number."
        }),
        description: z.string().min(10).max(150).meta({
            description: "Detailed description of the metric. Explanation of the metric."
        }),
    })).min(2).max(4).default([
        {
            value: '2.4M',
            label: 'UNITS PRODUCED',
            description: 'Total manufacturing output across all production lines, maintaining consistent quality standards.'
        },
        {
            value: '99.2%',
            label: 'OPERATIONAL EFFICIENCY',
            description: 'Equipment uptime and productivity metrics demonstrate industrial excellence and reliability.'
        },
        {
            value: '847',
            label: 'SAFETY DAYS',
            description: 'Consecutive days without workplace incidents, exceeding industry safety benchmarks.'
        },
        {
            value: '15',
            label: 'FACILITY LOCATIONS',
            description: 'Strategic distribution of manufacturing plants and warehouses across key markets.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export const Schema = metricsSlideSchema

export type MetricsSlideData = z.infer<typeof metricsSlideSchema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const ConcreteIndustrialMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) {
            return 'grid grid-cols-1'
        } else if (count === 2) {
            return 'grid grid-cols-1 md:grid-cols-2'
        } else if (count === 3) {
            return 'grid grid-cols-1 md:grid-cols-3'
        } else {
            return 'grid grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bebas Neue)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-16 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold uppercase tracking-wider" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, Bebas Neue)' }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Industrial Hazard Stripe Accent */}
                <div className="absolute top-0 left-0 w-full h-3" style={{ background: 'repeating-linear-gradient(45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 20px)' }}></div>

                {/* Steel Beam Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-full opacity-10">
                    <div className="w-full h-full relative">
                        <div className="absolute right-0 top-1/4 w-8 h-1/2 bg-gray-600 transform rotate-12"></div>
                        <div className="absolute right-4 top-1/3 w-6 h-1/3 bg-gray-700 transform -rotate-6"></div>
                        <div className="absolute right-8 top-1/2 w-4 h-1/4 bg-gray-500 transform rotate-45"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-16 pt-16 pb-10 flex-1 flex flex-col">
                    
                    {/* Title Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-5xl font-black uppercase tracking-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Bebas Neue)"
                            }}
                        >
                            {slideData?.title || 'KEY METRICS'}
                        </h1>
                        <div className="w-24 h-1 mt-4" style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }}></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`${getLayoutClasses(metrics.length)} gap-6 w-full max-w-6xl`}>
                            {metrics.map((metric, index) => (
                                <div key={index} className="relative">
                                    {/* Stencil-style numbering */}
                                    <div 
                                        className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-xs font-black border-2 bg-black text-white"
                                        style={{ 
                                            borderColor: 'var(--primary-color, #ff6d00)',
                                            fontFamily: 'var(--heading-font-family, Bebas Neue)'
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Metric Card */}
                                    <div
                                        className="p-5"
                                        style={{ 
                                            background: 'rgba(255,255,255,0.9)', 
                                            borderLeft: '4px solid var(--primary-color, #ff6d00)', 
                                            borderRadius: '0', 
                                            boxShadow: '2px 2px 0 rgba(0,0,0,0.1)' 
                                        }}
                                    >
                                        {/* Label */}
                                        <div 
                                            className="text-sm font-bold uppercase tracking-widest mb-4"
                                            style={{ 
                                                color: 'var(--background-text, #1a1a1a)',
                                                fontFamily: 'var(--body-font-family, Roboto Condensed)'
                                            }}
                                        >
                                            {metric.label}
                                        </div>

                                        {/* Value */}
                                        <div 
                                            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4"
                                            style={{ 
                                                color: 'var(--primary-color, #ff6d00)',
                                                fontFamily: 'var(--heading-font-family, Bebas Neue)'
                                            }}
                                        >
                                            {metric.value}
                                        </div>

                                        {/* Description */}
                                        <div 
                                            className="text-sm leading-relaxed font-medium"
                                            style={{ 
                                                color: 'var(--background-text, #1a1a1a)',
                                                fontFamily: 'var(--body-font-family, Roboto Condensed)'
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

export default ConcreteIndustrialMetricsSlide