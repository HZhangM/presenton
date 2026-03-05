import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('OPERATIONAL EXCELLENCE'),
    description: z.string().min(10).max(200).default('Our industrial framework delivers measurable results through systematic implementation of proven methodologies and rigorous quality control standards.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('SAFETY PROTOCOLS'),
        description: z.string().min(10).max(100).default('Comprehensive safety management system with zero-incident tracking and continuous improvement.')
    })).min(2).max(4).default([
        {
            title: 'SAFETY PROTOCOLS',
            description: 'Comprehensive safety management system with zero-incident tracking and continuous improvement.'
        },
        {
            title: 'QUALITY ASSURANCE',
            description: 'Rigorous testing and validation processes ensure consistent output meeting industrial standards.'
        },
        {
            title: 'EFFICIENCY METRICS',
            description: 'Real-time monitoring and optimization of all operational parameters for maximum throughput.'
        }
    ])
});

export const layoutId = 'concrete-industrial-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in industrial concrete theme.';

const ConcreteIndustrialContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Bebas Neue')" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.15))' }}
                                    className='w-[2px] h-5'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-bold uppercase tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'COMPANY NAME'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="pt-20 px-12 pb-12 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-6xl font-bold uppercase tracking-tight mb-4"
                            style={{ 
                                color: 'var(--background-text, #1a1a1a)',
                                fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                            }}
                        >
                            {title}
                        </h1>
                        <div 
                            className="h-1 w-24"
                            style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }}
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p 
                            className="text-xl font-medium leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #1a1a1a)',
                                fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="p-6"
                                style={{ 
                                    background: 'var(--card-color, rgba(255,255,255,0.9))',
                                    borderLeft: '4px solid var(--primary-color, #ff6d00)',
                                    borderRadius: '0',
                                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold"
                                        style={{ 
                                            background: 'var(--primary-color, #ff6d00)',
                                            color: 'var(--primary-text, #ffffff)',
                                            fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1">
                                        <h3 
                                            className="text-lg font-bold uppercase tracking-wide mb-3"
                                            style={{ 
                                                color: 'var(--background-text, #1a1a1a)',
                                                fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                            }}
                                        >
                                            {point?.title}
                                        </h3>
                                        <p 
                                            className="text-sm font-medium leading-relaxed"
                                            style={{ 
                                                color: 'var(--background-text, #1a1a1a)',
                                                fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                                            }}
                                        >
                                            {point?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 right-0 w-2 h-full opacity-20"
                    style={{ 
                        background: 'repeating-linear-gradient(45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 10px, transparent 10px, transparent 20px)'
                    }}
                />
                
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-30"
                    style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }}
                />
            </div>
        </>
    );
};

export default ConcreteIndustrialContentSlide;