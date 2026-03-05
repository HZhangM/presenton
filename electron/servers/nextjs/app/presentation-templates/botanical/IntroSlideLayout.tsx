import React from 'react'
import * as z from "zod";

export const layoutId = 'botanical-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'An elegant botanical-themed intro slide with title, description, presenter info, and image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Botanical Research').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Exploring the intricate relationships between plant ecosystems and environmental sustainability through comprehensive field research and data analysis.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Emily Gardens').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Lush botanical garden with diverse plants")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Emily Gardens');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}
            >
                {/* Decorative botanical elements */}
                <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M60 20C60 20 40 40 40 60C40 80 60 100 60 100C60 100 80 80 80 60C80 40 60 20 60 20Z" 
                              fill="var(--primary-color, #558b2f)" opacity="0.3"/>
                        <path d="M20 60C20 60 40 40 60 40C80 40 100 60 100 60C100 60 80 80 60 80C40 80 20 60 20 60Z" 
                              fill="var(--primary-color, #558b2f)" opacity="0.2"/>
                    </svg>
                </div>

                <div className="absolute bottom-12 left-12 opacity-15 pointer-events-none">
                    <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <path d="M5 35C15 25 25 15 35 25C45 35 55 15 65 25C70 30 75 35 75 35" 
                              stroke="var(--primary-color, #558b2f)" strokeWidth="2" fill="none"/>
                        <circle cx="15" cy="28" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                        <circle cx="35" cy="25" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                        <circle cx="55" cy="22" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6"/>
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-12 pb-8">
                    <div className="flex-1 flex items-center justify-center pr-8">
                        <div className="w-full max-w-lg h-80 rounded-xl overflow-hidden shadow-lg border"
                             style={{ borderColor: 'var(--stroke, rgba(85, 139, 47, 0.2))' }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Botanical image'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center pl-8 space-y-6">
                        <h1 style={{ color: "var(--background-text, #2d3a2e)" }} 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {slideData?.title || 'Botanical Research'}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div style={{ background: "var(--primary-color, #558b2f)" }} 
                                 className="w-20 h-1 rounded"></div>
                            <div className="text-2xl" style={{ color: "var(--primary-color, #558b2f)" }}>🌿</div>
                        </div>

                        <p style={{ 
                            color: "var(--background-text, #2d3a2e)",
                            fontFamily: "var(--body-font-family, Lato)"
                        }} className="text-base sm:text-lg leading-relaxed opacity-90">
                            {slideData?.description || 'Exploring the intricate relationships between plant ecosystems and environmental sustainability through comprehensive field research and data analysis.'}
                        </p>

                        <div className="rounded-xl p-4 lg:p-6 border shadow-sm"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.75))',
                                borderColor: 'var(--stroke, rgba(85, 139, 47, 0.2))',
                            }}>
                            <div className="flex items-center gap-4">
                                <div style={{ background: "var(--primary-color, #558b2f)" }} 
                                     className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                                    <span className="font-bold text-sm lg:text-base" 
                                          style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #2d3a2e)" }} 
                                          className="text-lg lg:text-xl font-bold">
                                        {slideData?.presenterName || 'Dr. Emily Gardens'}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm" style={{ color: "var(--primary-color, #558b2f)" }}>🌱</span>
                                        <span style={{ 
                                            color: "var(--background-text, #2d3a2e)",
                                            fontFamily: "var(--body-font-family, Lato)"
                                        }} className="text-sm lg:text-base font-medium opacity-75">
                                            Research Botanist
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout