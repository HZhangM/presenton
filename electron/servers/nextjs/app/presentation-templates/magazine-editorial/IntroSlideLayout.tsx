import React from 'react'
import * as z from "zod";

export const layoutId = 'magazine-editorial-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A bold editorial magazine-style intro slide with strong typography hierarchy and high contrast design'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('The Future of Design').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Exploring innovative approaches to visual storytelling and brand communication in the digital age. A comprehensive guide to editorial excellence.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Johnson').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern magazine editorial workspace") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Modern magazine editorial workspace"
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Johnson');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Display)"
                }}
            >
                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ 
                                    color: 'var(--background-text, #1a1a1a)',
                                    fontFamily: 'var(--heading-font-family, DM Serif Display)'
                                }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                        <div className="w-full h-[3px] mt-4" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-8 text-8xl font-bold opacity-5" style={{ 
                    color: 'var(--background-text, #1a1a1a)',
                    fontFamily: 'var(--heading-font-family, DM Serif Display)'
                }}>
                    01
                </div>

                {/* Main Layout */}
                <div className="flex h-full pt-24 pb-12 px-12">
                    {/* Left Content Section */}
                    <div className="flex-1 flex flex-col justify-center pr-16 space-y-8">
                        {/* Large Title */}
                        <div className="space-y-4">
                            <h1 className="text-6xl font-normal leading-tight" style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, DM Serif Display)"
                            }}>
                                {slideData?.title || 'The Future of Design'}
                            </h1>
                            
                            {/* Red accent underline */}
                            <div className="w-24 h-[4px]" style={{ backgroundColor: "var(--primary-color, #e53935)" }}></div>
                        </div>

                        {/* Description */}
                        <p className="text-xl leading-relaxed font-normal max-w-lg" style={{ 
                            color: "var(--background-text, #1a1a1a)",
                            fontFamily: "var(--body-font-family, DM Sans)"
                        }}>
                            {slideData?.description || 'Exploring innovative approaches to visual storytelling and brand communication in the digital age. A comprehensive guide to editorial excellence.'}
                        </p>

                        {/* Presenter Card */}
                        <div className="p-6 mt-8" style={{
                            border: '2px solid var(--background-text, #1a1a1a)',
                            backgroundColor: '#ffffff',
                            borderRadius: '0'
                        }}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center" style={{ 
                                    backgroundColor: "var(--primary-color, #e53935)",
                                    border: '2px solid var(--background-text, #1a1a1a)'
                                }}>
                                    <span className="font-bold text-lg" style={{ 
                                        color: "var(--primary-text, #ffffff)",
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}>
                                        {presenterInitials}
                                    </span>
                                </div>
                                
                                <div>
                                    <div className="text-2xl font-normal" style={{ 
                                        color: "var(--background-text, #1a1a1a)",
                                        fontFamily: "var(--heading-font-family, DM Serif Display)"
                                    }}>
                                        {slideData?.presenterName || 'Sarah Johnson'}
                                    </div>
                                    <div className="text-base font-medium" style={{ 
                                        color: "var(--background-text, #1a1a1a)",
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}>
                                        Creative Director
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full max-w-md h-96" style={{
                            border: '2px solid var(--background-text, #1a1a1a)',
                            borderRadius: '0'
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                                style={{ borderRadius: '0' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--background-text, #1a1a1a)' }}></div>
            </div>
        </>
    )
}

export default IntroSlideLayout