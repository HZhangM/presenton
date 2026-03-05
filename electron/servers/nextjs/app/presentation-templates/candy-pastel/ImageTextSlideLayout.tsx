import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Sweet Dreams & Big Ideas'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Transform your creative visions into reality with our playful and innovative approach to design. We believe every project should sparkle with personality and charm.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Colorful pastel workspace with creative tools')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Colorful pastel workspace with creative tools'
    })
});

export const layoutId = 'candy-pastel-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const CandyPastelImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Fredoka)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain rounded-full" />}
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-color, #ab47bc)' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-semibold px-3 py-1 rounded-full" 
                                        style={{ 
                                            color: 'var(--primary-text, #ffffff)', 
                                            backgroundColor: 'var(--primary-color, #ab47bc)' 
                                        }}>
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-12 opacity-20">
                    <div className="w-16 h-16 rounded-full" style={{ backgroundColor: '#ffb3e6' }}></div>
                </div>
                <div className="absolute bottom-24 left-8 opacity-15">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#b3d9ff' }}></div>
                </div>
                <div className="absolute top-32 left-16 opacity-10">
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ffffb3' }}></div>
                </div>

                <div className="flex w-full h-full items-center justify-between gap-12 px-16 py-20">
                    {/* Left Content Column */}
                    <div className="flex flex-col flex-1 max-w-[550px] space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffb3ba' }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#baffc9' }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#bae1ff' }}></div>
                        </div>

                        <h1 
                            className="text-5xl font-bold leading-tight tracking-tight"
                            style={{ 
                                color: 'var(--background-text, #4a3560)',
                                fontFamily: 'var(--heading-font-family, Fredoka)'
                            }}
                        >
                            {data.title}
                        </h1>

                        <div className="flex gap-2 items-center">
                            <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color, #ab47bc)' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ffb3e6' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#b3ffb3' }}></div>
                        </div>

                        <div 
                            className="bg-white bg-opacity-70 p-6 rounded-3xl border-2"
                            style={{ 
                                borderColor: 'var(--stroke, rgba(171, 71, 188, 0.2))',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                            }}
                        >
                            <p 
                                className="text-lg font-medium leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #4a3560)',
                                    fontFamily: 'var(--body-font-family, Quicksand)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <span 
                                className="px-4 py-2 text-sm font-semibold rounded-full"
                                style={{ 
                                    backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                    color: 'var(--primary-color, #ab47bc)',
                                    border: '2px solid rgba(171,71,188,0.15)'
                                }}
                            >
                                ✨ Creative
                            </span>
                            <span 
                                className="px-4 py-2 text-sm font-semibold rounded-full"
                                style={{ 
                                    backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                    color: 'var(--primary-color, #ab47bc)',
                                    border: '2px solid rgba(171,71,188,0.15)'
                                }}
                            >
                                💖 Playful
                            </span>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="flex flex-1 justify-center items-center">
                        <div 
                            className="w-[420px] h-[380px] overflow-hidden rounded-3xl border-2 relative"
                            style={{ 
                                borderColor: 'rgba(171,71,188,0.12)',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4">
                                <div className="w-4 h-4 rounded-full bg-white bg-opacity-80"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandyPastelImageTextSlide;