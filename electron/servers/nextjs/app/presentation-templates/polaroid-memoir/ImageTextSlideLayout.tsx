import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Childhood Memories'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Those golden afternoons spent exploring the old oak tree in grandma\'s backyard, where every shadow held a new adventure and time moved like honey in summer.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('vintage childhood photo with warm sepia tones')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'vintage childhood photo with warm sepia tones'
    })
});

export const layoutId = 'polaroid-memoir-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const PolaroidMemoirImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Caveat)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(212, 118, 78, 0.2))' }} className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a3020)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full items-center">
                    {/* Left Image Side */}
                    <div className="w-1/2 h-full flex items-center justify-center p-8">
                        <div className="relative transform rotate-1" 
                             style={{ 
                                 background: '#ffffff', 
                                 border: '1px solid rgba(0,0,0,0.06)', 
                                 borderRadius: '2px', 
                                 boxShadow: '0 3px 10px rgba(0,0,0,0.12)', 
                                 padding: '12px 12px 40px 12px',
                                 maxWidth: '420px',
                                 maxHeight: '500px'
                             }}>
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: '4/3' }}
                            />
                            {/* Tape decoration */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 opacity-60 transform rotate-45"
                                 style={{ background: 'linear-gradient(135deg, #f5e6a3 0%, #e8d078 100%)' }}></div>
                        </div>
                    </div>

                    {/* Right Text Side */}
                    <div className="w-1/2 h-full flex flex-col justify-center p-10">
                        <div className="relative">
                            <h1 className="text-4xl font-bold mb-4 transform -rotate-1"
                                style={{ 
                                    color: 'var(--primary-color, #d4764e)',
                                    fontFamily: "var(--heading-font-family, Caveat)"
                                }}>
                                {data.title}
                            </h1>
                            
                            {/* Washi tape accent */}
                            <div className="absolute -left-4 top-0 w-2 h-16 opacity-40 transform rotate-3"
                                 style={{ background: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}></div>
                            
                            <div className="w-24 h-px mb-6 border-dashed border-t"
                                 style={{ borderColor: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}></div>
                            
                            <p className="text-lg leading-relaxed"
                               style={{ 
                                   color: 'var(--background-text, #3a3020)',
                                   fontFamily: "var(--body-font-family, Lato)"
                               }}>
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative paper clip */}
                <div className="absolute top-20 right-16 w-6 h-10 border-2 border-gray-400 rounded-full opacity-30 transform rotate-12"
                     style={{ borderColor: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}></div>
            </div>
        </>
    );
};

export default PolaroidMemoirImageTextSlide;