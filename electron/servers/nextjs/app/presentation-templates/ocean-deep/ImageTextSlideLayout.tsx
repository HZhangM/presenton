import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main slide title').default('Ocean Deep Insights'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Dive into the profound depths of our latest research findings, where data flows like ocean currents to reveal hidden patterns and emerging opportunities beneath the surface.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Deep ocean with flowing currents and marine life')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Deep ocean with flowing currents and marine life'
    })
});

export const layoutId = 'ocean-deep-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, featuring ocean-themed styling with flowing curves and translucent elements.';

const OceanDeepImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Raleway)" 
                }}
            >
                {/* Company Logo Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />
                                )}
                                <div 
                                    className="w-[2px] h-5 rounded-full"
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,188,212,0.25))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--background-text, #c8e0f0)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Wave Element */}
                <div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, var(--primary-color, #00bcd4) 0%, transparent 70%)`,
                        borderRadius: '50% 20% 40% 30%',
                        transform: 'rotate(45deg)',
                    }}
                />

                {/* Floating Bubble Decorations */}
                <div 
                    className="absolute bottom-20 left-20 w-16 h-16 rounded-full opacity-5 pointer-events-none"
                    style={{ background: 'var(--primary-color, #00bcd4)' }}
                />
                <div 
                    className="absolute top-32 right-32 w-8 h-8 rounded-full opacity-8 pointer-events-none"
                    style={{ background: 'var(--primary-color, #00bcd4)' }}
                />

                {/* Main Content Layout */}
                <div className="flex w-full h-full items-center px-16 gap-16">
                    {/* Left Text Content */}
                    <div className="flex-1 flex flex-col justify-center max-w-[600px] z-10">
                        <div 
                            className="p-8 rounded-2xl backdrop-blur-sm"
                            style={{
                                border: '1px solid var(--stroke, rgba(0,188,212,0.25))',
                                background: 'var(--card-color, rgba(0,188,212,0.08))',
                                backdropFilter: 'blur(8px)'
                            }}
                        >
                            <h1 
                                className="text-5xl font-bold leading-tight mb-6"
                                style={{ 
                                    color: 'var(--background-text, #c8e0f0)',
                                    fontFamily: 'var(--heading-font-family, Raleway)'
                                }}
                            >
                                {data.title}
                            </h1>

                            {/* Curved Accent Line */}
                            <div 
                                className="w-24 h-1 mb-6 rounded-full"
                                style={{ background: 'var(--primary-color, #00bcd4)' }}
                            />

                            <p 
                                className="text-lg leading-relaxed font-medium"
                                style={{ 
                                    color: 'var(--background-text, #c8e0f0)',
                                    fontFamily: 'var(--body-font-family, "Open Sans")'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="flex-1 flex justify-center items-center z-10">
                        <div 
                            className="w-[480px] h-[360px] rounded-3xl overflow-hidden relative"
                            style={{
                                border: '1px solid var(--stroke, rgba(0,188,212,0.25))',
                                boxShadow: '0 20px 40px rgba(0,188,212,0.1)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            {/* Image Overlay */}
                            <div 
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    background: 'linear-gradient(45deg, rgba(0,188,212,0.1) 0%, transparent 50%)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Wave Decoration */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-2 opacity-20 pointer-events-none"
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, var(--primary-color, #00bcd4) 50%, transparent 100%)`,
                        borderRadius: '50px'
                    }}
                />
            </div>
        </>
    );
};

export default OceanDeepImageTextSlide;