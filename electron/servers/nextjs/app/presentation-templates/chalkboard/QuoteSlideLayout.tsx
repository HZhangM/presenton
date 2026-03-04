import React from 'react'
import * as z from "zod";

export const layoutId = 'chalkboard-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A chalkboard-themed slide featuring a prominent quote with author attribution and background image.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Words of Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Education is the most powerful weapon which you can use to change the world.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Nelson Mandela').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3'),
        __image_prompt__: z.string().min(10).max(50).default('Classic classroom chalkboard background')
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3',
        __image_prompt__: 'Classic classroom chalkboard background'
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const ChalkboardQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8e8d0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image with Chalk Texture Overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3'}')`,
                    }}
                />

                {/* Dark green chalkboard overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, #1a3a2a 0%, #0f2818 50%, #1a3a2a 100%)',
                        opacity: 0.9 
                    }}
                ></div>

                {/* Chalk dust decorative elements */}
                <div className="absolute top-16 left-12 w-4 h-4 rounded-full" style={{ background: 'var(--background-text, #e8e8d0)', opacity: 0.3 }}></div>
                <div className="absolute top-32 right-20 w-2 h-2 rounded-full" style={{ background: 'var(--background-text, #e8e8d0)', opacity: 0.2 }}></div>
                <div className="absolute bottom-24 left-24 w-3 h-3 rounded-full" style={{ background: 'var(--background-text, #e8e8d0)', opacity: 0.25 }}></div>
                
                {/* Chalk star decoration */}
                <div className="absolute top-20 right-32" style={{ color: 'var(--primary-color, #f2c94c)', opacity: 0.4 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading with chalk underline */}
                        <div className="space-y-4">
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #e8e8d0)",
                                    fontFamily: "var(--heading-font-family, Caveat)"
                                }} 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                {slideData?.heading || 'Words of Wisdom'}
                            </h1>
                            {/* Hand-drawn wavy underline */}
                            <div 
                                className="w-32 h-1 mx-auto"
                                style={{ 
                                    background: 'var(--primary-color, #f2c94c)',
                                    borderBottom: '2px wavy var(--primary-color, #f2c94c)',
                                    opacity: 0.8
                                }}
                            ></div>
                        </div>

                        {/* Quote Section with dashed card styling */}
                        <div 
                            className="space-y-6 p-8 rounded"
                            style={{ 
                                border: '1px dashed rgba(255,255,255,0.2)', 
                                background: 'rgba(255,255,255,0.05)', 
                                borderRadius: '4px' 
                            }}
                        >
                            {/* Quote marks */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-12 h-12"
                                    style={{ color: "var(--primary-color, #f2c94c)", opacity: 0.8 }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                style={{ 
                                    color: "var(--background-text, #e8e8d0)",
                                    fontFamily: "var(--body-font-family, Patrick Hand)"
                                }} 
                                className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed"
                            >
                                "{slideData?.quote || 'Education is the most powerful weapon which you can use to change the world.'}"
                            </blockquote>

                            {/* Author with dashed dividers */}
                            <div className="flex justify-center items-center space-x-4 pt-4">
                                <div 
                                    className="w-16 h-px"
                                    style={{ 
                                        borderBottom: '2px dashed rgba(255,255,255,0.3)'
                                    }}
                                ></div>
                                <cite 
                                    className="text-lg sm:text-xl font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #f2c94c)",
                                        fontFamily: "var(--body-font-family, Patrick Hand)"
                                    }}
                                >
                                    — {slideData?.author || 'Nelson Mandela'}
                                </cite>
                                <div 
                                    className="w-16 h-px"
                                    style={{ 
                                        borderBottom: '2px dashed rgba(255,255,255,0.3)'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom chalk line border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1" 
                    style={{ 
                        borderBottom: 'dashed 2px rgba(255,255,255,0.3)',
                        background: 'var(--stroke, rgba(245, 240, 232, 0.25))'
                    }}
                ></div>
            </div>
        </>
    )
}

export default ChalkboardQuoteSlide