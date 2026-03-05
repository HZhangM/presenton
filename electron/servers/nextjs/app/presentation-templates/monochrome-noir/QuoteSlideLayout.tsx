import React from 'react'
import * as z from "zod";

export const layoutId = 'monochrome-noir-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A stark black and white quote slide with dramatic typography and high contrast design'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('WORDS OF POWER').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Success is not final, failure is not fatal: it is the courage to continue that counts. The future belongs to those who believe in the beauty of their dreams.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('WINSTON CHURCHILL').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Dramatic black and white landscape") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Dramatic black and white landscape"
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
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Space Grotesk)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--background-text, #000000)' }}>
                                {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Background Image with High Contrast Overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                        filter: 'grayscale(100%) contrast(150%)'
                    }}
                />

                {/* Stark Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Decorative Geometric Elements */}
                <div className="absolute top-0 left-0 w-32 h-2" style={{ backgroundColor: 'var(--primary-color, #000000)' }}></div>
                <div className="absolute bottom-0 right-0 w-48 h-3" style={{ backgroundColor: 'var(--background-text, #000000)' }}></div>
                <div className="absolute top-20 right-8 w-12 h-12 border-2" style={{ borderColor: 'var(--primary-color, #000000)', backgroundColor: 'var(--primary-text, #ffffff)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 pt-16 pb-12 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        
                        {/* Heading Section */}
                        <div className="space-y-4">
                            <h1 
                                className="text-4xl lg:text-5xl font-bold tracking-wider uppercase leading-tight"
                                style={{ color: "var(--primary-text, #ffffff)" }}
                            >
                                {slideData?.heading || 'WORDS OF POWER'}
                            </h1>
                            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "var(--primary-text, #ffffff)" }}></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Large Quote Marks */}
                            <div className="flex justify-center">
                                <div 
                                    className="text-8xl font-bold leading-none"
                                    style={{ color: "var(--primary-text, #ffffff)" }}
                                >
                                    "
                                </div>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl lg:text-3xl font-medium leading-tight tracking-wide"
                                style={{ 
                                    color: "var(--primary-text, #ffffff)",
                                    fontFamily: "var(--body-font-family, Space Grotesk)"
                                }}
                            >
                                {slideData?.quote || 'Success is not final, failure is not fatal: it is the courage to continue that counts. The future belongs to those who believe in the beauty of their dreams.'}
                            </blockquote>

                            {/* Author Attribution */}
                            <div className="flex justify-center items-center space-x-6 mt-8">
                                <div className="w-16 h-0.5" style={{ backgroundColor: "var(--primary-text, #ffffff)" }}></div>
                                <cite 
                                    className="text-lg font-bold tracking-widest uppercase not-italic"
                                    style={{ color: "var(--primary-text, #ffffff)" }}
                                >
                                    {slideData?.author || 'WINSTON CHURCHILL'}
                                </cite>
                                <div className="w-16 h-0.5" style={{ backgroundColor: "var(--primary-text, #ffffff)" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{ backgroundColor: 'var(--background-text, #000000)' }}></div>
            </div>
        </>
    )
}

export default QuoteSlideLayout