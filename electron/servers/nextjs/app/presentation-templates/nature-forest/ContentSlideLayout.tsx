import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('Main slide title').default('Growing Together Sustainably'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Our commitment to environmental stewardship drives innovation while fostering growth across all business units through sustainable practices and green technology integration.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).describe('Key point title').default(''),
        description: z.string().min(1).max(100).describe('Key point description').default('')
    })).min(2).max(4).default([
        {
            title: 'Carbon Neutral Operations',
            description: 'Achieved 100% renewable energy across all facilities with zero net emissions by 2023.'
        },
        {
            title: 'Sustainable Supply Chain',
            description: 'Partnered with eco-certified vendors to reduce environmental impact by 45%.'
        },
        {
            title: 'Green Innovation Labs',
            description: 'Invested $2M in R&D for biodegradable materials and circular economy solutions.'
        },
        {
            title: 'Community Forest Program',
            description: 'Planted over 10,000 native trees in partnership with local conservation groups.'
        }
    ])
});

export const layoutId = 'nature-forest-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in an organic forest-themed layout';

const NatureForestContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bitter)" 
                }}>
                
                {/* Company header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 object-contain" />
                                )}
                                <div className="w-0.5 h-4 opacity-40" style={{ backgroundColor: 'var(--primary-color, #7cb342)' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8efe0)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative elements */}
                <div className="absolute top-20 right-16 w-32 h-32 rounded-full opacity-10 blur-xl" 
                    style={{ background: 'var(--primary-color, #7cb342)' }}></div>
                <div className="absolute bottom-16 left-20 w-24 h-24 rounded-full opacity-5 blur-2xl" 
                    style={{ background: 'var(--primary-color, #7cb342)' }}></div>

                {/* Main content container */}
                <div className="px-12 pt-24 pb-12 h-full flex flex-col justify-center">
                    
                    {/* Title section */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-6 leading-tight" 
                            style={{ 
                                color: 'var(--background-text, #e8efe0)',
                                fontFamily: 'var(--heading-font-family, Bitter)'
                            }}>
                            {title}
                        </h1>
                        
                        {/* Organic divider */}
                        <div className="w-24 h-1 rounded-full mb-6 opacity-60" 
                            style={{ background: 'var(--primary-color, #7cb342)' }}></div>
                        
                        <p className="text-lg leading-relaxed max-w-4xl opacity-90" 
                            style={{ 
                                color: 'var(--background-text, #e8efe0)',
                                fontFamily: 'var(--body-font-family, Source Sans 3)'
                            }}>
                            {description}
                        </p>
                    </div>

                    {/* Key points grid */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                className="p-6 rounded-2xl backdrop-blur-sm" 
                                style={{ 
                                    border: '1px solid rgba(124,179,66,0.15)',
                                    background: 'rgba(255,255,255,0.08)'
                                }}>
                                
                                {/* Leaf bullet point */}
                                <div className="flex items-start gap-4">
                                    <div className="mt-2 flex-shrink-0">
                                        <div className="w-3 h-3 rounded-full opacity-80" 
                                            style={{ background: 'var(--primary-color, #7cb342)' }}></div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-3 leading-snug" 
                                            style={{ 
                                                color: 'var(--primary-color, #7cb342)',
                                                fontFamily: 'var(--heading-font-family, Bitter)'
                                            }}>
                                            {point.title}
                                        </h3>
                                        <p className="text-base leading-relaxed opacity-85" 
                                            style={{ 
                                                color: 'var(--background-text, #e8efe0)',
                                                fontFamily: 'var(--body-font-family, Source Sans 3)'
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

export default NatureForestContentSlide;