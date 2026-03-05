import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Transform Your Business'),
    description: z.string().min(10).max(200).default('Discover how innovative strategies and cutting-edge solutions can drive sustainable growth and unlock new opportunities for your organization.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Enhanced Performance'),
        description: z.string().min(10).max(100).default('Streamlined processes deliver measurable improvements in efficiency and productivity.')
    })).min(2).max(4).default([
        {
            title: 'Enhanced Performance',
            description: 'Streamlined processes deliver measurable improvements in efficiency and productivity.'
        },
        {
            title: 'Strategic Innovation',
            description: 'Creative solutions that differentiate your brand and accelerate market positioning.'
        },
        {
            title: 'Sustainable Growth',
            description: 'Build long-term value through scalable frameworks and proven methodologies.'
        }
    ])
});

export const layoutId = 'coral-reef-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring vibrant coral reef theme with organic shapes.';

const CoralReefContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Comfortaa)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(255,107,107,0.2))' }}
                                    className='w-[2px] h-4 rounded-full'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #2d3436)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative coral blob */}
                <div 
                    className="absolute top-16 right-16 w-32 h-32 rounded-full opacity-20"
                    style={{ background: 'var(--primary-color, #ff6b6b)' }}
                />
                
                {/* Decorative teal blob */}
                <div 
                    className="absolute bottom-20 left-12 w-24 h-24 rounded-full opacity-15"
                    style={{ background: '#00cec9' }}
                />

                <div className="flex flex-col h-full p-12 pt-16">
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-6">
                        <h1 
                            className="text-4xl font-bold mb-3"
                            style={{ color: 'var(--background-text, #2d3436)' }}
                        >
                            {title}
                        </h1>
                        
                        {/* Wavy divider */}
                        <div className="relative h-2 mb-4">
                            <svg 
                                viewBox="0 0 200 10" 
                                className="w-48 h-2" 
                                preserveAspectRatio="none"
                            >
                                <path 
                                    d="M0,5 Q50,0 100,5 T200,5" 
                                    stroke="var(--primary-color, #ff6b6b)" 
                                    strokeWidth="3" 
                                    fill="none"
                                    opacity="0.7"
                                />
                            </svg>
                        </div>
                        
                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #2d3436)',
                                fontFamily: 'var(--body-font-family, Rubik)'
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-3xl border backdrop-blur-sm"
                                    style={{
                                        background: 'var(--card-color, rgba(255,255,255,0.7))',
                                        border: '1px solid rgba(255,255,255,0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    {/* Pill accent */}
                                    <div 
                                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                                        style={{
                                            background: index % 2 === 0 ? 'var(--primary-color, #ff6b6b)' : '#00cec9',
                                            color: 'var(--primary-text, #ffffff)'
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    
                                    <h3 
                                        className="font-semibold text-lg mb-2 leading-tight"
                                        style={{ color: 'var(--background-text, #2d3436)' }}
                                    >
                                        {point.title}
                                    </h3>
                                    
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #2d3436)',
                                            fontFamily: 'var(--body-font-family, Rubik)',
                                            opacity: 0.8
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

export default CoralReefContentSlide;