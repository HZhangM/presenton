import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Elegant milestone achievement with sophisticated design and luxurious implementation details.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1925', title: 'Foundation Era', description: 'Establishment of core principles with geometric precision and Art Deco architectural influence.' },
        { year: '1928', title: 'Golden Age Launch', description: 'Implementation of luxury standards with angular design motifs and premium material selection.' },
        { year: '1930', title: 'Expansion Period', description: 'Strategic growth initiative featuring streamlined processes and sophisticated market positioning.' },
        { year: '1935', title: 'Innovation Milestone', description: 'Revolutionary advancement in design methodology with geometric pattern integration and gold accent refinement.' }
    ]),
});

export const layoutId = 'art-deco-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const ArtDecoTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 380;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Poiret One)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(212,175,55,0.3))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-widest" style={{ color: 'var(--background-text, #e8d8b8)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-8 left-8 right-8">
                    <h1 
                        className="text-5xl font-light tracking-widest mb-3 text-center" 
                        style={{ 
                            color: 'var(--primary-color, #d4af37)',
                            fontFamily: 'var(--heading-font-family, Poiret One)',
                            letterSpacing: '0.25em'
                        }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-16 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                        <div 
                            className="w-3 h-3 transform rotate-45 border" 
                            style={{ borderColor: 'var(--primary-color, #d4af37)' }}
                        ></div>
                        <div className="w-16 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                    </div>
                </div>

                <svg 
                    className="absolute" 
                    style={{ left: timelineStartX, top: timelineY, width: timelineWidth, height: '2px' }}
                    width={timelineWidth} 
                    height="2"
                >
                    <line 
                        x1="0" 
                        y1="1" 
                        x2={timelineWidth} 
                        y2="1" 
                        stroke="var(--primary-color, #d4af37)" 
                        strokeWidth="2"
                    />
                </svg>

                <svg 
                    className="absolute" 
                    style={{ left: timelineStartX, top: timelineY + 4, width: timelineWidth, height: '1px' }}
                    width={timelineWidth} 
                    height="1"
                >
                    <line 
                        x1="0" 
                        y1="0.5" 
                        x2={timelineWidth} 
                        y2="0.5" 
                        stroke="var(--stroke, rgba(212,175,55,0.3))" 
                        strokeWidth="1"
                    />
                </svg>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 50;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #d4af37)',
                                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                                }}
                            ></div>

                            <div 
                                className="absolute"
                                style={{ 
                                    left: x - 100, 
                                    top: cardY,
                                    width: '200px'
                                }}
                            >
                                <div 
                                    className="absolute inset-0 border" 
                                    style={{ 
                                        borderColor: 'var(--stroke, rgba(212,175,55,0.25))',
                                        background: 'var(--card-color, rgba(212,175,55,0.04))'
                                    }}
                                ></div>
                                
                                <div 
                                    className="absolute top-0 left-0 w-3 h-3 border-t border-l" 
                                    style={{ borderColor: 'var(--primary-color, #d4af37)' }}
                                ></div>
                                <div 
                                    className="absolute top-0 right-0 w-3 h-3 border-t border-r" 
                                    style={{ borderColor: 'var(--primary-color, #d4af37)' }}
                                ></div>
                                <div 
                                    className="absolute bottom-0 left-0 w-3 h-3 border-b border-l" 
                                    style={{ borderColor: 'var(--primary-color, #d4af37)' }}
                                ></div>
                                <div 
                                    className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" 
                                    style={{ borderColor: 'var(--primary-color, #d4af37)' }}
                                ></div>

                                <div className="relative p-4">
                                    <div 
                                        className="text-lg font-light mb-1 tracking-widest text-center" 
                                        style={{ 
                                            color: 'var(--primary-color, #d4af37)',
                                            fontFamily: 'var(--heading-font-family, Poiret One)'
                                        }}
                                    >
                                        {milestone.year}
                                    </div>
                                    <div 
                                        className="text-sm font-medium mb-2 text-center tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #e8d8b8)',
                                            fontFamily: 'var(--body-font-family, Josefin Sans)'
                                        }}
                                    >
                                        {milestone.title}
                                    </div>
                                    <div 
                                        className="text-xs leading-relaxed text-center" 
                                        style={{ 
                                            color: 'var(--background-text, #e8d8b8)',
                                            fontFamily: 'var(--body-font-family, Josefin Sans)'
                                        }}
                                    >
                                        {milestone.description}
                                    </div>
                                </div>
                            </div>

                            <svg 
                                className="absolute" 
                                style={{ left: x - 1, top: isEven ? timelineY - 50 : timelineY + 15 }}
                                width="2" 
                                height="35"
                            >
                                <line 
                                    x1="1" 
                                    y1="0" 
                                    x2="1" 
                                    y2="35" 
                                    stroke="var(--stroke, rgba(212,175,55,0.3))" 
                                    strokeWidth="1"
                                />
                            </svg>
                        </div>
                    );
                })}

                <div className="absolute top-12 left-12">
                    <div className="flex items-center">
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent" style={{ borderBottomColor: 'var(--primary-color, #d4af37)' }}></div>
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                    </div>
                </div>

                <div className="absolute bottom-12 right-12">
                    <div className="flex flex-col items-end">
                        <div className="w-12 h-[1px] mb-1" style={{ backgroundColor: 'var(--stroke, rgba(212,175,55,0.3))' }}></div>
                        <div className="w-8 h-[1px] mb-1" style={{ backgroundColor: 'var(--stroke, rgba(212,175,55,0.3))' }}></div>
                        <div className="w-4 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtDecoTimelineSlide;