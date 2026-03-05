import React from 'react'
import * as z from "zod";

export const layoutId = 'retro-synthwave-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A retro synthwave themed slide showcasing team members with neon aesthetics and 80s style'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Nova Cipher'),
    role: z.string().min(2).max(40).default('Lead Developer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("cyberpunk professional headshot neon lighting")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Cyber Crew').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Nova Cipher',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'cyberpunk professional headshot neon lighting'
            }
        },
        {
            name: 'Vector Storm',
            role: 'System Architect',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'retro futuristic tech professional portrait'
            }
        },
        {
            name: 'Pixel Phoenix',
            role: 'UI Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: '80s style professional woman portrait neon'
            }
        },
        {
            name: 'Data Lynx',
            role: 'Security Specialist',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'cyberpunk security expert professional photo'
            }
        }
    ]).meta({
        description: "List of team members",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const TeamSlideLayout: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else if (count === 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-4'
        }
    }

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
                {/* Scan Lines Decoration */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--primary-color, #ff3366) 2px, var(--primary-color, #ff3366) 4px)',
                        opacity: 0.1
                    }}></div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="w-full h-full border-l-2 border-t-2" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="w-full h-full border-r-2 border-t-2" style={{ borderColor: 'var(--stroke, rgba(255, 51, 102, 0.35))' }}></div>
                </div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-bold tracking-wide" 
                                        style={{ 
                                            color: 'var(--primary-text, #ffffff)',
                                            fontFamily: 'var(--heading-font-family, Bungee)'
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
                <div className="relative z-10 flex flex-col h-full px-16 pt-14 pb-10">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-6xl font-bold tracking-wider mb-4"
                            style={{ 
                                color: 'var(--background-text, #f0e0ff)',
                                fontFamily: 'var(--heading-font-family, Bungee)',
                                background: 'linear-gradient(90deg, #ff3366, #00ffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {slideData?.title || 'Our Cyber Crew'}
                        </h1>
                        <div 
                            className="w-32 h-1 mx-auto"
                            style={{ 
                                background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)'
                            }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-4 max-w-5xl w-full`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center">
                                    {/* Member Card */}
                                    <div 
                                        className="relative p-4"
                                        style={{
                                            border: '2px solid rgba(255,51,102,0.3)',
                                            background: 'rgba(20,0,40,0.6)',
                                            backdropFilter: 'blur(4px)'
                                        }}
                                    >
                                        {/* Photo Container */}
                                        <div className="relative mb-4">
                                            <div
                                                className="w-20 h-20 mx-auto overflow-hidden"
                                                style={{ 
                                                    border: '2px solid rgba(255,51,102,0.4)',
                                                    background: 'var(--card-color, rgba(255, 51, 102, 0.1))'
                                                }}
                                            >
                                                <img
                                                    src={member.image.__image_url__ || ''}
                                                    alt={member.image.__image_prompt__ || member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Corner accents on photo */}
                                            <div className="absolute -top-1 -left-1 w-4 h-4" style={{ borderLeft: '2px solid var(--primary-color, #ff3366)', borderTop: '2px solid var(--primary-color, #ff3366)' }}></div>
                                            <div className="absolute -top-1 -right-1 w-4 h-4" style={{ borderRight: '2px solid var(--primary-color, #ff3366)', borderTop: '2px solid var(--primary-color, #ff3366)' }}></div>
                                        </div>

                                        {/* Member Info */}
                                        <div>
                                            <h3
                                                className="text-base font-bold mb-1 tracking-wide"
                                                style={{ 
                                                    color: 'var(--primary-text, #ffffff)',
                                                    fontFamily: 'var(--heading-font-family, Bungee)'
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            <div 
                                                className="w-16 h-0.5 mx-auto mb-3"
                                                style={{ background: 'var(--primary-color, #ff3366)' }}
                                            ></div>
                                            <p
                                                className="text-sm font-semibold tracking-wider"
                                                style={{ 
                                                    color: 'var(--background-text, #f0e0ff)',
                                                    fontFamily: 'var(--body-font-family, Rajdhani)'
                                                }}
                                            >
                                                {member.role}
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

export default TeamSlideLayout