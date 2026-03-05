import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).default('Building Your Dream Project'),
    description: z.string().min(1).max(200).default('Every great project starts with a solid foundation and the right materials. Here are the key elements that will guide us through this journey together.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).default('Quality Materials'),
        description: z.string().min(1).max(100).default('Using only the finest locally sourced wood and sustainable materials.')
    })).min(2).max(4).default([
        {
            title: 'Quality Materials',
            description: 'Using only the finest locally sourced wood and sustainable materials for lasting results.'
        },
        {
            title: 'Skilled Craftsmanship',
            description: 'Our experienced team brings decades of traditional woodworking expertise to every detail.'
        },
        {
            title: 'Custom Design',
            description: 'Tailored solutions that perfectly match your vision and functional requirements.'
        },
        {
            title: 'Timeless Beauty',
            description: 'Creating pieces that will be cherished for generations while maintaining rustic charm.'
        }
    ])
});

export const layoutId = 'woodgrain-cabin-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in a rustic cabin theme.';

const WoodgrainCabinContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Amatic SC)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] h-[40px] object-contain flex-shrink-0" />}
                                <div style={{ backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }} className='w-[2px] h-4 flex-shrink-0'></div>
                                {(data as any)?.__companyName__ && <span className="text-sm font-semibold flex-1 min-w-0" style={{ color: 'var(--background-text, #f5efe6)', fontFamily: 'var(--body-font-family, Cabin)' }}>
                                    {(data as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-8 opacity-20">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M30 5L35 20H50L38 30L43 45L30 37L17 45L22 30L10 20H25L30 5Z" fill="var(--primary-color, #d4a76a)" stroke="var(--stroke, rgba(212, 167, 106, 0.3))" strokeWidth="1"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 left-4 opacity-15">
                    <div style={{ 
                        width: '120px', 
                        height: '2px', 
                        background: 'var(--primary-color, #d4a76a)',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '12px',
                            height: '12px',
                            background: 'var(--background-color, transparent)',
                            border: '2px solid var(--primary-color, #d4a76a)'
                        }}></div>
                    </div>
                </div>

                <div className="px-8 py-6 h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4">
                        <h1 className="text-5xl font-bold mb-3" style={{ 
                            color: 'var(--background-text, #f5efe6)',
                            fontFamily: 'var(--heading-font-family, Amatic SC)'
                        }}>
                            {title}
                        </h1>
                        
                        <p className="text-lg mb-4" style={{ 
                            color: 'var(--background-text, #f5efe6)',
                            fontFamily: 'var(--body-font-family, Cabin)',
                            lineHeight: '1.5'
                        }}>
                            {description}
                        </p>

                        <div style={{
                            width: '100%',
                            height: '1px',
                            background: 'var(--primary-color, #d4a76a)',
                            position: 'relative',
                            margin: '16px 0'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '16px',
                                color: 'var(--primary-color, #d4a76a)',
                                background: 'var(--background-color, transparent)',
                                padding: '0 8px'
                            }}>×</div>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {keyPoints?.map((point, index) => (
                                <div key={index} className="flex flex-col">
                                    <div 
                                        className="p-4 h-full flex flex-col"
                                        style={{
                                            background: 'rgba(255,250,240,0.92)',
                                            border: '1px solid rgba(139,90,43,0.15)',
                                            borderRadius: '8px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold mb-2 flex-shrink-0" style={{ 
                                            color: 'var(--primary-text, #2a1a0e)',
                                            fontFamily: 'var(--heading-font-family, Amatic SC)'
                                        }}>
                                            {point.title}
                                        </h3>
                                        <p className="text-sm flex-1 min-h-0" style={{ 
                                            color: 'var(--primary-text, #2a1a0e)',
                                            fontFamily: 'var(--body-font-family, Cabin)',
                                            lineHeight: '1.4'
                                        }}>
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WoodgrainCabinContentSlide;