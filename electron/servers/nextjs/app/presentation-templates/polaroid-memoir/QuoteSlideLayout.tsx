import React from 'react'
import * as z from "zod";

export const layoutId = 'polaroid-memoir-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A nostalgic quote slide with polaroid-style framing and handwritten typography'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Memory Lane'),
    quote: z.string().min(10).max(200).default('The best thing about memories is making them. Every moment is a gift, every memory a treasure to hold close to your heart.'),
    author: z.string().min(2).max(50).default('Anonymous'),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1516389573391-5620a0263801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Warm vintage polaroid photos scattered on wooden table")
    })
})

export { Schema }

interface QuoteSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const QuoteSlide: React.FC<QuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a3020)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
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
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(58, 48, 32, 0.7)' }}
                />

                {/* Decorative Tape Strips */}
                <div className="absolute top-12 left-8 w-16 h-6 bg-yellow-200/80 rounded transform -rotate-12 shadow-sm"></div>
                <div className="absolute bottom-16 right-12 w-20 h-6 bg-pink-200/80 rounded transform rotate-6 shadow-sm"></div>
                <div className="absolute top-24 right-16 w-12 h-12 bg-orange-100/60 rounded-full transform rotate-45"></div>

                {/* Main Quote Card */}
                <div className="relative z-20 flex items-center justify-center h-full px-16 py-20">
                    <div className="max-w-4xl">
                        {/* Polaroid-style Quote Card */}
                        <div 
                            className="transform rotate-1"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.92))',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: '2px',
                                boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                                padding: '32px 32px 64px 32px'
                            }}
                        >
                            {/* Heading */}
                            <div className="text-center mb-8">
                                <h1 
                                    className="text-3xl font-bold mb-3"
                                    style={{ 
                                        color: 'var(--primary-color, #d4764e)',
                                        fontFamily: 'var(--heading-font-family, Caveat)'
                                    }}
                                >
                                    {slideData?.heading || 'Memory Lane'}
                                </h1>
                                <div 
                                    className="w-24 h-px mx-auto"
                                    style={{ 
                                        borderTop: '1px dashed var(--stroke, rgba(212, 118, 78, 0.2))'
                                    }}
                                />
                            </div>

                            {/* Quote */}
                            <blockquote 
                                className="text-2xl leading-relaxed text-center mb-6 italic"
                                style={{ 
                                    color: 'var(--background-text, #3a3020)',
                                    fontFamily: 'var(--body-font-family, Lato)'
                                }}
                            >
                                "{slideData?.quote || 'The best thing about memories is making them. Every moment is a gift, every memory a treasure to hold close to your heart.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="text-center">
                                <cite 
                                    className="text-lg font-semibold not-italic"
                                    style={{ 
                                        color: 'var(--primary-color, #d4764e)',
                                        fontFamily: 'var(--heading-font-family, Caveat)'
                                    }}
                                >
                                    — {slideData?.author || 'Anonymous'}
                                </cite>
                            </div>
                        </div>

                        {/* Decorative Tape on Card Corners */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-300/70 transform rotate-45"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300/70 transform -rotate-12"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuoteSlide