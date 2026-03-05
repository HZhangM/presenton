import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('EPIC TIMELINE!'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('MEGA MILESTONE!'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('BAM! Amazing breakthrough that changed everything with explosive results and incredible impact!')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'LAUNCH PHASE!', description: 'POW! Initial comic book project kicks off with amazing creative energy and explosive storylines!' },
        { year: '2021', title: 'HERO DEVELOPMENT!', description: 'ZAP! Character creation and world-building reaches new heights with incredible artistic vision!' },
        { year: '2022', title: 'ACTION PACKED!', description: 'BOOM! Major story arcs completed with thrilling adventures and jaw-dropping plot twists!' },
        { year: '2023', title: 'SUPER SUCCESS!', description: 'WHAM! Publication milestone achieved with record-breaking sales and fan enthusiasm!' }
    ]),
});

export const layoutId = 'comic-book-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const ComicBookTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bangers)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-bold tracking-wide" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div 
                    className="absolute top-8 left-8 px-3 py-2 border-4 rounded" 
                    style={{ 
                        borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                        background: 'var(--primary-color, #e53935)',
                        borderRadius: '4px',
                        boxShadow: '4px 4px 0 #1a1a1a',
                        transform: 'rotate(-5deg)'
                    }}
                >
                    <div className="text-xs font-bold tracking-wider" style={{ color: 'var(--primary-text, #ffffff)' }}>
                        POW!
                    </div>
                </div>

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-5xl font-bold tracking-wide mb-4 transform -rotate-1" 
                        style={{ 
                            color: 'var(--background-text, #1a1a1a)',
                            fontFamily: 'var(--heading-font-family, Bangers)',
                            textShadow: '3px 3px 0 #ffffff, -1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a'
                        }}
                    >
                        {title}
                    </h1>
                </div>

                <div 
                    className="absolute h-2 rounded" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY - 4, 
                        width: timelineWidth,
                        backgroundColor: 'var(--background-text, #1a1a1a)',
                        border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                        borderRadius: '4px'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    const cardWidth = itemCount > 4 ? 200 : 220;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-6 h-6 rounded-full transform -translate-x-3 flex items-center justify-center border-3" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 12,
                                    backgroundColor: 'var(--primary-color, #e53935)',
                                    border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                    boxShadow: '2px 2px 0 #1a1a1a'
                                }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>

                            <div 
                                className="absolute p-4 border-3" 
                                style={{ 
                                    left: x - (cardWidth / 2), 
                                    top: cardY,
                                    width: `${cardWidth}px`,
                                    borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                    borderRadius: '4px',
                                    boxShadow: '4px 4px 0 #1a1a1a',
                                    border: '3px solid #1a1a1a',
                                    transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)'
                                }}
                            >
                                <div 
                                    className="text-lg font-bold mb-2 tracking-wider" 
                                    style={{ 
                                        color: 'var(--primary-color, #e53935)',
                                        fontFamily: 'var(--heading-font-family, Bangers)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-bold mb-2 tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: 'var(--heading-font-family, Bangers)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: 'var(--body-font-family, Comic Neue)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-1 transform -translate-x-0.5" 
                                style={{ 
                                    left: x, 
                                    top: isEven ? timelineY - 40 : timelineY + 15,
                                    height: '25px',
                                    backgroundColor: 'var(--background-text, #1a1a1a)',
                                    borderRadius: '2px'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div 
                    className="absolute top-8 right-8 px-3 py-2 border-3 rounded transform rotate-12" 
                    style={{ 
                        borderColor: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                        background: '#ffeb3b',
                        borderRadius: '4px',
                        boxShadow: '3px 3px 0 #1a1a1a',
                        border: '3px solid #1a1a1a'
                    }}
                >
                    <div className="text-xs font-bold" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                        ZAP!
                    </div>
                </div>

                <div className="absolute bottom-8 left-8">
                    <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center border-3 transform -rotate-12" 
                        style={{ 
                            backgroundColor: '#ff9800',
                            border: '3px solid #1a1a1a',
                            boxShadow: '3px 3px 0 #1a1a1a'
                        }}
                    >
                        <span className="text-lg font-bold" style={{ color: 'var(--primary-text, #ffffff)' }}>!</span>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <div 
                        className="w-16 h-8 flex items-center justify-center border-3 transform rotate-6" 
                        style={{ 
                            backgroundColor: 'var(--primary-color, #e53935)',
                            border: '3px solid #1a1a1a',
                            borderRadius: '4px',
                            boxShadow: '3px 3px 0 #1a1a1a'
                        }}
                    >
                        <span className="text-xs font-bold" style={{ color: 'var(--primary-text, #ffffff)' }}>BOOM!</span>
                    </div>
                </div>

                <div 
                    className="absolute opacity-20" 
                    style={{ 
                        top: '100px', 
                        right: '200px',
                        width: '80px',
                        height: '80px',
                        backgroundImage: 'radial-gradient(circle, var(--primary-color, #e53935) 20%, transparent 20%)',
                        backgroundSize: '8px 8px'
                    }}
                ></div>

                <div 
                    className="absolute opacity-10" 
                    style={{ 
                        bottom: '120px', 
                        left: '150px',
                        width: '100px',
                        height: '60px',
                        backgroundImage: 'radial-gradient(circle, var(--background-text, #1a1a1a) 15%, transparent 15%)',
                        backgroundSize: '6px 6px'
                    }}
                ></div>
            </div>
        </>
    );
};

export default ComicBookTimelineSlide;