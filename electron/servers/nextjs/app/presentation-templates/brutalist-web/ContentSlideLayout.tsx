import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('BRUTALIST DESIGN PRINCIPLES'),
    description: z.string().min(10).max(200).default('Raw functionality meets uncompromising aesthetics. These core principles drive our approach to digital experiences that reject superficial polish.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('EXPOSED STRUCTURE'),
        description: z.string().min(10).max(100).default('Show the underlying framework. Make technical decisions visible and intentional.')
    })).min(2).max(4).default([
        {
            title: 'EXPOSED STRUCTURE',
            description: 'Show the underlying framework. Make technical decisions visible and intentional.'
        },
        {
            title: 'HEAVY TYPOGRAPHY',
            description: 'Bold, condensed fonts that command attention. Typography as architectural element.'
        },
        {
            title: 'ZERO COMPROMISE',
            description: 'Function over form. Every element serves a purpose. No decorative fluff.'
        },
        {
            title: 'RAW MATERIALS',
            description: 'Celebrate the medium. Pixels, borders, and code as honest building blocks.'
        }
    ])
});

export const layoutId = 'brutalist-web-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in brutalist web design style';

const BrutalistContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Anton)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-6 pt-4 z-30">
                        <div className="flex items-center gap-3" style={{ fontFamily: "var(--body-font-family, 'IBM Plex Mono')" }}>
                            {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain" />}
                            <div className="w-1 h-6" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
                            {(data as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-bold tracking-wide uppercase" 
                                    style={{ color: 'var(--background-text, #111111)' }}
                                >
                                    {(data as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-6 w-12 h-12 opacity-20" style={{ backgroundColor: 'var(--primary-color, #ff4500)' }}></div>

                <div className="h-full flex flex-col px-8 py-16">
                    <div className="flex-shrink-0 mb-6">
                        <div className="mb-4">
                            <h1 
                                className="text-4xl font-black tracking-tight leading-none uppercase mb-3"
                                style={{ 
                                    color: 'var(--background-text, #111111)',
                                    fontFamily: "var(--heading-font-family, Anton)"
                                }}
                            >
                                {title}
                            </h1>
                            <div className="w-full h-1" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
                        </div>
                        
                        <p 
                            className="text-base font-medium leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #111111)',
                                fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col p-4"
                                    style={{
                                        border: '4px solid #111111',
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                        borderRadius: '0',
                                        boxShadow: '6px 6px 0 #111111'
                                    }}
                                >
                                    <div className="flex items-start gap-3 mb-2">
                                        <div 
                                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-black"
                                            style={{ 
                                                backgroundColor: 'var(--primary-color, #ff4500)',
                                                color: 'var(--primary-text, #ffffff)'
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 
                                            className="flex-1 min-w-0 text-sm font-black uppercase leading-tight"
                                            style={{ 
                                                color: 'var(--background-text, #111111)',
                                                fontFamily: "var(--heading-font-family, Anton)"
                                            }}
                                        >
                                            {point.title}
                                        </h3>
                                    </div>
                                    
                                    <p 
                                        className="text-xs font-medium leading-relaxed flex-1"
                                        style={{ 
                                            color: 'var(--background-text, #111111)',
                                            fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
                                        }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-8 w-20 h-2 opacity-30" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
            </div>
        </>
    );
};

export default BrutalistContentSlide;