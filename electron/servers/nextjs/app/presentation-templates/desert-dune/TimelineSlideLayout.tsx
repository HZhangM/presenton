import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Journey Through Time'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Desert Discovery'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A significant milestone marking progress through the vast expanse of time and achievement.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation Phase', description: 'Initial groundwork laid with careful planning and vision setting for the journey ahead.' },
        { year: '2021', title: 'Growth Period', description: 'Expansion and development through dedicated effort and strategic implementation.' },
        { year: '2022', title: 'Transformation Era', description: 'Major breakthrough achieved through innovation and persistent dedication to excellence.' },
        { year: '2023', title: 'Excellence Milestone', description: 'Recognition and achievement of significant goals through collaborative teamwork.' }
    ]),
});

export const layoutId = 'desert-dune-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const DesertDuneTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

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
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(184, 134, 11, 0.2))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #3a2e1e)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-4xl font-normal tracking-wide mb-4 text-center" 
                        style={{ 
                            color: 'var(--background-text, #3a2e1e)',
                            fontFamily: 'var(--heading-font-family, Tenor Sans)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-px mx-auto" 
                        style={{ backgroundColor: 'var(--primary-color, #b8860b)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #b8860b), transparent)'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 30;
                    
                    return (
                        <div key={index} className="absolute left-0 right-0" style={{ top: 0 }}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2 flex items-center justify-center" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #b8860b)',
                                    border: '2px solid var(--card-color, rgba(255, 255, 255, 0.6))'
                                }}
                            >
                                <div 
                                    className="w-1.5 h-1.5 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-text, #ffffff)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute w-56 p-4 border rounded-xl" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    boxShadow: '0 8px 32px rgba(184, 134, 11, 0.1)'
                                }}
                            >
                                <div 
                                    className="text-sm font-medium mb-2 text-center" 
                                    style={{ 
                                        color: 'var(--primary-color, #b8860b)',
                                        fontFamily: 'var(--heading-font-family, Tenor Sans)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-base font-medium mb-3 text-center" 
                                    style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: 'var(--heading-font-family, Tenor Sans)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed text-center font-light" 
                                    style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: 'var(--body-font-family, Work Sans)'
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
                                    height: '22px',
                                    background: 'linear-gradient(180deg, var(--primary-color, #b8860b), transparent)'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8">
                    <svg width="60" height="30" viewBox="0 0 60 30" className="opacity-20">
                        <path 
                            d="M15 25 Q30 5 45 25" 
                            stroke="var(--primary-color, #b8860b)" 
                            strokeWidth="1" 
                            fill="none"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-6 left-8">
                    <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-15">
                        <path 
                            d="M5 15 Q20 5 35 15" 
                            stroke="var(--primary-color, #b8860b)" 
                            strokeWidth="1" 
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default DesertDuneTimelineSlide;