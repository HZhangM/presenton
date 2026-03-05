import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('AMAZING FEATURES'),
    description: z.string().min(10).max(200).default('Discover the powerful capabilities that make our product stand out from the competition. Each feature is designed to deliver maximum impact.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('SUPER STRENGTH'),
        description: z.string().min(10).max(100).default('Incredibly powerful performance that handles any challenge with ease and reliability.')
    })).min(2).max(4).default([
        {
            title: 'LIGHTNING SPEED',
            description: 'Ultra-fast processing that delivers results in record time, boosting your productivity instantly.'
        },
        {
            title: 'BULLETPROOF SECURITY',
            description: 'Unbreachable protection that keeps your data safe from any threat or attack.'
        },
        {
            title: 'MEGA FLEXIBILITY',
            description: 'Adapts to any workflow or requirement with incredible versatility and customization options.'
        },
        {
            title: 'TOTAL CONTROL',
            description: 'Complete command over every aspect with intuitive controls and powerful management tools.'
        }
    ])
});

export const layoutId = 'comic-book-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in bold comic book style.';

const ComicBookContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bangers)" 
                }}>
                
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }} className='w-[3px] h-4'></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, Comic Neue)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-4 right-8 w-16 h-16 opacity-20 pointer-events-none">
                    <div className="w-full h-full rounded-full border-4 border-dotted" style={{ borderColor: 'var(--primary-color, #e53935)' }}></div>
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 opacity-15 pointer-events-none">
                    <div className="w-full h-full" style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #e53935) 2px, transparent 2px)',
                        backgroundSize: '8px 8px'
                    }}></div>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col h-full pt-20 px-8 pb-8">
                    
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-6">
                        <h1 className="text-5xl font-bold mb-4" style={{ 
                            color: 'var(--primary-color, #e53935)',
                            textShadow: '3px 3px 0 var(--stroke, rgba(0, 0, 0, 0.8))',
                            transform: 'rotate(-1deg)'
                        }}>
                            {title}
                        </h1>
                        <div className="bg-white p-4 border-3 border-solid rounded" style={{
                            borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                            background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                            boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))',
                            fontFamily: 'var(--body-font-family, Comic Neue)'
                        }}>
                            <p className="text-lg font-semibold" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                                {description}
                            </p>
                        </div>
                        <div className="mt-4 h-1" style={{ 
                            background: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                            clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)'
                        }}></div>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className={`grid gap-4 h-full ${keyPoints && keyPoints.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {keyPoints?.map((point, index) => (
                                <div key={index} className="bg-white p-4 border-3 border-solid rounded flex-shrink-0" style={{
                                    borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                    boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))',
                                    transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`
                                }}>
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full border-3 border-solid flex items-center justify-center" style={{
                                            borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                                            background: 'var(--primary-color, #e53935)'
                                        }}>
                                            <span className="text-sm font-bold" style={{ 
                                                color: 'var(--primary-text, #ffffff)',
                                                fontFamily: 'var(--heading-font-family, Bangers)'
                                            }}>
                                                {index + 1}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold mb-1" style={{ 
                                                color: 'var(--primary-color, #e53935)',
                                                fontFamily: 'var(--heading-font-family, Bangers)',
                                                textShadow: '2px 2px 0 var(--stroke, rgba(0, 0, 0, 0.3))'
                                            }}>
                                                {point.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed font-semibold" style={{ 
                                                color: 'var(--background-text, #1a1a1a)',
                                                fontFamily: 'var(--body-font-family, Comic Neue)'
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
            </div>
        </>
    );
};

export default ComicBookContentSlide;