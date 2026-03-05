import React from 'react'
import * as z from "zod";

export const layoutId = 'ocean-deep-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover/title slide with presentation title, subtitle/description, presenter info, and optional image in ocean deep theme.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Ocean Deep Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Dive into comprehensive insights with fluid data visualization and seamless integration. Experience the depth of analytics that flows naturally with your business needs.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Marina Waters').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Ocean waves deep blue underwater scene") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Ocean waves deep blue underwater scene"
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const OceanDeepIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Marina Waters');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Raleway)"
                }}
            >
                {/* Decorative Wave Element */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M0,50 Q50,0 100,50 T200,50 L200,0 L0,0 Z" fill="var(--primary-color, #00bcd4)" />
                        <path d="M0,100 Q50,50 100,100 T200,100 L200,50 Q150,100 100,50 T0,50 Z" fill="var(--primary-color, #00bcd4)" opacity="0.6" />
                    </svg>
                </div>

                {/* Bubble Decorations */}
                <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full opacity-20 pointer-events-none" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                <div className="absolute top-20 left-1/4 w-4 h-4 rounded-full opacity-15 pointer-events-none" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                <div className="absolute bottom-32 right-24 w-6 h-6 rounded-full opacity-25 pointer-events-none" style={{ background: "var(--primary-color, #00bcd4)" }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #c8e0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-12 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #c8e0f0)" }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {slideData?.title || 'Ocean Deep Presentation'}
                        </h1>

                        {/* Flowing accent line */}
                        <div className="relative w-32 h-2">
                            <svg viewBox="0 0 128 8" className="w-full h-full">
                                <path d="M0,4 Q32,0 64,4 T128,4" stroke="var(--primary-color, #00bcd4)" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        {/* Description */}
                        <p style={{ 
                            color: "var(--background-text, #c8e0f0)", 
                            fontFamily: "var(--body-font-family, 'Open Sans')"
                        }} className="text-base sm:text-lg leading-relaxed opacity-90">
                            {slideData?.description || 'Dive into comprehensive insights with fluid data visualization and seamless integration. Experience the depth of analytics that flows naturally with your business needs.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-2xl p-4 lg:p-6 backdrop-blur-sm"
                            style={{
                                border: '1px solid rgba(0,188,212,0.15)',
                                background: 'rgba(0,188,212,0.06)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div 
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border"
                                    style={{ 
                                        background: "var(--primary-color, #00bcd4)",
                                        borderColor: "rgba(0,188,212,0.3)"
                                    }}
                                >
                                    <span className="font-bold text-sm lg:text-base" style={{ color: "var(--primary-text, #0a1628)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #c8e0f0)" }} className="text-lg lg:text-xl font-bold">
                                        {slideData?.presenterName || 'Marina Waters'}
                                    </span>
                                    <span style={{ color: "var(--primary-color, #00bcd4)" }} className="text-sm lg:text-base font-medium">
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm"
                            style={{
                                border: '1px solid rgba(0,188,212,0.2)',
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Ocean deep underwater scene'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OceanDeepIntroSlide