import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Year or time period'),
        title: z.string().min(1).max(40).describe('Milestone title'),
        description: z.string().min(1).max(100).describe('Description of the milestone'),
    })).min(3).max(6).describe('Timeline milestones').default([
        { year: '2020', title: 'Company Founded', description: 'Started our journey with a vision to transform the industry through innovation' },
        { year: '2021', title: 'First Product Launch', description: 'Launched our flagship product and gained first customers' },
        { year: '2022', title: 'Series A Funding', description: 'Raised $10M in Series A to accelerate growth and expansion' },
        { year: '2023', title: 'Global Expansion', description: 'Opened offices in 5 countries and reached 100k users' },
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'glassmorphism-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones using glassmorphism design.';

/**
 * React Component for the slide.
 */
const GlassmorphismTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)" 
                }}
            >
                {/* Decorative Background Elements */}
                <div 
                    className="absolute top-10 right-20 w-40 h-40 rounded-full opacity-20"
                    style={{ 
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                />
                <div 
                    className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-15"
                    style={{ 
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                />

                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />
                                )}
                                <div 
                                    className="w-[2px] h-6 opacity-60"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span className="text-lg font-semibold text-white">
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Title */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 
                        className="text-5xl font-bold mb-4"
                        style={{ color: 'var(--primary-text, #ffffff)' }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="h-1 w-24 mx-auto rounded-full"
                        style={{ backgroundColor: 'var(--primary-color, #7c3aed)' }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute top-40 left-0 right-0 bottom-0 px-12 py-8">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 rounded-full"
                        style={{ 
                            background: 'rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(5px)'
                        }}
                    />

                    {/* Timeline Items */}
                    <div className="relative h-full">
                        {milestones && milestones.map((milestone, index) => {
                            const isLeft = index % 2 === 0;
                            const topPosition = (index / Math.max(milestones.length - 1, 1)) * 80 + 5;
                            
                            return (
                                <div
                                    key={index}
                                    className="absolute left-0 right-0"
                                    style={{ top: `${topPosition}%` }}
                                >
                                    {/* Timeline Dot */}
                                    <div
                                        className="absolute w-6 h-6 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                        style={{ 
                                            background: 'var(--primary-color, #7c3aed)',
                                            border: '3px solid rgba(255,255,255,0.8)',
                                            boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)'
                                        }}
                                    />

                                    {/* Timeline Card */}
                                    <div
                                        className={`absolute w-80 ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} transform -translate-y-1/2`}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '20px',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                            padding: '24px'
                                        }}
                                    >
                                        {/* Year Badge */}
                                        <div
                                            className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${isLeft ? 'float-left' : 'float-right'}`}
                                            style={{
                                                background: 'var(--primary-color, #7c3aed)',
                                                color: 'var(--primary-text, #ffffff)',
                                                boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)'
                                            }}
                                        >
                                            {milestone.year}
                                        </div>

                                        <div className="clear-both">
                                            <h3 
                                                className="text-xl font-bold mb-3"
                                                style={{ color: 'var(--primary-text, #ffffff)' }}
                                            >
                                                {milestone.title}
                                            </h3>
                                            <p 
                                                className="text-sm leading-relaxed opacity-90"
                                                style={{ color: 'var(--primary-text, #ffffff)' }}
                                            >
                                                {milestone.description}
                                            </p>
                                        </div>

                                        {/* Card Connector Line */}
                                        <div
                                            className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 ${isLeft ? '-right-8' : '-left-8'}`}
                                            style={{ 
                                                background: 'rgba(255,255,255,0.3)',
                                                backdropFilter: 'blur(5px)'
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlassmorphismTimelineSlide;