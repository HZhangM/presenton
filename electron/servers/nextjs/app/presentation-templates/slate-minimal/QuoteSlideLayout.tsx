import React from 'react'
import * as z from "zod";

export const layoutId = 'slate-minimal-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The best way to predict the future is to invent it. Innovation distinguishes between a leader and a follower.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Steve Jobs').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Modern minimalist workspace with technology")
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const SlateMinimalQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Inter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #1e293b)' }}>
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

                {/* Background Overlay */}
                <div className="absolute inset-0 bg-slate-800/70"></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-12 right-12 w-2 h-2 rounded-full opacity-60"
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                ></div>
                <div 
                    className="absolute bottom-16 left-16 w-1 h-1 rounded-full opacity-40"
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-3xl font-semibold leading-tight"
                                style={{ color: "var(--card-color, rgba(255, 255, 255, 0.95))" }}
                            >
                                {slideData?.heading || 'Inspiration'}
                            </h1>
                            <div 
                                className="w-16 h-0.5 mx-auto"
                                style={{ backgroundColor: "var(--primary-color, #3b82f6)" }}
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div 
                            className="bg-white border border-black/6 rounded-lg p-8 space-y-6"
                            style={{ 
                                background: 'var(--card-color, #ffffff)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-8 h-8 opacity-60"
                                    style={{ color: "var(--primary-color, #3b82f6)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl font-medium leading-relaxed italic"
                                style={{ color: "var(--background-text, #1e293b)" }}
                            >
                                "{slideData?.quote || 'The best way to predict the future is to invent it. Innovation distinguishes between a leader and a follower.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-12 h-px opacity-30"
                                    style={{ backgroundColor: "var(--stroke, rgba(59, 130, 246, 0.15))" }}
                                ></div>
                                <cite 
                                    className="text-base font-semibold not-italic"
                                    style={{ color: "var(--primary-color, #3b82f6)" }}
                                >
                                    {slideData?.author || 'Steve Jobs'}
                                </cite>
                                <div 
                                    className="w-12 h-px opacity-30"
                                    style={{ backgroundColor: "var(--stroke, rgba(59, 130, 246, 0.15))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                ></div>
            </div>
        </>
    )
}

export default SlateMinimalQuoteSlide