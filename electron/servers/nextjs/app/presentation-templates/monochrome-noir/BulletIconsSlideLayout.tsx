import React from 'react'
import * as z from "zod";

export const layoutId = 'monochrome-noir-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A monochrome noir slide with title, description, and bullet points each paired with an icon.'

const monochromeNoirBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('CRITICAL OBJECTIVES').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Strategic imperatives demand unwavering focus and absolute precision in execution to achieve breakthrough results.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("target goal")
        })
    })).min(2).max(4).default([
        {
            title: 'STRATEGIC FOCUS',
            description: 'Eliminate distractions and concentrate all resources on mission-critical objectives.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/target-bold.svg',
                __icon_query__: 'target focus'
            }
        },
        {
            title: 'TACTICAL EXECUTION',
            description: 'Deploy proven methodologies with military precision to ensure flawless delivery.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/chess-bold.svg',
                __icon_query__: 'strategy chess'
            }
        },
        {
            title: 'MEASURABLE IMPACT',
            description: 'Establish clear metrics and benchmarks to track progress and validate success.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/chart-line-bold.svg',
                __icon_query__: 'metrics chart'
            }
        },
        {
            title: 'DECISIVE ACTION',
            description: 'Make bold decisions swiftly and commit fully to the chosen course of action.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightning-bold.svg',
                __icon_query__: 'action lightning'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = monochromeNoirBulletIconsSlideSchema

export type MonochromeNoirBulletIconsSlideData = z.infer<typeof monochromeNoirBulletIconsSlideSchema>

interface MonochromeNoirBulletIconsSlideLayoutProps {
    data?: Partial<MonochromeNoirBulletIconsSlideData>
}

const MonochromeNoirBulletIconsSlideLayout: React.FC<MonochromeNoirBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Space Grotesk)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold" 
                                    style={{ 
                                        color: 'var(--background-text, #000000)',
                                        fontFamily: "var(--heading-font-family, Space Grotesk)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                        <div 
                            className="mt-4"
                            style={{ 
                                height: '3px',
                                background: 'var(--background-text, #000000)'
                            }}
                        ></div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-16 w-24 h-24 opacity-20"
                    style={{ 
                        background: 'var(--background-text, #000000)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-16 left-16 w-32 h-1"
                    style={{ background: 'var(--background-text, #000000)' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-16 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-4xl font-bold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #000000)",
                                fontFamily: "var(--heading-font-family, Space Grotesk)"
                            }}
                        >
                            {slideData?.title || 'CRITICAL OBJECTIVES'}
                        </h1>
                        <div 
                            className="w-full mb-4"
                            style={{ 
                                height: '3px',
                                background: 'var(--background-text, #000000)'
                            }}
                        ></div>
                        <p 
                            className="text-lg leading-tight max-w-4xl font-medium"
                            style={{ 
                                color: "var(--background-text, #000000)",
                                fontFamily: "var(--body-font-family, Space Grotesk)"
                            }}
                        >
                            {slideData?.description || 'Strategic imperatives demand unwavering focus and absolute precision in execution to achieve breakthrough results.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 space-y-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-4 relative"
                                style={{
                                    border: '2px solid var(--background-text, #000000)',
                                    background: '#ffffff',
                                    borderRadius: 0
                                }}
                            >
                                {/* Number Label */}
                                <div
                                    className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-lg font-bold"
                                    style={{
                                        background: 'var(--background-text, #000000)',
                                        color: '#ffffff',
                                        fontFamily: "var(--heading-font-family, Space Grotesk)"
                                    }}
                                >
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: "brightness(0)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-bold mb-2 leading-tight"
                                        style={{
                                            color: "var(--background-text, #000000)",
                                            fontFamily: "var(--heading-font-family, Space Grotesk)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-base leading-relaxed font-medium"
                                        style={{
                                            color: "var(--background-text, #000000)",
                                            fontFamily: "var(--body-font-family, Space Grotesk)"
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

export default MonochromeNoirBulletIconsSlideLayout