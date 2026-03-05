import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).describe('The main heading of the slide').default('Embrace the Golden Hour'),
    description: z.string().min(10).max(200).describe('Supporting description text').default('Experience the warmth of innovation as we transform your business landscape with cutting-edge solutions that illuminate new possibilities and drive meaningful growth.'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x360'),
        __image_prompt__: z.string().min(10).max(50).default('Warm sunset over modern office building')
    }).default({
        __image_url__: 'https://placehold.co/640x360',
        __image_prompt__: 'Warm sunset over modern office building'
    })
});

export const layoutId = 'sunset-warm-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other with warm sunset theme styling';

const SunsetWarmImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Nunito)" }}>
                
                {/* Company Logo Header */}
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(230, 81, 0, 0.2))' }} className='w-[2px] h-4 rounded-full'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3d1e00)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-32 w-32 h-32 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)' }}></div>
                <div className="absolute bottom-24 left-16 w-24 h-24 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)' }}></div>

                {/* Main Content Split Layout */}
                <div className="flex w-full h-full items-center">
                    
                    {/* Left Text Content */}
                    <div className="flex-1 px-16 py-20 flex flex-col justify-center">
                        <div className="backdrop-blur-sm p-8 rounded-3xl" style={{ 
                            background: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: '20px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                        }}>
                            <h1 className="text-4xl font-bold leading-tight mb-6" style={{ 
                                color: 'var(--background-text, #3d1e00)',
                                fontFamily: 'var(--heading-font-family, Nunito)'
                            }}>
                                {data.title}
                            </h1>
                            
                            {/* Gradient Divider */}
                            <div className="h-1 mb-6 rounded-full" style={{
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #e65100) 50%, transparent 100%)',
                                width: '80px'
                            }}></div>
                            
                            <p className="text-lg leading-relaxed font-medium" style={{ 
                                color: 'var(--background-text, #3d1e00)',
                                fontFamily: 'var(--body-font-family, Nunito Sans)'
                            }}>
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="flex-1 px-8 py-16 flex items-center justify-center">
                        <div className="relative max-w-lg">
                            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{
                                backdropFilter: 'blur(8px)',
                                border: '2px solid rgba(255,255,255,0.3)'
                            }}>
                                <img
                                    src={data.image?.__image_url__}
                                    alt={data.image?.__image_prompt__}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                            
                            {/* Image Accent Glow */}
                            <div className="absolute -inset-4 rounded-3xl opacity-20 -z-10" style={{
                                background: 'linear-gradient(45deg, var(--primary-color, #e65100), transparent)',
                                filter: 'blur(20px)'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SunsetWarmImageTextSlide;