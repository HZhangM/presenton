import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Editorial Insights & Analysis'),
    description: z.string().min(20).max(200).default('Exploring the key findings and strategic recommendations that emerged from our comprehensive market research and editorial analysis of consumer behavior trends.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Market Disruption Analysis'),
        description: z.string().min(20).max(100).default('Emerging technologies are reshaping consumer expectations and creating new opportunities.')
    })).min(2).max(4).default([
        {
            title: 'Consumer Behavior Shift',
            description: 'Digital-first preferences are driving 73% of purchasing decisions across all demographics.'
        },
        {
            title: 'Brand Loyalty Evolution',
            description: 'Traditional loyalty models are being replaced by value-driven relationship frameworks.'
        },
        {
            title: 'Technology Integration',
            description: 'AI and personalization tools are becoming essential for competitive advantage.'
        }
    ])
});

export const layoutId = 'magazine-editorial-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in bold editorial magazine style.';

const MagazineEditorialContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4 pb-4" style={{ borderBottom: '2px solid #1a1a1a' }}>
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div className="w-[2px] h-5" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-bold" 
                                          style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="px-12 py-16 h-full flex flex-col" style={{ paddingTop: (data as any)?.__companyName__ || (data as any)?._logo_url__ ? '80px' : '64px' }}>
                    
                    {/* Large Drop Number Decoration */}
                    <div className="absolute top-20 right-12 opacity-10 text-9xl font-bold" 
                         style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                        01
                    </div>

                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-normal leading-tight mb-4" 
                            style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                            {title}
                        </h1>
                        <div className="w-24 h-1" style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <p className="text-xl leading-relaxed max-w-4xl" 
                           style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                            {description}
                        </p>
                    </div>

                    {/* Strong Horizontal Rule */}
                    <div className="w-full h-1 mb-4" style={{ backgroundColor: '#1a1a1a' }}></div>

                    {/* Key Points Grid */}
                    <div className="grid grid-cols-2 gap-8 flex-1">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-5 border-2 bg-white"
                                 style={{ border: '2px solid #1a1a1a', background: '#ffffff', borderRadius: '0' }}>
                                <div className="mb-4">
                                    <span className="text-sm font-bold tracking-widest uppercase" 
                                          style={{ color: 'var(--primary-color, #e53935)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-normal mt-2 leading-tight"
                                        style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-base leading-relaxed"
                                   style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pull Quote Decoration */}
                    <div className="absolute bottom-12 left-12 w-1 h-32 opacity-20" 
                         style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
                </div>
            </div>
        </>
    );
};

export default MagazineEditorialContentSlide;