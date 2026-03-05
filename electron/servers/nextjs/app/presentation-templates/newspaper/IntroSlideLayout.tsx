import React from 'react'
import * as z from "zod";

export const layoutId = 'newspaper-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A newspaper-style intro slide with traditional serif typography and column layout for title, description, presenter info, and supporting image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('BREAKING: Product Launch').meta({
        description: "Main headline of the slide",
    }),
    description: z.string().min(10).max(150).default('Revolutionary dashboard technology transforms business intelligence landscape. Real-time analytics integration promises to reshape data-driven decision making across industries.').meta({
        description: "Main story content",
    }),
    presenterName: z.string().min(2).max(50).default('John Doe').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Business newspaper with charts and graphs")
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "Business newspaper with charts and graphs"
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

    const presenterInitials = getInitials(slideData?.presenterName || 'John Doe');
    const today = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {/* Decorative newspaper masthead border */}
                <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ 
                        background: "var(--primary-color, #1a1a1a)"
                    }}
                ></div>
                
                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-4 left-0 right-0 px-8 sm:px-12 lg:px-20">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: 'var(--heading-font-family, Unna)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                            <div 
                                className="text-sm"
                                style={{ 
                                    color: 'var(--background-text, #1a1a1a)',
                                    fontFamily: 'var(--body-font-family, "Source Serif 4")'
                                }}
                            >
                                {today}
                            </div>
                        </div>
                        <div 
                            className="w-full h-px mt-3"
                            style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}
                        ></div>
                    </div>
                )}

                {/* Main newspaper layout */}
                <div className="flex h-full px-8 sm:px-12 lg:px-20 pt-20 pb-8">
                    {/* Left column - Main story */}
                    <div className="flex-1 pr-8">
                        {/* Headline rule */}
                        <div 
                            className="w-full h-1 mb-4"
                            style={{ background: "var(--primary-color, #1a1a1a)" }}
                        ></div>
                        
                        {/* Main headline */}
                        <h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Unna)"
                            }}
                        >
                            {slideData?.title || 'BREAKING: Product Launch'}
                        </h1>

                        {/* Decorative flourish */}
                        <div className="flex items-center gap-2 mb-6">
                            <div 
                                className="w-8 h-px"
                                style={{ background: "var(--primary-color, #1a1a1a)" }}
                            ></div>
                            <div 
                                className="w-1 h-1 rounded-full"
                                style={{ background: "var(--primary-color, #1a1a1a)" }}
                            ></div>
                            <div 
                                className="w-8 h-px"
                                style={{ background: "var(--primary-color, #1a1a1a)" }}
                            ></div>
                        </div>

                        {/* Story content */}
                        <div className="columns-2 gap-6 text-justify">
                            <p 
                                className="text-base leading-relaxed mb-4"
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, 'Source Serif 4')"
                                }}
                            >
                                {slideData?.description || 'Revolutionary dashboard technology transforms business intelligence landscape. Real-time analytics integration promises to reshape data-driven decision making across industries.'}
                            </p>
                        </div>

                        {/* Byline section */}
                        <div 
                            className="mt-8 pt-4"
                            style={{ 
                                borderTop: `2px solid var(--primary-color, #1a1a1a)`,
                                borderBottom: `1px solid var(--stroke, rgba(0,0,0,0.2))`,
                                padding: '16px 0',
                                background: 'transparent'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                                    style={{ 
                                        background: "var(--primary-color, #1a1a1a)",
                                        borderColor: "var(--primary-color, #1a1a1a)"
                                    }}
                                >
                                    <span 
                                        className="font-bold text-lg"
                                        style={{ color: "var(--primary-text, #f5f0e8)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div>
                                    <div 
                                        className="text-sm uppercase tracking-wide font-medium mb-1"
                                        style={{ 
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, 'Source Serif 4')"
                                        }}
                                    >
                                        CORRESPONDENT
                                    </div>
                                    <div 
                                        className="text-xl font-bold"
                                        style={{ 
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, Unna)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'John Doe'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column divider */}
                    <div 
                        className="w-px mx-4"
                        style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}
                    ></div>

                    {/* Right column - Image */}
                    <div className="flex-1 pl-8 flex flex-col justify-center">
                        <div className="w-full">
                            <div 
                                className="w-full h-80 mb-4 border overflow-hidden"
                                style={{ borderColor: "var(--primary-color, #1a1a1a)" }}
                            >
                                <img
                                    src={slideData?.image?.__image_url__ || ''}
                                    alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p 
                                className="text-sm italic text-center"
                                style={{ 
                                    color: "var(--background-text, #1a1a1a)",
                                    fontFamily: "var(--body-font-family, 'Source Serif 4')"
                                }}
                            >
                                {slideData?.image?.__image_prompt__ || 'Supporting illustration'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative corner flourish */}
                <div 
                    className="absolute bottom-4 right-8 opacity-30"
                    style={{ color: "var(--primary-color, #1a1a1a)" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 18.77L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout