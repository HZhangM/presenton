import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Key Insights & Strategy'),
    description: z.string().min(10).max(200).default('Explore the essential elements that drive success in our modern approach to sustainable growth and innovation.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Strategic Implementation'),
        description: z.string().min(10).max(100).default('Comprehensive approach to delivering measurable results through focused execution and continuous optimization.')
    })).min(2).max(4).default([
        {
            title: 'Data-Driven Decision Making',
            description: 'Leverage analytics and insights to guide strategic choices and optimize performance across all channels.'
        },
        {
            title: 'Cross-Functional Collaboration',
            description: 'Foster seamless communication between teams to ensure alignment and accelerate project delivery.'
        },
        {
            title: 'Sustainable Growth Framework',
            description: 'Build scalable processes that support long-term expansion while maintaining operational efficiency.'
        }
    ])
});

export const layoutId = 'origami-paper-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring origami-inspired paper layering effects.';

const OrigamiPaperContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Outfit)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(224,122,95,0.15))' }} className='w-[2px] h-4'></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #2d2d3d)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-8 right-12 w-16 h-16 opacity-10 z-10">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                        <polygon points="32,8 52,28 32,48 12,28" fill="var(--primary-color, #e07a5f)" />
                        <polygon points="28,12 48,32 28,52 8,32" fill="var(--primary-color, #e07a5f)" opacity="0.6" />
                    </svg>
                </div>

                <div className="absolute bottom-12 left-8 w-12 h-12 opacity-8 z-10">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                        <polygon points="24,4 40,20 24,36 8,20" fill="var(--primary-color, #e07a5f)" opacity="0.4" />
                    </svg>
                </div>

                <div className="flex flex-col h-full p-8 pt-16">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold mb-4" 
                            style={{ 
                                color: 'var(--background-text, #2d2d3d)',
                                fontFamily: 'var(--heading-font-family, Outfit)'
                            }}>
                            {title}
                        </h1>
                        
                        <div className="flex items-center mb-4">
                            <div className="h-0.5 w-12" style={{ backgroundColor: 'var(--primary-color, #e07a5f)' }}></div>
                            <div className="w-0 h-0 border-l-[8px] border-r-0 border-b-[4px] border-l-transparent border-b-transparent ml-1"
                                 style={{ borderLeftColor: 'var(--primary-color, #e07a5f)' }}>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed max-w-4xl" 
                           style={{ 
                               color: 'var(--background-text, #2d2d3d)',
                               fontFamily: 'var(--body-font-family, "Nunito Sans")'
                           }}>
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-4 rounded-[4px] flex-shrink-0"
                                 style={{ 
                                     background: 'var(--card-color, rgba(255,255,255,0.85))',
                                     border: '1px solid rgba(0,0,0,0.06)',
                                     boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
                                 }}>
                                <h3 className="font-semibold text-base mb-2"
                                    style={{ 
                                        color: 'var(--primary-color, #e07a5f)',
                                        fontFamily: 'var(--heading-font-family, Outfit)'
                                    }}>
                                    {point?.title}
                                </h3>
                                <p className="text-sm leading-relaxed"
                                   style={{ 
                                       color: 'var(--background-text, #2d2d3d)',
                                       fontFamily: 'var(--body-font-family, "Nunito Sans")'
                                   }}>
                                    {point?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrigamiPaperContentSlide;