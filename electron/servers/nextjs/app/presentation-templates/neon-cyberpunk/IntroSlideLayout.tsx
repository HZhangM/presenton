import React from 'react'
import * as z from "zod";

export const layoutId = 'neon-cyberpunk-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A futuristic cyberpunk intro slide with neon glow effects, dark backgrounds, and monospace typography.'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Neural Network Systems').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Advanced AI-driven solutions for next-generation data processing. Seamlessly integrates quantum computing with neural networks for unprecedented performance.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Alex Chen').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Futuristic cyberpunk city with neon lights")
    }).meta({
        description: "Supporting image for the slide",
    })
})

export { Schema }

export type IntroSlideData = z.infer<typeof Schema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const NeonCyberpunkIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Alex Chen');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Orbitron)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-60"
                    style={{
                        background: `linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)`,
                        boxShadow: `0 0 10px var(--primary-color, #ff2d95)`
                    }}
                />
                
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 opacity-50">
                    <div 
                        className="absolute top-0 left-0 w-4 h-0.5"
                        style={{ background: `var(--primary-color, #ff2d95)` }}
                    />
                    <div 
                        className="absolute top-0 left-0 w-0.5 h-4"
                        style={{ background: `var(--primary-color, #ff2d95)` }}
                    />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 opacity-50">
                    <div 
                        className="absolute top-0 right-0 w-4 h-0.5"
                        style={{ background: `var(--primary-color, #ff2d95)` }}
                    />
                    <div 
                        className="absolute top-0 right-0 w-0.5 h-4"
                        style={{ background: `var(--primary-color, #ff2d95)` }}
                    />
                </div>

                {/* Company Logo Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm sm:text-base font-bold tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #e0e0f0)',
                                            fontFamily: "var(--heading-font-family, Orbitron)",
                                            textShadow: `0 0 8px var(--primary-color, #ff2d95)`
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'NEXUS CORP'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-20 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-wider"
                            style={{ 
                                color: "var(--background-text, #e0e0f0)",
                                fontFamily: "var(--heading-font-family, Orbitron)",
                                textShadow: `0 0 20px var(--primary-color, #ff2d95)`
                            }}
                        >
                            {slideData?.title || 'Neural Network Systems'}
                        </h1>

                        {/* Neon accent line */}
                        <div 
                            className="w-24 h-1"
                            style={{ 
                                background: `var(--primary-color, #ff2d95)`,
                                boxShadow: `0 0 15px var(--primary-color, #ff2d95)`
                            }}
                        />

                        {/* Description */}
                        <p 
                            className="text-lg sm:text-xl leading-relaxed tracking-wide"
                            style={{ 
                                color: "var(--background-text, #e0e0f0)",
                                fontFamily: "var(--body-font-family, 'Share Tech Mono')",
                                opacity: 0.9
                            }}
                        >
                            {slideData?.description || 'Advanced AI-driven solutions for next-generation data processing. Seamlessly integrates quantum computing with neural networks for unprecedented performance.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-lg p-6 backdrop-blur-lg"
                            style={{
                                border: '1px solid rgba(255,45,149,0.2)',
                                background: 'rgba(10,10,30,0.7)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '4px',
                                boxShadow: '0 0 15px rgba(255,45,149,0.1)',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border"
                                    style={{ 
                                        background: "var(--primary-color, #ff2d95)",
                                        borderColor: "var(--stroke, rgba(255,45,149,0.3))",
                                        boxShadow: `0 0 15px var(--primary-color, #ff2d95)`
                                    }}
                                >
                                    <span 
                                        className="font-bold text-lg tracking-wider"
                                        style={{ 
                                            color: "var(--primary-text, #ffffff)",
                                            fontFamily: "var(--heading-font-family, Orbitron)"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-xl font-bold tracking-wide"
                                        style={{ 
                                            color: "var(--background-text, #e0e0f0)",
                                            fontFamily: "var(--heading-font-family, Orbitron)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Alex Chen'}
                                    </span>
                                    <span 
                                        className="text-base font-medium tracking-wider"
                                        style={{ 
                                            color: "var(--primary-color, #ff2d95)",
                                            fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                        }}
                                    >
                                        SYSTEM_ARCHITECT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 overflow-hidden relative"
                            style={{
                                border: '1px solid rgba(255,45,149,0.3)',
                                borderRadius: '4px',
                                boxShadow: '0 0 25px rgba(255,45,149,0.2)'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent"
                                style={{
                                    background: `linear-gradient(45deg, transparent 60%, rgba(255,45,149,0.1) 100%)`
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom decorative line */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-0.5 opacity-40"
                    style={{
                        background: `linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)`,
                        boxShadow: `0 0 8px var(--primary-color, #ff2d95)`
                    }}
                />
            </div>
        </>
    )
}

export default NeonCyberpunkIntroSlide