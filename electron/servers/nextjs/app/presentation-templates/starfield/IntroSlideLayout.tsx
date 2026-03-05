import React from 'react'
import * as z from "zod";

export const layoutId = 'starfield-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cosmic cover slide with presentation title, subtitle, presenter info, and optional image with starfield theme.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Cosmic Vision').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Exploring the infinite possibilities of space technology and innovation. Our mission transcends boundaries to unlock the mysteries of the universe and pioneer the future of cosmic exploration.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Nova Sterling').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("futuristic space station with stars") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Nova Sterling');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Exo 2)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-20 right-32 w-2 h-2 rounded-full opacity-30" style={{ background: "var(--primary-color, #7c4dff)" }}>
                    <div className="absolute inset-0 rounded-full animate-pulse" style={{ 
                        background: "var(--primary-color, #7c4dff)",
                        boxShadow: "0 0 20px var(--primary-color, #7c4dff)" 
                    }}></div>
                </div>
                
                <div className="absolute bottom-40 left-16 w-1 h-1 rounded-full opacity-20" style={{ background: "var(--primary-color, #7c4dff)" }}></div>
                
                <div className="absolute top-1/3 left-1/4 w-32 h-px opacity-15" style={{
                    background: "linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)"
                }}></div>

                {/* Company Logo/Name Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-medium" style={{ color: 'var(--background-text, #d0d0f0)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #d0d0f0)" }} className="text-6xl font-bold leading-tight">
                            {slideData?.title || 'Cosmic Vision'}
                        </h1>

                        {/* Accent line with glow */}
                        <div className="w-24 h-1 rounded-full" style={{ 
                            background: "var(--primary-color, #7c4dff)",
                            boxShadow: "0 0 10px var(--primary-color, #7c4dff)"
                        }}></div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #d0d0f0)" }} className="text-lg leading-relaxed opacity-90 font-light max-w-2xl">
                            {slideData?.description || 'Exploring the infinite possibilities of space technology and innovation. Our mission transcends boundaries to unlock the mysteries of the universe and pioneer the future of cosmic exploration.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="rounded-xl p-6 backdrop-blur-lg"
                            style={{
                                background: 'var(--card-color, rgba(124, 77, 255, 0.08))',
                                border: '1px solid var(--stroke, rgba(124, 77, 255, 0.25))',
                                borderRadius: '12px'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ 
                                    background: "var(--primary-color, #7c4dff)",
                                    boxShadow: "0 0 20px rgba(124, 77, 255, 0.3)"
                                }}>
                                    <span className="font-semibold text-base" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #d0d0f0)" }} className="text-xl font-semibold">
                                        {slideData?.presenterName || 'Dr. Nova Sterling'}
                                    </span>
                                    <span style={{ color: "var(--primary-color, #7c4dff)" }} className="text-sm font-medium opacity-80">
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-80 rounded-2xl overflow-hidden backdrop-blur-sm" style={{
                            border: '1px solid var(--stroke, rgba(124, 77, 255, 0.25))',
                            boxShadow: "0 0 40px rgba(124, 77, 255, 0.1)"
                        }}>
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