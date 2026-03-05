import React from 'react'
import * as z from "zod";

export const layoutId = 'linen-clean-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with warm linen aesthetics.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Words of Wisdom'),
    quote: z.string().min(10).max(200).default('The best way to find yourself is to lose yourself in the service of others. Life is what happens when you are busy making other plans.'),
    author: z.string().min(2).max(50).default('Mahatma Gandhi'),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("warm linen texture background natural")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "warm linen texture background natural"
    })
})

export { Schema }

type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const LinenCleanQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Text)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ 
                                color: 'var(--background-text, #3a3530)',
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}>
                                {(slideData as any)?.__companyName__}
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
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(255, 252, 247, 0.85)' }}
                />

                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-16 w-24 h-1 opacity-30"
                    style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                />
                <div 
                    className="absolute bottom-20 left-20 w-3 h-3 rounded-full opacity-40"
                    style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                />
                <div 
                    className="absolute top-1/3 left-12 w-px h-16 opacity-20"
                    style={{ backgroundColor: 'var(--primary-color, #8c7851)' }}
                />

                {/* Main Content */}
                <div className="relative z-20 px-16 py-16 h-full flex flex-col justify-center">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-3xl font-normal leading-tight"
                                style={{ 
                                    color: "var(--background-text, #3a3530)",
                                    fontFamily: "var(--heading-font-family, DM Serif Text)"
                                }}
                            >
                                {slideData?.heading || 'Words of Wisdom'}
                            </h1>
                            <div 
                                className="w-16 h-px mx-auto opacity-40"
                                style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                            />
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Mark */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-8 h-8 opacity-60"
                                    style={{ color: "var(--primary-color, #8c7851)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl leading-relaxed font-normal italic max-w-3xl mx-auto"
                                style={{ 
                                    color: "var(--background-text, #3a3530)",
                                    fontFamily: "var(--heading-font-family, DM Serif Text)"
                                }}
                            >
                                "{slideData?.quote || 'The best way to find yourself is to lose yourself in the service of others. Life is what happens when you are busy making other plans.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4 pt-4">
                                <div 
                                    className="w-12 h-px opacity-30"
                                    style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                                />
                                <cite 
                                    className="text-base font-medium not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #8c7851)",
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {slideData?.author || 'Mahatma Gandhi'}
                                </cite>
                                <div 
                                    className="w-12 h-px opacity-30"
                                    style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle bottom accent */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                    style={{ backgroundColor: 'var(--stroke, rgba(140, 120, 81, 0.15))' }}
                />
            </div>
        </>
    )
}

export default LinenCleanQuoteSlide