import React from 'react'
import * as z from "zod";

export const layoutId = 'japanese-ukiyoe-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A traditional Japanese woodblock print inspired cover slide with title, description, presenter info, and supporting image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Product Overview').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our product offers customizable dashboards for real-time reporting and data-driven decisions. It integrates seamlessly with third-party tools to enhance operations.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Takeshi Yamamoto').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Traditional Japanese landscape scene") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Takeshi Yamamoto');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Shippori Mincho)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-12 w-8 h-8 rounded-full opacity-80" 
                     style={{ background: "var(--primary-color, #c23b22)" }}></div>
                <div className="absolute bottom-16 left-16 w-32 h-px opacity-30" 
                     style={{ background: "var(--background-text, #1a1a3a)" }}></div>
                <div className="absolute top-1/3 left-8 w-4 h-px opacity-20" 
                     style={{ background: "var(--background-text, #1a1a3a)" }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a1a3a)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-5">
                        {/* Title */}
                        <h1 
                            style={{ color: "var(--background-text, #1a1a3a)" }} 
                            className="text-5xl font-bold leading-tight"
                        >
                            {slideData?.title || 'Product Overview'}
                        </h1>

                        {/* Decorative divider with circle */}
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-px" style={{ background: "var(--background-text, #1a1a3a)" }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #c23b22)" }}></div>
                        </div>

                        {/* Description */}
                        <p 
                            style={{ 
                                color: "var(--background-text, #1a1a3a)", 
                                fontFamily: "var(--body-font-family, Zen Kaku Gothic New)" 
                            }} 
                            className="text-lg leading-relaxed font-medium opacity-90"
                        >
                            {slideData?.description || 'Our product offers customizable dashboards for real-time reporting and data-driven decisions. It integrates seamlessly with third-party tools to enhance operations.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded p-5 shadow-sm"
                            style={{
                                background: 'var(--card-color, rgba(255, 255, 250, 0.7))',
                                border: '1px solid var(--stroke, rgba(30, 30, 80, 0.15))',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Hanko-style seal */}
                                <div 
                                    style={{ background: "var(--primary-color, #c23b22)" }} 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                                    style={{
                                        background: "var(--primary-color, #c23b22)",
                                        borderColor: "var(--primary-color, #c23b22)"
                                    }}
                                >
                                    <span className="font-bold text-sm" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        style={{ color: "var(--background-text, #1a1a3a)" }} 
                                        className="text-xl font-semibold"
                                    >
                                        {slideData?.presenterName || 'Takeshi Yamamoto'}
                                    </span>
                                    <span 
                                        style={{ 
                                            color: "var(--background-text, #1a1a3a)", 
                                            fontFamily: "var(--body-font-family, Zen Kaku Gothic New)" 
                                        }} 
                                        className="text-sm opacity-70 font-medium"
                                    >
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-80 overflow-hidden shadow-lg"
                             style={{ 
                                 borderRadius: '4px',
                                 border: '1px solid rgba(30,30,80,0.12)' 
                             }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Traditional Japanese landscape scene'}
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