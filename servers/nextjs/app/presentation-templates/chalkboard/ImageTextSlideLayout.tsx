import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Lesson Overview'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Today we will explore the fundamental concepts of data visualization and how to effectively communicate insights through visual storytelling techniques.'),
    image: z.object({
        __image_url__: z.string(),
        __image_prompt__: z.string().min(10).max(50)
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Educational classroom scene with students learning'
    })
});

export const layoutId = 'chalkboard-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, styled like a chalkboard presentation';

const ChalkboardImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Caveat)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(245, 240, 232, 0.25))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-medium" 
                                        style={{ 
                                            color: 'var(--background-text, #e8e8d0)',
                                            fontFamily: 'var(--heading-font-family, Caveat)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full px-16 py-20 items-center justify-between gap-12">
                    <div className="flex flex-col flex-1 max-w-[520px]">
                        <h1
                            className="text-5xl font-bold leading-tight mb-6"
                            style={{
                                color: 'var(--primary-color, #f2c94c)',
                                fontFamily: 'var(--heading-font-family, Caveat)',
                                borderBottom: '3px wavy var(--primary-color, #f2c94c)',
                                paddingBottom: '8px'
                            }}
                        >
                            {data.title}
                        </h1>

                        <div 
                            className="p-6 rounded border-2"
                            style={{
                                border: '1px dashed rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '4px'
                            }}
                        >
                            <p
                                className="text-xl leading-relaxed"
                                style={{
                                    color: 'var(--background-text, #e8e8d0)',
                                    fontFamily: 'var(--body-font-family, Patrick Hand)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-1 justify-end items-center">
                        <div 
                            className="w-[420px] h-[320px] overflow-hidden rounded p-3"
                            style={{
                                border: 'dashed 2px rgba(255,255,255,0.3)'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover rounded"
                                style={{ 
                                    filter: 'brightness(0.9) contrast(1.1)',
                                    opacity: '0.95'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-16 right-20 w-8 h-8 rounded-full opacity-20"
                    style={{ 
                        background: 'var(--primary-color, #f2c94c)',
                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                />

                <div className="absolute bottom-12 left-16 flex gap-2 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full"
                            style={{ background: 'var(--background-text, #e8e8d0)' }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ChalkboardImageTextSlide;