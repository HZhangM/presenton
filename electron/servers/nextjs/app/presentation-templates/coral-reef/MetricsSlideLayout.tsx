import React from 'react'
import * as z from "zod";

export const layoutId = 'coral-reef-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A vibrant coral reef themed slide showcasing 2-4 key numeric metrics with labels and descriptions in organic, tropical styling'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Growth Rate').meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).default('250%').meta({
            description: "Metric value (e.g., 150+, 95%, $2M). Keep simple."
        }),
        description: z.string().min(10).max(150).default('Our platform has achieved exceptional growth through innovative features and dedicated customer success initiatives.').meta({
            description: "Detailed description explaining the metric"
        }),
    })).min(2).max(4).default([
        {
            label: 'User Growth',
            value: '250%',
            description: 'Our platform has achieved exceptional growth through innovative features and dedicated customer success initiatives.'
        },
        {
            label: 'Revenue',
            value: '$2.4M',
            description: 'Strong revenue performance driven by premium subscriptions and enterprise partnerships across multiple markets.'
        },
        {
            label: 'Satisfaction',
            value: '98%',
            description: 'Industry-leading customer satisfaction scores reflecting our commitment to user experience and support quality.'
        },
        {
            label: 'Retention',
            value: '94%',
            description: 'Exceptional customer retention rates demonstrate the lasting value and engagement of our platform solutions.'
        }
    ]).meta({
        description: "List of key business metrics to display",
    })
})

export { Schema }

interface CoralReefMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const CoralReefMetricsSlide: React.FC<CoralReefMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Comfortaa)" 
                }}
            >
                {/* Decorative blob shapes */}
                <div className="absolute top-12 left-16 w-32 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path 
                            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.1C64.8,55,53.8,66.2,40.6,73.8C27.4,81.4,11.9,85.4,-4.1,91.4C-20.2,97.4,-40.4,105.4,-56.2,101.2C-72,97,-83.4,80.6,-88.6,63.1C-93.8,45.6,-92.8,27,-87.9,10.8C-83,-5.4,-74.2,-19.2,-67.8,-35.1C-61.4,-51,-57.4,-69,-47.3,-76.2C-37.2,-83.4,-18.6,-79.8,-0.9,-78.5C16.8,-77.2,30.6,-83.6,44.7,-76.4Z" 
                            fill="var(--primary-color, #ff6b6b)"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-16 right-20 w-28 h-28 opacity-15 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path 
                            d="M37.1,-63.8C48.9,-56.2,59.4,-45.4,66.8,-32.4C74.2,-19.4,78.5,-4.2,77.8,11.2C77.1,26.6,71.4,42.2,62.3,55.4C53.2,68.6,40.7,79.4,26.4,84.9C12.1,90.4,-4,90.6,-19.3,86.2C-34.6,81.8,-49.1,72.8,-60.2,60.4C-71.3,48,-78.9,32.2,-81.4,15.7C-83.9,-0.8,-81.3,-18,-74.1,-32.8C-66.9,-47.6,-55.1,-60,-41.2,-67.4C-27.3,-74.8,-11.3,-77.2,2.8,-81.5C16.9,-85.8,25.3,-71.4,37.1,-63.8Z" 
                            fill="#17a2b8"
                        />
                    </svg>
                </div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-semibold" 
                                    style={{ color: 'var(--background-text, #2d3436)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="relative z-10 px-8 pt-12 pb-8 flex-1 flex flex-col">
                    {/* Title section */}
                    <div className="text-center mb-6">
                        <h1 
                            className="text-4xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #2d3436)",
                                fontFamily: "var(--heading-font-family, Comfortaa)"
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        
                        {/* Wavy divider */}
                        <div className="flex justify-center">
                            <svg width="120" height="8" viewBox="0 0 120 8" className="opacity-60">
                                <path 
                                    d="M0 4c10 0 10-4 20-4s10 4 20 4 10-4 20-4 10 4 20 4 10-4 20-4 10 4 20 4 10-4 20-4" 
                                    stroke="var(--primary-color, #ff6b6b)" 
                                    strokeWidth="2" 
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Metrics grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-4"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.7))",
                                        border: "1px solid rgba(255,255,255,0.5)",
                                        borderRadius: "24px",
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    {/* Metric label */}
                                    <div 
                                        className="text-sm font-medium mb-2"
                                        style={{ 
                                            color: "var(--background-text, #2d3436)",
                                            fontFamily: "var(--body-font-family, Rubik)"
                                        }}
                                    >
                                        {metric.label}
                                    </div>

                                    {/* Large metric value */}
                                    <div 
                                        className="text-4xl font-bold mb-3"
                                        style={{ 
                                            color: index % 2 === 0 ? "var(--primary-color, #ff6b6b)" : "#17a2b8",
                                            fontFamily: "var(--heading-font-family, Comfortaa)"
                                        }}
                                    >
                                        {metric.value}
                                    </div>

                                    {/* Description */}
                                    <div 
                                        className="text-xs leading-relaxed px-2"
                                        style={{ 
                                            color: "var(--background-text, #2d3436)",
                                            fontFamily: "var(--body-font-family, Rubik)"
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

export default CoralReefMetricsSlide