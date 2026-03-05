import React from 'react'
import * as z from "zod";

export const layoutId = 'copper-patina-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in copper patina style.'

const copperPatinaBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Foundational Principles').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Time-tested methodologies forged through experience, weathered by challenges, and refined through continuous improvement across industries.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("industrial gear")
        })
    })).min(2).max(4).default([
        {
            title: 'Structural Integrity',
            description: 'Building robust frameworks that withstand the test of time and operational pressures.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/building-bold.svg',
                __icon_query__: 'building structure'
            }
        },
        {
            title: 'Process Refinement',
            description: 'Continuous improvement through systematic analysis and methodical enhancement procedures.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/gear-bold.svg',
                __icon_query__: 'process gear'
            }
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous standards and testing protocols ensure consistent excellence in all deliverables.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-bold.svg',
                __icon_query__: 'quality shield'
            }
        },
        {
            title: 'Industrial Heritage',
            description: 'Drawing wisdom from traditional craftsmanship while embracing modern innovation.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/wrench-bold.svg',
                __icon_query__: 'heritage tools'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = copperPatinaBulletIconsSlideSchema

export type CopperPatinaBulletIconsSlideData = z.infer<typeof copperPatinaBulletIconsSlideSchema>

interface CopperPatinaBulletIconsSlideLayoutProps {
    data?: Partial<CopperPatinaBulletIconsSlideData>
}

const CopperPatinaBulletIconsSlideLayout: React.FC<CopperPatinaBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Abril Fatface)"
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
                                        color: 'var(--background-text, #f0e8d8)',
                                        fontFamily: "var(--body-font-family, Fira Sans)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Rivet Pattern */}
                <div className="absolute top-8 right-12 opacity-20">
                    <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full"
                                style={{ background: 'var(--primary-color, #b87333)' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Decorative Industrial Line */}
                <div className="absolute bottom-16 left-12 flex items-center gap-2 opacity-30">
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--primary-color, #b87333)' }}
                    />
                    <div
                        className="w-24 h-0.5"
                        style={{ background: 'var(--stroke, rgba(184, 115, 51, 0.25))' }}
                    />
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--primary-color, #b87333)' }}
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-4xl font-normal mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #f0e8d8)",
                                fontFamily: "var(--heading-font-family, Abril Fatface)"
                            }}
                        >
                            {slideData?.title || 'Foundational Principles'}
                        </h1>
                        
                        {/* Industrial Divider */}
                        <div className="flex items-center gap-2 mb-4">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ background: 'var(--primary-color, #b87333)' }}
                            />
                            <div
                                className="w-16 h-px"
                                style={{ background: 'var(--stroke, rgba(184, 115, 51, 0.25))' }}
                            />
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ background: 'var(--primary-color, #b87333)' }}
                            />
                        </div>

                        <p 
                            className="text-base leading-relaxed max-w-3xl font-normal"
                            style={{ 
                                color: "var(--background-text, #f0e8d8)",
                                fontFamily: "var(--body-font-family, Fira Sans)"
                            }}
                        >
                            {slideData?.description || 'Time-tested methodologies forged through experience, weathered by challenges, and refined through continuous improvement across industries.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 relative flex items-start gap-3"
                                style={{
                                    background: 'var(--card-color, rgba(255, 245, 230, 0.8))',
                                    border: '1px solid var(--stroke, rgba(184, 115, 51, 0.25))',
                                    borderRadius: '6px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}
                            >
                                {/* Corner Rivets */}
                                <div
                                    className="absolute top-2 left-2 w-1 h-1 rounded-full"
                                    style={{ background: 'var(--primary-color, #b87333)' }}
                                />
                                <div
                                    className="absolute top-2 right-2 w-1 h-1 rounded-full"
                                    style={{ background: 'var(--primary-color, #b87333)' }}
                                />

                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-6 h-6"
                                        style={{ filter: "sepia(1) saturate(2) hue-rotate(25deg) brightness(0.8)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-normal mb-1 leading-tight"
                                        style={{
                                            color: "var(--primary-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, Abril Fatface)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--primary-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, Fira Sans)"
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

export default CopperPatinaBulletIconsSlideLayout