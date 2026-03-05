import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Beautiful Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A gentle description of this important moment in our delicate journey together.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Dreamy Beginning', description: 'The first gentle steps of our beautiful journey with soft lavender dreams and whispered hopes.' },
        { year: '2021', title: 'Blossoming Growth', description: 'Delicate petals of progress unfurling with grace and elegance in the morning light.' },
        { year: '2022', title: 'Flourishing Success', description: 'A garden of achievements blooming in soft purple hues with tender care and devotion.' },
        { year: '2023', title: 'Graceful Evolution', description: 'Elegant transformation through gentle winds of change and whispered promises of tomorrow.' }
    ]),
});

export const layoutId = 'lavender-dream-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const LavenderDreamTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(155,89,182,0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #3a2050)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8 text-center">
                    <h1 
                        className="text-4xl font-bold mb-4" 
                        style={{ 
                            color: 'var(--background-text, #3a2050)',
                            fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-px mx-auto mb-6" 
                        style={{ backgroundColor: 'var(--primary-color, #9b59b6)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #9b59b6) 20%, var(--primary-color, #9b59b6) 80%, transparent 100%)',
                        opacity: 0.3
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    const cardWidth = itemCount > 4 ? 220 : 260;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    background: 'linear-gradient(135deg, var(--primary-color, #9b59b6), #c39bd3)',
                                    boxShadow: '0 2px 8px rgba(155,89,182,0.3)'
                                }}
                            >
                                <div className="absolute inset-1 rounded-full bg-white opacity-50"></div>
                            </div>

                            <div 
                                className={`absolute p-4 ${itemCount > 4 ? 'p-3' : 'p-4'}`}
                                style={{ 
                                    left: x - cardWidth/2, 
                                    top: cardY,
                                    width: cardWidth,
                                    background: 'rgba(255,255,255,0.6)', 
                                    backdropFilter: 'blur(12px)', 
                                    border: '1px solid rgba(255,255,255,0.4)', 
                                    borderRadius: '20px', 
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                                }}
                            >
                                <div 
                                    className={`font-semibold mb-2 ${itemCount > 4 ? 'text-sm' : 'text-base'}`}
                                    style={{ 
                                        color: 'var(--primary-color, #9b59b6)',
                                        fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className={`font-medium mb-2 ${itemCount > 4 ? 'text-sm' : 'text-base'}`}
                                    style={{ 
                                        color: 'var(--background-text, #3a2050)',
                                        fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className={`leading-relaxed ${itemCount > 4 ? 'text-xs' : 'text-sm'}`}
                                    style={{ 
                                        color: 'var(--background-text, #3a2050)',
                                        fontFamily: 'var(--body-font-family, Mulish)',
                                        opacity: 0.8
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px transform -translate-x-0.5" 
                                style={{ 
                                    left: x, 
                                    top: isEven ? timelineY - 30 : timelineY + 20,
                                    height: '20px',
                                    background: 'linear-gradient(to bottom, transparent, var(--primary-color, #9b59b6), transparent)',
                                    opacity: 0.4
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-6 right-8 w-8 h-8 rounded-full opacity-20" 
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #9b59b6), transparent 70%)'
                    }}
                ></div>

                <div 
                    className="absolute bottom-8 left-8 w-12 h-12 rounded-full opacity-10" 
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #9b59b6), transparent 70%)'
                    }}
                ></div>

                <div className="absolute top-32 right-16 opacity-30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L13.09 8.26L20 7L14.74 12L20 17L13.09 15.74L12 22L10.91 15.74L4 17L9.26 12L4 7L10.91 8.26L12 2Z" fill="var(--primary-color, #9b59b6)" fillOpacity="0.4"/>
                    </svg>
                </div>

                <div className="absolute bottom-20 right-12 opacity-25">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="3" fill="var(--primary-color, #9b59b6)" fillOpacity="0.6"/>
                        <path d="M12 7C9.79 7 8 8.79 8 11S9.79 15 12 15 16 13.21 16 11 14.21 7 12 7Z" fill="var(--primary-color, #9b59b6)" fillOpacity="0.2"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default LavenderDreamTimelineSlide;