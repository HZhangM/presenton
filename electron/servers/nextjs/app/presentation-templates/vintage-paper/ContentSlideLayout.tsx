import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Renaissance of Modern Business'),
    description: z.string().min(20).max(200).default('Exploring the timeless principles that have guided successful enterprises through centuries of change, innovation, and market evolution.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Strategic Vision & Long-term Planning'),
        description: z.string().min(20).max(100).default('Developing comprehensive strategies that withstand the test of time and market fluctuations.')
    })).min(2).max(4).default([
        {
            title: 'Strategic Vision & Long-term Planning',
            description: 'Developing comprehensive strategies that withstand the test of time and market fluctuations.'
        },
        {
            title: 'Adaptive Leadership Excellence',
            description: 'Cultivating leadership qualities that inspire teams through periods of transformation.'
        },
        {
            title: 'Innovation Through Tradition',
            description: 'Balancing proven methodologies with cutting-edge approaches to create lasting value.'
        }
    ])
});

export const layoutId = 'vintage-paper-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in vintage paper style';

const VintagePaperContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Playfair Display)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(139,69,19,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: 'var(--body-font-family, Crimson Text)'
                                    }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-16 right-8 opacity-10 pointer-events-none">
                    <div className="w-32 h-32" style={{ color: 'var(--primary-color, #8b4513)' }}>
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M20,50 Q30,20 50,50 Q70,20 80,50 Q70,80 50,50 Q30,80 20,50 Z" 
                                  fill="currentColor" opacity="0.3"/>
                            <circle cx="50" cy="50" r="3" fill="currentColor"/>
                        </svg>
                    </div>
                </div>

                <div className="px-16 py-20 h-full">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-5xl font-bold mb-6" style={{ 
                                color: 'var(--background-text, #3a2e1e)',
                                fontFamily: 'var(--heading-font-family, Playfair Display)',
                                lineHeight: '1.2'
                            }}>
                                <span className="float-left text-8xl leading-none mr-2 mt-2" 
                                      style={{ color: 'var(--primary-color, #8b4513)' }}>
                                    {title?.charAt(0) || 'R'}
                                </span>
                                {title?.slice(1) || 'enaissance of Modern Business'}
                            </h1>
                            
                            <div className="flex items-center justify-center mb-6">
                                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(139,69,19,0.25))' }}></div>
                                <div className="mx-4">
                                    <div className="w-3 h-3 rotate-45" style={{ backgroundColor: 'var(--primary-color, #8b4513)' }}></div>
                                </div>
                                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(139,69,19,0.25))' }}></div>
                            </div>

                            <p className="text-xl leading-relaxed mb-8" style={{ 
                                color: 'var(--background-text, #3a2e1e)',
                                fontFamily: 'var(--body-font-family, Crimson Text)',
                                fontWeight: '400'
                            }}>
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {keyPoints?.map((point, index) => (
                                <div key={index} 
                                     className="p-6 rounded-sm" 
                                     style={{ 
                                         border: '1px solid rgba(139,69,19,0.15)',
                                         background: 'rgba(255,250,240,0.5)',
                                         borderRadius: '2px'
                                     }}>
                                    <h3 className="text-xl font-bold mb-3" style={{ 
                                        color: 'var(--primary-color, #8b4513)',
                                        fontFamily: 'var(--heading-font-family, Playfair Display)'
                                    }}>
                                        {point.title}
                                    </h3>
                                    <p className="text-base leading-relaxed" style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: 'var(--body-font-family, Crimson Text)'
                                    }}>
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20">
                    <div className="flex items-center gap-2" style={{ color: 'var(--primary-color, #8b4513)' }}>
                        <div className="w-8 h-px" style={{ backgroundColor: 'currentColor' }}></div>
                        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'currentColor' }}></div>
                        <div className="w-8 h-px" style={{ backgroundColor: 'currentColor' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VintagePaperContentSlide;