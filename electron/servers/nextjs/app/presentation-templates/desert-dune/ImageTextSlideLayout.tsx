import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Desert Oasis Experience'),
    description: z.string().min(20).max(200).default('Journey through endless golden dunes where ancient winds whisper stories of timeless beauty and serene landscapes that stretch beyond the horizon.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Beautiful desert dunes at golden hour sunset')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Beautiful desert dunes at golden hour sunset'
    })
});

export const layoutId = 'desert-dune-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const DesertDuneImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Tenor Sans)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-12 h-12 object-contain" 
                                    />
                                )}
                                <div 
                                    className="w-0.5 h-4"
                                    style={{ backgroundColor: 'var(--stroke, rgba(184, 134, 11, 0.2))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--background-text, #3a2e1e)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-8 w-32 h-16 opacity-10 z-10">
                    <svg viewBox="0 0 128 64" fill="none" className="w-full h-full">
                        <path d="M0 32 Q32 0 64 32 Q96 0 128 32" stroke="var(--primary-color, #b8860b)" strokeWidth="1"/>
                        <path d="M16 48 Q40 24 64 48 Q88 24 112 48" stroke="var(--primary-color, #b8860b)" strokeWidth="0.5"/>
                    </svg>
                </div>

                <div className="absolute bottom-16 left-8 w-24 h-24 opacity-5 z-10">
                    <div 
                        className="w-full h-full rounded-full"
                        style={{ 
                            background: `radial-gradient(circle, var(--primary-color, #b8860b) 0%, transparent 70%)` 
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="flex w-full h-full">
                    {/* Text Side */}
                    <div className="w-1/2 flex items-center justify-center p-12">
                        <div 
                            className="max-w-md p-8 rounded-xl"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}
                        >
                            <h1 
                                className="text-4xl font-normal mb-6 leading-tight"
                                style={{ 
                                    color: 'var(--background-text, #3a2e1e)',
                                    fontFamily: "var(--heading-font-family, Tenor Sans)"
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            {/* Divider */}
                            <div className="flex justify-center mb-6">
                                <div 
                                    className="w-1/2 h-px"
                                    style={{ backgroundColor: 'var(--primary-color, #b8860b)' }}
                                />
                            </div>
                            
                            <p 
                                className="text-base font-light leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #3a2e1e)',
                                    fontFamily: "var(--body-font-family, Work Sans)"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-1/2 relative">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesertDuneImageTextSlide;