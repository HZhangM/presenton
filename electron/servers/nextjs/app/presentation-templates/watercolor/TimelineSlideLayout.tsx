import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Milestone Title'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A beautiful description of this important milestone in our journey forward.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'Started our journey with a vision to create something beautiful and meaningful.' },
        { year: '2021', title: 'First Growth', description: 'Expanded our team and launched our first major product to the market.' },
        { year: '2022', title: 'Innovation', description: 'Introduced groundbreaking features that changed the industry landscape.' },
        { year: '2023', title: 'Global Reach', description: 'Achieved international presence and established partnerships worldwide.' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'watercolor-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

/**
 * React Component for the slide.
 */
const WatercolorTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {/* Decorative watercolor blobs */}
                <div 
                    className="absolute top-16 left-16 w-32 h-32 rounded-full opacity-20"
                    style={{ 
                        background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)",
                        filter: "blur(20px)"
                    }}
                />
                <div 
                    className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-15"
                    style={{ 
                        background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)",
                        filter: "blur(16px)"
                    }}
                />

                {/* Company logo/name header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && 
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-12 h-12 object-contain" />
                                }
                                {(data as any)?.__companyName__ && (
                                    <>
                                        <div 
                                            className="w-px h-6"
                                            style={{ backgroundColor: 'var(--stroke, rgba(124, 92, 191, 0.25))' }}
                                        />
                                        <span 
                                            className="text-sm font-medium"
                                            style={{ 
                                                color: 'var(--background-text, #2d2d3d)',
                                                fontFamily: "var(--body-font-family, Lora)"
                                            }}
                                        >
                                            {(data as any)?.__companyName__}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main title */}
                <div className="absolute top-24 left-0 right-0 text-center px-8">
                    <h1 
                        className="text-5xl font-bold mb-4"
                        style={{ 
                            color: 'var(--background-text, #2d2d3d)',
                            fontFamily: "var(--heading-font-family, Playfair Display)"
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ 
                            background: `linear-gradient(90deg, transparent, var(--primary-color, #7c5cbf), transparent)`
                        }}
                    />
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-16 right-16 top-48 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-px"
                         style={{
                             background: 'linear-gradient(90deg, transparent, var(--stroke, rgba(124, 92, 191, 0.25)), transparent)'
                         }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[7px] left-4 w-4 h-4 rounded-full z-10"
                                     style={{ backgroundColor: 'var(--primary-color, #7c5cbf)' }}></div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #7c5cbf)',
                                         color: 'var(--primary-text, #ffffff)',
                                         fontFamily: "var(--body-font-family, Lora)"
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #2d2d3d)',
                                        fontFamily: "var(--heading-font-family, Playfair Display)"
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #2d2d3d)',
                                       fontFamily: "var(--body-font-family, Lora)",
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(124, 92, 191, 0.25))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WatercolorTimelineSlide;