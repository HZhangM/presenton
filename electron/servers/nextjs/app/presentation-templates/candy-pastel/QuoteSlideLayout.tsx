import React from 'react'
import * as z from "zod"

export const layoutId = 'candy-pastel-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A playful pastel-themed slide featuring a prominent quote with author attribution and background image with bubbly typography.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Sweet Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Life is like a candy store - full of sweet surprises waiting to be discovered. The best moments are the ones that make your heart bubble with joy.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Maya Sweetwood').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("colorful candy pastel background") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        __image_prompt__: 'colorful candy pastel background'
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface CandyPastelQuoteSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const CandyPastelQuoteSlide: React.FC<CandyPastelQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Fredoka)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 rounded-full" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #4a3560)' }}>
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
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                ></div>

                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-12 w-20 h-20 rounded-full opacity-30"
                    style={{ background: 'var(--primary-color, #ab47bc)' }}
                ></div>
                <div 
                    className="absolute bottom-16 left-16 w-16 h-16 rounded-full opacity-20"
                    style={{ background: '#ff9a9e' }}
                ></div>
                <div className="absolute top-1/2 right-20 text-2xl opacity-40">💖</div>
                <div className="absolute top-1/4 left-12 text-xl opacity-40">⭐</div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-20 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-10 max-w-4xl mx-auto">

                        {/* Heading Card */}
                        <div 
                            className="inline-block px-8 py-4 rounded-full"
                            style={{ 
                                background: 'var(--primary-color, #ab47bc)',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                            }}
                        >
                            <h1 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                                style={{ color: "var(--primary-text, #ffffff)" }}
                            >
                                {slideData?.heading || 'Sweet Inspiration'}
                            </h1>
                        </div>

                        {/* Quote Card */}
                        <div 
                            className="p-8 sm:p-12"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                border: '2px solid var(--stroke, rgba(171, 71, 188, 0.2))',
                                borderRadius: '32px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <div 
                                    className="w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{ background: 'var(--primary-color, #ab47bc)' }}
                                >
                                    <svg
                                        className="w-8 h-8"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-6"
                                style={{ 
                                    color: "var(--background-text, #4a3560)",
                                    fontFamily: "var(--body-font-family, Quicksand)"
                                }}
                            >
                                "{slideData?.quote || 'Life is like a candy store - full of sweet surprises waiting to be discovered. The best moments are the ones that make your heart bubble with joy.'}"
                            </blockquote>

                            {/* Decorative Divider */}
                            <div className="flex justify-center items-center space-x-3 mb-4">
                                <div className="w-12 h-0.5 opacity-50" style={{ background: 'var(--primary-color, #ab47bc)' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#ff9a9e' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#a8e6cf' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: '#ffd3a5' }}></div>
                                <div className="w-12 h-0.5 opacity-50" style={{ background: 'var(--primary-color, #ab47bc)' }}></div>
                            </div>

                            {/* Author Badge */}
                            <div className="flex justify-center">
                                <div 
                                    className="px-6 py-3 rounded-full"
                                    style={{ 
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        border: '2px solid var(--stroke, rgba(171, 71, 188, 0.2))'
                                    }}
                                >
                                    <cite 
                                        className="text-base sm:text-lg font-semibold not-italic"
                                        style={{ color: "var(--background-text, #4a3560)" }}
                                    >
                                        {slideData?.author || 'Maya Sweetwood'}
                                    </cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-2 rounded-b-sm"
                    style={{ background: 'var(--primary-color, #ab47bc)' }}
                ></div>
            </div>
        </>
    )
}

export default CandyPastelQuoteSlide