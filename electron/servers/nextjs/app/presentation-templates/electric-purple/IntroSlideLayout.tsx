import React from 'react'
import * as z from "zod";

export const layoutId = 'electric-purple-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cover/title slide with presentation title, subtitle/description, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Electric Innovation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Unleashing the power of cutting-edge technology to transform your business landscape with innovative solutions and forward-thinking strategies.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Alex Rivera').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=360&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Modern technology innovation concept") 
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Alex Rivera');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Urbanist)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{ background: 'linear-gradient(45deg, var(--primary-color, #bb86fc), transparent)', filter: 'blur(20px)' }}></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 opacity-10" style={{ background: 'var(--primary-color, #bb86fc)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', filter: 'blur(10px)' }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8d0ff)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-12 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #e8d0ff)" }} className="text-5xl lg:text-6xl font-bold leading-tight">
                            {slideData?.title || 'Electric Innovation'}
                        </h1>

                        {/* Gradient Divider */}
                        <div 
                            className="w-32 h-1 rounded-full"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent, var(--primary-color, #bb86fc), transparent)',
                                boxShadow: '0 0 10px var(--primary-color, #bb86fc)'
                            }}
                        ></div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #e8d0ff)" }} className="text-lg leading-relaxed opacity-90">
                            {slideData?.description || 'Unleashing the power of cutting-edge technology to transform your business landscape with innovative solutions and forward-thinking strategies.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-2xl p-5 backdrop-blur-lg"
                            style={{
                                border: '1px solid var(--stroke, rgba(187, 134, 252, 0.3))',
                                background: 'var(--card-color, rgba(187, 134, 252, 0.1))',
                                boxShadow: '0 0 20px rgba(187, 134, 252, 0.2)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Presenter Avatar */}
                                <div 
                                    style={{ background: "var(--primary-color, #bb86fc)" }} 
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                >
                                    <span className="font-bold text-base" style={{ color: "var(--primary-text, #1a0030)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--background-text, #e8d0ff)" }} className="text-xl font-bold">
                                        {slideData?.presenterName || 'Alex Rivera'}
                                    </span>
                                    <span style={{ color: "var(--background-text, #e8d0ff)" }} className="text-sm opacity-75 font-medium">
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-80 rounded-2xl overflow-hidden backdrop-blur-lg"
                            style={{
                                border: '1px solid var(--stroke, rgba(187, 134, 252, 0.3))',
                                boxShadow: '0 0 30px rgba(187, 134, 252, 0.3)'
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