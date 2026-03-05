import React from 'react'
import * as z from "zod";

export const layoutId = 'retro-synthwave-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = '80s retrowave intro slide with neon gradients, grid horizon, and bold synthwave aesthetics'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('NEON DREAMS').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Experience the future through retro-futuristic design. Our synthwave aesthetic brings 80s cyberpunk vibes to modern presentations with neon gradients and chrome effects.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Alex Cyber').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Neon synthwave cityscape with grid horizon") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Alex Cyber');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bungee)"
                }}
            >
                {/* Decorative scan lines */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 51, 102, 0.05) 2px, rgba(255, 51, 102, 0.05) 4px)',
                    opacity: 0.3
                }} />

                {/* Corner accent triangles */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-10">
                    <div style={{
                        width: 0,
                        height: 0,
                        borderTop: '64px solid rgba(255, 51, 102, 0.3)',
                        borderRight: '64px solid transparent'
                    }} />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none z-10">
                    <div style={{
                        width: 0,
                        height: 0,
                        borderBottom: '64px solid rgba(255, 51, 102, 0.3)',
                        borderLeft: '64px solid transparent'
                    }} />
                </div>

                {/* Company logo/name header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4 z-20">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #f0e0ff)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-12 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-8">
                        {/* Title with gradient text */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                            style={{
                                background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 20px rgba(255, 51, 102, 0.5)',
                                fontFamily: "var(--heading-font-family, Bungee)"
                            }}>
                            {slideData?.title || 'NEON DREAMS'}
                        </h1>

                        {/* Gradient divider line */}
                        <div className="w-32 h-1" style={{
                            background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)',
                            boxShadow: '0 0 10px rgba(255, 51, 102, 0.5)'
                        }} />

                        {/* Description */}
                        <p className="text-lg sm:text-xl leading-relaxed" style={{
                            color: "var(--background-text, #f0e0ff)",
                            fontFamily: "var(--body-font-family, Rajdhani)",
                            fontWeight: 500
                        }}>
                            {slideData?.description || 'Experience the future through retro-futuristic design. Our synthwave aesthetic brings 80s cyberpunk vibes to modern presentations with neon gradients and chrome effects.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="p-6" style={{
                            border: '2px solid rgba(255,51,102,0.3)',
                            background: 'rgba(20,0,40,0.6)',
                            backdropFilter: 'blur(4px)',
                            borderRadius: 0
                        }}>
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div className="w-14 h-14 flex items-center justify-center border-2" style={{
                                    backgroundColor: 'var(--primary-color, #ff3366)',
                                    borderColor: 'rgba(255,51,102,0.4)',
                                    boxShadow: '0 0 15px rgba(255, 51, 102, 0.4)'
                                }}>
                                    <span className="font-bold text-xl" style={{
                                        color: "var(--primary-text, #ffffff)",
                                        fontFamily: "var(--heading-font-family, Bungee)"
                                    }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold" style={{
                                        color: "var(--background-text, #f0e0ff)",
                                        fontFamily: "var(--body-font-family, Rajdhani)",
                                        fontWeight: 700
                                    }}>
                                        {slideData?.presenterName || 'Alex Cyber'}
                                    </span>
                                    <span className="text-lg font-medium" style={{
                                        color: "var(--primary-color, #ff3366)",
                                        fontFamily: "var(--body-font-family, Rajdhani)",
                                        fontWeight: 600
                                    }}>
                                        SYNTHWAVE PRESENTATION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-80 overflow-hidden" style={{
                            border: '2px solid rgba(255,51,102,0.4)',
                            boxShadow: '0 0 30px rgba(255, 51, 102, 0.3)'
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Synthwave visual'}
                                className="w-full h-full object-cover"
                                style={{
                                    filter: 'saturate(1.2) contrast(1.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout