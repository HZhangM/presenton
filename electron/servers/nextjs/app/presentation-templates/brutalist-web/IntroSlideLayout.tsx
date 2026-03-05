import React from 'react'
import * as z from "zod";

export const layoutId = 'brutalist-web-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A brutal intro slide with raw typography, heavy borders, and unapologetic design'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('BRUTAL PRESENTATION').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Raw, uncompromising design meets functional brutalism. No polish, no apologies. Pure structure and typography working together in harsh digital harmony.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('JANE DOE').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Concrete brutalist architecture raw structure") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'JANE DOE');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Anton)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4 z-30">
                        <div className="flex items-center gap-4 p-3 border-4 border-black bg-white">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-base font-bold tracking-wide" style={{ color: 'var(--background-text, #111111)', fontFamily: 'var(--body-font-family, IBM Plex Mono)' }}>
                                {((slideData as any)?.__companyName__ || 'COMPANY').toUpperCase()}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-16 w-16 h-16 border-4 border-black opacity-30 z-10"
                     style={{ backgroundColor: 'var(--primary-color, #ff4500)' }}></div>
                <div className="absolute bottom-32 left-8 w-4 h-32 border-4 border-black opacity-20 z-10"
                     style={{ backgroundColor: 'var(--primary-color, #ff4500)' }}></div>

                {/* Main Content */}
                <div className="relative z-20 flex h-full px-12 pt-20 pb-8 gap-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6">
                        {/* Title */}
                        <div className="space-y-4">
                            <h1 style={{ color: "var(--background-text, #111111)" }} 
                                className="text-5xl lg:text-6xl font-black leading-none tracking-tight">
                                {(slideData?.title || 'BRUTAL PRESENTATION').toUpperCase()}
                            </h1>
                            
                            {/* Thick divider */}
                            <div className="w-full h-1 bg-black"></div>
                        </div>

                        {/* Description */}
                        <div className="border-4 border-black bg-white p-5 shadow-none"
                             style={{ boxShadow: '6px 6px 0 #111111' }}>
                            <p style={{ 
                                color: "var(--background-text, #111111)",
                                fontFamily: "var(--body-font-family, IBM Plex Mono)"
                            }} className="text-base leading-relaxed font-medium">
                                {slideData?.description || 'Raw, uncompromising design meets functional brutalism. No polish, no apologies. Pure structure and typography working together in harsh digital harmony.'}
                            </p>
                        </div>

                        {/* Presenter Section */}
                        <div className="border-4 border-black bg-white p-4"
                             style={{ boxShadow: '6px 6px 0 #111111' }}>
                            <div className="flex items-center gap-4">
                                {/* Initials Block */}
                                <div style={{ backgroundColor: "var(--primary-color, #ff4500)" }} 
                                     className="w-12 h-12 border-4 border-black flex items-center justify-center">
                                    <span className="font-black text-lg" 
                                          style={{ 
                                              color: "var(--primary-text, #ffffff)",
                                              fontFamily: "var(--heading-font-family, Anton)"
                                          }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ 
                                        color: "var(--background-text, #111111)",
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }} className="text-lg font-bold tracking-wide">
                                        {(slideData?.presenterName || 'JANE DOE').toUpperCase()}
                                    </span>
                                    <span style={{ 
                                        color: "var(--background-text, #111111)",
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }} className="text-sm font-medium opacity-70">
                                        PRESENTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <div className="w-80 h-80 border-4 border-black bg-white overflow-hidden"
                             style={{ boxShadow: '6px 6px 0 #111111' }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black z-30"></div>
            </div>
        </>
    )
}

export default IntroSlideLayout