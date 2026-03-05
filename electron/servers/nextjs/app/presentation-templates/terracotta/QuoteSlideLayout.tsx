import React from 'react'
import * as z from "zod";

export const layoutId = 'terracotta-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in warm terracotta tones.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Timeless Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The best preparation for tomorrow is doing your best today. Success comes to those who dare to begin with courage and persistence.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Margaret Thatcher').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Mediterranean terracotta pottery warm tones")
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        __image_prompt__: 'Mediterranean terracotta pottery warm tones'
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = quoteSlideSchema

export type QuoteSlideData = z.infer<typeof quoteSlideSchema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const TerracottaQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #2d1a0e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--primary-color, #8d4e2a)', opacity: 0.75 }}
                ></div>

                <div className="absolute top-16 right-16 w-32 h-2" style={{ background: 'linear-gradient(90deg, transparent, rgba(141, 78, 42, 0.3), transparent)' }}></div>
                <div className="absolute top-20 right-20 w-4 h-4 transform rotate-45 border border-current opacity-20" style={{ borderColor: 'var(--primary-text, #faf0e6)' }}></div>
                
                <div className="absolute bottom-16 left-16 w-24 h-2" style={{ background: 'linear-gradient(90deg, transparent, rgba(141, 78, 42, 0.3), transparent)' }}></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 transform rotate-45" style={{ backgroundColor: 'rgba(250, 240, 230, 0.2)' }}></div>

                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <h1 style={{ color: "var(--primary-text, #faf0e6)" }} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                {slideData?.heading || 'Timeless Wisdom'}
                            </h1>
                            <div className="flex justify-center items-center space-x-4">
                                <div style={{ background: "var(--primary-text, #faf0e6)" }} className="w-16 h-px opacity-60"></div>
                                <div className="w-2 h-2 transform rotate-45" style={{ backgroundColor: 'var(--primary-text, #faf0e6)' }}></div>
                                <div style={{ background: "var(--primary-text, #faf0e6)" }} className="w-16 h-px opacity-60"></div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex justify-center">
                                <svg
                                    className="w-16 h-16 opacity-60"
                                    style={{ color: "var(--primary-text, #faf0e6)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            <blockquote 
                                style={{ 
                                    color: "var(--primary-text, #faf0e6)",
                                    fontFamily: "var(--body-font-family, Libre Baskerville)"
                                }} 
                                className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed italic"
                            >
                                "{slideData?.quote || 'The best preparation for tomorrow is doing your best today. Success comes to those who dare to begin with courage and persistence.'}"
                            </blockquote>

                            <div className="flex justify-center items-center space-x-6 pt-4">
                                <div style={{ background: "var(--primary-text, #faf0e6)" }} className="w-20 h-px opacity-40"></div>
                                <cite 
                                    className="text-lg sm:text-xl font-semibold not-italic tracking-wide"
                                    style={{ 
                                        color: "var(--primary-text, #faf0e6)",
                                        fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                    }}
                                >
                                    {slideData?.author || 'Margaret Thatcher'}
                                </cite>
                                <div style={{ background: "var(--primary-text, #faf0e6)" }} className="w-20 h-px opacity-40"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, var(--stroke, rgba(141, 78, 42, 0.2)), transparent)' }}></div>
            </div>
        </>
    )
}

export default TerracottaQuoteSlide