import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Scholarly Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('1800'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Academic Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A significant moment in the chronicle of scholarly pursuit and intellectual discovery.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1837', title: 'Foundation Era', description: 'The establishment of classical academic principles and the formation of scholarly institutions.' },
        { year: '1862', title: 'Renaissance Period', description: 'A flourishing of intellectual discourse and the advancement of critical methodologies.' },
        { year: '1891', title: 'Modern Synthesis', description: 'Integration of traditional wisdom with contemporary analytical frameworks and research.' },
        { year: '1923', title: 'Contemporary Phase', description: 'Current developments in academic theory and the evolution of scholarly practice.' }
    ]),
});

export const layoutId = 'dark-academia-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const DarkAcademiaTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Spectral)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(200,168,130,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium" style={{ color: 'var(--background-text, #e8dcc8)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-4xl font-bold mb-4" 
                        style={{ 
                            color: 'var(--background-text, #e8dcc8)',
                            fontFamily: 'var(--heading-font-family, Spectral)'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center gap-2 mb-6">
                        <div 
                            className="w-16 h-px" 
                            style={{ backgroundColor: 'var(--primary-color, #c8a882)' }}
                        ></div>
                        <span 
                            className="text-sm" 
                            style={{ color: 'var(--primary-color, #c8a882)' }}
                        >
                            ❦
                        </span>
                        <div 
                            className="w-16 h-px" 
                            style={{ backgroundColor: 'var(--primary-color, #c8a882)' }}
                        ></div>
                    </div>
                </div>

                <div 
                    className="absolute h-px" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth, 
                        backgroundColor: 'var(--stroke, rgba(200,168,130,0.25))' 
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    const cardWidth = itemCount > 4 ? 220 : 240;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2 flex items-center justify-center" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #c8a882)',
                                    border: '2px solid var(--background-color, transparent)'
                                }}
                            >
                                <div 
                                    className="w-1 h-1 rounded-full" 
                                    style={{ backgroundColor: 'var(--primary-text, #2a1a0e)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute p-4 border border-solid rounded"
                                style={{ 
                                    left: x - (cardWidth / 2), 
                                    top: cardY,
                                    width: cardWidth,
                                    borderColor: 'var(--stroke, rgba(200,168,130,0.15))',
                                    background: 'var(--card-color, rgba(200,168,130,0.06))',
                                    borderRadius: '4px'
                                }}
                            >
                                <div 
                                    className="text-lg font-bold mb-2" 
                                    style={{ 
                                        color: 'var(--primary-color, #c8a882)',
                                        fontFamily: 'var(--heading-font-family, Spectral)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className={`${itemCount > 4 ? 'text-sm' : 'text-base'} font-semibold mb-2`} 
                                    style={{ 
                                        color: 'var(--background-text, #e8dcc8)',
                                        fontFamily: 'var(--heading-font-family, Spectral)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className={`${itemCount > 4 ? 'text-xs' : 'text-sm'} leading-relaxed`} 
                                    style={{ 
                                        color: 'var(--background-text, #e8dcc8)',
                                        opacity: 0.85,
                                        fontFamily: 'var(--body-font-family, Spectral)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px transform -translate-x-0.5" 
                                style={{ 
                                    left: x, 
                                    top: isEven ? timelineY - 30 : timelineY + 16,
                                    height: '20px',
                                    backgroundColor: 'var(--stroke, rgba(200,168,130,0.25))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-8 right-8 text-2xl opacity-20" 
                    style={{ color: 'var(--primary-color, #c8a882)' }}
                >
                    ❦
                </div>

                <div 
                    className="absolute bottom-8 left-8 text-xl opacity-15" 
                    style={{ color: 'var(--primary-color, #c8a882)' }}
                >
                    ❦
                </div>
            </div>
        </>
    );
};

export default DarkAcademiaTimelineSlide;