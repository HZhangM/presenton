import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Sustainable Growth'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Our forest-based initiatives have led to a 40% reduction in carbon footprint while maintaining steady growth across all business segments.'),
    image: z.object({
        __image_url__: z.string(),
        __image_prompt__: z.string().min(10).max(50)
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Lush green forest with sunlight filtering through trees'
    })
});

export const layoutId = 'nature-forest-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const NatureForestImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bitter)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <div
                                    style={{ backgroundColor: 'var(--stroke, rgba(124, 179, 66, 0.25))' }}
                                    className='w-[2px] h-5 rounded-full'
                                ></div>
                                {(data as any)?.__companyName__ && <span 
                                    className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #e8efe0)',
                                        fontFamily: "var(--body-font-family, 'Source Sans 3')"
                                    }}
                                >
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-8 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="var(--primary-color, #7cb342)">
                        <path d="M50,10 Q70,25 80,50 Q70,75 50,90 Q30,75 20,50 Q30,25 50,10 Z" />
                    </svg>
                </div>

                <div className="flex w-full h-full items-center px-16 py-20 gap-12">
                    <div className="flex flex-col flex-1 max-w-[500px]">
                        <div 
                            className="w-20 h-1 rounded-full mb-6"
                            style={{
                                background: `linear-gradient(90deg, var(--primary-color, #7cb342), rgba(124, 179, 66, 0.3))`
                            }}
                        ></div>
                        
                        <h1
                            className="text-5xl font-bold leading-tight mb-6"
                            style={{
                                color: 'var(--background-text, #e8efe0)'
                            }}
                        >
                            {data.title}
                        </h1>

                        <div 
                            className="p-6 rounded-xl"
                            style={{
                                border: '1px solid rgba(124,179,66,0.15)',
                                background: 'rgba(255,255,255,0.08)',
                                borderRadius: '12px'
                            }}
                        >
                            <p
                                className="text-lg leading-relaxed"
                                style={{
                                    color: 'var(--background-text, #e8efe0)',
                                    fontFamily: "var(--body-font-family, 'Source Sans 3')"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-1 justify-center items-center">
                        <div className="relative">
                            <div 
                                className="w-[450px] h-[320px] rounded-3xl overflow-hidden"
                                style={{
                                    border: '1px solid rgba(124,179,66,0.2)'
                                }}
                            >
                                <img
                                    src={data.image?.__image_url__}
                                    alt={data.image?.__image_prompt__}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div 
                                className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full opacity-60"
                                style={{
                                    background: 'var(--primary-color, #7cb342)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px opacity-20">
                    <svg width="100%" height="4" viewBox="0 0 1280 4" preserveAspectRatio="none">
                        <path 
                            d="M0,2 Q320,0 640,2 T1280,2" 
                            stroke="var(--primary-color, #7cb342)" 
                            strokeWidth="2" 
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default NatureForestImageTextSlide;