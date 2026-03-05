import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Growing Your Green Business'),
    description: z.string().min(10).max(200).default('Discover sustainable practices and eco-friendly strategies that will help your business flourish while maintaining environmental responsibility and fostering long-term growth.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Sustainable Operations'),
        description: z.string().min(10).max(100).default('Implement eco-friendly processes that reduce environmental impact while increasing efficiency.')
    })).min(2).max(4).default([
        {
            title: 'Sustainable Operations',
            description: 'Implement eco-friendly processes that reduce environmental impact while increasing efficiency.'
        },
        {
            title: 'Green Supply Chain',
            description: 'Build partnerships with environmentally conscious suppliers and vendors for better outcomes.'
        },
        {
            title: 'Energy Efficiency',
            description: 'Optimize resource usage through smart technology and renewable energy solutions.'
        }
    ])
});

export const layoutId = 'botanical-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in botanical garden theme';

const BotanicalContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bodoni Moda)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }} className='w-[2px] h-4'></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-16 right-16 opacity-10" style={{ color: 'var(--primary-color, #558b2f)' }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="currentColor">
                        <path d="M20 40 Q60 10, 100 40 Q80 60, 60 50 Q40 60, 20 40" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <circle cx="25" cy="35" r="2" fill="currentColor"/>
                        <circle cx="45" cy="55" r="1.5" fill="currentColor"/>
                        <circle cx="75" cy="30" r="2" fill="currentColor"/>
                        <circle cx="95" cy="50" r="1.5" fill="currentColor"/>
                    </svg>
                </div>

                <div className="absolute bottom-20 left-8 opacity-8" style={{ color: 'var(--primary-color, #558b2f)' }}>
                    <svg width="60" height="100" viewBox="0 0 60 100" fill="currentColor">
                        <path d="M30 90 Q20 70, 25 50 Q35 30, 30 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <ellipse cx="22" cy="55" rx="3" ry="1.5" fill="currentColor" opacity="0.6"/>
                        <ellipse cx="38" cy="35" rx="2.5" ry="1" fill="currentColor" opacity="0.6"/>
                        <ellipse cx="28" cy="75" rx="2" ry="1" fill="currentColor" opacity="0.6"/>
                    </svg>
                </div>

                <div className="flex flex-col h-full px-16 py-20">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--background-text, #2d3a2e)', fontFamily: 'var(--heading-font-family, Bodoni Moda)' }}>
                            {title}
                        </h1>
                        
                        <div className="flex items-center mb-4">
                            <div style={{ backgroundColor: 'var(--primary-color, #558b2f)' }} className="w-16 h-1 rounded-full mr-3"></div>
                            <div style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }} className="w-8 h-0.5 rounded-full"></div>
                        </div>
                        
                        <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--background-text, #2d3a2e)', fontFamily: 'var(--body-font-family, Lato)' }}>
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-8 mt-8">
                        {keyPoints?.map((point, index) => (
                            <div key={index} className="p-8 rounded-xl" style={{ 
                                background: 'var(--card-color, rgba(255, 255, 255, 0.75))', 
                                border: '1px solid rgba(85,139,47,0.1)' 
                            }}>
                                <div className="flex items-start mb-4">
                                    <div className="mr-4 mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 0 L7 4 L6 8 L5 4 Z" fill="var(--primary-color, #558b2f)" opacity="0.8"/>
                                            <path d="M0 6 L4 7 L8 6 L4 5 Z" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ 
                                        color: 'var(--primary-color, #558b2f)', 
                                        fontFamily: 'var(--heading-font-family, Bodoni Moda)' 
                                    }}>
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-base leading-relaxed" style={{ 
                                    color: 'var(--background-text, #2d3a2e)', 
                                    fontFamily: 'var(--body-font-family, Lato)' 
                                }}>
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BotanicalContentSlide;