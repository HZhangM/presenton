import React from 'react'
import * as z from "zod";

export const layoutId = 'blueprint-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A technical blueprint-style slide featuring a prominent quote with author attribution and background image, styled with engineering drawing aesthetics.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Technical Insight').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The best way to predict the future is to invent it. Engineering is about finding solutions to problems that haven\'t been solved before.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Alan Kay').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Technical blueprint engineering workspace") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Technical blueprint engineering workspace"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface BlueprintQuoteSlideProps {
    data?: Partial<QuoteSlideData>
}

const BlueprintQuoteSlide: React.FC<BlueprintQuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-2 px-3 py-2 border-2"
                            style={{ 
                                border: '1px dashed rgba(77,171,247,0.4)', 
                                background: 'rgba(77,171,247,0.06)',
                                borderRadius: '2px'
                            }}>
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-5 h-5" />}
                                {(slideData as any)?.__companyName__ && 
                                    <span className="text-xs font-medium uppercase tracking-wider" 
                                        style={{ color: 'var(--primary-text, #0d2137)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                                        {(slideData as any)?.__companyName__ || 'COMPANY'}
                                    </span>
                                }
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

                {/* Blueprint Grid Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(77,171,247,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(77,171,247,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Technical Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--primary-color, #4dabf7)', opacity: 0.85 }}
                />

                {/* Crosshair Corner Markers */}
                <div className="absolute top-4 left-4 w-4 h-4" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>
                    <div className="absolute top-2 left-0 w-4 h-0.5" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                    <div className="absolute top-0 left-2 w-0.5 h-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4">
                    <div className="absolute top-2 left-0 w-4 h-0.5" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                    <div className="absolute top-0 left-2 w-0.5 h-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 w-4 h-4">
                    <div className="absolute top-2 left-0 w-4 h-0.5" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                    <div className="absolute top-0 left-2 w-0.5 h-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                </div>
                <div className="absolute bottom-4 right-4 w-4 h-4">
                    <div className="absolute top-2 left-0 w-4 h-0.5" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                    <div className="absolute top-0 left-2 w-0.5 h-4" style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-16 py-16 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-12 max-w-4xl mx-auto">
                        
                        {/* Technical Title Block */}
                        <div className="space-y-6">
                            <div className="px-6 py-3 inline-block"
                                style={{ 
                                    border: '1px dashed rgba(77,171,247,0.35)', 
                                    background: 'rgba(77,171,247,0.06)',
                                    borderRadius: '2px'
                                }}>
                                <h1 
                                    className="text-2xl font-bold uppercase tracking-wider leading-tight"
                                    style={{ 
                                        color: "var(--primary-text, #0d2137)",
                                        fontFamily: "var(--heading-font-family, JetBrains Mono)"
                                    }}
                                >
                                    {slideData?.heading || 'TECHNICAL INSIGHT'}
                                </h1>
                            </div>
                            
                            {/* Dimension Line */}
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-8 h-0.5" style={{ background: "var(--stroke, rgba(77,171,247,0.35))" }}></div>
                                <div className="w-2 h-2 rotate-45 border" style={{ borderColor: "var(--stroke, rgba(77,171,247,0.35))" }}></div>
                                <div className="w-8 h-0.5" style={{ background: "var(--stroke, rgba(77,171,247,0.35))" }}></div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-8">
                            {/* Quote Container */}
                            <div className="px-8 py-8"
                                style={{ 
                                    border: '1px dashed rgba(77,171,247,0.35)', 
                                    background: 'rgba(77,171,247,0.06)',
                                    borderRadius: '2px'
                                }}>
                                
                                {/* Technical Quote Mark */}
                                <div className="flex justify-center mb-6">
                                    <div className="text-4xl font-mono" style={{ color: "var(--primary-text, #0d2137)" }}>
                                        "
                                    </div>
                                </div>

                                {/* Quote Text */}
                                <blockquote 
                                    className="text-lg font-medium leading-relaxed"
                                    style={{ 
                                        color: "var(--primary-text, #0d2137)",
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }}
                                >
                                    {slideData?.quote || 'The best way to predict the future is to invent it. Engineering is about finding solutions to problems that haven\'t been solved before.'}
                                </blockquote>
                            </div>

                            {/* Author Attribution */}
                            <div className="flex justify-center items-center space-x-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono opacity-60" style={{ color: "var(--primary-text, #0d2137)" }}>
                                        +
                                    </span>
                                    <div className="w-12 h-0.5" style={{ background: "var(--stroke, rgba(77,171,247,0.35))" }}></div>
                                </div>
                                <cite 
                                    className="text-sm font-medium not-italic uppercase tracking-wider px-3 py-1"
                                    style={{ 
                                        color: "var(--primary-text, #0d2137)",
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)",
                                        border: '1px dashed rgba(77,171,247,0.35)', 
                                        background: 'rgba(77,171,247,0.06)',
                                        borderRadius: '2px'
                                    }}
                                >
                                    {slideData?.author || 'ALAN KAY'}
                                </cite>
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-0.5" style={{ background: "var(--stroke, rgba(77,171,247,0.35))" }}></div>
                                    <span className="text-xs font-mono opacity-60" style={{ color: "var(--primary-text, #0d2137)" }}>
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Drawing Border */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full" 
                        style={{ 
                            border: '2px dashed rgba(77,171,247,0.4)',
                            borderRadius: '2px'
                        }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueprintQuoteSlide