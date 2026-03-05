import React from 'react'
import * as z from "zod";

export const layoutId = 'comic-book-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A comic book style slide featuring a prominent quote with author attribution and background image.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('HERO WISDOM').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('With great power comes great responsibility! Sometimes the greatest battles are fought not with fists, but with words and wisdom that inspire us to be better.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Spider-Man').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80'),
        __image_prompt__: z.string().min(10).max(50).default('Comic book city skyline with dramatic lighting')
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
        __image_prompt__: 'Comic book city skyline with dramatic lighting'
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface ComicBookQuoteSlideProps {
    data?: Partial<QuoteSlideData>
}

const ComicBookQuoteSlide: React.FC<ComicBookQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bangers)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1 transform -rotate-1" style={{ background: "var(--card-color, rgba(255, 255, 255, 0.9))", border: "3px solid var(--stroke, rgba(0, 0, 0, 0.8))" }}>
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-5 h-5" style={{ filter: "drop-shadow(1px 1px 0 #000)" }} />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-sm font-bold" style={{ color: 'var(--background-text, #1a1a1a)', textShadow: '1px 1px 0 #fff' }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image with comic overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Comic halftone overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, var(--primary-color, #e53935) 1px, transparent 1px)",
                        backgroundSize: "8px 8px",
                        opacity: 0.15
                    }}
                />

                {/* Background overlay for readability */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* POW decorative elements */}
                <div className="absolute top-16 left-8 transform rotate-12 opacity-80">
                    <div 
                        className="bg-yellow-400 px-4 py-2 border-4 border-black font-bold text-black text-sm transform rotate-6"
                        style={{ 
                            fontFamily: "var(--heading-font-family, Bangers)",
                            boxShadow: "4px 4px 0 #000",
                            background: "#ffeb3b"
                        }}
                    >
                        POW!
                    </div>
                </div>

                <div className="absolute bottom-20 right-12 transform -rotate-12 opacity-70">
                    <div 
                        className="bg-red-500 px-3 py-2 border-4 border-black font-bold text-white text-xs transform -rotate-3"
                        style={{ 
                            fontFamily: "var(--heading-font-family, Bangers)",
                            boxShadow: "4px 4px 0 #000",
                            background: "var(--primary-color, #e53935)"
                        }}
                    >
                        ZAP!
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-20 px-16 py-20 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Heading in speech bubble style */}
                        <div className="relative">
                            <div 
                                className="inline-block px-8 py-4 border-4 border-black transform -rotate-1"
                                style={{
                                    background: "var(--card-color, rgba(255, 255, 255, 0.9))",
                                    border: "3px solid var(--stroke, rgba(0, 0, 0, 0.8))",
                                    boxShadow: "4px 4px 0 #000",
                                    borderRadius: "4px"
                                }}
                            >
                                <h1 
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                                    style={{ 
                                        color: "var(--background-text, #1a1a1a)",
                                        fontFamily: "var(--heading-font-family, Bangers)"
                                    }}
                                >
                                    {slideData?.heading || 'HERO WISDOM'}
                                </h1>
                            </div>
                        </div>

                        {/* Quote in comic panel style */}
                        <div 
                            className="bg-white border-4 border-black p-8 mx-4"
                            style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.9))",
                                border: "3px solid var(--stroke, rgba(0, 0, 0, 0.8))",
                                boxShadow: "4px 4px 0 #000",
                                borderRadius: "4px"
                            }}
                        >
                            {/* Quote marks */}
                            <div className="flex justify-center mb-4">
                                <div 
                                    className="text-6xl font-bold"
                                    style={{ 
                                        color: "var(--primary-color, #e53935)",
                                        fontFamily: "var(--heading-font-family, Bangers)"
                                    }}
                                >
                                    "
                                </div>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed mb-6"
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, Comic Neue)"
                                }}
                            >
                                {slideData?.quote || 'With great power comes great responsibility! Sometimes the greatest battles are fought not with fists, but with words and wisdom that inspire us to be better.'}
                            </blockquote>

                            {/* Jagged divider */}
                            <div 
                                className="w-full h-1 my-4 mx-auto"
                                style={{
                                    background: "var(--stroke, rgba(0, 0, 0, 0.8))",
                                    clipPath: "polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%, 100% 100%, 0% 100%)"
                                }}
                            />

                            {/* Author */}
                            <div className="text-right">
                                <cite 
                                    className="text-lg sm:text-xl font-bold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #e53935)",
                                        fontFamily: "var(--heading-font-family, Bangers)"
                                    }}
                                >
                                    - {slideData?.author || 'Spider-Man'}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComicBookQuoteSlide