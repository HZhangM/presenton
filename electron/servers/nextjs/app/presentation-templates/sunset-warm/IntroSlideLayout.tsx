import React from 'react'
import * as z from "zod";

export const layoutId = 'sunset-warm-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A warm sunset-themed cover slide with glass-morphism cards, friendly typography, and golden gradient accents.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Welcome to Our Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Join us for an inspiring journey through innovation, creativity, and success. Together we will explore new opportunities and achieve remarkable results.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Johnson').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Beautiful sunset over mountains with warm golden light")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Beautiful sunset over mountains with warm golden light"
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const SunsetWarmIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Johnson');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Nunito)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-20 right-32 w-64 h-64 rounded-full opacity-10"
                    style={{
                        background: `radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)`
                    }}
                ></div>
                <div 
                    className="absolute bottom-32 left-24 w-48 h-48 rounded-full opacity-5"
                    style={{
                        background: `radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)`
                    }}
                ></div>

                {/* Company Logo/Name Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && 
                                    <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />
                                }
                                {(slideData as any)?.__companyName__ && 
                                    <span 
                                        className="text-lg font-700" 
                                        style={{ color: 'var(--background-text, #3d1e00)' }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Container */}
                <div className="relative z-10 flex h-full px-12 pt-20 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 
                            className="text-6xl font-800 leading-tight"
                            style={{ color: "var(--background-text, #3d1e00)" }}
                        >
                            {slideData?.title || 'Welcome to Our Presentation'}
                        </h1>

                        {/* Gradient Divider */}
                        <div 
                            className="w-32 h-1 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, transparent 0%, var(--primary-color, #e65100) 50%, transparent 100%)`
                            }}
                        ></div>

                        {/* Description */}
                        <p 
                            className="text-xl leading-relaxed font-500"
                            style={{ 
                                color: "var(--background-text, #3d1e00)",
                                fontFamily: "var(--body-font-family, 'Nunito Sans')"
                            }}
                        >
                            {slideData?.description || 'Join us for an inspiring journey through innovation, creativity, and success. Together we will explore new opportunities and achieve remarkable results.'}
                        </p>

                        {/* Presenter Card */}
                        <div 
                            className="inline-flex items-center gap-4 px-6 py-4 rounded-full max-w-fit"
                            style={{
                                background: 'rgba(255,255,255,0.55)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                            }}
                        >
                            {/* Presenter Avatar */}
                            <div 
                                className="w-12 h-12 rounded-full flex items-center justify-center font-700"
                                style={{ 
                                    background: "var(--primary-color, #e65100)",
                                    color: "var(--primary-text, #ffffff)"
                                }}
                            >
                                {presenterInitials}
                            </div>

                            {/* Presenter Info */}
                            <div className="flex flex-col">
                                <span 
                                    className="text-lg font-600"
                                    style={{ color: "var(--background-text, #3d1e00)" }}
                                >
                                    {slideData?.presenterName || 'Sarah Johnson'}
                                </span>
                                <span 
                                    className="text-sm font-500 opacity-80"
                                    style={{ 
                                        color: "var(--background-text, #3d1e00)",
                                        fontFamily: "var(--body-font-family, 'Nunito Sans')"
                                    }}
                                >
                                    Presenter
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-96 overflow-hidden"
                            style={{
                                background: 'rgba(255,255,255,0.55)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                borderRadius: '20px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                                style={{ borderRadius: '20px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunsetWarmIntroSlide