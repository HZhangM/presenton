import React from 'react'
import * as z from "zod";

export const layoutId = 'blueprint-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A technical blueprint-style intro slide with engineering drawing aesthetics and monospace typography.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('System Architecture').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Technical specifications and implementation details for the core system architecture. Includes modular components, scalable infrastructure, and performance optimization protocols.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Alex Chen').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Technical blueprint engineering drawing")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Alex Chen');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                }}
            >
                {/* Blueprint Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(var(--stroke, rgba(77,171,247,0.35)) 1px, transparent 1px),
                            linear-gradient(90deg, var(--stroke, rgba(77,171,247,0.35)) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Corner Crosshairs */}
                <div className="absolute top-4 left-4 w-4 h-4 opacity-60" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                    <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                    <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 opacity-60" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                    <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                    <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 w-4 h-4 opacity-60" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                    <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                    <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                </div>
                <div className="absolute bottom-4 right-4 w-4 h-4 opacity-60" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                    <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                    <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div 
                            className="flex items-center gap-4 p-3 text-xs uppercase tracking-wider border-2"
                            style={{ 
                                border: '1px dashed rgba(77,171,247,0.35)', 
                                background: 'rgba(77,171,247,0.06)', 
                                borderRadius: '2px',
                                fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="font-medium" style={{ color: 'var(--background-text, #c8d8e8)' }}>
                                {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-16 pb-8 gap-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        {/* Title Block */}
                        <div 
                            className="p-6 border-2"
                            style={{ 
                                border: '1px dashed rgba(77,171,247,0.35)', 
                                background: 'rgba(77,171,247,0.06)', 
                                borderRadius: '2px'
                            }}
                        >
                            <div className="text-xs uppercase tracking-widest mb-2 opacity-70" style={{ color: 'var(--primary-color, #4dabf7)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                                DRAWING TITLE
                            </div>
                            <h1 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #c8d8e8)",
                                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                                }}
                            >
                                {slideData?.title || 'System Architecture'}
                            </h1>
                        </div>

                        {/* Dimension Line Divider */}
                        <div className="relative py-4">
                            <div 
                                className="h-px w-full"
                                style={{ 
                                    background: `repeating-linear-gradient(to right, var(--stroke, rgba(77,171,247,0.35)) 0, var(--stroke, rgba(77,171,247,0.35)) 5px, transparent 5px, transparent 10px)`
                                }}
                            />
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                                <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                                <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2" style={{ color: 'var(--primary-color, #4dabf7)' }}>
                                <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                                <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: 'var(--primary-color, #4dabf7)' }}></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p 
                            className="text-base sm:text-lg leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #c8d8e8)",
                                fontFamily: "var(--body-font-family, IBM Plex Mono)"
                            }}
                        >
                            {slideData?.description || 'Technical specifications and implementation details for the core system architecture. Includes modular components, scalable infrastructure, and performance optimization protocols.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="p-6 border-2"
                            style={{
                                border: '1px dashed rgba(77,171,247,0.35)',
                                background: 'rgba(77,171,247,0.06)',
                                borderRadius: '2px'
                            }}
                        >
                            <div className="text-xs uppercase tracking-widest mb-3 opacity-70" style={{ color: 'var(--primary-color, #4dabf7)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                                DRAWN BY
                            </div>
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-sm flex items-center justify-center border-2"
                                    style={{ 
                                        background: "var(--primary-color, #4dabf7)",
                                        border: '1px dashed rgba(77,171,247,0.4)'
                                    }}
                                >
                                    <span 
                                        className="font-bold text-sm"
                                        style={{ 
                                            color: "var(--primary-text, #0d2137)",
                                            fontFamily: "var(--heading-font-family, JetBrains Mono)"
                                        }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span 
                                        className="text-lg lg:text-xl font-bold"
                                        style={{ 
                                            color: "var(--background-text, #c8d8e8)",
                                            fontFamily: "var(--heading-font-family, JetBrains Mono)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Alex Chen'}
                                    </span>
                                    <span 
                                        className="text-sm opacity-70"
                                        style={{ 
                                            color: "var(--background-text, #c8d8e8)",
                                            fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                        }}
                                    >
                                        ENGINEER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <div 
                            className="w-full max-w-lg h-80 overflow-hidden border-2"
                            style={{
                                border: '1px dashed rgba(77,171,247,0.35)',
                                background: 'rgba(77,171,247,0.06)',
                                borderRadius: '2px'
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