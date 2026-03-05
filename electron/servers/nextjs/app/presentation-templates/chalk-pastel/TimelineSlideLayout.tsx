import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Important Milestone'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('A significant achievement in our creative journey that shaped our artistic vision.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Creative Beginnings', description: 'Started our artistic journey with bold chalk pastel experiments and colorful expressions.' },
        { year: '2021', title: 'Artistic Growth', description: 'Developed our unique style through countless hours of practice and creative exploration.' },
        { year: '2022', title: 'Community Building', description: 'Connected with fellow artists and built a supportive creative community around our work.' },
        { year: '2023', title: 'Recognition', description: 'Gained recognition for our distinctive chalk pastel techniques and warm artistic approach.' },
        { year: '2024', title: 'New Horizons', description: 'Expanding into new mediums while staying true to our artistic roots and vision.' }
    ])
});

/**
 * Layout metadata.
 */
export const layoutId = 'chalk-pastel-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A creative timeline layout with chalk pastel art styling, featuring handwritten-style fonts and artistic decorative elements';

/**
 * React Component for the slide.
 */
const ChalkPastelTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;
    
    const pastelAccents = ['#e57373', '#81c784', '#ffb74d', '#64b5f6', '#f06292', '#aed581'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Kalam)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && 
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />
                                }
                                {(data as any)?.__companyName__ && (
                                    <>
                                        <div className="w-[2px] h-6 rounded-full" style={{ backgroundColor: 'var(--stroke, rgba(229, 115, 115, 0.25))' }}></div>
                                        <span 
                                            className="text-lg font-semibold" 
                                            style={{ 
                                                color: 'var(--background-text, #3a3530)',
                                                fontFamily: "var(--body-font-family, Nunito)"
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

                {/* Decorative chalk dots background */}
                <div className="absolute top-16 right-20 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: '#e57373' }}></div>
                <div className="absolute bottom-20 left-16 w-6 h-6 rounded-full opacity-15" style={{ backgroundColor: '#81c784' }}></div>
                <div className="absolute top-32 left-32 w-4 h-4 rounded-full opacity-25" style={{ backgroundColor: '#ffb74d' }}></div>

                {/* Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-20 text-center">
                    <h1 
                        className="text-5xl font-bold mb-4"
                        style={{ color: 'var(--background-text, #3a3530)' }}
                    >
                        {title}
                    </h1>
                    <svg width="120" height="8" className="mx-auto">
                        <path
                            d="M5 4 Q30 1 60 4 Q90 7 115 4"
                            stroke="var(--primary-color, #e57373)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Timeline Container */}
                <div className="absolute left-20 right-20 top-44 bottom-16">
                    {/* Central timeline line - wavy */}
                    <svg 
                        className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2" 
                        height="6" 
                        style={{ width: 'calc(100% - 100px)', left: '50px' }}
                    >
                        <path
                            d="M0 3 Q50 1 100 3 Q150 5 200 3 Q250 1 300 3 Q350 5 400 3 Q450 1 500 3 Q550 5 600 3 Q650 1 700 3 Q750 5 800 3 Q850 1 900 3 Q950 5 1000 3 Q1050 1 1100 3"
                            stroke="var(--stroke, rgba(229, 115, 115, 0.25))"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>

                    {/* Timeline Items */}
                    <div className="flex justify-between items-center h-full relative">
                        {milestones?.map((milestone, index) => {
                            const isTop = index % 2 === 0;
                            const accentColor = pastelAccents[index % pastelAccents.length];
                            
                            return (
                                <div key={index} className="flex flex-col items-center relative">
                                    {/* Timeline dot */}
                                    <div 
                                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 absolute top-1/2 transform -translate-y-1/2"
                                        style={{ backgroundColor: accentColor }}
                                    ></div>
                                    
                                    {/* Milestone card */}
                                    <div 
                                        className={`w-48 p-5 rounded-2xl border-2 ${isTop ? '-mt-40' : 'mt-20'}`}
                                        style={{ 
                                            background: 'var(--card-color, rgba(255, 255, 255, 0.5))',
                                            border: '2px solid var(--stroke, rgba(229, 115, 115, 0.15))'
                                        }}
                                    >
                                        {/* Year badge */}
                                        <div 
                                            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
                                            style={{ 
                                                backgroundColor: accentColor,
                                                color: 'var(--primary-text, #ffffff)'
                                            }}
                                        >
                                            {milestone.year}
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 
                                            className="text-xl font-bold mb-2 leading-tight"
                                            style={{ color: 'var(--background-text, #3a3530)' }}
                                        >
                                            {milestone.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                                color: 'var(--background-text, #3a3530)',
                                                fontFamily: "var(--body-font-family, Nunito)"
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                        
                                        {/* Decorative underline */}
                                        <svg width="40" height="4" className="mt-2">
                                            <path
                                                d="M2 2 Q10 1 20 2 Q30 3 38 2"
                                                stroke={accentColor}
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                opacity="0.6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Decorative pastel highlight blocks */}
                <div 
                    className="absolute top-60 right-8 w-16 h-3 opacity-30 rounded-full transform rotate-12"
                    style={{ backgroundColor: '#ffb74d' }}
                ></div>
                <div 
                    className="absolute bottom-32 left-8 w-12 h-3 opacity-25 rounded-full transform -rotate-6"
                    style={{ backgroundColor: '#64b5f6' }}
                ></div>
            </div>
        </>
    );
};

export default ChalkPastelTimelineSlide;