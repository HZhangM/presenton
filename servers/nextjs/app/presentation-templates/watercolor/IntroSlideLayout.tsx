import React from 'react'
import * as z from "zod";

export const layoutId = 'watercolor-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A watercolor-themed cover slide with elegant serif typography, glass-morphism cards, and soft decorative elements.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Creative Vision').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embracing innovation through thoughtful design and meaningful connections. Our approach combines artistic vision with strategic thinking to create lasting impact.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Watercolor art supplies and creative workspace") 
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
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Playfair Display')"
                }}
            >
                {/* Decorative watercolor blobs */}
                <div 
                    className="absolute top-20 right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
                    style={{ background: 'var(--primary-color, #7c5cbf)' }}
                ></div>
                <div 
                    className="absolute bottom-16 left-24 w-80 h-80 rounded-full opacity-15 blur-2xl"
                    style={{ background: 'var(--primary-color, #7c5cbf)' }}
                ></div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-semibold" 
                                    style={{ 
                                        color: 'var(--background-text, #2d2d3d)',
                                        fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                    }}
                                >
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
                        <h1 
                            className="text-5xl lg:text-7xl font-black leading-tight"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--heading-font-family, 'Playfair Display')"
                            }}
                        >
                            {slideData?.title || 'Creative Vision'}
                        </h1>

                        {/* Gradient divider */}
                        <div 
                            className="w-32 h-0.5 opacity-60"
                            style={{ 
                                background: `linear-gradient(90deg, var(--primary-color, #7c5cbf), transparent)`
                            }}
                        ></div>

                        {/* Description */}
                        <p 
                            className="text-xl leading-relaxed max-w-xl"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--body-font-family, 'Lora')"
                            }}
                        >
                            {slideData?.description || 'Embracing innovation through thoughtful design and meaningful connections. Our approach combines artistic vision with strategic thinking to create lasting impact.'}
                        </p>

                        {/* Presenter Section - Glass morphism card */}
                        <div 
                            className="rounded-2xl p-6 border"
                            style={{
                                backdropFilter: 'blur(12px)',
                                background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
                            }}
                        >
                            <div className="flex items-center gap-5">
                                {/* Custom Initials Icon */}
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{ background: "var(--primary-color, #7c5cbf)" }}
                                >
                                    <span 
                                        className="font-bold text-lg"
                                        style={{ 
                                            color: "var(--primary-text, #ffffff)",
                                            fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-2xl font-bold"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--heading-font-family, 'Playfair Display')"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Sarah Mitchell'}
                                    </span>
                                    <span 
                                        className="text-base font-medium opacity-80"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--body-font-family, 'Lora')"
                                        }}
                                    >
                                        Creative Director
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-96 rounded-3xl overflow-hidden border"
                            style={{
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
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

export default IntroSlideLayout