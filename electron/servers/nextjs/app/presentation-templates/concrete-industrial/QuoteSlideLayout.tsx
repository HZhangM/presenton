import React from 'react'
import * as z from "zod";

export const layoutId = 'concrete-industrial-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in concrete industrial style.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('WORDS OF WISDOM').meta({
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
        __image_prompt__: z.string().min(10).max(50).default("Industrial concrete factory interior") 
    }).default({
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Industrial concrete factory interior"
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
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bebas Neue)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-bold uppercase tracking-wider" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, Roboto Condensed)' }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
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
                    style={{ backgroundColor: 'var(--background-color, #000000)', opacity: 0.7 }}
                ></div>

                {/* Decorative Elements - Hazard Stripes */}
                <div className="absolute top-0 left-0 w-full h-2 opacity-30" style={{
                    background: 'repeating-linear-gradient(45deg, var(--primary-color, #ff6d00) 0px, var(--primary-color, #ff6d00) 10px, #000 10px, #000 20px)'
                }}></div>
                
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10" style={{
                    background: 'repeating-linear-gradient(-45deg, var(--stroke, rgba(0,0,0,0.15)) 0px, var(--stroke, rgba(0,0,0,0.15)) 4px, transparent 4px, transparent 8px)'
                }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none uppercase tracking-wide"
                                style={{ 
                                    color: "var(--primary-text, #ffffff)",
                                    fontFamily: "var(--heading-font-family, Bebas Neue)",
                                    textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                                }}
                            >
                                {slideData?.heading || 'WORDS OF WISDOM'}
                            </h1>
                            {/* Orange accent line */}
                            <div 
                                className="w-24 h-1 mx-auto"
                                style={{ 
                                    background: "var(--primary-color, #ff6d00)",
                                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                                }}
                            ></div>
                        </div>

                        {/* Quote Card */}
                        <div 
                            className="p-8 sm:p-12 max-w-4xl mx-auto"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                                borderLeft: `4px solid var(--primary-color, #ff6d00)`,
                                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                            }}
                        >
                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-6"
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, Roboto Condensed)"
                                }}
                            >
                                "{slideData?.quote || 'Success is not final, failure is not fatal: it is the courage to continue that counts. The future belongs to those who believe in the beauty of their dreams.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-end items-center">
                                <div 
                                    className="h-px w-16 mr-4"
                                    style={{ background: "var(--stroke, rgba(0, 0, 0, 0.15))" }}
                                ></div>
                                <cite 
                                    className="text-lg sm:text-xl font-bold not-italic uppercase tracking-wide"
                                    style={{ 
                                        color: "var(--primary-color, #ff6d00)",
                                        fontFamily: "var(--heading-font-family, Bebas Neue)"
                                    }}
                                >
                                    {slideData?.author || 'WINSTON CHURCHILL'}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.15))' }}
                ></div>
            </div>
        </>
    )
}

export default QuoteSlideLayout