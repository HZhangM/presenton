import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Elegant milestone description with classical refinement.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation Phase', description: 'Initial planning and architectural design with meticulous attention to detail and classical principles.' },
        { year: '2021', title: 'Development Stage', description: 'Core implementation following time-honored methodologies and refined engineering practices.' },
        { year: '2022', title: 'Refinement Period', description: 'Quality enhancement and elegant optimization ensuring sophisticated performance standards.' },
        { year: '2023', title: 'Launch Excellence', description: 'Graceful deployment with comprehensive monitoring and classical project management principles.' }
    ]),
});

export const layoutId = 'marble-classic-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const MarbleClassicTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 140;
    const timelineEndX = 1140;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--background-text, #2a2a2a)', fontFamily: 'var(--body-font-family, Montserrat)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-4xl font-semibold tracking-wider mb-4 text-center" 
                        style={{ 
                            color: 'var(--background-text, #2a2a2a)',
                            fontFamily: 'var(--heading-font-family, Cormorant)',
                            letterSpacing: '0.15em'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center justify-center mb-8">
                        <div 
                            className="w-8 h-[1px]" 
                            style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}
                        ></div>
                        <div 
                            className="w-2 h-2 mx-3 transform rotate-45 border" 
                            style={{ 
                                borderColor: 'var(--primary-color, #4a4a4a)',
                                backgroundColor: 'var(--card-color, rgba(255,255,255,0.75))'
                            }}
                        ></div>
                        <div 
                            className="w-8 h-[1px]" 
                            style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}
                        ></div>
                    </div>
                </div>

                <div 
                    className="absolute h-[1px]" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isAbove = index % 2 === 0;
                    const cardY = isAbove ? timelineY - 180 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full border transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--card-color, rgba(255,255,255,0.75))',
                                    borderColor: 'var(--primary-color, #4a4a4a)',
                                    borderWidth: '2px'
                                }}
                            ></div>

                            <div 
                                className="absolute w-56 p-4 border rounded" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255,255,255,0.7))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
                                }}
                            >
                                <div 
                                    className="text-lg font-semibold mb-2 tracking-wider" 
                                    style={{ 
                                        color: 'var(--primary-color, #4a4a4a)',
                                        fontFamily: 'var(--heading-font-family, Cormorant)',
                                        letterSpacing: '0.1em'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-medium mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        fontFamily: 'var(--body-font-family, Montserrat)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        fontFamily: 'var(--body-font-family, Montserrat)',
                                        opacity: 0.8
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-[1px]" 
                                style={{ 
                                    left: x - 1, 
                                    top: isAbove ? timelineY - 30 : timelineY + 8,
                                    height: '22px',
                                    backgroundColor: 'var(--stroke, rgba(0,0,0,0.08))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8 opacity-20">
                    <div 
                        className="w-3 h-3 border transform rotate-45" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(0,0,0,0.1))',
                            backgroundColor: 'transparent'
                        }}
                    ></div>
                </div>

                <div className="absolute bottom-8 left-8 opacity-20">
                    <div 
                        className="w-12 h-[1px]" 
                        style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.1))' }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default MarbleClassicTimelineSlide;