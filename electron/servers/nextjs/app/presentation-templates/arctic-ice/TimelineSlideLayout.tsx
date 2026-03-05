import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(5).max(30).describe('The main heading of the slide').default('Arctic Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(2).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(5).max(40).describe('Milestone title').default('Ice Formation'),
        description: z.string().min(10).max(100).describe('Description text for the milestone').default('Crystalline structures began forming in the pristine Arctic environment')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Initial Discovery', description: 'First signs of pristine ice formations detected in remote Arctic regions' },
        { year: '2021', title: 'Research Phase', description: 'Comprehensive study of crystalline patterns and frost formations' },
        { year: '2022', title: 'Data Analysis', description: 'Advanced analysis reveals unique properties of Arctic ice structures' },
        { year: '2023', title: 'Breakthrough', description: 'Major breakthrough in understanding ice crystal formation processes' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'arctic-ice-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones featuring frosted glass effects and Arctic ice styling.';

/**
 * React Component for the slide.
 */
const ArcticTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const cardWidth = 280;
    const spacing = itemCount <= 3 ? 300 : itemCount <= 4 ? 260 : itemCount <= 5 ? 220 : 200;
    const totalWidth = (itemCount - 1) * spacing + cardWidth;
    const slideWidth = 1280;
    const startX = Math.max(40, (slideWidth - totalWidth) / 2);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Outfit)" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && 
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[50px] h-[50px] object-contain" 
                                    />
                                }
                                <div 
                                    className="w-[1px] h-6 opacity-40"
                                    style={{ backgroundColor: 'var(--stroke, rgba(2, 136, 209, 0.15))' }}
                                />
                                {(data as any)?.__companyName__ && 
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--background-text, #1a3a50)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative ice crystal overlay */}
                <div 
                    className="absolute top-12 right-16 w-32 h-32 opacity-10"
                    style={{ color: 'var(--primary-color, #0288d1)' }}
                >
                    <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 10 L55 25 L70 20 L60 35 L75 40 L60 45 L70 60 L55 55 L50 70 L45 55 L30 60 L40 45 L25 40 L40 35 L30 20 L45 25 Z" opacity="0.3"/>
                        <path d="M50 20 L52 30 L62 28 L56 38 L66 42 L56 46 L62 56 L52 54 L50 64 L48 54 L38 56 L44 46 L34 42 L44 38 L38 28 L48 30 Z" opacity="0.5"/>
                    </svg>
                </div>

                {/* Main Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 
                        className="text-4xl font-light tracking-wide mb-3"
                        style={{ 
                            color: 'var(--background-text, #1a3a50)',
                            fontWeight: '300'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-20 h-[2px] mx-auto opacity-60"
                        style={{ backgroundColor: 'var(--primary-color, #0288d1)' }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute top-180 left-0 right-0" style={{ top: '180px' }}>
                    {/* Central timeline line */}
                    <div 
                        className="absolute h-[1px] top-40"
                        style={{ 
                            left: `${startX + 140}px`, 
                            width: `${(itemCount - 1) * spacing}px`,
                            backgroundColor: 'var(--stroke, rgba(2, 136, 209, 0.15))'
                        }}
                    />

                    {/* Timeline Items */}
                    {milestones && milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        const xPosition = startX + index * spacing;
                        
                        return (
                            <div key={index} className="absolute" style={{ left: `${xPosition}px` }}>
                                {/* Milestone Card */}
                                <div 
                                    className="relative p-6 rounded-2xl backdrop-blur-lg border"
                                    style={{ 
                                        width: '280px',
                                        top: isEven ? '80px' : '200px',
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255,255,255,0.5)',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    {/* Year Badge */}
                                    <div 
                                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3"
                                        style={{ 
                                            backgroundColor: 'var(--primary-color, #0288d1)',
                                            color: 'var(--primary-text, #ffffff)'
                                        }}
                                    >
                                        {milestone.year}
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 
                                        className="text-lg font-medium mb-2 leading-tight"
                                        style={{ 
                                            color: 'var(--background-text, #1a3a50)',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {milestone.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #1a3a50)',
                                            fontWeight: '300',
                                            opacity: '0.8'
                                        }}
                                    >
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Connection dot */}
                                <div 
                                    className="absolute w-4 h-4 rounded-full border-2 bg-white"
                                    style={{ 
                                        left: '138px',
                                        top: '160px',
                                        borderColor: 'var(--primary-color, #0288d1)',
                                        boxShadow: '0 2px 8px rgba(2, 136, 209, 0.3)'
                                    }}
                                />

                                {/* Connection line */}
                                <div 
                                    className="absolute w-[1px]"
                                    style={{ 
                                        left: '145px',
                                        top: isEven ? '174px' : '140px',
                                        height: isEven ? '26px' : '60px',
                                        backgroundColor: 'var(--stroke, rgba(2, 136, 209, 0.15))'
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Subtle frosted overlay decoration */}
                <div 
                    className="absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-5"
                    style={{ 
                        background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                        backdropFilter: 'blur(8px)'
                    }}
                />
            </div>
        </>
    );
};

export default ArcticTimelineSlide;