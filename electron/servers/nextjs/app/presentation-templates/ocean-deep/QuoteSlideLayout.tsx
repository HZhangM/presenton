import React from 'react'
import * as z from "zod";

export const layoutId = 'ocean-deep-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A deep ocean themed slide featuring a prominent quote with author attribution and background image with flowing wave elements.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Ocean of Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Just as the ocean never stops moving, neither should your dreams. The depths hold treasures for those brave enough to dive deep and explore the unknown waters of possibility.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Jacques Cousteau').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Deep ocean waves with sunlight rays") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Deep ocean waves with sunlight rays"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const OceanDeepQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Raleway)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #c8e0f0)' }}>
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
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}')`,
                    }}
                />

                {/* Ocean gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.8) 0%, rgba(0, 188, 212, 0.3) 50%, rgba(10, 22, 40, 0.9) 100%)'
                    }}
                ></div>

                {/* Decorative wave elements */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1280 128" fill="none">
                        <path d="M0 64C320 32 640 96 1280 64V0H0V64Z" fill="var(--primary-color, #00bcd4)" opacity="0.3"/>
                        <path d="M0 96C320 64 640 128 1280 96V32H0V96Z" fill="var(--primary-color, #00bcd4)" opacity="0.2"/>
                    </svg>
                </div>

                {/* Floating bubble decorations */}
                <div className="absolute top-20 right-16 w-8 h-8 rounded-full opacity-30" style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute top-32 right-32 w-4 h-4 rounded-full opacity-20" style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute bottom-40 left-20 w-6 h-6 rounded-full opacity-25" style={{ background: 'var(--primary-color, #00bcd4)' }}></div>
                <div className="absolute bottom-60 left-40 w-3 h-3 rounded-full opacity-30" style={{ background: 'var(--primary-color, #00bcd4)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 style={{ color: "var(--background-text, #c8e0f0)" }} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                {slideData?.heading || 'Ocean of Wisdom'}
                            </h1>
                            {/* Flowing wave divider */}
                            <div className="flex justify-center">
                                <svg width="80" height="8" viewBox="0 0 80 8" fill="none">
                                    <path d="M0 4C20 0 40 8 80 4" stroke="var(--primary-color, #00bcd4)" strokeWidth="2" opacity="0.8"/>
                                </svg>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote container with ocean theme card styling */}
                            <div 
                                className="p-8 rounded-3xl backdrop-blur-lg"
                                style={{
                                    border: '1px solid rgba(0,188,212,0.15)',
                                    background: 'rgba(0,188,212,0.06)',
                                    backdropFilter: 'blur(8px)'
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-6">
                                    <svg
                                        className="w-12 h-12 opacity-80" 
                                        style={{ color: "var(--primary-color, #00bcd4)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    style={{ 
                                        color: "var(--background-text, #c8e0f0)",
                                        fontFamily: "var(--body-font-family, 'Open Sans')"
                                    }} 
                                    className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed italic mb-6"
                                >
                                    "{slideData?.quote || 'Just as the ocean never stops moving, neither should your dreams. The depths hold treasures for those brave enough to dive deep and explore the unknown waters of possibility.'}"
                                </blockquote>

                                {/* Author with flowing design */}
                                <div className="flex justify-center items-center space-x-4">
                                    <svg width="48" height="2" viewBox="0 0 48 2" fill="none">
                                        <path d="M0 1C12 0.5 24 1.5 48 1" stroke="var(--primary-color, #00bcd4)" strokeWidth="1" opacity="0.6"/>
                                    </svg>
                                    <cite 
                                        className="text-base sm:text-lg font-semibold not-italic"
                                        style={{ color: "var(--primary-color, #00bcd4)" }}
                                    >
                                        {slideData?.author || 'Jacques Cousteau'}
                                    </cite>
                                    <svg width="48" height="2" viewBox="0 0 48 2" fill="none">
                                        <path d="M48 1C36 0.5 24 1.5 0 1" stroke="var(--primary-color, #00bcd4)" strokeWidth="1" opacity="0.6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 w-full h-8 opacity-40">
                    <svg className="w-full h-full" viewBox="0 0 1280 32" fill="none">
                        <path d="M0 16C320 8 640 24 1280 16V32H0V16Z" fill="var(--stroke, rgba(0,188,212,0.25))"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default OceanDeepQuoteSlide