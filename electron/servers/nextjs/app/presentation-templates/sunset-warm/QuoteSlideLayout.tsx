import React from 'react'
import * as z from "zod";

export const layoutId = 'sunset-warm-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with warm sunset aesthetics.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Inspiring Words').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The sun sets every day, but it also rises every morning. Every ending is a new beginning waiting to unfold with golden possibilities.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Maya Angelou').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1280&h=720&fit=crop"), 
        __image_prompt__: z.string().min(10).max(50).default("Golden sunset landscape with warm orange sky") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1280&h=720&fit=crop",
        __image_prompt__: "Golden sunset landscape with warm orange sky"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const SunsetWarmQuoteSlideLayout: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Nunito)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #3d1e00)' }}>
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
                    style={{ backgroundColor: 'rgba(61, 30, 0, 0.3)' }}
                ></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-10 right-16 w-32 h-32 rounded-full opacity-20" 
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #e65100), transparent)', 
                        filter: 'blur(20px)' 
                    }}
                ></div>
                <div 
                    className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-30" 
                    style={{ 
                        background: 'radial-gradient(circle, #ff9800, transparent)', 
                        filter: 'blur(15px)' 
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Quote Card */}
                        <div 
                            className="p-8 rounded-3xl"
                            style={{
                                background: 'rgba(255,255,255,0.55)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '20px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                            }}
                        >
                            {/* Heading */}
                            <div className="space-y-4 mb-8">
                                <h1 
                                    style={{ color: "var(--background-text, #3d1e00)" }} 
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                                >
                                    {slideData?.heading || 'Inspiring Words'}
                                </h1>
                                {/* Gradient divider */}
                                <div 
                                    className="w-32 h-0.5 mx-auto"
                                    style={{ 
                                        background: 'linear-gradient(to right, transparent, var(--primary-color, #e65100), transparent)' 
                                    }}
                                ></div>
                            </div>

                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-12 h-12 opacity-60" 
                                    style={{ color: "var(--primary-color, #e65100)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                style={{ 
                                    color: "var(--background-text, #3d1e00)",
                                    fontFamily: "var(--body-font-family, Nunito Sans)"
                                }} 
                                className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed italic mb-6"
                            >
                                "{slideData?.quote || 'The sun sets every day, but it also rises every morning. Every ending is a new beginning waiting to unfold with golden possibilities.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--primary-color, #e65100)" }}
                                ></div>
                                <cite 
                                    className="text-base sm:text-lg font-semibold not-italic px-4 py-2 rounded-full"
                                    style={{ 
                                        color: "var(--primary-text, #ffffff)",
                                        background: "var(--primary-color, #e65100)"
                                    }}
                                >
                                    {slideData?.author || 'Maya Angelou'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--primary-color, #e65100)" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunsetWarmQuoteSlideLayout