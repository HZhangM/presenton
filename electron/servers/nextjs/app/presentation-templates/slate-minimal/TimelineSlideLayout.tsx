import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Key milestone description with technical details.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2021', title: 'Foundation Phase', description: 'Initial planning and architecture design with stakeholder alignment and technical requirements.' },
        { year: '2022', title: 'Development Sprint', description: 'Core feature implementation following agile methodologies and continuous integration practices.' },
        { year: '2023', title: 'Testing & QA', description: 'Comprehensive quality assurance testing with automated deployment and performance optimization.' },
        { year: '2024', title: 'Production Launch', description: 'Full system deployment with monitoring infrastructure and user training completion.' }
    ]),
});

export const layoutId = 'slate-minimal-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const SlateMinimalTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 360;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium" style={{ color: 'var(--background-text, #1e293b)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8">
                    <h1 
                        className="text-3xl font-semibold mb-3" 
                        style={{ 
                            color: 'var(--background-text, #1e293b)',
                            fontFamily: 'var(--heading-font-family, Inter)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-12 h-1 rounded-full" 
                        style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5 rounded-full" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 200 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-3 h-3 rounded-full transform -translate-x-1.5" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 6,
                                    backgroundColor: 'var(--primary-color, #3b82f6)'
                                }}
                            ></div>

                            <div 
                                className="absolute w-52 p-4 rounded-lg border" 
                                style={{ 
                                    left: x - 104, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div 
                                        className="w-2 h-2 rounded-full flex-shrink-0" 
                                        style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                                    ></div>
                                    <span 
                                        className="text-sm font-medium" 
                                        style={{ color: 'var(--primary-color, #3b82f6)' }}
                                    >
                                        {milestone.year}
                                    </span>
                                </div>
                                <h3 
                                    className="text-sm font-semibold mb-2 leading-tight" 
                                    style={{ color: 'var(--background-text, #1e293b)' }}
                                >
                                    {milestone.title}
                                </h3>
                                <p 
                                    className="text-xs leading-relaxed" 
                                    style={{ color: 'var(--background-text, #1e293b)', opacity: 0.7 }}
                                >
                                    {milestone.description}
                                </p>
                            </div>

                            <div 
                                className="absolute w-px" 
                                style={{ 
                                    left: x - 0.5, 
                                    top: isEven ? timelineY - 40 : timelineY + 12,
                                    height: '28px',
                                    backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-8 right-8 px-3 py-1 rounded-full border" 
                    style={{ 
                        background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                        border: '1px solid rgba(0,0,0,0.06)'
                    }}
                >
                    <span 
                        className="text-xs font-medium" 
                        style={{ color: 'var(--primary-color, #3b82f6)' }}
                    >
                        Timeline
                    </span>
                </div>

                <div 
                    className="absolute bottom-8 left-8 w-1 h-8 rounded-full" 
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)', opacity: 0.6 }}
                ></div>

                <div 
                    className="absolute bottom-8 right-8 w-1 h-8 rounded-full" 
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)', opacity: 0.3 }}
                ></div>
            </div>
        </>
    );
};

export default SlateMinimalTimelineSlide;