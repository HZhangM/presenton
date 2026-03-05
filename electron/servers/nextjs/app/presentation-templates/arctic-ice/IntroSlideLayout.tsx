import React from 'react'
import * as z from "zod";

export const layoutId = 'arctic-ice-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A crystalline cover slide with frosted glass effects, featuring title, description, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Arctic Innovation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Experience the future of technology with our cutting-edge solutions. Clean, efficient, and powerful innovations designed for the modern world of tomorrow.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Sarah Chen').meta({
        description: "Name of the presenter",
    }),
    presentationDate: z.string().min(2).max(50).default('January 2024').meta({
        description: "Date of the presentation",
    }),
    image: z.object({
        __image_url__: z.string().default('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
        __image_prompt__: z.string().min(10).max(50).default('Arctic landscape with crystalline ice formations')
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const ArcticIceIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Sarah Chen');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {/* Decorative ice crystal elements */}
                <div className="absolute top-16 right-20 w-32 h-32 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: 'var(--primary-color, #0288d1)' }}>
                        <polygon points="50,10 62,38 90,38 68,58 74,86 50,72 26,86 32,58 10,38 38,38" />
                    </svg>
                </div>
                
                <div className="absolute bottom-20 left-16 w-24 h-24 opacity-8 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ stroke: 'var(--primary-color, #0288d1)', fill: 'none', strokeWidth: '0.5' }}>
                        <circle cx="50" cy="50" r="20" />
                        <circle cx="50" cy="50" r="35" />
                    </svg>
                </div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-light" style={{ color: 'var(--background-text, #1a3a50)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 lg:px-20 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #1a3a50)" }} className="text-5xl lg:text-6xl font-light leading-tight">
                            {slideData?.title || 'Arctic Innovation'}
                        </h1>

                        {/* Ice-blue accent line */}
                        <div style={{ background: "var(--primary-color, #0288d1)" }} className="w-16 h-0.5 opacity-60"></div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #1a3a50)" }} className="text-lg font-light leading-relaxed opacity-90 max-w-lg">
                            {slideData?.description || 'Experience the future of technology with our cutting-edge solutions. Clean, efficient, and powerful innovations designed for the modern world of tomorrow.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-2xl p-6 border"
                            style={{
                                background: 'rgba(255,255,255,0.65)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255,255,255,0.5)',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Frosted initials circle */}
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border"
                                    style={{ 
                                        background: 'var(--primary-color, #0288d1)',
                                        borderColor: 'rgba(255,255,255,0.3)'
                                    }}
                                >
                                    <span className="font-light text-base" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #1a3a50)" }} className="text-xl font-medium">
                                        {slideData?.presenterName || 'Dr. Sarah Chen'}
                                    </span>
                                    <span style={{ color: "var(--background-text, #1a3a50)" }} className="text-sm font-light opacity-70">
                                        {slideData?.presentationDate || 'January 2024'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-md h-80 rounded-2xl overflow-hidden border"
                            style={{
                                background: 'rgba(255,255,255,0.65)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255,255,255,0.5)',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                            }}
                        >
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

export default ArcticIceIntroSlide