import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('The Art of Storytelling'),
    description: z.string().min(10).max(200).describe('Supporting description text').default('Discover the timeless craft of weaving narratives that captivate audiences and preserve wisdom through the ages. From ancient oral traditions to modern digital tales, storytelling remains humanity\'s most powerful art form.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Vintage quill pen and inkwell on aged parchment')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Vintage quill pen and inkwell on aged parchment'
    })
});

export const layoutId = 'vintage-paper-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other';

const VintagePaperImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Playfair Display')" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(139,69,19,0.25))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ 
                                            color: 'var(--background-text, #3a2e1e)',
                                            fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full items-center px-16 py-12 gap-12">
                    <div className="flex-1 max-w-[550px] pr-8">
                        <div className="mb-6">
                            <span 
                                className="text-[72px] leading-none font-bold float-left mr-3 mt-1"
                                style={{ 
                                    color: 'var(--primary-color, #8b4513)',
                                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                }}
                            >
                                {data.title?.charAt(0) || 'T'}
                            </span>
                            <h1 
                                className="text-[38px] font-bold leading-tight"
                                style={{ 
                                    color: 'var(--background-text, #3a2e1e)',
                                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                }}
                            >
                                {data.title?.substring(1) || 'he Art of Storytelling'}
                            </h1>
                        </div>

                        <div 
                            className="w-full h-px mb-6 relative"
                            style={{ backgroundColor: 'var(--stroke, rgba(139,69,19,0.25))' }}
                        >
                            <div 
                                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45"
                                style={{ 
                                    backgroundColor: 'var(--primary-color, #8b4513)',
                                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                                }}
                            />
                        </div>

                        <p 
                            className="text-[18px] leading-relaxed"
                            style={{ 
                                color: 'var(--background-text, #3a2e1e)',
                                fontFamily: "var(--body-font-family, 'Crimson Text')"
                            }}
                        >
                            {data.description}
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center items-center">
                        <div 
                            className="w-[480px] h-[400px] overflow-hidden relative"
                            style={{
                                border: '1px solid rgba(139,69,19,0.15)',
                                background: 'rgba(255,250,240,0.5)',
                                borderRadius: '2px'
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
                    className="absolute top-4 right-4 w-16 h-16 opacity-10"
                    style={{ color: 'var(--primary-color, #8b4513)' }}
                >
                    <svg viewBox="0 0 64 64" fill="currentColor">
                        <path d="M32 8c13.255 0 24 10.745 24 24s-10.745 24-24 24S8 45.255 8 32 18.745 8 32 8zm0 4c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 8l6 12h12l-9.6 7.2 3.6 11.6L32 44.4l-12 6.4 3.6-11.6L14 32h12l6-12z"/>
                    </svg>
                </div>

                <div 
                    className="absolute bottom-4 left-4 w-20 h-8 opacity-5"
                    style={{ color: 'var(--primary-color, #8b4513)' }}
                >
                    <svg viewBox="0 0 80 32" fill="currentColor">
                        <path d="M4 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm32 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm32 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default VintagePaperImageTextSlide;