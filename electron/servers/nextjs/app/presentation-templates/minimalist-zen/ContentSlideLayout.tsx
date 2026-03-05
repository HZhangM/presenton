import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main slide title').default('Essential Principles'),
    description: z.string().min(10).max(200).describe('Brief description or subtitle').default('Core concepts that drive meaningful results through focused attention and deliberate action.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).describe('Key point title').default(''),
        description: z.string().min(10).max(100).describe('Key point description').default('')
    })).min(2).max(4).default([
        {
            title: 'Clarity of Purpose',
            description: 'Define clear objectives and maintain unwavering focus on what truly matters.'
        },
        {
            title: 'Mindful Execution',
            description: 'Approach each task with complete presence and attention to detail.'
        },
        {
            title: 'Continuous Refinement',
            description: 'Regularly evaluate and simplify processes to achieve greater effectiveness.'
        }
    ])
});

export const layoutId = 'minimalist-zen-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in minimalist zen style';

const MinimalistZenContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Noto Serif JP')" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] h-[32px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-light tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #2d2d2d)',
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-1/2 left-8 w-1 h-1 rounded-full opacity-30" 
                     style={{ backgroundColor: 'var(--primary-color, #1a1a1a)', transform: 'translateY(-50%)' }}>
                </div>

                <div className="absolute top-1/3 right-12 w-6 h-6 border rounded-full opacity-20" 
                     style={{ borderColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}>
                </div>

                <div className="flex flex-col justify-center h-full px-24 pt-16 pb-10">
                    <div className="text-center mb-8">
                        <h1 
                            className="text-6xl font-normal mb-8 tracking-tight leading-tight"
                            style={{ 
                                color: 'var(--primary-color, #1a1a1a)',
                                fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                            }}
                        >
                            {title}
                        </h1>
                        
                        <div className="flex justify-center mb-8">
                            <div 
                                className="w-16 h-px"
                                style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                            ></div>
                        </div>

                        <p 
                            className="text-lg font-light max-w-2xl mx-auto leading-relaxed"
                            style={{ 
                                color: 'var(--background-text, #2d2d2d)',
                                fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {keyPoints?.map((point, index) => (
                            <div key={index} className="text-center">
                                <div 
                                    className="bg-transparent border-none p-6"
                                    style={{ background: 'var(--card-color, rgba(0, 0, 0, 0.03))' }}
                                >
                                    <h3 
                                        className="text-xl font-medium mb-4 tracking-wide"
                                        style={{ 
                                            color: 'var(--primary-color, #1a1a1a)',
                                            fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                                        }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-base font-light leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #2d2d2d)',
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                        }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MinimalistZenContentSlide;