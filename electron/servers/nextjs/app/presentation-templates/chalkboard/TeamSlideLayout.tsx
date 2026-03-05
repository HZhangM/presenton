import React from 'react'
import * as z from "zod";

export const layoutId = 'chalkboard-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A chalkboard-themed grid layout showcasing team members with names, roles, and photos in a hand-drawn style.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Doe').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Designer').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot photo")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Johnson',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Mike Chen',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman developer headshot'
            }
        },
        {
            name: 'Emma Davis',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman UX designer headshot'
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

const ChalkboardTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2 gap-4'
        } else if (count === 3) {
            return 'grid-cols-3 gap-4'
        } else {
            return 'grid-cols-4 gap-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {/* Company Logo/Name Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 opacity-80" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-xl font-bold" style={{ 
                                        color: 'var(--background-text, #e8e8d0)', 
                                        fontFamily: 'var(--heading-font-family, Caveat)' 
                                    }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Chalk Dust Decorations */}
                <div className="absolute top-16 right-32 opacity-30">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                    <div className="w-1 h-1 rounded-full mt-2 ml-4" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full mt-1 ml-2" style={{ background: 'var(--background-text, #e8e8d0)' }}></div>
                </div>

                {/* Chalk Star Decoration */}
                <div className="absolute bottom-20 left-20 opacity-25">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" 
                              fill="var(--background-text, #e8e8d0)" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-14 pb-10">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-bold mb-4" 
                            style={{ 
                                color: "var(--background-text, #e8e8d0)",
                                fontFamily: "var(--heading-font-family, Caveat)"
                            }}
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        {/* Hand-drawn underline */}
                        <div 
                            className="w-48 h-1 mx-auto opacity-60"
                            style={{
                                background: "var(--primary-color, #f2c94c)",
                                borderRadius: "50%",
                                transform: "rotate(-1deg)"
                            }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center space-y-2">
                                    {/* Member Photo Card */}
                                    <div
                                        className="w-28 h-28 mx-auto p-2 relative"
                                        style={{
                                            border: "1px dashed rgba(255,255,255,0.2)",
                                            background: "rgba(255,255,255,0.05)",
                                            borderRadius: "4px"
                                        }}
                                    >
                                        <div className="w-full h-full rounded-sm overflow-hidden">
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="space-y-1">
                                        <h3
                                            className="text-base font-bold" 
                                            style={{ 
                                                color: "var(--background-text, #e8e8d0)",
                                                fontFamily: "var(--heading-font-family, Caveat)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <div className="relative">
                                            <p
                                                className="text-sm font-normal" 
                                                style={{ 
                                                    color: "var(--primary-color, #f2c94c)",
                                                    fontFamily: "var(--body-font-family, Patrick Hand)"
                                                }}
                                            >
                                                {member.role}
                                            </p>
                                            {/* Wavy underline */}
                                            <div 
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 opacity-50"
                                                style={{
                                                    background: "var(--primary-color, #f2c94c)",
                                                    borderRadius: "50%"
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Dashed Divider */}
                    <div 
                        className="absolute bottom-8 left-20 right-20 h-0.5 opacity-20"
                        style={{
                            borderTop: "2px dashed rgba(255,255,255,0.3)"
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default ChalkboardTeamSlide