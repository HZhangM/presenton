import React from 'react'
import * as z from "zod";

export const layoutId = 'coral-reef-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A vibrant coral reef themed slide with title, description, and bullet points each paired with an icon.'

const coralReefBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Ocean Wonders').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Dive into the vibrant ecosystem of coral reefs where colorful marine life thrives in perfect harmony beneath crystal clear waters.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("coral reef")
        })
    })).min(2).max(4).default([
        {
            title: 'Coral Gardens',
            description: 'Magnificent coral formations create underwater cities teeming with vibrant colors and life.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/flower-bold.svg',
                __icon_query__: 'coral flower'
            }
        },
        {
            title: 'Tropical Fish',
            description: 'Schools of colorful fish dance through the reef in mesmerizing patterns and formations.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/fish-bold.svg',
                __icon_query__: 'tropical fish'
            }
        },
        {
            title: 'Marine Ecosystem',
            description: 'A delicate balance where every creature plays a vital role in maintaining reef health.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/globe-bold.svg',
                __icon_query__: 'ecosystem balance'
            }
        },
        {
            title: 'Ocean Conservation',
            description: 'Protecting these underwater treasures ensures future generations can enjoy their beauty.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-bold.svg',
                __icon_query__: 'ocean protection'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = coralReefBulletIconsSlideSchema

export type CoralReefBulletIconsSlideData = z.infer<typeof coralReefBulletIconsSlideSchema>

interface CoralReefBulletIconsSlideLayoutProps {
    data?: Partial<CoralReefBulletIconsSlideData>
}

const CoralReefBulletIconsSlideLayout: React.FC<CoralReefBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Comfortaa)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-semibold" 
                                    style={{ 
                                        color: 'var(--background-text, #2d3436)',
                                        fontFamily: "var(--body-font-family, Rubik)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Coral Blob */}
                <div 
                    className="absolute top-16 right-12 w-24 h-24 opacity-20"
                    style={{
                        background: 'var(--primary-color, #ff6b6b)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    }}
                ></div>

                {/* Decorative Teal Blob */}
                <div 
                    className="absolute bottom-20 left-8 w-20 h-20 opacity-15"
                    style={{
                        background: '#00b894',
                        borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
                    }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-16 pb-8">
                    {/* Header Section */}
                    <div className="mb-4">
                        <h1 
                            className="text-3xl font-bold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #2d3436)",
                                fontFamily: "var(--heading-font-family, Comfortaa)"
                            }}
                        >
                            {slideData?.title || 'Ocean Wonders'}
                        </h1>
                        
                        {/* Wavy Divider */}
                        <svg width="80" height="8" className="mb-4">
                            <path
                                d="M0,4 Q20,0 40,4 T80,4"
                                fill="none"
                                stroke="var(--primary-color, #ff6b6b)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>

                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #2d3436)",
                                fontFamily: "var(--body-font-family, Rubik)"
                            }}
                        >
                            {slideData?.description || 'Dive into the vibrant ecosystem of coral reefs where colorful marine life thrives in perfect harmony beneath crystal clear waters.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4 mt-6">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-4"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    borderRadius: '24px',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                {/* Icon Container */}
                                <div 
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                                    style={{
                                        background: index % 2 === 0 ? 'var(--primary-color, #ff6b6b)' : '#00b894',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-6 h-6"
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-semibold mb-1 leading-tight"
                                        style={{
                                            color: "var(--background-text, #2d3436)",
                                            fontFamily: "var(--heading-font-family, Comfortaa)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{
                                            color: "var(--background-text, #2d3436)",
                                            fontFamily: "var(--body-font-family, Rubik)"
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

export default CoralReefBulletIconsSlideLayout