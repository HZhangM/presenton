import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(10).max(40).describe('Main editorial headline').default('Breaking Industry News'),
    description: z.string().min(20).max(200).describe('Editorial body content').default('Revolutionary changes are reshaping the landscape as industry leaders adapt to new market demands and consumer expectations in this unprecedented era of transformation.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Professional business meeting in modern office')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Professional business meeting in modern office'
    })
});

export const layoutId = 'magazine-editorial-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const MagazineEditorialImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <div className="w-[3px] h-6" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
                                {(data as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex w-full h-full">
                    <div className="flex-1 px-12 py-24 flex flex-col justify-center" style={{ borderRight: '2px solid var(--stroke, rgba(0, 0, 0, 0.15))' }}>
                        <div className="mb-8">
                            <span className="text-[120px] font-bold leading-none opacity-20" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>01</span>
                        </div>
                        
                        <h1 className="text-[48px] font-normal leading-[1.1] mb-6" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                            {data.title}
                        </h1>
                        
                        <div className="w-16 h-[3px] mb-8" style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
                        
                        <p className="text-lg leading-[1.6] font-normal" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                            {data.description}
                        </p>
                        
                        <div className="w-full h-[3px] mt-12" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                        <div className="absolute inset-8" style={{ border: '2px solid var(--stroke, rgba(0, 0, 0, 0.15))', background: 'var(--card-color, rgba(0, 0, 0, 0.03))' }}>
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-10" style={{ background: 'var(--primary-color, #e53935)', transform: 'translate(-50%, -50%) rotate(45deg)' }}></div>
                
                <div className="absolute bottom-8 left-12 right-12 h-[2px]" style={{ backgroundColor: 'var(--background-text, #1a1a1a)', opacity: 0.3 }}></div>
            </div>
        </>
    );
};

export default MagazineEditorialImageTextSlide;