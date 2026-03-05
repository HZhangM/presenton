import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('BRUTAL FACTS'),
    description: z.string().min(10).max(200).describe('Supporting description text').default('No sugar-coating. No corporate speak. Just raw data and honest insights that drive real results.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Industrial concrete building with harsh lighting')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Industrial concrete building with harsh lighting'
    })
});

export const layoutId = 'brutalist-web-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other in raw brutalist style.';

const BrutalistWebImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Anton)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4" style={{ borderBottom: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))" }}>
                        <div className="flex items-center gap-4 pb-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain border-2" style={{ border: "2px solid var(--stroke, #111111)" }} />}
                                <div className="w-[4px] h-8" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-bold uppercase tracking-wider" 
                                        style={{ 
                                            color: 'var(--background-text, #111111)',
                                            fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full">
                    {/* Image Side */}
                    <div className="w-1/2 relative">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                        <div 
                            className="absolute inset-0" 
                            style={{ border: "4px solid var(--stroke, #111111)" }}
                        ></div>
                        <div 
                            className="absolute bottom-4 right-4 w-16 h-16 flex items-center justify-center text-3xl font-bold"
                            style={{ 
                                backgroundColor: 'var(--primary-color, #ff4500)',
                                color: 'var(--primary-text, #ffffff)',
                                border: "4px solid var(--stroke, #111111)",
                                boxShadow: "6px 6px 0 var(--stroke, #111111)"
                            }}
                        >
                            01
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-1/2 flex flex-col justify-center px-12 relative">
                        <div 
                            className="absolute top-0 left-0 w-full h-2"
                            style={{ backgroundColor: 'var(--primary-color, #ff4500)' }}
                        ></div>
                        
                        <div className="space-y-6">
                            <h1 
                                className="text-5xl font-black uppercase leading-none tracking-tight"
                                style={{ 
                                    color: 'var(--background-text, #111111)',
                                    fontFamily: "var(--heading-font-family, Anton)"
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <div 
                                className="w-full h-1"
                                style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}
                            ></div>
                            
                            <p 
                                className="text-lg font-medium leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #111111)',
                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                }}
                            >
                                {data.description}
                            </p>
                            
                            <div 
                                className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest"
                                style={{ 
                                    backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                    color: 'var(--background-text, #111111)',
                                    border: "2px solid var(--stroke, #111111)",
                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                }}
                            >
                                RAW_DATA.TXT
                            </div>
                        </div>

                        <div 
                            className="absolute bottom-0 right-0 w-8 h-full"
                            style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.8))' }}
                        ></div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-4 right-4 w-3 h-3"
                    style={{ 
                        backgroundColor: 'var(--primary-color, #ff4500)',
                        opacity: 0.7
                    }}
                ></div>
                <div 
                    className="absolute bottom-4 left-4 w-6 h-6"
                    style={{ 
                        border: "2px solid var(--stroke, rgba(0, 0, 0, 0.3))",
                        opacity: 0.5
                    }}
                ></div>
            </div>
        </>
    );
};

export default BrutalistWebImageTextSlide;