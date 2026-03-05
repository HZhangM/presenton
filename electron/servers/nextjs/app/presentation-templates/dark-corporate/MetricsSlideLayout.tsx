import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-corporate-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A professional dark mode slide for showcasing key business metrics with clean typography and blue accents'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Performance Metrics'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth'),
        value: z.string().min(1).max(10).default('150%'),
        description: z.string().min(10).max(150).default('Exceptional revenue growth driven by strategic market expansion and enhanced product offerings across all business segments.')
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '150%',
            description: 'Exceptional revenue growth driven by strategic market expansion and enhanced product offerings across all business segments.'
        },
        {
            label: 'Client Retention',
            value: '97%',
            description: 'Industry-leading client retention rate achieved through exceptional service delivery and continuous relationship management.'
        },
        {
            label: 'Market Share',
            value: '23%',
            description: 'Significant market position established through innovative solutions and strategic partnerships in key sectors.'
        },
        {
            label: 'Team Growth',
            value: '85+',
            description: 'Expanded our talented team with top-tier professionals to support accelerated business growth and innovation.'
        }
    ])
})

export { Schema }

interface DarkCorporateMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const DarkCorporateMetricsSlide: React.FC<DarkCorporateMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    const getLayoutClasses = (count: number) => {
        if (count === 1) return 'grid grid-cols-1'
        if (count === 2) return 'grid grid-cols-1 md:grid-cols-2'
        if (count === 3) return 'grid grid-cols-1 md:grid-cols-3'
        return 'grid grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-base font-semibold" style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 opacity-20">
                    <div 
                        className="absolute top-8 right-8 w-3 h-3 rounded-full"
                        style={{ background: "var(--primary-color, #6366f1)" }}
                    />
                    <div 
                        className="absolute top-16 right-16 w-2 h-2 rounded-full"
                        style={{ background: "var(--primary-color, #6366f1)" }}
                    />
                    <div 
                        className="absolute top-24 right-12 w-1 h-1 rounded-full"
                        style={{ background: "var(--primary-color, #6366f1)" }}
                    />
                </div>

                <div 
                    className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                    style={{ background: "linear-gradient(90deg, transparent 0%, var(--primary-color, #6366f1) 50%, transparent 100%)" }}
                />

                {/* Main Content */}
                <div className="relative z-10 px-12 pt-12 pb-10 flex-1 flex flex-col justify-center">
                    <div className="space-y-8">
                        {/* Title */}
                        <div className="text-center">
                            <h1 
                                className="text-4xl lg:text-5xl font-bold"
                                style={{ color: "var(--background-text, #e5e7eb)" }}
                            >
                                {slideData?.title || 'Key Performance Metrics'}
                            </h1>
                        </div>

                        {/* Metrics Grid */}
                        <div className={`${getLayoutClasses(metrics.length)} gap-6`}>
                            {metrics.map((metric, index) => (
                                <div key={index} className="text-center space-y-6">
                                    {/* Metric Card */}
                                    <div 
                                        className="p-5 rounded-lg relative"
                                        style={{ 
                                            border: "1px solid rgba(99,102,241,0.12)",
                                            background: "rgba(99,102,241,0.06)",
                                            borderLeft: "3px solid var(--primary-color, #6366f1)"
                                        }}
                                    >
                                        {/* Small indicator dot */}
                                        <div 
                                            className="absolute top-4 right-4 w-2 h-2 rounded-full"
                                            style={{ background: "var(--primary-color, #6366f1)" }}
                                        />
                                        
                                        {/* Metric Value */}
                                        <div 
                                            className="text-5xl lg:text-6xl font-bold mb-3"
                                            style={{ color: "var(--primary-color, #6366f1)" }}
                                        >
                                            {metric.value}
                                        </div>
                                        
                                        {/* Label */}
                                        <div 
                                            className="text-lg font-semibold mb-4"
                                            style={{ color: "var(--background-text, #e5e7eb)" }}
                                        >
                                            {metric.label}
                                        </div>
                                        
                                        {/* Divider */}
                                        <div 
                                            className="h-px w-16 mx-auto mb-4 opacity-30"
                                            style={{ background: "var(--stroke, rgba(99, 102, 241, 0.2))" }}
                                        />
                                        
                                        {/* Description */}
                                        <p 
                                            className="text-sm leading-relaxed opacity-90"
                                            style={{ color: "var(--background-text, #e5e7eb)" }}
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

export default DarkCorporateMetricsSlide