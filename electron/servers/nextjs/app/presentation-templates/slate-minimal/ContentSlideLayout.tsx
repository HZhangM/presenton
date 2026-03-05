import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('Technical Overview'),
    description: z.string().min(10).max(200).default('Comprehensive analysis of system architecture and implementation details for scalable solutions'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Performance Optimization'),
        description: z.string().min(10).max(100).default('Enhanced system throughput by 45% through efficient caching strategies and database optimization')
    })).min(2).max(4).default([
        {
            title: 'Performance Optimization',
            description: 'Enhanced system throughput by 45% through efficient caching strategies and database optimization'
        },
        {
            title: 'Security Framework',
            description: 'Implemented enterprise-grade security protocols with multi-factor authentication and encryption'
        },
        {
            title: 'Scalability Architecture',
            description: 'Built distributed microservices architecture supporting 10x traffic growth with minimal latency'
        }
    ])
});

export const layoutId = 'slate-minimal-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in clean white cards on slate background';

const SlateMinimalContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
                                    className='w-[1px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1e293b)' }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col h-full p-12 pt-20">
                    <div className="flex-shrink-0 mb-8">
                        <h1 
                            className="text-4xl font-bold mb-4 leading-tight"
                            style={{ color: 'var(--background-text, #1e293b)' }}
                        >
                            {title}
                        </h1>
                        {description && (
                            <p 
                                className="text-lg leading-relaxed max-w-4xl"
                                style={{ color: 'var(--background-text, #1e293b)', opacity: 0.8 }}
                            >
                                {description}
                            </p>
                        )}
                        <div 
                            className="w-16 h-1 mt-6 rounded-full"
                            style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                        />
                    </div>

                    <div className="flex-1 min-h-0">
                        <div className="grid gap-4 h-full" style={{ gridTemplateRows: `repeat(${keyPoints?.length || 3}, 1fr)` }}>
                            {keyPoints?.map((point, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg border"
                                    style={{ 
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                        borderColor: 'rgba(0,0,0,0.06)',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                    }}
                                >
                                    <div 
                                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                                        style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3 
                                            className="font-semibold text-base mb-1 leading-tight"
                                            style={{ color: 'var(--background-text, #1e293b)' }}
                                        >
                                            {point.title}
                                        </h3>
                                        <p 
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--background-text, #1e293b)', opacity: 0.75 }}
                                        >
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-1/4 right-8 w-px h-32 opacity-10"
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                />
                <div 
                    className="absolute bottom-16 left-8 w-8 h-px opacity-10"
                    style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
                />
            </div>
        </>
    );
};

export default SlateMinimalContentSlide;