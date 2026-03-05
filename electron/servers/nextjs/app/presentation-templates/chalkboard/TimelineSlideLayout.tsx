import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Important Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A significant achievement that marked our progress forward.'),
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'Started our journey with a clear vision and dedicated team.' },
        { year: '2021', title: 'First Success', description: 'Achieved our first major milestone and gained market recognition.' },
        { year: '2022', title: 'Expansion', description: 'Grew our team and expanded into new markets successfully.' },
        { year: '2023', title: 'Innovation', description: 'Launched innovative solutions that changed the industry landscape.' },
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'chalkboard-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A chalkboard-themed timeline layout with hand-drawn style elements and chalk-like decorations';

/**
 * React Component for the slide.
 */
const ChalkboardTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Caveat)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-6 left-8 right-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-12 h-12 object-contain" 
                                    />
                                )}
                                <div 
                                    className="w-0.5 h-6 opacity-60"
                                    style={{ backgroundColor: 'var(--stroke, rgba(245, 240, 232, 0.25))' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-normal"
                                        style={{ 
                                            color: 'var(--background-text, #e8e8d0)',
                                            fontFamily: 'var(--body-font-family, Patrick Hand)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Title Section */}
                <div className="absolute top-16 left-0 right-0 text-center px-8">
                    <h1 
                        className="text-5xl font-bold mb-3"
                        style={{ color: 'var(--background-text, #e8e8d0)' }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-32 h-1 mx-auto relative"
                        style={{
                            borderBottom: '3px wavy var(--primary-color, #f2c94c)',
                            opacity: 0.8
                        }}
                    />
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-8 right-8 top-36 bottom-12">
                    {/* Horizontal timeline line (dashed) */}
                    <div className="absolute left-0 right-0 top-[14px] h-0"
                         style={{
                             borderTop: 'dashed 2px rgba(255,255,255,0.3)',
                         }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[6px] left-4 w-4 h-4 rounded-full border-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #f2c94c)',
                                         borderColor: 'var(--background-text, #e8e8d0)',
                                     }}></div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-bold tracking-wide mb-2"
                                     style={{
                                         border: '1px dashed rgba(255,255,255,0.2)',
                                         background: 'rgba(255,255,255,0.05)',
                                         borderRadius: '4px',
                                         color: 'var(--primary-color, #f2c94c)',
                                         fontFamily: 'var(--body-font-family, Patrick Hand)'
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #e8e8d0)',
                                        borderBottom: '2px wavy rgba(255,255,255,0.4)',
                                        paddingBottom: '4px'
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed mt-2"
                                   style={{
                                       color: 'var(--background-text, #e8e8d0)',
                                       fontFamily: 'var(--body-font-family, Patrick Hand)',
                                       opacity: 0.9,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ borderRight: 'dashed 1px rgba(255,255,255,0.2)' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Chalk Dust Dots */}
                <div 
                    className="absolute top-20 right-20 w-2 h-2 rounded-full opacity-30"
                    style={{ backgroundColor: 'var(--background-text, #e8e8d0)' }}
                />
                <div 
                    className="absolute top-32 right-32 w-1 h-1 rounded-full opacity-25"
                    style={{ backgroundColor: 'var(--background-text, #e8e8d0)' }}
                />
                <div 
                    className="absolute bottom-20 left-20 w-1.5 h-1.5 rounded-full opacity-20"
                    style={{ backgroundColor: 'var(--primary-color, #f2c94c)' }}
                />

                {/* Chalk Star Decoration */}
                <div className="absolute top-24 right-16 text-2xl opacity-40" style={{ color: 'var(--primary-color, #f2c94c)' }}>
                    ★
                </div>
            </div>
        </>
    );
};

export default ChalkboardTimelineSlide;