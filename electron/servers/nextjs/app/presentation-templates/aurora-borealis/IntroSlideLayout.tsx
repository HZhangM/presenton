import React from 'react'
import * as z from "zod";

export const layoutId = 'aurora-borealis-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover/title slide with ethereal aurora borealis styling featuring presentation title, subtitle, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Northern Insights').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover transformative solutions that illuminate new possibilities and guide your journey toward unprecedented growth and innovation in the digital landscape.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Aurora Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Northern lights aurora over landscape") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Aurora Mitchell');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poppins)"
                }}
            >
                {/* Decorative Aurora Curves */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div 
                        className="absolute top-12 left-8 w-96 h-2 rounded-full opacity-30"
                        style={{
                            background: "linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.8) 100%)"
                        }}
                    ></div>
                    <div 
                        className="absolute bottom-16 right-12 w-80 h-1 rounded-full opacity-20"
                        style={{
                            background: "linear-gradient(90deg, rgba(147, 51, 234, 0.6) 0%, var(--primary-color, #4ecca3) 100%)"
                        }}
                    ></div>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-semibold" style={{ color: 'var(--background-text, #d0e8e0)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-12 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-4">
                        {/* Title */}
                        <h1 
                            className="text-6xl font-bold leading-tight"
                            style={{ color: "var(--background-text, #d0e8e0)" }}
                        >
                            {slideData?.title || 'Northern Insights'}
                        </h1>

                        {/* Aurora accent line */}
                        <div 
                            className="w-24 h-1 rounded-full mb-4"
                            style={{ 
                                background: "linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.8) 100%)"
                            }}
                        ></div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed max-w-lg"
                            style={{ 
                                color: "var(--background-text, #d0e8e0)",
                                fontFamily: "var(--body-font-family, 'Nunito Sans')"
                            }}
                        >
                            {slideData?.description || 'Discover transformative solutions that illuminate new possibilities and guide your journey toward unprecedented growth and innovation in the digital landscape.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-2xl p-5 backdrop-blur-sm shadow-lg mt-4"
                            style={{
                                background: 'var(--card-color, rgba(78, 204, 163, 0.08))',
                                border: '1px solid var(--stroke, rgba(78, 204, 163, 0.25))',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Custom Initials Icon */}
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                    style={{ 
                                        background: "var(--primary-color, #4ecca3)",
                                        boxShadow: "0 0 20px rgba(78, 204, 163, 0.3)"
                                    }}
                                >
                                    <span 
                                        className="font-bold text-base"
                                        style={{ color: "var(--primary-text, #0a1a2a)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-xl font-bold"
                                        style={{ color: "var(--background-text, #d0e8e0)" }}
                                    >
                                        {slideData?.presenterName || 'Aurora Mitchell'}
                                    </span>
                                    <span 
                                        className="text-base opacity-80"
                                        style={{ 
                                            color: "var(--background-text, #d0e8e0)",
                                            fontFamily: "var(--body-font-family, 'Nunito Sans')"
                                        }}
                                    >
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
                            style={{
                                border: '1px solid var(--stroke, rgba(78, 204, 163, 0.25))',
                                boxShadow: "0 20px 40px rgba(78, 204, 163, 0.1)"
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Northern lights aurora'}
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