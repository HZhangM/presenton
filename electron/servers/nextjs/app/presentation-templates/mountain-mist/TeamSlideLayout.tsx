import React from 'react'
import * as z from "zod";

export const layoutId = 'mountain-mist-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A serene team showcase with misty mountain aesthetics and glass-morphism cards'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Alex Rivera').meta({
        description: "Team member's name"
    }),
    role: z.string().min(2).max(40).default('Lead Designer').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member portrait")
    }).meta({
        description: "Team member photo"
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman creative director'
            }
        },
        {
            name: 'Marcus Thompson',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man lead developer'
            }
        },
        {
            name: 'Aria Nakamura',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman UX designer'
            }
        }
    ]).meta({
        description: "Team members information",
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
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-2 lg:grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Philosopher)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a2a3a)', fontFamily: "var(--body-font-family, Karla)" }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Misty Mountain Layers */}
                <div className="absolute top-0 right-0 w-96 h-48 opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                        <path d="M0 120C80 100 160 140 240 120C280 110 320 120 400 110V200H0V120Z" fill="var(--primary-color, #546e7a)" opacity="0.3" />
                        <path d="M0 140C100 130 200 150 300 140C350 135 400 140 400 140V200H0V140Z" fill="var(--primary-color, #546e7a)" opacity="0.2" />
                        <path d="M0 160C120 155 240 165 360 160C380 159 400 160 400 160V200H0V160Z" fill="var(--primary-color, #546e7a)" opacity="0.1" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-80 h-32 opacity-15 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 320 130" fill="none">
                        <path d="M0 65C60 80 120 50 180 65C220 75 260 60 320 70V130H0V65Z" fill="var(--primary-color, #546e7a)" opacity="0.25" />
                        <path d="M0 85C80 90 160 80 240 85C280 87.5 320 85 320 85V130H0V85Z" fill="var(--primary-color, #546e7a)" opacity="0.15" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-12 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-6" style={{ color: "var(--background-text, #1a2a3a)" }}>
                            {slideData?.title || 'Our Team'}
                        </h1>
                        
                        {/* Mist Divider */}
                        <div className="flex justify-center mb-6">
                            <div 
                                className="h-px w-32 opacity-40"
                                style={{ 
                                    background: `linear-gradient(to right, transparent, var(--stroke, rgba(84, 110, 122, 0.15)), transparent)` 
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-5"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.55))",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(255, 255, 255, 0.4)",
                                        borderRadius: "12px"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-white/30">
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <h3 
                                        className="text-xl font-bold mb-1" 
                                        style={{ color: "var(--background-text, #1a2a3a)" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p 
                                        className="text-sm font-medium opacity-75"
                                        style={{ 
                                            color: "var(--primary-color, #546e7a)",
                                            fontFamily: "var(--body-font-family, Karla)"
                                        }}
                                    >
                                        {member.role}
                                    </p>
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