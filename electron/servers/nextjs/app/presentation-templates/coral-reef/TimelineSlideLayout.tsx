import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Coral Reef Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Ocean Discovery'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Vibrant coral formations and tropical marine life create stunning underwater ecosystems.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Coral Formation', description: 'Initial coral polyp settlement and growth creating the foundation of vibrant reef ecosystems.' },
        { year: '2021', title: 'Marine Life Arrival', description: 'Tropical fish species establish territories among the growing coral formations and structures.' },
        { year: '2022', title: 'Biodiversity Boom', description: 'Explosive growth in species diversity with colorful fish, sea turtles, and marine plants thriving.' },
        { year: '2023', title: 'Ecosystem Balance', description: 'Perfect harmony achieved between coral health, marine life populations, and water quality systems.' }
    ]),
});

export const layoutId = 'coral-reef-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const CoralReefTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 120;
    const timelineEndX = 1160;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    const coralColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Comfortaa)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div 
                                    className="w-[2px] h-4 rounded-full" 
                                    style={{ backgroundColor: 'var(--stroke, rgba(255,107,107,0.2))' }}
                                ></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #2d3436)' }}>
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
                            color: 'var(--background-text, #2d3436)',
                            fontFamily: 'var(--heading-font-family, Comfortaa)'
                        }}
                    >
                        {title}
                    </h1>
                    <svg width="100" height="8" className="mb-6">
                        <path 
                            d="M0,4 Q25,1 50,4 T100,4" 
                            stroke="var(--primary-color, #ff6b6b)" 
                            strokeWidth="3" 
                            fill="none"
                        />
                    </svg>
                </div>

                <svg 
                    className="absolute" 
                    style={{ left: timelineStartX, top: timelineY, width: timelineWidth, height: '4px' }}
                    width={timelineWidth} 
                    height="4"
                >
                    <path 
                        d={`M0,2 Q${timelineWidth/4},0 ${timelineWidth/2},2 T${timelineWidth},2`}
                        stroke="var(--primary-color, #ff6b6b)" 
                        strokeWidth="3" 
                        fill="none"
                        opacity="0.7"
                    />
                </svg>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    const dotColor = coralColors[index % coralColors.length];
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-6 h-6 rounded-full border-4 transform -translate-x-3 flex items-center justify-center" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 12,
                                    backgroundColor: dotColor,
                                    borderColor: 'rgba(255,255,255,0.8)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div 
                                    className="w-2 h-2 rounded-full" 
                                    style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                                ></div>
                            </div>

                            <div 
                                className="absolute p-4 rounded-3xl shadow-lg backdrop-blur-sm" 
                                style={{ 
                                    left: x - 128, 
                                    top: cardY,
                                    width: '256px',
                                    background: 'rgba(255,255,255,0.65)',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div 
                                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" 
                                    style={{ 
                                        backgroundColor: dotColor,
                                        color: 'var(--primary-text, #ffffff)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-base font-semibold mb-2" 
                                    style={{ 
                                        color: 'var(--background-text, #2d3436)',
                                        fontFamily: 'var(--heading-font-family, Comfortaa)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-sm leading-relaxed" 
                                    style={{ 
                                        color: 'var(--background-text, #2d3436)',
                                        fontFamily: 'var(--body-font-family, Rubik)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <svg 
                                className="absolute" 
                                style={{ left: x - 1, top: isEven ? timelineY - 35 : timelineY + 15 }}
                                width="2" 
                                height="20"
                            >
                                <path 
                                    d="M1,0 Q1,10 1,20" 
                                    stroke={dotColor} 
                                    strokeWidth="2" 
                                    fill="none"
                                    opacity="0.6"
                                />
                            </svg>
                        </div>
                    );
                })}

                <div 
                    className="absolute w-16 h-16 rounded-full opacity-20" 
                    style={{ 
                        top: '60px', 
                        right: '80px',
                        background: 'radial-gradient(circle, var(--primary-color, #ff6b6b) 0%, transparent 70%)'
                    }}
                ></div>

                <div 
                    className="absolute w-24 h-12 rounded-full opacity-15" 
                    style={{ 
                        bottom: '80px', 
                        left: '60px',
                        background: 'radial-gradient(ellipse, #4ecdc4 0%, transparent 70%)'
                    }}
                ></div>

                <div 
                    className="absolute w-20 h-20 opacity-10" 
                    style={{ 
                        bottom: '120px', 
                        right: '100px',
                        background: 'radial-gradient(circle, #96ceb4 0%, transparent 70%)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                    }}
                ></div>
            </div>
        </>
    );
};

export default CoralReefTimelineSlide;