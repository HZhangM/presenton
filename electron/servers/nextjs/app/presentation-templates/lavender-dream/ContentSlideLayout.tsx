import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(10).max(40).default('Transform Your Vision'),
    description: z.string().min(20).max(200).default('Discover the key elements that will elevate your project and bring your creative dreams to life with our comprehensive approach.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).default('Strategic Planning'),
        description: z.string().min(20).max(100).default('Develop comprehensive roadmaps that align with your vision and business objectives.')
    })).min(2).max(4).default([
        {
            title: 'Strategic Planning',
            description: 'Develop comprehensive roadmaps that align with your vision and business objectives.'
        },
        {
            title: 'Creative Excellence',
            description: 'Deliver exceptional design solutions that captivate and inspire your target audience.'
        },
        {
            title: 'Technical Innovation',
            description: 'Implement cutting-edge technologies to ensure optimal performance and scalability.'
        },
        {
            title: 'Continuous Growth',
            description: 'Monitor progress and adapt strategies to maximize results and long-term success.'
        }
    ])
});

export const layoutId = 'lavender-dream-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in elegant lavender theme.';

const LavenderDreamContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-12 w-24 h-24 rounded-full opacity-10"
                    style={{ background: 'var(--primary-color, #9b59b6)' }}
                />
                <div 
                    className="absolute bottom-12 left-8 w-16 h-1 opacity-15"
                    style={{ background: 'var(--primary-color, #9b59b6)' }}
                />

                {/* Company Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 object-contain" />
                                )}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(155, 89, 182, 0.15))' }}
                                    className='w-0.5 h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-medium" 
                                        style={{ 
                                            color: 'var(--background-text, #3a2050)',
                                            fontFamily: 'var(--body-font-family, Mulish)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col h-full px-12 py-16">
                    {/* Header Section */}
                    <div className="flex-shrink-0 mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: 'var(--background-text, #3a2050)',
                                fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                            }}
                        >
                            {title}
                        </h1>
                        <p 
                            className="text-lg leading-relaxed mb-6 max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #3a2050)',
                                fontFamily: 'var(--body-font-family, Mulish)'
                            }}
                        >
                            {description}
                        </p>
                        <div 
                            className="h-px mx-auto"
                            style={{ 
                                width: '40%',
                                background: 'var(--primary-color, #9b59b6)',
                                opacity: 0.3
                            }}
                        />
                    </div>

                    {/* Key Points Grid */}
                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col p-4 rounded-[20px]"
                                    style={{
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                                    }}
                                >
                                    <h3 
                                        className="text-xl font-semibold mb-2"
                                        style={{ 
                                            color: 'var(--primary-color, #9b59b6)',
                                            fontFamily: 'var(--heading-font-family, Cormorant Garamond)'
                                        }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p 
                                        className="text-base leading-relaxed"
                                        style={{ 
                                            color: 'var(--background-text, #3a2050)',
                                            fontFamily: 'var(--body-font-family, Mulish)'
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
        </>
    );
};

export default LavenderDreamContentSlide;