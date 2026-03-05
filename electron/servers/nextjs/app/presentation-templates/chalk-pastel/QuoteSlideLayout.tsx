import React from 'react'
import * as z from "zod";

export const layoutId = 'chalk-pastel-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A soft chalk pastel art style quote slide with textured strokes and warm artistic palette.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The future belongs to those who believe in the beauty of their dreams and have the courage to pursue them with passion.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Eleanor Roosevelt').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Soft watercolor sunset landscape") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Soft watercolor sunset landscape"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface ChalkPastelQuoteSlideProps {
    data?: Partial<QuoteSlideData>
}

const ChalkPastelQuoteSlide: React.FC<ChalkPastelQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Kalam)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #3a3530)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Soft overlay for readability */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)'
                    }}
                />

                {/* Decorative chalk pastel elements */}
                <div className="absolute top-16 left-8 w-20 h-20 rounded-full opacity-40"
                     style={{ background: 'radial-gradient(circle, rgba(173,216,230,0.6) 0%, transparent 70%)' }}
                />
                <div className="absolute bottom-20 right-12 w-32 h-32 rounded-full opacity-30"
                     style={{ background: 'radial-gradient(circle, rgba(255,218,185,0.5) 0%, transparent 70%)' }}
                />
                
                {/* Wavy decorative underline for heading */}
                <svg className="absolute top-40 left-1/2 transform -translate-x-1/2 opacity-50" width="300" height="8" viewBox="0 0 300 8">
                    <path d="M0,4 Q75,0 150,4 T300,4" stroke="var(--primary-color, #e57373)" strokeWidth="3" fill="none" opacity="0.6"/>
                </svg>

                {/* Main Content */}
                <div className="relative z-20 px-8 sm:px-12 lg:px-20 pt-16 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #3a3530)",
                                    fontFamily: "var(--heading-font-family, Kalam)"
                                }}
                            >
                                {slideData?.heading || 'Inspiration'}
                            </h1>
                        </div>

                        {/* Quote Card */}
                        <div 
                            className="p-8 mx-auto max-w-4xl"
                            style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.5))",
                                border: "2px solid var(--stroke, rgba(229, 115, 115, 0.25))",
                                borderRadius: "16px"
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-12 h-12"
                                    style={{ color: "var(--primary-color, #e57373)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed italic mb-8"
                                style={{ 
                                    color: "var(--background-text, #3a3530)",
                                    fontFamily: "var(--body-font-family, Nunito)"
                                }}
                            >
                                "{slideData?.quote || 'The future belongs to those who believe in the beauty of their dreams and have the courage to pursue them with passion.'}"
                            </blockquote>

                            {/* Wavy divider */}
                            <div className="flex justify-center mb-6">
                                <svg width="200" height="6" viewBox="0 0 200 6">
                                    <path d="M0,3 Q50,0 100,3 T200,3" stroke="var(--primary-color, #e57373)" strokeWidth="2" fill="none" opacity="0.7"/>
                                </svg>
                            </div>

                            {/* Author */}
                            <cite 
                                className="text-lg sm:text-xl font-bold not-italic"
                                style={{ 
                                    color: "var(--primary-color, #e57373)",
                                    fontFamily: "var(--heading-font-family, Kalam)"
                                }}
                            >
                                — {slideData?.author || 'Eleanor Roosevelt'}
                            </cite>
                        </div>

                        {/* Decorative chalk dots */}
                        <div className="flex justify-center gap-4 opacity-60">
                            <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary-color, #e57373)" }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ background: "#87ceeb" }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ background: "#f0e68c" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChalkPastelQuoteSlide