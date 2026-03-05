import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Our Journey Through Time'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Year or time period'),
        title: z.string().min(1).max(40).describe('Milestone title'),
        description: z.string().min(1).max(100).describe('Description of the milestone')
    })).min(3).max(6).describe('Timeline milestones').default([
        { year: '2020', title: 'Foundation', description: 'Launched our revolutionary platform with cutting-edge technology and ambitious vision.' },
        { year: '2021', title: 'Expansion', description: 'Scaled operations globally, reaching new markets and establishing strategic partnerships.' },
        { year: '2022', title: 'Innovation', description: 'Introduced breakthrough AI capabilities that transformed user experience and efficiency.' },
        { year: '2023', title: 'Growth', description: 'Achieved significant milestones in user adoption and market penetration worldwide.' },
        { year: '2024', title: 'Future', description: 'Continuing to pioneer next-generation solutions for tomorrow\'s challenges.' }
    ])
});

export const layoutId = 'starfield-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones.';

const StarfieldTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Exo 2)" 
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-12 right-16 w-2 h-2 rounded-full opacity-30" style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 8px var(--primary-color, #7c4dff)' }}></div>
                <div className="absolute top-32 right-32 w-1 h-1 rounded-full opacity-40" style={{ background: 'var(--primary-color, #7c4dff)' }}></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 rounded-full opacity-25" style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 6px var(--primary-color, #7c4dff)' }}></div>
                <div className="absolute top-1/2 left-8 w-32 h-px opacity-20" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)' }}></div>

                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-14 object-contain" />}
                                <div className="w-px h-5" style={{ background: 'var(--stroke, rgba(124, 77, 255, 0.25))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #d0d0f0)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Title */}
                <div className="absolute top-20 left-0 right-0 text-center px-8">
                    <h1 
                        className="text-4xl font-bold mb-4"
                        style={{ 
                            color: 'var(--primary-text, #ffffff)',
                            textShadow: '0 0 20px rgba(124, 77, 255, 0.5)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-24 h-1 mx-auto rounded-full"
                        style={{ 
                            background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)',
                            boxShadow: '0 0 10px var(--primary-color, #7c4dff)'
                        }}
                    ></div>
                </div>

                {/* Timeline Content - Horizontal Layout */}
                <div className="absolute left-12 right-12 top-44 bottom-16">
                    {/* Horizontal timeline line */}
                    <div className="absolute left-0 right-0 top-[14px] h-px"
                         style={{
                             background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)',
                             boxShadow: '0 0 4px var(--primary-color, #7c4dff)'
                         }}></div>

                    <div className="flex gap-4 h-full">
                        {milestones?.map((milestone, index) => (
                            <div key={index} className="flex-1 min-w-0 relative pt-10">
                                {/* Timeline dot */}
                                <div className="absolute top-[5px] left-4 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                                     style={{
                                         borderColor: 'var(--primary-color, #7c4dff)',
                                         background: 'rgba(124, 77, 255, 0.2)',
                                         boxShadow: '0 0 12px var(--primary-color, #7c4dff)'
                                     }}>
                                    <div className="w-1.5 h-1.5 rounded-full"
                                         style={{ background: 'var(--primary-color, #7c4dff)' }}></div>
                                </div>

                                {/* Year badge */}
                                <div className="inline-block text-sm font-bold mb-2"
                                     style={{
                                         color: 'var(--primary-color, #7c4dff)',
                                         textShadow: '0 0 8px rgba(124, 77, 255, 0.5)'
                                     }}>
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-1 leading-snug"
                                    style={{
                                        color: 'var(--primary-text, #ffffff)',
                                    }}>
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed"
                                   style={{
                                       color: 'var(--background-text, #d0d0f0)',
                                       opacity: 0.85,
                                   }}>
                                    {milestone.description}
                                </p>

                                {/* Column divider */}
                                {index < (milestones?.length || 0) - 1 && (
                                    <div className="absolute right-0 top-10 bottom-0 w-px"
                                         style={{
                                             background: 'linear-gradient(180deg, var(--primary-color, #7c4dff), transparent)',
                                             boxShadow: '0 0 3px var(--primary-color, #7c4dff)'
                                         }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StarfieldTimelineSlide;