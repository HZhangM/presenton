import React from 'react'
import * as z from "zod";

export const layoutId = 'lavender-dream-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in lavender dream theme.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Gentle Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Dreams are the whispers of the soul, painting tomorrow with the colors of hope and possibility.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Anonymous').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("soft lavender field with gentle morning light") 
    }).default({ 
        __image_url__: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", 
        __image_prompt__: "soft lavender field with gentle morning light" 
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface LavenderDreamQuoteSlideProps {
    data?: Partial<QuoteSlideData>
}

const LavenderDreamQuoteSlide: React.FC<LavenderDreamQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a2050)', fontFamily: 'var(--body-font-family, Mulish)' }}>
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

                {/* Soft overlay for text readability */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(250,245,255,0.7) 50%, rgba(245,235,255,0.8) 100%)'
                    }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-12 right-16 opacity-10">
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                        <path d="M50 20C55 25 60 30 50 40C45 35 40 30 50 20Z" fill="var(--primary-color, #9b59b6)" />
                        <path d="M30 50C35 45 40 40 50 50C45 55 40 60 30 50Z" fill="var(--primary-color, #9b59b6)" />
                        <path d="M70 50C65 45 60 40 50 50C55 55 60 60 70 50Z" fill="var(--primary-color, #9b59b6)" />
                        <path d="M50 80C45 75 40 70 50 60C55 65 60 70 50 80Z" fill="var(--primary-color, #9b59b6)" />
                    </svg>
                </div>

                <div className="absolute bottom-20 left-12 w-32 h-px opacity-20" style={{ background: 'var(--primary-color, #9b59b6)' }}></div>

                {/* Main Content */}
                <div className="relative z-20 px-16 py-20 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-4xl font-bold leading-tight" 
                                style={{ 
                                    color: "var(--background-text, #3a2050)",
                                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                }}
                            >
                                {slideData?.heading || 'Gentle Inspiration'}
                            </h1>
                            
                            {/* Delicate divider */}
                            <div className="flex justify-center">
                                <div 
                                    className="w-16 h-px" 
                                    style={{ background: "var(--primary-color, #9b59b6)", opacity: 0.4 }}
                                />
                            </div>
                        </div>

                        {/* Quote Card */}
                        <div 
                            className="p-8 mx-auto max-w-3xl"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '20px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-10 h-10 opacity-40"
                                    style={{ color: "var(--primary-color, #9b59b6)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl font-medium leading-relaxed italic mb-6"
                                style={{ 
                                    color: "var(--background-text, #3a2050)",
                                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                }}
                            >
                                "{slideData?.quote || 'Dreams are the whispers of the soul, painting tomorrow with the colors of hope and possibility.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div className="w-8 h-px opacity-30" style={{ background: "var(--primary-color, #9b59b6)" }}></div>
                                <cite 
                                    className="text-base font-medium not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #9b59b6)",
                                        fontFamily: "var(--body-font-family, Mulish)"
                                    }}
                                >
                                    {slideData?.author || 'Anonymous'}
                                </cite>
                                <div className="w-8 h-px opacity-30" style={{ background: "var(--primary-color, #9b59b6)" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LavenderDreamQuoteSlide