import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('NEON TIMELINE'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label'),
        title: z.string().min(1).max(40).describe('Milestone title'),
        description: z.string().min(1).max(100).describe('Description text for the milestone'),
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1980', title: 'THE BEGINNING', description: 'Synthwave culture emerges from underground electronic music scenes' },
        { year: '1985', title: 'NEON NIGHTS', description: 'Retro-futuristic aesthetics dominate visual media and entertainment' },
        { year: '1990', title: 'DIGITAL DAWN', description: 'Cyberpunk philosophy merges with synthwave creating new art forms' },
        { year: '1995', title: 'CHROME FUTURE', description: 'Technology accelerates beyond human comprehension and control' },
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'retro-synthwave-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A synthwave-themed timeline layout with neon gradients, grid horizon, and bold display fonts';

/**
 * React Component for the slide.
 */
const RetroSynthwaveTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const neonColors = ['#ff3366', '#00ffff', '#ff0080', '#8000ff', '#ff6600', '#00ff80'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bungee)" 
                }}
            >
                {/* Decorative scan lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div 
                            key={i}
                            className="absolute w-full h-0.5"
                            style={{ 
                                top: `${i * 48}px`,
                                background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff3366), transparent)'
                            }}
                        />
                    ))}
                </div>

                {/* Grid horizon decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none opacity-20">
                    <div 
                        className="w-full h-full"
                        style={{
                            background: `repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 10px,
                                var(--primary-color, #ff3366) 10px,
                                var(--primary-color, #ff3366) 11px
                            ), repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 20px,
                                var(--primary-color, #ff3366) 20px,
                                var(--primary-color, #ff3366) 21px
                            )`,
                            transform: 'perspective(500px) rotateX(45deg)',
                            transformOrigin: 'bottom'
                        }}
                    />
                </div>

                {/* Company logo/name header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[60px] object-contain" 
                                    />
                                )}
                                <div 
                                    className="w-[2px] h-6"
                                    style={{ backgroundColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #f0e0ff)',
                                            fontFamily: 'var(--body-font-family, Rajdhani)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 
                        className="text-6xl font-bold tracking-widest mb-4"
                        style={{ 
                            background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px var(--primary-color, #ff3366)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-32 h-1 mx-auto"
                        style={{ 
                            background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)'
                        }}
                    />
                </div>

                {/* Timeline container */}
                <div className="absolute top-64 left-8 right-8 bottom-32">
                    {/* Central timeline line */}
                    <div 
                        className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2"
                        style={{ 
                            background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff, var(--primary-color, #ff3366))',
                            boxShadow: '0 0 20px var(--primary-color, #ff3366)'
                        }}
                    />

                    {/* Timeline items */}
                    {milestones && milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        const leftPosition = (index / Math.max(milestones.length - 1, 1)) * 100;
                        const color = neonColors[index % neonColors.length];
                        
                        return (
                            <div 
                                key={index}
                                className="absolute"
                                style={{ left: `${leftPosition}%`, top: '50%', transform: 'translateX(-50%)' }}
                            >
                                {/* Timeline dot */}
                                <div 
                                    className="absolute w-6 h-6 rounded-full transform -translate-y-1/2 z-10"
                                    style={{ 
                                        backgroundColor: color,
                                        border: `2px solid ${color}`,
                                        boxShadow: `0 0 20px ${color}`,
                                        left: '50%',
                                        marginLeft: '-12px'
                                    }}
                                />

                                {/* Milestone card */}
                                <div 
                                    className={`absolute w-80 p-6 ${isEven ? 'bottom-8' : 'top-8'}`}
                                    style={{ 
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        border: '2px solid rgba(255,51,102,0.3)',
                                        background: 'rgba(20,0,40,0.6)',
                                        backdropFilter: 'blur(4px)',
                                        borderRadius: '0'
                                    }}
                                >
                                    {/* Corner accents */}
                                    <div 
                                        className="absolute top-0 left-0 w-4 h-4"
                                        style={{
                                            borderTop: `2px solid ${color}`,
                                            borderLeft: `2px solid ${color}`
                                        }}
                                    />
                                    <div 
                                        className="absolute top-0 right-0 w-4 h-4"
                                        style={{
                                            borderTop: `2px solid ${color}`,
                                            borderRight: `2px solid ${color}`
                                        }}
                                    />

                                    {/* Year */}
                                    <div 
                                        className="text-2xl font-bold mb-2 tracking-wider"
                                        style={{ 
                                            color: color,
                                            fontFamily: 'var(--heading-font-family, Bungee)',
                                            textShadow: `0 0 10px ${color}`
                                        }}
                                    >
                                        {milestone.year}
                                    </div>

                                    {/* Title */}
                                    <div 
                                        className="text-xl font-bold mb-3 tracking-wide"
                                        style={{ 
                                            color: 'var(--primary-text, #ffffff)',
                                            fontFamily: 'var(--body-font-family, Rajdhani)'
                                        }}
                                    >
                                        {milestone.title}
                                    </div>

                                    {/* Description */}
                                    <div 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #f0e0ff)',
                                            fontFamily: 'var(--body-font-family, Rajdhani)'
                                        }}
                                    >
                                        {milestone.description}
                                    </div>
                                </div>

                                {/* Connection line from dot to card */}
                                <div 
                                    className={`absolute w-0.5 ${isEven ? 'top-0' : 'bottom-0'}`}
                                    style={{ 
                                        height: '32px',
                                        backgroundColor: color,
                                        boxShadow: `0 0 10px ${color}`,
                                        left: '50%',
                                        marginLeft: '-1px'
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default RetroSynthwaveTimelineSlide;