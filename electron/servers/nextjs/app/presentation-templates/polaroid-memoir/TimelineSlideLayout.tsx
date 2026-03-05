import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey Through Time'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Memory Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A precious moment captured in time, filled with warmth and beautiful memories that we treasure.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2019', title: 'The Beginning', description: 'Where our story started with dreams and endless possibilities ahead of us.' },
        { year: '2020', title: 'Growing Together', description: 'Learning, adapting, and building stronger foundations through challenges and triumphs.' },
        { year: '2021', title: 'Major Milestone', description: 'Celebrating achievements and marking significant progress in our journey forward.' },
        { year: '2022', title: 'New Adventures', description: 'Exploring fresh opportunities and embracing change with courage and excitement.' }
    ]),
});

export const layoutId = 'polaroid-memoir-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const PolaroidMemoirTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    const rotations = ['-2deg', '1deg', '-1deg', '2deg', '-1.5deg', '1.5deg'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Caveat)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a3020)', fontFamily: 'var(--body-font-family, Lato)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-4xl font-bold mb-4 text-center" 
                        style={{ 
                            color: 'var(--background-text, #3a3020)',
                            fontFamily: 'var(--heading-font-family, Caveat)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-full h-px mx-auto opacity-60" 
                        style={{ 
                            borderBottom: '1px dashed var(--stroke, rgba(212, 118, 78, 0.2))'
                        }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: 'linear-gradient(90deg, var(--primary-color, #d4764e) 0%, var(--stroke, rgba(212, 118, 78, 0.2)) 100%)'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 30;
                    const rotation = rotations[index % rotations.length];
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2 shadow-md" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #d4764e)',
                                    border: '2px solid #ffffff'
                                }}
                            ></div>

                            <div 
                                className="absolute w-56 p-3 shadow-lg transform" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: '#ffffff',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '2px',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                                    paddingBottom: '32px',
                                    transform: `rotate(${rotation})`,
                                    fontFamily: 'var(--body-font-family, Lato)'
                                }}
                            >
                                <div 
                                    className="text-lg font-bold mb-1" 
                                    style={{ 
                                        color: 'var(--primary-color, #d4764e)',
                                        fontFamily: 'var(--heading-font-family, Caveat)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-bold mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3020)',
                                        fontFamily: 'var(--heading-font-family, Caveat)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3020)',
                                        fontFamily: 'var(--body-font-family, Lato)'
                                    }}
                                >
                                    {milestone.description}
                                </div>

                                <div 
                                    className="absolute top-1 left-1 w-4 h-2 opacity-60 transform -rotate-12"
                                    style={{ 
                                        background: 'linear-gradient(45deg, var(--primary-color, #d4764e), rgba(212, 118, 78, 0.7))',
                                        borderRadius: '1px'
                                    }}
                                ></div>
                                <div 
                                    className="absolute top-1 right-1 w-4 h-2 opacity-60 transform rotate-12"
                                    style={{ 
                                        background: 'linear-gradient(45deg, var(--primary-color, #d4764e), rgba(212, 118, 78, 0.7))',
                                        borderRadius: '1px'
                                    }}
                                ></div>
                            </div>

                            <div 
                                className="absolute w-px transform -translate-x-0.5" 
                                style={{ 
                                    left: x, 
                                    top: isEven ? timelineY - 20 : timelineY + 16,
                                    height: '12px',
                                    background: 'var(--stroke, rgba(212, 118, 78, 0.2))',
                                    borderLeft: '1px dashed var(--stroke, rgba(212, 118, 78, 0.2))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute bottom-8 left-8 w-6 h-8 opacity-40 transform rotate-12"
                    style={{ 
                        background: 'repeating-linear-gradient(45deg, var(--primary-color, #d4764e), var(--primary-color, #d4764e) 2px, transparent 2px, transparent 4px)',
                        borderRadius: '1px'
                    }}
                ></div>

                <div 
                    className="absolute bottom-8 right-8 w-8 h-6 opacity-40 transform -rotate-6"
                    style={{ 
                        background: 'repeating-linear-gradient(135deg, var(--stroke, rgba(212, 118, 78, 0.2)), var(--stroke, rgba(212, 118, 78, 0.2)) 2px, transparent 2px, transparent 4px)',
                        borderRadius: '1px'
                    }}
                ></div>
            </div>
        </>
    );
};

export default PolaroidMemoirTimelineSlide;