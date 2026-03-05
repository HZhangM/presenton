import React from 'react'
import * as z from "zod";

export const layoutId = 'stained-glass-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image in stained glass theme.'

const stainedGlassQuoteSlideSchema = z.object({
    heading: z.string().min(3).max(30).default('Sacred Words').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Faith is taking the first step even when you don\'t see the whole staircase. The light shines in the darkness, and the darkness has not overcome it.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Martin Luther King Jr.').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Beautiful cathedral stained glass window") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1548625361-1ad5b5f9bb91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
        __image_prompt__: 'Beautiful cathedral stained glass window'
    }).meta({
        description: "Background image for the slide",
    })
})

export const Schema = stainedGlassQuoteSlideSchema

export type StainedGlassQuoteSlideData = z.infer<typeof stainedGlassQuoteSlideSchema>

interface StainedGlassQuoteSlideLayoutProps {
    data?: Partial<StainedGlassQuoteSlideData>
}

const StainedGlassQuoteSlideLayout: React.FC<StainedGlassQuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Merriweather)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #e8e0d0)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                ></div>

                <div className="absolute top-8 left-8 w-20 h-20 opacity-20" style={{ color: 'var(--primary-color, #c0392b)' }}>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>

                <div className="absolute bottom-8 right-8 w-16 h-16 opacity-15" style={{ color: 'var(--primary-color, #c0392b)' }}>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                </div>

                <div className="relative z-10 px-16 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        <div className="space-y-4">
                            <h1 
                                className="text-3xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #e8e0d0)",
                                    fontFamily: "var(--heading-font-family, Merriweather)"
                                }}
                            >
                                {slideData?.heading || 'Sacred Words'}
                            </h1>
                            
                            <div className="flex items-center justify-center space-x-4">
                                <div 
                                    className="w-16 h-px"
                                    style={{ background: "var(--primary-color, #c0392b)" }}
                                ></div>
                                <div 
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: "var(--primary-color, #c0392b)" }}
                                ></div>
                                <div 
                                    className="w-16 h-px"
                                    style={{ background: "var(--primary-color, #c0392b)" }}
                                ></div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <svg
                                    className="w-10 h-10 opacity-80"
                                    style={{ color: "var(--primary-color, #c0392b)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            <div 
                                className="p-6 rounded-lg"
                                style={{ 
                                    border: '1px solid rgba(255,255,255,0.1)', 
                                    background: 'rgba(0,0,0,0.4)', 
                                    backdropFilter: 'blur(6px)',
                                    borderRadius: '8px'
                                }}
                            >
                                <blockquote 
                                    className="text-2xl font-medium leading-relaxed italic"
                                    style={{ 
                                        color: "var(--background-text, #e8e0d0)",
                                        fontFamily: "var(--heading-font-family, Merriweather)"
                                    }}
                                >
                                    "{slideData?.quote || 'Faith is taking the first step even when you don\'t see the whole staircase. The light shines in the darkness, and the darkness has not overcome it.'}"
                                </blockquote>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
                                ></div>
                                <cite 
                                    className="text-lg font-medium not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #c0392b)",
                                        fontFamily: "var(--body-font-family, Merriweather Sans)"
                                    }}
                                >
                                    {slideData?.author || 'Martin Luther King Jr.'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
                ></div>
            </div>
        </>
    )
}

export default StainedGlassQuoteSlideLayout