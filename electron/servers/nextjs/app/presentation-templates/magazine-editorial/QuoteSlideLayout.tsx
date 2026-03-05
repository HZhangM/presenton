import React from 'react'
import * as z from "zod";

export const layoutId = 'magazine-editorial-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A bold editorial quote slide with strong typography hierarchy and high contrast design.'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Editorial Voice').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The best stories are told not just with words, but with bold design that commands attention and demands to be heard.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Anna Rodriguez, Editor-in-Chief').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern magazine office with bold typography") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Modern magazine office with bold typography"
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
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Display)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />
                <div className="absolute inset-0 bg-white bg-opacity-90"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-2 h-32" style={{ backgroundColor: 'var(--primary-color, #e53935)' }}></div>
                <div className="absolute top-0 right-0 w-48 h-3" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>

                {/* Large Drop Number */}
                <div 
                    className="absolute top-16 right-12 text-9xl font-bold opacity-10"
                    style={{ 
                        color: 'var(--background-text, #1a1a1a)',
                        fontFamily: 'var(--heading-font-family, DM Serif Display)',
                        lineHeight: '0.8'
                    }}
                >
                    01
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-12 py-16 flex flex-col justify-center h-full max-w-4xl">
                    {/* Heading */}
                    <div className="mb-8">
                        <h1 
                            className="text-4xl font-normal leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, DM Serif Display)"
                            }}
                        >
                            {slideData?.heading || 'Editorial Voice'}
                        </h1>
                        <div className="w-16 h-1 mt-4" style={{ backgroundColor: "var(--primary-color, #e53935)" }}></div>
                    </div>

                    {/* Quote Card */}
                    <div 
                        className="bg-white p-12 mb-8"
                        style={{ 
                            border: '2px solid var(--background-text, #1a1a1a)',
                            borderRadius: '0'
                        }}
                    >
                        {/* Opening Quote Mark */}
                        <div 
                            className="text-6xl font-bold mb-6 leading-none"
                            style={{ 
                                color: "var(--primary-color, #e53935)",
                                fontFamily: "var(--heading-font-family, DM Serif Display)"
                            }}
                        >
                            "
                        </div>
                        
                        {/* Quote Text */}
                        <blockquote 
                            className="text-2xl leading-relaxed mb-6"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, DM Sans)",
                                fontWeight: "400"
                            }}
                        >
                            {slideData?.quote || 'The best stories are told not just with words, but with bold design that commands attention and demands to be heard.'}
                        </blockquote>

                        {/* Horizontal Rule */}
                        <div className="w-full h-0.5 mb-6" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>

                        {/* Author */}
                        <cite 
                            className="text-lg font-bold not-italic uppercase tracking-wide"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}
                        >
                            {slideData?.author || 'Anna Rodriguez, Editor-in-Chief'}
                        </cite>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuoteSlideLayout