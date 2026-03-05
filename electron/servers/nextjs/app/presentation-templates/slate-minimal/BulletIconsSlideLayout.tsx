import React from 'react'
import * as z from "zod";

export const layoutId = 'slate-minimal-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slate minimal slide with title, description, and bullet points each paired with an icon.'

const slateMinimalBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Technical Excellence').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Precision-driven methodologies and systematic approaches that deliver reliable, scalable solutions for modern engineering challenges.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("technical gear")
        })
    })).min(2).max(4).default([
        {
            title: 'System Architecture',
            description: 'Robust, scalable infrastructure designed for optimal performance and maintainability.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/cpu-bold.svg',
                __icon_query__: 'system architecture'
            }
        },
        {
            title: 'Code Quality',
            description: 'Clean, well-documented codebase following industry best practices and standards.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/code-bold.svg',
                __icon_query__: 'code quality'
            }
        },
        {
            title: 'Performance Optimization',
            description: 'Systematic optimization processes ensuring maximum efficiency and resource utilization.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/gauge-bold.svg',
                __icon_query__: 'performance gauge'
            }
        },
        {
            title: 'Security Standards',
            description: 'Comprehensive security protocols protecting data integrity and system reliability.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-bold.svg',
                __icon_query__: 'security shield'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = slateMinimalBulletIconsSlideSchema

export type SlateMinimalBulletIconsSlideData = z.infer<typeof slateMinimalBulletIconsSlideSchema>

interface SlateMinimalBulletIconsSlideLayoutProps {
    data?: Partial<SlateMinimalBulletIconsSlideData>
}

const SlateMinimalBulletIconsSlideLayout: React.FC<SlateMinimalBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #1e293b)',
                                        fontFamily: "var(--body-font-family, Inter)"
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
                    className="absolute top-16 right-12 w-2 h-2 rounded-full opacity-60"
                    style={{ background: 'var(--primary-color, #3b82f6)' }}
                ></div>
                
                <div 
                    className="absolute bottom-20 left-0 w-16 h-px opacity-30"
                    style={{ background: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-3xl font-semibold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #1e293b)",
                                fontFamily: "var(--heading-font-family, Inter)"
                            }}
                        >
                            {slideData?.title || 'Technical Excellence'}
                        </h1>
                        <p 
                            className="text-base leading-relaxed max-w-3xl font-normal"
                            style={{ 
                                color: "var(--background-text, #1e293b)",
                                fontFamily: "var(--body-font-family, Inter)"
                            }}
                        >
                            {slideData?.description || 'Precision-driven methodologies and systematic approaches that deliver reliable, scalable solutions for modern engineering challenges.'}
                        </p>
                    </div>

                    {/* Divider */}
                    <div 
                        className="h-px w-full mb-6 opacity-20"
                        style={{ background: 'var(--background-text, #1e293b)' }}
                    ></div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-4"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '8px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: "brightness(0) saturate(100%) invert(42%) sepia(81%) saturate(2851%) hue-rotate(213deg) brightness(99%) contrast(91%)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div 
                                        className="w-8 h-0.5 mb-2"
                                        style={{ background: 'var(--primary-color, #3b82f6)' }}
                                    ></div>
                                    <h3
                                        className="text-lg font-medium mb-1 leading-tight"
                                        style={{
                                            color: "var(--background-text, #1e293b)",
                                            fontFamily: "var(--heading-font-family, Inter)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #1e293b)",
                                            fontFamily: "var(--body-font-family, Inter)"
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

export default SlateMinimalBulletIconsSlideLayout