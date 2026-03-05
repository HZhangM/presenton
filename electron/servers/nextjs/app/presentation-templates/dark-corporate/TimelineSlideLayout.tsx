import React from 'react';
import * as z from "zod";

export const layoutId = 'dark-corporate-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A timeline or process steps layout with sequential milestones';

export const Schema = z.object({
    title: z.string().min(1).max(30).describe('The main heading of the slide').default('Company Timeline'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).describe('Time period or date label').default('2024'),
        title: z.string().min(1).max(40).describe('Milestone title').default('Key Achievement'),
        description: z.string().min(1).max(100).describe('Description text for the milestone').default('Major milestone achieved with significant impact on business growth and market position.')
    })).min(3).max(6).describe('List of milestone items for the timeline').default([
        { year: '2020', title: 'Company Founded', description: 'Started operations with innovative vision and strong foundation for future growth.' },
        { year: '2021', title: 'Series A Funding', description: 'Raised $10M in Series A funding to accelerate product development and market expansion.' },
        { year: '2022', title: 'Product Launch', description: 'Successfully launched flagship product to market with positive customer reception.' },
        { year: '2023', title: 'Market Expansion', description: 'Expanded to international markets and established key strategic partnerships.' }
    ])
});

const TimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Inter)" 
                 }}>
                
                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(99,102,241,0.2))' }}
                                    className="w-[2px] h-5"></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10" 
                     style={{ background: 'radial-gradient(circle, var(--primary-color, #6366f1) 0%, transparent 70%)' }}></div>
                <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full opacity-5" 
                     style={{ background: 'var(--primary-color, #6366f1)' }}></div>

                {/* Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 className="text-4xl font-bold tracking-tight" style={{ color: 'var(--background-text, #e5e7eb)' }}>
                        {title}
                    </h1>
                    <div className="w-20 h-1 mx-auto mt-4 rounded" 
                         style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}></div>
                </div>

                {/* Timeline Container */}
                <div className="absolute top-44 left-16 right-16 bottom-16">
                    {/* Main Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-px transform -translate-y-1/2" 
                         style={{ backgroundColor: 'var(--stroke, rgba(99,102,241,0.2))' }}></div>

                    {/* Timeline Items */}
                    <div className="relative h-full">
                        {milestones?.map((milestone, index) => {
                            const isEven = index % 2 === 0;
                            const leftPosition = (index / ((milestones.length - 1) || 1)) * 100;
                            
                            return (
                                <div key={index} className="absolute transform -translate-x-1/2" 
                                     style={{ left: `${leftPosition}%` }}>
                                    {/* Timeline Dot */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10" 
                                         style={{ 
                                             backgroundColor: 'var(--primary-color, #6366f1)', 
                                             borderColor: 'var(--primary-text, #ffffff)' 
                                         }}></div>

                                    {/* Timeline Card */}
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-64 ${isEven ? 'bottom-1/2 mb-8' : 'top-1/2 mt-8'}`}>
                                        <div className="p-5 rounded-lg border" 
                                             style={{ 
                                                 background: 'var(--card-color, rgba(99, 102, 241, 0.08))',
                                                 border: '1px solid rgba(99,102,241,0.12)',
                                                 borderLeft: '3px solid var(--primary-color, #6366f1)'
                                             }}>
                                            <div className="text-lg font-semibold mb-2" 
                                                 style={{ color: 'var(--primary-color, #6366f1)' }}>
                                                {milestone.year}
                                            </div>
                                            <div className="text-base font-medium mb-2" 
                                                 style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                                {milestone.title}
                                            </div>
                                            <div className="text-sm leading-relaxed opacity-90" 
                                                 style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                                {milestone.description}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Line */}
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-px ${isEven ? 'top-1/2 h-8' : 'bottom-1/2 h-8'}`} 
                                         style={{ backgroundColor: 'var(--stroke, rgba(99,102,241,0.2))' }}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineSlide;