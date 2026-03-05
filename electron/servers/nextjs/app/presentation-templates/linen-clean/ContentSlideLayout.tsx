import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Building Sustainable Growth'),
    description: z.string().min(20).max(200).default('A comprehensive approach to developing long-term strategies that drive meaningful results while maintaining organizational values and stakeholder trust.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Strategic Foundation'),
        description: z.string().min(20).max(100).default('Establish clear objectives and measurable outcomes that align with your core mission and values.')
    })).min(2).max(4).default([
        {
            title: 'Strategic Foundation',
            description: 'Establish clear objectives and measurable outcomes that align with your core mission and values.'
        },
        {
            title: 'Market Intelligence',
            description: 'Leverage data-driven insights to understand customer needs and competitive landscape dynamics.'
        },
        {
            title: 'Operational Excellence',
            description: 'Streamline processes and optimize resources to deliver consistent quality and efficiency gains.'
        },
        {
            title: 'Innovation Pipeline',
            description: 'Foster creative thinking and continuous improvement to stay ahead of industry trends.'
        }
    ])
});

export const layoutId = 'linen-clean-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in warm linen-themed styling';

const LinenCleanContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

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
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[36px] h-[36px] object-contain" />
                                )}
                                <div 
                                    className="w-[1px] h-4" 
                                    style={{ backgroundColor: 'var(--stroke, rgba(140, 120, 81, 0.15))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ 
                                            color: 'var(--background-text, #3a3530)',
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-12 right-16 w-2 h-2 rounded-full opacity-20"
                    style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                />
                <div 
                    className="absolute bottom-20 left-12 w-16 h-[1px] opacity-15"
                    style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                />

                <div className="flex flex-col h-full p-8 pt-16">
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-6">
                        <h1 
                            className="text-4xl font-normal mb-4 leading-tight"
                            style={{ 
                                color: 'var(--background-text, #3a3530)',
                                fontFamily: "var(--heading-font-family, DM Serif Text)"
                            }}
                        >
                            {title}
                        </h1>
                        <p 
                            className="text-lg leading-relaxed mb-4 max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #3a3530)',
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}
                        >
                            {description}
                        </p>
                        <div 
                            className="w-full h-[1px] opacity-20"
                            style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                        />
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.slice(0, 4).map((point, index) => (
                                <div 
                                    key={index}
                                    className="p-4 rounded-xl border flex flex-col"
                                    style={{
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.8))',
                                        border: '1px solid rgba(140,120,81,0.08)',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    <h3 
                                        className="text-lg font-semibold mb-2 leading-snug flex-shrink-0"
                                        style={{ 
                                            color: 'var(--primary-color, #8c7851)',
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-sm leading-relaxed flex-1 min-w-0"
                                        style={{ 
                                            color: 'var(--background-text, #3a3530)',
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinenCleanContentSlide;