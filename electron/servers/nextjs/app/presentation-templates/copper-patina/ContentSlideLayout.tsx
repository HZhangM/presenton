import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Industrial Innovation'),
    description: z.string().min(1).max(200).default('Exploring the intersection of traditional craftsmanship and modern manufacturing processes to create sustainable solutions for tomorrow\'s challenges.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).default('Advanced Manufacturing'),
        description: z.string().min(1).max(100).default('Implementing cutting-edge technology while maintaining artisanal quality standards.')
    })).min(2).max(4).default([
        {
            title: 'Sustainable Materials',
            description: 'Utilizing recycled copper and eco-friendly patina processes to reduce environmental impact.'
        },
        {
            title: 'Quality Control',
            description: 'Rigorous testing protocols ensure consistent finish and durability across all products.'
        },
        {
            title: 'Design Innovation',
            description: 'Merging traditional metalworking techniques with contemporary aesthetic principles.'
        },
        {
            title: 'Market Expansion',
            description: 'Growing demand for authentic industrial finishes in architectural applications.'
        }
    ])
});

export const layoutId = 'copper-patina-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring aged copper surface aesthetics with verdigris green patina tones and refined industrial typography.';

const CopperPatinaContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Abril Fatface)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 object-contain flex-shrink-0" />}
                                <div className="w-0.5 h-4 flex-shrink-0" style={{ backgroundColor: 'var(--stroke, rgba(184, 115, 51, 0.25))' }}></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #f0e8d8)', fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-8 w-3 h-3 rounded-full opacity-60" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                <div className="absolute top-8 right-12 w-2 h-2 rounded-full opacity-40" style={{ background: 'var(--primary-color, #b87333)' }}></div>

                <div className="absolute bottom-6 left-0 right-0 h-px opacity-30" style={{ background: 'var(--stroke, rgba(184, 115, 51, 0.25))' }}>
                    <div className="absolute left-8 top-0 w-2 h-2 rounded-full -translate-y-1/2" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                    <div className="absolute right-8 top-0 w-2 h-2 rounded-full -translate-y-1/2" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                </div>

                <div className="flex flex-col h-full px-8 py-16 gap-6">
                    <div className="flex-shrink-0">
                        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--background-text, #f0e8d8)' }}>
                            {title}
                        </h1>
                        <p className="text-lg leading-relaxed max-w-4xl" style={{ color: 'var(--background-text, #f0e8d8)', fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                            {description}
                        </p>
                        <div className="mt-4 h-px" style={{ background: 'var(--stroke, rgba(184, 115, 51, 0.25))' }}>
                            <div className="w-2 h-2 rounded-full -translate-y-1/2" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div key={index} className="relative p-4 rounded-lg border" style={{ 
                                    background: 'var(--card-color, rgba(255, 245, 230, 0.8))',
                                    border: '1px solid rgba(184, 115, 51, 0.2)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}>
                                    <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary-color, #b87333)' }}></div>
                                    
                                    <h3 className="text-lg font-semibold mb-2 pr-4" style={{ 
                                        color: 'var(--primary-text, #1a1a1a)',
                                        fontFamily: 'var(--body-font-family, Fira Sans)'
                                    }}>
                                        {point.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ 
                                        color: 'var(--primary-text, #1a1a1a)',
                                        fontFamily: 'var(--body-font-family, Fira Sans)'
                                    }}>
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

export default CopperPatinaContentSlide;