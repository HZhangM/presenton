import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Game Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label'),
        title: z.string().min(1).max(40).describe('Title of the milestone'),
        description: z.string().min(10).max(100).describe('Description text for the milestone'),
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2019', title: 'Game Launch', description: 'Initial release with basic gameplay mechanics and pixel art graphics.' },
        { year: '2020', title: 'Major Update', description: 'Added multiplayer support and enhanced visual effects system.' },
        { year: '2021', title: 'DLC Release', description: 'Expansion pack with new levels, characters, and story content.' },
        { year: '2022', title: 'Mobile Port', description: 'Successfully ported to mobile platforms with touch controls.' },
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'pixel-retro-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A retro gaming timeline layout with 8-bit pixel styling and terminal colors.';

/**
 * React Component for the slide.
 */
const PixelRetroTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Press Start 2P)" 
                }}
            >
                {/* Decorative pixel grid background */}
                <div 
                    className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, var(--stroke, rgba(80, 200, 120, 0.35)) 1px, transparent 1px),
                            linear-gradient(var(--stroke, rgba(80, 200, 120, 0.35)) 1px, transparent 1px)
                        `,
                        backgroundSize: '32px 32px'
                    }}
                />

                {/* Blinking cursor decoration */}
                <div 
                    className="absolute top-4 right-4 w-4 h-6 opacity-75"
                    style={{ 
                        backgroundColor: 'var(--primary-color, #50c878)',
                        animation: 'blink 1s infinite'
                    }}
                />

                {/* Company Logo Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[60px] object-contain"
                                        style={{ imageRendering: 'pixelated' }}
                                    />
                                )}
                                <div 
                                    className="w-[2px] h-4"
                                    style={{ backgroundColor: 'var(--stroke, rgba(80, 200, 120, 0.35))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-normal"
                                        style={{ 
                                            color: 'var(--background-text, #50c878)',
                                            fontFamily: 'var(--body-font-family, VT323)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Title Section */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-16 text-center">
                    <h1 
                        className="text-2xl font-normal mb-4"
                        style={{ 
                            color: 'var(--primary-color, #50c878)',
                            fontFamily: 'var(--heading-font-family, Press Start 2P)',
                            textShadow: '2px 2px 0px var(--primary-text, #1a1a2e)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="mx-auto h-1"
                        style={{ 
                            width: '120px',
                            background: `repeating-linear-gradient(90deg, var(--primary-color, #50c878) 0px, var(--primary-color, #50c878) 4px, transparent 4px, transparent 8px)`
                        }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute top-32 left-8 right-8 bottom-8">
                    <div className="relative h-full">
                        {/* Vertical Timeline Line */}
                        <div 
                            className="absolute left-12 top-8 bottom-8 w-1"
                            style={{ 
                                background: `repeating-linear-gradient(180deg, var(--primary-color, #50c878) 0px, var(--primary-color, #50c878) 4px, transparent 4px, transparent 8px)`
                            }}
                        />

                        {/* Timeline Items */}
                        {milestones && milestones.map((milestone, index) => {
                            const isEven = index % 2 === 0;
                            const topOffset = 8 + (index * 120);
                            
                            return (
                                <div key={index} className="absolute" style={{ top: `${topOffset}px` }}>
                                    {/* Timeline Dot */}
                                    <div 
                                        className="absolute w-6 h-6 border-2"
                                        style={{ 
                                            left: isEven ? '36px' : '36px',
                                            backgroundColor: 'var(--primary-color, #50c878)',
                                            border: '2px solid var(--primary-text, #1a1a2e)',
                                            boxShadow: '0 0 8px var(--primary-color, #50c878)'
                                        }}
                                    />

                                    {/* Timeline Card */}
                                    <div 
                                        className="absolute p-4 min-w-[400px]"
                                        style={{ 
                                            left: isEven ? '80px' : '-420px',
                                            border: '2px solid var(--stroke, rgba(80, 200, 120, 0.3))',
                                            background: 'var(--card-color, rgba(80, 200, 120, 0.06))',
                                            borderRadius: '0'
                                        }}
                                    >
                                        {/* Year Badge */}
                                        <div 
                                            className="inline-block px-3 py-1 mb-2 text-sm"
                                            style={{ 
                                                backgroundColor: 'var(--primary-color, #50c878)',
                                                color: 'var(--primary-text, #1a1a2e)',
                                                fontFamily: 'var(--heading-font-family, Press Start 2P)',
                                                border: '1px solid var(--primary-text, #1a1a2e)'
                                            }}
                                        >
                                            {milestone.year}
                                        </div>

                                        {/* Title */}
                                        <h3 
                                            className="text-lg font-normal mb-2"
                                            style={{ 
                                                color: 'var(--primary-color, #50c878)',
                                                fontFamily: 'var(--body-font-family, VT323)',
                                                fontSize: '20px'
                                            }}
                                        >
                                            {milestone.title}
                                        </h3>

                                        {/* Description */}
                                        <p 
                                            className="text-base leading-tight"
                                            style={{ 
                                                color: 'var(--background-text, #50c878)',
                                                fontFamily: 'var(--body-font-family, VT323)',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {milestone.description}
                                        </p>

                                        {/* Pixel bullet points */}
                                        <div className="flex gap-1 mt-2">
                                            <div 
                                                className="w-2 h-2"
                                                style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                                            />
                                            <div 
                                                className="w-2 h-2"
                                                style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                                            />
                                            <div 
                                                className="w-2 h-2"
                                                style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `}</style>
            </div>
        </>
    );
};

export default PixelRetroTimelineSlide;