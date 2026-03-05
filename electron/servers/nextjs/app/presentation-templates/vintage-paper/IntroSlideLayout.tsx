import React from 'react'
import * as z from "zod";

export const layoutId = 'vintage-paper-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A vintage paper themed cover slide with aged parchment aesthetic, classic serif typography, and ornamental flourishes.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Product Overview').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our comprehensive solution delivers customizable dashboards with real-time analytics and seamless integration capabilities for enhanced operational efficiency.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Eleanor Whitmore').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Professional portrait in vintage sepia style") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Eleanor Whitmore');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #3a2e1e)', fontFamily: "var(--heading-font-family, 'Playfair Display')" }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative flourish elements */}
                <div className="absolute top-8 right-8 opacity-10" style={{ color: 'var(--primary-color, #8b4513)' }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="currentColor">
                        <path d="M60 40c-20-20-40-10-40 0s20 20 40 0c20 20 40 10 40 0s-20-20-40 0z" opacity="0.3"/>
                        <circle cx="20" cy="20" r="2" />
                        <circle cx="100" cy="60" r="2" />
                        <circle cx="60" cy="15" r="1.5" />
                    </svg>
                </div>

                <div className="absolute bottom-8 left-8 opacity-8" style={{ color: 'var(--primary-color, #8b4513)' }}>
                    <svg width="100" height="60" viewBox="0 0 100 60" fill="currentColor">
                        <path d="M10 30h20l-5-10h10l-5 10h20l-5-10h10l-5 10h20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2"/>
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Ornamental divider top */}
                        <div className="flex items-center mb-4">
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(139, 69, 19, 0.25))' }}></div>
                            <div className="px-4" style={{ color: 'var(--primary-color, #8b4513)' }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 2l2 6-6-2 6 2-2 6 2-6 6 2-6-2z" opacity="0.6"/>
                                </svg>
                            </div>
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(139, 69, 19, 0.25))' }}></div>
                        </div>

                        {/* Title with drop cap styling */}
                        <div>
                            <h1 style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--heading-font-family, 'Playfair Display')"
                            }} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                <span style={{ 
                                    fontSize: '1.4em', 
                                    float: 'left',
                                    lineHeight: '0.8',
                                    paddingRight: '8px',
                                    paddingTop: '4px',
                                    color: 'var(--primary-color, #8b4513)'
                                }}>
                                    {(slideData?.title || 'Product Overview').charAt(0)}
                                </span>
                                {(slideData?.title || 'Product Overview').slice(1)}
                            </h1>
                        </div>

                        {/* Ornamental accent line */}
                        <div className="flex items-center my-6">
                            <div className="w-16 h-px" style={{ background: "var(--primary-color, #8b4513)" }}></div>
                            <div className="w-2 h-2 mx-2 transform rotate-45 border" style={{ borderColor: 'var(--primary-color, #8b4513)' }}></div>
                            <div className="w-8 h-px" style={{ background: "var(--primary-color, #8b4513)" }}></div>
                        </div>

                        {/* Description */}
                        <p style={{ 
                            color: "var(--background-text, #3a2e1e)",
                            fontFamily: "var(--body-font-family, 'Crimson Text')"
                        }} className="text-lg sm:text-xl leading-relaxed font-normal">
                            {slideData?.description || 'Our comprehensive solution delivers customizable dashboards with real-time analytics and seamless integration capabilities for enhanced operational efficiency.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="mt-8 p-6 rounded-sm" style={{
                            background: 'var(--card-color, rgba(139, 69, 19, 0.06))',
                            border: '1px solid var(--stroke, rgba(139, 69, 19, 0.15))'
                        }}>
                            <div className="flex items-center gap-4">
                                <div style={{ 
                                    background: "var(--primary-color, #8b4513)",
                                    border: '1px solid rgba(139, 69, 19, 0.2)'
                                }} className="w-14 h-14 rounded-sm flex items-center justify-center">
                                    <span className="font-bold text-lg" style={{ 
                                        color: "var(--primary-text, #f5e6c8)",
                                        fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                    }}>
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ 
                                        color: "var(--background-text, #3a2e1e)",
                                        fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                    }} className="text-xl lg:text-2xl font-bold">
                                        {slideData?.presenterName || 'Dr. Eleanor Whitmore'}
                                    </span>
                                    <span style={{ 
                                        color: "var(--background-text, #3a2e1e)",
                                        fontFamily: "var(--body-font-family, 'Crimson Text')"
                                    }} className="text-base lg:text-lg opacity-80">
                                        Presented with distinction
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-96 rounded-sm overflow-hidden" style={{
                            border: '1px solid rgba(139, 69, 19, 0.2)',
                            boxShadow: '0 4px 12px rgba(139, 69, 19, 0.15)'
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                                style={{ filter: 'sepia(15%) saturate(80%) hue-rotate(15deg)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout