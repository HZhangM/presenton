import React from 'react'
import * as z from "zod";

export const layoutId = 'comic-book-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A bold comic book style intro slide with dynamic pop art elements and speech bubble accents.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('HERO PRODUCT LAUNCH!').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('BAM! Our revolutionary product delivers explosive results with DYNAMIC dashboards, SUPER integration powers, and AMAZING scalability features!').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Captain Presenter').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Comic book superhero presenting business solution") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Captain Presenter');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bangers)"
                }}
            >
                {/* Decorative Halftone Overlay */}
                <div 
                    className="absolute top-4 right-4 w-32 h-32 opacity-20 z-10"
                    style={{
                        background: `radial-gradient(circle, var(--primary-color, #e53935) 20%, transparent 20%)`,
                        backgroundSize: '12px 12px'
                    }}
                ></div>

                {/* POW Badge */}
                <div className="absolute top-8 left-8 z-30">
                    <div 
                        className="px-4 py-2 rounded transform -rotate-12 border-3"
                        style={{
                            background: 'var(--primary-color, #e53935)',
                            color: 'var(--primary-text, #ffffff)',
                            border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                            boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))',
                            borderRadius: '4px'
                        }}
                    >
                        <span className="text-lg font-bold">POW!</span>
                    </div>
                </div>

                {/* Company Logo Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4 z-20">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-sm font-bold" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        textShadow: '2px 2px 0 rgba(255,255,255,0.8)'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-4">
                        {/* Title */}
                        <h1 
                            className="text-5xl font-bold leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                textStroke: '3px var(--stroke, rgba(0, 0, 0, 0.8))',
                                WebkitTextStroke: '3px var(--stroke, rgba(0, 0, 0, 0.8))',
                                textShadow: '4px 4px 0 var(--primary-color, #e53935)'
                            }}
                        >
                            {slideData?.title || 'HERO PRODUCT LAUNCH!'}
                        </h1>

                        {/* Jagged divider */}
                        <div 
                            className="w-24 h-1 mb-4"
                            style={{
                                background: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                                clipPath: 'polygon(0% 0%, 20% 100%, 40% 0%, 60% 100%, 80% 0%, 100% 100%, 100% 0%)'
                            }}
                        ></div>

                        {/* Description in speech bubble style */}
                        <div 
                            className="relative p-4 rounded border-3"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                borderRadius: '4px',
                                boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                            }}
                        >
                            <p 
                                className="text-lg font-bold leading-relaxed"
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, Comic Neue)"
                                }}
                            >
                                {slideData?.description || 'BAM! Our revolutionary product delivers explosive results with DYNAMIC dashboards, SUPER integration powers, and AMAZING scalability features!'}
                            </p>
                            {/* Speech bubble tail */}
                            <div 
                                className="absolute -bottom-3 left-8 w-6 h-6 transform rotate-45"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                    border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                    borderTop: 'none',
                                    borderLeft: 'none'
                                }}
                            ></div>
                        </div>

                        {/* Presenter Section */}
                        <div 
                            className="p-4 rounded border-3 mt-4"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                borderRadius: '4px',
                                boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border-3"
                                    style={{ 
                                        background: "var(--primary-color, #e53935)",
                                        border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))'
                                    }}
                                >
                                    <span 
                                        className="font-bold text-base"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span 
                                        className="text-xl font-bold"
                                        style={{ 
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, Comic Neue)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Captain Presenter'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 rounded overflow-hidden border-3"
                            style={{
                                border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                borderRadius: '4px',
                                boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
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