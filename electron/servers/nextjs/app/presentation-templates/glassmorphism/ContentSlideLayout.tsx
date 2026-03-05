import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Transforming Digital Innovation'),
    description: z.string().min(20).max(200).default('Explore the cutting-edge methodologies and strategic frameworks that drive exceptional results in modern technology implementations across enterprise environments.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Advanced Analytics Integration'),
        description: z.string().min(10).max(100).default('Leveraging AI-powered insights to optimize performance metrics and drive data-informed decisions.')
    })).min(2).max(4).default([
        {
            title: 'Advanced Analytics Integration',
            description: 'Leveraging AI-powered insights to optimize performance metrics and drive data-informed decisions.'
        },
        {
            title: 'Scalable Architecture Design',
            description: 'Building robust, future-ready systems that adapt to growing business requirements seamlessly.'
        },
        {
            title: 'Security-First Approach',
            description: 'Implementing comprehensive security protocols to protect sensitive data and ensure compliance.'
        }
    ])
});

export const layoutId = 'glassmorphism-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring glassmorphism design elements.';

const GlassmorphismContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 object-contain" />
                                )}
                                <div className="w-0.5 h-4" style={{ backgroundColor: 'var(--stroke, rgba(255,255,255,0.3))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--primary-text, #ffffff)' }}
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
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 z-10"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                ></div>
                <div 
                    className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-15 z-10"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255,255,255,0.15)'
                    }}
                ></div>

                {/* Main Content Container */}
                <div className="relative z-20 h-full flex flex-col justify-center px-16 py-20">
                    {/* Title Section */}
                    <div 
                        className="rounded-3xl p-8 mb-8"
                        style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h1 
                            className="text-5xl font-800 leading-tight mb-4"
                            style={{ color: 'var(--primary-text, #ffffff)' }}
                        >
                            {title}
                        </h1>
                        <p 
                            className="text-xl font-400 leading-relaxed"
                            style={{ color: 'var(--primary-text, rgba(255,255,255,0.9))' }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="rounded-3xl p-6 transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-700 mt-1 flex-shrink-0"
                                        style={{ 
                                            background: 'var(--primary-color, #7c3aed)',
                                            color: 'var(--primary-text, #ffffff)'
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 
                                            className="text-lg font-700 mb-2 leading-tight"
                                            style={{ color: 'var(--primary-text, #ffffff)' }}
                                        >
                                            {point.title}
                                        </h3>
                                        <p 
                                            className="text-sm font-400 leading-relaxed"
                                            style={{ color: 'var(--primary-text, rgba(255,255,255,0.85))' }}
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
        </>
    );
};

export default GlassmorphismContentSlide;