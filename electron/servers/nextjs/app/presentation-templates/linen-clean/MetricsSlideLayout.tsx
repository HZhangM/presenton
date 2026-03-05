import React from 'react'
import * as z from "zod";

export const layoutId = 'linen-clean-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A metrics slide with linen clean theme showcasing key numeric metrics with warm neutral styling'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Key Metrics'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Revenue Growth'),
        value: z.string().min(1).max(10).default('127%'),
        description: z.string().min(10).max(150).default('Year-over-year revenue growth demonstrates strong market demand and effective business strategy execution.')
    })).min(2).max(4).default([
        {
            label: 'Revenue Growth',
            value: '127%',
            description: 'Year-over-year revenue growth demonstrates strong market demand and effective business strategy execution.'
        },
        {
            label: 'Customer Base',
            value: '2,400+',
            description: 'Active customers trust our platform daily, showcasing product-market fit and customer satisfaction.'
        },
        {
            label: 'Market Share',
            value: '18%',
            description: 'Leading position in our target market segment with continued expansion opportunities ahead.'
        },
        {
            label: 'Team Growth',
            value: '85+',
            description: 'Talented professionals driving innovation and delivering exceptional results for our customers.'
        }
    ])
});

export { Schema }

const LinenCleanMetricsSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || [];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, DM Serif Text)" 
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-16 left-16 w-32 h-px opacity-30" style={{ backgroundColor: "var(--primary-color, #8c7851)" }}></div>
                <div className="absolute top-20 left-20 w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: "var(--primary-color, #8c7851)" }}></div>
                <div className="absolute bottom-20 right-16 w-24 h-px opacity-30" style={{ backgroundColor: "var(--primary-color, #8c7851)" }}></div>
                <div className="absolute bottom-16 right-20 w-2 h-2 rounded-full opacity-25" style={{ backgroundColor: "var(--primary-color, #8c7851)" }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium"
                                    style={{ 
                                        color: 'var(--background-text, #3a3530)',
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="px-12 py-16 flex flex-col h-full justify-center">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl font-normal"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--heading-font-family, DM Serif Text)"
                            }}
                        >
                            {slideData?.title || 'Key Metrics'}
                        </h1>
                        <div 
                            className="w-16 h-px mx-auto mt-6 opacity-40"
                            style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                        ></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {metrics.map((metric, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl border text-center"
                                style={{ 
                                    background: "var(--card-color, rgba(255, 255, 255, 0.8))",
                                    border: "1px solid rgba(140,120,81,0.08)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                                }}
                            >
                                <div 
                                    className="text-sm font-medium mb-3"
                                    style={{ 
                                        color: "var(--primary-color, #8c7851)",
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {metric.label}
                                </div>
                                <div 
                                    className="text-4xl font-bold mb-4"
                                    style={{ 
                                        color: "var(--background-text, #3a3530)",
                                        fontFamily: "var(--heading-font-family, DM Serif Text)"
                                    }}
                                >
                                    {metric.value}
                                </div>
                                <p 
                                    className="text-sm leading-relaxed"
                                    style={{ 
                                        color: "var(--background-text, #3a3530)",
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinenCleanMetricsSlide