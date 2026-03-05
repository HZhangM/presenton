import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main heading').default('Essential Balance'),
    description: z.string().min(20).max(200).describe('Descriptive text content').default('Embrace simplicity through thoughtful design. Each element serves a purpose, creating harmony between form and function in the pursuit of clarity.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('zen garden with stones and minimal arrangement')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'zen garden with stones and minimal arrangement'
    })
});

export const layoutId = 'minimalist-zen-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, featuring ultra-clean white space and Japanese-inspired typography';

const MinimalistZenImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Noto Serif JP)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain" />
                                )}
                                <div 
                                    className="w-px h-4"
                                    style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-light tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #2d2d2d)',
                                            fontFamily: "var(--body-font-family, Noto Sans JP)"
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
                    <div className="flex-1 flex flex-col justify-center px-16 py-24">
                        <div className="max-w-md">
                            <h1 
                                className="text-4xl font-normal leading-tight mb-8 tracking-wide"
                                style={{ 
                                    color: 'var(--primary-color, #1a1a1a)',
                                    fontFamily: "var(--heading-font-family, Noto Serif JP)"
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <div 
                                className="w-12 h-px mb-8 mx-auto"
                                style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                            />
                            
                            <p 
                                className="text-base font-light leading-relaxed tracking-wide"
                                style={{ 
                                    color: 'var(--background-text, #2d2d2d)',
                                    fontFamily: "var(--body-font-family, Noto Sans JP)"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 relative">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div 
                    className="absolute top-1/3 left-8 w-3 h-3 rounded-full opacity-20"
                    style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                />
                
                <div 
                    className="absolute bottom-1/4 right-16 w-20 h-px opacity-30"
                    style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                />
            </div>
        </>
    );
};

export default MinimalistZenImageTextSlide;