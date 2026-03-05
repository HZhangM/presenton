import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Aurora Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Northern Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Ethereal journey through the celestial dance of lights across the northern skies.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Aurora Discovery', description: 'First glimpse of the ethereal northern lights dancing across the midnight sky with mystical energy.' },
        { year: '2021', title: 'Celestial Mapping', description: 'Detailed observation and documentation of aurora patterns revealing nature\'s luminous secrets.' },
        { year: '2022', title: 'Light Convergence', description: 'Peak aurora activity creating spectacular displays of green and purple cosmic artistry.' },
        { year: '2023', title: 'Aurora Harmony', description: 'Perfect alignment of solar winds and magnetic fields producing the most magnificent light show.' }
    ]),
});

export const layoutId = 'aurora-borealis-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const AuroraTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Poppins)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-4" style={{ backgroundColor: 'var(--stroke, rgba(78,204,163,0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--background-text, #d0e8e0)' }}>
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
                            color: 'var(--background-text, #d0e8e0)',
                            fontFamily: 'var(--heading-font-family, Poppins)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-20 h-1 rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.8) 100%)'
                        }}
                    ></div>
                </div>

                <div 
                    className="absolute h-0.5"
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth,
                        background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.6) 100%)',
                        boxShadow: '0 0 10px rgba(78, 204, 163, 0.4)'
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 140 : timelineY + 30;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-4 h-4 rounded-full transform -translate-x-2 flex items-center justify-center"
                                style={{ 
                                    left: x, 
                                    top: timelineY - 8,
                                    background: 'var(--primary-color, #4ecca3)',
                                    boxShadow: '0 0 15px rgba(78, 204, 163, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.3)'
                                }}
                            >
                                <div 
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: 'var(--primary-text, #0a1a2a)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute w-56 p-4"
                                style={{ 
                                    left: x - 112, 
                                    top: cardY,
                                    border: '1px solid rgba(78,204,163,0.15)',
                                    background: 'rgba(78,204,163,0.06)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 8px 32px rgba(78, 204, 163, 0.1)'
                                }}
                            >
                                <div 
                                    className="text-sm font-semibold mb-1" 
                                    style={{ 
                                        color: 'var(--primary-color, #4ecca3)',
                                        fontFamily: 'var(--heading-font-family, Poppins)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-medium mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #d0e8e0)',
                                        fontFamily: 'var(--heading-font-family, Poppins)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #d0e8e0)',
                                        fontFamily: 'var(--body-font-family, Nunito Sans)',
                                        opacity: 0.8
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-px"
                                style={{ 
                                    left: x - 0.5, 
                                    top: isEven ? timelineY - 30 : timelineY + 8,
                                    height: '22px',
                                    background: 'linear-gradient(180deg, rgba(78, 204, 163, 0.4) 0%, rgba(78, 204, 163, 0.1) 100%)'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8 opacity-30">
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path 
                            d="M0 20 Q15 5 30 20 T60 20" 
                            stroke="var(--primary-color, #4ecca3)" 
                            strokeWidth="1" 
                            fill="none"
                            opacity="0.6"
                        />
                        <path 
                            d="M5 25 Q20 10 35 25 T65 25" 
                            stroke="rgba(147, 51, 234, 0.6)" 
                            strokeWidth="1" 
                            fill="none"
                            opacity="0.4"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8 opacity-20">
                    <div 
                        className="w-16 h-16 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.3) 0%, rgba(78, 204, 163, 0.1) 50%, transparent 70%)',
                            filter: 'blur(4px)'
                        }}
                    ></div>
                </div>

                <div className="absolute bottom-12 right-12 opacity-15">
                    <div 
                        className="w-12 h-12 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
                            filter: 'blur(3px)'
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default AuroraTimelineSlide;