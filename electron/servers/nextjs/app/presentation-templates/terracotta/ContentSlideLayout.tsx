import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Crafting Our Vision'),
    description: z.string().min(1).max(200).default('Our approach combines traditional craftsmanship with modern innovation, creating solutions that stand the test of time while meeting contemporary needs.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).default('Artisan Quality'),
        description: z.string().min(1).max(100).default('Every detail is carefully crafted with attention to traditional techniques and materials.')
    })).min(2).max(4).default([
        {
            title: 'Artisan Quality',
            description: 'Every detail is carefully crafted with attention to traditional techniques and materials.'
        },
        {
            title: 'Sustainable Approach',
            description: 'We source materials responsibly and create solutions that last for generations.'
        },
        {
            title: 'Modern Innovation',
            description: 'Traditional methods enhanced with contemporary design thinking and technology.'
        }
    ])
});

export const layoutId = 'terracotta-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in warm terracotta theme';

const TerracottaContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

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
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] h-[40px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(141,78,42,0.2))' }}
                                    className='w-[2px] h-5'
                                ></div>
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

                <div className="absolute top-6 right-12 w-16 h-16 opacity-10">
                    <div 
                        className="w-4 h-4 rotate-45 absolute top-6 left-6"
                        style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                    ></div>
                </div>

                <div className="flex flex-col h-full px-12 py-20 pt-16">
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-bold mb-6"
                            style={{ 
                                color: 'var(--background-text, #2d1a0e)',
                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                            }}
                        >
                            {title}
                        </h1>
                        
                        <div className="flex items-center mb-6">
                            <div 
                                className="w-12 h-0.5 mr-3"
                                style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                            ></div>
                            <div 
                                className="w-2 h-2 rotate-45 mr-3"
                                style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                            ></div>
                            <div 
                                className="w-12 h-0.5"
                                style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                            ></div>
                        </div>

                        <p 
                            className="text-xl leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #2d1a0e)',
                                fontFamily: "var(--body-font-family, Libre Baskerville)"
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-8 h-full">
                            {keyPoints?.map((point, index) => (
                                <div 
                                    key={index}
                                    className="p-5 rounded-lg border"
                                    style={{ 
                                        background: 'var(--card-color, rgba(255,250,240,0.8))',
                                        border: '1px solid var(--stroke, rgba(141,78,42,0.2))'
                                    }}
                                >
                                    <h3
                                        className="text-lg font-semibold mb-4"
                                        style={{ 
                                            color: 'var(--primary-color, #8d4e2a)',
                                            fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                        }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #2d1a0e)',
                                            fontFamily: "var(--body-font-family, Libre Baskerville)"
                                        }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20">
                    <div className="flex items-center">
                        <div 
                            className="w-8 h-0.5"
                            style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                        ></div>
                        <div 
                            className="w-1.5 h-1.5 rotate-45 mx-2"
                            style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                        ></div>
                        <div 
                            className="w-8 h-0.5"
                            style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TerracottaContentSlide;