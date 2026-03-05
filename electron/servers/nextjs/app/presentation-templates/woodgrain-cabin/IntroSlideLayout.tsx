import React from 'react'
import * as z from "zod";

export const layoutId = 'woodgrain-cabin-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A rustic cabin-themed intro slide with handcrafted typography and warm wood tones'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Welcome to Our Cabin').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('A cozy retreat where nature meets comfort. Experience the warmth of handcrafted hospitality and rustic charm in our beautiful woodland sanctuary.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Mountain').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Cozy log cabin in the woods with warm lighting")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Mountain');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Amatic SC)"
                }}
            >
                {/* Pine tree decorative element */}
                <div className="absolute top-8 right-8 opacity-20 text-4xl" style={{ color: "var(--primary-color, #d4a76a)" }}>
                    🌲
                </div>
                
                {/* Wood burn decorative line */}
                <div className="absolute top-16 left-12 w-32 h-0.5 opacity-30" style={{ background: "var(--primary-color, #d4a76a)" }}>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45" style={{ background: "var(--primary-color, #d4a76a)" }}></div>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #f5efe6)', fontFamily: "var(--heading-font-family, Amatic SC)" }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-5">
                        {/* Title */}
                        <h1 className="text-6xl font-bold leading-tight" style={{ color: "var(--background-text, #f5efe6)" }}>
                            {slideData?.title || 'Welcome to Our Cabin'}
                        </h1>

                        {/* Rope-style divider */}
                        <div className="relative py-2">
                            <div className="w-24 h-1 rounded-full opacity-60" style={{ background: "var(--primary-color, #d4a76a)" }}></div>
                            <div className="absolute left-6 top-1/2 w-3 h-3 rounded-full opacity-40" style={{ background: "var(--primary-color, #d4a76a)", transform: "translateY(-50%)" }}></div>
                        </div>

                        {/* Description */}
                        <p className="text-lg leading-relaxed max-w-lg" style={{ 
                            color: "var(--background-text, #f5efe6)", 
                            fontFamily: "var(--body-font-family, Cabin)",
                            opacity: 0.9
                        }}>
                            {slideData?.description || 'A cozy retreat where nature meets comfort. Experience the warmth of handcrafted hospitality and rustic charm in our beautiful woodland sanctuary.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="p-5 border-2 rounded-lg shadow-md mt-6" style={{
                            background: 'var(--card-color, rgba(255, 250, 240, 0.9))',
                            borderColor: 'var(--stroke, rgba(212, 167, 106, 0.3))',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--primary-color, #d4a76a)" }}>
                                    <span className="font-bold text-lg" style={{ 
                                        color: "var(--primary-text, #2a1a0e)",
                                        fontFamily: "var(--heading-font-family, Amatic SC)"
                                    }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold" style={{ 
                                        color: "var(--primary-text, #2a1a0e)",
                                        fontFamily: "var(--heading-font-family, Amatic SC)"
                                    }}>
                                        {slideData?.presenterName || 'Sarah Mountain'}
                                    </span>
                                    <span className="text-sm font-medium" style={{ 
                                        color: "var(--primary-text, #2a1a0e)",
                                        fontFamily: "var(--body-font-family, Cabin)",
                                        opacity: 0.8
                                    }}>
                                        Host & Guide
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex-shrink-0 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-lg border-2" style={{
                            borderColor: 'var(--stroke, rgba(212, 167, 106, 0.3))'
                        }}>
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