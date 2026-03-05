import React from 'react'
import * as z from "zod";

export const layoutId = 'neon-cyberpunk-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A cyberpunk-themed quote slide with neon glow effects and futuristic styling'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Digital Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The future is not some place we are going, but one we are creating. The paths are not to be found, but made. And the activity of making them changes both the maker and the destination.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('John Schaar').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Cyberpunk cityscape with neon lights") 
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const NeonCyberpunkQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Orbitron)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e0e0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Decorative Neon Elements */}
                <div 
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)',
                        boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-0 right-0 w-full h-1"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
                        boxShadow: '0 0 10px #00ffff'
                    }}
                ></div>

                {/* Corner Brackets */}
                <div className="absolute top-8 left-8">
                    <div 
                        className="w-6 h-6 border-l-2 border-t-2"
                        style={{ 
                            borderColor: 'var(--primary-color, #ff2d95)',
                            boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                        }}
                    ></div>
                </div>
                <div className="absolute top-8 right-8">
                    <div 
                        className="w-6 h-6 border-r-2 border-t-2"
                        style={{ 
                            borderColor: '#00ffff',
                            boxShadow: '0 0 8px #00ffff'
                        }}
                    ></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-20 pt-20 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-6">
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-wide"
                                style={{ 
                                    color: "var(--primary-text, #ffffff)",
                                    textShadow: '0 0 20px var(--primary-color, #ff2d95), 0 0 40px var(--primary-color, #ff2d95)',
                                    fontFamily: "var(--heading-font-family, Orbitron)"
                                }}
                            >
                                {slideData?.heading || 'Digital Wisdom'}
                            </h1>
                            
                            <div className="flex justify-center space-x-4">
                                <div 
                                    className="w-12 h-0.5"
                                    style={{ 
                                        background: "var(--primary-color, #ff2d95)",
                                        boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                                    }}
                                ></div>
                                <div 
                                    className="w-12 h-0.5"
                                    style={{ 
                                        background: '#00ffff',
                                        boxShadow: '0 0 8px #00ffff'
                                    }}
                                ></div>
                                <div 
                                    className="w-12 h-0.5"
                                    style={{ 
                                        background: "var(--primary-color, #ff2d95)",
                                        boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            <div 
                                className="mx-auto p-8 max-w-4xl"
                                style={{
                                    border: '1px solid rgba(255,45,149,0.2)',
                                    background: 'rgba(10,10,30,0.7)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-6">
                                    <svg
                                        className="w-8 h-8"
                                        style={{ 
                                            color: "var(--primary-color, #ff2d95)",
                                            filter: 'drop-shadow(0 0 8px var(--primary-color, #ff2d95))'
                                        }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    className="text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide"
                                    style={{ 
                                        color: "var(--background-text, #e0e0f0)",
                                        fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                    }}
                                >
                                    "{slideData?.quote || 'The future is not some place we are going, but one we are creating. The paths are not to be found, but made. And the activity of making them changes both the maker and the destination.'}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex justify-center items-center space-x-6 mt-8">
                                    <div 
                                        className="w-8 h-px"
                                        style={{ 
                                            background: '#00ffff',
                                            boxShadow: '0 0 4px #00ffff'
                                        }}
                                    ></div>
                                    <cite 
                                        className="text-base sm:text-lg font-bold not-italic tracking-widest"
                                        style={{ 
                                            color: "var(--primary-color, #ff2d95)",
                                            fontFamily: "var(--heading-font-family, Orbitron)",
                                            textShadow: '0 0 8px var(--primary-color, #ff2d95)'
                                        }}
                                    >
                                        — {slideData?.author || 'John Schaar'}
                                    </cite>
                                    <div 
                                        className="w-8 h-px"
                                        style={{ 
                                            background: '#00ffff',
                                            boxShadow: '0 0 4px #00ffff'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NeonCyberpunkQuoteSlide