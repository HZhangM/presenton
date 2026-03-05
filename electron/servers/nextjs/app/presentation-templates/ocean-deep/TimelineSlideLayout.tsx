import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2020'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Major Achievement'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Accomplished significant goals and reached new heights in our development.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'Established our core mission and began building innovative solutions for the future.' },
        { year: '2021', title: 'Growth Phase', description: 'Expanded our team and capabilities while delivering breakthrough results.' },
        { year: '2022', title: 'Innovation', description: 'Launched cutting-edge products that transformed the industry landscape.' },
        { year: '2023', title: 'Excellence', description: 'Achieved record performance and recognition as a market leader.' }
    ]),
});

/**
 * Layout metadata.
 */
export const layoutId = 'ocean-deep-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones featuring ocean-themed styling with flowing curves and translucent cards.';

/**
 * React Component for the slide.
 */
const OceanDeepTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Raleway)" 
                }}
            >
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(0,188,212,0.25))' }}
                                    className="w-[2px] h-5"
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--background-text, #c8e0f0)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Wave Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 400 400">
                        <path 
                            d="M0,200 Q100,100 200,200 T400,200 L400,0 L0,0 Z" 
                            fill="var(--primary-color, #00bcd4)" 
                            opacity="0.15"
                        />
                    </svg>
                </div>

                {/* Bubble Decorations */}
                <div className="absolute top-20 left-20 w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute top-40 left-32 w-2 h-2 rounded-full opacity-15" style={{ backgroundColor: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute bottom-32 right-24 w-4 h-4 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color, #00bcd4)' }}></div>

                {/* Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-20 text-center">
                    <h1 
                        className="text-4xl font-bold tracking-tight"
                        style={{ color: 'var(--background-text, #c8e0f0)' }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto mt-3 rounded-full"
                        style={{ backgroundColor: 'var(--primary-color, #00bcd4)' }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute top-32 left-8 right-8 bottom-8 flex flex-col justify-center">
                    <div className="relative">
                        {/* Main Timeline Line */}
                        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 w-full h-0.5 opacity-40">
                            <svg width="calc(100% - 128px)" height="2" className="absolute">
                                <path 
                                    d="M0,1 Q25,0.5 50,1 T100,1 Q125,0.5 150,1 T200,1 Q225,0.5 250,1 T300,1 Q325,0.5 350,1 T400,1 Q425,0.5 450,1 T500,1 Q525,0.5 550,1 T600,1 Q625,0.5 650,1 T700,1 Q725,0.5 750,1 T800,1 Q825,0.5 850,1 T900,1 Q925,0.5 950,1 T1000,1 Q1025,0.5 1050,1 T1100,1" 
                                    stroke="var(--primary-color, #00bcd4)" 
                                    strokeWidth="2" 
                                    fill="none"
                                />
                            </svg>
                        </div>

                        {/* Timeline Items */}
                        <div className="flex justify-between items-center px-16 relative z-10">
                            {milestones?.map((milestone, index) => (
                                <div key={index} className="flex flex-col items-center relative max-w-[220px]">
                                    {/* Timeline Dot */}
                                    <div 
                                        className="w-6 h-6 rounded-full border-4 mb-8 relative z-20"
                                        style={{ 
                                            backgroundColor: 'var(--primary-color, #00bcd4)',
                                            borderColor: 'var(--background-color, transparent)'
                                        }}
                                    >
                                        <div 
                                            className="absolute inset-1 rounded-full"
                                            style={{ backgroundColor: 'var(--primary-text, #0a1628)' }}
                                        />
                                    </div>

                                    {/* Milestone Card */}
                                    <div 
                                        className="p-6 rounded-2xl backdrop-blur-sm relative"
                                        style={{ 
                                            border: '1px solid rgba(0,188,212,0.15)', 
                                            background: 'rgba(0,188,212,0.06)', 
                                            backdropFilter: 'blur(8px)'
                                        }}
                                    >
                                        {/* Year */}
                                        <div 
                                            className="text-xl font-bold mb-2 text-center"
                                            style={{ color: 'var(--primary-color, #00bcd4)' }}
                                        >
                                            {milestone.year}
                                        </div>
                                        
                                        {/* Title */}
                                        <div 
                                            className="text-lg font-semibold mb-3 text-center"
                                            style={{ 
                                                color: 'var(--background-text, #c8e0f0)',
                                                fontFamily: 'var(--body-font-family, Open Sans)'
                                            }}
                                        >
                                            {milestone.title}
                                        </div>
                                        
                                        {/* Description */}
                                        <div 
                                            className="text-sm leading-relaxed text-center"
                                            style={{ 
                                                color: 'var(--background-text, #c8e0f0)',
                                                fontFamily: 'var(--body-font-family, Open Sans)',
                                                opacity: 0.9
                                            }}
                                        >
                                            {milestone.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OceanDeepTimelineSlide;