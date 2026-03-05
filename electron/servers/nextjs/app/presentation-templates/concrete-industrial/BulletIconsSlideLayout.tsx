import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'concrete-industrial-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in concrete industrial theme.'

const bulletPointsWithIconsSchema = z.object({
    title: z.string().min(3).max(40).default('SAFETY PROTOCOLS').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Essential safety measures and protocols for industrial operations to ensure worker protection and regulatory compliance.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(5).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(15).max(100).meta({
            description: "Bullet point description",
        }),
        icon: z.object({
            __icon_url__: z.string().default(""),
            __icon_query__: z.string().min(5).max(20).default("safety helmet")
        })
    })).min(2).max(4).default([
        {
            title: 'PERSONAL PROTECTIVE EQUIPMENT',
            description: 'Hard hats, safety goggles, and steel-toed boots are mandatory for all personnel on the work site.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'safety helmet'
            }
        },
        {
            title: 'HAZARDOUS MATERIAL HANDLING',
            description: 'Proper storage, labeling, and disposal procedures for all chemicals and hazardous substances.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/fediverse-logo-bold.svg',
                __icon_query__: 'warning sign'
            }
        },
        {
            title: 'EMERGENCY PROCEDURES',
            description: 'Clear evacuation routes and emergency response protocols must be established and practiced.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'emergency exit'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = bulletPointsWithIconsSchema

export type BulletPointsWithIconsData = z.infer<typeof bulletPointsWithIconsSchema>

interface BulletPointsWithIconsLayoutProps {
    data?: Partial<BulletPointsWithIconsData>
}

const BulletPointsWithIconsLayout: React.FC<BulletPointsWithIconsLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bebas Neue)"
                }}
            >
                {/* Decorative hazard stripes */}
                <div className="absolute top-0 right-0 w-32 h-full opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 128 720">
                        <defs>
                            <pattern id="hazard" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="10" height="20" fill="#ff6d00"/>
                                <rect x="10" y="0" width="10" height="20" fill="transparent"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hazard)" transform="rotate(45)"/>
                    </svg>
                </div>

                {/* Industrial grid overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5">
                    <svg width="100%" height="100%" viewBox="0 0 1280 360">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)"/>
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold tracking-wide uppercase" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: "var(--heading-font-family, Bebas Neue)" }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="mb-8">
                        <div 
                            className="w-16 h-1 mb-4"
                            style={{ background: "var(--primary-color, #ff6d00)" }}
                        ></div>
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Bebas Neue)"
                            }}
                        >
                            {slideData?.title || 'SAFETY PROTOCOLS'}
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <p 
                            className="text-xl leading-relaxed max-w-4xl font-medium"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, Roboto Condensed)"
                            }}
                        >
                            {slideData?.description || 'Essential safety measures and protocols for industrial operations to ensure worker protection and regulatory compliance.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {bulletPoints.map((bullet, index) => (
                                <div 
                                    key={index}
                                    className="p-6 relative"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.85))",
                                        borderLeft: "4px solid var(--primary-color, #ff6d00)",
                                        boxShadow: "2px 2px 0 rgba(0,0,0,0.1)"
                                    }}
                                >
                                    {/* Stencil number */}
                                    <div 
                                        className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-sm font-black"
                                        style={{ 
                                            background: "var(--primary-color, #ff6d00)",
                                            color: "var(--primary-text, #ffffff)",
                                            fontFamily: "var(--heading-font-family, Bebas Neue)"
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        {/* Icon */}
                                        <div 
                                            className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                                            style={{ 
                                                background: "var(--primary-color, #ff6d00)",
                                                boxShadow: "2px 2px 0 rgba(0,0,0,0.2)"
                                            }}
                                        >
                                            <RemoteSvgIcon
                                                url={bullet.icon?.__icon_url__}
                                                strokeColor={"currentColor"}
                                                className="w-8 h-8"
                                                color="var(--primary-text, #ffffff)"
                                                title={bullet.icon?.__icon_query__}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="mb-2">
                                                <span 
                                                    className="text-xs font-bold tracking-wider uppercase opacity-70"
                                                    style={{ 
                                                        color: "var(--background-text, #1a1a1a)",
                                                        fontFamily: "var(--body-font-family, Roboto Condensed)"
                                                    }}
                                                >
                                                    PROTOCOL
                                                </span>
                                            </div>
                                            <h3 
                                                className="text-xl font-black tracking-tight uppercase leading-tight mb-3"
                                                style={{ 
                                                    color: "var(--background-text, #1a1a1a)",
                                                    fontFamily: "var(--heading-font-family, Bebas Neue)"
                                                }}
                                            >
                                                {bullet.title}
                                            </h3>
                                            <p 
                                                className="text-base leading-relaxed font-medium"
                                                style={{ 
                                                    color: "var(--background-text, #1a1a1a)",
                                                    fontFamily: "var(--body-font-family, Roboto Condensed)"
                                                }}
                                            >
                                                {bullet.description}
                                            </p>
                                        </div>
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

export default BulletPointsWithIconsLayout