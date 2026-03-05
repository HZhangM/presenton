import React from 'react'
import * as z from "zod";

export const layoutId = 'minimalist-zen-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in minimalist zen style.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The quieter you become, the more you are able to hear. In the depth of winter, I finally learned that within me there lay an invincible summer.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Rumi').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Serene zen garden with stones and water") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Serene zen garden with stones and water"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const MinimalistZenQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Noto Serif JP)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-normal" style={{ color: 'var(--background-text, #2d2d2d)', fontFamily: 'var(--body-font-family, Noto Sans JP)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image with subtle overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                ></div>

                {/* Decorative zen circle (enso) */}
                <div 
                    className="absolute top-20 right-20 w-16 h-16 rounded-full opacity-20"
                    style={{ 
                        border: `1px solid var(--stroke, rgba(0, 0, 0, 0.1))`,
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        transform: 'rotate(45deg)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-20 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-16 max-w-4xl mx-auto">
                        
                        {/* Heading with minimal decoration */}
                        <div className="space-y-8">
                            <h1 
                                className="text-2xl font-normal tracking-wide"
                                style={{ 
                                    color: "var(--background-text, #2d2d2d)",
                                    fontFamily: "var(--heading-font-family, Noto Serif JP)"
                                }}
                            >
                                {slideData?.heading || 'Wisdom'}
                            </h1>
                            {/* Minimal line decoration */}
                            <div 
                                className="w-12 h-px mx-auto"
                                style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-12">
                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl leading-loose font-light tracking-wide max-w-3xl mx-auto"
                                style={{ 
                                    color: "var(--primary-color, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, Noto Sans JP)"
                                }}
                            >
                                "{slideData?.quote || 'The quieter you become, the more you are able to hear. In the depth of winter, I finally learned that within me there lay an invincible summer.'}"
                            </blockquote>

                            {/* Author with minimal styling */}
                            <div className="flex justify-center items-center space-x-6">
                                <div 
                                    className="w-8 h-px"
                                    style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                                ></div>
                                <cite 
                                    className="text-sm font-normal not-italic tracking-wider uppercase"
                                    style={{ 
                                        color: "var(--background-text, #2d2d2d)",
                                        fontFamily: "var(--body-font-family, Noto Sans JP)"
                                    }}
                                >
                                    {slideData?.author || 'Rumi'}
                                </cite>
                                <div 
                                    className="w-8 h-px"
                                    style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Single thin line at bottom */}
                <div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px"
                    style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                ></div>
            </div>
        </>
    )
}

export default MinimalistZenQuoteSlide