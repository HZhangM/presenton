import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main title').default('Expanding Horizons'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Our journey through the cosmos of innovation continues as we push the boundaries of what\'s possible, exploring new frontiers in technology and human potential.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Futuristic space exploration scene with stars')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Futuristic space exploration scene with stars'
    })
});

export const layoutId = 'starfield-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const StarfieldImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Exo 2)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(124, 77, 255, 0.25))' }}
                                    className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span 
                                    className="text-sm font-semibold" 
                                    style={{ color: 'var(--background-text, #d0d0f0)' }}
                                >
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full px-16 py-20 items-center justify-between gap-12">
                    <div className="flex flex-col flex-1 max-w-[500px] z-10">
                        <div className="relative">
                            <h1
                                className="text-[48px] font-bold leading-[1.1] tracking-[-1px] mb-6"
                                style={{
                                    color: 'var(--primary-text, #ffffff)',
                                    textShadow: '0 0 20px rgba(124, 77, 255, 0.3)'
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <div 
                                className="w-24 h-1 mb-8 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, var(--primary-color, #7c4dff) 0%, transparent 100%)',
                                    boxShadow: '0 0 10px rgba(124, 77, 255, 0.4)'
                                }}
                            />
                        </div>

                        <p
                            className="text-lg font-light leading-relaxed"
                            style={{
                                color: 'var(--background-text, #d0d0f0)'
                            }}
                        >
                            {data.description}
                        </p>
                    </div>

                    <div className="flex flex-1 justify-end items-center">
                        <div 
                            className="w-[450px] h-[320px] overflow-hidden rounded-xl relative"
                            style={{
                                border: '1px solid rgba(124,77,255,0.15)',
                                background: 'rgba(124,77,255,0.06)',
                                backdropFilter: 'blur(8px)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(45deg, rgba(124, 77, 255, 0.1) 0%, transparent 50%)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-32 right-24 w-2 h-2 rounded-full opacity-60"
                    style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 8px rgba(124, 77, 255, 0.6)' }}
                />
                <div 
                    className="absolute top-48 right-48 w-1 h-1 rounded-full opacity-40"
                    style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 4px rgba(124, 77, 255, 0.4)' }}
                />
                <div 
                    className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full opacity-50"
                    style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 6px rgba(124, 77, 255, 0.5)' }}
                />
            </div>
        </>
    );
};

export default StarfieldImageTextSlide;