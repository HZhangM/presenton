import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Digital Evolution'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Title of the milestone').default('Milestone Title'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Key developments and achievements during this period.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'System Genesis', description: 'Initial cybernetic infrastructure deployment across major urban centers.' },
        { year: '2021', title: 'Neural Networks', description: 'Advanced AI integration with quantum processing capabilities activated.' },
        { year: '2022', title: 'Digital Fusion', description: 'Complete synchronization between human and machine interfaces achieved.' },
        { year: '2023', title: 'Data Transcendence', description: 'Revolutionary breakthrough in consciousness transfer protocols established.' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'neon-cyberpunk-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A futuristic timeline layout with neon-glowing milestone cards and cyberpunk styling';

/**
 * React Component for the slide.
 */
const NeonCyberpunkTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const accentColors = ['var(--primary-color, #ff2d95)', '#00ffff', 'var(--primary-color, #ff2d95)', '#00ffff', 'var(--primary-color, #ff2d95)', '#00ffff'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Orbitron)" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />
                                )}
                                <div 
                                    className="w-[2px] h-5"
                                    style={{ 
                                        backgroundColor: 'var(--primary-color, #ff2d95)',
                                        boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                                    }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-bold tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #e0e0f0)',
                                            fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Corner Decorations */}
                <div className="absolute top-8 left-8 w-8 h-8 z-10">
                    <div 
                        className="absolute top-0 left-0 w-6 h-1"
                        style={{ 
                            backgroundColor: 'var(--primary-color, #ff2d95)',
                            boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                        }}
                    />
                    <div 
                        className="absolute top-0 left-0 w-1 h-6"
                        style={{ 
                            backgroundColor: 'var(--primary-color, #ff2d95)',
                            boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                        }}
                    />
                </div>

                <div className="absolute top-8 right-8 w-8 h-8 z-10">
                    <div 
                        className="absolute top-0 right-0 w-6 h-1"
                        style={{ 
                            backgroundColor: '#00ffff',
                            boxShadow: '0 0 8px #00ffff'
                        }}
                    />
                    <div 
                        className="absolute top-0 right-0 w-1 h-6"
                        style={{ 
                            backgroundColor: '#00ffff',
                            boxShadow: '0 0 8px #00ffff'
                        }}
                    />
                </div>

                {/* Main Title */}
                <div className="absolute left-1/2 top-24 transform -translate-x-1/2 text-center z-20">
                    <h1 
                        className="text-5xl font-black tracking-wider mb-4"
                        style={{ 
                            color: 'var(--primary-text, #ffffff)',
                            textShadow: '0 0 20px var(--primary-color, #ff2d95), 0 0 40px var(--primary-color, #ff2d95)',
                            fontFamily: "var(--heading-font-family, Orbitron)"
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto"
                        style={{ 
                            background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)',
                            boxShadow: '0 0 15px var(--primary-color, #ff2d95)'
                        }}
                    />
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-16 right-16 top-48 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-[3px] z-10"
                         style={{
                             background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), #00ffff, var(--primary-color, #ff2d95), transparent)',
                             boxShadow: '0 0 15px var(--primary-color, #ff2d95)'
                         }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => {
                            const accentColor = accentColors[index % accentColors.length];
                            return (
                                <div key={index} className="flex-1 min-w-0 relative pt-10">
                                    {/* Timeline dot */}
                                    <div className="absolute top-[4px] left-4 w-5 h-5 rounded-full border-2 z-20"
                                         style={{
                                             backgroundColor: 'rgba(10,10,30,0.9)',
                                             borderColor: accentColor,
                                             boxShadow: `0 0 15px ${accentColor}, inset 0 0 8px ${accentColor}`
                                         }}></div>

                                    {/* Year badge */}
                                    <div className="inline-block text-xs font-bold tracking-widest mb-2"
                                         style={{
                                             color: accentColor,
                                             fontFamily: "var(--body-font-family, 'Share Tech Mono')",
                                             textShadow: `0 0 10px ${accentColor}`
                                         }}>
                                        {milestone.year}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-1 leading-snug tracking-wide"
                                        style={{
                                            color: 'var(--primary-text, #ffffff)',
                                            fontFamily: "var(--heading-font-family, Orbitron)"
                                        }}>
                                        {milestone.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed"
                                       style={{
                                           color: 'var(--background-text, #e0e0f0)',
                                           fontFamily: "var(--body-font-family, 'Share Tech Mono')",
                                           opacity: 0.85,
                                       }}>
                                        {milestone.description}
                                    </p>

                                    {/* Column divider */}
                                    {index < (milestones?.length || 0) - 1 && (
                                        <div className="absolute right-0 top-10 bottom-0 w-px"
                                             style={{
                                                 background: `linear-gradient(180deg, ${accentColor}, transparent)`,
                                                 boxShadow: `0 0 5px ${accentColor}`
                                             }}></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Glitch Bar Decoration */}
                <div className="absolute bottom-8 left-1/4 right-1/4 h-1 z-10">
                    <div 
                        className="w-full h-full"
                        style={{ 
                            background: 'linear-gradient(90deg, transparent, #00ffff, var(--primary-color, #ff2d95), #00ffff, transparent)',
                            boxShadow: '0 0 15px #00ffff'
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default NeonCyberpunkTimelineSlide;