import React from 'react'
import * as z from "zod";

export const layoutId = 'slate-minimal-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover/title slide with presentation title, subtitle/description, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Product Overview').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our product offers customizable dashboards for real-time reporting and data-driven decisions. It integrates with third-party tools to enhance operations and scales with business growth for improved efficiency.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('John Doe').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Business team meeting room discussion") 
    }).default({
        __image_url__: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        __image_prompt__: 'Business team in meeting room discussing product features and solutions'
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
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Inter)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-16 right-20 w-2 h-2 rounded-full opacity-30" 
                     style={{ backgroundColor: "var(--primary-color, #3b82f6)" }}></div>
                <div className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full opacity-20" 
                     style={{ backgroundColor: "var(--primary-color, #3b82f6)" }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1e293b)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-4">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #1e293b)" }} 
                            className="text-5xl font-bold leading-tight">
                            {slideData?.title || 'Product Overview'}
                        </h1>

                        {/* Accent line */}
                        <div className="w-16 h-0.5 opacity-60" 
                             style={{ backgroundColor: "var(--primary-color, #3b82f6)" }}></div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #1e293b)" }} 
                           className="text-lg leading-relaxed opacity-80 max-w-lg">
                            {slideData?.description || 'Our product offers customizable dashboards for real-time reporting and data-driven decisions. It integrates with third-party tools to enhance operations and scales with business growth for improved efficiency.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="mt-8 p-4 rounded-lg border border-black/6 shadow-sm"
                             style={{
                                 backgroundColor: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                 borderColor: 'rgba(0,0,0,0.08)',
                                 boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                             }}>
                            <div className="flex items-center gap-3">
                                {/* Initials Avatar */}
                                <div style={{ backgroundColor: "var(--primary-color, #3b82f6)" }} 
                                     className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="font-medium text-sm" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col min-w-0 flex-1">
                                    <span style={{ color: "var(--background-text, #1e293b)" }} 
                                          className="text-base font-semibold">
                                        {slideData?.presenterName || 'John Doe'}
                                    </span>
                                    <span style={{ color: "var(--background-text, #1e293b)" }} 
                                          className="text-sm opacity-60">
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-72 rounded-lg overflow-hidden shadow-sm border"
                             style={{
                                 borderColor: 'rgba(0,0,0,0.08)',
                                 boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
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