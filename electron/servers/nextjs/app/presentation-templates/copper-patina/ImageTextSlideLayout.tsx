import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Copper Innovation'),
    description: z.string().min(1).max(200).describe('Supporting description text').default('Discover the timeless beauty of aged copper surfaces with verdigris patina. Our industrial design approach combines weathered elegance with modern functionality.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('aged copper surface with green patina texture')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'aged copper surface with green patina texture'
    })
});

export const layoutId = 'copper-patina-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const CopperPatinaImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Abril Fatface)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                                <div 
                                    className="w-[2px] h-4"
                                    style={{ backgroundColor: 'var(--stroke, rgba(184,115,51,0.25))' }}
                                ></div>
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold"
                                        style={{ 
                                            color: 'var(--background-text, #f0e8d8)',
                                            fontFamily: 'var(--body-font-family, Fira Sans)'
                                        }}
                                    >
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative rivet accents */}
                <div 
                    className="absolute top-6 right-6 w-3 h-3 rounded-full opacity-30"
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>
                <div 
                    className="absolute bottom-6 left-6 w-3 h-3 rounded-full opacity-30"
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>

                {/* Decorative copper line */}
                <div 
                    className="absolute top-20 left-0 right-0 h-px opacity-20"
                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                ></div>

                <div className="flex w-full h-full">
                    {/* Image Side */}
                    <div className="w-1/2 relative">
                        <img
                            src={data.image?.__image_url__}
                            alt={data.image?.__image_prompt__}
                            className="w-full h-full object-cover"
                        />
                        {/* Industrial overlay accent */}
                        <div 
                            className="absolute top-0 right-0 w-px h-full opacity-20"
                            style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                        ></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-1/2 flex items-center justify-center p-12">
                        <div 
                            className="max-w-md p-8 rounded-md"
                            style={{ 
                                background: 'var(--card-color, rgba(255,245,230,0.8))',
                                border: '1px solid var(--stroke, rgba(184,115,51,0.25))',
                                borderRadius: '6px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                        >
                            <h1 
                                className="text-4xl font-bold leading-tight mb-4"
                                style={{ 
                                    color: 'var(--primary-text, #1a1a1a)',
                                    fontFamily: 'var(--heading-font-family, Abril Fatface)'
                                }}
                            >
                                {data.title}
                            </h1>
                            
                            {/* Decorative divider */}
                            <div className="flex items-center mb-6">
                                <div 
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                                <div 
                                    className="flex-1 h-px mx-3"
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                                <div 
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: 'var(--primary-color, #b87333)' }}
                                ></div>
                            </div>
                            
                            <p 
                                className="text-lg leading-relaxed font-medium"
                                style={{ 
                                    color: 'var(--primary-text, #1a1a1a)',
                                    fontFamily: 'var(--body-font-family, Fira Sans)'
                                }}
                            >
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopperPatinaImageTextSlide;