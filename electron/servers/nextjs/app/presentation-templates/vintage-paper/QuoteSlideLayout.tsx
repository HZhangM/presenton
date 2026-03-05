import React from 'react'
import * as z from "zod";

export const layoutId = 'vintage-paper-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in vintage paper style.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Timeless Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The pen is mightier than the sword, and considerably easier to write with.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Marty Feldman').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("vintage library with old books and warm lighting") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "vintage library with old books and warm lighting"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const VintagePaperQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #3a2e1e)', fontFamily: "var(--heading-font-family, 'Playfair Display')" }}>
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
                    style={{ backgroundColor: 'rgba(245, 230, 200, 0.85)' }}
                ></div>

                {/* Decorative vintage paper texture overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)`,
                }}></div>

                {/* Ornamental corner flourishes */}
                <div className="absolute top-8 left-8 opacity-30" style={{ color: 'var(--primary-color, #8b4513)' }}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                        <path d="M10 10 Q30 10 30 30 Q30 10 50 10 Q30 10 30 30 Q30 50 10 50 Q30 50 30 30" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <circle cx="30" cy="30" r="3" fill="currentColor"/>
                    </svg>
                </div>

                <div className="absolute top-8 right-8 opacity-30" style={{ color: 'var(--primary-color, #8b4513)', transform: 'scaleX(-1)' }}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                        <path d="M10 10 Q30 10 30 30 Q30 10 50 10 Q30 10 30 30 Q30 50 10 50 Q30 50 30 30" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <circle cx="30" cy="30" r="3" fill="currentColor"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-20 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-10 max-w-4xl mx-auto">

                        {/* Heading with drop cap style */}
                        <div className="space-y-6">
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #3a2e1e)", 
                                    fontFamily: "var(--heading-font-family, 'Playfair Display')" 
                                }} 
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                            >
                                {slideData?.heading || 'Timeless Wisdom'}
                            </h1>
                            
                            {/* Ornamental divider */}
                            <div className="flex items-center justify-center space-x-4">
                                <div style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }} className="w-16 h-px"></div>
                                <div style={{ color: "var(--primary-color, #8b4513)" }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z"/>
                                    </svg>
                                </div>
                                <div style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }} className="w-16 h-px"></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Quote Text with vintage styling */}
                            <blockquote 
                                style={{ 
                                    color: "var(--background-text, #3a2e1e)", 
                                    fontFamily: "var(--body-font-family, 'Crimson Text')" 
                                }} 
                                className="text-2xl lg:text-3xl font-normal leading-relaxed italic relative"
                            >
                                {/* Opening quotation mark */}
                                <span className="absolute -left-4 -top-2 text-6xl opacity-40" style={{ color: "var(--primary-color, #8b4513)", fontFamily: "var(--heading-font-family, 'Playfair Display')" }}>"</span>
                                {slideData?.quote || 'The pen is mightier than the sword, and considerably easier to write with.'}
                                <span className="absolute -right-2 -bottom-8 text-6xl opacity-40" style={{ color: "var(--primary-color, #8b4513)", fontFamily: "var(--heading-font-family, 'Playfair Display')" }}>"</span>
                            </blockquote>

                            {/* Author with ornamental styling */}
                            <div className="flex justify-center items-center space-x-6 pt-4">
                                <div style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }} className="w-12 h-px"></div>
                                <cite 
                                    className="text-xl font-semibold not-italic tracking-wide"
                                    style={{ 
                                        color: "var(--primary-color, #8b4513)", 
                                        fontFamily: "var(--heading-font-family, 'Playfair Display')" 
                                    }}
                                >
                                    {slideData?.author || 'Marty Feldman'}
                                </cite>
                                <div style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }} className="w-12 h-px"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom vintage border */}
                <div className="absolute bottom-0 left-0 right-0 h-1" 
                     style={{ 
                        background: 'linear-gradient(to right, transparent, var(--stroke, rgba(139, 69, 19, 0.25)) 20%, var(--stroke, rgba(139, 69, 19, 0.25)) 80%, transparent)' 
                     }}>
                </div>
            </div>
        </>
    )
}

export default VintagePaperQuoteSlide