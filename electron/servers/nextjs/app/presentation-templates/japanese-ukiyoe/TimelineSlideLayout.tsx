import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Milestone Title'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Brief description of this important milestone in our journey.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1603', title: 'Edo Period Begins', description: 'The foundation of traditional woodblock printing techniques emerges during peaceful times.' },
        { year: '1670', title: 'First Ukiyo-e Masters', description: 'Artists develop the floating world aesthetic capturing urban life and natural beauty.' },
        { year: '1760', title: 'Color Printing Innovation', description: 'Multi-color woodblock techniques revolutionize artistic expression and cultural documentation.' },
        { year: '1830', title: 'Golden Age Peak', description: 'Masters like Hokusai create timeless works that influence art worldwide for generations.' }
    ]),
});

export const layoutId = 'japanese-ukiyoe-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const JapaneseUkiyoeTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 140;
    const timelineEndX = 1140;
    const timelineY = 360;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Shippori Mincho)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(30,30,80,0.15))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium" style={{ color: 'var(--background-text, #1a1a3a)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute left-8 top-16 right-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div 
                            className="w-3 h-3 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
                        ></div>
                        <h1 
                            className="text-3xl font-bold" 
                            style={{ 
                                color: 'var(--background-text, #1a1a3a)',
                                fontFamily: 'var(--heading-font-family, Shippori Mincho)'
                            }}
                        >
                            {title}
                        </h1>
                    </div>
                    <div 
                        className="w-24 h-px mb-6" 
                        style={{ backgroundColor: 'var(--stroke, rgba(30,30,80,0.15))' }}
                    ></div>
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
                        stroke="var(--stroke, rgba(30,30,80,0.15))" 
                        strokeWidth="2"
                    />
                    <circle 
                        cx="0" 
                        cy="1" 
                        r="3" 
                        fill="var(--stroke, rgba(30,30,80,0.15))"
                    />
                    <circle 
                        cx={timelineWidth} 
                        cy="1" 
                        r="3" 
                        fill="var(--stroke, rgba(30,30,80,0.15))"
                    />
                </svg>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 40;
                    const cardWidth = itemCount > 4 ? 200 : 220;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    backgroundColor: 'var(--primary-color, #c23b22)',
                                    border: '2px solid var(--card-color, rgba(255,255,250,0.7))'
                                }}
                            ></div>

                            <div 
                                className="absolute p-3 border" 
                                style={{ 
                                    left: x - (cardWidth / 2), 
                                    top: cardY,
                                    width: `${cardWidth}px`,
                                    borderColor: 'var(--stroke, rgba(30,30,80,0.15))',
                                    background: 'var(--card-color, rgba(255,255,250,0.7))',
                                    borderRadius: '4px'
                                }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div 
                                        className="w-2 h-2 rounded-full flex-shrink-0" 
                                        style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
                                    ></div>
                                    <div 
                                        className={`text-sm font-bold ${itemCount > 4 ? 'text-xs' : 'text-sm'}`}
                                        style={{ 
                                            color: 'var(--primary-color, #c23b22)',
                                            fontFamily: 'var(--heading-font-family, Shippori Mincho)'
                                        }}
                                    >
                                        {milestone.year}
                                    </div>
                                </div>
                                <div 
                                    className={`font-semibold mb-1 ${itemCount > 4 ? 'text-xs' : 'text-sm'}`}
                                    style={{ 
                                        color: 'var(--background-text, #1a1a3a)',
                                        fontFamily: 'var(--heading-font-family, Shippori Mincho)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className={`leading-relaxed ${itemCount > 4 ? 'text-xs' : 'text-xs'}`}
                                    style={{ 
                                        color: 'var(--background-text, #1a1a3a)',
                                        fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <svg 
                                className="absolute" 
                                style={{ left: x - 1, top: isEven ? timelineY - 30 : timelineY + 15 }}
                                width="2" 
                                height="15"
                            >
                                <line 
                                    x1="1" 
                                    y1="0" 
                                    x2="1" 
                                    y2="15" 
                                    stroke="var(--stroke, rgba(30,30,80,0.15))" 
                                    strokeWidth="1"
                                />
                            </svg>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8">
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <path 
                            d="M5,15 Q15,5 25,15 Q15,25 5,15" 
                            fill="none" 
                            stroke="var(--stroke, rgba(30,30,80,0.15))" 
                            strokeWidth="1"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8">
                    <div 
                        className="w-6 h-6 rounded-full border" 
                        style={{ 
                            borderColor: 'var(--primary-color, #c23b22)',
                            backgroundColor: 'var(--primary-color, #c23b22)'
                        }}
                    ></div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <svg width="40" height="20" viewBox="0 0 40 20">
                        <path 
                            d="M0,10 Q10,0 20,10 Q30,20 40,10" 
                            fill="none" 
                            stroke="var(--stroke, rgba(30,30,80,0.15))" 
                            strokeWidth="1"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default JapaneseUkiyoeTimelineSlide;