import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Major Milestone'),
        description: z.string().min(10).max(100).describe('Description text for the milestone').default('A significant achievement that marked an important moment in our company history and growth.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2019', title: 'Foundation', description: 'Our company was founded with a vision to create exceptional artisanal products that blend tradition with innovation.' },
        { year: '2021', title: 'Expansion', description: 'We expanded our operations and established partnerships with local artisans across the Mediterranean region.' },
        { year: '2023', title: 'Recognition', description: 'Received industry recognition for our commitment to sustainable practices and quality craftsmanship.' },
        { year: '2024', title: 'Innovation', description: 'Launched our innovative product line combining traditional techniques with modern design principles.' }
    ])
});

/**
 * Layout metadata.
 */
export const layoutId = 'terracotta-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones featuring warm Mediterranean terracotta styling.';

/**
 * React Component for the slide.
 */
const TerracottaTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cormorant Garamond)" }}>
                
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-5" style={{ backgroundColor: 'var(--stroke, rgba(141,78,42,0.2))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-lg font-semibold" 
                                          style={{ color: 'var(--background-text, #2d1a0e)', fontFamily: "var(--heading-font-family, Cormorant Garamond)" }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative diamond ornament */}
                <div className="absolute top-16 right-16 opacity-20" style={{ color: 'var(--primary-color, #8d4e2a)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2 L22 12 L12 22 L2 12 Z" />
                    </svg>
                </div>

                {/* Title Section */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 className="text-5xl font-bold mb-4" 
                        style={{ color: 'var(--background-text, #2d1a0e)', fontFamily: "var(--heading-font-family, Cormorant Garamond)" }}>
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-12 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>
                        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>
                        <div className="w-12 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>
                    </div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-16 right-16 top-48 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-[2px]"
                         style={{ backgroundColor: 'var(--stroke, rgba(141,78,42,0.2))' }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[5px] left-4 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                                     style={{
                                         backgroundColor: 'var(--card-color, rgba(255,250,240,0.8))',
                                         borderColor: 'var(--primary-color, #8d4e2a)'
                                     }}>
                                    <div className="w-1.5 h-1.5 rounded-full"
                                         style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>
                                </div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #8d4e2a)',
                                         color: 'var(--primary-text, #faf0e6)',
                                         fontFamily: "var(--body-font-family, Libre Baskerville)"
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #2d1a0e)',
                                        fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #2d1a0e)',
                                       fontFamily: "var(--body-font-family, Libre Baskerville)",
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(141,78,42,0.2))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-8 right-8 opacity-15" style={{ color: 'var(--primary-color, #8d4e2a)' }}>
                    <div className="flex gap-1">
                        <div className="w-1 h-12" style={{ backgroundColor: 'currentColor' }}></div>
                        <div className="w-1 h-8 mt-4" style={{ backgroundColor: 'currentColor' }}></div>
                        <div className="w-1 h-6 mt-6" style={{ backgroundColor: 'currentColor' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TerracottaTimelineSlide;