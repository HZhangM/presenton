import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Beginning'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('The first step in our transformative journey toward excellence and innovation.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'The first step in our transformative journey toward excellence and innovation.' },
        { year: '2021', title: 'Growth', description: 'Expanding our vision and building meaningful connections with our community.' },
        { year: '2022', title: 'Evolution', description: 'Embracing change and adapting to new possibilities with grace and purpose.' },
        { year: '2023', title: 'Mastery', description: 'Achieving deeper understanding and refining our craft through dedication.' }
    ])
});

/**
 * Layout metadata.
 */
export const layoutId = 'minimalist-zen-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A minimalist timeline layout with Japanese-inspired typography and subtle decorative elements showcasing sequential milestones.';

/**
 * React Component for the slide.
 */
const MinimalistZenTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Noto Serif JP')" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />
                                )}
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-light tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #2d2d2d)', 
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')" 
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[120px] text-center">
                    <h1 
                        className="text-5xl font-normal tracking-wide mb-6" 
                        style={{ 
                            color: 'var(--primary-color, #1a1a1a)', 
                            fontFamily: "var(--heading-font-family, 'Noto Serif JP')" 
                        }}
                    >
                        {title}
                    </h1>
                    {/* Subtle divider line */}
                    <div 
                        className="w-32 h-px mx-auto" 
                        style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[280px] w-[900px]">
                    {/* Central timeline line */}
                    <div 
                        className="absolute top-1/2 left-0 right-0 h-px transform -translate-y-1/2" 
                        style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                    />
                    
                    {/* Timeline items */}
                    <div className="flex justify-between items-center relative">
                        {milestones?.map((milestone, index) => {
                            const isAbove = index % 2 === 0;
                            
                            return (
                                <div key={index} className="relative flex flex-col items-center">
                                    {/* Timeline dot */}
                                    <div 
                                        className={`w-3 h-3 rounded-full border-2 bg-transparent ${isAbove ? 'order-2' : 'order-2'}`}
                                        style={{ 
                                            borderColor: 'var(--primary-color, #1a1a1a)',
                                            backgroundColor: 'var(--background-color, transparent)'
                                        }}
                                    />
                                    
                                    {/* Content card */}
                                    <div 
                                        className={`absolute ${isAbove ? 'bottom-8' : 'top-8'} w-48`}
                                        style={{ padding: '24px' }}
                                    >
                                        <div className="text-center space-y-3">
                                            {/* Year */}
                                            <div 
                                                className="text-sm font-light tracking-wider opacity-70" 
                                                style={{ 
                                                    color: 'var(--background-text, #2d2d2d)', 
                                                    fontFamily: "var(--body-font-family, 'Noto Sans JP')" 
                                                }}
                                            >
                                                {milestone.year}
                                            </div>
                                            
                                            {/* Title */}
                                            <div 
                                                className="text-lg font-normal" 
                                                style={{ 
                                                    color: 'var(--primary-color, #1a1a1a)', 
                                                    fontFamily: "var(--heading-font-family, 'Noto Serif JP')" 
                                                }}
                                            >
                                                {milestone.title}
                                            </div>
                                            
                                            {/* Description */}
                                            <div 
                                                className="text-sm font-light leading-relaxed opacity-80" 
                                                style={{ 
                                                    color: 'var(--background-text, #2d2d2d)', 
                                                    fontFamily: "var(--body-font-family, 'Noto Sans JP')" 
                                                }}
                                            >
                                                {milestone.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Decorative Enso Circle */}
                <div className="absolute top-8 right-16 opacity-5">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle 
                            cx="30" 
                            cy="30" 
                            r="25" 
                            fill="none" 
                            stroke="var(--primary-color, #1a1a1a)" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                            strokeDasharray="140,20"
                        />
                    </svg>
                </div>

                {/* Subtle accent line */}
                <div 
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-px" 
                    style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                />
            </div>
        </>
    );
};

export default MinimalistZenTimelineSlide;