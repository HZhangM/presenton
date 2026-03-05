import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main slide title').default('NOIR STATEMENT'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Bold typography and stark geometric elements create maximum visual impact through pure contrast and intentional negative space.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Black and white architectural photography')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Black and white architectural photography'
    })
});

export const layoutId = 'monochrome-noir-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other in monochrome noir style.';

const MonochromeNoirImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Space Grotesk)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[60px] object-contain" 
                                    />
                                )}
                                <div 
                                    className="w-[2px] h-4"
                                    style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-bold"
                                        style={{ color: 'var(--background-text, #000000)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full">
                    <div className="w-1/2 relative overflow-hidden">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                        <div 
                            className="absolute inset-0 border-r-4"
                            style={{ borderColor: 'var(--primary-color, #000000)' }}
                        />
                    </div>

                    <div className="w-1/2 flex flex-col justify-center p-12" style={{ background: '#ffffff' }}>
                        <div className="space-y-6">
                            <div className="relative">
                                <div 
                                    className="absolute -left-8 top-0 w-2 h-full"
                                    style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                                />
                                <h1 
                                    className="text-4xl font-bold leading-tight tracking-tight"
                                    style={{ color: 'var(--background-text, #000000)' }}
                                >
                                    {data.title}
                                </h1>
                            </div>

                            <div 
                                className="h-1 w-20"
                                style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                            />

                            <p 
                                className="text-lg leading-relaxed font-medium"
                                style={{ color: 'var(--background-text, #000000)' }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-8 right-8 w-8 h-8 border-4"
                    style={{ borderColor: 'var(--primary-color, #000000)' }}
                />

                <div 
                    className="absolute bottom-8 left-1/2 w-16 h-1"
                    style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                />
            </div>
        </>
    );
};

export default MonochromeNoirImageTextSlide;