import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('PROJECT TIMELINE'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label'),
        title: z.string().min(1).max(40).describe('Title of the milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone'),
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2021', title: 'FOUNDATION PHASE', description: 'Initial planning and infrastructure development for core systems implementation.' },
        { year: '2022', title: 'CONSTRUCTION PHASE', description: 'Full-scale development and deployment of primary operational components.' },
        { year: '2023', title: 'INTEGRATION PHASE', description: 'System integration and comprehensive testing across all operational units.' },
        { year: '2024', title: 'OPTIMIZATION PHASE', description: 'Performance enhancement and efficiency improvements for maximum output capacity.' }
    ]),
});

export const layoutId = 'concrete-industrial-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const ConcreteIndustrialTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Bebas Neue')" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.15))' }}
                                    className='w-[3px] h-6'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold uppercase tracking-wider" 
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'COMPANY NAME'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Hazard stripe decorative element */}
                <div className="absolute top-0 right-0 w-16 h-full opacity-10 overflow-hidden">
                    <div 
                        className="absolute inset-0 transform rotate-45 origin-center"
                        style={{
                            background: 'repeating-linear-gradient(0deg, transparent, transparent 10px, var(--primary-color, #ff6d00) 10px, var(--primary-color, #ff6d00) 20px)',
                        }}
                    />
                </div>

                {/* Industrial grid background pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(var(--stroke, rgba(0,0,0,0.15)) 1px, transparent 1px), linear-gradient(90deg, var(--stroke, rgba(0,0,0,0.15)) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Title */}
                <div className="absolute left-8 top-24 right-8">
                    <h1 
                        className="text-5xl font-bold uppercase tracking-wider mb-4"
                        style={{ 
                            color: 'var(--background-text, #1a1a1a)',
                            fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="h-1 w-24"
                        style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }}
                    />
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-8 right-8 top-48 bottom-12">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-1"
                         style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.15))' }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot (numbered square) */}
                                <div className="absolute top-[2px] left-4 w-6 h-6 flex items-center justify-center text-white font-bold text-xs z-10"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #ff6d00)',
                                         boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                                         fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                                     }}>
                                    {index + 1}
                                </div>

                                {/* Year badge */}
                                <div className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider mb-2"
                                     style={{
                                         backgroundColor: 'var(--primary-color, #ff6d00)',
                                         color: 'var(--primary-text, #ffffff)',
                                         fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold uppercase tracking-wide mb-1 leading-snug"
                                    style={{
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm font-medium leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #1a1a1a)',
                                       fontFamily: "var(--body-font-family, 'Roboto Condensed')",
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.15))' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConcreteIndustrialTimelineSlide;