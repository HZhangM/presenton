import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Key achievements and strategic developments during this critical project milestone.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2022', title: 'Innovation Launch', description: 'Revolutionary product development with cutting-edge technology integration and market research.' },
        { year: '2023', title: 'Market Expansion', description: 'Strategic growth initiatives across global markets with enhanced customer experience.' },
        { year: '2024', title: 'Digital Transformation', description: 'Advanced automation and AI-driven solutions for operational excellence and scalability.' },
        { year: '2025', title: 'Future Vision', description: 'Next-generation platform development with sustainable practices and community impact.' }
    ]),
});

export const layoutId = 'electric-purple-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const ElectricPurpleTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Urbanist)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(187,134,252,0.3))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #e8d0ff)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8">
                    <h1 
                        className="text-3xl font-bold mb-3" 
                        style={{ 
                            color: 'var(--background-text, #e8d0ff)',
                            fontFamily: 'var(--heading-font-family, Urbanist)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-full h-px opacity-50"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #bb86fc) 50%, transparent 100%)'
                        }}
                    ></div>
                </div>

                <svg 
                    className="absolute" 
                    style={{ left: timelineStartX, top: timelineY, width: timelineWidth, height: '3px' }}
                    width={timelineWidth} 
                    height="3"
                >
                    <defs>
                        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'transparent' }} />
                            <stop offset="50%" style={{ stopColor: 'var(--primary-color, #bb86fc)' }} />
                            <stop offset="100%" style={{ stopColor: 'transparent' }} />
                        </linearGradient>
                    </defs>
                    <line 
                        x1="0" 
                        y1="1.5" 
                        x2={timelineWidth} 
                        y2="1.5" 
                        stroke="url(#timelineGradient)" 
                        strokeWidth="3"
                    />
                </svg>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 30;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    background: 'var(--primary-color, #bb86fc)',
                                    boxShadow: '0 0 20px rgba(187, 134, 252, 0.6)'
                                }}
                            ></div>

                            <div 
                                className="absolute p-4 rounded-2xl"
                                style={{ 
                                    left: x - 120, 
                                    top: cardY,
                                    width: '240px',
                                    border: '1px solid rgba(187,134,252,0.2)',
                                    background: 'rgba(187,134,252,0.08)',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 8px 32px rgba(187, 134, 252, 0.1)'
                                }}
                            >
                                <div 
                                    className="text-sm font-bold mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--primary-color, #bb86fc)',
                                        fontFamily: 'var(--heading-font-family, Urbanist)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-base font-semibold mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #e8d0ff)',
                                        fontFamily: 'var(--heading-font-family, Urbanist)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-sm leading-relaxed opacity-90" 
                                    style={{ 
                                        color: 'var(--background-text, #e8d0ff)',
                                        fontFamily: 'var(--body-font-family, Urbanist)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div
                                className="absolute w-px"
                                style={{
                                    left: x - 0.5,
                                    top: isEven ? timelineY - 30 : timelineY + 15,
                                    height: '15px',
                                    background: 'var(--stroke, rgba(187,134,252,0.3))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-20 right-8 w-20 h-20 rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--primary-color, #bb86fc) 0%, transparent 70%)'
                    }}
                ></div>

                <div 
                    className="absolute bottom-8 left-8 w-2 h-16 rounded-full opacity-20"
                    style={{
                        background: 'linear-gradient(180deg, var(--primary-color, #bb86fc) 0%, transparent 100%)'
                    }}
                ></div>

                <svg
                    className="absolute bottom-20 right-20 opacity-20"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                >
                    <path
                        d="M30 5 L55 30 L30 55 L5 30 Z"
                        fill="none"
                        stroke="var(--primary-color, #bb86fc)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </>
    );
};

export default ElectricPurpleTimelineSlide;