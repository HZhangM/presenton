import React from 'react'
import * as z from "zod";

export const layoutId = 'origami-paper-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with origami paper styling.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The journey of a thousand miles begins with one step. Every great achievement starts with the courage to begin.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Lao Tzu').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Soft zen garden with paper origami birds")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Soft zen garden with paper origami birds"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface QuoteSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const OrigamiPaperQuoteSlide: React.FC<QuoteSlideProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #2d2d3d)' }}>
                                    {(slideData as any)?.__companyName__}
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

                {/* Paper Layer Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.75) 100%)",
                    }}
                ></div>

                {/* Decorative Origami Elements */}
                <div className="absolute top-20 left-16 w-0 h-0 border-l-16 border-r-16 border-b-28 border-l-transparent border-r-transparent opacity-10"
                     style={{ borderBottomColor: "var(--primary-color, #e07a5f)" }}></div>
                <div className="absolute bottom-24 right-20 w-0 h-0 border-l-20 border-r-20 border-t-32 border-l-transparent border-r-transparent opacity-8"
                     style={{ borderTopColor: "var(--primary-color, #e07a5f)" }}></div>
                <div className="absolute top-32 right-32 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent opacity-6"
                     style={{ borderBottomColor: "var(--stroke, rgba(224, 122, 95, 0.15))" }}></div>

                {/* Main Content Card */}
                <div className="relative z-10 px-16 py-12 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        
                        {/* Paper Card Container */}
                        <div className="bg-white/85 border border-black/6 rounded-sm p-12 shadow-lg" 
                             style={{ 
                                background: "var(--card-color, rgba(255, 255, 255, 0.85))",
                                border: "1px solid rgba(224,122,95,0.12)",
                                borderRadius: "4px",
                                boxShadow: "4px 4px 0 rgba(0,0,0,0.04)"
                             }}>
                            
                            {/* Heading */}
                            <div className="space-y-4 mb-8">
                                <h1 className="text-2xl font-600 leading-tight" 
                                    style={{ 
                                        color: "var(--background-text, #2d2d3d)",
                                        fontFamily: "var(--heading-font-family, Outfit)"
                                    }}>
                                    {slideData?.heading || 'Inspiration'}
                                </h1>
                                
                                {/* Origami Fold Divider */}
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(224, 122, 95, 0.15))" }}></div>
                                    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-l-transparent border-r-transparent"
                                         style={{ borderBottomColor: "var(--primary-color, #e07a5f)" }}></div>
                                    <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(224, 122, 95, 0.15))" }}></div>
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="space-y-6">
                                {/* Quote Icon */}
                                <div className="flex justify-center">
                                    <svg
                                        className="w-10 h-10 opacity-60"
                                        style={{ color: "var(--primary-color, #e07a5f)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-2xl font-500 leading-relaxed italic" 
                                           style={{ 
                                               color: "var(--background-text, #2d2d3d)",
                                               fontFamily: "var(--body-font-family, Nunito Sans)"
                                           }}>
                                    "{slideData?.quote || 'The journey of a thousand miles begins with one step. Every great achievement starts with the courage to begin.'}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex justify-center items-center space-x-3 mt-6">
                                    <div className="w-12 h-px" style={{ background: "var(--primary-color, #e07a5f)" }}></div>
                                    <cite className="text-base font-600 not-italic"
                                          style={{ 
                                              color: "var(--primary-color, #e07a5f)",
                                              fontFamily: "var(--heading-font-family, Outfit)"
                                          }}>
                                        {slideData?.author || 'Lao Tzu'}
                                    </cite>
                                    <div className="w-12 h-px" style={{ background: "var(--primary-color, #e07a5f)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrigamiPaperQuoteSlide