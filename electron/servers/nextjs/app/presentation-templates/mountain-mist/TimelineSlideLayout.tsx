import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Mountain Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Summit Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A serene progression through misty peaks and contemplative moments of discovery.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Base Camp Establishment', description: 'Foundation laying in the misty valley with careful preparation and mindful planning.' },
        { year: '2021', title: 'Ascent Through Clouds', description: 'Gradual progression through layered mountain mist with steady contemplative movement.' },
        { year: '2022', title: 'Ridge Line Navigation', description: 'Following the serene path along mountain ridges through shifting atmospheric conditions.' },
        { year: '2023', title: 'Summit Achievement', description: 'Reaching the peaceful peak with clear vision emerging through the dispersing mountain mist.' }
    ]),
});

export const layoutId = 'mountain-mist-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const MountainMistTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 100;
    const timelineEndX = 1180;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Philosopher)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(84,110,122,0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #1a2a3a)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8">
                    <h1 
                        className="text-3xl font-normal tracking-wide text-center mb-4" 
                        style={{ 
                            color: 'var(--background-text, #1a2a3a)',
                            fontFamily: 'var(--heading-font-family, Philosopher)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-16 h-px mx-auto opacity-40" 
                        style={{ backgroundColor: 'var(--primary-color, #546e7a)' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-px" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: `linear-gradient(90deg, transparent 0%, var(--stroke, rgba(84,110,122,0.15)) 20%, var(--stroke, rgba(84,110,122,0.15)) 80%, transparent 100%)`
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isAbove = index % 2 === 0;
                    const cardY = isAbove ? timelineY - 180 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-3 h-3 rounded-full transform -translate-x-1.5" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 6,
                                    background: `linear-gradient(135deg, var(--primary-color, #546e7a) 0%, rgba(84,110,122,0.6) 100%)`,
                                    boxShadow: '0 2px 8px rgba(84,110,122,0.15)'
                                }}
                            ></div>

                            <div 
                                className="absolute w-56 p-4" 
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    background: 'var(--card-color, rgba(255,255,255,0.55))',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 16px rgba(84,110,122,0.08)'
                                }}
                            >
                                <div 
                                    className="text-sm font-medium mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--primary-color, #546e7a)',
                                        fontFamily: 'var(--heading-font-family, Philosopher)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-medium mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #1a2a3a)',
                                        fontFamily: 'var(--heading-font-family, Philosopher)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed opacity-80" 
                                    style={{ 
                                        color: 'var(--background-text, #1a2a3a)',
                                        fontFamily: 'var(--body-font-family, Karla)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px opacity-30" 
                                style={{ 
                                    left: x - 0.5, 
                                    top: isAbove ? timelineY - 30 : timelineY + 15,
                                    height: '25px',
                                    background: `linear-gradient(${isAbove ? '180deg' : '0deg'}, transparent 0%, var(--stroke, rgba(84,110,122,0.15)) 50%, transparent 100%)`
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-8 right-8 w-16 h-16 rounded-full opacity-10" 
                    style={{ 
                        background: `radial-gradient(circle, var(--primary-color, #546e7a) 0%, transparent 70%)`
                    }}
                ></div>

                <div 
                    className="absolute bottom-8 left-8 w-12 h-12 rounded-full opacity-5" 
                    style={{ 
                        background: `radial-gradient(circle, var(--primary-color, #546e7a) 0%, transparent 70%)`
                    }}
                ></div>
            </div>
        </>
    );
};

export default MountainMistTimelineSlide;