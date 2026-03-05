import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Important milestone description with key details and outcomes.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2021', title: 'Foundation Phase', description: 'Initial planning and design work with careful attention to structural requirements and material selection.' },
        { year: '2022', title: 'Development Stage', description: 'Core implementation and iterative refinement following precise geometric specifications.' },
        { year: '2023', title: 'Integration Phase', description: 'System assembly and comprehensive testing to ensure all components fold together seamlessly.' },
        { year: '2024', title: 'Launch & Optimization', description: 'Final deployment with ongoing performance monitoring and careful adjustments for optimal results.' }
    ]),
});

export const layoutId = 'origami-paper-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const OrigamiPaperTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 140;
    const timelineEndX = 1140;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Outfit)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(224, 122, 95, 0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium" style={{ color: 'var(--background-text, #2d2d3d)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-3xl font-semibold mb-3" 
                        style={{ 
                            color: 'var(--background-text, #2d2d3d)',
                            fontFamily: 'var(--heading-font-family, Outfit)'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div 
                            className="w-12 h-0.5" 
                            style={{ backgroundColor: 'var(--primary-color, #e07a5f)' }}
                        ></div>
                        <div 
                            className="w-0 h-0 border-l-[6px] border-r-0 border-b-[4px] border-t-[4px]" 
                            style={{ 
                                borderLeftColor: 'var(--primary-color, #e07a5f)',
                                borderTopColor: 'transparent',
                                borderBottomColor: 'transparent'
                            }}
                        ></div>
                    </div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--stroke, rgba(224, 122, 95, 0.15))'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 30;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 transform -translate-x-2 rounded-full" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #e07a5f)'
                                }}
                            ></div>

                            <div 
                                className="absolute w-56 p-4" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '4px',
                                    boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
                                }}
                            >
                                <div 
                                    className="text-sm font-semibold mb-1" 
                                    style={{ 
                                        color: 'var(--primary-color, #e07a5f)',
                                        fontFamily: 'var(--heading-font-family, Outfit)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-medium mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #2d2d3d)',
                                        fontFamily: 'var(--heading-font-family, Outfit)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #2d2d3d)',
                                        fontFamily: 'var(--body-font-family, Nunito Sans)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px h-6" 
                                style={{ 
                                    left: x - 0.5, 
                                    top: isEven ? timelineY - 30 : timelineY + 15,
                                    backgroundColor: 'var(--stroke, rgba(224, 122, 95, 0.15))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-24 right-12 w-0 h-0"
                    style={{
                        borderLeft: '20px solid var(--primary-color, #e07a5f)',
                        borderTop: '12px solid transparent',
                        borderBottom: '12px solid transparent',
                        opacity: '0.15'
                    }}
                ></div>

                <div 
                    className="absolute bottom-16 left-12 w-0 h-0"
                    style={{
                        borderRight: '16px solid var(--primary-color, #e07a5f)',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        opacity: '0.2'
                    }}
                ></div>

                <div 
                    className="absolute bottom-12 right-16 w-6 h-6"
                    style={{
                        background: 'var(--primary-color, #e07a5f)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        opacity: '0.1'
                    }}
                ></div>
            </div>
        </>
    );
};

export default OrigamiPaperTimelineSlide;