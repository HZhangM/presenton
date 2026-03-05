import React from 'react'
import * as z from "zod";

export const layoutId = 'glassmorphism-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A glassmorphism-styled quote slide with frosted glass effects and vibrant gradient background'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The only way to do great work is to love what you do. Stay hungry, stay foolish, and never stop believing in the power of innovation.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Steve Jobs').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Vibrant gradient abstract background")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Vibrant gradient abstract background"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const GlassmorphismQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6 z-30">
                        <div 
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
                            style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.2))",
                                backdropFilter: "blur(20px)",
                                border: "1px solid var(--stroke, rgba(255, 255, 255, 0.3))"
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-600" style={{ color: 'var(--primary-text, #ffffff)' }}>
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

                {/* Glassmorphism Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                        backdropFilter: "blur(5px)"
                    }}
                />

                {/* Decorative Glass Elements */}
                <div 
                    className="absolute top-20 left-20 w-32 h-32 rounded-full"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        opacity: 0.5
                    }}
                />
                <div 
                    className="absolute bottom-16 right-16 w-24 h-24 rounded-full"
                    style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        opacity: 0.6
                    }}
                />

                {/* Main Content Container */}
                <div className="relative z-20 px-8 sm:px-12 lg:px-20 pt-20 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        
                        {/* Glass Card Container */}
                        <div 
                            className="p-12 rounded-[20px] space-y-8"
                            style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.15))",
                                backdropFilter: "blur(20px)",
                                border: "1px solid var(--stroke, rgba(255, 255, 255, 0.2))",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                            }}
                        >
                            {/* Heading */}
                            <div className="space-y-4">
                                <h1 
                                    className="text-4xl sm:text-5xl lg:text-6xl font-800 leading-tight"
                                    style={{ color: "var(--primary-text, #ffffff)" }}
                                >
                                    {slideData?.heading || 'Inspiration'}
                                </h1>
                                {/* Glass accent line */}
                                <div 
                                    className="w-24 h-1 mx-auto rounded-full"
                                    style={{ 
                                        background: "linear-gradient(90deg, var(--primary-color, #7c3aed), rgba(255, 255, 255, 0.5))",
                                        boxShadow: "0 0 10px rgba(124, 58, 237, 0.3)"
                                    }}
                                />
                            </div>

                            {/* Quote Section */}
                            <div className="space-y-6">
                                {/* Quote Icon with glass effect */}
                                <div className="flex justify-center">
                                    <div 
                                        className="p-4 rounded-full"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.1)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        <svg
                                            className="w-8 h-8"
                                            style={{ color: "var(--primary-text, #ffffff)" }}
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    className="text-xl sm:text-2xl lg:text-3xl font-500 leading-relaxed italic"
                                    style={{ color: "var(--primary-text, #ffffff)" }}
                                >
                                    "{slideData?.quote || 'The only way to do great work is to love what you do. Stay hungry, stay foolish, and never stop believing in the power of innovation.'}"
                                </blockquote>

                                {/* Author with glass dividers */}
                                <div className="flex justify-center items-center space-x-6">
                                    <div 
                                        className="w-16 h-px"
                                        style={{ 
                                            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)"
                                        }}
                                    />
                                    <cite 
                                        className="text-lg sm:text-xl font-600 not-italic px-4 py-2 rounded-full"
                                        style={{ 
                                            color: "var(--primary-text, #ffffff)",
                                            background: "rgba(255, 255, 255, 0.1)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        {slideData?.author || 'Steve Jobs'}
                                    </cite>
                                    <div 
                                        className="w-16 h-px"
                                        style={{ 
                                            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Glass Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-2"
                    style={{ 
                        background: "linear-gradient(90deg, var(--primary-color, #7c3aed), rgba(255, 255, 255, 0.3))",
                        backdropFilter: "blur(10px)"
                    }}
                />
            </div>
        </>
    )
}

export default GlassmorphismQuoteSlide