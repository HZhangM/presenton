import React from 'react'
import * as z from "zod";

export const layoutId = 'newspaper-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A newspaper-themed slide featuring a prominent quote with author attribution and background image.'

const newspaperQuoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Daily Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The pen is mightier than the sword, and considerably easier to write with.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Marty Feldman').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("vintage newspaper printing press background") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "vintage newspaper printing press background"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = newspaperQuoteSlideSchema

export type NewspaperQuoteSlideData = z.infer<typeof newspaperQuoteSlideSchema>

interface NewspaperQuoteSlideLayoutProps {
    data?: Partial<NewspaperQuoteSlideData>
}

const NewspaperQuoteSlideLayout: React.FC<NewspaperQuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #1a1a1a)' }}>
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
                    style={{ backgroundColor: 'var(--primary-text, #f5f0e8)', opacity: 0.95 }}
                ></div>

                {/* Decorative newspaper texture overlay */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, var(--stroke, rgba(0,0,0,0.2)) 2px, var(--stroke, rgba(0,0,0,0.2)) 3px)`
                    }}
                ></div>

                {/* Decorative masthead border */}
                <div 
                    className="absolute top-20 left-8 right-8 h-px"
                    style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                ></div>
                <div 
                    className="absolute top-24 left-8 right-8 h-px"
                    style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-32 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Headline with newspaper styling */}
                        <div className="space-y-4">
                            <div 
                                className="w-32 h-1 mx-auto"
                                style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                            ></div>
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--heading-font-family, Unna)"
                                }} 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight uppercase tracking-wide"
                            >
                                {slideData?.heading || 'Daily Wisdom'}
                            </h1>
                            <div 
                                className="w-16 h-px mx-auto"
                                style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6 border-t border-b py-8" style={{ borderColor: 'var(--primary-color, #1a1a1a)' }}>
                            {/* Opening quote mark */}
                            <div className="flex justify-start ml-8">
                                <span 
                                    className="text-6xl font-bold leading-none"
                                    style={{ 
                                        color: "var(--primary-color, #1a1a1a)",
                                        fontFamily: "var(--body-font-family, Source Serif 4)"
                                    }}
                                >
                                    "
                                </span>
                            </div>

                            {/* Quote Text */}
                            <div className="px-8">
                                <blockquote 
                                    style={{ 
                                        color: "var(--background-text, #1a1a1a)",
                                        fontFamily: "var(--body-font-family, Source Serif 4)"
                                    }} 
                                    className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-justify"
                                >
                                    {slideData?.quote || 'The pen is mightier than the sword, and considerably easier to write with.'}
                                </blockquote>
                            </div>

                            {/* Closing quote mark */}
                            <div className="flex justify-end mr-8">
                                <span 
                                    className="text-6xl font-bold leading-none"
                                    style={{ 
                                        color: "var(--primary-color, #1a1a1a)",
                                        fontFamily: "var(--body-font-family, Source Serif 4)"
                                    }}
                                >
                                    "
                                </span>
                            </div>
                        </div>

                        {/* Author attribution */}
                        <div className="flex justify-center">
                            <div className="text-center">
                                <div 
                                    className="w-12 h-px mx-auto mb-3"
                                    style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}
                                ></div>
                                <cite 
                                    className="text-lg sm:text-xl font-semibold not-italic uppercase tracking-widest"
                                    style={{ 
                                        color: "var(--background-text, #1a1a1a)",
                                        fontFamily: "var(--heading-font-family, Unna)"
                                    }}
                                >
                                    — {slideData?.author || 'Marty Feldman'} —
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative border */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--primary-color, #1a1a1a)' }}></div>
                <div className="absolute bottom-1 left-0 right-0 h-px" style={{ backgroundColor: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
            </div>
        </>
    )
}

export default NewspaperQuoteSlideLayout