import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Watercolor Dreams'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Immerse yourself in the gentle flow of creativity and artistic expression through soft watercolor techniques and ethereal design elements.'),
    image: z.object({
        __image_url__: z.string(),
        __image_prompt__: z.string().min(10).max(50)
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Soft watercolor painting with gentle purple and blue washes'
    })
});

export const layoutId = 'watercolor-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const WatercolorImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Playfair Display)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(124,92,191,0.25))' }} className="w-[1px] h-6"></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #2d2d3d)', fontFamily: 'var(--body-font-family, Lora)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative watercolor blobs */}
                <div className="absolute top-20 right-32 w-32 h-32 rounded-full opacity-20 blur-xl" style={{ background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)' }}></div>
                <div className="absolute bottom-24 left-20 w-24 h-24 rounded-full opacity-15 blur-2xl" style={{ background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 60%)' }}></div>

                <div className="flex w-full h-full items-center px-16 py-20 gap-16">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="p-10 rounded-[24px]" style={{
                            backdropFilter: 'blur(12px)',
                            background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                        }}>
                            <h1
                                className="text-5xl font-bold leading-tight mb-6"
                                style={{
                                    color: 'var(--background-text, #2d2d3d)',
                                    fontFamily: 'var(--heading-font-family, Playfair Display)'
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            {/* Gradient divider */}
                            <div className="h-[2px] w-24 mb-6 rounded-full" style={{
                                background: 'linear-gradient(90deg, var(--primary-color, #7c5cbf) 0%, transparent 100%)'
                            }}></div>
                            
                            <p
                                className="text-lg leading-relaxed font-medium"
                                style={{
                                    color: 'var(--background-text, #2d2d3d)',
                                    fontFamily: 'var(--body-font-family, Lora)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-full max-w-[480px] h-[400px] rounded-[24px] overflow-hidden" style={{
                            backdropFilter: 'blur(12px)',
                            background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            padding: '16px'
                        }}>
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover rounded-[16px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WatercolorImageTextSlide;