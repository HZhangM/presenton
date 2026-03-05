import React from 'react'
import * as z from "zod";

export const layoutId = 'glassmorphism-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A modern frosted glass intro slide with vibrant gradient background and translucent cards'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Innovation Unveiled').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover cutting-edge solutions that transform your business through advanced technology, seamless integration, and user-centric design principles.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Chen').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern office workspace with innovation") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Chen');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-30"
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                />
                <div 
                    className="absolute bottom-32 left-16 w-32 h-32 rounded-full opacity-20"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                />

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div 
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-base font-semibold text-white">
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex h-full px-12 py-20">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 className="text-6xl font-bold leading-tight text-white">
                            {slideData?.title || 'Innovation Unveiled'}
                        </h1>

                        {/* Accent Line */}
                        <div 
                            className="w-24 h-1 rounded-full"
                            style={{ background: "var(--primary-color, #7c3aed)" }}
                        />

                        {/* Description */}
                        <p className="text-xl leading-relaxed text-white/90 max-w-lg">
                            {slideData?.description || 'Discover cutting-edge solutions that transform your business through advanced technology, seamless integration, and user-centric design principles.'}
                        </p>

                        {/* Presenter Card */}
                        <div 
                            className="inline-flex items-center gap-4 p-6 rounded-2xl max-w-sm"
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '20px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}
                        >
                            <div 
                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{ 
                                    background: "var(--primary-color, #7c3aed)",
                                    boxShadow: '0 4px 16px rgba(124, 58, 237, 0.3)'
                                }}
                            >
                                <span className="font-bold text-lg" style={{ color: "var(--primary-text, #ffffff)" }}>
                                    {presenterInitials}
                                </span>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">
                                    {slideData?.presenterName || 'Sarah Chen'}
                                </div>
                                <div className="text-sm text-white/70 font-medium">
                                    Presenter
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-12">
                        <div 
                            className="w-full max-w-md h-96 rounded-2xl overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
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