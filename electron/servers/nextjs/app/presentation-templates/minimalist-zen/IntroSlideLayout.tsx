import React from 'react'
import * as z from "zod";

export const layoutId = 'minimalist-zen-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A minimalist zen-inspired intro slide with ultra-clean white space, subtle ink brush accents, and Japanese typography.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Mindful Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('A journey through simplicity and clarity, embracing the essence of minimal design to communicate profound ideas with elegant restraint.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Kenji Nakamura').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("zen garden with raked sand and stones") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Kenji Nakamura');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                }}
            >
                {/* Company Logo Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 opacity-60" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-normal tracking-wider" style={{ color: 'var(--background-text, #2d2d2d)', fontFamily: "var(--body-font-family, 'Noto Sans JP')" }}>
                                    {(slideData as any)?.__companyName__ || ''}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Enso Circle */}
                <div className="absolute top-32 right-24 w-16 h-16 opacity-15">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="var(--primary-color, #1a1a1a)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="240 10"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                </div>

                {/* Decorative Horizontal Line */}
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 w-32 h-px opacity-20"
                    style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-16 py-20">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-20 space-y-12">
                        {/* Title */}
                        <h1 
                            className="text-5xl lg:text-6xl font-normal leading-tight tracking-wide"
                            style={{ 
                                color: "var(--background-text, #2d2d2d)",
                                fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                            }}
                        >
                            {slideData?.title || 'Mindful Presentation'}
                        </h1>

                        {/* Subtle Divider */}
                        <div 
                            className="w-20 h-px"
                            style={{ background: "var(--primary-color, #1a1a1a)" }}
                        ></div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-loose font-light tracking-wide max-w-lg"
                            style={{ 
                                color: "var(--background-text, #2d2d2d)",
                                fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                            }}
                        >
                            {slideData?.description || 'A journey through simplicity and clarity, embracing the essence of minimal design to communicate profound ideas with elegant restraint.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="mt-16 pt-8">
                            <div 
                                className="w-16 h-px mb-6"
                                style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            ></div>
                            <div className="flex items-center gap-6">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border"
                                    style={{ 
                                        borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))",
                                        background: "transparent"
                                    }}
                                >
                                    <span 
                                        className="font-light text-sm tracking-wider"
                                        style={{ 
                                            color: "var(--background-text, #2d2d2d)",
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div>
                                    <span 
                                        className="text-lg font-normal tracking-wide block"
                                        style={{ 
                                            color: "var(--background-text, #2d2d2d)",
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Kenji Nakamura'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-20">
                        <div className="w-full max-w-md h-72 relative">
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover opacity-90"
                                style={{ 
                                    filter: 'saturate(0.8) contrast(0.9)'
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