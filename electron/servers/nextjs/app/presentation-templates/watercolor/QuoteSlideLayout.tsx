import React from 'react'
import * as z from "zod";

export const layoutId = 'watercolor-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Words of Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Success is not final, failure is not fatal: it is the courage to continue that counts. The future belongs to those who believe in the beauty of their dreams.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Winston Churchill').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Soft watercolor landscape painting") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        __image_prompt__: 'Inspirational mountain landscape with dramatic sky'
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const WatercolorQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-medium" style={{ color: 'var(--background-text, #2d2d3d)', fontFamily: 'var(--body-font-family, Lora)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(124,92,191,0.1) 100%)'
                    }}
                />

                {/* Decorative watercolor elements */}
                <div 
                    className="absolute top-16 right-20 w-64 h-64 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)',
                        filter: 'blur(40px)'
                    }}
                />
                <div 
                    className="absolute bottom-20 left-16 w-80 h-80 rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.4) 0%, transparent 60%)',
                        filter: 'blur(60px)'
                    }}
                />

                {/* Main Content Card */}
                <div className="relative z-20 flex items-center justify-center h-full px-16 py-24">
                    <div 
                        className="max-w-4xl mx-auto text-center p-12 rounded-3xl"
                        style={{
                            backdropFilter: 'blur(12px)',
                            background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                        }}
                    >
                        {/* Heading */}
                        <h1 
                            className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                            style={{ 
                                color: 'var(--background-text, #2d2d3d)',
                                fontFamily: 'var(--heading-font-family, Playfair Display)'
                            }}
                        >
                            {slideData?.heading || 'Words of Wisdom'}
                        </h1>

                        {/* Decorative divider */}
                        <div 
                            className="w-24 h-px mx-auto mb-12 opacity-50"
                            style={{
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #7c5cbf) 50%, transparent 100%)'
                            }}
                        />

                        {/* Quote */}
                        <blockquote 
                            className="text-2xl lg:text-3xl font-medium mb-10 leading-relaxed italic relative"
                            style={{ 
                                color: 'var(--background-text, #2d2d3d)',
                                fontFamily: 'var(--body-font-family, Lora)'
                            }}
                        >
                            <span 
                                className="text-6xl absolute -top-4 -left-4 opacity-30"
                                style={{ color: 'var(--primary-color, #7c5cbf)' }}
                            >
                                "
                            </span>
                            {slideData?.quote || 'Success is not final, failure is not fatal: it is the courage to continue that counts. The future belongs to those who believe in the beauty of their dreams.'}
                            <span 
                                className="text-6xl absolute -bottom-8 -right-4 opacity-30"
                                style={{ color: 'var(--primary-color, #7c5cbf)' }}
                            >
                                "
                            </span>
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center space-x-6">
                            <div 
                                className="w-20 h-px opacity-40"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #7c5cbf) 100%)'
                                }}
                            />
                            <cite 
                                className="text-lg font-semibold not-italic"
                                style={{ 
                                    color: 'var(--primary-color, #7c5cbf)',
                                    fontFamily: 'var(--body-font-family, Lora)'
                                }}
                            >
                                {slideData?.author || 'Winston Churchill'}
                            </cite>
                            <div 
                                className="w-20 h-px opacity-40"
                                style={{
                                    background: 'linear-gradient(90deg, var(--primary-color, #7c5cbf) 0%, transparent 100%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatercolorQuoteSlide