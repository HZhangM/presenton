import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'retro-synthwave-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in retro synthwave style.'

const retroSynthwaveBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('NEON FUTURES').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Step into the electric realm of tomorrow where technology meets style in a symphony of neon lights and synthetic waves.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("cyberpunk tech")
        }),
    })).min(2).max(4).default([
        {
            title: 'Digital Revolution',
            description: 'Experience the power of cutting-edge technology that transforms reality into digital dreams.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'digital tech circuit'
            }
        },
        {
            title: 'Neon Networks',
            description: 'Connect through blazing fast neural pathways that pulse with electric energy and possibility.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'network connection'
            }
        },
        {
            title: 'Cyber Enhancement',
            description: 'Augment your capabilities with synthetic intelligence and chrome-plated efficiency systems.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'upgrade enhancement'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = retroSynthwaveBulletIconsSlideSchema

export type RetroSynthwaveBulletIconsSlideData = z.infer<typeof retroSynthwaveBulletIconsSlideSchema>

interface RetroSynthwaveBulletIconsSlideLayoutProps {
    data?: Partial<RetroSynthwaveBulletIconsSlideData>
}

const RetroSynthwaveBulletIconsSlideLayout: React.FC<RetroSynthwaveBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bungee)"
                }}
            >
                {/* Scan Lines Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--primary-color, #ff3366) 2px, var(--primary-color, #ff3366) 4px)",
                    opacity: 0.1
                }} />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 opacity-60" style={{ borderColor: "var(--primary-color, #ff3366)" }} />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 opacity-60" style={{ borderColor: "var(--primary-color, #ff3366)" }} />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 opacity-60" style={{ borderColor: "var(--primary-color, #ff3366)" }} />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 opacity-60" style={{ borderColor: "var(--primary-color, #ff3366)" }} />

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wider" 
                                        style={{ 
                                            color: 'var(--primary-text, #ffffff)',
                                            fontFamily: "var(--heading-font-family, Bungee)",
                                            textShadow: "0 0 10px var(--primary-color, #ff3366)"
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="h-full px-12 pt-20 pb-12 flex flex-col">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-6xl font-bold tracking-wider mb-4"
                            style={{ 
                                background: "linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 0 20px var(--primary-color, #ff3366)",
                                fontFamily: "var(--heading-font-family, Bungee)"
                            }}
                        >
                            {slideData?.title || 'NEON FUTURES'}
                        </h1>
                        
                        {/* Gradient Divider */}
                        <div 
                            className="h-1 w-32"
                            style={{
                                background: "linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)",
                                boxShadow: "0 0 10px var(--primary-color, #ff3366)"
                            }}
                        />
                    </div>

                    {/* Description */}
                    <p 
                        className="text-xl leading-relaxed mb-10 max-w-4xl font-medium"
                        style={{ 
                            color: "var(--background-text, #f0e0ff)",
                            fontFamily: "var(--body-font-family, Rajdhani)"
                        }}
                    >
                        {slideData?.description || 'Step into the electric realm of tomorrow where technology meets style in a symphony of neon lights and synthetic waves.'}
                    </p>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 relative group"
                                style={{
                                    border: "2px solid rgba(255,51,102,0.3)",
                                    background: "rgba(20,0,40,0.6)",
                                    backdropFilter: "blur(4px)"
                                }}
                            >
                                {/* Neon glow effect on hover */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        border: "2px solid var(--primary-color, #ff3366)",
                                        boxShadow: "0 0 20px var(--primary-color, #ff3366)"
                                    }}
                                />
                                
                                <div className="relative z-10 flex items-start space-x-4">
                                    {/* Icon Container */}
                                    <div 
                                        className="flex-shrink-0 w-16 h-16 flex items-center justify-center border-2"
                                        style={{ 
                                            borderColor: "var(--stroke, rgba(255,51,102,0.35))",
                                            background: "var(--card-color, rgba(255,51,102,0.1))"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-8 h-8"
                                            color="var(--primary-color, #ff3366)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-2xl font-bold mb-3 tracking-wide"
                                            style={{ 
                                                color: "var(--primary-text, #ffffff)",
                                                fontFamily: "var(--heading-font-family, Bungee)",
                                                textShadow: "0 0 10px var(--primary-color, #ff3366)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <div 
                                            className="h-0.5 w-16 mb-3"
                                            style={{
                                                background: "linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)"
                                            }}
                                        />
                                        <p 
                                            className="text-base leading-relaxed font-medium"
                                            style={{ 
                                                color: "var(--background-text, #f0e0ff)",
                                                fontFamily: "var(--body-font-family, Rajdhani)"
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
        </>
    )
}

export default RetroSynthwaveBulletIconsSlideLayout