import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main slide title').default('Deep Ocean Analytics'),
    description: z.string().min(10).max(200).describe('Main description text for the slide').default('Explore the depths of data with our comprehensive analysis platform. Dive into insights that flow naturally from your business metrics and surface actionable intelligence.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).describe('Key point title'),
        description: z.string().min(10).max(100).describe('Key point description')
    })).min(2).max(4).describe('Array of key points to highlight').default([
        {
            title: "Real-time Data Streaming",
            description: "Continuous flow of information with wave-like data processing patterns for instant insights."
        },
        {
            title: "Deep Learning Models", 
            description: "Advanced AI algorithms that navigate complex data structures like underwater currents."
        },
        {
            title: "Fluid User Experience",
            description: "Seamless interface design that adapts to user needs with ocean-smooth transitions."
        }
    ])
});

export const layoutId = 'ocean-deep-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in ocean deep theme';

const OceanDeepContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Raleway)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div className="w-[2px] h-4 rounded-full" style={{ backgroundColor: 'var(--stroke, rgba(0,188,212,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #c8e0f0)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative wave curves */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M0,100 Q50,50 100,100 T200,100" stroke="var(--primary-color, #00bcd4)" strokeWidth="2" fill="none" opacity="0.3"/>
                        <path d="M0,120 Q50,70 100,120 T200,120" stroke="var(--primary-color, #00bcd4)" strokeWidth="1.5" fill="none" opacity="0.2"/>
                    </svg>
                </div>

                {/* Bubble accents */}
                <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full opacity-5" 
                     style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute top-32 right-32 w-8 h-8 rounded-full opacity-8" 
                     style={{ background: 'var(--primary-color, #00bcd4)' }}></div>

                <div className="relative h-full flex flex-col px-16 py-20">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-4" 
                            style={{ 
                                color: 'var(--background-text, #c8e0f0)',
                                letterSpacing: '-0.02em'
                            }}>
                            {title}
                        </h1>
                        <div className="w-24 h-1 rounded-full mb-6" 
                             style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                        <p className="text-xl leading-relaxed max-w-4xl" 
                           style={{ 
                               color: 'var(--background-text, #c8e0f0)',
                               fontFamily: 'var(--body-font-family, Open Sans)',
                               opacity: 0.9
                           }}>
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-6 mt-8">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-6 rounded-2xl backdrop-blur-sm"
                                 style={{
                                     border: '1px solid rgba(0,188,212,0.15)',
                                     background: 'rgba(0,188,212,0.06)',
                                     backdropFilter: 'blur(8px)'
                                 }}>
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" 
                                         style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3" 
                                            style={{ color: 'var(--primary-color, #00bcd4)' }}>
                                            {point.title}
                                        </h3>
                                        <p className="text-base leading-relaxed" 
                                           style={{ 
                                               color: 'var(--background-text, #c8e0f0)',
                                               fontFamily: 'var(--body-font-family, Open Sans)',
                                               opacity: 0.85
                                           }}>
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

export default OceanDeepContentSlide;