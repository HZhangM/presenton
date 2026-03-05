import React from 'react'
import * as z from "zod";

export const layoutId = 'linen-clean-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in linen clean style.'

const linenCleanBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Essential Guidelines').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Creating meaningful experiences through thoughtful design and authentic connections that resonate with your audience and build lasting relationships.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("heart warm")
        })
    })).min(2).max(4).default([
        {
            title: 'Authentic Connection',
            description: 'Build genuine relationships through honest communication and meaningful interactions.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'heart connection'
            }
        },
        {
            title: 'Thoughtful Design',
            description: 'Every element serves a purpose, creating harmony between form and function.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/palette-bold.svg',
                __icon_query__: 'design palette'
            }
        },
        {
            title: 'Natural Growth',
            description: 'Sustainable progress through organic development and patient cultivation.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/leaf-bold.svg',
                __icon_query__: 'leaf growth'
            }
        },
        {
            title: 'Warm Community',
            description: 'Foster inclusive environments where everyone feels welcomed and valued.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/users-bold.svg',
                __icon_query__: 'community people'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = linenCleanBulletIconsSlideSchema

export type LinenCleanBulletIconsSlideData = z.infer<typeof linenCleanBulletIconsSlideSchema>

interface LinenCleanBulletIconsSlideLayoutProps {
    data?: Partial<LinenCleanBulletIconsSlideData>
}

const LinenCleanBulletIconsSlideLayout: React.FC<LinenCleanBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Text)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3530)',
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative circle markers */}
                <div className="absolute top-20 right-20 flex gap-2 opacity-20">
                    <div 
                        className="w-3 h-3 rounded-full"
                        style={{ background: 'var(--primary-color, #8c7851)' }}
                    ></div>
                    <div 
                        className="w-2 h-2 rounded-full mt-0.5"
                        style={{ background: 'var(--primary-color, #8c7851)' }}
                    ></div>
                    <div 
                        className="w-1 h-1 rounded-full mt-1"
                        style={{ background: 'var(--primary-color, #8c7851)' }}
                    ></div>
                </div>

                {/* Decorative warm line */}
                <div 
                    className="absolute bottom-24 left-16 w-24 h-px opacity-30"
                    style={{ background: 'var(--stroke, rgba(140, 120, 81, 0.15))' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-16 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-3xl font-normal mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--heading-font-family, DM Serif Text)"
                            }}
                        >
                            {slideData?.title || 'Essential Guidelines'}
                        </h1>
                        
                        <div 
                            className="w-16 h-px mb-4"
                            style={{ background: 'var(--stroke, rgba(140, 120, 81, 0.15))' }}
                        ></div>

                        <p 
                            className="text-base leading-relaxed font-normal max-w-3xl"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}
                        >
                            {slideData?.description || 'Creating meaningful experiences through thoughtful design and authentic connections that resonate with your audience and build lasting relationships.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.75)',
                                    border: '1px solid rgba(140,120,81,0.08)',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ background: 'var(--primary-color, #8c7851)' }}>
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
                                        className="text-lg font-normal mb-1 leading-snug"
                                        style={{
                                            color: "var(--background-text, #3a3530)",
                                            fontFamily: "var(--heading-font-family, DM Serif Text)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #3a3530)",
                                            fontFamily: "var(--body-font-family, DM Sans)"
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

export default LinenCleanBulletIconsSlideLayout