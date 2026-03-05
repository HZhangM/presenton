import React from 'react';
import * as z from 'zod';

export const layoutId = 'vintage-paper-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A vintage-styled timeline layout with aged parchment aesthetics, featuring milestones with ornamental dividers and classic typography.';

export const Schema = z.object({
    title: z.string().min(1).max(30).default('Company Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).default('2020'),
        title: z.string().min(1).max(40).default('Major Milestone'),
        description: z.string().min(1).max(100).default('Important company achievement or development that shaped our journey forward.')
    })).min(3).max(6).default([
        { year: '1885', title: 'Foundation', description: 'Established with a vision to create lasting impact in our industry through innovation.' },
        { year: '1923', title: 'First Expansion', description: 'Opened new facilities and expanded operations to serve a growing customer base.' },
        { year: '1967', title: 'Innovation Era', description: 'Introduced groundbreaking technologies that revolutionized our field of expertise.' },
        { year: '1994', title: 'Global Reach', description: 'Achieved international presence with offices spanning multiple continents.' },
        { year: '2018', title: 'Digital Transform', description: 'Embraced digital technologies to enhance customer experience and operational efficiency.' }
    ])
});

const VintagePaperTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const totalWidth = 1000;
    const spacing = totalWidth / (itemCount - 1);

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Playfair Display)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-6" style={{ background: 'var(--stroke, rgba(139,69,19,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-semibold" 
                                        style={{ 
                                            color: 'var(--background-text, #3a2e1e)',
                                            fontFamily: "var(--heading-font-family, Playfair Display)"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-0 top-20 w-full text-center">
                    <h1 
                        className="text-5xl font-bold mb-8"
                        style={{ 
                            color: 'var(--background-text, #3a2e1e)',
                            fontFamily: "var(--heading-font-family, Playfair Display)"
                        }}
                    >
                        {title}
                    </h1>
                    
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-[1px]" style={{ background: 'var(--primary-color, #8b4513)' }}></div>
                        <div 
                            className="mx-3 w-3 h-3 rotate-45 border"
                            style={{ borderColor: 'var(--primary-color, #8b4513)' }}
                        ></div>
                        <div className="w-16 h-[1px]" style={{ background: 'var(--primary-color, #8b4513)' }}></div>
                    </div>
                </div>

                <div className="absolute left-[140px] top-[280px] w-[1000px] h-[300px]">
                    <div 
                        className="absolute top-[120px] w-full h-[2px]"
                        style={{ 
                            background: 'var(--stroke, rgba(139,69,19,0.25))',
                            borderTop: '1px dashed var(--stroke, rgba(139,69,19,0.25))'
                        }}
                    ></div>

                    {milestones && milestones.map((milestone, index) => {
                        const isTop = index % 2 === 0;
                        const xPosition = (index / (itemCount - 1)) * totalWidth;
                        
                        return (
                            <div key={index} className="absolute" style={{ left: `${xPosition}px` }}>
                                <div 
                                    className="absolute w-4 h-4 rounded-full border-2 -translate-x-2"
                                    style={{ 
                                        top: isTop ? '112px' : '112px',
                                        background: 'var(--card-color, rgba(139, 69, 19, 0.06))',
                                        borderColor: 'var(--primary-color, #8b4513)'
                                    }}
                                ></div>
                                
                                <div 
                                    className={`absolute w-64 -translate-x-32 ${isTop ? 'bottom-[200px]' : 'top-[140px]'}`}
                                >
                                    <div 
                                        className="p-5 rounded-sm border"
                                        style={{ 
                                            border: '1px solid rgba(139,69,19,0.15)',
                                            background: 'rgba(255,250,240,0.5)',
                                            borderRadius: '2px'
                                        }}
                                    >
                                        <div 
                                            className="text-2xl font-bold mb-2"
                                            style={{ 
                                                color: 'var(--primary-color, #8b4513)',
                                                fontFamily: "var(--heading-font-family, Playfair Display)"
                                            }}
                                        >
                                            <span 
                                                className="float-left text-4xl leading-6 pr-1 pt-1"
                                                style={{ color: 'var(--primary-color, #8b4513)' }}
                                            >
                                                {milestone.year.charAt(0)}
                                            </span>
                                            {milestone.year.slice(1)}
                                        </div>
                                        
                                        <h3 
                                            className="text-lg font-bold mb-2"
                                            style={{ 
                                                color: 'var(--background-text, #3a2e1e)',
                                                fontFamily: "var(--heading-font-family, Playfair Display)"
                                            }}
                                        >
                                            {milestone.title}
                                        </h3>
                                        
                                        <p 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                                color: 'var(--background-text, #3a2e1e)',
                                                fontFamily: "var(--body-font-family, Crimson Text)"
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div 
                    className="absolute bottom-8 left-8 w-32 h-32 opacity-5 pointer-events-none"
                    style={{ 
                        background: `radial-gradient(circle, var(--primary-color, #8b4513) 1px, transparent 1px)`,
                        backgroundSize: '8px 8px'
                    }}
                ></div>

                <div 
                    className="absolute top-24 right-8 w-24 h-24 opacity-5 pointer-events-none border-2 rotate-45"
                    style={{ borderColor: 'var(--stroke, rgba(139,69,19,0.25))' }}
                ></div>
            </div>
        </>
    );
};

export default VintagePaperTimelineSlide;