import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Desert Innovation Summit'),
    description: z.string().min(10).max(200).default('Exploring sustainable solutions and breakthrough technologies in arid environments through collaborative research and development initiatives.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Sustainable Water Management'),
        description: z.string().min(10).max(100).default('Advanced desalination and water recycling technologies for desert communities.')
    })).min(2).max(4).default([
        {
            title: 'Solar Energy Integration',
            description: 'Next-generation photovoltaic systems optimized for extreme heat conditions.'
        },
        {
            title: 'Desert Agriculture Innovation',
            description: 'Hydroponic and vertical farming solutions for food security in arid regions.'
        },
        {
            title: 'Climate Adaptation Strategies',
            description: 'Resilient infrastructure design for extreme weather and temperature variations.'
        }
    ])
});

export const layoutId = 'desert-dune-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points.';

const DesertDuneContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Tenor Sans)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain flex-shrink-0" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(184, 134, 11, 0.2))' }}
                                    className='w-[1px] h-4 flex-shrink-0'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium flex-1 min-w-0" style={{ color: 'var(--background-text, #3a2e1e)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-8 w-16 h-8 opacity-20"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #b8860b) 50%, transparent 100%)',
                        borderRadius: '50px 50px 0 0'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-12 left-12 w-24 h-1 opacity-30"
                    style={{ backgroundColor: 'var(--primary-color, #b8860b)' }}
                ></div>

                <div className="flex flex-col h-full px-12 py-16">
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-6">
                        <h1 
                            className="text-4xl font-normal mb-3 leading-tight"
                            style={{ 
                                color: 'var(--background-text, #3a2e1e)',
                                fontFamily: 'var(--heading-font-family, Tenor Sans)'
                            }}
                        >
                            {title}
                        </h1>
                        
                        <p 
                            className="text-base font-light mb-4 leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #3a2e1e)',
                                fontFamily: 'var(--body-font-family, Work Sans)'
                            }}
                        >
                            {description}
                        </p>
                        
                        {/* Divider */}
                        <div className="w-1/2 mx-auto">
                            <div 
                                className="h-px"
                                style={{ backgroundColor: 'var(--primary-color, #b8860b)' }}
                            ></div>
                        </div>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div 
                                    key={index}
                                    className="p-4 rounded-xl border flex flex-col"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.55)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <h3 
                                        className="text-lg font-medium mb-2 flex-shrink-0"
                                        style={{ 
                                            color: 'var(--primary-color, #b8860b)',
                                            fontFamily: 'var(--heading-font-family, Tenor Sans)'
                                        }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-sm font-light leading-relaxed flex-1"
                                        style={{ 
                                            color: 'var(--background-text, #3a2e1e)',
                                            fontFamily: 'var(--body-font-family, Work Sans)'
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

export default DesertDuneContentSlide;