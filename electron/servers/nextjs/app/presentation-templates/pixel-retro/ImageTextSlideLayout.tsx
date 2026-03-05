import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('PIXEL QUEST'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Navigate through retro dungeons and collect power-ups in this classic 8-bit adventure. Experience nostalgia with modern gameplay mechanics.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('retro 8-bit pixel art game scene with characters')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'retro 8-bit pixel art game scene with characters'
    })
});

export const layoutId = 'pixel-retro-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, styled with retro gaming pixel art aesthetics.';

const PixelRetroImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[48px] object-contain" />}
                                <div className="w-[2px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(80,200,120,0.35))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-xs font-normal" 
                                        style={{ 
                                            color: 'var(--background-text, #50c878)',
                                            fontFamily: "var(--body-font-family, 'VT323')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pixel decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 opacity-20" style={{ backgroundColor: 'var(--primary-color, #50c878)' }}></div>
                <div className="absolute top-8 right-8 w-2 h-2 opacity-30" style={{ backgroundColor: 'var(--primary-color, #50c878)' }}></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 opacity-25" style={{ backgroundColor: 'var(--primary-color, #50c878)' }}></div>

                <div className="flex w-full h-full px-16 py-12 items-center justify-between gap-12">
                    {/* Left Text Content */}
                    <div className="flex flex-col flex-1 max-w-[500px]">
                        <h1
                            className="text-3xl font-normal leading-tight mb-8"
                            style={{
                                color: 'var(--background-text, #50c878)',
                                fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                            }}
                        >
                            {data.title}
                        </h1>

                        {/* Pixel divider */}
                        <div className="flex gap-1 mb-8">
                            {Array.from({length: 12}).map((_, i) => (
                                <div 
                                    key={i}
                                    className="w-2 h-2 opacity-60"
                                    style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                                ></div>
                            ))}
                        </div>

                        <div 
                            className="border-2 p-6 bg-opacity-6"
                            style={{ 
                                border: '2px solid var(--stroke, rgba(80,200,120,0.35))',
                                backgroundColor: 'var(--card-color, rgba(80,200,120,0.08))'
                            }}
                        >
                            <p
                                className="text-lg leading-relaxed"
                                style={{
                                    color: 'var(--background-text, #50c878)',
                                    fontFamily: "var(--body-font-family, 'VT323')"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>

                        {/* Blinking cursor effect */}
                        <div className="flex items-center mt-6">
                            <div 
                                className="w-3 h-6 animate-pulse"
                                style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                            ></div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex flex-1 justify-end items-center">
                        <div 
                            className="w-[400px] h-[300px] overflow-hidden border-2"
                            style={{ 
                                border: '2px solid var(--stroke, rgba(80,200,120,0.35))',
                                backgroundColor: 'var(--card-color, rgba(80,200,120,0.08))'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                                style={{ 
                                    imageRendering: 'pixelated',
                                    filter: 'contrast(1.1) saturate(1.2)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PixelRetroImageTextSlide;