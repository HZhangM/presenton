import React from 'react'
import * as z from "zod";

export const layoutId = 'origami-paper-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover slide with origami-inspired design featuring soft paper layers, geometric fold shadows, and clean Japanese-modern typography'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Creative Solutions').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Crafting innovative approaches through thoughtful design and strategic thinking. Our methodology combines creativity with precision to deliver exceptional results.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Akira Tanaka').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=360"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern workspace with origami paper art") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Akira Tanaka');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-16 right-20 w-32 h-32 opacity-10 pointer-events-none">
                    <div 
                        className="w-full h-full"
                        style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            background: 'var(--primary-color, #e07a5f)'
                        }}
                    />
                </div>
                
                <div className="absolute bottom-32 left-16 w-16 h-16 opacity-8 pointer-events-none">
                    <div 
                        className="w-full h-full transform rotate-45"
                        style={{
                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                            background: 'var(--stroke, rgba(224, 122, 95, 0.15))'
                        }}
                    />
                </div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-5">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #2d2d3d)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-5">
                        {/* Title */}
                        <h1 
                            className="text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--heading-font-family, Outfit)"
                            }}
                        >
                            {slideData?.title || 'Creative Solutions'}
                        </h1>

                        {/* Divider with triangle endpoint */}
                        <div className="flex items-center gap-3 mb-4">
                            <div 
                                className="flex-1 h-px"
                                style={{ background: "var(--stroke, rgba(224, 122, 95, 0.15))" }}
                            />
                            <div 
                                className="w-2 h-2"
                                style={{
                                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                    background: 'var(--primary-color, #e07a5f)'
                                }}
                            />
                        </div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed mb-6"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--body-font-family, 'Nunito Sans')"
                            }}
                        >
                            {slideData?.description || 'Crafting innovative approaches through thoughtful design and strategic thinking. Our methodology combines creativity with precision to deliver exceptional results.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="p-5 border-radius-4 shadow-sm"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: '4px',
                                boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: "var(--primary-color, #e07a5f)" }}
                                >
                                    <span 
                                        className="font-semibold text-base"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div 
                                        className="text-xl font-semibold"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--heading-font-family, Outfit)"
                                        }}
                                    >
                                        {slideData?.presenterName || 'Akira Tanaka'}
                                    </div>
                                    <div 
                                        className="text-sm font-medium mt-1"
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            opacity: 0.7,
                                            fontFamily: "var(--body-font-family, 'Nunito Sans')"
                                        }}
                                    >
                                        Presenter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-md h-80 overflow-hidden shadow-sm flex-shrink-0"
                            style={{
                                borderRadius: '4px',
                                border: '1px solid rgba(224,122,95,0.12)',
                                boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
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