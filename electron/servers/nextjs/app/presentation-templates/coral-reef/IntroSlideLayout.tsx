import React from 'react'
import * as z from "zod";

export const layoutId = 'coral-reef-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A vibrant coral reef themed intro slide with organic shapes and tropical colors'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Ocean Discovery').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Dive into the vibrant world of coral reefs and marine ecosystems. Explore biodiversity, conservation efforts, and the beauty of underwater landscapes through our comprehensive research.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Marina Torres').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Vibrant coral reef underwater scene with tropical fish")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Marina Torres');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Comfortaa)"
                }}
            >
                {/* Decorative coral blob shapes */}
                <div className="absolute top-16 right-20 w-32 h-24 rounded-full opacity-10 z-0"
                     style={{ 
                         background: "var(--primary-color, #ff6b6b)",
                         borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                         transform: "rotate(15deg)"
                     }}></div>
                <div className="absolute bottom-20 left-16 w-24 h-20 rounded-full opacity-8 z-0"
                     style={{ 
                         background: "#17a2b8",
                         borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
                         transform: "rotate(-20deg)"
                     }}></div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4 z-10">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-base font-semibold" style={{ color: 'var(--background-text, #2d3436)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8 items-center">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #2d3436)" }} className="text-5xl font-bold leading-tight">
                            {slideData?.title || 'Ocean Discovery'}
                        </h1>

                        {/* Wavy divider */}
                        <div className="relative w-24 h-1">
                            <svg viewBox="0 0 96 4" className="w-full h-full">
                                <path d="M0,2 Q12,0 24,2 T48,2 T72,2 T96,2" 
                                      stroke="var(--primary-color, #ff6b6b)" 
                                      strokeWidth="4" 
                                      fill="none"
                                      strokeLinecap="round"/>
                            </svg>
                        </div>

                        {/* Description */}
                        <p style={{ 
                            color: "var(--background-text, #2d3436)", 
                            fontFamily: "var(--body-font-family, Rubik)"
                        }} className="text-lg leading-relaxed">
                            {slideData?.description || 'Dive into the vibrant world of coral reefs and marine ecosystems. Explore biodiversity, conservation efforts, and the beauty of underwater landscapes through our comprehensive research.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="rounded-3xl p-5 border backdrop-blur-md"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                borderColor: 'var(--stroke, rgba(255, 107, 107, 0.2))',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Presenter avatar */}
                                <div style={{ background: "var(--primary-color, #ff6b6b)" }} 
                                     className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-lg" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex-1 min-w-0">
                                    <div style={{ color: "var(--background-text, #2d3436)" }} 
                                         className="text-xl font-semibold">
                                        {slideData?.presenterName || 'Dr. Marina Torres'}
                                    </div>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mt-1"
                                         style={{ 
                                             background: "#17a2b8", 
                                             color: "#ffffff" 
                                         }}>
                                        Marine Biologist
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8 flex-shrink-0">
                        <div className="w-full max-w-md h-80 rounded-3xl overflow-hidden shadow-lg border-2"
                             style={{ borderColor: 'var(--stroke, rgba(255, 107, 107, 0.2))' }}>
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