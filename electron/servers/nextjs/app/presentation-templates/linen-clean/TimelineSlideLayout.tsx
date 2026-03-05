import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Key Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A significant achievement that marked progress in our journey forward.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'Establishing our core values and building the foundational elements for sustainable growth.' },
        { year: '2021', title: 'Growth Phase', description: 'Expanding our reach and developing new capabilities to serve our community better.' },
        { year: '2022', title: 'Innovation', description: 'Introducing creative solutions and embracing new technologies for enhanced experiences.' },
        { year: '2023', title: 'Partnership', description: 'Building meaningful relationships and collaborative partnerships for mutual success.' }
    ]),
});

export const layoutId = 'linen-clean-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const LinenCleanTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 140;
    const timelineEndX = 1140;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, DM Serif Text)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(140,120,81,0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a3530)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-3xl font-normal mb-3" 
                        style={{ 
                            color: 'var(--background-text, #3a3530)',
                            fontFamily: 'var(--heading-font-family, DM Serif Text)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-16 h-0.5 rounded" 
                        style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5 rounded" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--stroke, rgba(140,120,81,0.15))'
                    }}
                ></div>

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
                                    backgroundColor: 'var(--primary-color, #8c7851)'
                                }}
                            ></div>

                            <div 
                                className="absolute w-56 p-4 rounded-xl" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255,255,255,0.8))',
                                    border: '1px solid rgba(140,120,81,0.12)',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                }}
                            >
                                <div 
                                    className="text-sm font-medium mb-1" 
                                    style={{ 
                                        color: 'var(--primary-color, #8c7851)',
                                        fontFamily: 'var(--body-font-family, DM Sans)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-base font-normal mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3530)',
                                        fontFamily: 'var(--heading-font-family, DM Serif Text)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3530)',
                                        fontFamily: 'var(--body-font-family, DM Sans)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px" 
                                style={{ 
                                    left: x - 1, 
                                    top: isEven ? timelineY - 20 : timelineY + 8,
                                    height: '12px',
                                    backgroundColor: 'var(--stroke, rgba(140,120,81,0.15))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute w-3 h-3 rounded-full opacity-30" 
                    style={{ 
                        top: '100px',
                        left: '100px',
                        backgroundColor: 'var(--primary-color, #8c7851)'
                    }}
                ></div>

                <div 
                    className="absolute w-2 h-2 rounded-full opacity-20" 
                    style={{ 
                        bottom: '80px',
                        right: '120px',
                        backgroundColor: 'var(--primary-color, #8c7851)'
                    }}
                ></div>

                <div 
                    className="absolute w-px opacity-20" 
                    style={{ 
                        top: '140px',
                        right: '80px',
                        height: '40px',
                        backgroundColor: 'var(--stroke, rgba(140,120,81,0.15))'
                    }}
                ></div>
            </div>
        </>
    );
};

export default LinenCleanTimelineSlide;