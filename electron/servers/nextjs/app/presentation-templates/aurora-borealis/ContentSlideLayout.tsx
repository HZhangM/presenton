import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(10).max(40).default('Illuminating Key Insights'),
    description: z.string().min(20).max(200).default('Discover the most impactful findings from our comprehensive analysis, each point carefully crafted to guide your strategic decisions forward.'),
    keyPoints: z.array(
        z.object({
            title: z.string().min(10).max(60).default('Data-Driven Performance Optimization'),
            description: z.string().min(20).max(100).default('Advanced analytics revealed 34% improvement in operational efficiency through strategic implementation.')
        })
    ).min(2).max(4).default([
        {
            title: 'Market Expansion Opportunities',
            description: 'Analysis identified three high-potential markets with 67% growth potential and minimal competition.'
        },
        {
            title: 'Customer Engagement Breakthrough',
            description: 'New engagement strategy resulted in 89% increase in customer retention and satisfaction scores.'
        },
        {
            title: 'Technology Integration Success',
            description: 'Seamless platform integration reduced processing time by 45% while improving accuracy metrics.'
        }
    ])
});

export const layoutId = 'aurora-borealis-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring ethereal aurora-inspired design elements.';

const AuroraBorealisContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints = [] } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Poppins)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />
                                )}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(78, 204, 163, 0.25))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ color: 'var(--background-text, #d0e8e0)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-12 right-16 w-32 h-32 opacity-10 z-10">
                    <div 
                        className="w-full h-full rounded-full"
                        style={{
                            background: 'radial-gradient(circle, var(--primary-color, #4ecca3) 0%, transparent 70%)',
                            filter: 'blur(20px)'
                        }}
                    />
                </div>

                <div className="absolute bottom-16 left-16 w-24 h-24 opacity-15 z-10">
                    <div 
                        className="w-full h-full rounded-full"
                        style={{
                            background: 'radial-gradient(circle, #9d4edd 0%, transparent 70%)',
                            filter: 'blur(15px)'
                        }}
                    />
                </div>

                <div className="p-8 pt-16 h-full flex flex-col">
                    <div className="flex-shrink-0 mb-6">
                        <h1 
                            className="text-4xl font-bold mb-3"
                            style={{ color: 'var(--background-text, #d0e8e0)' }}
                        >
                            {title}
                        </h1>
                        <p 
                            className="text-lg mb-4 max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #d0e8e0)',
                                fontFamily: 'var(--body-font-family, Nunito Sans)',
                                opacity: 0.9
                            }}
                        >
                            {description}
                        </p>
                        <div 
                            className="h-px w-full"
                            style={{
                                background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, #9d4edd 100%)'
                            }}
                        />
                    </div>

                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-2xl backdrop-blur-sm"
                                    style={{
                                        border: '1px solid rgba(78, 204, 163, 0.15)',
                                        background: 'rgba(78, 204, 163, 0.06)',
                                        borderRadius: '16px'
                                    }}
                                >
                                    <h3 
                                        className="font-semibold text-lg mb-2"
                                        style={{ color: 'var(--primary-color, #4ecca3)' }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #d0e8e0)',
                                            fontFamily: 'var(--body-font-family, Nunito Sans)',
                                            opacity: 0.85
                                        }}
                                    >
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

export default AuroraBorealisContentSlide;