import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main heading for the slide').default('Technical Specifications'),
    description: z.string().min(1).max(200).describe('Description text content').default('Detailed analysis of system architecture and performance metrics for optimal deployment configuration.'),
    image: z.object({
        __image_url__: z.string(),
        __image_prompt__: z.string().min(10).max(50)
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Technical blueprint diagram with engineering schematics'
    })
});

export const layoutId = 'blueprint-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, styled with engineering blueprint aesthetics.';

const BlueprintImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, JetBrains Mono)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div 
                            className="flex items-center gap-4 p-3 border-2"
                            style={{ 
                                border: '1px dashed rgba(77,171,247,0.4)',
                                background: 'rgba(77,171,247,0.06)',
                                borderRadius: '2px'
                            }}
                        >
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-12 h-12 object-contain" />
                                )}
                                <span 
                                    className="text-xs font-mono font-medium tracking-wider"
                                    style={{ color: 'var(--primary-text, #0d2137)' }}
                                >
                                    {(data as any)?.__companyName__ || 'COMPANY'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full px-16 py-20 items-center gap-12">
                    <div className="flex-1 flex flex-col space-y-6">
                        <div className="relative">
                            <div 
                                className="absolute -left-4 -top-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            <div 
                                className="absolute -right-4 -top-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            
                            <div 
                                className="p-4 border"
                                style={{ 
                                    border: '1px dashed rgba(77,171,247,0.35)',
                                    background: 'rgba(77,171,247,0.06)',
                                    borderRadius: '2px'
                                }}
                            >
                                <div 
                                    className="text-xs font-mono font-medium mb-2 tracking-wider uppercase"
                                    style={{ color: 'var(--primary-color, #4dabf7)' }}
                                >
                                    TITLE BLOCK
                                </div>
                                <h1 
                                    className="text-3xl font-bold font-mono leading-tight"
                                    style={{ 
                                        color: 'var(--primary-text, #0d2137)',
                                        fontFamily: 'var(--heading-font-family, JetBrains Mono)'
                                    }}
                                >
                                    {data.title}
                                </h1>
                            </div>
                            
                            <div 
                                className="absolute -left-4 -bottom-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            <div 
                                className="absolute -right-4 -bottom-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                        </div>

                        <div 
                            className="w-full h-px"
                            style={{ 
                                borderTop: '1px dashed rgba(77,171,247,0.4)',
                                position: 'relative'
                            }}
                        >
                            <span 
                                className="absolute left-0 -top-1 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </span>
                            <span 
                                className="absolute right-0 -top-1 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </span>
                        </div>

                        <div 
                            className="p-4 border"
                            style={{ 
                                border: '1px dashed rgba(77,171,247,0.35)',
                                background: 'rgba(77,171,247,0.06)',
                                borderRadius: '2px'
                            }}
                        >
                            <div 
                                className="text-xs font-mono font-medium mb-3 tracking-wider uppercase"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                DESCRIPTION
                            </div>
                            <p 
                                className="text-base font-mono leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #c8d8e8)',
                                    fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative">
                            <div 
                                className="absolute -left-4 -top-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            <div 
                                className="absolute -right-4 -top-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            
                            <div 
                                className="w-full h-80 overflow-hidden border"
                                style={{ 
                                    border: '1px dashed rgba(77,171,247,0.35)',
                                    borderRadius: '2px'
                                }}
                            >
                                <img
                                    src={data.image?.__image_url__}
                                    alt={data.image?.__image_prompt__}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div 
                                className="absolute -left-4 -bottom-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                            <div 
                                className="absolute -right-4 -bottom-4 text-xs"
                                style={{ color: 'var(--primary-color, #4dabf7)' }}
                            >
                                +
                            </div>
                        </div>
                        
                        <div 
                            className="absolute -bottom-8 left-0 text-xs font-mono font-medium tracking-wider uppercase"
                            style={{ color: 'var(--primary-color, #4dabf7)' }}
                        >
                            FIG. 01
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-8 right-8 w-16 h-16 border opacity-30"
                    style={{ 
                        border: '1px dashed rgba(77,171,247,0.4)',
                        borderRadius: '2px'
                    }}
                >
                    <div 
                        className="absolute inset-0 flex items-center justify-center text-xs font-mono"
                        style={{ color: 'var(--primary-color, #4dabf7)' }}
                    >
                        +
                    </div>
                </div>

                <div 
                    className="absolute bottom-8 left-8 text-xs font-mono opacity-60"
                    style={{ color: 'var(--primary-color, #4dabf7)' }}
                >
                    SCALE 1:1
                </div>
            </div>
        </>
    );
};

export default BlueprintImageTextSlide;