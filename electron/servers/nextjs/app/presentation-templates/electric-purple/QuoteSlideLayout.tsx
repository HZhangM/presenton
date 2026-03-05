import React from 'react'
import * as z from "zod";

export const layoutId = 'electric-purple-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and background image with electric purple theme.'

const Schema = z.object({
    heading: z.string().min(3).max(30).default('Inspiration').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The future belongs to those who believe in the beauty of their dreams and have the courage to pursue them with unwavering determination.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Eleanor Roosevelt').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({
        __image_url__: z.string().default('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'),
        __image_prompt__: z.string().min(10).max(50).default('Inspirational mountain landscape with dramatic sky')
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        __image_prompt__: 'Inspirational mountain landscape with dramatic sky'
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

export type QuoteSlideData = z.infer<typeof Schema>

interface QuoteSlideLayoutProps {
    data?: Partial<QuoteSlideData>
}

const ElectricPurpleQuoteSlide: React.FC<QuoteSlideLayoutProps> = ({ data: slideData }) => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Urbanist)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8d0ff)' }}>
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
                    style={{ backgroundColor: 'rgba(26, 0, 48, 0.75)' }}
                />

                {/* Decorative Elements */}
                <div 
                    className="absolute top-10 right-20 w-32 h-32 rounded-full opacity-20"
                    style={{ 
                        background: 'var(--primary-color, #bb86fc)',
                        boxShadow: '0 0 60px var(--primary-color, #bb86fc)',
                        filter: 'blur(20px)'
                    }}
                />
                <div 
                    className="absolute bottom-16 left-16 w-24 h-24 opacity-15"
                    style={{ 
                        background: 'linear-gradient(45deg, var(--primary-color, #bb86fc), transparent)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}
                />

                {/* Main Content */}
                <div className="relative z-20 px-16 py-16 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-4xl font-bold leading-tight"
                                style={{ color: "var(--background-text, #e8d0ff)" }}
                            >
                                {slideData?.heading || 'Inspiration'}
                            </h1>
                            {/* Gradient divider */}
                            <div 
                                className="w-24 h-0.5 mx-auto"
                                style={{ 
                                    background: `linear-gradient(to right, transparent, var(--primary-color, #bb86fc), transparent)`
                                }}
                            />
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Icon */}
                            <div className="flex justify-center">
                                <svg
                                    className="w-12 h-12 opacity-60"
                                    style={{ color: "var(--primary-color, #bb86fc)" }}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl font-medium leading-relaxed italic"
                                style={{ color: "var(--background-text, #e8d0ff)" }}
                            >
                                "{slideData?.quote || 'The future belongs to those who believe in the beauty of their dreams and have the courage to pursue them with unwavering determination.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4">
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--primary-color, #bb86fc)" }}
                                />
                                <cite 
                                    className="text-lg font-semibold not-italic"
                                    style={{ 
                                        color: "var(--primary-color, #bb86fc)",
                                        textShadow: `0 0 20px var(--primary-color, #bb86fc)`
                                    }}
                                >
                                    {slideData?.author || 'Eleanor Roosevelt'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--primary-color, #bb86fc)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom accent border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ 
                        background: `linear-gradient(to right, transparent, var(--primary-color, #bb86fc), transparent)`,
                        boxShadow: `0 0 10px var(--primary-color, #bb86fc)`
                    }}
                />
            </div>
        </>
    )
}

export default ElectricPurpleQuoteSlide