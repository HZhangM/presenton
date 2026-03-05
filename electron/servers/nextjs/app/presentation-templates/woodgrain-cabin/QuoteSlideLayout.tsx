import React from 'react'
import * as z from "zod";

export const layoutId = 'woodgrain-cabin-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in a rustic woodgrain cabin theme.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Cabin Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The mountains are calling and I must go. In every walk with nature, one receives far more than they seek.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('John Muir').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop"), 
        __image_prompt__: z.string().min(10).max(50).default("Mountain forest landscape with cabin") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop",
        __image_prompt__: "Mountain forest landscape with cabin"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const WoodgrainCabinQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Amatic SC)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--primary-text, #2a1a0e)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
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

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(42, 26, 14, 0.7)' }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 opacity-20">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--primary-color, #d4a76a)' }}>
                        <path d="M12 2L14.09 8.26L21 7L19.74 13.74L22 19L15.74 17.91L14 24L12 18L10 24L8.26 17.91L2 19L4.26 13.74L3 7L9.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="absolute bottom-8 left-8 opacity-15">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--primary-color, #d4a76a)' }}>
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 14 12.5 16 16.5 18C20.5 20 17 8 17 8Z" fill="currentColor"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                style={{ color: "var(--background-text, #f5efe6)", fontFamily: "var(--heading-font-family, Amatic SC)" }} 
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                            >
                                {slideData?.heading || 'Cabin Wisdom'}
                            </h1>
                            
                            {/* Decorative wood burn line */}
                            <div className="flex justify-center items-center space-x-2">
                                <div style={{ background: "var(--primary-color, #d4a76a)" }} className="w-12 h-0.5 opacity-60"></div>
                                <div style={{ color: "var(--primary-color, #d4a76a)" }} className="text-lg opacity-80">✦</div>
                                <div style={{ background: "var(--primary-color, #d4a76a)" }} className="w-12 h-0.5 opacity-60"></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div 
                            className="p-8 mx-8 rounded-lg border"
                            style={{ 
                                background: "var(--card-color, rgba(255, 250, 240, 0.9))",
                                border: "1px solid rgba(139,90,43,0.15)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-10 h-10 opacity-60"
                                    style={{ color: "var(--primary-color, #d4a76a)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                style={{ 
                                    color: "var(--primary-text, #2a1a0e)",
                                    fontFamily: "var(--body-font-family, Cabin)"
                                }} 
                                className="text-2xl lg:text-3xl font-medium leading-relaxed italic mb-6"
                            >
                                "{slideData?.quote || 'The mountains are calling and I must go. In every walk with nature, one receives far more than they seek.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-3">
                                <div style={{ background: "var(--primary-color, #d4a76a)" }} className="w-8 h-px opacity-50"></div>
                                <cite 
                                    className="text-lg font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #d4a76a)",
                                        fontFamily: "var(--heading-font-family, Amatic SC)"
                                    }}
                                >
                                    {slideData?.author || 'John Muir'}
                                </cite>
                                <div style={{ background: "var(--primary-color, #d4a76a)" }} className="w-8 h-px opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WoodgrainCabinQuoteSlide