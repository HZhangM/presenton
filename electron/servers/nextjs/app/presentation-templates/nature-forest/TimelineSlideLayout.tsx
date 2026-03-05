import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label'),
        title: z.string().min(1).max(40).describe('Title of the milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone'),
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2019', title: 'Foundation', description: 'Started our journey with a vision to create sustainable solutions for the future.' },
        { year: '2021', title: 'Growth', description: 'Expanded our team and developed innovative products that changed the industry.' },
        { year: '2023', title: 'Impact', description: 'Reached millions of users and made a significant environmental impact globally.' },
        { year: '2024', title: 'Innovation', description: 'Launched breakthrough technologies that revolutionized our field of expertise.' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'nature-forest-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

/**
 * React Component for the slide.
 */
const NatureForestTimeline: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Bitter)" 
                 }}>
                
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(124,179,66,0.25))' }} className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #e8efe0)', fontFamily: 'var(--body-font-family, Source Sans 3)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative leaf elements */}
                <div className="absolute top-16 right-16 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path d="M20 60C20 40 30 20 50 20C60 20 70 30 70 40C70 50 60 60 50 60C40 60 30 50 20 60Z" 
                              fill="var(--primary-color, #7cb342)" />
                    </svg>
                </div>
                
                <div className="absolute bottom-20 left-16 opacity-15 rotate-45">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M15 45C15 30 22 15 37 15C45 15 52 22 52 30C52 37 45 45 37 45C30 45 22 37 15 45Z" 
                              fill="var(--primary-color, #7cb342)" />
                    </svg>
                </div>

                {/* Title */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-5xl font-bold tracking-tight" 
                        style={{ color: 'var(--background-text, #e8efe0)' }}>
                        {title}
                    </h1>
                    <div className="w-24 h-1 mx-auto mt-4 rounded-full" 
                         style={{ background: 'var(--primary-color, #7cb342)' }}></div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-16 right-16 top-44 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-1 rounded-full"
                         style={{ background: 'var(--stroke, rgba(124,179,66,0.25))' }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[4px] left-4 w-5 h-5 rounded-full border-3 flex items-center justify-center z-10"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #7cb342)',
                                         borderColor: 'var(--background-text, #e8efe0)'
                                     }}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                </div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-2"
                                     style={{
                                         background: 'var(--primary-color, #7cb342)',
                                         color: 'var(--primary-text, #1a2e10)',
                                         fontFamily: 'var(--body-font-family, Source Sans 3)'
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #e8efe0)',
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #e8efe0)',
                                       fontFamily: 'var(--body-font-family, Source Sans 3)',
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(124,179,66,0.25))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NatureForestTimeline;