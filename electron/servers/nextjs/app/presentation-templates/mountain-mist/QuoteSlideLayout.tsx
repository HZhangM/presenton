import React from 'react'
import * as z from "zod";

export const layoutId = 'mountain-mist-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in the Mountain Mist theme.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Mountain Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The mountains are calling and I must go. In every walk with nature, one receives far more than they seek. The silence of the mountains speaks louder than words.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('John Muir').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80'),
        __image_prompt__: z.string().min(10).max(50).default('Misty mountain layers in muted blue-grey tones')
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
        __image_prompt__: 'Misty mountain layers in muted blue-grey tones'
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface QuoteSlideData {
    data?: Partial<z.infer<typeof Schema>>
}

const MountainMistQuoteSlide: React.FC<QuoteSlideData> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Philosopher)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a2a3a)', fontFamily: 'var(--body-font-family, Karla)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
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
                    style={{ backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.55))', backdropFilter: 'blur(12px)' }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-1 opacity-20" style={{ background: 'var(--stroke, rgba(84, 110, 122, 0.15))' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-1 opacity-15" style={{ background: 'var(--stroke, rgba(84, 110, 122, 0.15))' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-16 h-full flex flex-col justify-center">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4 mb-8">
                            <h1 
                                className="text-2xl font-bold"
                                style={{ 
                                    color: "var(--background-text, #1a2a3a)",
                                    fontFamily: "var(--heading-font-family, Philosopher)"
                                }}
                            >
                                {slideData?.heading || 'Mountain Wisdom'}
                            </h1>
                            
                            {/* Divider */}
                            <div className="mx-auto w-2/5 h-px opacity-40" style={{ background: "var(--stroke, rgba(84, 110, 122, 0.15))" }}></div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            <blockquote 
                                className="text-2xl leading-relaxed italic font-normal"
                                style={{ 
                                    color: "var(--background-text, #1a2a3a)",
                                    fontFamily: "var(--heading-font-family, Philosopher)"
                                }}
                            >
                                "{slideData?.quote || 'The mountains are calling and I must go. In every walk with nature, one receives far more than they seek. The silence of the mountains speaks louder than words.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <div className="w-12 h-px opacity-30" style={{ background: "var(--primary-color, #546e7a)" }}></div>
                                <cite 
                                    className="text-base font-medium not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #546e7a)",
                                        fontFamily: "var(--body-font-family, Karla)"
                                    }}
                                >
                                    {slideData?.author || 'John Muir'}
                                </cite>
                                <div className="w-12 h-px opacity-30" style={{ background: "var(--primary-color, #546e7a)" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MountainMistQuoteSlide