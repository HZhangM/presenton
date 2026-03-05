import React from 'react'
import * as z from "zod";

export const layoutId = 'nature-forest-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution in a nature forest theme with organic styling.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Nature\'s Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('In every walk with nature, one receives far more than they seek. The forest teaches patience, resilience, and the beauty of quiet growth.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('John Muir').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1441974231531-c6227db76b6e"), 
        __image_prompt__: z.string().min(10).max(50).default("Dense forest with sunlight filtering through trees") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        __image_prompt__: "Dense forest with sunlight filtering through trees"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const NatureForestQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bitter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8efe0)' }}>
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
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(26, 46, 16, 0.7), rgba(124, 179, 66, 0.3))',
                    }}
                ></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-8 w-24 h-24 rounded-full opacity-20"
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #7cb342) 0%, transparent 70%)',
                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                ></div>
                <div 
                    className="absolute bottom-12 left-12 w-32 h-8 opacity-15"
                    style={{ 
                        background: 'var(--primary-color, #7cb342)',
                        borderRadius: '50px',
                        transform: 'rotate(-15deg)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Card Container */}
                        <div 
                            className="p-8 rounded-3xl"
                            style={{ 
                                border: '1px solid rgba(124,179,66,0.15)',
                                background: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Heading */}
                            <div className="space-y-4 mb-8">
                                <h1 
                                    style={{ color: "var(--background-text, #e8efe0)" }} 
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                                >
                                    {slideData?.heading || 'Nature\'s Wisdom'}
                                </h1>
                                <div 
                                    style={{ background: "var(--primary-color, #7cb342)" }} 
                                    className="w-20 h-1 mx-auto rounded-full"
                                ></div>
                            </div>

                            {/* Quote Section */}
                            <div className="space-y-6">
                                {/* Leaf Quote Icon */}
                                <div className="flex justify-center">
                                    <svg
                                        className="w-12 h-12 opacity-80" 
                                        style={{ color: "var(--primary-color, #7cb342)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    style={{ 
                                        color: "var(--background-text, #e8efe0)",
                                        fontFamily: "var(--body-font-family, 'Source Sans 3')"
                                    }} 
                                    className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed italic"
                                >
                                    "{slideData?.quote || 'In every walk with nature, one receives far more than they seek. The forest teaches patience, resilience, and the beauty of quiet growth.'}"
                                </blockquote>

                                {/* Wavy Divider */}
                                <div className="flex justify-center py-4">
                                    <svg 
                                        width="120" 
                                        height="8" 
                                        viewBox="0 0 120 8" 
                                        className="opacity-40"
                                        style={{ color: "var(--primary-color, #7cb342)" }}
                                    >
                                        <path 
                                            d="M0 4 Q30 0 60 4 T120 4" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            fill="none"
                                        />
                                    </svg>
                                </div>

                                {/* Author */}
                                <cite 
                                    className="text-lg sm:text-xl font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #7cb342)",
                                        fontFamily: "var(--body-font-family, 'Source Sans 3')"
                                    }}
                                >
                                    — {slideData?.author || 'John Muir'}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Organic Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-60" 
                    style={{ background: 'var(--stroke, rgba(124, 179, 66, 0.25))' }}
                ></div>
            </div>
        </>
    )
}

export default NatureForestQuoteSlide