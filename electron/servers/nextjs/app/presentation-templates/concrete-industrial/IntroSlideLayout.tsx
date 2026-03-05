import React from 'react'
import * as z from "zod";

export const layoutId = 'concrete-industrial-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A raw industrial cover slide with concrete aesthetics, bold typography, and safety orange accents.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('PROJECT OVERVIEW').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Industrial-grade solutions built for performance and reliability. Our systems integrate seamlessly with existing infrastructure to deliver maximum operational efficiency.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Alex Rodriguez').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Industrial facility with concrete structures") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        __image_prompt__: 'Industrial facility with concrete structures'
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Alex Rodriguez');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                }}
            >
                {/* Hazard Stripe Decorative Elements */}
                <div 
                    className="absolute top-0 left-0 w-16 h-8 opacity-30 z-0"
                    style={{
                        background: `repeating-linear-gradient(45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 10px, var(--background-text, #1a1a1a) 10px, var(--background-text, #1a1a1a) 20px)`
                    }}
                ></div>
                <div 
                    className="absolute bottom-0 right-0 w-24 h-12 opacity-20 z-0"
                    style={{
                        background: `repeating-linear-gradient(-45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 8px, transparent 8px, transparent 16px)`
                    }}
                ></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-bold uppercase tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-20 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-16 space-y-8">
                        {/* Stencil Number */}
                        <div className="flex items-center gap-4 mb-2">
                            <div 
                                className="w-12 h-12 flex items-center justify-center font-bold text-xl border-2"
                                style={{
                                    borderColor: 'var(--primary-color, #ff6d00)',
                                    color: 'var(--primary-color, #ff6d00)',
                                    fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                }}
                            >
                                01
                            </div>
                            <div 
                                className="h-1 w-16"
                                style={{ background: 'var(--primary-color, #ff6d00)' }}
                            ></div>
                        </div>

                        {/* Title */}
                        <h1 
                            className="text-6xl font-bold uppercase leading-none tracking-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                            }}
                        >
                            {slideData?.title || 'PROJECT OVERVIEW'}
                        </h1>

                        {/* Orange accent border */}
                        <div 
                            className="w-32 h-1"
                            style={{ background: "var(--primary-color, #ff6d00)" }}
                        ></div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed font-medium max-w-lg"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                            }}
                        >
                            {slideData?.description || 'Industrial-grade solutions built for performance and reliability. Our systems integrate seamlessly with existing infrastructure to deliver maximum operational efficiency.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="p-6 shadow-lg"
                            style={{
                                background: 'rgba(255,255,255,0.9)',
                                borderLeft: '4px solid var(--primary-color, #ff6d00)',
                                borderRadius: 0,
                                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Initials Badge */}
                                <div 
                                    className="w-14 h-14 flex items-center justify-center font-bold text-lg border-2"
                                    style={{ 
                                        background: "var(--primary-color, #ff6d00)",
                                        color: "var(--primary-text, #ffffff)",
                                        borderColor: "var(--primary-color, #ff6d00)",
                                        fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                    }}
                                >
                                    {presenterInitials}
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-sm uppercase tracking-wide font-medium opacity-70"
                                        style={{ 
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, 'Roboto Condensed')"
                                        }}
                                    >
                                        PRESENTED BY
                                    </span>
                                    <span 
                                        className="text-xl font-bold uppercase"
                                        style={{ 
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, 'Bebas Neue')"
                                        }}
                                    >
                                        {slideData?.presenterName || 'ALEX RODRIGUEZ'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full max-w-lg h-96 overflow-hidden relative">
                            <div 
                                className="absolute top-0 left-0 w-full h-1"
                                style={{ background: 'var(--primary-color, #ff6d00)' }}
                            ></div>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover"
                                style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout