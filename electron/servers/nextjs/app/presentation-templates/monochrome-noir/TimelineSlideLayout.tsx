import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Key milestone description with important details.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation Phase', description: 'Initial project conception and strategic planning with comprehensive market analysis and feasibility studies.' },
        { year: '2021', title: 'Development Launch', description: 'Core development initiation with team assembly and technical architecture design implementation.' },
        { year: '2022', title: 'Implementation', description: 'Full-scale execution of project deliverables with rigorous quality control and testing protocols.' },
        { year: '2023', title: 'Market Release', description: 'Product launch and market deployment with comprehensive user training and support systems.' }
    ]),
});

export const layoutId = 'monochrome-noir-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const MonochromeNoirTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Space Grotesk)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[2px] h-6" style={{ backgroundColor: 'var(--primary-color, #000000)' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-bold tracking-wide" style={{ color: 'var(--background-text, #000000)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-5xl font-bold tracking-tight mb-4" 
                        style={{ 
                            color: 'var(--background-text, #000000)',
                            fontFamily: 'var(--heading-font-family, Space Grotesk)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-full h-[3px]" 
                        style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-[3px]" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--primary-color, #000000)'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-6 h-6 border-2 flex items-center justify-center font-bold text-lg" 
                                style={{ 
                                    left: x - 12, 
                                    top: timelineY - 12,
                                    borderColor: 'var(--primary-color, #000000)',
                                    backgroundColor: 'var(--primary-text, #ffffff)',
                                    color: 'var(--primary-color, #000000)'
                                }}
                            >
                                {index + 1}
                            </div>

                            <div 
                                className="absolute w-64 p-4 border-2" 
                                style={{ 
                                    left: x - 128, 
                                    top: cardY,
                                    borderColor: 'var(--primary-color, #000000)',
                                    backgroundColor: 'var(--primary-text, #ffffff)',
                                    borderRadius: '0'
                                }}
                            >
                                <div 
                                    className="text-2xl font-bold mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--primary-color, #000000)',
                                        fontFamily: 'var(--heading-font-family, Space Grotesk)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-bold mb-3" 
                                    style={{ 
                                        color: 'var(--background-text, #000000)',
                                        fontFamily: 'var(--heading-font-family, Space Grotesk)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-tight" 
                                    style={{ 
                                        color: 'var(--background-text, #000000)',
                                        fontFamily: 'var(--body-font-family, Space Grotesk)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-[3px]" 
                                style={{ 
                                    left: x - 1.5, 
                                    top: isEven ? timelineY - 40 : timelineY + 15,
                                    height: '25px',
                                    backgroundColor: 'var(--primary-color, #000000)'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-8 right-8 w-16 h-16 border-2 flex items-center justify-center" 
                    style={{ 
                        borderColor: 'var(--primary-color, #000000)',
                        backgroundColor: 'var(--primary-color, #000000)'
                    }}
                >
                    <div 
                        className="w-8 h-8 border-2" 
                        style={{ 
                            borderColor: 'var(--primary-text, #ffffff)',
                            backgroundColor: 'var(--primary-text, #ffffff)'
                        }}
                    ></div>
                </div>

                <div 
                    className="absolute bottom-8 left-8 w-12 h-12" 
                    style={{ 
                        backgroundColor: 'var(--primary-color, #000000)'
                    }}
                ></div>

                <div 
                    className="absolute bottom-8 right-8 w-12 h-12 border-2" 
                    style={{ 
                        borderColor: 'var(--primary-color, #000000)',
                        backgroundColor: 'var(--primary-text, #ffffff)'
                    }}
                ></div>
            </div>
        </>
    );
};

export default MonochromeNoirTimelineSlide;