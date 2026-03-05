import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-corporate-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A professional dark mode quote slide with sharp blue accents and clean typography'

const quoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Aristotle').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern corporate office skyline at night") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        __image_prompt__: 'Modern corporate office skyline at night'
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
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Inter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e5e7eb)' }}>
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
                    style={{ backgroundColor: '#111827', opacity: 0.85 }}
                ></div>

                <div 
                    className="absolute top-20 right-20 w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                ></div>
                <div 
                    className="absolute bottom-32 left-16 w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--primary-color, #6366f1)', opacity: 0.6 }}
                ></div>
                <div 
                    className="absolute top-1/3 right-1/4 w-32 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color, #6366f1), transparent)', opacity: 0.3 }}
                ></div>

                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-10 max-w-5xl mx-auto">

                        <div className="space-y-6">
                            <h1 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                                style={{ color: "var(--background-text, #e5e7eb)" }}
                            >
                                {slideData?.heading || 'Inspiration'}
                            </h1>
                            <div 
                                className="w-16 h-0.5 mx-auto"
                                style={{ backgroundColor: "var(--primary-color, #6366f1)" }}
                            ></div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex justify-center">
                                <div 
                                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                                    style={{ 
                                        background: "var(--card-color, rgba(99, 102, 241, 0.08))",
                                        border: "1px solid var(--stroke, rgba(99, 102, 241, 0.2))"
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        style={{ color: "var(--primary-color, #6366f1)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            <div 
                                className="px-8 py-6 rounded-lg"
                                style={{ 
                                    background: "var(--card-color, rgba(99, 102, 241, 0.06))",
                                    border: "1px solid var(--stroke, rgba(99, 102, 241, 0.12))",
                                    borderLeft: "3px solid var(--primary-color, #6366f1)"
                                }}
                            >
                                <blockquote 
                                    className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed"
                                    style={{ color: "var(--background-text, #e5e7eb)" }}
                                >
                                    "{slideData?.quote || 'Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives.'}"
                                </blockquote>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: "var(--stroke, rgba(99, 102, 241, 0.2))" }}
                                ></div>
                                <cite 
                                    className="text-sm sm:text-base font-semibold not-italic tracking-wide"
                                    style={{ color: "var(--primary-color, #6366f1)" }}
                                >
                                    {slideData?.author || 'Aristotle'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: "var(--stroke, rgba(99, 102, 241, 0.2))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--stroke, rgba(99, 102, 241, 0.2))' }}
                ></div>
            </div>
        </>
    )
}

export default QuoteSlideLayout