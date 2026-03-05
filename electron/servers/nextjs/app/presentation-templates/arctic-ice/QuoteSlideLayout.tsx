import React from 'react'
import * as z from "zod";

export const layoutId = 'arctic-ice-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A quote slide with crystalline frosted glass effects and minimal arctic styling'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Arctic Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('In the depths of winter, I finally learned that there was in me an invincible summer. The pure silence of snow teaches us the deepest truths about clarity and purpose.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Albert Camus').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Arctic landscape with ice formations") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Arctic landscape with ice formations"
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
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-medium" style={{ color: 'var(--background-text, #1a3a50)' }}>
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

                {/* Frosted Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(8px)'
                    }}
                />

                {/* Decorative Elements */}
                <div 
                    className="absolute top-12 right-12 w-16 h-16 rounded-full opacity-20"
                    style={{
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                />
                <div 
                    className="absolute bottom-20 left-16 w-2 h-32 opacity-30"
                    style={{
                        background: 'var(--stroke, rgba(2, 136, 209, 0.15))'
                    }}
                />

                {/* Main Content Container */}
                <div className="relative z-20 px-8 sm:px-12 lg:px-20 pt-16 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 
                                className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight tracking-wide"
                                style={{ color: "var(--background-text, #1a3a50)" }}
                            >
                                {slideData?.heading || 'Arctic Wisdom'}
                            </h1>
                            <div 
                                className="w-24 h-px mx-auto"
                                style={{ background: "var(--stroke, rgba(2, 136, 209, 0.15))" }}
                            />
                        </div>

                        {/* Quote Container with Frosted Glass Card */}
                        <div 
                            className="px-12 py-10 mx-8"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                borderRadius: '16px',
                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            {/* Quote Mark */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-8 h-8 opacity-40"
                                    style={{ color: "var(--primary-color, #0288d1)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-8 italic"
                                style={{ color: "var(--background-text, #1a3a50)" }}
                            >
                                "{slideData?.quote || 'In the depths of winter, I finally learned that there was in me an invincible summer. The pure silence of snow teaches us the deepest truths about clarity and purpose.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-6">
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--stroke, rgba(2, 136, 209, 0.15))" }}
                                />
                                <cite 
                                    className="text-sm sm:text-base font-medium not-italic tracking-wide"
                                    style={{ color: "var(--primary-color, #0288d1)" }}
                                >
                                    {slideData?.author || 'Albert Camus'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--stroke, rgba(2, 136, 209, 0.15))" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ 
                        background: 'var(--stroke, rgba(2, 136, 209, 0.15))'
                    }}
                />
            </div>
        </>
    )
}

export default QuoteSlideLayout