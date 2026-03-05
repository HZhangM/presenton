import React from 'react'
import * as z from "zod";

export const layoutId = 'chalk-pastel-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A soft chalk pastel art style intro slide with textured strokes and warm artistic palette.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Creative Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Bringing artistic vision to life through innovative design solutions. Our creative approach combines traditional art techniques with modern technology.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Johnson').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("artistic chalk pastel drawing workspace")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Johnson');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Kalam)"
                }}
            >
                {/* Decorative chalk dots */}
                <div className="absolute top-8 right-12 w-4 h-4 rounded-full opacity-30" style={{ backgroundColor: 'var(--primary-color, #e57373)' }}></div>
                <div className="absolute top-16 right-20 w-3 h-3 rounded-full opacity-25" style={{ backgroundColor: '#81c784' }}></div>
                <div className="absolute top-12 right-32 w-5 h-5 rounded-full opacity-20" style={{ backgroundColor: '#ffb74d' }}></div>

                {/* Wavy underline decoration */}
                <svg className="absolute bottom-20 left-12 opacity-20" width="200" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C20 2 40 6 60 4C80 2 100 6 120 4C140 2 160 6 180 4C190 3 195 5 200 4" 
                          stroke="var(--primary-color, #e57373)" strokeWidth="2" fill="none"/>
                </svg>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #3a3530)' }}>
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
                        {/* Title with handwritten style */}
                        <h1 style={{ 
                            color: "var(--background-text, #3a3530)",
                            fontFamily: "var(--heading-font-family, Kalam)"
                        }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight relative">
                            {slideData?.title || 'Creative Presentation'}
                            {/* Hand-drawn wavy underline */}
                            <svg className="absolute -bottom-2 left-0 w-full h-4 opacity-60" viewBox="0 0 400 16" fill="none">
                                <path d="M0 8C40 6 80 10 120 8C160 6 200 10 240 8C280 6 320 10 360 8C380 7 390 9 400 8" 
                                      stroke="var(--primary-color, #e57373)" strokeWidth="3" fill="none"/>
                            </svg>
                        </h1>

                        {/* Description with clean font */}
                        <p style={{ 
                            color: "var(--background-text, #3a3530)",
                            fontFamily: "var(--body-font-family, Nunito)"
                        }} className="text-base sm:text-lg leading-relaxed font-normal">
                            {slideData?.description || 'Bringing artistic vision to life through innovative design solutions. Our creative approach combines traditional art techniques with modern technology.'}
                        </p>

                        {/* Presenter Section with chalk pastel card style */}
                        <div className="rounded-2xl p-4 lg:p-6 border-2 backdrop-blur-sm"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.5))',
                                borderColor: 'var(--stroke, rgba(229, 115, 115, 0.25))',
                                borderRadius: '16px',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Chalk-style initials circle */}
                                <div style={{ 
                                    background: "var(--primary-color, #e57373)",
                                    fontFamily: "var(--heading-font-family, Kalam)"
                                }} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md">
                                    <span className="font-bold text-sm lg:text-base" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ 
                                        color: "var(--background-text, #3a3530)",
                                        fontFamily: "var(--heading-font-family, Kalam)"
                                    }} className="text-lg lg:text-xl font-bold">
                                        {slideData?.presenterName || 'Sarah Johnson'}
                                    </span>
                                    <span style={{ 
                                        color: "var(--background-text, #3a3530)",
                                        fontFamily: "var(--body-font-family, Nunito)"
                                    }} className="text-sm lg:text-base font-medium opacity-80">
                                        Creative Director
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-lg border-2"
                             style={{ borderColor: 'var(--stroke, rgba(229, 115, 115, 0.25))' }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
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