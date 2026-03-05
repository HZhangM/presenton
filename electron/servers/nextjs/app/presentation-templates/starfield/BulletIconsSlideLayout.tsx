import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'starfield-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in a cosmic starfield theme.'

const starfieldBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Cosmic Vision').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Explore the infinite possibilities of space technology and innovation that will shape our future beyond Earth.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("space rocket")
        }),
    })).min(2).max(4).default([
        {
            title: 'Deep Space Exploration',
            description: 'Advanced propulsion systems and AI-guided spacecraft will unlock the mysteries of distant galaxies.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'rocket space'
            }
        },
        {
            title: 'Quantum Communications',
            description: 'Instantaneous data transmission across vast cosmic distances through quantum entanglement.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'signal network'
            }
        },
        {
            title: 'Stellar Energy Harvest',
            description: 'Harnessing the power of stars to fuel interplanetary civilizations and sustainable growth.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'star energy'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = starfieldBulletIconsSlideSchema

export type StarfieldBulletIconsSlideData = z.infer<typeof starfieldBulletIconsSlideSchema>

interface StarfieldBulletIconsSlideLayoutProps {
    data?: Partial<StarfieldBulletIconsSlideData>
}

const StarfieldBulletIconsSlideLayout: React.FC<StarfieldBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Exo 2)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--primary-text, #ffffff)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Star Elements */}
                <div className="absolute top-16 left-20 opacity-30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-color, #7c4dff)">
                        <path d="M12 2l3.09 6.26L22 11l-6.91 2.74L12 22l-3.09-6.26L2 11l6.91-2.74L12 2z" />
                    </svg>
                </div>
                <div className="absolute top-32 right-24 opacity-20">
                    <div 
                        style={{ 
                            background: "var(--primary-color, #7c4dff)",
                            boxShadow: "0 0 20px rgba(124, 77, 255, 0.4)"
                        }}
                        className="w-2 h-2 rounded-full"
                    ></div>
                </div>
                <div className="absolute bottom-40 left-16 opacity-25">
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="var(--primary-color, #7c4dff)" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Header Section */}
                    <div className="mb-12 text-center">
                        <h1 
                            style={{ 
                                color: "var(--primary-text, #ffffff)",
                                textShadow: "0 0 30px rgba(124, 77, 255, 0.5)"
                            }} 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            {slideData?.title || 'Cosmic Vision'}
                        </h1>
                        <div 
                            style={{ 
                                background: "linear-gradient(90deg, transparent 0%, var(--primary-color, #7c4dff) 50%, transparent 100%)",
                                height: "2px"
                            }}
                            className="w-32 mx-auto mb-6"
                        ></div>
                        <p 
                            style={{ color: "var(--background-text, #d0d0f0)" }} 
                            className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
                        >
                            {slideData?.description || 'Explore the infinite possibilities of space technology and innovation that will shape our future beyond Earth.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                            {bulletPoints.map((bullet, index) => (
                                <div 
                                    key={index} 
                                    style={{
                                        border: "1px solid rgba(124,77,255,0.15)",
                                        background: "rgba(124,77,255,0.06)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                    className="rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        {/* Icon */}
                                        <div 
                                            style={{ 
                                                background: "var(--primary-color, #7c4dff)",
                                                boxShadow: "0 0 20px rgba(124, 77, 255, 0.3)"
                                            }} 
                                            className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                                        >
                                            <RemoteSvgIcon
                                                url={bullet.icon.__icon_url__}
                                                strokeColor={"currentColor"}
                                                className="w-7 h-7"
                                                color="var(--primary-text, #ffffff)"
                                                title={bullet.icon.__icon_query__}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 
                                                style={{ 
                                                    color: "var(--primary-text, #ffffff)",
                                                    textShadow: "0 0 10px rgba(124, 77, 255, 0.3)"
                                                }} 
                                                className="text-xl font-semibold mb-3"
                                            >
                                                {bullet.title}
                                            </h3>
                                            <p 
                                                style={{ color: "var(--background-text, #d0d0f0)" }} 
                                                className="text-base leading-relaxed opacity-90"
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

                {/* Subtle Light Flare */}
                <div 
                    style={{
                        background: "radial-gradient(circle, rgba(124, 77, 255, 0.1) 0%, transparent 70%)"
                    }}
                    className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                ></div>
            </div>
        </>
    )
}

export default StarfieldBulletIconsSlideLayout