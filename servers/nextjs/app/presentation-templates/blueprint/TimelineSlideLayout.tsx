import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Technical specifications and implementation details for this critical project milestone.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Initial Design Phase', description: 'Blueprint creation and technical specification documentation with detailed engineering requirements.' },
        { year: '2021', title: 'Development & Testing', description: 'Core system implementation following technical standards and comprehensive quality assurance protocols.' },
        { year: '2022', title: 'Deployment Phase', description: 'Production rollout with performance monitoring and system optimization according to specifications.' },
        { year: '2023', title: 'Enhancement Release', description: 'Feature upgrades and technical improvements based on operational data and user feedback analysis.' }
    ]),
});

export const layoutId = 'blueprint-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const BlueprintTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, JetBrains Mono)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #c8d8e8)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div 
                    className="absolute top-6 left-8 px-4 py-2 border-2" 
                    style={{ 
                        borderColor: 'var(--stroke, rgba(77,171,247,0.35))',
                        background: 'var(--card-color, rgba(77,171,247,0.08))',
                        borderRadius: '2px'
                    }}
                >
                    <div className="text-[10px] font-bold tracking-wider uppercase" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                        DRAWING NO: TL-001
                    </div>
                </div>

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-4xl font-bold tracking-wide mb-2" 
                        style={{ 
                            color: 'var(--primary-text, #0d2137)',
                            fontFamily: 'var(--heading-font-family, JetBrains Mono)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-16 h-0.5" 
                        style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}
                    ></div>
                </div>

                <svg 
                    className="absolute" 
                    style={{ left: timelineStartX, top: timelineY, width: timelineWidth, height: '2px' }}
                    width={timelineWidth} 
                    height="2"
                >
                    <line 
                        x1="0" 
                        y1="1" 
                        x2={timelineWidth} 
                        y2="1" 
                        stroke="var(--stroke, rgba(77,171,247,0.35))" 
                        strokeWidth="2" 
                        strokeDasharray="8,4"
                    />
                </svg>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 160 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-3 h-3 transform -translate-x-1.5" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 6,
                                    backgroundColor: 'var(--primary-color, #4dabf7)'
                                }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[8px] font-bold" style={{ color: 'var(--primary-text, #0d2137)' }}>+</span>
                                </div>
                            </div>

                            <div 
                                className="absolute w-64 p-4 border-2" 
                                style={{ 
                                    left: x - 128, 
                                    top: cardY,
                                    borderColor: 'var(--stroke, rgba(77,171,247,0.35))',
                                    background: 'var(--card-color, rgba(77,171,247,0.08))',
                                    borderRadius: '2px',
                                    borderStyle: 'dashed'
                                }}
                            >
                                <div 
                                    className="text-sm font-bold mb-1 tracking-wider" 
                                    style={{ 
                                        color: 'var(--primary-color, #4dabf7)',
                                        fontFamily: 'var(--heading-font-family, JetBrains Mono)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-xs font-medium mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--primary-text, #0d2137)',
                                        fontFamily: 'var(--heading-font-family, JetBrains Mono)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-[10px] leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #c8d8e8)',
                                        fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <svg 
                                className="absolute" 
                                style={{ left: x - 1, top: isEven ? timelineY - 40 : timelineY + 15 }}
                                width="2" 
                                height="25"
                            >
                                <line 
                                    x1="1" 
                                    y1="0" 
                                    x2="1" 
                                    y2="25" 
                                    stroke="var(--stroke, rgba(77,171,247,0.35))" 
                                    strokeWidth="1" 
                                    strokeDasharray="3,2"
                                />
                            </svg>
                        </div>
                    );
                })}

                <div className="absolute top-4 right-8">
                    <div className="flex items-center gap-2">
                        <span className="text-[8px] font-bold tracking-wider" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                        <span className="text-[8px] font-bold tracking-wider" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                        <span className="text-[8px] font-bold tracking-wider" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                    </div>
                </div>

                <div className="absolute bottom-8 left-8">
                    <div 
                        className="w-8 h-8 border flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(77,171,247,0.35))',
                            borderRadius: '2px'
                        }}
                    >
                        <span className="text-xs font-bold" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <div 
                        className="w-8 h-8 border flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(77,171,247,0.35))',
                            borderRadius: '2px'
                        }}
                    >
                        <span className="text-xs font-bold" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlueprintTimelineSlide;