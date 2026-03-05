import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Crafting Excellence Together'),
    description: z.string().min(1).max(200).default('Our commitment to quality and thoughtful design creates meaningful experiences that resonate with our community. Every detail matters in building something beautiful and lasting.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Warm linen fabric texture with natural lighting')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Warm linen fabric texture with natural lighting'
    })
});

export const layoutId = 'linen-clean-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const LinenCleanImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
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
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div 
                                    className="w-[2px] h-4"
                                    style={{ backgroundColor: 'var(--stroke, rgba(140,120,81,0.15))' }}
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

                <div className="flex w-full h-full">
                    <div className="w-1/2 flex items-center justify-center p-10">
                        <div 
                            className="relative max-w-md p-8 rounded-xl"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.8))',
                                border: '1px solid rgba(140,120,81,0.08)',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}
                        >
                            <h1 
                                className="text-3xl font-normal leading-tight mb-4"
                                style={{ color: 'var(--background-text, #3a3530)' }}
                            >
                                {data.title}
                            </h1>
                            <div 
                                className="w-12 h-0.5 mb-4"
                                style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                            />
                            <p 
                                className="text-base leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #3a3530)',
                                    fontFamily: "var(--body-font-family, DM Sans)"
                                }}
                            >
                                {data.description}
                            </p>
                            <div 
                                className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                                style={{ 
                                    backgroundColor: 'var(--primary-color, #8c7851)',
                                    opacity: 0.3 
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center p-4">
                        <div className="relative">
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                                style={{
                                    border: '1px solid rgba(140,120,81,0.12)'
                                }}
                            />
                            <div 
                                className="absolute -bottom-3 -left-3 w-8 h-0.5"
                                style={{ 
                                    backgroundColor: 'var(--primary-color, #8c7851)',
                                    opacity: 0.4 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinenCleanImageTextSlide;