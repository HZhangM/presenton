import React from 'react'
import * as z from "zod";

export const layoutId = 'marble-classic-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A classical marble-themed slide featuring a prominent quote with author attribution and elegant typography.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Timeless Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Aristotle').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("White marble texture with subtle grey veining")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "White marble texture with subtle grey veining"
    }).meta({
        description: "Background marble texture image",
    })
})

export { Schema }

interface QuoteSlideProps {
    data: Partial<z.infer<typeof Schema>>
}

const MarbleClassicQuoteSlide: React.FC<QuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium tracking-wide" style={{ 
                                    color: 'var(--background-text, #2a2a2a)',
                                    fontFamily: 'var(--body-font-family, Montserrat)'
                                }}>
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

                {/* Subtle overlay for text readability */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-16 w-1 h-16 opacity-20" style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>
                <div className="absolute bottom-8 left-16 w-16 h-1 opacity-20" style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-20 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 style={{ 
                                color: "var(--background-text, #2a2a2a)",
                                fontFamily: "var(--heading-font-family, Cormorant)"
                            }} className="text-4xl font-semibold tracking-widest leading-tight">
                                {slideData?.heading || 'Timeless Wisdom'}
                            </h1>
                            
                            {/* Elegant divider with diamond ornament */}
                            <div className="flex items-center justify-center space-x-4">
                                <div style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }} className="w-20 h-px"></div>
                                <div style={{ 
                                    color: "var(--primary-color, #4a4a4a)",
                                    borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))"
                                }} className="w-2 h-2 border border-solid transform rotate-45"></div>
                                <div style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }} className="w-20 h-px"></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Quote Text */}
                            <blockquote style={{ 
                                color: "var(--background-text, #2a2a2a)",
                                fontFamily: "var(--heading-font-family, Cormorant)"
                            }} className="text-3xl font-normal leading-relaxed italic">
                                "{slideData?.quote || 'Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.'}"
                            </blockquote>

                            {/* Author Attribution */}
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <div style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }} className="w-12 h-px"></div>
                                </div>
                                <cite className="text-lg font-medium not-italic tracking-wide"
                                    style={{ 
                                        color: "var(--primary-color, #4a4a4a)",
                                        fontFamily: "var(--body-font-family, Montserrat)"
                                    }}
                                >
                                    {slideData?.author || 'Aristotle'}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>
            </div>
        </>
    )
}

export default MarbleClassicQuoteSlide