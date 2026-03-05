import React from 'react'
import * as z from "zod";

export const layoutId = 'luxury-gold-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A premium cover slide with sophisticated gold accents, elegant typography, and luxury styling for presentation titles and presenter information.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('EXECUTIVE BRIEFING').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('An exclusive presentation showcasing premium market insights, strategic vision, and unparalleled excellence in delivering transformative business solutions.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Victoria Sterling').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Luxury boardroom with elegant decor") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Luxury boardroom with elegant decor"
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const IntroSlideLayout: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Victoria Sterling');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cinzel)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-8 w-16 h-16 opacity-20 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, var(--primary-color, #d4a843), transparent)`,
                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }}
                />
                
                <div 
                    className="absolute bottom-12 left-8 w-24 h-1 opacity-30"
                    style={{ background: `linear-gradient(90deg, var(--primary-color, #d4a843), transparent)` }}
                />

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #e8d5b0)',
                                            fontFamily: 'var(--heading-font-family, Cinzel)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="relative z-10 flex h-full px-12 pt-20 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <div className="space-y-4">
                            <h1 
                                className="text-5xl lg:text-6xl font-black leading-tight tracking-wider"
                                style={{ 
                                    color: "var(--background-text, #e8d5b0)",
                                    background: `linear-gradient(135deg, var(--primary-color, #d4a843), var(--background-text, #e8d5b0))`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {slideData?.title || 'EXECUTIVE BRIEFING'}
                            </h1>
                            
                            {/* Decorative line */}
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-px"
                                    style={{ background: "var(--primary-color, #d4a843)" }}
                                />
                                <div 
                                    className="w-3 h-3 rotate-45"
                                    style={{ 
                                        background: "var(--primary-color, #d4a843)",
                                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                                    }}
                                />
                                <div 
                                    className="w-16 h-px"
                                    style={{ background: "var(--primary-color, #d4a843)" }}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p 
                            className="text-xl leading-relaxed font-medium"
                            style={{ 
                                color: "var(--background-text, #e8d5b0)",
                                fontFamily: "var(--body-font-family, 'EB Garamond')"
                            }}
                        >
                            {slideData?.description || 'An exclusive presentation showcasing premium market insights, strategic vision, and unparalleled excellence in delivering transformative business solutions.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded p-6"
                            style={{
                                border: '1px solid rgba(212,168,67,0.2)',
                                background: 'rgba(212,168,67,0.04)',
                                borderRadius: '4px'
                            }}
                        >
                            <div className="flex items-center gap-6">
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                                    style={{ 
                                        background: "var(--primary-color, #d4a843)",
                                        borderColor: "var(--primary-color, #d4a843)"
                                    }}
                                >
                                    <span 
                                        className="font-bold text-lg"
                                        style={{ color: "var(--primary-text, #1a1a1a)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span 
                                        className="text-2xl font-bold tracking-wide"
                                        style={{ 
                                            color: "var(--background-text, #e8d5b0)",
                                            fontFamily: "var(--heading-font-family, Cinzel)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Victoria Sterling'}
                                    </span>
                                    <span 
                                        className="text-base font-medium opacity-80"
                                        style={{ 
                                            color: "var(--primary-color, #d4a843)",
                                            fontFamily: "var(--body-font-family, 'EB Garamond')"
                                        }}
                                    >
                                        Executive Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-96 overflow-hidden relative"
                            style={{
                                border: '1px solid rgba(212,168,67,0.3)',
                                borderRadius: '4px'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                            <div 
                                className="absolute inset-0 opacity-20"
                                style={{ 
                                    background: `linear-gradient(135deg, transparent 60%, var(--primary-color, #d4a843))`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout