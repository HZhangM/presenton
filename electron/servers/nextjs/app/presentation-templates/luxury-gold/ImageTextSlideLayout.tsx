import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('EXCEPTIONAL QUALITY'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Experience unparalleled craftsmanship and attention to detail in every aspect of our premium offerings. A legacy of excellence crafted for the discerning few.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Luxury gold watch on marble surface with elegant lighting')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Luxury gold watch on marble surface with elegant lighting'
    })
});

export const layoutId = 'luxury-gold-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const LuxuryGoldImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cinzel)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(212, 168, 67, 0.3))' }}
                                    className="w-[2px] h-4"
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ color: 'var(--background-text, #e8d5b0)' }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full">
                    <div className="flex-1 flex flex-col justify-center px-16 py-20">
                        <div 
                            className="w-24 h-[2px] mb-8"
                            style={{ background: 'var(--primary-color, #d4a843)' }}
                        />
                        
                        <h1 
                            className="text-5xl font-bold leading-tight tracking-wide mb-8 uppercase"
                            style={{ 
                                color: 'var(--background-text, #e8d5b0)',
                                fontFamily: 'var(--heading-font-family, Cinzel)',
                                background: 'linear-gradient(135deg, var(--primary-color, #d4a843) 0%, #f4e4a6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {data.title}
                        </h1>
                        
                        <div 
                            className="p-6 rounded border"
                            style={{ 
                                border: '1px solid rgba(212, 168, 67, 0.2)',
                                background: 'rgba(212, 168, 67, 0.04)',
                                borderRadius: '4px'
                            }}
                        >
                            <p 
                                className="text-lg leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #e8d5b0)',
                                    fontFamily: 'var(--body-font-family, "EB Garamond")'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                        
                        <div 
                            className="w-32 h-[2px] mt-8"
                            style={{ background: 'var(--primary-color, #d4a843)' }}
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center p-16">
                        <div 
                            className="w-full max-w-lg aspect-[4/3] overflow-hidden border"
                            style={{ 
                                border: '1px solid rgba(212, 168, 67, 0.3)',
                                borderRadius: '4px'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-4 right-4 w-8 h-8 opacity-20"
                    style={{ color: 'var(--primary-color, #d4a843)' }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                </div>

                <div 
                    className="absolute bottom-4 left-4 w-12 h-[2px] opacity-30"
                    style={{ background: 'var(--primary-color, #d4a843)' }}
                />
            </div>
        </>
    );
};

export default LuxuryGoldImageTextSlide;