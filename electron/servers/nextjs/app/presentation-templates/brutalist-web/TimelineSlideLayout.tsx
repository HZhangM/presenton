import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Project Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Project Phase'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Raw implementation phase with exposed structure and unapologetic development approach.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'RAW FOUNDATION', description: 'Brutal system architecture with exposed APIs and unpolished backend infrastructure implementation.' },
        { year: '2021', title: 'CORE BUILD', description: 'Heavy development phase with thick borders around functionality and zero aesthetic compromise.' },
        { year: '2022', title: 'SYSTEM DEPLOY', description: 'Unapologetic production release with raw performance metrics and exposed monitoring systems.' },
        { year: '2023', title: 'ENHANCEMENT', description: 'Bold feature additions with asymmetric layouts and intentionally unpolished user interfaces.' }
    ]),
});

export const layoutId = 'brutalist-web-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const BrutalistTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const timelineStartX = 140;
    const timelineEndX = 1140;
    const timelineY = 400;
    const timelineWidth = timelineEndX - timelineStartX;
    const stepWidth = itemCount > 1 ? timelineWidth / (itemCount - 1) : 0;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Anton)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-1 h-4" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-bold tracking-wide" style={{ color: 'var(--background-text, #111111)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div 
                    className="absolute top-6 left-8 px-3 py-2 border-4" 
                    style={{ 
                        border: '4px solid #111111',
                        background: 'var(--primary-color, #ff4500)',
                        borderRadius: '0',
                        boxShadow: '6px 6px 0 #111111'
                    }}
                >
                    <div className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--primary-text, #ffffff)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                        RAW.TIMELINE
                    </div>
                </div>

                <div className="absolute left-8 top-20 right-8">
                    <h1 
                        className="text-5xl font-bold tracking-tight mb-4 uppercase" 
                        style={{ 
                            color: 'var(--background-text, #111111)',
                            fontFamily: 'var(--heading-font-family, Anton)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-full h-1" 
                        style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}
                    ></div>
                </div>

                <div 
                    className="absolute h-1" 
                    style={{ 
                        left: timelineStartX, 
                        top: timelineY, 
                        width: timelineWidth, 
                        backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' 
                    }}
                ></div>

                {milestones && milestones.map((milestone, index) => {
                    const x = timelineStartX + (index * stepWidth);
                    const isEven = index % 2 === 0;
                    const cardY = isEven ? timelineY - 180 : timelineY + 40;
                    
                    return (
                        <div key={index}>
                            <div 
                                className="absolute w-6 h-6 flex items-center justify-center transform -translate-x-3" 
                                style={{ 
                                    left: x, 
                                    top: timelineY - 12,
                                    border: '4px solid #111111',
                                    backgroundColor: 'var(--primary-color, #ff4500)',
                                    borderRadius: '0',
                                    boxShadow: '3px 3px 0 #111111'
                                }}
                            >
                                <span className="text-xs font-bold" style={{ color: 'var(--primary-text, #ffffff)' }}>{index + 1}</span>
                            </div>

                            <div 
                                className="absolute p-4" 
                                style={{ 
                                    left: x - 120, 
                                    top: cardY,
                                    width: '240px',
                                    border: '4px solid #111111',
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                    borderRadius: '0',
                                    boxShadow: '6px 6px 0 #111111'
                                }}
                            >
                                <div 
                                    className="text-2xl font-bold mb-2 uppercase tracking-wide" 
                                    style={{ 
                                        color: 'var(--primary-color, #ff4500)',
                                        fontFamily: 'var(--heading-font-family, Anton)'
                                    }}
                                >
                                    {milestone.year}
                                </div>
                                <div 
                                    className="text-sm font-bold mb-2 uppercase tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                    }}
                                >
                                    {milestone.title}
                                </div>
                                <div 
                                    className="text-xs leading-tight" 
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                    }}
                                >
                                    {milestone.description}
                                </div>
                            </div>

                            <div 
                                className="absolute w-1" 
                                style={{ 
                                    left: x - 2, 
                                    top: isEven ? timelineY - 40 : timelineY + 24,
                                    height: '24px',
                                    backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))'
                                }}
                            ></div>
                        </div>
                    );
                })}

                <div className="absolute top-6 right-8">
                    <div 
                        className="w-12 h-12 flex items-center justify-center" 
                        style={{ 
                            border: '4px solid #111111',
                            backgroundColor: 'var(--background-text, #111111)',
                            borderRadius: '0'
                        }}
                    >
                        <span className="text-lg font-bold" style={{ color: 'var(--card-color, rgba(255, 255, 255, 0.95))' }}>#</span>
                    </div>
                </div>

                <div className="absolute bottom-8 left-8">
                    <div 
                        className="px-4 py-2" 
                        style={{ 
                            border: '4px solid #111111',
                            backgroundColor: 'var(--primary-color, #ff4500)',
                            borderRadius: '0'
                        }}
                    >
                        <span className="text-xs font-bold tracking-wider" style={{ color: 'var(--primary-text, #ffffff)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>BRUTAL.DESIGN</span>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <div 
                        className="w-8 h-8 flex items-center justify-center" 
                        style={{ 
                            border: '4px solid #111111',
                            backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                            borderRadius: '0'
                        }}
                    >
                        <span className="text-xs font-bold" style={{ color: 'var(--background-text, #111111)' }}>×</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrutalistTimelineSlide;