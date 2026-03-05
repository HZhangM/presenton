import React from 'react';
import * as z from "zod";

export const layoutId = 'candy-pastel-timeline-slide';
export const layoutName = 'Timeline Slide';
export const layoutDescription = 'A playful timeline layout with pastel colors, rounded shapes, and bubbly typography showing sequential milestones';

export const Schema = z.object({
    title: z.string().min(1).max(30).default('Our Journey'),
    milestones: z.array(z.object({
        year: z.string().min(1).max(10).default('2024'),
        title: z.string().min(1).max(40).default('Major Milestone'),
        description: z.string().min(1).max(100).default('Amazing things happened during this time period that changed everything for the better.')
    })).min(3).max(6).default([
        { year: '2020', title: 'Sweet Beginnings', description: 'Started our magical journey with a dream and lots of colorful ideas that sparked joy.' },
        { year: '2021', title: 'Growing Together', description: 'Expanded our team and built amazing relationships while creating wonderful experiences.' },
        { year: '2022', title: 'Big Achievements', description: 'Reached incredible milestones and celebrated success with our amazing community.' },
        { year: '2023', title: 'Innovation Time', description: 'Launched groundbreaking features that transformed how people connect and create.' },
        { year: '2024', title: 'Bright Future', description: 'Looking ahead with excitement and endless possibilities for growth and happiness.' }
    ])
});

const CandyPastelTimelineSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, milestones } = data;

    const pastelColors = [
        '#FFB3E6', '#B3E5FC', '#C8E6C9', '#FFECB3', '#E1BEE7', '#FFCCBC'
    ];

    const itemCount = milestones?.length || 0;
    const spacing = itemCount <= 3 ? 240 : itemCount <= 4 ? 200 : itemCount <= 5 ? 170 : 140;
    const startX = (1280 - (itemCount - 1) * spacing - 200) / 2;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Fredoka)" 
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-16 right-16 w-20 h-20 opacity-20 pointer-events-none">
                    <div className="w-full h-full rounded-full" style={{ background: 'var(--primary-color, #ab47bc)' }}></div>
                    <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white"></div>
                </div>
                
                <div className="absolute bottom-20 left-16 w-12 h-12 opacity-15 pointer-events-none">
                    <div className="w-full h-full rounded-full bg-pink-300"></div>
                </div>

                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain rounded-full" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(171,71,188,0.2))', width: '2px', height: '16px' }}></div>
                                {(data as any)?.__companyName__ && 
                                    <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #4a3560)', fontFamily: 'var(--heading-font-family, Fredoka)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Title */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 text-center">
                    <h1 
                        className="text-5xl font-bold mb-4"
                        style={{ 
                            color: 'var(--background-text, #4a3560)',
                            fontFamily: 'var(--heading-font-family, Fredoka)'
                        }}
                    >
                        {title}
                    </h1>
                    <div 
                        className="w-32 h-2 mx-auto rounded-full"
                        style={{ backgroundColor: 'var(--primary-color, #ab47bc)' }}
                    ></div>
                </div>

                {/* Timeline Line */}
                <div 
                    className="absolute top-80 h-1 rounded-full"
                    style={{ 
                        left: `${startX + 100}px`,
                        width: `${(itemCount - 1) * spacing}px`,
                        background: 'var(--stroke, rgba(171,71,188,0.2))',
                        borderTop: '3px dotted var(--primary-color, #ab47bc)'
                    }}
                ></div>

                {/* Milestones */}
                {milestones?.map((milestone, index) => {
                    const isEven = index % 2 === 0;
                    const x = startX + index * spacing;
                    const cardY = isEven ? 200 : 420;
                    const dotY = 314;
                    
                    return (
                        <div key={index}>
                            {/* Timeline Dot */}
                            <div 
                                className="absolute w-8 h-8 rounded-full border-4 border-white shadow-lg z-10"
                                style={{ 
                                    left: `${x + 84}px`,
                                    top: `${dotY}px`,
                                    backgroundColor: pastelColors[index % pastelColors.length]
                                }}
                            ></div>

                            {/* Milestone Card */}
                            <div 
                                className="absolute w-48 p-6 text-center"
                                style={{ 
                                    left: `${x}px`,
                                    top: `${cardY}px`,
                                    background: 'rgba(255,255,255,0.65)',
                                    border: '2px solid rgba(171,71,188,0.12)',
                                    borderRadius: '24px',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                                }}
                            >
                                {/* Year Badge */}
                                <div 
                                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3"
                                    style={{ 
                                        backgroundColor: pastelColors[index % pastelColors.length],
                                        color: 'var(--primary-text, #ffffff)',
                                        fontFamily: 'var(--heading-font-family, Fredoka)'
                                    }}
                                >
                                    {milestone.year}
                                </div>

                                {/* Title */}
                                <h3 
                                    className="text-lg font-semibold mb-2"
                                    style={{ 
                                        color: 'var(--background-text, #4a3560)',
                                        fontFamily: 'var(--heading-font-family, Fredoka)'
                                    }}
                                >
                                    {milestone.title}
                                </h3>

                                {/* Description */}
                                <p 
                                    className="text-sm leading-relaxed"
                                    style={{ 
                                        color: 'var(--background-text, #4a3560)',
                                        fontFamily: 'var(--body-font-family, Quicksand)'
                                    }}
                                >
                                    {milestone.description}
                                </p>
                            </div>

                            {/* Connector Line */}
                            <div 
                                className="absolute w-1 rounded-full"
                                style={{ 
                                    left: `${x + 96}px`,
                                    top: isEven ? `${cardY + 120}px` : `${dotY + 32}px`,
                                    height: isEven ? `${dotY - cardY - 120 + 16}px` : `${cardY - dotY - 32}px`,
                                    background: `linear-gradient(to ${isEven ? 'bottom' : 'top'}, ${pastelColors[index % pastelColors.length]}, transparent)`
                                }}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CandyPastelTimelineSlide;