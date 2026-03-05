import React from 'react';
import * as z from "zod";

export const layoutId = 'magazine-editorial-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones in bold editorial magazine style.';

export const Schema = z.object({
    title: z.string().min(1).max(30).default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).default('2020'),
        title: z.string().min(1).max(40).default('Major Milestone'),
        description: z.string().min(1).max(100).default('A significant achievement that shaped our company\'s direction and established our market position.')
    })).min(3).max(6).default([
        {
            year: '2020',
            title: 'Company Founded',
            description: 'Started with a vision to revolutionize the industry through innovative solutions and exceptional service.'
        },
        {
            year: '2021',
            title: 'First Major Client',
            description: 'Secured our breakthrough partnership that validated our approach and opened doors to new opportunities.'
        },
        {
            year: '2022',
            title: 'Product Launch',
            description: 'Released our flagship product after months of development, receiving outstanding market reception.'
        },
        {
            year: '2023',
            title: 'Market Expansion',
            description: 'Extended our reach to international markets, establishing partnerships across three continents.'
        }
    ])
});

const MagazineEditorialTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, DM Serif Display)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                {(data as any)?.__companyName__ && (
                                    <>
                                        <div className="w-[3px] h-6" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
                                        <span className="text-lg font-medium" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                            {(data as any)?.__companyName__}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative large drop number */}
                <div className="absolute top-16 right-16 opacity-10" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                    <span className="text-[240px] font-bold leading-none">01</span>
                </div>

                {/* Title Section */}
                <div className="absolute left-12 top-24 z-10">
                    <h1 className="text-5xl font-normal leading-tight mb-4" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                        {title}
                    </h1>
                    <div className="w-24 h-1" style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-12 right-12 top-48 bottom-12">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-1"
                         style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot (square) */}
                                <div className="absolute top-[4px] left-4 w-5 h-5 border-4 bg-white z-10"
                                     style={{
                                         borderColor: 'var(--background-text, #1a1a1a)',
                                     }}></div>

                                {/* Year badge */}
                                <div className="inline-block text-sm font-bold mb-2"
                                     style={{
                                         color: 'var(--primary-color, #e53935)',
                                         fontFamily: 'var(--body-font-family, DM Sans)'
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: 'var(--body-font-family, DM Sans)'
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #1a1a1a)',
                                       fontFamily: 'var(--body-font-family, DM Sans)',
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.15))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative accent line */}
                <div className="absolute bottom-8 left-12 w-32 h-1" style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
            </div>
        </>
    );
};

export default MagazineEditorialTimelineSlide;