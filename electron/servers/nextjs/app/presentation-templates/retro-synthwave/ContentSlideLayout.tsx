import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Revolutionary Technology'),
    description: z.string().min(10).max(200).default('Harness the power of tomorrow with cutting-edge solutions that transform the way we think about innovation and digital transformation in the modern era.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Cybernetic Enhancement'),
        description: z.string().min(10).max(100).default('Advanced neural interfaces that bridge the gap between human consciousness and digital reality.')
    })).min(2).max(4).default([
        {
            title: 'Neon Grid Architecture',
            description: 'Revolutionary data structures built on quantum-enhanced processing cores for maximum efficiency.'
        },
        {
            title: 'Synthwave Analytics',
            description: 'Real-time insights powered by AI algorithms that predict trends before they emerge.'
        },
        {
            title: 'Digital Synthesis',
            description: 'Seamless integration of virtual and physical environments through advanced holographic displays.'
        }
    ])
});

export const layoutId = 'retro-synthwave-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in retro synthwave aesthetic.';

const RetroSynthwaveContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Bungee)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(255,51,102,0.35))' }} className='w-[2px] h-5'></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-bold" 
                                          style={{ 
                                              color: 'var(--background-text, #f0e0ff)',
                                              fontFamily: 'var(--body-font-family, Rajdhani)'
                                          }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative scan lines */}
                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.1 }}>
                    <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-color,#ff3366)] to-transparent"></div>
                    <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                </div>

                {/* Triangle corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-b-[60px]" 
                     style={{ 
                         borderLeftColor: 'transparent', 
                         borderBottomColor: 'var(--primary-color, #ff3366)',
                         opacity: 0.6
                     }}>
                </div>

                <div className="flex flex-col h-full px-12 py-20">
                    {/* Title with gradient effect */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-6"
                            style={{ 
                                background: 'linear-gradient(45deg, var(--primary-color, #ff3366), cyan)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 30px rgba(255,51,102,0.5)',
                                fontFamily: 'var(--heading-font-family, Bungee)'
                            }}>
                            {title}
                        </h1>
                        
                        {/* Gradient divider */}
                        <div className="h-1 w-32 bg-gradient-to-r from-[var(--primary-color,#ff3366)] to-cyan-400 mb-6"></div>
                        
                        <p className="text-xl font-medium max-w-4xl leading-relaxed" 
                           style={{ 
                               color: 'var(--background-text, #f0e0ff)',
                               fontFamily: 'var(--body-font-family, Rajdhani)'
                           }}>
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="grid grid-cols-2 gap-8 flex-1">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-5 border-2"
                                 style={{ 
                                     border: '2px solid rgba(255,51,102,0.3)',
                                     background: 'rgba(20,0,40,0.6)',
                                     backdropFilter: 'blur(4px)',
                                     borderRadius: '0'
                                 }}>
                                <h3 className="text-lg font-bold mb-4"
                                    style={{ 
                                        color: 'var(--primary-color, #ff3366)',
                                        fontFamily: 'var(--heading-font-family, Bungee)',
                                        textShadow: '0 0 15px rgba(255,51,102,0.3)'
                                    }}>
                                    {point.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed"
                                   style={{ 
                                       color: 'var(--background-text, #f0e0ff)',
                                       fontFamily: 'var(--body-font-family, Rajdhani)'
                                   }}>
                                    {point.description}
                                </p>
                                
                                {/* Card accent line */}
                                <div className="mt-4 h-px bg-gradient-to-r from-[var(--primary-color,#ff3366)] to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RetroSynthwaveContentSlide;