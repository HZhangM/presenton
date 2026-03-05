import React from 'react'
import * as z from "zod";

export const layoutId = 'marble-classic-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A classical marble-themed cover slide with elegant typography, title, subtitle, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Executive Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('A comprehensive overview of strategic initiatives and market opportunities designed to drive sustainable growth and establish lasting competitive advantage.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Victoria Sterling').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Elegant boardroom with marble columns") 
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
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 opacity-5">
                    <div className="w-full h-full border border-gray-300 rounded-full transform rotate-45"></div>
                    <div className="absolute inset-4 border border-gray-300 rounded-full"></div>
                </div>
                
                <div className="absolute bottom-12 left-12 w-24 h-px bg-gray-300 opacity-20"></div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        fontFamily: 'var(--body-font-family, Montserrat)'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-6">
                        {/* Title */}
                        <h1 
                            style={{ color: "var(--background-text, #2a2a2a)" }} 
                            className="text-5xl font-bold leading-tight tracking-wide"
                        >
                            {slideData?.title || 'Executive Presentation'}
                        </h1>

                        {/* Decorative Divider */}
                        <div className="flex items-center gap-3">
                            <div style={{ background: "var(--primary-color, #4a4a4a)" }} className="h-px flex-1"></div>
                            <div 
                                style={{ borderColor: "var(--primary-color, #4a4a4a)" }} 
                                className="w-2 h-2 border transform rotate-45"
                            ></div>
                            <div style={{ background: "var(--primary-color, #4a4a4a)" }} className="h-px w-12"></div>
                        </div>

                        {/* Description */}
                        <p 
                            style={{ 
                                color: "var(--primary-color, #4a4a4a)",
                                fontFamily: 'var(--body-font-family, Montserrat)'
                            }} 
                            className="text-lg leading-relaxed font-light"
                        >
                            {slideData?.description || 'A comprehensive overview of strategic initiatives and market opportunities designed to drive sustainable growth and establish lasting competitive advantage.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded border p-5 shadow-sm"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid rgba(0, 0, 0, 0.06)',
                                borderRadius: '4px',
                                boxShadow: '0 2px 16px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    style={{ background: "var(--primary-color, #4a4a4a)" }} 
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                >
                                    <span 
                                        className="font-semibold text-sm tracking-wider"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div>
                                    <span 
                                        style={{ color: "var(--background-text, #2a2a2a)" }} 
                                        className="text-xl font-semibold tracking-wide block"
                                    >
                                        {slideData?.presenterName || 'Victoria Sterling'}
                                    </span>
                                    <span 
                                        style={{ 
                                            color: "var(--primary-color, #4a4a4a)",
                                            fontFamily: 'var(--body-font-family, Montserrat)'
                                        }} 
                                        className="text-sm font-medium tracking-wide"
                                    >
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-80 rounded overflow-hidden shadow-lg border border-gray-100">
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout