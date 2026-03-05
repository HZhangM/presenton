import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Sacred Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Sacred Moment'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A blessed milestone in our sacred journey through time and divine providence.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1150', title: 'Cathedral Foundation', description: 'The sacred stones were blessed and laid with divine purpose under the watchful eyes of devoted craftsmen.' },
        { year: '1275', title: 'Rose Window Creation', description: 'Master glaziers crafted the magnificent rose window, casting divine light through precious colored glass.' },
        { year: '1420', title: 'Bell Tower Completion', description: 'The tower reached heavenward, its bronze bells calling the faithful to prayer across the valley.' },
        { year: '1685', title: 'Sacred Restoration', description: 'Devoted artisans renewed the sanctuary with reverent care, preserving its holy beauty for generations.' }
    ]),
});

export const layoutId = 'stained-glass-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const StainedGlassTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Merriweather)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(192,57,43,0.3))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium" style={{ color: 'var(--background-text, #e8e0d0)' }}>
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
                            color: 'var(--background-text, #e8e0d0)',
                            fontFamily: 'var(--heading-font-family, Merriweather)'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center justify-center mb-2">
                        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(192,57,43,0.3))' }}></div>
                        <div className="px-4">
                            <div 
                                className="w-3 h-3 rounded-full border-2 flex items-center justify-center" 
                                style={{ 
                                    borderColor: 'var(--primary-color, #c0392b)',
                                    backgroundColor: 'var(--card-color, rgba(255,255,255,0.08))'
                                }}
                            >
                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}></div>
                            </div>
                        </div>
                        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(192,57,43,0.3))' }}></div>
                    </div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        backgroundColor: 'var(--primary-color, #c0392b)',
                        opacity: 0.6
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2 border-2 flex items-center justify-center" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--card-color, rgba(255,255,255,0.08))',
                                    borderColor: 'var(--primary-color, #c0392b)'
                                }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}></div>
                            </div>

                            <div 
                                className="absolute w-60 p-3 border rounded-lg backdrop-blur-sm" 
                                style={{ 
                                    left: x - 120, 
                                    top: cardY,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(6px)',
                                    borderRadius: '8px'
                                }}
                            >
                                <div 
                                    className="text-sm font-bold mb-1" 
                                    style={{ 
                                        color: 'var(--primary-color, #c0392b)',
                                        fontFamily: 'var(--heading-font-family, Merriweather)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-xs font-medium mb-2" 
                                    style={{ 
                                        color: 'var(--primary-text, #ffffff)',
                                        fontFamily: 'var(--heading-font-family, Merriweather)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #e8e0d0)',
                                        fontFamily: 'var(--body-font-family, Merriweather Sans)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px" 
                                style={{ 
                                    left: x + 1, 
                                    top: isEven ? timelineY - 30 : timelineY + 10,
                                    height: '20px',
                                    backgroundColor: 'var(--stroke, rgba(192,57,43,0.3))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8">
                    <div 
                        className="w-8 h-8 border rounded-lg flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(192,57,43,0.3))',
                            backgroundColor: 'var(--card-color, rgba(255,255,255,0.08))'
                        }}
                    >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}></div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-8">
                    <div 
                        className="w-6 h-6 border rounded-lg flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(192,57,43,0.3))',
                            backgroundColor: 'var(--card-color, rgba(255,255,255,0.08))'
                        }}
                    >
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}></div>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <div 
                        className="w-6 h-6 border rounded-lg flex items-center justify-center" 
                        style={{ 
                            borderColor: 'var(--stroke, rgba(192,57,43,0.3))',
                            backgroundColor: 'var(--card-color, rgba(255,255,255,0.08))'
                        }}
                    >
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StainedGlassTimelineSlide;