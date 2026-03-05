import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Essential Business Insights'),
    description: z.string().min(10).max(200).default('Key findings and strategic recommendations that will drive our organization forward with measurable impact across all departments.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Market Analysis Results'),
        description: z.string().min(10).max(100).default('Comprehensive market research reveals significant opportunities for expansion in emerging segments.')
    })).min(2).max(4).default([
        {
            title: 'Customer Engagement Metrics',
            description: 'User satisfaction scores increased by 34% following implementation of new service protocols.'
        },
        {
            title: 'Revenue Growth Trajectory',
            description: 'Quarterly performance shows sustained growth with projections exceeding initial targets by 18%.'
        },
        {
            title: 'Operational Efficiency Gains',
            description: 'Process optimization resulted in 25% reduction in delivery times and improved resource allocation.'
        }
    ])
});

export const layoutId = 'japanese-ukiyoe-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in traditional Japanese ukiyo-e aesthetic.';

const JapaneseUkiyoeContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, Shippori Mincho)" 
                 }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] object-contain" />}
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a1a3a)', fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-12 w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}></div>
                <div className="absolute bottom-24 left-8 w-32 h-px opacity-15" style={{ backgroundColor: 'var(--background-text, #1a1a3a)' }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--background-text, #1a1a3a)' }}></div>
                </div>

                <div className="flex flex-col h-full px-12 py-16">
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-8" style={{ maxHeight: '35%' }}>
                        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--background-text, #1a1a3a)' }}>
                            {title}
                        </h1>
                        <p className="text-lg leading-relaxed mb-4" 
                           style={{ 
                               color: 'var(--background-text, #1a1a3a)', 
                               fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)' 
                           }}>
                            {description}
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(30, 30, 80, 0.15))' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}></div>
                        </div>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-w-0">
                        <div className="grid grid-cols-1 gap-3 h-full">
                            {keyPoints?.map((point, index) => (
                                <div key={index} 
                                     className="p-4 rounded border flex-shrink-0"
                                     style={{ 
                                         background: 'var(--card-color, rgba(255, 255, 250, 0.7))',
                                         border: '1px solid rgba(30,30,80,0.08)',
                                         borderRadius: '4px'
                                     }}>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" 
                                             style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold mb-1 text-base" 
                                                style={{ 
                                                    color: 'var(--background-text, #1a1a3a)',
                                                    fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)'
                                                }}>
                                                {point?.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed" 
                                               style={{ 
                                                   color: 'var(--background-text, #1a1a3a)', 
                                                   fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)' 
                                               }}>
                                                {point?.description}
                                            </p>
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

export default JapaneseUkiyoeContentSlide;