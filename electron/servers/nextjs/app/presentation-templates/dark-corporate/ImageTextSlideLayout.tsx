import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('Main slide title').default('Digital Transformation'),
    description: z.string().min(20).max(200).describe('Supporting description text').default('Streamline operations and boost efficiency through innovative technology solutions that drive measurable business outcomes.'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Modern office with digital screens and data")
    }).default({
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Modern office with digital screens and data"
    })
});

export const layoutId = 'dark-corporate-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const DarkCorporateImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
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
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] h-[50px] object-contain" />}
                                <div 
                                    style={{ backgroundColor: 'var(--stroke, rgba(99,102,241,0.2))' }}
                                    className='w-[2px] h-4'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-semibold" 
                                        style={{ color: 'var(--background-text, #e5e7eb)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, var(--primary-color, #6366f1) 0%, transparent 70%)' }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-24 h-24 opacity-5"
                    style={{ 
                        background: 'linear-gradient(45deg, var(--primary-color, #6366f1) 0%, transparent 100%)',
                        clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                    }}
                />

                <div className="flex w-full h-full">
                    {/* Left Content Side */}
                    <div className="flex-1 flex flex-col justify-center px-16 py-20">
                        <div 
                            className="w-12 h-1 mb-6 rounded"
                            style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                        />
                        
                        <h1 
                            className="text-5xl font-bold leading-tight mb-6 tracking-tight"
                            style={{ color: 'var(--background-text, #e5e7eb)' }}
                        >
                            {data.title}
                        </h1>
                        
                        <div 
                            className="p-6 rounded-lg border-l-4"
                            style={{ 
                                background: 'var(--card-color, rgba(99, 102, 241, 0.08))',
                                border: '1px solid var(--stroke, rgba(99,102,241,0.2))',
                                borderLeftColor: 'var(--primary-color, #6366f1)'
                            }}
                        >
                            <p 
                                className="text-lg leading-relaxed font-medium"
                                style={{ color: 'var(--background-text, #e5e7eb)' }}
                            >
                                {data.description}
                            </p>
                        </div>

                        {/* Accent indicator */}
                        <div className="flex items-center mt-8 gap-3">
                            <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                            />
                            <div 
                                className="w-1 h-1 rounded-full opacity-50"
                                style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                            />
                            <div 
                                className="w-1 h-1 rounded-full opacity-30"
                                style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                            />
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="flex-1 flex items-center justify-center p-12">
                        <div 
                            className="w-full max-w-lg h-80 rounded-lg overflow-hidden relative"
                            style={{ 
                                border: '1px solid var(--stroke, rgba(99,102,241,0.2))'
                            }}
                        >
                            <img
                                src={data.image?.__image_url__}
                                alt={data.image?.__image_prompt__}
                                className="w-full h-full object-cover"
                            />
                            <div 
                                className="absolute inset-0"
                                style={{ 
                                    background: 'linear-gradient(45deg, transparent 0%, rgba(99,102,241,0.1) 100%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DarkCorporateImageTextSlide;