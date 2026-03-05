import React from 'react';
import * as z from "zod";

/**
 * Zod Schema for the slide content.
 */
export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('COMPANY MILESTONES'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Title of the milestone').default('Major Achievement'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Premium milestone achieved through dedication and excellence in our field of expertise.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2018', title: 'Foundation', description: 'Established with a vision of excellence and commitment to premium quality service delivery.' },
        { year: '2020', title: 'Expansion', description: 'Strategic growth into new markets with sophisticated solutions and unparalleled expertise.' },
        { year: '2022', title: 'Innovation', description: 'Revolutionary breakthrough in luxury service offerings with gold-standard methodologies.' },
        { year: '2024', title: 'Excellence', description: 'Industry leadership recognition for outstanding achievements and exclusive partnerships.' }
    ])
});

/**
 * Layout metadata.
 */
export const layoutId = 'luxury-gold-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A sophisticated timeline layout featuring sequential milestones with luxury gold and black styling, elegant typography, and premium visual hierarchy.';

/**
 * React Component for the slide.
 */
const LuxuryGoldTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const itemCount = milestones?.length || 0;
    const spacing = itemCount <= 3 ? 280 : itemCount <= 4 ? 240 : itemCount <= 5 ? 200 : 180;
    const slideWidth = 1280;
    const totalWidth = (itemCount - 1) * spacing + 240;
    const startX = (slideWidth - totalWidth) / 2;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cinzel)" }}>
                
                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(212,168,67,0.3))' }} className='w-[1px] h-6'></span>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium tracking-wider" 
                                          style={{ color: 'var(--background-text, #e8d5b0)', fontFamily: 'var(--body-font-family, "EB Garamond")' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Crown Element */}
                <div className="absolute top-8 right-12 opacity-20">
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                        <path d="M4 24L8 8L16 16L20 4L24 16L32 8L36 24H4Z" 
                              stroke="var(--primary-color, #d4a843)" 
                              strokeWidth="2" 
                              fill="none"/>
                        <circle cx="8" cy="8" r="2" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="20" cy="4" r="3" fill="var(--primary-color, #d4a843)"/>
                        <circle cx="32" cy="8" r="2" fill="var(--primary-color, #d4a843)"/>
                    </svg>
                </div>

                {/* Title Section */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-20 text-center">
                    <h1 className="text-4xl font-bold tracking-wider uppercase mb-4" 
                        style={{ 
                            color: 'var(--background-text, #e8d5b0)',
                            background: 'linear-gradient(135deg, var(--primary-color, #d4a843) 0%, var(--background-text, #e8d5b0) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        {title}
                    </h1>
                    <div className="w-24 h-px mx-auto" 
                         style={{ backgroundColor: 'var(--primary-color, #d4a843)' }}></div>
                </div>

                {/* Timeline Container */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
                    {/* Timeline Line */}
                    <div className="absolute top-20 w-full h-px" 
                         style={{ backgroundColor: 'var(--stroke, rgba(212,168,67,0.3))' }}>
                        <div className="absolute left-0 top-0 w-2 h-2 -mt-1 rounded-full" 
                             style={{ backgroundColor: 'var(--primary-color, #d4a843)' }}></div>
                        <div className="absolute right-0 top-0 w-2 h-2 -mt-1 rounded-full" 
                             style={{ backgroundColor: 'var(--primary-color, #d4a843)' }}></div>
                    </div>

                    {/* Timeline Items */}
                    <div className="flex items-start" style={{ width: `${totalWidth}px` }}>
                        {milestones && milestones.map((milestone, index) => (
                            <div key={index} 
                                 className="relative flex flex-col items-center" 
                                 style={{ width: '240px', marginRight: index < itemCount - 1 ? `${spacing - 240}px` : '0' }}>
                                
                                {/* Year Badge */}
                                <div className="relative z-10 mb-6 px-4 py-2 rounded border text-center" 
                                     style={{ 
                                         border: '1px solid var(--stroke, rgba(212,168,67,0.3))',
                                         background: 'var(--card-color, rgba(212,168,67,0.06))'
                                     }}>
                                    <span className="text-lg font-bold tracking-wider" 
                                          style={{ color: 'var(--primary-color, #d4a843)' }}>
                                        {milestone.year}
                                    </span>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute top-24 w-4 h-4 rounded-full border-2 bg-black z-20" 
                                     style={{ borderColor: 'var(--primary-color, #d4a843)' }}></div>

                                {/* Content Card */}
                                <div className="mt-12 p-6 rounded w-full text-center" 
                                     style={{ 
                                         border: '1px solid rgba(212,168,67,0.2)', 
                                         background: 'rgba(212,168,67,0.04)', 
                                         borderRadius: '4px' 
                                     }}>
                                    <h3 className="text-xl font-bold mb-3 tracking-wide" 
                                        style={{ color: 'var(--primary-color, #d4a843)' }}>
                                        {milestone.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" 
                                       style={{ 
                                           color: 'var(--background-text, #e8d5b0)', 
                                           fontFamily: 'var(--body-font-family, "EB Garamond")' 
                                       }}>
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Corner Ornament */}
                <div className="absolute bottom-8 left-12 opacity-15">
                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                        <path d="M0 10L10 0L20 10L30 0L40 10L50 0L60 10" 
                              stroke="var(--primary-color, #d4a843)" 
                              strokeWidth="1" 
                              fill="none"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default LuxuryGoldTimelineSlide;