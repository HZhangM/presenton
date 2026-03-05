import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('INDUSTRIAL OPERATIONS'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Our robust infrastructure and streamlined processes deliver uncompromising quality and efficiency across all manufacturing operations.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Industrial factory floor with machinery and workers')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Industrial factory floor with machinery and workers'
    })
});

export const layoutId = 'concrete-industrial-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const ConcreteIndustrialImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Bebas Neue')" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-10">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />}
                                <div style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }} className="w-[3px] h-8"></div>
                                {(data as any)?.__companyName__ && (
                                    <span className="text-lg font-bold uppercase tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                        }}>
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex h-full">
                    {/* Left Content Panel */}
                    <div className="flex-1 flex flex-col justify-center px-16 py-20">
                        <div className="max-w-[500px]">
                            <div className="mb-6">
                                <div className="w-12 h-1 mb-4" 
                                    style={{ backgroundColor: 'var(--primary-color, #ff6d00)' }}></div>
                                <h1 className="text-6xl font-black uppercase tracking-tight leading-none mb-8"
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                    }}>
                                    {data.title}
                                </h1>
                            </div>
                            
                            <div className="p-6 border-l-4"
                                style={{ 
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                                    borderLeftColor: 'var(--primary-color, #ff6d00)',
                                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                                }}>
                                <p className="text-lg font-medium leading-relaxed"
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                                    }}>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Panel */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-4 border-3 overflow-hidden"
                            style={{ borderColor: 'var(--primary-color, #ff6d00)' }}>
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Hazard Stripe Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-3 opacity-30"
                    style={{
                        background: `repeating-linear-gradient(
                            45deg,
                            var(--primary-color, #ff6d00),
                            var(--primary-color, #ff6d00) 10px,
                            var(--background-text, #1a1a1a) 10px,
                            var(--background-text, #1a1a1a) 20px
                        )`
                    }}>
                </div>

                {/* Industrial Grid Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(var(--stroke, rgba(0,0,0,0.15)) 1px, transparent 1px),
                                         linear-gradient(90deg, var(--stroke, rgba(0,0,0,0.15)) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}>
                </div>
            </div>
        </>
    );
};

export default ConcreteIndustrialImageTextSlide;