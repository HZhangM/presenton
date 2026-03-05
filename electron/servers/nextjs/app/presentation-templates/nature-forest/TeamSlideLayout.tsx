import React from 'react'
import * as z from "zod";

export const layoutId = 'nature-forest-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in a natural forest theme.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Johnson').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Senior Developer').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Johnson',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional woman designer headshot'
            }
        },
        {
            name: 'Michael Chen',
            role: 'Senior Developer',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional man developer headshot'
            }
        },
        {
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional woman manager headshot'
            }
        },
        {
            name: 'David Thompson',
            role: 'UX Researcher',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional man researcher headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
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
            return 'grid-cols-2 gap-8'
        } else {
            return 'grid-cols-2 gap-6'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bitter)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8efe0)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-12 right-8 w-32 h-32 opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 120 120" fill="none">
                        <path d="M60 10C50 15 45 25 50 35C55 45 65 50 75 45C85 40 90 30 85 20C80 10 70 5 60 10Z" fill="var(--primary-color, #7cb342)" opacity="0.6" />
                        <path d="M40 25C35 30 38 40 45 42C52 44 58 38 56 31C54 24 47 20 40 25Z" fill="var(--primary-color, #7cb342)" opacity="0.4" />
                        <path d="M80 60C85 65 82 75 75 77C68 79 62 73 64 66C66 59 73 55 80 60Z" fill="var(--primary-color, #7cb342)" opacity="0.5" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-2 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1280 20" fill="none" preserveAspectRatio="none">
                        <path d="M0 10C320 5 640 15 960 8C1120 5 1200 12 1280 10V20H0V10Z" fill="var(--stroke, rgba(124, 179, 66, 0.25))" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-12 pb-8">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 style={{ color: "var(--background-text, #e8efe0)" }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        <div style={{ background: "var(--primary-color, #7cb342)" }} className="w-24 h-1 mx-auto rounded-full opacity-80"></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center space-y-4">
                                    {/* Member Card */}
                                    <div 
                                        className="p-6 rounded-xl mx-auto max-w-xs"
                                        style={{ 
                                            border: "1px solid rgba(124,179,66,0.15)", 
                                            background: "rgba(255,255,255,0.08)", 
                                            borderRadius: "12px" 
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2" style={{ borderColor: "var(--stroke, rgba(124, 179, 66, 0.25))" }}>
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <div>
                                            <h3 style={{ color: "var(--background-text, #e8efe0)", fontFamily: "var(--heading-font-family, Bitter)" }} className="text-xl font-bold mb-2">
                                                {member.name}
                                            </h3>
                                            <p style={{ color: "var(--primary-color, #7cb342)", fontFamily: "var(--body-font-family, Source Sans 3)" }} className="text-sm font-medium">
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