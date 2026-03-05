import React from 'react'
import * as z from "zod";

export const layoutId = 'aurora-borealis-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'An aurora borealis themed slide with title, description, and bullet points each paired with an icon.'

const auroraBorealisBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Northern Innovations').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Like the ethereal dance of the northern lights, breakthrough innovations emerge from the harmony between vision and execution in transformative moments.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("aurora light")
        })
    })).min(2).max(4).default([
        {
            title: 'Luminous Vision',
            description: 'Illuminate possibilities with clarity that cuts through uncertainty like aurora streams across the arctic sky.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightbulb-bold.svg',
                __icon_query__: 'bright vision'
            }
        },
        {
            title: 'Flowing Adaptation',
            description: 'Embrace fluid transformation that dances between structure and flexibility like celestial currents.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/wave-bold.svg',
                __icon_query__: 'flowing waves'
            }
        },
        {
            title: 'Ethereal Impact',
            description: 'Create lasting influence that resonates beyond the moment, inspiring awe and wonder in every interaction.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'shining star'
            }
        },
        {
            title: 'Infinite Potential',
            description: 'Harness boundless energy that expands horizons and transforms ordinary moments into extraordinary experiences.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/infinity-bold.svg',
                __icon_query__: 'infinite symbol'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = auroraBorealisBulletIconsSlideSchema

export type AuroraBorealisBulletIconsSlideData = z.infer<typeof auroraBorealisBulletIconsSlideSchema>

interface AuroraBorealisBulletIconsSlideLayoutProps {
    data?: Partial<AuroraBorealisBulletIconsSlideData>
}

const AuroraBorealisBulletIconsSlideLayout: React.FC<AuroraBorealisBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #d0e8e0)', fontFamily: 'var(--body-font-family, Nunito Sans)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Aurora Flow */}
                <div className="absolute top-16 right-20 opacity-30">
                    <svg width="200" height="80" viewBox="0 0 200 80">
                        <path
                            d="M0,40 Q50,10 100,40 T200,40"
                            fill="none"
                            stroke="var(--primary-color, #4ecca3)"
                            strokeWidth="2"
                            opacity="0.8"
                        />
                        <path
                            d="M0,50 Q40,20 80,50 T160,50"
                            fill="none"
                            stroke="#9333ea"
                            strokeWidth="1.5"
                            opacity="0.6"
                        />
                    </svg>
                </div>

                {/* Decorative Light Shimmer */}
                <div 
                    className="absolute bottom-24 left-16 w-24 h-24 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--primary-color, #4ecca3) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-3xl">
                        <h1 
                            style={{ 
                                color: "var(--background-text, #d0e8e0)",
                                fontFamily: "var(--heading-font-family, Poppins)"
                            }} 
                            className="text-4xl font-semibold leading-tight mb-6"
                        >
                            {slideData?.title || 'Northern Innovations'}
                        </h1>
                        
                        {/* Aurora Divider */}
                        <div className="flex justify-start mb-6">
                            <div className="w-32 h-1 rounded-full" style={{ 
                                background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, #9333ea 100%)' 
                            }}></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #d0e8e0)",
                                fontFamily: "var(--body-font-family, Nunito Sans)"
                            }} 
                            className="text-lg font-normal leading-relaxed opacity-90"
                        >
                            {slideData?.description || 'Like the ethereal dance of the northern lights, breakthrough innovations emerge from the harmony between vision and execution in transformative moments.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-4 max-w-5xl">
                            {bulletPoints.map((bullet, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start gap-4 p-4 rounded-2xl backdrop-blur-sm"
                                    style={{
                                        border: '1px solid rgba(78,204,163,0.15)',
                                        background: 'rgba(78,204,163,0.06)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                                        style={{
                                            background: 'rgba(78,204,163,0.12)',
                                            border: '1px solid rgba(78,204,163,0.2)'
                                        }}
                                    >
                                        <img
                                            src={bullet.icon.__icon_url__}
                                            alt={bullet.icon.__icon_query__}
                                            className="w-6 h-6"
                                            style={{ 
                                                filter: "brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(473%) hue-rotate(112deg) brightness(94%) contrast(89%)"
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 
                                            style={{ 
                                                color: "var(--primary-color, #4ecca3)",
                                                fontFamily: "var(--heading-font-family, Poppins)"
                                            }} 
                                            className="text-xl font-medium mb-2 leading-tight"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #d0e8e0)",
                                                fontFamily: "var(--body-font-family, Nunito Sans)"
                                            }} 
                                            className="text-base font-normal leading-relaxed opacity-85"
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuroraBorealisBulletIconsSlideLayout