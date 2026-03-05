import React from 'react'
import * as z from "zod";

export const layoutId = 'linen-clean-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A warm and approachable cover slide with linen texture aesthetic, featuring presentation title, subtitle, presenter info, and optional supporting image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Welcome to Our Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover innovative solutions that blend modern functionality with timeless design principles. Our approach focuses on creating meaningful experiences that resonate with your audience.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team collaborating in modern workspace")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Professional team collaborating in modern workspace"
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const LinenCleanIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Mitchell');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Text)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 right-8 w-16 h-16 rounded-full opacity-10"
                    style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                ></div>
                <div 
                    className="absolute bottom-12 left-12 w-1 h-24 opacity-15"
                    style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                ></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a3530)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-5">
                        {/* Title */}
                        <h1 
                            className="text-5xl font-normal leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--heading-font-family, DM Serif Text)"
                            }}
                        >
                            {slideData?.title || 'Welcome to Our Presentation'}
                        </h1>

                        {/* Accent line with small circle */}
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-12 h-px"
                                style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                            ></div>
                            <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                            ></div>
                        </div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}
                        >
                            {slideData?.description || 'Discover innovative solutions that blend modern functionality with timeless design principles. Our approach focuses on creating meaningful experiences that resonate with your audience.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-xl p-5 shadow-sm border"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.8))',
                                borderColor: 'var(--stroke, rgba(140, 120, 81, 0.15))',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Initials Circle */}
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "var(--primary-color, #8c7851)" }}
                                >
                                    <span 
                                        className="font-semibold text-sm"
                                        style={{ 
                                            color: "var(--primary-text, #ffffff)",
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-lg font-medium"
                                        style={{ 
                                            color: "var(--background-text, #3a3530)",
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Sarah Mitchell'}
                                    </span>
                                    <span 
                                        className="text-sm"
                                        style={{ 
                                            color: "var(--primary-color, #8c7851)",
                                            fontFamily: "var(--body-font-family, DM Sans)"
                                        }}
                                    >
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-80 rounded-xl overflow-hidden border shadow-sm">
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                                style={{
                                    borderColor: 'var(--stroke, rgba(140, 120, 81, 0.15))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinenCleanIntroSlide