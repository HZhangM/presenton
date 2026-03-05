import React from 'react'
import * as z from "zod";

export const layoutId = 'aurora-borealis-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with aurora borealis theme.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Northern Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('Like the aurora borealis dancing across the night sky, true innovation emerges from the harmony between darkness and light, creating something magnificent and unforgettable.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Arctic Explorer').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Northern lights aurora over snowy landscape") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        __image_prompt__: "Northern lights aurora over snowy landscape"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const AuroraBorealisQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poppins)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #d0e8e0)' }}>
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

                {/* Aurora Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-purple-900/40"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-80 h-80 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-96 h-96 opacity-15">
                    <div className="w-full h-full bg-gradient-to-tl from-purple-400/30 via-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                {/* Flowing Aurora Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1280 720">
                    <defs>
                        <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary-color, #4ecca3)', stopOpacity: 0.6 }} />
                            <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 0.4 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--primary-color, #4ecca3)', stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,200 Q320,150 640,180 T1280,160"
                        fill="none"
                        stroke="url(#aurora-gradient)"
                        strokeWidth="2"
                        opacity="0.8"
                    />
                    <path
                        d="M0,400 Q320,350 640,380 T1280,360"
                        fill="none"
                        stroke="url(#aurora-gradient)"
                        strokeWidth="1.5"
                        opacity="0.6"
                    />
                </svg>

                {/* Main Content */}
                <div className="relative z-20 px-16 pt-20 pb-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                                style={{ color: "var(--background-text, #d0e8e0)" }}
                            >
                                {slideData?.heading || 'Northern Inspiration'}
                            </h1>
                            
                            {/* Aurora Accent Line */}
                            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" 
                                 style={{ background: "linear-gradient(to right, transparent, var(--primary-color, #4ecca3), transparent)" }}>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Icon with Aurora Glow */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"></div>
                                    <svg
                                        className="relative w-12 h-12 opacity-90"
                                        style={{ color: "var(--primary-color, #4ecca3)" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote Text with Glass Effect */}
                            <div 
                                className="px-8 py-6 rounded-2xl backdrop-filter backdrop-blur-sm"
                                style={{ 
                                    background: "var(--card-color, rgba(78, 204, 163, 0.08))",
                                    border: "1px solid var(--stroke, rgba(78, 204, 163, 0.25))"
                                }}
                            >
                                <blockquote 
                                    className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed italic"
                                    style={{ 
                                        color: "var(--background-text, #d0e8e0)",
                                        fontFamily: "var(--body-font-family, 'Nunito Sans')"
                                    }}
                                >
                                    "{slideData?.quote || 'Like the aurora borealis dancing across the night sky, true innovation emerges from the harmony between darkness and light, creating something magnificent and unforgettable.'}"
                                </blockquote>
                            </div>

                            {/* Author with Aurora Dividers */}
                            <div className="flex justify-center items-center space-x-6">
                                <div className="w-20 h-px bg-gradient-to-r from-transparent to-emerald-400/60"></div>
                                <cite 
                                    className="text-base sm:text-lg font-semibold not-italic px-4"
                                    style={{ color: "var(--primary-color, #4ecca3)" }}
                                >
                                    {slideData?.author || 'Arctic Explorer'}
                                </cite>
                                <div className="w-20 h-px bg-gradient-to-l from-transparent to-emerald-400/60"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Aurora Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/40 via-purple-400/40 to-emerald-400/40"></div>
            </div>
        </>
    )
}

export default AuroraBorealisQuoteSlide