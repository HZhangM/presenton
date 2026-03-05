import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Embracing Digital Transformation'),
    description: z.string().min(20).max(200).default('Our journey towards innovation requires thoughtful adaptation and strategic implementation across all touchpoints of our organization.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Strategic Implementation'),
        description: z.string().min(20).max(100).default('Developing comprehensive frameworks that align technology initiatives with business objectives.')
    })).min(2).max(4).default([
        {
            title: 'Technology Integration Framework',
            description: 'Building robust systems that seamlessly connect existing infrastructure with modern solutions.'
        },
        {
            title: 'User Experience Enhancement',
            description: 'Prioritizing intuitive interfaces and streamlined workflows for improved productivity.'
        },
        {
            title: 'Data-Driven Decision Making',
            description: 'Leveraging analytics and insights to guide strategic choices and measure success.'
        },
        {
            title: 'Change Management Process',
            description: 'Supporting teams through transformation with clear communication and training programs.'
        }
    ])
});

export const layoutId = 'mountain-mist-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in misty mountain theme';

const MountainMistContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Philosopher)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] h-[32px] object-contain flex-shrink-0" />
                                )}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(84,110,122,0.15))' }}
                                    className='w-[1px] h-4 flex-shrink-0'
                                ></span>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium flex-1 min-w-0" 
                                        style={{ 
                                            color: 'var(--background-text, #1a2a3a)',
                                            fontFamily: "var(--body-font-family, Karla)"
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-8 w-96 h-32 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 400 120" className="w-full h-full">
                        <defs>
                            <linearGradient id="mistGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'var(--primary-color, #546e7a)', stopOpacity: 0.3 }} />
                                <stop offset="50%" style={{ stopColor: 'var(--primary-color, #546e7a)', stopOpacity: 0.1 }} />
                                <stop offset="100%" style={{ stopColor: 'var(--primary-color, #546e7a)', stopOpacity: 0.05 }} />
                            </linearGradient>
                        </defs>
                        <path d="M0,80 Q100,40 200,60 Q300,80 400,50 L400,120 L0,120 Z" fill="url(#mistGradient)" />
                        <path d="M0,90 Q150,50 300,70 Q350,75 400,65 L400,120 L0,120 Z" fill="url(#mistGradient)" opacity="0.6" />
                    </svg>
                </div>

                <div className="flex-1 px-8 pt-20 pb-8 flex flex-col">
                    <div className="flex-shrink-0 mb-6">
                        <h1 
                            className="text-4xl font-bold mb-4"
                            style={{ 
                                color: 'var(--background-text, #1a2a3a)',
                                fontFamily: "var(--heading-font-family, Philosopher)"
                            }}
                        >
                            {title}
                        </h1>
                        
                        <p 
                            className="text-lg leading-relaxed mb-4"
                            style={{ 
                                color: 'var(--background-text, #1a2a3a)',
                                fontFamily: "var(--body-font-family, Karla)"
                            }}
                        >
                            {description}
                        </p>

                        <div 
                            className="w-2/5 h-px mx-auto"
                            style={{ 
                                background: 'linear-gradient(to right, transparent, var(--stroke, rgba(84,110,122,0.15)), transparent)'
                            }}
                        ></div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
                        {keyPoints?.map((point, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl border"
                                style={{
                                    background: 'var(--card-color, rgba(255,255,255,0.55))',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.4)'
                                }}
                            >
                                <h3 
                                    className="font-semibold mb-2 text-base"
                                    style={{ 
                                        color: 'var(--primary-color, #546e7a)',
                                        fontFamily: "var(--heading-font-family, Philosopher)"
                                    }}
                                >
                                    {point.title}
                                </h3>
                                <p 
                                    className="text-sm leading-relaxed"
                                    style={{ 
                                        color: 'var(--background-text, #1a2a3a)',
                                        fontFamily: "var(--body-font-family, Karla)"
                                    }}
                                >
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MountainMistContentSlide;