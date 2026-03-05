import React from 'react'
import * as z from "zod";

export const layoutId = 'copper-patina-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with aged copper patina styling.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Timeless Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The only way to do great work is to love what you do. Innovation distinguishes between a leader and a follower. Stay hungry, stay foolish.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Steve Jobs').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Industrial copper pipes and machinery background") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Industrial copper pipes and machinery background"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface CopperPatinaQuoteSlideProps {
    data?: Partial<QuoteSlideData>
}

const CopperPatinaQuoteSlide: React.FC<CopperPatinaQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Abril Fatface)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #f0e8d8)', fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                                    {(slideData as any)?.__companyName__}
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
                    style={{ backgroundColor: '#2c1810', opacity: 0.75 }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-12 w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: 'var(--primary-color, #b87333)' }}></div>
                <div className="absolute top-12 right-8 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color, #b87333)' }}></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 rounded-full opacity-25" style={{ backgroundColor: 'var(--primary-color, #b87333)' }}></div>
                
                {/* Industrial divider lines */}
                <div className="absolute top-0 left-20 w-px h-full opacity-10" style={{ backgroundColor: 'var(--primary-color, #b87333)' }}></div>
                <div className="absolute top-0 right-20 w-px h-full opacity-10" style={{ backgroundColor: 'var(--primary-color, #b87333)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                style={{ 
                                    color: "var(--background-text, #f0e8d8)",
                                    fontFamily: "var(--heading-font-family, Abril Fatface)"
                                }} 
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                            >
                                {slideData?.heading || 'Timeless Wisdom'}
                            </h1>
                            {/* Copper accent line with circle endpoints */}
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary-color, #b87333)" }}></div>
                                <div className="w-20 h-px" style={{ backgroundColor: "var(--primary-color, #b87333)" }}></div>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary-color, #b87333)" }}></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Card */}
                            <div 
                                className="p-8 rounded-md"
                                style={{ 
                                    background: "var(--card-color, rgba(255, 245, 230, 0.8))",
                                    border: "1px solid var(--stroke, rgba(184, 115, 51, 0.25))",
                                    borderRadius: "6px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-4">
                                    <svg
                                        className="w-10 h-10"
                                        style={{ color: "var(--primary-color, #b87333)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    style={{ 
                                        color: "var(--primary-text, #1a1a1a)",
                                        fontFamily: "var(--body-font-family, Fira Sans)"
                                    }} 
                                    className="text-2xl lg:text-3xl font-medium leading-relaxed italic mb-6"
                                >
                                    "{slideData?.quote || 'The only way to do great work is to love what you do. Innovation distinguishes between a leader and a follower. Stay hungry, stay foolish.'}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-12 h-px" style={{ backgroundColor: "var(--primary-color, #b87333)" }}></div>
                                    <cite 
                                        className="text-lg font-semibold not-italic"
                                        style={{ 
                                            color: "var(--primary-color, #b87333)",
                                            fontFamily: "var(--body-font-family, Fira Sans)"
                                        }}
                                    >
                                        {slideData?.author || 'Steve Jobs'}
                                    </cite>
                                    <div className="w-12 h-px" style={{ backgroundColor: "var(--primary-color, #b87333)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom accent border */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--primary-color, #b87333)', opacity: 0.3 }}></div>
            </div>
        </>
    )
}

export default CopperPatinaQuoteSlide