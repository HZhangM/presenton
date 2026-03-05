import React from 'react'
import * as z from "zod";

export const layoutId = 'starfield-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in a starfield theme.'

const starfieldQuoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Cosmic Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The universe is not only stranger than we imagine, it is stranger than we can imagine. We are all made of star stuff, connected to the cosmos in ways beyond our comprehension.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Carl Sagan').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Deep space starfield with nebula") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Deep space starfield with nebula"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = starfieldQuoteSlideSchema

export type StarfieldQuoteSlideData = z.infer<typeof starfieldQuoteSlideSchema>

interface StarfieldQuoteSlideLayoutProps {
    data?: Partial<StarfieldQuoteSlideData>
}

const StarfieldQuoteSlideLayout: React.FC<StarfieldQuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Exo 2)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #d0d0f0)' }}>
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
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}')`,
                    }}
                />

                {/* Cosmic Decorative Elements */}
                <div 
                    className="absolute top-12 right-20 w-2 h-2 rounded-full opacity-60"
                    style={{ 
                        background: 'var(--primary-color, #7c4dff)',
                        boxShadow: '0 0 8px var(--primary-color, #7c4dff)'
                    }}
                ></div>
                <div 
                    className="absolute bottom-32 left-16 w-1 h-1 rounded-full opacity-40"
                    style={{ 
                        background: 'var(--background-text, #d0d0f0)',
                        boxShadow: '0 0 4px var(--background-text, #d0d0f0)'
                    }}
                ></div>
                <div 
                    className="absolute top-1/3 left-1/4 w-48 h-px opacity-20"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)'
                    }}
                ></div>

                {/* Main Content Container with Card Style */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-12 flex-1 flex flex-col justify-center h-full">
                    <div 
                        className="text-center space-y-8 max-w-4xl mx-auto p-8 rounded-lg"
                        style={{
                            border: '1px solid rgba(124,77,255,0.15)',
                            background: 'rgba(124,77,255,0.06)',
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #d0d0f0)",
                                    textShadow: '0 0 20px rgba(124,77,255,0.3)'
                                }}
                            >
                                {slideData?.heading || 'Cosmic Wisdom'}
                            </h1>
                            {/* Purple accent line with glow */}
                            <div 
                                className="w-20 h-1 mx-auto rounded-full"
                                style={{ 
                                    background: "var(--primary-color, #7c4dff)",
                                    boxShadow: '0 0 10px var(--primary-color, #7c4dff)'
                                }}
                            ></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Icon with cosmic glow */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-12 h-12 opacity-80"
                                    style={{ 
                                        color: "var(--primary-color, #7c4dff)",
                                        filter: 'drop-shadow(0 0 8px var(--primary-color, #7c4dff))'
                                    }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed italic"
                                style={{ 
                                    color: "var(--background-text, #d0d0f0)",
                                    fontFamily: "var(--body-font-family, Exo 2)"
                                }}
                            >
                                "{slideData?.quote || 'The universe is not only stranger than we imagine, it is stranger than we can imagine. We are all made of star stuff, connected to the cosmos in ways beyond our comprehension.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-16 h-px"
                                    style={{ 
                                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)'
                                    }}
                                ></div>
                                <cite 
                                    className="text-base sm:text-lg font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-text, #ffffff)",
                                        textShadow: '0 0 10px rgba(124,77,255,0.5)'
                                    }}
                                >
                                    {slideData?.author || 'Carl Sagan'}
                                </cite>
                                <div 
                                    className="w-16 h-px"
                                    style={{ 
                                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Border with cosmic glow */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)',
                        boxShadow: '0 0 10px var(--primary-color, #7c4dff)'
                    }}
                ></div>
            </div>
        </>
    )
}

export default StarfieldQuoteSlideLayout