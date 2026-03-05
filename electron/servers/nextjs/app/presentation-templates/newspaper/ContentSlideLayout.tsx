import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Breaking News Analysis'),
    description: z.string().min(20).max(200).default('Today\'s comprehensive coverage examines the latest developments in our industry, featuring exclusive insights from leading experts and detailed market analysis.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Market Growth Accelerates'),
        description: z.string().min(15).max(100).default('Industry analysts report unprecedented growth rates across all major sectors this quarter.')
    })).min(2).max(4).default([
        {
            title: 'Market Growth Accelerates',
            description: 'Industry analysts report unprecedented growth rates across all major sectors this quarter.'
        },
        {
            title: 'Technology Innovation Surge',
            description: 'Revolutionary breakthroughs are transforming traditional business models nationwide.'
        },
        {
            title: 'Consumer Confidence Rising',
            description: 'Latest surveys indicate strong consumer sentiment driving increased spending patterns.'
        }
    ])
});

export const layoutId = 'newspaper-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in traditional newspaper layout style.';

const NewspaperContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {/* Decorative masthead border */}
                <div 
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                ></div>

                {/* Company header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 pb-4">
                        <div 
                            className="flex items-center justify-between pb-3"
                            style={{ borderBottom: '1px solid var(--stroke, rgba(0, 0, 0, 0.2))' }}
                        >
                            <div className="flex items-center gap-4">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] h-[32px] object-contain" />
                                )}
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold"
                                        style={{ 
                                            color: 'var(--primary-color, #1a1a1a)',
                                            fontFamily: 'var(--heading-font-family, Unna)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                            <div 
                                className="text-sm font-medium"
                                style={{ 
                                    color: 'var(--background-text, #1a1a1a)',
                                    fontFamily: 'var(--body-font-family, Source Serif 4)'
                                }}
                            >
                                SPECIAL REPORT
                            </div>
                        </div>
                    </div>
                )}

                {/* Main content area */}
                <div className="px-12 pt-24 pb-10">
                    {/* Headline section */}
                    <div className="mb-5">
                        <div
                            className="w-24 h-[4px] mb-3"
                            style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                        ></div>
                        <h1
                            className="text-4xl font-bold leading-tight mb-4"
                            style={{
                                color: 'var(--primary-color, #1a1a1a)',
                                fontFamily: 'var(--heading-font-family, Unna)'
                            }}
                        >
                            {title}
                        </h1>
                        <div
                            className="w-full h-[2px] mb-4"
                            style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                        ></div>
                    </div>

                    {/* Two column layout */}
                    <div className="grid grid-cols-2 gap-10">
                        {/* Left column - Description */}
                        <div>
                            <p
                                className="text-base leading-relaxed font-medium"
                                style={{
                                    color: 'var(--background-text, #1a1a1a)',
                                    fontFamily: 'var(--body-font-family, Source Serif 4)'
                                }}
                            >
                                {description}
                            </p>
                        </div>

                        {/* Right column - Key Points */}
                        <div className="relative">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[1px]"
                                style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.2))' }}
                            ></div>
                            <div className="pl-6">
                                <h2
                                    className="text-lg font-bold mb-3 uppercase tracking-wide"
                                    style={{
                                        color: 'var(--primary-color, #1a1a1a)',
                                        fontFamily: 'var(--heading-font-family, Unna)'
                                    }}
                                >
                                    Key Developments
                                </h2>
                                <div className="space-y-3">
                                    {keyPoints?.map((point, index) => (
                                        <div key={index} className="pb-2" style={{ borderTop: index === 0 ? 'none' : '1px solid var(--stroke, rgba(0,0,0,0.2))', paddingTop: index === 0 ? '0' : '10px' }}>
                                            <h3
                                                className="font-bold text-base mb-1"
                                                style={{
                                                    color: 'var(--primary-color, #1a1a1a)',
                                                    fontFamily: 'var(--heading-font-family, Unna)'
                                                }}
                                            >
                                                {point.title}
                                            </h3>
                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{
                                                    color: 'var(--background-text, #1a1a1a)',
                                                    fontFamily: 'var(--body-font-family, Source Serif 4)'
                                                }}
                                            >
                                                {point.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative flourish */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div 
                        className="flex items-center gap-2 opacity-30"
                        style={{ color: 'var(--primary-color, #1a1a1a)' }}
                    >
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}></div>
                        <div className="w-2 h-2 border" style={{ borderColor: 'var(--primary-color, #1a1a1a)', transform: 'rotate(45deg)' }}></div>
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewspaperContentSlide;