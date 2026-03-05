import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('The Art of Scholarly Discourse'),
    description: z.string().min(1).max(200).default('A comprehensive examination of classical methodologies and their contemporary applications in academic research, drawing from centuries of intellectual tradition.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Old leather-bound books in a dimly lit library')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Old leather-bound books in a dimly lit library'
    })
});

export const layoutId = 'dark-academia-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const DarkAcademiaImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Spectral)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(200, 168, 130, 0.25))' }}
                                    className='w-[1px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium" 
                                        style={{ color: 'var(--background-text, #e8dcc8)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-6 right-6 opacity-20">
                    <div 
                        className="text-4xl select-none"
                        style={{ color: 'var(--primary-color, #c8a882)' }}
                    >
                        ❦
                    </div>
                </div>

                <div className="absolute bottom-6 left-8 opacity-15">
                    <div 
                        className="w-16 h-px"
                        style={{ backgroundColor: 'var(--stroke, rgba(200, 168, 130, 0.25))' }}
                    />
                </div>

                <div className="flex w-full h-full">
                    <div className="w-1/2 flex flex-col justify-center px-12 py-8">
                        <div className="flex flex-col gap-4">
                            <h1 
                                className="text-4xl font-semibold leading-tight mb-4"
                                style={{ 
                                    color: 'var(--background-text, #e8dcc8)',
                                    fontFamily: 'var(--heading-font-family, Spectral)'
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <div className="flex items-center gap-3 mb-4">
                                <div 
                                    className="w-8 h-px"
                                    style={{ backgroundColor: 'var(--primary-color, #c8a882)' }}
                                />
                                <span 
                                    className="text-lg opacity-60"
                                    style={{ color: 'var(--primary-color, #c8a882)' }}
                                >
                                    ❦
                                </span>
                                <div 
                                    className="w-8 h-px"
                                    style={{ backgroundColor: 'var(--primary-color, #c8a882)' }}
                                />
                            </div>

                            <p 
                                className="text-lg leading-relaxed font-normal"
                                style={{ 
                                    color: 'var(--background-text, #e8dcc8)',
                                    fontFamily: 'var(--body-font-family, Spectral)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2 relative">
                        <div 
                            className="absolute inset-4 border"
                            style={{ 
                                border: '1px solid rgba(200, 168, 130, 0.15)',
                                background: 'rgba(200, 168, 130, 0.06)',
                                borderRadius: '4px'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                                style={{ borderRadius: '4px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DarkAcademiaImageTextSlide;