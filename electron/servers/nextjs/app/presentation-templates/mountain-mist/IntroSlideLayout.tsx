import React from 'react'
import * as z from "zod";

export const layoutId = 'mountain-mist-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A serene cover slide with misty mountain aesthetics, featuring title, description, presenter info, and optional image with glass-morphism effects.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Serenity in Motion').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embracing the quiet power of thoughtful design and purposeful innovation. Where clarity meets simplicity in the pursuit of meaningful solutions.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Emma Chen').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Misty mountain landscape at dawn")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Emma Chen');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Philosopher)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, var(--primary-color, #546e7a) 0%, transparent 100%)'
                    }}
                />
                
                <div className="absolute bottom-0 right-0 w-96 h-1 opacity-30"
                    style={{ background: 'var(--primary-color, #546e7a)' }}
                />

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-5 h-5" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #1a2a3a)',
                                        fontFamily: 'var(--body-font-family, Karla)'
                                    }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 className="text-5xl font-bold leading-tight"
                            style={{ color: "var(--background-text, #1a2a3a)" }}>
                            {slideData?.title || 'Serenity in Motion'}
                        </h1>

                        {/* Subtle Divider */}
                        <div className="flex justify-center w-2/5">
                            <div className="h-px w-full opacity-40"
                                style={{ 
                                    background: 'linear-gradient(90deg, var(--primary-color, #546e7a) 0%, transparent 100%)'
                                }}
                            />
                        </div>

                        {/* Description */}
                        <p className="text-lg leading-relaxed max-w-lg"
                            style={{ 
                                color: "var(--background-text, #1a2a3a)",
                                fontFamily: 'var(--body-font-family, Karla)',
                                opacity: '0.8'
                            }}>
                            {slideData?.description || 'Embracing the quiet power of thoughtful design and purposeful innovation. Where clarity meets simplicity in the pursuit of meaningful solutions.'}
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-80 rounded-xl overflow-hidden"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.55))',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)'
                            }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Presenter Info - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-12 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: "var(--primary-color, #546e7a)" }}>
                            <span className="font-medium text-xs" 
                                style={{ color: "var(--primary-text, #ffffff)" }}>
                                {presenterInitials}
                            </span>
                        </div>
                        <span className="text-sm font-medium"
                            style={{ 
                                color: "var(--background-text, #1a2a3a)",
                                fontFamily: 'var(--body-font-family, Karla)',
                                opacity: '0.7'
                            }}>
                            {slideData?.presenterName || 'Emma Chen'}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout