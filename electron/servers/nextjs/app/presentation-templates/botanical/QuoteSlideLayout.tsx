import React from 'react'
import * as z from "zod";

export const layoutId = 'botanical-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in botanical garden theme.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Nature\'s Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('In every walk with nature, one receives far more than they seek. The earth does not belong to us; we belong to the earth.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('John Muir').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Serene botanical garden with lush greenery") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Serene botanical garden with lush greenery"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const BotanicalQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #2d3a2e)' }}>
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
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}')`,
                    }}
                />

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(245, 250, 245, 0.85) 100%)'
                    }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-12 right-16 opacity-20">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                        <path d="M10 40C10 40 30 20 50 40C70 60 90 40 110 40" 
                              stroke="var(--primary-color, #558b2f)" 
                              strokeWidth="2" 
                              fill="none"/>
                        <circle cx="20" cy="35" r="3" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                        <circle cx="40" cy="50" r="2" fill="var(--primary-color, #558b2f)" opacity="0.4"/>
                        <circle cx="80" cy="45" r="2.5" fill="var(--primary-color, #558b2f)" opacity="0.5"/>
                    </svg>
                </div>

                <div className="absolute bottom-16 left-12 opacity-15">
                    <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
                        <path d="M5 30L15 20L25 35L35 25L45 40L55 30L65 45L75 35L85 50L95 40" 
                              stroke="var(--primary-color, #558b2f)" 
                              strokeWidth="1.5" 
                              fill="none"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Card Container */}
                        <div 
                            className="p-8 sm:p-12 rounded-lg"
                            style={{ 
                                background: 'var(--card-color, rgba(255, 255, 255, 0.75))',
                                border: '1px solid var(--stroke, rgba(85, 139, 47, 0.2))',
                                borderRadius: '12px'
                            }}
                        >
                            {/* Heading */}
                            <div className="space-y-4 mb-8">
                                <h1 
                                    style={{ color: "var(--background-text, #2d3a2e)" }} 
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                                >
                                    {slideData?.heading || "Nature's Wisdom"}
                                </h1>
                                {/* Decorative divider with leaf */}
                                <div className="flex items-center justify-center gap-3">
                                    <div 
                                        style={{ background: "var(--primary-color, #558b2f)" }} 
                                        className="w-16 h-px"
                                    />
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--primary-color, #558b2f)">
                                        <path d="M8 2C6 2 4 4 4 8C4 10 6 12 8 14C10 12 12 10 12 8C12 4 10 2 8 2Z" opacity="0.7"/>
                                    </svg>
                                    <div 
                                        style={{ background: "var(--primary-color, #558b2f)" }} 
                                        className="w-16 h-px"
                                    />
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="space-y-6">
                                {/* Quote Text */}
                                <blockquote 
                                    style={{ 
                                        color: "var(--background-text, #2d3a2e)",
                                        fontFamily: "var(--body-font-family, Lato)"
                                    }} 
                                    className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed italic"
                                >
                                    "{slideData?.quote || "In every walk with nature, one receives far more than they seek. The earth does not belong to us; we belong to the earth."}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex justify-center items-center space-x-4 pt-4">
                                    <div 
                                        style={{ background: "var(--primary-color, #558b2f)" }} 
                                        className="w-12 h-px opacity-60"
                                    />
                                    <cite 
                                        className="text-base sm:text-lg font-semibold not-italic"
                                        style={{ 
                                            color: "var(--primary-color, #558b2f)",
                                            fontFamily: "var(--heading-font-family, Bodoni Moda)"
                                        }}
                                    >
                                        {slideData?.author || 'John Muir'}
                                    </cite>
                                    <div 
                                        style={{ background: "var(--primary-color, #558b2f)" }} 
                                        className="w-12 h-px opacity-60"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotanicalQuoteSlide