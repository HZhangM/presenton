import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main title of the slide').default('Exploring the Cosmic Frontier'),
    description: z.string().min(1).max(200).describe('Main description text for the slide').default('Embark on a journey through the vast expanse of space, where innovation meets the infinite possibilities of the universe. Discover new horizons and unlock the mysteries that await.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).describe('Key point title').default(''),
        description: z.string().min(1).max(100).describe('Key point description').default('')
    })).min(2).max(4).default([
        {
            title: 'Advanced Propulsion Systems',
            description: 'Revolutionary technology enabling faster-than-light travel across galaxies'
        },
        {
            title: 'Stellar Navigation Networks',
            description: 'Quantum-powered guidance systems for precise interstellar positioning'
        },
        {
            title: 'Deep Space Communications',
            description: 'Instantaneous data transmission across vast cosmic distances'
        }
    ])
});

export const layoutId = 'starfield-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in a cosmic starfield theme';

const StarfieldContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Exo 2)" 
                 }}>
                
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] h-[40px] object-contain" />
                                )}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(124, 77, 255, 0.25))' }}
                                    className='w-[2px] h-5'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" 
                                          style={{ color: 'var(--background-text, #d0d0f0)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-32 w-2 h-2 rounded-full opacity-60" 
                     style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 8px var(--primary-color, #7c4dff)' }} />
                <div className="absolute bottom-32 left-16 w-1 h-1 rounded-full opacity-40" 
                     style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 4px var(--primary-color, #7c4dff)' }} />
                <div className="absolute top-1/3 left-1/4 w-px h-24 opacity-20 transform -rotate-45"
                     style={{ background: 'linear-gradient(to bottom, transparent, var(--primary-color, #7c4dff), transparent)' }} />

                {/* Main Content */}
                <div className="flex flex-col justify-center h-full px-16 py-20 space-y-8">
                    
                    {/* Title Section */}
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-bold tracking-tight" 
                            style={{ 
                                color: 'var(--primary-text, #ffffff)',
                                textShadow: '0 0 20px rgba(124, 77, 255, 0.5)'
                            }}>
                            {title}
                        </h1>
                        <div className="w-24 h-1 mx-auto rounded-full"
                             style={{ 
                                 background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)' 
                             }} />
                    </div>

                    {/* Description */}
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-xl leading-relaxed font-light" 
                           style={{ color: 'var(--background-text, #d0d0f0)' }}>
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className={`grid gap-6 mt-12 ${keyPoints?.length === 2 ? 'grid-cols-2' : keyPoints?.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} max-w-6xl mx-auto`}>
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-6 rounded-lg backdrop-blur-sm"
                                 style={{
                                     border: '1px solid rgba(124, 77, 255, 0.15)',
                                     background: 'rgba(124, 77, 255, 0.06)',
                                     backdropFilter: 'blur(8px)'
                                 }}>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                                         style={{ 
                                             background: 'var(--primary-color, #7c4dff)',
                                             boxShadow: '0 0 8px rgba(124, 77, 255, 0.6)'
                                         }} />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2" 
                                            style={{ color: 'var(--primary-color, #7c4dff)' }}>
                                            {point.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed font-light" 
                                           style={{ color: 'var(--background-text, #d0d0f0)' }}>
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

export default StarfieldContentSlide;