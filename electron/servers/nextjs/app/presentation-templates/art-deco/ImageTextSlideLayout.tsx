import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Glamorous Showcase'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Experience the elegance and sophistication of the Art Deco era with bold geometric patterns and luxurious golden accents that define timeless design.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Art Deco architecture with geometric patterns')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Art Deco architecture with geometric patterns'
    })
});

export const layoutId = 'art-deco-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const ArtDecoImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Poiret One)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-10">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(212, 175, 55, 0.3))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--background-text, #e8d8b8)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Left Text Column */}
                <div className="w-1/2 flex flex-col justify-center px-12 py-8 relative">
                    {/* Corner Bracket Decoration */}
                    <div className="absolute top-8 left-8 w-8 h-8" style={{ borderTop: '2px solid var(--primary-color, #d4af37)', borderLeft: '2px solid var(--primary-color, #d4af37)' }}></div>
                    <div className="absolute bottom-8 right-8 w-8 h-8" style={{ borderBottom: '2px solid var(--primary-color, #d4af37)', borderRight: '2px solid var(--primary-color, #d4af37)' }}></div>
                    
                    {/* Geometric Accent */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-20">
                        <div className="w-16 h-16" style={{ background: 'linear-gradient(45deg, transparent 50%, var(--primary-color, #d4af37) 50%, var(--primary-color, #d4af37) 70%, transparent 70%)' }}></div>
                    </div>

                    <div className="relative z-10">
                        <h1 
                            className="text-4xl font-light leading-tight mb-6 tracking-widest uppercase"
                            style={{ 
                                color: 'var(--primary-color, #d4af37)',
                                fontFamily: 'var(--heading-font-family, Poiret One)',
                                letterSpacing: '0.2em'
                            }}
                        >
                            {data.title}
                        </h1>
                        
                        {/* Art Deco Divider */}
                        <div className="flex items-center mb-6">
                            <div className="flex-1" style={{ borderTop: '1px solid var(--primary-color, #d4af37)' }}></div>
                            <div className="mx-4 w-3 h-3 transform rotate-45" style={{ border: '1px solid var(--primary-color, #d4af37)', background: 'var(--primary-color, #d4af37)' }}></div>
                            <div className="flex-1" style={{ borderTop: '1px solid var(--primary-color, #d4af37)' }}></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed font-light tracking-wide"
                            style={{ 
                                color: 'var(--background-text, #e8d8b8)',
                                fontFamily: 'var(--body-font-family, Josefin Sans)'
                            }}
                        >
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="w-1/2 relative overflow-hidden">
                    {/* Geometric Frame */}
                    <div className="absolute inset-4 z-10" style={{ border: '2px solid var(--stroke, rgba(212, 175, 55, 0.3))' }}>
                        <div className="absolute -top-2 left-8 w-6 h-4" style={{ background: 'var(--background-color, transparent)', borderTop: '2px solid var(--primary-color, #d4af37)' }}></div>
                        <div className="absolute -bottom-2 right-8 w-6 h-4" style={{ background: 'var(--background-color, transparent)', borderBottom: '2px solid var(--primary-color, #d4af37)' }}></div>
                    </div>

                    {/* Chevron Pattern Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-32 opacity-30 z-10">
                        <div className="w-full h-4 mb-2" style={{ background: 'linear-gradient(45deg, transparent 40%, var(--primary-color, #d4af37) 45%, var(--primary-color, #d4af37) 55%, transparent 60%)' }}></div>
                        <div className="w-full h-4 mb-2" style={{ background: 'linear-gradient(45deg, transparent 40%, var(--primary-color, #d4af37) 45%, var(--primary-color, #d4af37) 55%, transparent 60%)' }}></div>
                        <div className="w-full h-4" style={{ background: 'linear-gradient(45deg, transparent 40%, var(--primary-color, #d4af37) 45%, var(--primary-color, #d4af37) 55%, transparent 60%)' }}></div>
                    </div>

                    <img
                        src={data.image?.__image_url__}
                        alt={data.image?.__image_prompt__}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default ArtDecoImageTextSlide;