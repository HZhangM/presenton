import React from 'react'
import * as z from "zod";

export const layoutId = 'brutalist-web-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('BRUTAL TRUTH').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Design is not just what it looks like and feels like. Design is how it works. The best way to find out if you can trust somebody is to trust them.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('STEVE JOBS').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Industrial concrete architecture brutalist design")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Industrial concrete architecture brutalist design"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface QuoteSlideLayoutProps {
    data?: Partial<z.infer<typeof Schema>>
}

const QuoteSlideLayout: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Anton)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div 
                        className="absolute top-0 left-0 right-0 px-8 pt-4"
                        style={{
                            borderBottom: "4px solid #111111",
                            background: "var(--card-color, rgba(255, 255, 255, 0.95))"
                        }}
                    >
                        <div className="flex items-center gap-4 pb-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" style={{ border: "2px solid #111111" }} />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-bold" 
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'COMPANY'}
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
                    style={{ backgroundColor: '#000000', opacity: 0.7 }}
                ></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-8 w-16 h-16 opacity-20"
                    style={{
                        background: "var(--primary-color, #ff4500)",
                        border: "4px solid #111111",
                        boxShadow: "6px 6px 0 #111111"
                    }}
                ></div>
                <div 
                    className="absolute bottom-8 left-8 text-9xl font-bold opacity-10"
                    style={{
                        color: "var(--primary-color, #ff4500)",
                        fontFamily: "var(--heading-font-family, Anton)",
                        lineHeight: "1"
                    }}
                >
                    "
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 pt-20 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                style={{ 
                                    color: "var(--card-color, #ffffff)",
                                    fontFamily: "var(--heading-font-family, Anton)"
                                }} 
                                className="text-4xl lg:text-6xl font-black leading-none tracking-tight"
                            >
                                {slideData?.heading || 'BRUTAL TRUTH'}
                            </h1>
                            <div 
                                style={{ background: "var(--primary-color, #ff4500)" }} 
                                className="w-32 h-1 mx-auto"
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div 
                            className="space-y-6 p-8"
                            style={{
                                border: "4px solid #111111",
                                background: "var(--card-color, rgba(255, 255, 255, 0.95))",
                                boxShadow: "6px 6px 0 #111111"
                            }}
                        >
                            {/* Quote Text */}
                            <blockquote 
                                style={{ 
                                    color: "var(--background-text, #111111)",
                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                }} 
                                className="text-xl lg:text-2xl font-medium leading-relaxed"
                            >
                                "{slideData?.quote || 'Design is not just what it looks like and feels like. Design is how it works. The best way to find out if you can trust somebody is to trust them.'}"
                            </blockquote>

                            {/* Divider */}
                            <div 
                                className="w-full h-1"
                                style={{ background: "#111111" }}
                            ></div>

                            {/* Author */}
                            <div className="text-right">
                                <cite 
                                    className="text-lg font-bold not-italic tracking-wider"
                                    style={{ 
                                        color: "var(--background-text, #111111)",
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }}
                                >
                                    — {slideData?.author || 'STEVE JOBS'}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-2" 
                    style={{ backgroundColor: 'var(--primary-color, #ff4500)' }}
                ></div>
            </div>
        </>
    )
}

export default QuoteSlideLayout