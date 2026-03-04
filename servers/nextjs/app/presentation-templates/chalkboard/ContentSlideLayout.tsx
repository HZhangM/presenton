import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Today\'s Learning Objectives'),
    description: z.string().min(1).max(200).default('Let\'s explore the fundamental concepts that will guide our understanding of this important topic and build upon our previous discussions.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).default('Key Concept'),
        description: z.string().min(1).max(100).default('This point covers an essential aspect of our topic that you should understand thoroughly.')
    })).min(2).max(4).default([
        {
            title: 'Foundation Principles',
            description: 'Understanding the core concepts that form the basis of all our subsequent learning and analysis.'
        },
        {
            title: 'Practical Applications',
            description: 'How these concepts translate into real-world scenarios and actionable insights for your work.'
        },
        {
            title: 'Critical Thinking Framework',
            description: 'Developing analytical skills to evaluate information and make informed decisions confidently.'
        }
    ])
});

export const layoutId = 'chalkboard-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in chalkboard style';

const ChalkboardContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Caveat)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(245, 240, 232, 0.25))' }}
                                    className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8e8d0)', fontFamily: 'var(--body-font-family, Patrick Hand)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative chalk dust dots */}
                <div className="absolute top-16 right-24 opacity-30">
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--background-text, #e8e8d0)' }}></div>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--background-text, #e8e8d0)' }}></div>
                        <div className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: 'var(--background-text, #e8e8d0)' }}></div>
                    </div>
                </div>

                {/* Decorative chalk star */}
                <div className="absolute bottom-24 left-16 opacity-20 text-2xl" style={{ color: 'var(--primary-color, #f2c94c)' }}>
                    ✦
                </div>

                <div className="px-16 py-12 h-full flex flex-col">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-2" 
                            style={{ 
                                color: 'var(--primary-color, #f2c94c)',
                                borderBottom: '3px wavy rgba(242, 201, 76, 0.4)',
                                paddingBottom: '4px'
                            }}>
                            {title}
                        </h1>
                        <div className="w-32 h-0.5 mt-2" 
                             style={{ 
                                 background: 'var(--primary-color, #f2c94c)', 
                                 opacity: 0.6,
                                 borderRadius: '2px'
                             }}>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p className="text-xl leading-relaxed" 
                           style={{ 
                               color: 'var(--background-text, #e8e8d0)',
                               fontFamily: 'var(--body-font-family, Patrick Hand)'
                           }}>
                            {description}
                        </p>
                    </div>

                    {/* Dashed divider */}
                    <div className="mb-8">
                        <div style={{ 
                             borderTop: 'dashed 2px rgba(255,255,255,0.3)',
                             width: '100%'
                        }}></div>
                    </div>

                    {/* Key Points */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-6 rounded-md"
                                 style={{
                                     border: '1px dashed rgba(255,255,255,0.2)',
                                     background: 'rgba(255,255,255,0.05)',
                                     borderRadius: '4px'
                                 }}>
                                <h3 className="text-2xl font-bold mb-3" 
                                    style={{ 
                                        color: 'var(--primary-color, #f2c94c)',
                                        fontFamily: 'var(--heading-font-family, Caveat)'
                                    }}>
                                    {point.title}
                                </h3>
                                <p className="text-lg leading-relaxed" 
                                   style={{ 
                                       color: 'var(--background-text, #e8e8d0)',
                                       fontFamily: 'var(--body-font-family, Patrick Hand)'
                                   }}>
                                    {point.description}
                                </p>
                                {/* Hand-drawn underline accent */}
                                <div className="mt-2 w-16 h-0.5" 
                                     style={{ 
                                         background: 'var(--primary-color, #f2c94c)', 
                                         opacity: 0.4,
                                         borderRadius: '2px'
                                     }}>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChalkboardContentSlide;