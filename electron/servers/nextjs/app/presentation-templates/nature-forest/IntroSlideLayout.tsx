import React from 'react'
import * as z from "zod";

export const layoutId = 'nature-forest-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A nature-themed cover slide with organic forest styling, featuring title, description, presenter info, and supporting image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Nature Conservation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Exploring sustainable forest management practices and biodiversity preservation strategies for a healthier planet. Join us in understanding nature\'s delicate balance.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Dr. Sarah Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Lush green forest canopy with sunlight filtering through trees")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Dr. Sarah Mitchell');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bitter)"
                }}
            >
                {/* Decorative leaf elements */}
                <div className="absolute top-8 right-12 opacity-20">
                    <div 
                        className="w-32 h-32 rounded-full transform rotate-45"
                        style={{
                            background: `radial-gradient(ellipse 60% 80% at 30% 20%, var(--primary-color, #7cb342) 20%, transparent 70%)`
                        }}
                    ></div>
                </div>
                
                <div className="absolute bottom-16 left-8 opacity-15">
                    <div 
                        className="w-24 h-40 rounded-full transform -rotate-12"
                        style={{
                            background: `radial-gradient(ellipse 70% 85% at 40% 30%, var(--primary-color, #7cb342) 15%, transparent 65%)`
                        }}
                    ></div>
                </div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8efe0)', fontFamily: 'var(--body-font-family, Source Sans 3)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <div className="space-y-4">
                            <h1 
                                style={{ color: "var(--background-text, #e8efe0)" }} 
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                {slideData?.title || 'Nature Conservation'}
                            </h1>
                            
                            {/* Organic divider */}
                            <div className="relative">
                                <div 
                                    className="h-1 rounded-full"
                                    style={{ 
                                        background: `linear-gradient(90deg, var(--primary-color, #7cb342) 0%, transparent 100%)`,
                                        width: '120px'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p 
                            style={{ 
                                color: "var(--background-text, #e8efe0)", 
                                fontFamily: 'var(--body-font-family, Source Sans 3)' 
                            }} 
                            className="text-base sm:text-lg leading-relaxed opacity-90 max-w-lg"
                        >
                            {slideData?.description || 'Exploring sustainable forest management practices and biodiversity preservation strategies for a healthier planet. Join us in understanding nature\'s delicate balance.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-xl p-6 backdrop-blur-sm"
                            style={{
                                background: 'var(--card-color, rgba(124, 179, 66, 0.1))',
                                border: '1px solid var(--stroke, rgba(124, 179, 66, 0.25))',
                                borderRadius: '12px'
                            }}
                        >
                            <div className="flex items-center gap-5">
                                {/* Custom Initials Icon */}
                                <div 
                                    style={{ background: "var(--primary-color, #7cb342)" }} 
                                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
                                >
                                    <span 
                                        className="font-bold text-base lg:text-lg" 
                                        style={{ color: "var(--primary-text, #1a2e10)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col space-y-1">
                                    <span 
                                        style={{ color: "var(--background-text, #e8efe0)" }} 
                                        className="text-lg lg:text-xl font-bold"
                                    >
                                        {slideData?.presenterName || 'Dr. Sarah Mitchell'}
                                    </span>
                                    <span 
                                        style={{ 
                                            color: "var(--background-text, #e8efe0)", 
                                            fontFamily: 'var(--body-font-family, Source Sans 3)' 
                                        }} 
                                        className="text-sm lg:text-base opacity-80 font-medium"
                                    >
                                        Environmental Researcher
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 overflow-hidden shadow-xl"
                            style={{
                                borderRadius: '20px',
                                border: '1px solid rgba(124,179,66,0.2)'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Forest landscape'}
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