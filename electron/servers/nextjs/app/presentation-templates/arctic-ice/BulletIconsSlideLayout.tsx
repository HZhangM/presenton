import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'arctic-ice-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A clean bullet points slide with frosted glass cards and crystalline ice theme'

const arcticIceBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Insights').meta({
        description: "Main title of the slide",
    }),
    description: z.string().max(150).default('Discover the essential elements that drive success through our comprehensive analysis and strategic approach to modern challenges.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("analytics chart")
        }),
    })).min(2).max(4).default([
        {
            title: 'Strategic Analysis',
            description: 'Deep dive into market trends and competitive landscapes to identify key opportunities for growth.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'analytics chart'
            }
        },
        {
            title: 'Innovation Focus',
            description: 'Leveraging cutting-edge technology and creative solutions to stay ahead of industry changes.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'lightbulb idea'
            }
        },
        {
            title: 'Performance Metrics',
            description: 'Continuous monitoring and optimization based on data-driven insights and measurable outcomes.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'target goal'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = arcticIceBulletIconsSlideSchema

export type ArcticIceBulletIconsSlideData = z.infer<typeof arcticIceBulletIconsSlideSchema>

interface ArcticIceBulletIconsSlideLayoutProps {
    data?: Partial<ArcticIceBulletIconsSlideData>
}

const ArcticIceBulletIconsSlideLayout: React.FC<ArcticIceBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {/* Decorative Ice Crystals */}
                <div className="absolute top-16 right-20 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M60 10 L70 40 L100 30 L80 60 L110 70 L80 80 L100 110 L70 90 L60 120 L50 90 L20 110 L40 80 L10 70 L40 60 L20 30 L50 40 L60 10 Z" 
                              stroke="var(--primary-color, #0288d1)" strokeWidth="1" fill="none"/>
                        <path d="M60 30 L80 60 L60 90 L40 60 Z" 
                              stroke="var(--primary-color, #0288d1)" strokeWidth="0.5" fill="none"/>
                    </svg>
                </div>

                <div className="absolute bottom-20 left-16 opacity-8">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="30" stroke="var(--stroke, rgba(2, 136, 209, 0.15))" strokeWidth="1" fill="none"/>
                        <circle cx="40" cy="40" r="20" stroke="var(--stroke, rgba(2, 136, 209, 0.15))" strokeWidth="0.5" fill="none"/>
                        <circle cx="40" cy="40" r="10" stroke="var(--stroke, rgba(2, 136, 209, 0.15))" strokeWidth="0.5" fill="none"/>
                    </svg>
                </div>

                {/* Company Logo Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-base font-medium" style={{ color: 'var(--background-text, #1a3a50)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 
                            className="text-5xl font-light mb-6" 
                            style={{ color: "var(--background-text, #1a3a50)" }}
                        >
                            {slideData?.title || 'Key Insights'}
                        </h1>
                        
                        {/* Thin divider line */}
                        <div 
                            className="w-24 h-px mb-6"
                            style={{ background: "var(--primary-color, #0288d1)" }}
                        ></div>
                        
                        <p 
                            className="text-lg font-light leading-relaxed max-w-3xl" 
                            style={{ color: "var(--background-text, #1a3a50)" }}
                        >
                            {slideData?.description || 'Discover the essential elements that drive success through our comprehensive analysis and strategic approach to modern challenges.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-2xl border flex items-start gap-4"
                                style={{
                                    background: "rgba(255, 255, 255, 0.65)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255, 255, 255, 0.5)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                                    style={{
                                        background: "var(--primary-color, #0288d1)",
                                        boxShadow: "0 4px 16px rgba(2, 136, 209, 0.2)"
                                    }}
                                >
                                    <RemoteSvgIcon
                                        url={bullet.icon.__icon_url__}
                                        strokeColor="currentColor"
                                        className="w-6 h-6"
                                        color="var(--primary-text, #ffffff)"
                                        title={bullet.icon.__icon_query__}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-medium mb-1"
                                        style={{ color: "var(--background-text, #1a3a50)" }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-base font-light leading-relaxed"
                                        style={{ color: "var(--background-text, #1a3a50)", opacity: 0.8 }}
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

export default ArcticIceBulletIconsSlideLayout