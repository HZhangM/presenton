import React from 'react'
import * as z from "zod";

export const layoutId = 'luxury-gold-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A premium quote slide with sophisticated gold accents and elegant typography'

const luxuryGoldQuoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Words of Excellence').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Aristotle').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Luxury golden sunset over elegant landscape") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        __image_prompt__: "Luxury golden sunset over elegant landscape"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = luxuryGoldQuoteSlideSchema

export type LuxuryGoldQuoteSlideData = z.infer<typeof luxuryGoldQuoteSlideSchema>

interface LuxuryGoldQuoteSlideLayoutProps {
    data?: Partial<LuxuryGoldQuoteSlideData>
}

const LuxuryGoldQuoteSlideLayout: React.FC<LuxuryGoldQuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cinzel)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8d5b0)' }}>
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
                    style={{ backgroundColor: '#000000', opacity: 0.75 }}
                ></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 left-8 w-16 h-px opacity-30"
                    style={{ background: 'linear-gradient(90deg, var(--primary-color, #d4a843), transparent)' }}
                ></div>
                <div 
                    className="absolute top-8 right-8 w-16 h-px opacity-30"
                    style={{ background: 'linear-gradient(270deg, var(--primary-color, #d4a843), transparent)' }}
                ></div>
                <div 
                    className="absolute bottom-8 left-8 w-3 h-3 border opacity-20"
                    style={{ borderColor: 'var(--primary-color, #d4a843)', transform: 'rotate(45deg)' }}
                ></div>
                <div 
                    className="absolute bottom-8 right-8 w-3 h-3 border opacity-20"
                    style={{ borderColor: 'var(--primary-color, #d4a843)', transform: 'rotate(45deg)' }}
                ></div>

                {/* Main Content */}
                <div className="relative z-20 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide uppercase"
                                style={{ 
                                    color: "var(--background-text, #e8d5b0)",
                                    background: `linear-gradient(135deg, var(--primary-color, #d4a843), var(--background-text, #e8d5b0))`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {slideData?.heading || 'Words of Excellence'}
                            </h1>
                            <div 
                                className="w-24 h-px mx-auto"
                                style={{ backgroundColor: "var(--primary-color, #d4a843)" }}
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Quote Icon */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-10 h-10"
                                    style={{ color: "var(--primary-color, #d4a843)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed italic"
                                style={{ 
                                    color: "var(--background-text, #e8d5b0)",
                                    fontFamily: "var(--body-font-family, 'EB Garamond')"
                                }}
                            >
                                "{slideData?.quote || 'Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-6">
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: "var(--stroke, rgba(212, 168, 67, 0.3))" }}
                                ></div>
                                <cite 
                                    className="text-sm sm:text-base font-semibold not-italic tracking-widest uppercase"
                                    style={{ color: "var(--primary-color, #d4a843)" }}
                                >
                                    {slideData?.author || 'Aristotle'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: "var(--stroke, rgba(212, 168, 67, 0.3))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ 
                        background: `linear-gradient(90deg, transparent, var(--primary-color, #d4a843), transparent)`,
                        opacity: 0.5
                    }}
                ></div>
            </div>
        </>
    )
}

export default LuxuryGoldQuoteSlideLayout