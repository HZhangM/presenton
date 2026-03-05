import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Strategic Overview'),
    description: z.string().min(1).max(200).default('Our comprehensive approach combines data-driven insights with innovative solutions to deliver measurable results across all business verticals.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).default('Performance Metrics'),
        description: z.string().min(1).max(100).default('Enhanced operational efficiency by 40% through streamlined processes and technology integration.')
    })).min(2).max(4).default([
        {
            title: 'Revenue Growth',
            description: 'Achieved 32% year-over-year revenue increase through strategic market expansion and product optimization.'
        },
        {
            title: 'Operational Excellence',
            description: 'Streamlined workflows resulting in 28% reduction in processing time and improved customer satisfaction.'
        },
        {
            title: 'Digital Transformation',
            description: 'Successfully migrated 85% of legacy systems to cloud infrastructure, enhancing scalability and security.'
        }
    ])
});

export const layoutId = 'dark-corporate-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in dark corporate theme.';

const DarkCorporateContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img 
                                        src={(data as any)?._logo_url__} 
                                        alt="logo" 
                                        className="w-[36px] h-[36px] object-contain" 
                                    />
                                )}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(99,102,241,0.2))' }}
                                    className="w-[1px] h-6"
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ color: 'var(--background-text, #e5e7eb)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="px-12 py-16 h-full flex flex-col justify-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="mb-8">
                            <h1 
                                className="text-5xl font-bold mb-6 leading-tight"
                                style={{ color: 'var(--background-text, #e5e7eb)' }}
                            >
                                {title}
                            </h1>
                            <div 
                                className="w-16 h-1 mb-8"
                                style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                            />
                            <p 
                                className="text-xl leading-relaxed"
                                style={{ color: 'var(--background-text, #e5e7eb)' }}
                            >
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {keyPoints?.map((point, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-lg relative"
                                    style={{
                                        border: '1px solid rgba(99,102,241,0.15)',
                                        background: 'var(--card-color, rgba(99, 102, 241, 0.08))',
                                        borderLeft: '3px solid var(--primary-color, #6366f1)'
                                    }}
                                >
                                    <div 
                                        className="w-2 h-2 rounded-full absolute top-6 right-6"
                                        style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                                    />
                                    <h3 
                                        className="text-lg font-semibold mb-3"
                                        style={{ color: 'var(--primary-color, #6366f1)' }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ color: 'var(--background-text, #e5e7eb)' }}
                                    >
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-0 right-0 w-64 h-64 opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--primary-color, #6366f1) 0%, transparent 70%)',
                        transform: 'translate(50%, -50%)'
                    }}
                />

                <div 
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-5"
                    style={{
                        background: 'linear-gradient(45deg, var(--primary-color, #6366f1), transparent)',
                        transform: 'translate(-25%, 25%)'
                    }}
                />
            </div>
        </>
    );
};

export default DarkCorporateContentSlide;