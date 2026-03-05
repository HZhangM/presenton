import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main headline').default('Breaking News Story'),
    description: z.string().min(20).max(200).describe('Article content or summary').default('In a significant development that has captured the attention of industry experts worldwide, new research findings reveal groundbreaking insights that could reshape our understanding of the field.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Professional news photography')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Professional news photography'
    })
});

export const layoutId = 'newspaper-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A classic newspaper-style split layout with image on one side and article text on the other, featuring traditional serif typography and editorial styling';

const NewspaperImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Unna)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4 pb-4" style={{ borderBottom: '2px solid var(--primary-color, #1a1a1a)' }}>
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }} className='w-[1px] h-5'></div>
                                {(data as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, Unna)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full" style={{ paddingTop: ((data as any)?.__companyName__ || (data as any)?._logo_url__) ? '100px' : '0' }}>
                    <div className="flex-1 p-12 flex flex-col justify-center">
                        <div style={{ borderTop: '4px solid var(--primary-color, #1a1a1a)', paddingTop: '16px', borderBottom: '1px solid var(--stroke, rgba(0,0,0,0.2))', paddingBottom: '16px' }}>
                            <h1 className="text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, Unna)' }}>
                                {data.title}
                            </h1>
                        </div>
                        
                        <div className="mt-6">
                            <p className="text-base leading-relaxed" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, Source Serif 4)' }}>
                                {data.description}
                            </p>
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                        </div>
                    </div>
                    
                    <div style={{ width: '1px', backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                    
                    <div className="flex-1 p-12 flex items-center justify-center">
                        <div className="w-full max-w-md">
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-auto object-cover"
                                style={{ border: '1px solid var(--primary-color, #1a1a1a)' }}
                            />
                            <div className="mt-4 pt-2" style={{ borderTop: '1px solid var(--stroke, rgba(0,0,0,0.2))' }}>
                                <p className="text-xs italic text-center" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, Source Serif 4)' }}>
                                    Staff Photo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-20 pointer-events-none">
                    <div style={{ fontSize: '120px', color: 'var(--primary-color, #1a1a1a)', fontFamily: 'var(--heading-font-family, Unna)', fontWeight: 'bold' }}>
                        "
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none">
                    <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--primary-color, #1a1a1a)' }}></div>
                </div>
            </div>
        </>
    );
};

export default NewspaperImageTextSlide;