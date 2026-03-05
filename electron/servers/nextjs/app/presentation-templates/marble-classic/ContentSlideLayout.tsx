import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Strategic Content Framework'),
    description: z.string().min(10).max(200).default('Our comprehensive approach to delivering exceptional results through thoughtful planning and precise execution across all key initiatives.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Market Analysis & Strategy'),
        description: z.string().min(10).max(100).default('Comprehensive market research and strategic planning to identify opportunities and optimize performance.')
    })).min(2).max(4).default([
        {
            title: 'Market Analysis & Strategy',
            description: 'Comprehensive market research and strategic planning to identify opportunities and optimize performance.'
        },
        {
            title: 'Implementation Excellence',
            description: 'Systematic execution of initiatives with careful attention to detail and continuous monitoring.'
        },
        {
            title: 'Performance Optimization',
            description: 'Data-driven refinements and improvements to maximize ROI and achieve sustainable growth.'
        }
    ])
});

export const layoutId = 'marble-classic-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in classical marble elegance.';

const MarbleClassicContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}
                                    className='w-[1px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #2a2a2a)', fontFamily: 'var(--body-font-family, Montserrat)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="px-12 py-16 h-full flex flex-col">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: 'var(--background-text, #2a2a2a)',
                                letterSpacing: '0.02em',
                                lineHeight: '1.1'
                            }}
                        >
                            {title}
                        </h1>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}></div>
                            <div 
                                className="w-2 h-2 rotate-45"
                                style={{ background: 'var(--primary-color, #4a4a4a)' }}
                            ></div>
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--primary-color, #4a4a4a)',
                                fontFamily: 'var(--body-font-family, Montserrat)',
                                fontWeight: 400
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded"
                                style={{
                                    background: 'var(--card-color, rgba(255,255,255,0.7))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
                                }}
                            >
                                <h3 
                                    className="text-xl font-semibold mb-3"
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        letterSpacing: '0.01em'
                                    }}
                                >
                                    {point?.title}
                                </h3>
                                <p 
                                    className="text-base leading-relaxed"
                                    style={{ 
                                        color: 'var(--primary-color, #4a4a4a)',
                                        fontFamily: 'var(--body-font-family, Montserrat)',
                                        fontWeight: 400
                                    }}
                                >
                                    {point?.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div 
                        className="absolute top-32 right-16 w-16 h-16 opacity-5"
                        style={{ 
                            background: 'var(--primary-color, #4a4a4a)',
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                        }}
                    ></div>
                    
                    <div 
                        className="absolute bottom-20 left-8 w-12 h-12 opacity-5 rounded-full"
                        style={{ background: 'var(--primary-color, #4a4a4a)' }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default MarbleClassicContentSlide;