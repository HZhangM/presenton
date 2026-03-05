import React from 'react'
import * as z from "zod";

export const layoutId = 'retro-synthwave-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A retro synthwave themed slide featuring a prominent quote with author attribution and neon aesthetic.'

const retroSynthwaveQuoteSchema = z.object({
    heading: z.string().min(3).max(30).default('Neon Dreams').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The future is not some place we are going, but one we are creating. The paths are not to be found, but made. And the activity of making them changes both the maker and the destination.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Cyberpunk Visionary').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Retro synthwave grid horizon neon landscape") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Retro synthwave grid horizon neon landscape"
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = retroSynthwaveQuoteSchema

export type RetroSynthwaveQuoteData = z.infer<typeof retroSynthwaveQuoteSchema>

interface RetroSynthwaveQuoteSlideProps {
    data?: Partial<RetroSynthwaveQuoteData>
}

const RetroSynthwaveQuoteSlide: React.FC<RetroSynthwaveQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bungee)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #f0e0ff)' }}>
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

                {/* Dark overlay for retro effect */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: 'linear-gradient(180deg, rgba(20,0,40,0.8) 0%, rgba(10,0,20,0.9) 100%)'
                    }}
                ></div>

                {/* Scan lines decorative effect */}
                <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--primary-color, #ff3366) 2px, var(--primary-color, #ff3366) 4px)',
                    }}
                ></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 opacity-60" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 opacity-60" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 opacity-60" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 opacity-60" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-14 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        
                        {/* Heading with gradient text effect */}
                        <div className="space-y-6">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-wide"
                                style={{ 
                                    background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 20px rgba(255, 51, 102, 0.5)'
                                }}
                            >
                                {slideData?.heading || 'Neon Dreams'}
                            </h1>
                            
                            {/* Gradient divider line */}
                            <div 
                                className="w-32 h-1 mx-auto"
                                style={{ 
                                    background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff, var(--primary-color, #ff3366))'
                                }}
                            ></div>
                        </div>

                        {/* Quote Card */}
                        <div 
                            className="p-8 backdrop-blur-sm"
                            style={{
                                border: '2px solid rgba(255,51,102,0.3)',
                                background: 'rgba(20,0,40,0.6)',
                                backdropFilter: 'blur(4px)'
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <svg
                                    className="w-16 h-16 opacity-80" 
                                    style={{ color: "var(--primary-color, #ff3366)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-6"
                                style={{ 
                                    color: "var(--background-text, #f0e0ff)",
                                    fontFamily: "var(--body-font-family, Rajdhani)"
                                }}
                            >
                                "{slideData?.quote || 'The future is not some place we are going, but one we are creating. The paths are not to be found, but made. And the activity of making them changes both the maker and the destination.'}"
                            </blockquote>

                            {/* Author with neon accent */}
                            <div className="flex justify-center items-center space-x-6">
                                <div 
                                    className="w-20 h-px"
                                    style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff3366))' }}
                                ></div>
                                <cite 
                                    className="text-lg sm:text-xl font-bold not-italic uppercase tracking-wider"
                                    style={{ 
                                        color: "var(--primary-color, #ff3366)",
                                        fontFamily: "var(--heading-font-family, Bungee)",
                                        textShadow: '0 0 10px rgba(255, 51, 102, 0.5)'
                                    }}
                                >
                                    {slideData?.author || 'Cyberpunk Visionary'}
                                </cite>
                                <div 
                                    className="w-20 h-px"
                                    style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366), transparent)' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom neon border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff3366), #00ffff, var(--primary-color, #ff3366), transparent)',
                        boxShadow: '0 0 10px var(--primary-color, #ff3366)'
                    }}
                ></div>
            </div>
        </>
    )
}

export default RetroSynthwaveQuoteSlide