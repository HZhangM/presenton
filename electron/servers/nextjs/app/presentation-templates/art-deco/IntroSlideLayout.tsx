import React from 'react'
import * as z from "zod";

export const layoutId = 'art-deco-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'An Art Deco themed intro slide with geometric patterns, gold accents, and elegant typography'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Presentation Title').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('An elegant presentation showcasing timeless design principles with modern applications. Experience the luxury and sophistication of the golden age.').meta({
        description: "Subtitle or description text",
    }),
    presenterName: z.string().min(2).max(50).default('Alexandra Sterling').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Art Deco architectural details") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Alexandra Sterling');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poiret One)"
                }}
            >
                {/* Art Deco Decorative Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 opacity-20" style={{ color: 'var(--primary-color, #d4af37)' }}>
                    <svg viewBox="0 0 64 64" fill="currentColor">
                        <path d="M32 8 L48 24 L32 32 L16 24 Z" />
                        <path d="M32 32 L44 40 L32 48 L20 40 Z" />
                        <path d="M32 48 L40 56 L32 64 L24 56 Z" />
                    </svg>
                </div>

                <div className="absolute bottom-8 right-8 w-20 h-20 opacity-15" style={{ color: 'var(--primary-color, #d4af37)' }}>
                    <svg viewBox="0 0 80 80" fill="currentColor">
                        <path d="M40 0 L60 20 L80 0 L80 40 L60 20 L80 40 L60 60 L80 80 L40 80 L20 60 L40 80 L0 80 L0 40 L20 60 L0 40 L20 20 L0 0 L40 0 Z" />
                    </svg>
                </div>

                {/* Company Logo Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-base font-light tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #e8d8b8)',
                                            fontFamily: 'var(--heading-font-family, Poiret One)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Decorative Corner Bracket */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-8 h-8" style={{ color: 'var(--primary-color, #d4af37)' }}>
                                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M0 8 L8 8 L8 0" />
                                    <path d="M0 0 L8 0" />
                                    <path d="M0 0 L0 8" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h1 
                                className="text-5xl font-light leading-tight tracking-wide"
                                style={{ 
                                    color: "var(--background-text, #e8d8b8)",
                                    fontFamily: "var(--heading-font-family, Poiret One)",
                                    letterSpacing: '0.1em'
                                }}
                            >
                                {slideData?.title || 'Presentation Title'}
                            </h1>
                        </div>

                        {/* Art Deco Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent flex-1" style={{ color: 'var(--primary-color, #d4af37)' }}></div>
                            <div className="w-3 h-3 rotate-45 border" style={{ borderColor: 'var(--primary-color, #d4af37)' }}></div>
                            <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent flex-1" style={{ color: 'var(--primary-color, #d4af37)' }}></div>
                        </div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed font-light"
                            style={{ 
                                color: "var(--background-text, #e8d8b8)",
                                fontFamily: "var(--body-font-family, Josefin Sans)"
                            }}
                        >
                            {slideData?.description || 'An elegant presentation showcasing timeless design principles with modern applications. Experience the luxury and sophistication of the golden age.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="mt-8 p-6 border"
                            style={{
                                backgroundColor: 'var(--card-color, rgba(212, 175, 55, 0.06))',
                                borderColor: 'var(--stroke, rgba(212, 175, 55, 0.3))',
                                borderRadius: 0
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Art Deco Styled Avatar */}
                                <div 
                                    className="w-12 h-12 flex items-center justify-center border-2"
                                    style={{ 
                                        backgroundColor: 'var(--primary-color, #d4af37)',
                                        borderColor: 'var(--primary-color, #d4af37)',
                                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                                    }}
                                >
                                    <span 
                                        className="font-medium text-sm tracking-wide"
                                        style={{ 
                                            color: "var(--primary-text, #0a2a2a)",
                                            fontFamily: "var(--heading-font-family, Poiret One)"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-xl font-light tracking-wide"
                                        style={{ 
                                            color: "var(--background-text, #e8d8b8)",
                                            fontFamily: "var(--heading-font-family, Poiret One)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Alexandra Sterling'}
                                    </span>
                                    <span 
                                        className="text-sm font-light tracking-wider"
                                        style={{ 
                                            color: "var(--primary-color, #d4af37)",
                                            fontFamily: "var(--body-font-family, Josefin Sans)"
                                        }}
                                    >
                                        PRESENTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="relative w-full max-w-md h-96">
                            {/* Art Deco Frame */}
                            <div 
                                className="absolute inset-0 border-2"
                                style={{ 
                                    borderColor: 'var(--stroke, rgba(212, 175, 55, 0.3))',
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                                }}
                            >
                                <img
                                    src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                    alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Art Deco architectural details'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout