import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Creative Vision'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Unleash your artistic potential with our innovative design platform. Transform ideas into beautiful visual stories that captivate and inspire your audience.'),
    image: z.object({
        __image_url__: z.string(),
        __image_prompt__: z.string().min(10).max(50)
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Artist painting with chalk pastels on canvas in studio'
    })
});

export const layoutId = 'chalk-pastel-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, styled with soft chalk pastel aesthetics.';

const ChalkPastelImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Kalam)" 
                }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(229, 115, 115, 0.25))' }}
                                    className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a3530)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative chalk dots */}
                <div className="absolute top-16 right-20 w-3 h-3 rounded-full opacity-30" 
                     style={{ backgroundColor: 'var(--primary-color, #e57373)' }}></div>
                <div className="absolute top-32 right-16 w-2 h-2 rounded-full opacity-20" 
                     style={{ backgroundColor: '#81c784' }}></div>
                <div className="absolute bottom-24 left-16 w-2 h-2 rounded-full opacity-25" 
                     style={{ backgroundColor: '#ffb74d' }}></div>

                {/* Wavy decorative line */}
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" 
                     width="400" height="4" viewBox="0 0 400 4" fill="none">
                    <path d="M0 2 Q50 0 100 2 T200 2 T300 2 T400 2" 
                          stroke="var(--stroke, rgba(229, 115, 115, 0.25))" 
                          strokeWidth="2" 
                          fill="none"/>
                </svg>

                <div className="flex w-full h-full items-center justify-between px-16 py-20">
                    {/* Left Content Column */}
                    <div className="flex flex-col flex-1 max-w-[520px] pr-8">
                        <div className="relative">
                            <h1 className="text-5xl font-bold leading-tight mb-6" 
                                style={{ 
                                    color: 'var(--background-text, #3a3530)',
                                    fontFamily: 'var(--heading-font-family, Kalam)'
                                }}>
                                {data.title}
                            </h1>
                            
                            {/* Hand-drawn wavy underline */}
                            <svg className="absolute -bottom-2 left-0" width="180" height="8" viewBox="0 0 180 8" fill="none">
                                <path d="M2 4 Q20 1 40 4 T80 4 T120 4 T160 4 T180 4" 
                                      stroke="var(--primary-color, #e57373)" 
                                      strokeWidth="3" 
                                      fill="none" 
                                      opacity="0.6"/>
                            </svg>
                        </div>

                        <div className="mt-8 p-6 rounded-2xl border-2" 
                             style={{ 
                                 background: 'var(--card-color, rgba(255, 255, 255, 0.5))',
                                 borderColor: 'var(--stroke, rgba(229, 115, 115, 0.25))'
                             }}>
                            <p className="text-lg leading-relaxed font-medium" 
                               style={{ 
                                   color: 'var(--background-text, #3a3530)',
                                   fontFamily: 'var(--body-font-family, Nunito)'
                               }}>
                                {data.description}
                            </p>
                        </div>

                        {/* Soft pastel accent block */}
                        <div className="w-16 h-2 mt-6 rounded-full opacity-50" 
                             style={{ backgroundColor: '#81c784' }}></div>
                    </div>

                    {/* Right Image Column */}
                    <div className="flex flex-1 justify-end items-center">
                        <div className="w-[420px] h-[380px] overflow-hidden rounded-2xl border-2 relative" 
                             style={{ 
                                 borderColor: 'var(--stroke, rgba(229, 115, 115, 0.25))',
                                 background: 'var(--card-color, rgba(255, 255, 255, 0.5))'
                             }}>
                            <img src={data.image?.__image_url__} 
                                 alt={data.image?.__image_prompt__} 
                                 className="w-full h-full object-cover opacity-95" />
                            
                            {/* Subtle overlay for chalk pastel effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChalkPastelImageTextSlide;