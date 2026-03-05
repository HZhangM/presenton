import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main slide title').default('Digital Revolution'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Experience the future of technology with cutting-edge innovations that transform the way we interact with digital environments and reshape tomorrow.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Neon cyberpunk cityscape with glowing towers')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Neon cyberpunk cityscape with glowing towers'
    })
});

export const layoutId = 'retro-synthwave-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other with retro synthwave aesthetic';

const RetroSynthwaveImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bungee)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <div
                                    style={{ backgroundColor: 'var(--stroke, rgba(255,51,102,0.35))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #f0e0ff)',
                                            fontFamily: 'var(--body-font-family, Rajdhani)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full">
                    <div className="flex-1 flex flex-col justify-center px-16 py-20 relative">
                        <div className="absolute top-8 left-0 right-0 h-[1px] opacity-20"
                             style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366) 0%, #00ffff 100%)' }}>
                        </div>
                        
                        <div className="absolute top-0 left-12 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px]"
                             style={{ 
                                 borderLeftColor: 'transparent',
                                 borderRightColor: 'transparent', 
                                 borderBottomColor: 'var(--primary-color, #ff3366)'
                             }}>
                        </div>

                        <h1 
                            className="text-5xl font-bold leading-tight mb-8 uppercase tracking-wider"
                            style={{ 
                                color: 'var(--background-text, #f0e0ff)',
                                background: 'linear-gradient(135deg, var(--primary-color, #ff3366) 0%, #00ffff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 20px rgba(255,51,102,0.5)'
                            }}
                        >
                            {data.title}
                        </h1>

                        <div className="w-24 h-[3px] mb-6"
                             style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366) 0%, #00ffff 100%)' }}>
                        </div>

                        <p 
                            className="text-lg leading-relaxed font-medium"
                            style={{ 
                                color: 'var(--background-text, #f0e0ff)',
                                fontFamily: 'var(--body-font-family, Rajdhani)'
                            }}
                        >
                            {data.description}
                        </p>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center p-16">
                        <div 
                            className="w-full h-full relative"
                            style={{
                                border: '2px solid var(--stroke, rgba(255,51,102,0.35))',
                                background: 'var(--card-color, rgba(255, 51, 102, 0.1))',
                                backdropFilter: 'blur(4px)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/30"></div>
                            
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-t-[30px]"
                                 style={{ 
                                     borderLeftColor: 'transparent',
                                     borderTopColor: 'var(--primary-color, #ff3366)'
                                 }}>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-0 right-0 h-[1px] opacity-10"
                                 style={{ backgroundColor: 'var(--primary-color, #ff3366)' }}>
                            </div>
                            <div className="absolute top-2/4 left-0 right-0 h-[1px] opacity-10"
                                 style={{ backgroundColor: 'var(--primary-color, #ff3366)' }}>
                            </div>
                            <div className="absolute top-3/4 left-0 right-0 h-[1px] opacity-10"
                                 style={{ backgroundColor: 'var(--primary-color, #ff3366)' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RetroSynthwaveImageTextSlide;