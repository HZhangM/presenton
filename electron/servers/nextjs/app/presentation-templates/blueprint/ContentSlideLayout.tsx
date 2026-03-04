import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('System Architecture Overview'),
    description: z.string().min(20).max(200).describe('Description text for the slide content').default('Technical specifications and implementation details for the distributed processing framework with real-time data synchronization capabilities.'),
    keyPoints: z.array(z.object({
        title: z.string().min(10).max(60).describe('Title of the key point').default('Real-time Processing Engine'),
        description: z.string().min(20).max(100).describe('Description of the key point').default('Handles 10M+ events per second with sub-millisecond latency using distributed queuing.')
    })).min(2).max(4).default([
        {
            title: 'Distributed Data Layer',
            description: 'Multi-region replication with automatic failover and consistency guarantees across nodes.'
        },
        {
            title: 'API Gateway Architecture',
            description: 'Rate-limited endpoints with OAuth 2.0 authentication and comprehensive logging framework.'
        },
        {
            title: 'Monitoring & Observability',
            description: 'Real-time metrics dashboard with automated alerting and performance analytics.'
        }
    ])
});

export const layoutId = 'blueprint-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in blueprint paper style';

const BlueprintContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                 style={{ 
                     background: "var(--background-color, transparent)", 
                     fontFamily: "var(--heading-font-family, JetBrains Mono)" 
                 }}>
                
                {/* Corner Crosshair Markers */}
                <div className="absolute top-4 left-4 text-xs" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute top-4 right-4 text-xs" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute bottom-4 left-4 text-xs" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute bottom-4 right-4 text-xs" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>

                {/* Technical Drawing Dimension Lines */}
                <div className="absolute top-0 left-20 w-px h-8" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                <div className="absolute top-0 right-20 w-px h-8" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>

                {/* Company Logo/Name Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4 pb-3" style={{ borderBottom: '1px dashed rgba(77,171,247,0.4)' }}>
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain" />}
                                <div className="w-px h-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-xs font-medium tracking-wide uppercase" 
                                          style={{ color: 'var(--background-text, #c8d8e8)', fontFamily: "var(--body-font-family, IBM Plex Mono)" }}>
                                        {(data as any)?.__companyName__ || 'TECHNICAL DOCUMENTATION'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="flex flex-col px-12 pt-24 pb-12 h-full">
                    
                    {/* Title Block - Technical Drawing Style */}
                    <div className="mb-8">
                        <div className="inline-block px-4 py-2 mb-2" 
                             style={{ 
                                 border: '1px dashed rgba(77,171,247,0.35)', 
                                 background: 'rgba(77,171,247,0.06)', 
                                 borderRadius: '2px' 
                             }}>
                            <span className="text-xs font-medium tracking-widest uppercase" 
                                  style={{ color: 'var(--primary-color, #4dabf7)', fontFamily: "var(--body-font-family, IBM Plex Mono)" }}>
                                SPECIFICATION
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight" 
                            style={{ color: 'var(--primary-text, #0d2137)', fontFamily: "var(--heading-font-family, JetBrains Mono)" }}>
                            {title}
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-lg leading-relaxed max-w-4xl" 
                           style={{ color: 'var(--background-text, #c8d8e8)', fontFamily: "var(--body-font-family, IBM Plex Mono)" }}>
                            {description}
                        </p>
                    </div>

                    {/* Divider with crosshair endpoints */}
                    <div className="flex items-center mb-8">
                        <span style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</span>
                        <div className="flex-1 h-px mx-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))', backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 8px, rgba(77,171,247,0.35) 8px, rgba(77,171,247,0.35) 16px)' }}></div>
                        <span style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</span>
                    </div>

                    {/* Key Points Grid */}
                    <div className={`grid gap-6 flex-1 ${keyPoints && keyPoints.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {keyPoints?.map((point, index) => (
                            <div key={index} 
                                 className="p-6" 
                                 style={{ 
                                     border: '1px dashed rgba(77,171,247,0.35)', 
                                     background: 'rgba(77,171,247,0.06)', 
                                     borderRadius: '2px' 
                                 }}>
                                <div className="flex items-start gap-3">
                                    <span className="mt-1" style={{ color: 'var(--primary-color, #4dabf7)' }}>+</span>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-3 tracking-tight" 
                                            style={{ color: 'var(--primary-text, #0d2137)', fontFamily: "var(--heading-font-family, JetBrains Mono)" }}>
                                            {point.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed" 
                                           style={{ color: 'var(--background-text, #c8d8e8)', fontFamily: "var(--body-font-family, IBM Plex Mono)" }}>
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Technical annotation label */}
                                <div className="mt-4 flex justify-end">
                                    <span className="text-xs font-medium tracking-wider uppercase px-2 py-1" 
                                          style={{ 
                                              color: 'var(--primary-color, #4dabf7)', 
                                              fontFamily: "var(--body-font-family, IBM Plex Mono)",
                                              border: '1px dashed rgba(77,171,247,0.4)',
                                              borderRadius: '2px'
                                          }}>
                                        SPEC-{String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Drawing Reference Lines */}
                <div className="absolute bottom-0 left-20 w-px h-8" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                <div className="absolute bottom-0 right-20 w-px h-8" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
            </div>
        </>
    );
};

export default BlueprintContentSlide;