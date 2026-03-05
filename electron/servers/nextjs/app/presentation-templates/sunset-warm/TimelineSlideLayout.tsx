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
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacinia dictum.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Foundation', description: 'Started our journey with a vision to transform the industry through innovation.' },
        { year: '2021', title: 'Growth', description: 'Expanded our team and launched our first major product to market success.' },
        { year: '2022', title: 'Innovation', description: 'Introduced breakthrough technology that revolutionized our approach.' },
        { year: '2023', title: 'Expansion', description: 'Scaled globally and established partnerships across multiple continents.' },
        { year: '2024', title: 'Future', description: 'Setting new standards for excellence and preparing for the next chapter.' }
    ])
});

/**
 * Layout metadata.
 */
export const layoutId = 'sunset-warm-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones featuring warm sunset styling and glassmorphism cards';

/**
 * React Component for the slide.
 */
const SunsetWarmTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Nunito)" 
                }}
            >
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />
                                )}
                                <div className="w-[2px] h-6" style={{ backgroundColor: 'var(--stroke, rgba(230, 81, 0, 0.2))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-semibold"
                                        style={{ color: 'var(--background-text, #3d1e00)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20"
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                    }}
                />
                <div 
                    className="absolute bottom-16 left-16 w-24 h-24 rounded-full opacity-15"
                    style={{ 
                        background: 'radial-gradient(circle, #ff9800 0%, transparent 70%)',
                        filter: 'blur(15px)'
                    }}
                />

                {/* Title */}
                <div className="absolute left-1/2 top-24 transform -translate-x-1/2 text-center">
                    <h1 
                        className="text-5xl font-bold mb-4"
                        style={{ 
                            color: 'var(--background-text, #3d1e00)',
                            fontFamily: 'var(--heading-font-family, Nunito)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ backgroundColor: 'var(--primary-color, #e65100)' }}
                    />
                </div>

                {/* Timeline Container */}
                <div className="absolute top-48 left-16 right-16 bottom-16">
                    {/* Central Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
                        <div 
                            className="w-full h-full rounded-full"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #e65100) 50%, transparent 100%)',
                                opacity: 0.4
                            }}
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="relative h-full">
                        {milestones && milestones.map((milestone, index) => {
                            const isEven = index % 2 === 0;
                            const leftPercentage = (index / (milestones.length - 1)) * 100;
                            
                            return (
                                <div 
                                    key={index}
                                    className="absolute"
                                    style={{ left: `${leftPercentage}%`, top: '50%', transform: 'translateX(-50%)' }}
                                >
                                    {/* Timeline Dot */}
                                    <div 
                                        className="absolute w-6 h-6 rounded-full border-4 -translate-y-3 z-10"
                                        style={{ 
                                            backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                                            borderColor: 'var(--primary-color, #e65100)',
                                            left: '50%',
                                            transform: 'translateX(-50%) translateY(-12px)'
                                        }}
                                    />
                                    
                                    {/* Milestone Card */}
                                    <div 
                                        className={`absolute w-72 ${isEven ? '-top-48' : 'top-12'}`}
                                        style={{ left: '50%', transform: 'translateX(-50%)' }}
                                    >
                                        <div 
                                            className="p-6 rounded-[20px] backdrop-blur-[12px] border"
                                            style={{ 
                                                background: 'rgba(255,255,255,0.55)',
                                                border: '1px solid rgba(255,255,255,0.4)',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                            }}
                                        >
                                            <div 
                                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3"
                                                style={{ 
                                                    backgroundColor: 'var(--primary-color, #e65100)',
                                                    color: 'var(--primary-text, #ffffff)'
                                                }}
                                            >
                                                {milestone.year}
                                            </div>
                                            <h3 
                                                className="text-xl font-bold mb-2"
                                                style={{ 
                                                    color: 'var(--background-text, #3d1e00)',
                                                    fontFamily: 'var(--heading-font-family, Nunito)'
                                                }}
                                            >
                                                {milestone.title}
                                            </h3>
                                            <p 
                                                className="text-sm leading-relaxed"
                                                style={{ 
                                                    color: 'var(--background-text, #3d1e00)',
                                                    fontFamily: 'var(--body-font-family, "Nunito Sans")'
                                                }}
                                            >
                                                {milestone.description}
                                            </p>
                                        </div>
                                        
                                        {/* Connector Line */}
                                        <div 
                                            className={`absolute w-0.5 ${isEven ? 'top-full' : 'bottom-full'} left-1/2 transform -translate-x-1/2`}
                                            style={{ 
                                                height: isEven ? '48px' : '48px',
                                                backgroundColor: 'var(--stroke, rgba(230, 81, 0, 0.2))'
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

export default SunsetWarmTimelineSlide;