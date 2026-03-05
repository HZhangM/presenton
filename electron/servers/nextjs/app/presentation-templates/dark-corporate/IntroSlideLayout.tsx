import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-corporate-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A professional dark mode intro slide with title, description, presenter info, and supporting image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Corporate Overview').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Delivering innovative solutions through data-driven insights and cutting-edge technology. Our platform empowers organizations to achieve sustainable growth and operational excellence.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Johnson').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern corporate office with technology") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Johnson');

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
                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
                    style={{
                        background: `linear-gradient(135deg, var(--primary-color, #6366f1) 0%, transparent 70%)`,
                        transform: 'translate(30%, -30%)'
                    }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
                    style={{
                        background: 'var(--primary-color, #6366f1)',
                        transform: 'translate(-50%, 50%)'
                    }}
                />

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-20 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 
                            className="text-5xl font-bold leading-tight"
                            style={{ color: "var(--background-text, #e5e7eb)" }}
                        >
                            {slideData?.title || 'Corporate Overview'}
                        </h1>

                        {/* Accent Line */}
                        <div 
                            className="w-24 h-1"
                            style={{ background: "var(--primary-color, #6366f1)" }}
                        />

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed opacity-90"
                            style={{ color: "var(--background-text, #e5e7eb)" }}
                        >
                            {slideData?.description || 'Delivering innovative solutions through data-driven insights and cutting-edge technology. Our platform empowers organizations to achieve sustainable growth and operational excellence.'}
                        </p>

                        {/* Presenter Card */}
                        <div 
                            className="rounded-lg p-6 max-w-sm"
                            style={{
                                background: 'var(--card-color, rgba(99, 102, 241, 0.08))',
                                border: '1px solid var(--stroke, rgba(99, 102, 241, 0.2))',
                                borderLeft: `3px solid var(--primary-color, #6366f1)`
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center font-semibold"
                                    style={{ 
                                        background: "var(--primary-color, #6366f1)",
                                        color: "var(--primary-text, #ffffff)"
                                    }}
                                >
                                    {presenterInitials}
                                </div>
                                <div>
                                    <div 
                                        className="text-lg font-semibold"
                                        style={{ color: "var(--background-text, #e5e7eb)" }}
                                    >
                                        {slideData?.presenterName || 'Sarah Johnson'}
                                    </div>
                                    <div 
                                        className="text-sm opacity-70"
                                        style={{ color: "var(--background-text, #e5e7eb)" }}
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
                            className="w-full max-w-lg h-96 rounded-lg overflow-hidden shadow-xl"
                            style={{
                                border: '1px solid var(--stroke, rgba(99, 102, 241, 0.2))'
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

                {/* Bottom Accent Line */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                    style={{ background: 'var(--primary-color, #6366f1)' }}
                />
            </div>
        </>
    )
}

export default IntroSlideLayout