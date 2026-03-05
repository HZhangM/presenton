import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main title of the slide').default('Mediterranean Heritage'),
    description: z.string().min(10).max(200).describe('Supporting description text').default('Discover the timeless beauty of handcrafted ceramics and traditional artistry that has shaped Mediterranean culture for centuries.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Mediterranean terracotta pottery workshop scene')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Mediterranean terracotta pottery workshop scene'
    })
});

export const layoutId = 'terracotta-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const TerracottaImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(141,78,42,0.2))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ color: 'var(--background-text, #2d1a0e)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-16 right-16 w-8 h-8 opacity-20">
                    <svg viewBox="0 0 32 32" fill="none">
                        <path d="M16 4 20 12H24L18 16L20 24L16 20L12 24L14 16L8 12H12L16 4Z" fill="var(--primary-color, #8d4e2a)" />
                    </svg>
                </div>

                <div className="absolute bottom-16 left-16 w-16 h-1 opacity-30" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }} />

                <div className="flex w-full h-full items-center">
                    <div className="flex-1 px-16 py-20">
                        <div 
                            className="bg-opacity-85 backdrop-blur-sm p-12 rounded-lg border"
                            style={{ 
                                background: 'var(--card-color, rgba(255, 250, 240, 0.8))', 
                                border: '1px solid var(--stroke, rgba(141, 78, 42, 0.2))'
                            }}
                        >
                            <div className="mb-6 flex items-center">
                                <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }} />
                                <div className="w-2 h-2 mx-2 rotate-45" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }} />
                                <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }} />
                            </div>
                            
                            <h1 
                                className="text-4xl font-bold mb-6 leading-tight"
                                style={{ 
                                    color: 'var(--background-text, #2d1a0e)',
                                    fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <p 
                                className="text-lg leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #2d1a0e)',
                                    fontFamily: 'var(--body-font-family, Libre Baskerville)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-16">
                        <div className="w-full h-full max-h-[500px] overflow-hidden rounded-lg border" style={{ border: '1px solid var(--stroke, rgba(141, 78, 42, 0.2))' }}>
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TerracottaImageTextSlide;