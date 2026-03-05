import React from 'react'
import * as z from "zod";

export const layoutId = 'terracotta-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A warm Mediterranean-inspired intro slide with terracotta tones, elegant typography, and rustic charm.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Mediterranean Retreat').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Experience the warmth and elegance of artisanal craftsmanship with our handcrafted solutions that bring timeless beauty and modern functionality to your space.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Isabella Romano').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Mediterranean terracotta pottery and rustic textures") 
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const TerracottaIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Isabella Romano');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {/* Decorative diamond ornament - top left */}
                <div className="absolute top-12 left-12 w-4 h-4 border transform rotate-45 opacity-20" style={{ borderColor: 'var(--primary-color, #8d4e2a)' }}></div>
                
                {/* Decorative line accent - top right */}
                <div className="absolute top-16 right-16 w-24 h-px opacity-30" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #2d1a0e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 lg:px-20 pt-20 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #2d1a0e)" }} className="text-5xl lg:text-7xl font-bold leading-tight">
                            {slideData?.title || 'Mediterranean Retreat'}
                        </h1>

                        {/* Decorative divider with diamond */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>
                            <div className="w-2 h-2 border transform rotate-45" style={{ borderColor: 'var(--primary-color, #8d4e2a)' }}></div>
                            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stroke, rgba(141, 78, 42, 0.2))' }}></div>
                        </div>

                        {/* Description */}
                        <p style={{ 
                            color: "var(--background-text, #2d1a0e)", 
                            fontFamily: "var(--body-font-family, Libre Baskerville)" 
                        }} className="text-lg lg:text-xl leading-relaxed opacity-80">
                            {slideData?.description || 'Experience the warmth and elegance of artisanal craftsmanship with our handcrafted solutions that bring timeless beauty and modern functionality to your space.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="rounded-lg p-6 shadow-sm" 
                            style={{
                                background: 'var(--card-color, rgba(255, 250, 240, 0.8))',
                                border: '1px solid var(--stroke, rgba(141, 78, 42, 0.15))',
                                borderRadius: '8px'
                            }}
                        >
                            <div className="flex items-center gap-5">
                                {/* Custom Initials Icon */}
                                <div style={{ background: "var(--primary-color, #8d4e2a)" }} className="w-14 h-14 rounded-full flex items-center justify-center">
                                    <span className="font-bold text-lg" style={{ color: "var(--primary-text, #faf0e6)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #2d1a0e)" }} className="text-xl lg:text-2xl font-semibold">
                                        {slideData?.presenterName || 'Isabella Romano'}
                                    </span>
                                    <span style={{ 
                                        color: "var(--primary-color, #8d4e2a)",
                                        fontFamily: "var(--body-font-family, Libre Baskerville)"
                                    }} className="text-base font-medium mt-1">
                                        Artisan & Designer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-96 rounded-lg overflow-hidden shadow-xl" style={{ border: '1px solid var(--stroke, rgba(141, 78, 42, 0.2))' }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom decorative elements */}
                <div className="absolute bottom-12 left-16 w-6 h-6 border transform rotate-45 opacity-15" style={{ borderColor: 'var(--primary-color, #8d4e2a)' }}></div>
                <div className="absolute bottom-16 right-12 w-32 h-px opacity-25" style={{ backgroundColor: 'var(--primary-color, #8d4e2a)' }}></div>
            </div>
        </>
    )
}

export default TerracottaIntroSlide