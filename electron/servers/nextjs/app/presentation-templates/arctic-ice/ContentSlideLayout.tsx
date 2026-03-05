import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Key Product Features'),
    description: z.string().min(10).max(200).describe('Supporting description text for the content').default('Discover the innovative capabilities that set our solution apart from the competition and drive exceptional results for your business.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).describe('Title for the key point').default('Advanced Analytics'),
        description: z.string().min(10).max(100).describe('Description for the key point').default('Real-time insights and predictive analytics to drive informed decision making.')
    })).min(2).max(4).default([
        {
            title: 'Advanced Analytics',
            description: 'Real-time insights and predictive analytics to drive informed decision making.'
        },
        {
            title: 'Seamless Integration',
            description: 'Connect with existing tools and workflows without disrupting your operations.'
        },
        {
            title: 'Enterprise Security',
            description: 'Bank-grade encryption and compliance with industry standards for data protection.'
        }
    ])
});

export const layoutId = 'arctic-ice-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in a frosted glass arctic ice theme.';

const ArcticIceContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Outfit)" 
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
                    <div className="w-full h-full border border-blue-200 rounded-full transform scale-150"></div>
                </div>

                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[36px] h-[36px] object-contain" />}
                                <div 
                                    className="w-[1px] h-5"
                                    style={{ backgroundColor: 'var(--stroke, rgba(2,136,209,0.15))' }}
                                ></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-light"
                                        style={{ color: 'var(--background-text, #1a3a50)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Container */}
                <div className="flex flex-col h-full px-16 py-20 pt-28">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 
                            className="text-5xl font-light mb-6 leading-tight"
                            style={{ 
                                color: 'var(--background-text, #1a3a50)',
                                fontWeight: 300,
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {title}
                        </h1>
                        <div 
                            className="h-[1px] w-24 mb-8"
                            style={{ backgroundColor: 'var(--primary-color, #0288d1)' }}
                        ></div>
                        <p 
                            className="text-xl font-light leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #1a3a50)',
                                fontWeight: 300 
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="p-8 rounded-2xl border"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.65)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div 
                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                        style={{ backgroundColor: 'var(--primary-color, #0288d1)' }}
                                    ></div>
                                    <div className="flex-1">
                                        <h3 
                                            className="text-xl font-medium mb-3 leading-tight"
                                            style={{ 
                                                color: 'var(--primary-color, #0288d1)',
                                                fontWeight: 400
                                            }}
                                        >
                                            {point?.title}
                                        </h3>
                                        <p 
                                            className="text-base font-light leading-relaxed"
                                            style={{ 
                                                color: 'var(--background-text, #1a3a50)',
                                                fontWeight: 300
                                            }}
                                        >
                                            {point?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArcticIceContentSlide;