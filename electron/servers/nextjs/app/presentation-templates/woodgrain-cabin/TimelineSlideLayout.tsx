import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Milestones'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Key accomplishments and deliverables completed during this important project milestone.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation & Planning', description: 'Initial project setup with detailed planning documents and resource allocation for the upcoming phases.' },
        { year: '2021', title: 'Development Phase', description: 'Core implementation and feature development with rigorous testing and quality assurance protocols.' },
        { year: '2022', title: 'Launch & Integration', description: 'Production deployment and system integration with comprehensive monitoring and optimization.' },
        { year: '2023', title: 'Growth & Expansion', description: 'Feature enhancements and scaling initiatives based on user feedback and market requirements.' }
    ]),
});

export const layoutId = 'woodgrain-cabin-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const WoodgrainCabinTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Amatic SC)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[2px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #f5efe6)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-5xl font-bold mb-4 text-center" 
                        style={{ 
                            color: 'var(--primary-text, #2a1a0e)',
                            fontFamily: 'var(--heading-font-family, Amatic SC)'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center justify-center mb-2">
                        <div 
                            className="w-20 h-1" 
                            style={{ backgroundColor: 'var(--primary-color, #d4a76a)' }}
                        ></div>
                        <div 
                            className="mx-2 w-3 h-3 transform rotate-45" 
                            style={{ 
                                backgroundColor: 'var(--primary-color, #d4a76a)',
                                border: '1px solid var(--primary-color, #d4a76a)'
                            }}
                        ></div>
                        <div 
                            className="w-20 h-1" 
                            style={{ backgroundColor: 'var(--primary-color, #d4a76a)' }}
                        ></div>
                    </div>
                </div>

                <div 
                    className="absolute h-1 rounded-full" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: 'var(--primary-color, #d4a76a)',
                        boxShadow: '0 2px 4px rgba(139,90,43,0.2)'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 150 : timelineY + 40;
                    const cardWidth = itemCount > 4 ? 220 : 240;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-6 h-6 rounded-full border-4 transform -translate-x-3" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 12,
                                    backgroundColor: 'var(--card-color, rgba(255, 250, 240, 0.9))',
                                    borderColor: 'var(--primary-color, #d4a76a)',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                                }}
                            >
                                <div className="absolute inset-1 rounded-full" style={{ backgroundColor: 'var(--primary-color, #d4a76a)' }}></div>
                            </div>

                            <div 
                                className="absolute p-4 border rounded-lg" 
                                style={{ 
                                    left: x - (cardWidth / 2), 
                                    top: cardY,
                                    width: cardWidth + 'px',
                                    background: 'var(--card-color, rgba(255, 250, 240, 0.92))',
                                    border: '1px solid rgba(139,90,43,0.15)',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div 
                                    className="text-lg font-bold mb-1 text-center" 
                                    style={{ 
                                        color: 'var(--primary-color, #d4a76a)',
                                        fontFamily: 'var(--heading-font-family, Amatic SC)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-semibold mb-2 text-center" 
                                    style={{ 
                                        color: 'var(--primary-text, #2a1a0e)',
                                        fontFamily: 'var(--body-font-family, Cabin)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed text-center" 
                                    style={{ 
                                        color: 'var(--primary-text, #2a1a0e)',
                                        fontFamily: 'var(--body-font-family, Cabin)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-0.5 rounded-full" 
                                style={{ 
                                    left: x - 1, 
                                    top: isEven ? timelineY - 30 : timelineY + 20,
                                    height: '20px',
                                    background: 'var(--stroke, rgba(212, 167, 106, 0.3))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-8 left-8">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="var(--primary-color, #d4a76a)" opacity="0.6"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 right-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="var(--primary-color, #d4a76a)" opacity="0.4"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8 opacity-50">
                    <div 
                        className="w-8 h-8 rounded border-2 flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(212, 167, 106, 0.3))'
                        }}
                    >
                        <span className="text-xs font-bold" style={{ color: 'var(--primary-color, #d4a76a)' }}>✕</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WoodgrainCabinTimelineSlide;