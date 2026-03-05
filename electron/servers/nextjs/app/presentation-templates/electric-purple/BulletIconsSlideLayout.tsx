import React from 'react'
import * as z from "zod";

export const layoutId = 'electric-purple-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in electric purple theme.'

const electricPurpleBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Innovation Unleashed').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Harness the power of cutting-edge technology to transform your business and create extraordinary experiences that drive unprecedented growth.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(2).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(10).max(100).meta({
            description: "Bullet point description",
        }),
        icon: z.object({
            __icon_url__: z.string().default(""),
            __icon_query__: z.string().min(5).max(20).default("lightning bolt")
        })
    })).min(2).max(4).default([
        {
            title: 'Digital Transformation',
            description: 'Accelerate your journey with advanced AI solutions that revolutionize operations and customer engagement.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightning-bolt.svg',
                __icon_query__: 'lightning bolt'
            }
        },
        {
            title: 'Future-Ready Solutions',
            description: 'Build scalable platforms that adapt to tomorrow\'s challenges with intelligent automation and insights.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/rocket.svg',
                __icon_query__: 'rocket launch'
            }
        },
        {
            title: 'Exponential Growth',
            description: 'Unlock limitless potential through strategic innovation and data-driven decision making processes.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/trending-up.svg',
                __icon_query__: 'trending up'
            }
        },
        {
            title: 'Connected Ecosystem',
            description: 'Create seamless integrations that unite technology, people, and processes for maximum efficiency.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/network.svg',
                __icon_query__: 'network nodes'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = electricPurpleBulletIconsSlideSchema

export type ElectricPurpleBulletIconsSlideData = z.infer<typeof electricPurpleBulletIconsSlideSchema>

interface ElectricPurpleBulletIconsSlideLayoutProps {
    data?: Partial<ElectricPurpleBulletIconsSlideData>
}

const ElectricPurpleBulletIconsSlideLayout: React.FC<ElectricPurpleBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #e8d0ff)',
                                        fontFamily: "var(--body-font-family, Urbanist)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-16 w-24 h-24 opacity-20 rounded-full"
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #bb86fc) 0%, transparent 70%)',
                        filter: 'blur(8px)'
                    }}
                ></div>
                
                <div className="absolute bottom-20 left-8 opacity-30">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <polygon
                            points="30,5 55,25 45,50 15,50 5,25"
                            fill="none"
                            stroke="var(--primary-color, #bb86fc)"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-3xl font-bold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #e8d0ff)",
                                fontFamily: "var(--heading-font-family, Urbanist)"
                            }}
                        >
                            {slideData?.title || 'Innovation Unleashed'}
                        </h1>
                        
                        {/* Gradient Divider */}
                        <div 
                            className="h-0.5 w-full mb-4"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #bb86fc) 50%, transparent 100%)'
                            }}
                        ></div>
                        
                        <p 
                            className="text-base leading-relaxed max-w-4xl font-medium"
                            style={{ 
                                color: "var(--background-text, #e8d0ff)",
                                fontFamily: "var(--body-font-family, Urbanist)",
                                opacity: 0.9
                            }}
                        >
                            {slideData?.description || 'Harness the power of cutting-edge technology to transform your business and create extraordinary experiences that drive unprecedented growth.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    border: '1px solid rgba(187, 134, 252, 0.2)',
                                    background: 'rgba(187, 134, 252, 0.08)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 4px 20px rgba(187, 134, 252, 0.1)'
                                }}
                            >
                                {/* Icon */}
                                <div 
                                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl"
                                    style={{
                                        background: 'var(--primary-color, #bb86fc)',
                                        boxShadow: '0 0 20px rgba(187, 134, 252, 0.3)'
                                    }}
                                >
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-6 h-6"
                                        style={{ 
                                            filter: "brightness(0) invert(1)"
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-bold mb-1 leading-tight"
                                        style={{
                                            color: "var(--primary-color, #bb86fc)",
                                            fontFamily: "var(--heading-font-family, Urbanist)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-medium"
                                        style={{
                                            color: "var(--background-text, #e8d0ff)",
                                            fontFamily: "var(--body-font-family, Urbanist)",
                                            opacity: 0.85
                                        }}
                                    >
                                        {bullet.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElectricPurpleBulletIconsSlideLayout