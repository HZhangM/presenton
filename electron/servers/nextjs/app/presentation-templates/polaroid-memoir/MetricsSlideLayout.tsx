import React from 'react'
import * as z from "zod";

export const layoutId = 'polaroid-memoir-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A nostalgic scrapbook-style metrics slide with polaroid-framed cards and handwritten typography'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Journey').meta({
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
            value: '150+',
            label: 'Happy Clients',
            description: 'Every client becomes part of our extended family, creating lasting relationships beyond business.'
        },
        {
            value: '200+',
            label: 'Projects Completed',
            description: 'Each project tells a story of collaboration, creativity, and shared success.'
        },
        {
            value: '95%',
            label: 'Satisfaction Rate',
            description: 'We measure success not just in numbers, but in the smiles and testimonials we receive.'
        },
        {
            value: '5',
            label: 'Years Strong',
            description: 'Half a decade of growth, learning, and building something truly meaningful together.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface PolaroidMemoirMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const PolaroidMemoirMetricsSlide: React.FC<PolaroidMemoirMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-10">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #3a3020)', fontFamily: 'var(--heading-font-family, Caveat)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative tape strips */}
                <div className="absolute top-8 left-16 w-16 h-6 bg-orange-200 opacity-60 transform rotate-12 z-5"
                     style={{ background: 'linear-gradient(45deg, var(--primary-color, #d4764e) 0%, rgba(212, 118, 78, 0.7) 100%)' }}>
                </div>
                <div className="absolute top-12 right-20 w-12 h-8 bg-orange-200 opacity-60 transform -rotate-6 z-5"
                     style={{ background: 'linear-gradient(135deg, var(--primary-color, #d4764e) 0%, rgba(212, 118, 78, 0.7) 100%)' }}>
                </div>

                {/* Washi tape accent */}
                <div className="absolute bottom-16 left-8 w-20 h-3 opacity-40 transform rotate-3"
                     style={{ 
                         background: 'repeating-linear-gradient(45deg, var(--stroke, rgba(212, 118, 78, 0.2)), var(--stroke, rgba(212, 118, 78, 0.2)) 4px, transparent 4px, transparent 8px)'
                     }}>
                </div>

                {/* Main Content */}
                <div className="px-8 py-12 h-full flex flex-col justify-center">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl lg:text-5xl font-bold transform -rotate-1"
                            style={{ 
                                color: "var(--background-text, #3a3020)",
                                fontFamily: "var(--heading-font-family, Caveat)"
                            }}
                        >
                            {slideData?.title || 'Our Journey'}
                        </h1>
                        {/* Handwritten underline */}
                        <div className="flex justify-center mt-2">
                            <div 
                                className="w-32 h-1 transform rotate-1"
                                style={{
                                    background: 'var(--primary-color, #d4764e)',
                                    opacity: 0.6
                                }}
                            >
                            </div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 max-w-4xl">
                            {metrics.map((metric, index) => {
                                const rotations = ['rotate-2', '-rotate-1', 'rotate-1', '-rotate-2'];
                                const rotation = rotations[index % rotations.length];
                                
                                return (
                                    <div key={index} className={`transform ${rotation}`}>
                                        {/* Polaroid card */}
                                        <div 
                                            className="relative p-4 pb-8"
                                            style={{
                                                background: 'var(--card-color, rgba(255, 255, 255, 0.92))',
                                                border: '1px solid rgba(0,0,0,0.06)',
                                                borderRadius: '2px',
                                                boxShadow: '0 3px 10px rgba(0,0,0,0.12)'
                                            }}
                                        >
                                            {/* Tape corner decoration */}
                                            <div 
                                                className="absolute -top-2 -left-2 w-8 h-8 opacity-70 transform rotate-45"
                                                style={{ background: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}
                                            >
                                            </div>

                                            <div className="text-center space-y-3">
                                                {/* Value */}
                                                <div 
                                                    className="text-4xl font-bold"
                                                    style={{ 
                                                        color: "var(--primary-color, #d4764e)",
                                                        fontFamily: "var(--heading-font-family, Caveat)"
                                                    }}
                                                >
                                                    {metric.value}
                                                </div>

                                                {/* Label */}
                                                <div 
                                                    className="text-lg font-semibold"
                                                    style={{ 
                                                        color: "var(--background-text, #3a3020)",
                                                        fontFamily: "var(--heading-font-family, Caveat)"
                                                    }}
                                                >
                                                    {metric.label}
                                                </div>

                                                {/* Description */}
                                                <div 
                                                    className="text-sm leading-relaxed px-2"
                                                    style={{ 
                                                        color: "var(--background-text, #3a3020)",
                                                        fontFamily: "var(--body-font-family, Lato)"
                                                    }}
                                                >
                                                    {metric.description}
                                                </div>
                                            </div>

                                            {/* Handwritten note at bottom */}
                                            <div 
                                                className="absolute bottom-2 left-4 text-xs transform -rotate-1"
                                                style={{ 
                                                    color: "var(--primary-color, #d4764e)",
                                                    fontFamily: "var(--heading-font-family, Caveat)",
                                                    opacity: 0.7
                                                }}
                                            >
                                                ♡
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PolaroidMemoirMetricsSlide