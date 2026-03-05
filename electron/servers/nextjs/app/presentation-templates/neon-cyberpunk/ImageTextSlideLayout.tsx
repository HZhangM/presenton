import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main title for the slide').default('Neural Network Analysis'),
    description: z.string().min(10).max(200).describe('Description text content').default('Advanced AI algorithms process vast datasets in real-time, delivering unprecedented insights for digital transformation initiatives.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Futuristic cyberpunk cityscape with neon lights')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Futuristic cyberpunk cityscape with neon lights'
    })
});

export const layoutId = 'neon-cyberpunk-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other with neon cyberpunk styling';

const NeonCyberpunkImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Orbitron)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <div
                                    style={{ backgroundColor: 'var(--primary-color, #ff2d95)' }}
                                    className='w-[2px] h-4'
                                ></div>
                                {(data as any)?.__companyName__ && <span 
                                    className="text-sm font-semibold" 
                                    style={{ color: 'var(--background-text, #e0e0f0)' }}
                                >
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Corner bracket decorations */}
                <div 
                    className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2"
                    style={{ 
                        borderColor: 'var(--primary-color, #ff2d95)',
                        boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                    }}
                ></div>
                <div 
                    className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2"
                    style={{ 
                        borderColor: 'var(--primary-color, #ff2d95)',
                        boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                    }}
                ></div>

                {/* Glitch-style decorative bars */}
                <div 
                    className="absolute top-1/4 right-4 w-1 h-16 opacity-60"
                    style={{ 
                        background: 'linear-gradient(180deg, var(--primary-color, #ff2d95) 0%, #00ffff 100%)',
                        boxShadow: '0 0 15px var(--primary-color, #ff2d95)'
                    }}
                ></div>

                <div className="flex w-full h-full items-center px-16 py-12 gap-12">
                    {/* Text Content Column */}
                    <div className="flex flex-col flex-1 max-w-[580px]">
                        <h1
                            className="text-5xl font-bold leading-tight mb-6"
                            style={{
                                color: 'var(--background-text, #e0e0f0)',
                                textShadow: '0 0 20px var(--primary-color, #ff2d95)'
                            }}
                        >
                            {data.title}
                        </h1>

                        {/* Neon divider line */}
                        <div 
                            className="w-32 h-1 mb-8"
                            style={{
                                background: 'linear-gradient(90deg, var(--primary-color, #ff2d95) 0%, #00ffff 100%)',
                                boxShadow: '0 0 15px var(--primary-color, #ff2d95)'
                            }}
                        ></div>

                        <p
                            className="text-lg leading-relaxed"
                            style={{
                                color: 'var(--background-text, #e0e0f0)',
                                fontFamily: 'var(--body-font-family, Share Tech Mono)'
                            }}
                        >
                            {data.description}
                        </p>
                    </div>

                    {/* Image Column */}
                    <div className="flex flex-1 justify-end items-center">
                        <div 
                            className="w-[420px] h-[380px] overflow-hidden relative"
                            style={{
                                border: '1px solid var(--stroke, rgba(255,45,149,0.3))',
                                background: 'var(--card-color, rgba(255, 45, 149, 0.08))',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '4px',
                                boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            {/* Image overlay glow effect */}
                            <div 
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(45deg, transparent 60%, rgba(255,45,149,0.1) 100%)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NeonCyberpunkImageTextSlide;