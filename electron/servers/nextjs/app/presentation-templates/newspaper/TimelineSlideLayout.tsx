import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Company Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Title of the milestone').default('Major Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '1995', title: 'Company Founded', description: 'Our journey began with a vision to revolutionize the industry through innovative solutions.' },
        { year: '2005', title: 'International Expansion', description: 'Opened offices in Europe and Asia, establishing a global presence and customer base.' },
        { year: '2015', title: 'Digital Transformation', description: 'Launched comprehensive digital platform, modernizing our operations and services.' },
        { year: '2020', title: 'Sustainability Initiative', description: 'Committed to carbon neutrality and launched green technology programs worldwide.' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'newspaper-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones in classic newspaper style.';

/**
 * React Component for the slide.
 */
const NewspaperTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Unna)" }}>
                
                {/* Header Block */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div className="w-[1px] h-6" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                                {(data as any)?.__companyName__ && 
                                    <span className="text-sm font-normal tracking-wide" 
                                          style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--body-font-family, Source Serif 4)" }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Headline */}
                <div className="absolute left-8 top-24 right-8">
                    <div className="h-1 w-24 mb-3" style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}></div>
                    <h1 className="text-5xl font-bold leading-tight tracking-tight" 
                        style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--heading-font-family, Unna)" }}>
                        {title}
                    </h1>
                    <div className="h-0.5 w-full mt-4" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-8 right-8 top-52 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-[2px]"
                         style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>

                    <div className="flex gap-4 h-full" style={{ justifyContent: milestones && milestones.length <= 4 ? 'space-between' : 'flex-start' }}>
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[6px] left-4 w-4 h-4 rounded-full border-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #1a1a1a)',
                                         borderColor: 'var(--primary-color, #1a1a1a)',
                                     }}></div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-semibold tracking-wide mb-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #1a1a1a)',
                                         color: 'var(--primary-text, #f5f0e8)',
                                         fontFamily: "var(--body-font-family, Source Serif 4)"
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, Unna)"
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #1a1a1a)',
                                       fontFamily: "var(--body-font-family, Source Serif 4)",
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* Vintage newspaper corner flourish */}
                <div className="absolute top-8 right-8 opacity-20">
                    <div className="w-16 h-16 border-2 border-t-4 border-r-4" 
                         style={{ borderColor: 'var(--primary-color, #1a1a1a)' }}></div>
                </div>

                {/* Bottom decorative rule */}
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                        <div className="w-2 h-2 rotate-45 border" style={{ borderColor: 'var(--primary-color, #1a1a1a)' }}></div>
                        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewspaperTimelineSlide;