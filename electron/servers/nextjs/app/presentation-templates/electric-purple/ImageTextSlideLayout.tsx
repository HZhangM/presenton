import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main slide title').default('Innovation Unleashed'),
    description: z.string().min(10).max(200).describe('Supporting description text').default('Transform your business with cutting-edge technology solutions that drive growth and efficiency across all departments.'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Modern technology innovation concept")
    }).default({
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Modern technology innovation concept"
    })
});

export const layoutId = 'electric-purple-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other';

const ElectricPurpleImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Urbanist)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-10">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(187,134,252,0.3))' }}
                                    className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8d0ff)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative geometric accent */}
                <div 
                    className="absolute top-16 right-16 w-32 h-32 opacity-10 rotate-12"
                    style={{
                        background: 'linear-gradient(45deg, var(--primary-color, #bb86fc), transparent)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
                    }}
                />

                {/* Decorative glow accent */}
                <div 
                    className="absolute bottom-20 left-20 w-24 h-24 opacity-20 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, var(--primary-color, #bb86fc), transparent)',
                        filter: 'blur(20px)'
                    }}
                />

                <div className="flex w-full h-full">
                    {/* Text Content Side */}
                    <div className="w-1/2 flex flex-col justify-center p-12">
                        <div className="max-w-lg">
                            <h1 
                                className="text-4xl font-800 leading-tight mb-6"
                                style={{ 
                                    color: 'var(--background-text, #e8d0ff)',
                                    textShadow: '0 0 20px rgba(187,134,252,0.3)'
                                }}
                            >
                                {data.title}
                            </h1>

                            {/* Gradient divider */}
                            <div 
                                className="w-24 h-1 mb-6 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, var(--primary-color, #bb86fc), transparent)'
                                }}
                            />

                            <p 
                                className="text-lg font-400 leading-relaxed"
                                style={{ color: 'var(--background-text, #e8d0ff)' }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-1/2 flex items-center justify-center p-8">
                        <div 
                            className="w-full h-full max-w-lg max-h-96 rounded-lg overflow-hidden"
                            style={{
                                border: '1px solid rgba(187,134,252,0.2)',
                                background: 'rgba(187,134,252,0.08)',
                                borderRadius: '16px',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 0 30px rgba(187,134,252,0.2)'
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
            </div>
        </>
    );
};

export default ElectricPurpleImageTextSlide;