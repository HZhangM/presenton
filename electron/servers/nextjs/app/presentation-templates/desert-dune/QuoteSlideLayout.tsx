import React from 'react'
import * as z from "zod";

export const layoutId = 'desert-dune-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in warm desert tones.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Desert Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('In the depths of silence, we discover the voice of the soul. Every grain of sand holds the wisdom of countless journeys across time and space.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Rumi').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Desert dunes with warm golden sand")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Desert dunes with warm golden sand"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface DesertDuneQuoteSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const DesertDuneQuoteSlide: React.FC<DesertDuneQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Tenor Sans)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a2e1e)' }}>
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
                    style={{ backgroundColor: 'rgba(58, 46, 30, 0.4)' }}
                ></div>

                {/* Decorative Elements */}
                <div className="absolute top-16 right-20 w-32 h-16 opacity-20">
                    <svg viewBox="0 0 128 64" className="w-full h-full" style={{ fill: 'var(--primary-color, #b8860b)' }}>
                        <path d="M0 32 Q32 0 64 32 Q96 0 128 32 L128 64 L0 64 Z" />
                    </svg>
                </div>
                
                <div className="absolute bottom-20 left-16 w-24 h-12 opacity-15">
                    <svg viewBox="0 0 96 48" className="w-full h-full" style={{ fill: 'var(--primary-color, #b8860b)' }}>
                        <path d="M0 24 Q24 0 48 24 Q72 0 96 24 L96 48 L0 48 Z" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                style={{ 
                                    color: "var(--primary-text, #ffffff)",
                                    fontFamily: "var(--heading-font-family, Tenor Sans)"
                                }} 
                                className="text-3xl sm:text-4xl font-normal leading-tight"
                            >
                                {slideData?.heading || 'Desert Wisdom'}
                            </h1>
                            
                            {/* Golden divider */}
                            <div className="flex justify-center">
                                <div 
                                    style={{ background: "var(--primary-color, #b8860b)" }} 
                                    className="w-24 h-px"
                                ></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Icon */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-10 h-10 opacity-60"
                                    style={{ color: "var(--primary-color, #b8860b)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <div 
                                className="backdrop-blur-sm rounded-lg p-6"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.6))',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    borderRadius: '12px'
                                }}
                            >
                                <blockquote 
                                    style={{ 
                                        color: "var(--background-text, #3a2e1e)",
                                        fontFamily: "var(--body-font-family, Work Sans)"
                                    }} 
                                    className="text-xl sm:text-2xl font-light leading-relaxed italic"
                                >
                                    "{slideData?.quote || 'In the depths of silence, we discover the voice of the soul. Every grain of sand holds the wisdom of countless journeys across time and space.'}"
                                </blockquote>
                            </div>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div style={{ background: "var(--primary-color, #b8860b)" }} className="w-12 h-px opacity-60"></div>
                                <cite 
                                    className="text-base font-medium not-italic"
                                    style={{ 
                                        color: "var(--primary-text, #ffffff)",
                                        fontFamily: "var(--body-font-family, Work Sans)"
                                    }}
                                >
                                    — {slideData?.author || 'Rumi'}
                                </cite>
                                <div style={{ background: "var(--primary-color, #b8860b)" }} className="w-12 h-px opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesertDuneQuoteSlide