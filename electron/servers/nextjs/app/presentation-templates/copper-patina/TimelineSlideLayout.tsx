import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Technical specifications and implementation details for this critical project milestone.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Discovery & Research', description: 'Market analysis and technical feasibility studies with comprehensive stakeholder interviews and requirements.' },
        { year: '2021', title: 'Design & Development', description: 'Core architecture development following industry standards with iterative prototyping and testing cycles.' },
        { year: '2022', title: 'Production Launch', description: 'Full-scale deployment with quality assurance protocols and performance monitoring systems in place.' },
        { year: '2023', title: 'Optimization Phase', description: 'Continuous improvement initiatives based on operational data and user feedback analysis for enhanced performance.' }
    ]),
});

export const layoutId = 'copper-patina-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const CopperPatinaTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Abril Fatface)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(184,115,51,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #f0e8d8)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8">
                    <h1 
                        className="text-3xl font-bold mb-4" 
                        style={{ 
                            color: 'var(--primary-text, #1a1a1a)',
                            fontFamily: 'var(--heading-font-family, Abril Fatface)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="flex items-center gap-2 mb-6"
                    >
                        <div 
                            className="w-12 h-0.5" 
                            style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                        ></div>
                        <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                        ></div>
                        <div 
                            className="w-6 h-0.5" 
                            style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                        ></div>
                    </div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth, 
                        backgroundColor: 'var(--stroke, rgba(184,115,51,0.25))' 
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    
                    return (
                        <div key={index} className="absolute" style={{ left: 0, right: 0 }}>
                            <div 
                                className="absolute w-4 h-4 rounded-full border-2 transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--card-color, rgba(255,245,230,0.8))',
                                    borderColor: 'var(--primary-color, #b87333)'
                                }}
                            >
                                <div 
                                    className="absolute inset-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute w-56 p-4" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255,245,230,0.85))',
                                    border: '1px solid var(--stroke, rgba(184,115,51,0.2))',
                                    borderRadius: '6px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}
                            >
                                <div 
                                    className="absolute top-2 left-2 w-1 h-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                                <div 
                                    className="absolute top-2 right-2 w-1 h-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                                
                                <div 
                                    className="text-sm font-bold mb-1 uppercase tracking-wider" 
                                    style={{ 
                                        color: 'var(--primary-color, #b87333)',
                                        fontFamily: 'var(--body-font-family, Fira Sans)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-base font-semibold mb-2" 
                                    style={{ 
                                        color: 'var(--primary-text, #1a1a1a)',
                                        fontFamily: 'var(--body-font-family, Fira Sans)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #f0e8d8)',
                                        fontFamily: 'var(--body-font-family, Fira Sans)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                                
                                <div 
                                    className="absolute bottom-2 left-2 w-1 h-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                                <div 
                                    className="absolute bottom-2 right-2 w-1 h-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute w-0.5" 
                                style={{ 
                                    left: x - 1, 
                                    top: isEven ? timelineY - 30 : timelineY + 15,
                                    height: '25px',
                                    backgroundColor: 'var(--stroke, rgba(184,115,51,0.25))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute bottom-8 left-8 w-12 h-0.5" 
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>
                <div 
                    className="absolute bottom-6 left-10 w-2 h-2 rounded-full" 
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>

                <div 
                    className="absolute bottom-8 right-8 w-12 h-0.5" 
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>
                <div 
                    className="absolute bottom-6 right-10 w-2 h-2 rounded-full" 
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>
            </div>
        </>
    );
};

export default CopperPatinaTimelineSlide;