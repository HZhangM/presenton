import React from 'react'
import * as z from "zod";

export const layoutId = 'copper-patina-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover/title slide with presentation title, subtitle/description, presenter info, and optional image in copper patina theme.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Industrial Innovation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our refined industrial solutions combine weathered elegance with modern functionality. Built with precision craftsmanship and designed for lasting performance in demanding environments.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Industrial copper machinery with patina finish")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Mitchell');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Abril Fatface)"
                }}
            >
                {/* Decorative copper rivet accents */}
                <div className="absolute top-6 left-12 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute top-6 right-12 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute bottom-6 left-12 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute bottom-6 right-12 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>

                {/* Decorative copper line accent */}
                <div className="absolute top-20 left-16 right-16 h-px opacity-25" style={{ background: "var(--primary-color, #b87333)" }}></div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #f0e8d8)', fontFamily: "var(--body-font-family, Fira Sans)" }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-4">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #f0e8d8)" }} className="text-5xl font-bold leading-tight">
                            {slideData?.title || 'Industrial Innovation'}
                        </h1>

                        {/* Copper accent divider with circle endpoints */}
                        <div className="flex items-center gap-2 my-4">
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                            <div className="w-16 h-px" style={{ background: "var(--primary-color, #b87333)" }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                        </div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #f0e8d8)", fontFamily: "var(--body-font-family, Fira Sans)" }} className="text-lg leading-relaxed max-w-lg">
                            {slideData?.description || 'Our refined industrial solutions combine weathered elegance with modern functionality. Built with precision craftsmanship and designed for lasting performance in demanding environments.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="mt-6 p-4 rounded-md border shadow-sm"
                            style={{
                                background: 'var(--card-color, rgba(255, 245, 230, 0.8))',
                                borderColor: 'var(--stroke, rgba(184, 115, 51, 0.25))',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                {/* Custom Initials Icon */}
                                <div style={{ background: "var(--primary-color, #b87333)" }} className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <span className="font-semibold text-sm" style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: "var(--body-font-family, Fira Sans)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: "var(--body-font-family, Fira Sans)" }} className="text-base font-semibold">
                                        {slideData?.presenterName || 'Sarah Mitchell'}
                                    </span>
                                    <span style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: "var(--body-font-family, Fira Sans)" }} className="text-sm opacity-75">
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-80 rounded-md overflow-hidden border shadow-sm"
                            style={{
                                borderColor: 'var(--stroke, rgba(184, 115, 51, 0.25))',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                        >
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