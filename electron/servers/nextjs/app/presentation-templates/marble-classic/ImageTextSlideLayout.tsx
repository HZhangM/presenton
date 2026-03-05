import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Timeless Elegance'),
    description: z.string().min(1).max(200).default('Discover the beauty of classical design where sophistication meets modern functionality in perfect harmony.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Elegant marble interior with classical elements')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Elegant marble interior with classical elements'
    })
});

export const layoutId = 'marble-classic-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const MarbleClassicImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[50px] object-contain" 
                                    />
                                )}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}
                                    className='w-[1px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #2a2a2a)',
                                            fontFamily: "var(--body-font-family, Montserrat)"
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative hairline rule */}
                <div 
                    className="absolute top-16 left-8 right-8 h-[1px] opacity-20"
                    style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}
                />

                {/* Main content */}
                <div className="flex w-full h-full">
                    {/* Text side */}
                    <div 
                        className="w-1/2 flex items-center justify-center p-12"
                        style={{ 
                            background: 'var(--card-color, rgba(255, 255, 255, 0.75))',
                            borderRight: '1px solid var(--stroke, rgba(0,0,0,0.08))'
                        }}
                    >
                        <div className="max-w-md">
                            <div className="mb-6">
                                {/* Small geometric ornament */}
                                <div className="flex items-center justify-center mb-8">
                                    <div 
                                        className="w-3 h-3 border rotate-45 opacity-30"
                                        style={{ borderColor: 'var(--primary-color, #4a4a4a)' }}
                                    />
                                </div>
                                
                                <h1 
                                    className="text-4xl font-semibold mb-4 text-center"
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        letterSpacing: '0.02em',
                                        fontFamily: "var(--heading-font-family, Cormorant)"
                                    }}
                                >
                                    {data.title}
                                </h1>

                                {/* Divider with diamond ornament */}
                                <div className="flex items-center justify-center my-6">
                                    <div 
                                        className="flex-1 h-[1px]"
                                        style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}
                                    />
                                    <div 
                                        className="w-2 h-2 border mx-4 rotate-45 opacity-40"
                                        style={{ borderColor: 'var(--primary-color, #4a4a4a)' }}
                                    />
                                    <div 
                                        className="flex-1 h-[1px]"
                                        style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}
                                    />
                                </div>
                            </div>

                            <p 
                                className="text-base leading-relaxed text-center font-light"
                                style={{ 
                                    color: 'var(--primary-color, #4a4a4a)',
                                    fontFamily: "var(--body-font-family, Montserrat)"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Image side */}
                    <div className="w-1/2 relative overflow-hidden">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Subtle overlay for elegance */}
                        <div 
                            className="absolute inset-0 opacity-5"
                            style={{ background: 'var(--background-text, #2a2a2a)' }}
                        />
                    </div>
                </div>

                {/* Bottom decorative hairline */}
                <div 
                    className="absolute bottom-8 left-8 right-8 h-[1px] opacity-15"
                    style={{ background: 'var(--stroke, rgba(0,0,0,0.1))' }}
                />
            </div>
        </>
    );
};

export default MarbleClassicImageTextSlide;