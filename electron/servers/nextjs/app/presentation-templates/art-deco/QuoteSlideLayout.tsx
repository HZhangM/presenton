import React from 'react'
import * as z from "zod";

export const layoutId = 'art-deco-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in Art Deco style.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Gilded Words').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The way to get started is to quit talking and begin doing. Dreams don\'t work unless you do.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Walt Disney').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1520637836862-4d197d17c92a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Art deco architecture with golden lighting")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1520637836862-4d197d17c92a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Art deco architecture with golden lighting"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const QuoteSlideLayout: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poiret One)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-light tracking-widest" style={{ color: 'var(--primary-color, #d4af37)', fontFamily: "var(--heading-font-family, Poiret One)" }}>
                                {(slideData as any)?.__companyName__ || 'COMPANY'}
                            </span>}
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

                {/* Art Deco Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(10, 42, 42, 0.85) 0%, rgba(10, 42, 42, 0.7) 50%, rgba(10, 42, 42, 0.85) 100%)'
                    }}
                />

                {/* Decorative Art Deco Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 opacity-20" style={{ color: 'var(--primary-color, #d4af37)' }}>
                    <svg viewBox="0 0 64 64" fill="currentColor">
                        <path d="M32 8 L48 24 L32 40 L16 24 Z" />
                        <path d="M32 16 L40 24 L32 32 L24 24 Z" opacity="0.6" />
                    </svg>
                </div>

                <div className="absolute bottom-8 right-8 w-20 h-20 opacity-15" style={{ color: 'var(--primary-color, #d4af37)' }}>
                    <svg viewBox="0 0 80 80" fill="currentColor">
                        <path d="M40 0 L60 20 L80 40 L60 60 L40 80 L20 60 L0 40 L20 20 Z" />
                        <path d="M40 10 L55 25 L70 40 L55 55 L40 70 L25 55 L10 40 L25 25 Z" opacity="0.4" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-20 px-16 py-12 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        {/* Heading with Art Deco styling */}
                        <div className="space-y-6">
                            <h1 
                                className="text-3xl lg:text-4xl font-light tracking-widest uppercase leading-tight"
                                style={{ 
                                    color: "var(--primary-color, #d4af37)",
                                    fontFamily: "var(--heading-font-family, Poiret One)"
                                }}
                            >
                                {slideData?.heading || 'Gilded Words'}
                            </h1>
                            
                            {/* Art Deco divider */}
                            <div className="flex justify-center items-center space-x-4">
                                <div className="w-12 h-px" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                                <div className="w-3 h-3 rotate-45 border" style={{ borderColor: 'var(--primary-color, #d4af37)' }}></div>
                                <div className="w-24 h-px" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                                <div className="w-3 h-3 rotate-45 border" style={{ borderColor: 'var(--primary-color, #d4af37)' }}></div>
                                <div className="w-12 h-px" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Angular corner brackets */}
                            <div className="relative">
                                <div className="absolute top-0 left-0 w-8 h-8 opacity-60" style={{ color: 'var(--primary-color, #d4af37)' }}>
                                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M8 8 L8 24 M8 8 L24 8" />
                                    </svg>
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 opacity-60" style={{ color: 'var(--primary-color, #d4af37)' }}>
                                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M24 8 L24 24 M24 8 L8 8" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    className="text-2xl lg:text-3xl font-light leading-relaxed px-12 py-6"
                                    style={{ 
                                        color: "var(--background-text, #e8d8b8)",
                                        fontFamily: "var(--body-font-family, 'Josefin Sans')",
                                        letterSpacing: '0.02em'
                                    }}
                                >
                                    "{slideData?.quote || 'The way to get started is to quit talking and begin doing. Dreams don\'t work unless you do.'}"
                                </blockquote>

                                <div className="absolute bottom-0 left-0 w-8 h-8 opacity-60" style={{ color: 'var(--primary-color, #d4af37)' }}>
                                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M8 24 L8 8 M8 24 L24 24" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 opacity-60" style={{ color: 'var(--primary-color, #d4af37)' }}>
                                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M24 24 L24 8 M24 24 L8 24" />
                                    </svg>
                                </div>
                            </div>

                            {/* Author with Art Deco styling */}
                            <div className="flex justify-center items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                                    <div className="w-16 h-px" style={{ backgroundColor: 'var(--stroke, rgba(212, 175, 55, 0.3))' }}></div>
                                </div>
                                
                                <cite 
                                    className="text-lg font-light tracking-widest uppercase not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #d4af37)",
                                        fontFamily: "var(--heading-font-family, Poiret One)"
                                    }}
                                >
                                    {slideData?.author || 'Walt Disney'}
                                </cite>
                                
                                <div className="flex items-center space-x-2">
                                    <div className="w-16 h-px" style={{ backgroundColor: 'var(--stroke, rgba(212, 175, 55, 0.3))' }}></div>
                                    <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Art Deco border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                    <div className="flex-1 h-full" style={{ backgroundColor: 'var(--primary-color, #d4af37)' }}></div>
                    <div className="w-px h-full bg-black opacity-30"></div>
                    <div className="flex-1 h-full" style={{ backgroundColor: 'var(--stroke, rgba(212, 175, 55, 0.3))' }}></div>
                </div>
            </div>
        </>
    )
}

export default QuoteSlideLayout