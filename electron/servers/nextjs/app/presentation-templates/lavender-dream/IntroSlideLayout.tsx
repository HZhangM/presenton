import React from 'react'
import * as z from "zod";

export const layoutId = 'lavender-dream-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A dreamy intro slide with soft lavender tones, elegant typography, and gentle glass-morphism effects.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Lavender Dreams').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embrace the gentle beauty of soft lavender tones and elegant design. This presentation brings together delicate aesthetics with powerful insights for a truly memorable experience.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Isabella Rose').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Elegant lavender flowers in soft natural lighting")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Isabella Rose');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="var(--primary-color, #9b59b6)">
                        <circle cx="50" cy="50" r="3" opacity="0.6"/>
                        <circle cx="35" cy="40" r="2" opacity="0.4"/>
                        <circle cx="65" cy="35" r="2.5" opacity="0.5"/>
                        <circle cx="40" cy="65" r="2" opacity="0.4"/>
                        <circle cx="70" cy="60" r="1.5" opacity="0.3"/>
                        <path d="M30,30 Q50,20 70,30 Q60,50 50,40 Q40,50 30,30" opacity="0.2" strokeWidth="0.5" stroke="var(--primary-color, #9b59b6)" fill="none"/>
                    </svg>
                </div>

                <div className="absolute bottom-12 left-8 w-24 h-24 opacity-8 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="var(--primary-color, #9b59b6)" strokeWidth="0.5">
                        <path d="M50,10 Q70,30 50,50 Q30,30 50,10" opacity="0.3"/>
                        <path d="M50,50 Q70,70 50,90 Q30,70 50,50" opacity="0.2"/>
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a2050)', fontFamily: 'var(--body-font-family, Mulish)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 
                            style={{ color: "var(--background-text, #3a2050)" }} 
                            className="text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            {slideData?.title || 'Lavender Dreams'}
                        </h1>

                        {/* Divider */}
                        <div className="flex justify-center w-2/5">
                            <div 
                                style={{ background: "var(--primary-color, #9b59b6)" }} 
                                className="h-px w-full opacity-30"
                            ></div>
                        </div>

                        {/* Description */}
                        <p 
                            style={{ 
                                color: "var(--background-text, #3a2050)", 
                                fontFamily: "var(--body-font-family, Mulish)" 
                            }} 
                            className="text-lg leading-relaxed opacity-80 max-w-lg"
                        >
                            {slideData?.description || 'Embrace the gentle beauty of soft lavender tones and elegant design. This presentation brings together delicate aesthetics with powerful insights for a truly memorable experience.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-2xl p-5 border shadow-sm max-w-sm"
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    style={{ background: "var(--primary-color, #9b59b6)" }} 
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                >
                                    <span 
                                        className="font-semibold text-base" 
                                        style={{ 
                                            color: "var(--primary-text, #ffffff)",
                                            fontFamily: "var(--body-font-family, Mulish)"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <span 
                                        style={{ 
                                            color: "var(--background-text, #3a2050)",
                                            fontFamily: "var(--body-font-family, Mulish)"
                                        }} 
                                        className="text-lg font-semibold block"
                                    >
                                        {slideData?.presenterName || 'Isabella Rose'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-md h-96 rounded-3xl overflow-hidden shadow-lg border"
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
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