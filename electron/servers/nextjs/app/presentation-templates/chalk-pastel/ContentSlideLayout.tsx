import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Creative Workshop Results'),
    description: z.string().min(20).max(200).default('Our latest artistic exploration has yielded beautiful insights and new techniques that showcase the power of chalk pastel mediums in contemporary design work.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Enhanced Color Blending'),
        description: z.string().min(20).max(100).default('Discovered new techniques for seamless color transitions using layered chalk applications.')
    })).min(2).max(4).default([
        {
            title: 'Enhanced Color Blending',
            description: 'Discovered new techniques for seamless color transitions using layered chalk applications.'
        },
        {
            title: 'Texture Development',
            description: 'Mastered creating depth through varied stroke patterns and pressure techniques.'
        },
        {
            title: 'Artistic Expression',
            description: 'Explored emotional storytelling through warm pastel color palettes and compositions.'
        }
    ])
});

export const layoutId = 'chalk-pastel-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in chalk pastel art style';

const ChalkPastelContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Kalam)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(229, 115, 115, 0.25))' }} className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a3530)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="p-16 pt-24 h-full flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-4 relative" 
                            style={{ color: 'var(--background-text, #3a3530)', fontFamily: 'var(--heading-font-family, Kalam)' }}>
                            {title}
                            <svg className="absolute -bottom-2 left-0 w-40 h-3" viewBox="0 0 160 12" fill="none">
                                <path d="M2 8C20 4 40 10 60 6C80 2 100 8 120 4C130 2 140 6 158 4" 
                                      stroke="var(--primary-color, #e57373)" strokeWidth="3" fill="none" 
                                      style={{ filter: 'url(#roughPaper)' }} />
                            </svg>
                        </h1>
                        <p className="text-lg leading-relaxed max-w-3xl" 
                           style={{ color: 'var(--background-text, #3a3530)', fontFamily: 'var(--body-font-family, Nunito)' }}>
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-6">
                        {keyPoints?.map((point, index) => (
                            <div key={index} className="p-6 relative" 
                                 style={{ 
                                     background: 'var(--card-color, rgba(255, 255, 255, 0.45))', 
                                     border: '2px solid var(--stroke, rgba(229,115,115,0.15))', 
                                     borderRadius: '16px' 
                                 }}>
                                <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full" 
                                     style={{ backgroundColor: index % 3 === 0 ? '#FFB74D' : index % 3 === 1 ? '#64B5F6' : 'var(--primary-color, #e57373)' }}></div>
                                <h3 className="text-xl font-bold mb-3" 
                                    style={{ color: 'var(--background-text, #3a3530)', fontFamily: 'var(--heading-font-family, Kalam)' }}>
                                    {point.title}
                                </h3>
                                <p className="text-base leading-relaxed" 
                                   style={{ color: 'var(--background-text, #3a3530)', fontFamily: 'var(--body-font-family, Nunito)' }}>
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <svg className="absolute top-1/3 right-8 opacity-10 w-32 h-32" viewBox="0 0 128 128" fill="none">
                        <circle cx="64" cy="64" r="30" fill="var(--primary-color, #e57373)" opacity="0.3"/>
                        <circle cx="80" cy="50" r="20" fill="#FFB74D" opacity="0.3"/>
                        <circle cx="50" cy="80" r="15" fill="#64B5F6" opacity="0.3"/>
                    </svg>

                    <svg className="absolute bottom-16 left-8 opacity-10" width="200" height="20" viewBox="0 0 200 20" fill="none">
                        <path d="M5 10C25 6 45 14 65 10C85 6 105 14 125 10C145 6 165 14 195 10" 
                              stroke="var(--primary-color, #e57373)" strokeWidth="2" fill="none" opacity="0.4"/>
                    </svg>
                </div>

                <defs>
                    <filter id="roughPaper">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                    </filter>
                </defs>
            </div>
        </>
    );
};

export default ChalkPastelContentSlide;