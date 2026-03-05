import React from 'react'
import * as z from "zod";

export const layoutId = 'coral-reef-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A vibrant coral reef themed quote slide with organic shapes and tropical colors'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Ocean Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Like coral reefs, we grow stronger when we support each other. The ocean teaches us that even the smallest creatures can build magnificent structures together.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Marine Explorer').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Vibrant coral reef underwater scene with tropical fish") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Vibrant coral reef underwater scene with tropical fish"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const CoralReefQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Comfortaa)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #2d3436)' }}>
                                {(slideData as any)?.__companyName__}
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
                    style={{ backgroundColor: 'rgba(45, 52, 54, 0.4)' }}
                />

                {/* Decorative coral blob shapes */}
                <div 
                    className="absolute top-8 left-8 w-32 h-24 rounded-full opacity-20 blur-xl"
                    style={{ background: 'var(--primary-color, #ff6b6b)' }}
                />
                <div 
                    className="absolute bottom-12 right-12 w-40 h-28 rounded-full opacity-15 blur-2xl"
                    style={{ background: '#00cec9' }}
                />
                <div 
                    className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full opacity-10 blur-lg"
                    style={{ background: 'var(--primary-color, #ff6b6b)' }}
                />

                {/* Main Content Container */}
                <div className="relative z-20 px-16 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--primary-text, #ffffff)",
                                    fontFamily: "var(--heading-font-family, Comfortaa)"
                                }}
                            >
                                {slideData?.heading || 'Ocean Wisdom'}
                            </h1>
                            {/* Wavy divider */}
                            <div className="flex justify-center">
                                <svg width="80" height="8" viewBox="0 0 80 8" className="overflow-visible">
                                    <path 
                                        d="M0,4 Q20,0 40,4 T80,4" 
                                        stroke="var(--primary-color, #ff6b6b)" 
                                        strokeWidth="3" 
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote bubble icon */}
                            <div className="flex justify-center">
                                <div 
                                    className="w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{ background: 'rgba(255, 107, 107, 0.2)' }}
                                >
                                    <svg
                                        className="w-8 h-8"
                                        style={{ color: "var(--primary-color, #ff6b6b)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote Card */}
                            <div 
                                className="p-8 rounded-3xl backdrop-blur-sm"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                    border: '1px solid rgba(255, 255, 255, 0.5)'
                                }}
                            >
                                <blockquote 
                                    className="text-2xl lg:text-3xl font-medium leading-relaxed italic mb-4"
                                    style={{ 
                                        color: "var(--background-text, #2d3436)",
                                        fontFamily: "var(--body-font-family, Rubik)"
                                    }}
                                >
                                    "{slideData?.quote || 'Like coral reefs, we grow stronger when we support each other. The ocean teaches us that even the smallest creatures can build magnificent structures together.'}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex justify-center items-center space-x-4">
                                    <div 
                                        className="w-12 h-px"
                                        style={{ background: "var(--primary-color, #ff6b6b)" }}
                                    />
                                    <div 
                                        className="px-4 py-2 rounded-full text-base font-semibold"
                                        style={{ 
                                            background: 'var(--primary-color, #ff6b6b)',
                                            color: 'var(--primary-text, #ffffff)'
                                        }}
                                    >
                                        {slideData?.author || 'Marine Explorer'}
                                    </div>
                                    <div 
                                        className="w-12 h-px"
                                        style={{ background: "var(--primary-color, #ff6b6b)" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative wave border */}
                <div className="absolute bottom-0 left-0 right-0 h-3">
                    <svg width="100%" height="12" viewBox="0 0 1280 12" preserveAspectRatio="none" className="absolute bottom-0">
                        <path 
                            d="M0,6 Q320,0 640,6 T1280,6 L1280,12 L0,12 Z" 
                            fill="var(--primary-color, #ff6b6b)"
                            opacity="0.8"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default CoralReefQuoteSlide