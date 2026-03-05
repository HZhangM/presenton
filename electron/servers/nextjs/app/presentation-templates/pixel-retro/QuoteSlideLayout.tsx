import React from 'react'
import * as z from "zod";

export const layoutId = 'pixel-retro-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in retro gaming pixel art style.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('WORDS OF WISDOM').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('THE ONLY WINNING MOVE IS NOT TO PLAY. SOMETIMES THE ONLY CHOICE IS TO BREAK THE RULES AND START A NEW GAME.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('WOPR - WAR GAMES').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("retro computer terminal screen with green text") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "retro computer terminal screen with green text"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const PixelRetroQuoteSlideLayout: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div 
                            className="inline-flex items-center gap-2 px-4 py-2"
                            style={{
                                border: "2px solid var(--stroke, rgba(80,200,120,0.35))",
                                background: "var(--card-color, rgba(80,200,120,0.08))",
                                borderRadius: "0"
                            }}
                        >
                            {(slideData as any)?._logo_url__ && (
                                <img 
                                    src={(slideData as any)?._logo_url__} 
                                    alt="logo" 
                                    className="w-4 h-4"
                                    style={{ imageRendering: "pixelated" }}
                                />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-xs"
                                    style={{ 
                                        color: 'var(--primary-color, #50c878)',
                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'COMPANY'}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                        imageRendering: "pixelated"
                    }}
                />

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: '#1a1a2e', opacity: 0.85 }}
                />

                {/* Pixel Grid Pattern Overlay */}
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, var(--primary-color, #50c878) 1px, transparent 1px),
                            linear-gradient(0deg, var(--primary-color, #50c878) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Decorative Pixel Elements */}
                <div 
                    className="absolute top-8 right-8 w-6 h-6 opacity-60"
                    style={{ 
                        background: "var(--primary-color, #50c878)",
                        clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)"
                    }}
                />
                <div 
                    className="absolute bottom-12 left-8 w-8 h-8 opacity-40"
                    style={{ 
                        background: "var(--primary-color, #50c878)",
                        clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                    }}
                />

                {/* Terminal-style border animation */}
                <div 
                    className="absolute inset-4 pointer-events-none"
                    style={{
                        border: "2px dashed var(--stroke, rgba(80,200,120,0.35))",
                        borderRadius: "0"
                    }}
                />

                {/* Main Content */}
                <div className="relative z-20 px-12 py-16 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-5xl mx-auto">
                        
                        {/* Heading with terminal styling */}
                        <div className="space-y-6">
                            <div 
                                className="inline-flex items-center gap-2 px-6 py-3"
                                style={{
                                    border: "2px solid var(--stroke, rgba(80,200,120,0.35))",
                                    background: "var(--card-color, rgba(80,200,120,0.08))",
                                    borderRadius: "0"
                                }}
                            >
                                <div 
                                    className="w-3 h-3"
                                    style={{ 
                                        background: "var(--primary-color, #50c878)",
                                        animation: "blink 1s infinite"
                                    }}
                                />
                                <h1 
                                    className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
                                    style={{ 
                                        color: "var(--primary-color, #50c878)",
                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                    }}
                                >
                                    {slideData?.heading || 'WORDS OF WISDOM'}
                                </h1>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Quote block with terminal styling */}
                            <div 
                                className="p-8"
                                style={{
                                    border: "2px solid var(--stroke, rgba(80,200,120,0.35))",
                                    background: "var(--card-color, rgba(80,200,120,0.08))",
                                    borderRadius: "0"
                                }}
                            >
                                {/* Quote prefix */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div 
                                        className="w-4 h-4 flex-shrink-0 mt-1"
                                        style={{ background: "var(--primary-color, #50c878)" }}
                                    />
                                    <div 
                                        className="w-4 h-4 flex-shrink-0 mt-1"
                                        style={{ background: "var(--primary-color, #50c878)" }}
                                    />
                                </div>

                                <blockquote 
                                    className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                                    style={{ 
                                        color: "var(--background-text, #50c878)",
                                        fontFamily: "var(--body-font-family, 'VT323')",
                                        fontSize: "1.5rem",
                                        lineHeight: "1.6"
                                    }}
                                >
                                    {slideData?.quote || 'THE ONLY WINNING MOVE IS NOT TO PLAY. SOMETIMES THE ONLY CHOICE IS TO BREAK THE RULES AND START A NEW GAME.'}
                                </blockquote>

                                {/* Author with pixel divider */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="flex gap-1">
                                        {[...Array(8)].map((_, i) => (
                                            <div 
                                                key={i}
                                                className="w-2 h-2"
                                                style={{ background: "var(--stroke, rgba(80,200,120,0.35))" }}
                                            />
                                        ))}
                                    </div>
                                    <div 
                                        className="px-4 py-2 text-sm"
                                        style={{
                                            color: "var(--primary-color, #50c878)",
                                            fontFamily: "var(--heading-font-family, 'Press Start 2P')",
                                            border: "1px solid var(--stroke, rgba(80,200,120,0.35))"
                                        }}
                                    >
                                        {slideData?.author || 'WOPR - WAR GAMES'}
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(8)].map((_, i) => (
                                            <div 
                                                key={i}
                                                className="w-2 h-2"
                                                style={{ background: "var(--stroke, rgba(80,200,120,0.35))" }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom terminal line */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                />

                <style jsx>{`
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `}</style>
            </div>
        </>
    )
}

export default PixelRetroQuoteSlideLayout