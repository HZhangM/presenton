import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Growth Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Key Achievement'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacinia dictum.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2019', title: 'Foundation', description: 'Company established with a vision to transform botanical research and conservation.' },
        { year: '2020', title: 'First Research', description: 'Launched comprehensive study of native plant species and their ecological impact.' },
        { year: '2021', title: 'Expansion', description: 'Opened three new botanical gardens and research facilities across the region.' },
        { year: '2022', title: 'Innovation', description: 'Developed sustainable cultivation methods that increased plant survival rates by 40%.' },
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'botanical-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

/**
 * React Component for the slide.
 */
const BotanicalTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bodoni Moda)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }}
                                    className='w-[2px] h-5'></span>
                                {(data as any)?.__companyName__ && <span className="text-lg font-medium" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative vine element */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path 
                            d="M20 180 Q60 140 100 160 T180 120" 
                            stroke="var(--primary-color, #558b2f)" 
                            strokeWidth="2" 
                            fill="none"
                        />
                        <circle cx="100" cy="160" r="3" fill="var(--primary-color, #558b2f)" />
                        <circle cx="140" cy="140" r="2" fill="var(--primary-color, #558b2f)" />
                        <path d="M95 155 L105 165 L95 175 Z" fill="var(--primary-color, #558b2f)" />
                        <path d="M135 135 L145 145 L135 155 Z" fill="var(--primary-color, #558b2f)" />
                    </svg>
                </div>

                {/* Title Section */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 
                        className="text-5xl font-bold mb-4" 
                        style={{ color: 'var(--background-text, #2d3a2e)' }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto rounded-full" 
                        style={{ backgroundColor: 'var(--primary-color, #558b2f)' }}
                    ></div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-16 right-16 top-48 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-[2px]"
                         style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[6px] left-4 w-4 h-4 rounded-full border-4 z-10"
                                     style={{
                                         backgroundColor: 'var(--card-color, rgba(255,255,255,0.75))',
                                         borderColor: 'var(--primary-color, #558b2f)',
                                     }}></div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-bold tracking-wide mb-2 rounded-sm"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #558b2f)',
                                         color: 'var(--primary-text, #f5f0e8)',
                                         fontFamily: 'var(--body-font-family, Lato)'
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #2d3a2e)',
                                        fontFamily: 'var(--heading-font-family, Bodoni Moda)'
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #2d3a2e)',
                                       fontFamily: 'var(--body-font-family, Lato)',
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative leaf elements */}
                <div className="absolute bottom-8 left-8 opacity-15 pointer-events-none">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                        <path 
                            d="M24 4 C32 12, 40 20, 32 32 C28 40, 20 36, 16 32 C8 20, 16 12, 24 4 Z" 
                            fill="var(--primary-color, #558b2f)"
                        />
                        <path 
                            d="M24 8 L32 28" 
                            stroke="var(--background-text, #2d3a2e)" 
                            strokeWidth="1" 
                            opacity="0.3"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default BotanicalTimelineSlide;