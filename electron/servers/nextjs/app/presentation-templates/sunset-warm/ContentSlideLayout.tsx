import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Content Overview'),
    description: z.string().min(10).max(200).default('This slide presents key information and insights that provide valuable context for our discussion and help frame the important points we need to cover.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Key Point Title'),
        description: z.string().min(10).max(100).default('Description of this important point that provides additional context and detail.')
    })).min(2).max(4).default([
        {
            title: 'Enhanced Performance Metrics',
            description: 'Our latest analysis shows significant improvements across all key performance indicators.'
        },
        {
            title: 'Strategic Implementation',
            description: 'Successful deployment of new initiatives has exceeded initial projections by 25%.'
        },
        {
            title: 'Future Growth Opportunities',
            description: 'Identified three major areas for expansion that align with our long-term objectives.'
        }
    ])
});

export const layoutId = 'sunset-warm-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points displayed in warm, glass-morphism styled cards.';

const SunsetWarmContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Nunito)" 
                }}>
                
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] h-[40px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(230, 81, 0, 0.2))' }} className='w-[2px] h-5'></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3d1e00)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10" 
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                    }}></div>
                
                <div className="absolute bottom-32 left-16 w-20 h-20 rounded-full opacity-15"
                    style={{ 
                        background: 'radial-gradient(circle, #ff8a50 0%, transparent 60%)',
                        filter: 'blur(15px)'
                    }}></div>

                {/* Main Content Container */}
                <div className="flex flex-col h-full pt-20 pb-12 px-12">
                    
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-4" 
                            style={{ 
                                color: 'var(--background-text, #3d1e00)',
                                fontWeight: 800,
                                lineHeight: '1.2'
                            }}>
                            {title}
                        </h1>
                        
                        {/* Gradient Divider */}
                        <div className="h-1 w-full mb-6 rounded-full"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #e65100) 20%, var(--primary-color, #e65100) 80%, transparent 100%)'
                            }}></div>
                    </div>

                    {/* Description Card */}
                    <div className="mb-8">
                        <div className="p-8 rounded-[20px]"
                            style={{ 
                                background: 'rgba(255,255,255,0.55)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                            }}>
                            <p className="text-lg leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #3d1e00)',
                                    fontFamily: 'var(--body-font-family, Nunito Sans)',
                                    fontWeight: 500
                                }}>
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1">
                        <div className={`grid gap-6 h-full ${keyPoints && keyPoints.length > 2 ? 'grid-cols-2 grid-rows-2' : 'grid-cols-1'}`}>
                            {keyPoints?.map((point, index) => (
                                <div key={index} 
                                    className="p-6 rounded-[20px] flex flex-col justify-center"
                                    style={{ 
                                        background: 'rgba(255,255,255,0.55)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255,255,255,0.4)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                    }}>
                                    
                                    {/* Point Number Pill */}
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full mb-4"
                                        style={{ 
                                            background: 'var(--primary-color, #e65100)',
                                            color: 'var(--primary-text, #ffffff)'
                                        }}>
                                        <span className="text-sm font-bold">{index + 1}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-3"
                                        style={{ 
                                            color: 'var(--background-text, #3d1e00)',
                                            fontWeight: 700
                                        }}>
                                        {point.title}
                                    </h3>
                                    
                                    <p className="text-base leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #3d1e00)',
                                            fontFamily: 'var(--body-font-family, Nunito Sans)',
                                            fontWeight: 400
                                        }}>
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SunsetWarmContentSlide;