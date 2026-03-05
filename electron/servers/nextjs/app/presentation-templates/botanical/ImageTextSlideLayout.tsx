import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Nature\'s Harmony'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Discover the tranquil beauty of our botanical collections, where every leaf tells a story and every bloom celebrates the wonder of nature\'s design.'),
    image: z.object({
        __image_url__: z.string().default('https://presenton-public-assets.s3.ap-southeast-1.amazonaws.com/replaceable_template_image.png'),
        __image_prompt__: z.string().min(10).max(50).default('Lush botanical garden with green foliage')
    }).default({
        __image_url__: 'https://presenton-public-assets.s3.ap-southeast-1.amazonaws.com/replaceable_template_image.png',
        __image_prompt__: 'Lush botanical garden with green foliage'
    })
});

export const layoutId = 'botanical-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, featuring botanical garden styling.';

const BotanicalImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Bodoni Moda')"
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(85,139,47,0.2))' }}
                                    className='w-[2px] h-4'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #2d3a2e)', fontFamily: "var(--body-font-family, 'Lato')" }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full items-center">
                    <div className="flex-1 px-16 py-20">
                        <div 
                            className="p-8 rounded-xl"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.75))',
                                border: '1px solid var(--stroke, rgba(85,139,47,0.15))',
                                borderRadius: '12px'
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div 
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: 'var(--primary-color, #558b2f)' }}
                                ></div>
                                <div 
                                    className="w-6 h-px"
                                    style={{ background: 'var(--primary-color, #558b2f)' }}
                                ></div>
                                <div 
                                    className="w-1 h-1 rounded-full"
                                    style={{ background: 'var(--primary-color, #558b2f)' }}
                                ></div>
                            </div>
                            
                            <h1 
                                className="text-4xl font-bold leading-tight mb-6"
                                style={{ 
                                    color: 'var(--background-text, #2d3a2e)',
                                    fontFamily: "var(--heading-font-family, 'Bodoni Moda')"
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            <div 
                                className="w-24 h-1 mb-6 rounded-full"
                                style={{ background: 'linear-gradient(90deg, var(--primary-color, #558b2f), rgba(85,139,47,0.3))' }}
                            ></div>
                            
                            <p 
                                className="text-lg leading-relaxed"
                                style={{ 
                                    color: 'var(--background-text, #2d3a2e)',
                                    fontFamily: "var(--body-font-family, 'Lato')"
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 px-8 py-16">
                        <div 
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                            style={{
                                border: '1px solid var(--stroke, rgba(85,139,47,0.15))',
                                borderRadius: '12px',
                                maxHeight: '480px'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-12 right-12 opacity-20"
                    style={{ color: 'var(--primary-color, #558b2f)' }}
                >
                    <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                        <path d="M20 10C25 15 35 20 40 30C45 40 35 50 30 60C25 70 35 80 40 90C45 100 35 110 30 115" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                        <circle cx="35" cy="25" r="2" fill="currentColor" opacity="0.8"/>
                        <circle cx="25" cy="45" r="1.5" fill="currentColor" opacity="0.7"/>
                        <circle cx="40" cy="75" r="2" fill="currentColor" opacity="0.8"/>
                        <circle cx="30" cy="95" r="1.5" fill="currentColor" opacity="0.7"/>
                    </svg>
                </div>
                
                <div 
                    className="absolute bottom-16 left-12 opacity-15"
                    style={{ color: 'var(--primary-color, #558b2f)' }}
                >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M30 5C35 10 40 15 45 25C40 35 35 40 30 30C25 40 20 35 15 25C20 15 25 10 30 5Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                        <path d="M30 15C32 20 35 22 38 25C35 28 32 30 30 25C28 30 25 28 22 25C25 22 28 20 30 15Z" fill="currentColor" opacity="0.3"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default BotanicalImageTextSlide;