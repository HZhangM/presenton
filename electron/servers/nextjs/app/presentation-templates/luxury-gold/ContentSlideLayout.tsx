import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(5).max(40).default('PREMIUM SOLUTIONS'),
    description: z.string().min(10).max(200).default('Experience unparalleled excellence through our curated selection of luxury services designed to exceed the highest expectations of discerning clientele.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('EXCLUSIVE ACCESS'),
        description: z.string().min(10).max(100).default('Premium members enjoy priority access to limited collections and personalized consultation services.')
    })).min(2).max(4).default([
        {
            title: 'BESPOKE CRAFTSMANSHIP',
            description: 'Each piece is meticulously handcrafted by master artisans using the finest materials and time-honored techniques.'
        },
        {
            title: 'HERITAGE COLLECTION',
            description: 'Discover rare treasures with provenance and authenticity guaranteed by our expert curators.'
        },
        {
            title: 'CONCIERGE SERVICE',
            description: 'Dedicated personal advisors available 24/7 to ensure an exceptional luxury experience.'
        }
    ])
});

export const layoutId = 'luxury-gold-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in luxury gold theme';

const LuxuryGoldContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cinzel)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[48px] object-contain" />}
                                <span style={{ backgroundColor: 'var(--stroke, rgba(212,168,67,0.3))' }} className='w-[1px] h-5'></span>
                                {(data as any)?.__companyName__ && <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--background-text, #e8d5b0)', fontFamily: 'var(--body-font-family, EB Garamond)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                              fill="var(--primary-color, #d4a843)" stroke="var(--primary-color, #d4a843)" strokeWidth="0.5"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8 w-32 h-0.5 opacity-20" style={{ background: 'linear-gradient(90deg, var(--primary-color, #d4a843), transparent)' }}></div>

                <div className="px-16 py-12 h-full flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-6 tracking-wider" style={{ 
                            color: 'var(--background-text, #e8d5b0)', 
                            fontFamily: 'var(--heading-font-family, Cinzel)',
                            background: 'linear-gradient(135deg, var(--background-text, #e8d5b0) 0%, var(--primary-color, #d4a843) 50%, var(--background-text, #e8d5b0) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {title}
                        </h1>
                        <div className="w-24 h-0.5 mb-8" style={{ background: 'var(--primary-color, #d4a843)' }}></div>
                        <p className="text-xl leading-relaxed max-w-4xl" style={{ 
                            color: 'var(--background-text, #e8d5b0)', 
                            fontFamily: 'var(--body-font-family, EB Garamond)' 
                        }}>
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-4">
                        {keyPoints?.map((point, index) => (
                            <div key={index} className="p-5" style={{
                                border: '1px solid var(--stroke, rgba(212,168,67,0.3))', 
                                background: 'var(--card-color, rgba(212,168,67,0.06))', 
                                borderRadius: '4px' 
                            }}>
                                <h3 className="text-lg font-bold mb-4 tracking-wide" style={{ 
                                    color: 'var(--primary-color, #d4a843)', 
                                    fontFamily: 'var(--heading-font-family, Cinzel)' 
                                }}>
                                    {point.title}
                                </h3>
                                <p className="text-base leading-relaxed" style={{ 
                                    color: 'var(--background-text, #e8d5b0)', 
                                    fontFamily: 'var(--body-font-family, EB Garamond)' 
                                }}>
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LuxuryGoldContentSlide;