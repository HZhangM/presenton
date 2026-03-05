import React from 'react'
import * as z from "zod";

export const layoutId = 'copper-patina-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A slide showcasing 2-4 key numeric metrics with labels and descriptions in copper patina theme'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
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
            label: 'Clients Onboarded',
            description: 'Successfully built a diverse client base across multiple industries with consistent growth.'
        },
        {
            value: '95%',
            label: 'Satisfaction Rate',
            description: 'Maintaining exceptional client satisfaction through dedicated service and quality delivery.'
        },
        {
            value: '200+',
            label: 'Projects Completed',
            description: 'Delivered comprehensive solutions meeting diverse client needs and requirements.'
        },
        {
            value: '$2.5M',
            label: 'Revenue Generated',
            description: 'Achieved significant revenue growth through strategic partnerships and expansion.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface CopperPatinaMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const CopperPatinaMetricsSlide: React.FC<CopperPatinaMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Abril Fatface)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ 
                                color: 'var(--background-text, #f0e8d8)',
                                fontFamily: 'var(--body-font-family, Fira Sans)'
                            }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative rivet elements */}
                <div className="absolute top-6 left-6 w-2 h-2 rounded-full opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>

                {/* Industrial accent lines */}
                <div className="absolute top-0 left-20 w-px h-16 opacity-15" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute top-0 right-20 w-px h-16 opacity-15" style={{ background: "var(--primary-color, #b87333)" }}></div>

                <div className="px-8 pt-12 pb-8 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4" style={{ 
                            color: "var(--background-text, #f0e8d8)",
                            fontFamily: "var(--heading-font-family, Abril Fatface)"
                        }}>
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        
                        {/* Decorative divider with circle endpoints */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            <div className="w-1 h-1 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                            <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(184, 115, 51, 0.25))" }}></div>
                            <div className="w-1 h-1 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                            {metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div 
                                        className="p-5 rounded-md shadow-sm border h-full flex flex-col justify-center"
                                        style={{ 
                                            background: "var(--card-color, rgba(255, 245, 230, 0.8))",
                                            border: "1px solid var(--stroke, rgba(184, 115, 51, 0.25))",
                                            borderRadius: "6px",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                                        }}
                                    >
                                        {/* Metric Value */}
                                        <div className="mb-2">
                                            <div className="text-3xl font-bold mb-1" style={{ 
                                                color: "var(--primary-color, #b87333)",
                                                fontFamily: "var(--heading-font-family, Abril Fatface)"
                                            }}>
                                                {metric.value}
                                            </div>
                                            <div className="text-sm font-medium uppercase tracking-wide" style={{ 
                                                color: "var(--primary-text, #1a1a1a)",
                                                fontFamily: "var(--body-font-family, Fira Sans)"
                                            }}>
                                                {metric.label}
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <div className="text-xs leading-relaxed" style={{ 
                                            color: "var(--primary-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, Fira Sans)"
                                        }}>
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

export default CopperPatinaMetricsSlide