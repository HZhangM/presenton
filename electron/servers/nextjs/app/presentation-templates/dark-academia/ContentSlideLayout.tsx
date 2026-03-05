import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Scholarly Foundations'),
    description: z.string().min(10).max(200).default('Exploring the fundamental principles and methodologies that underpin academic excellence and intellectual discourse in the modern scholarly tradition.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Critical Analysis'),
        description: z.string().min(10).max(100).default('Developing rigorous analytical frameworks for comprehensive evaluation of complex academic materials.')
    })).min(2).max(4).default([
        {
            title: 'Critical Analysis',
            description: 'Developing rigorous analytical frameworks for comprehensive evaluation of complex academic materials.'
        },
        {
            title: 'Research Methodology',
            description: 'Implementing systematic approaches to scholarly inquiry and evidence-based investigation.'
        },
        {
            title: 'Intellectual Discourse',
            description: 'Fostering meaningful academic dialogue through structured argumentation and peer review.'
        }
    ])
});

export const layoutId = 'dark-academia-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in dark academia styling.';

const DarkAcademiaContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

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
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div
                                    style={{ backgroundColor: 'var(--stroke, rgba(200,168,130,0.25))' }}
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

                {/* Decorative Elements */}
                <div 
                    className="absolute top-4 right-8 opacity-10 text-6xl"
                    style={{ color: 'var(--primary-color, #c8a882)' }}
                >
                    ❦
                </div>
                
                <div 
                    className="absolute bottom-6 left-8 w-32 h-[1px] opacity-20"
                    style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}
                />

                {/* Main Content */}
                <div className="px-12 py-16 h-full flex flex-col">
                    {/* Header Section - Max 30% height */}
                    <div className="flex-shrink-0 mb-6" style={{ maxHeight: '216px' }}>
                        {/* Title with Drop Cap Effect */}
                        <h1 
                            className="text-5xl font-bold leading-tight mb-4"
                            style={{ 
                                color: 'var(--background-text, #e8dcc8)',
                                fontFamily: 'var(--heading-font-family, Spectral)'
                            }}
                        >
                            {title}
                        </h1>

                        {/* Ornamental Divider */}
                        <div className="flex items-center mb-4">
                            <div 
                                className="flex-1 h-[1px]"
                                style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}
                            />
                            <span 
                                className="px-4 text-lg opacity-60"
                                style={{ color: 'var(--primary-color, #c8a882)' }}
                            >
                                ❦
                            </span>
                            <div 
                                className="flex-1 h-[1px]"
                                style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}
                            />
                        </div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #e8dcc8)',
                                opacity: 0.9
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div 
                                    key={index}
                                    className="p-4 rounded"
                                    style={{
                                        border: '1px solid rgba(200,168,130,0.15)',
                                        background: 'rgba(200,168,130,0.06)',
                                        borderRadius: '4px'
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <span 
                                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                                            style={{ 
                                                background: 'var(--primary-color, #c8a882)',
                                                color: 'var(--primary-text, #2a1a0e)'
                                            }}
                                        >
                                            {index + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <h3 
                                                className="text-xl font-semibold mb-2"
                                                style={{ color: 'var(--primary-color, #c8a882)' }}
                                            >
                                                {point.title}
                                            </h3>
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: 'var(--background-text, #e8dcc8)',
                                                    opacity: 0.85
                                                }}
                                            >
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DarkAcademiaContentSlide;