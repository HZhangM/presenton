import React from 'react'
import * as z from "zod";

export const layoutId = 'chalkboard-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A chalkboard-themed intro slide with chalk-style typography and hand-drawn decorative elements.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Welcome to Our Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Today we will explore innovative solutions and strategies that will transform your business operations and drive sustainable growth in the digital era.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Professor Smith').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Vintage classroom with books and academic materials")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Professor Smith');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {/* Chalk dust dots decoration */}
                <div className="absolute top-16 right-32 w-2 h-2 rounded-full opacity-30"
                     style={{ background: "var(--background-text, #e8e8d0)" }}></div>
                <div className="absolute top-20 right-28 w-1 h-1 rounded-full opacity-20"
                     style={{ background: "var(--background-text, #e8e8d0)" }}></div>
                <div className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full opacity-25"
                     style={{ background: "var(--background-text, #e8e8d0)" }}></div>

                {/* Chalk star decoration */}
                <div className="absolute top-24 left-32 text-lg opacity-30"
                     style={{ color: "var(--primary-color, #f2c94c)", fontFamily: "var(--heading-font-family, Caveat)" }}>
                    ★
                </div>

                {/* Company logo/name header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && 
                                    <span className="text-lg font-bold" 
                                          style={{ color: 'var(--background-text, #e8e8d0)', fontFamily: "var(--heading-font-family, Caveat)" }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title with hand-drawn underline */}
                        <div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #e8e8d0)",
                                    fontFamily: "var(--heading-font-family, Caveat)"
                                }}>
                                {slideData?.title || 'Welcome to Our Presentation'}
                            </h1>
                            <div className="mt-4 w-32 h-1 border-b-2 border-dashed opacity-60"
                                 style={{ 
                                     borderColor: "var(--primary-color, #f2c94c)",
                                     borderRadius: "50% 20% 80% 30%"
                                 }}></div>
                        </div>

                        {/* Description */}
                        <p className="text-lg sm:text-xl leading-relaxed"
                           style={{ 
                               color: "var(--background-text, #e8e8d0)", 
                               fontFamily: "var(--body-font-family, 'Patrick Hand')"
                           }}>
                            {slideData?.description || 'Today we will explore innovative solutions and strategies that will transform your business operations and drive sustainable growth in the digital era.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="p-6 rounded-lg"
                             style={{
                                 border: "1px dashed rgba(255,255,255,0.2)",
                                 background: "rgba(255,255,255,0.05)",
                                 borderRadius: "4px"
                             }}>
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed"
                                     style={{ 
                                         background: "var(--primary-color, #f2c94c)",
                                         borderColor: "rgba(255,255,255,0.3)"
                                     }}>
                                    <span className="font-bold text-lg"
                                          style={{ 
                                              color: "var(--primary-text, #1a3a2a)",
                                              fontFamily: "var(--heading-font-family, Caveat)"
                                          }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold"
                                          style={{ 
                                              color: "var(--background-text, #e8e8d0)",
                                              fontFamily: "var(--heading-font-family, Caveat)"
                                          }}>
                                        {slideData?.presenterName || 'Professor Smith'}
                                    </span>
                                    <span className="text-base"
                                          style={{ 
                                              color: "var(--background-text, #e8e8d0)",
                                              fontFamily: "var(--body-font-family, 'Patrick Hand')",
                                              opacity: "0.8"
                                          }}>
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-80 rounded-lg overflow-hidden"
                             style={{
                                 border: "2px dashed rgba(255,255,255,0.3)"
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