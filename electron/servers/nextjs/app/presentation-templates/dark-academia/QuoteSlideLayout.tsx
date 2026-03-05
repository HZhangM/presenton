import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-academia-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A scholarly quote slide with dark academia aesthetics, featuring ornamental flourishes and rich typography'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Words of Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Albert Camus').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Old library with leather books and warm lighting") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Old library with leather books and warm lighting"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const QuoteSlideLayout: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Spectral)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8dcc8)' }}>
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
                    style={{ backgroundColor: '#1a0f08', opacity: 0.75 }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 opacity-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: 'var(--primary-color, #c8a882)' }}>
                        <path d="M16 4L17.5 11.5L25 10L17.5 16L25 22L17.5 20.5L16 28L14.5 20.5L7 22L14.5 16L7 10L14.5 11.5L16 4Z" stroke="currentColor" strokeWidth="1" fill="currentColor"/>
                    </svg>
                </div>
                
                <div className="absolute bottom-8 right-8 opacity-15">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ color: 'var(--primary-color, #c8a882)' }}>
                        <path d="M20 6L21.5 17.5L33 16L21.5 20L33 24L21.5 22.5L20 34L18.5 22.5L7 24L18.5 20L7 16L18.5 17.5L20 6Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 sm:px-20 lg:px-24 pt-16 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                style={{ color: "var(--background-text, #e8dcc8)" }} 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                            >
                                {slideData?.heading || 'Words of Wisdom'}
                            </h1>
                            
                            {/* Ornamental divider */}
                            <div className="flex items-center justify-center gap-4">
                                <div 
                                    className="w-16 h-px" 
                                    style={{ background: "var(--primary-color, #c8a882)" }}
                                ></div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--primary-color, #c8a882)' }}>
                                    <path d="M8 2L8.5 7.5L14 7L8.5 8L14 9L8.5 8.5L8 14L7.5 8.5L2 9L7.5 8L2 7L7.5 7.5L8 2Z" fill="currentColor"/>
                                </svg>
                                <div 
                                    className="w-16 h-px" 
                                    style={{ background: "var(--primary-color, #c8a882)" }}
                                ></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Opening Quote Mark */}
                            <div className="flex justify-start">
                                <span 
                                    className="text-6xl font-bold leading-none opacity-60 -mb-4"
                                    style={{ color: "var(--primary-color, #c8a882)" }}
                                >
                                    "
                                </span>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                style={{ 
                                    color: "var(--background-text, #e8dcc8)",
                                    fontFamily: "var(--body-font-family, Spectral)"
                                }} 
                                className="text-2xl sm:text-3xl lg:text-3xl font-medium leading-relaxed italic text-left max-w-4xl mx-auto"
                            >
                                {slideData?.quote || 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.'}
                            </blockquote>

                            {/* Closing Quote Mark */}
                            <div className="flex justify-end">
                                <span 
                                    className="text-6xl font-bold leading-none opacity-60 -mt-4"
                                    style={{ color: "var(--primary-color, #c8a882)" }}
                                >
                                    "
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4 mt-8">
                                <div 
                                    className="w-12 h-px" 
                                    style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
                                ></div>
                                <cite 
                                    className="text-base sm:text-lg font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #c8a882)",
                                        fontFamily: "var(--body-font-family, Spectral)"
                                    }}
                                >
                                    — {slideData?.author || 'Albert Camus'}
                                </cite>
                                <div 
                                    className="w-12 h-px" 
                                    style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1" 
                    style={{ 
                        background: "linear-gradient(90deg, transparent 0%, var(--stroke, rgba(200, 168, 130, 0.25)) 50%, transparent 100%)" 
                    }}
                ></div>
            </div>
        </>
    )
}

export default QuoteSlideLayout