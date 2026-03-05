import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Modern Design Principles'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Embrace the future of user interface design with glassmorphism effects, creating depth and visual hierarchy through transparent layers and backdrop blur effects that enhance user experience.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Modern glass architecture with light reflections')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Modern glass architecture with light reflections'
    })
});

export const layoutId = 'glassmorphism-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other with glassmorphism styling.';

const GlassmorphismImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)" 
                }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(255,255,255,0.3))' }} className='w-[1px] h-5'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--primary-text, #ffffff)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-20 z-10"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255,255,255,0.15)'
                    }}>
                </div>

                <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-30 z-10"
                    style={{
                        background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                </div>

                <div className="flex w-full h-full items-center justify-between p-16 gap-12">
                    <div className="flex-1 z-20">
                        <div className="p-12 rounded-[20px] backdrop-filter backdrop-blur-[20px]"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.2))',
                                border: '1px solid var(--stroke, rgba(255,255,255,0.3))',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}>
                            
                            <h1 className="text-5xl font-bold leading-tight mb-6"
                                style={{ color: 'var(--primary-text, #ffffff)' }}>
                                {data.title}
                            </h1>

                            <div className="w-20 h-1 mb-8 rounded-full"
                                style={{ 
                                    background: 'linear-gradient(90deg, var(--primary-color, #7c3aed), rgba(255,255,255,0.6))'
                                }}>
                            </div>

                            <p className="text-lg leading-relaxed font-medium"
                                style={{ color: 'var(--primary-text, #ffffff)' }}>
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 z-20">
                        <div className="w-full max-w-lg ml-auto">
                            <div className="rounded-[20px] overflow-hidden backdrop-filter backdrop-blur-[20px] p-4"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                }}>
                                <img
                                    src={data.image?.__image_url__}
                                    alt={data.image?.__image_prompt__}
                                    className="w-full h-80 object-cover rounded-[16px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlassmorphismImageTextSlide;