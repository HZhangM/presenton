import React from 'react'
import * as z from "zod";

export const layoutId = 'marble-classic-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in elegant marble-themed design.'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Elena Rodriguez').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Chief Executive Officer').meta({
        description: "Job title or position"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional business executive headshot")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Distinguished Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Elena Rodriguez',
            role: 'Chief Executive Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman CEO headshot'
            }
        },
        {
            name: 'Marcus Chen',
            role: 'Chief Technology Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman CTO headshot'
            }
        },
        {
            name: 'Sophia Laurent',
            role: 'Chief Operating Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman COO headshot'
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
            return 'grid-cols-2 gap-6'
        } else if (count === 3) {
            return 'grid-cols-3 gap-4'
        } else {
            return 'grid-cols-4 gap-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-base font-medium tracking-wide" 
                                        style={{ 
                                            color: 'var(--background-text, #2a2a2a)',
                                            fontFamily: 'var(--body-font-family, Montserrat)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Ornament */}
                <div className="absolute top-8 right-12 opacity-10">
                    <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-12 py-16 flex flex-col">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 
                            className="text-4xl font-semibold mb-6"
                            style={{ 
                                color: "var(--background-text, #2a2a2a)",
                                letterSpacing: '0.02em'
                            }}
                        >
                            {slideData?.title || 'Our Distinguished Team'}
                        </h1>
                        
                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center">
                            <div 
                                className="flex-1 max-w-20 h-px"
                                style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            ></div>
                            <div 
                                className="mx-4 w-2 h-2 rotate-45 border"
                                style={{ borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            ></div>
                            <div 
                                className="flex-1 max-w-20 h-px"
                                style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-5 rounded"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                                        border: "1px solid var(--stroke, rgba(0, 0, 0, 0.06))",
                                        boxShadow: "0 2px 16px rgba(0,0,0,0.04)"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border" style={{ borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 
                                            className="text-lg font-semibold mb-2"
                                            style={{ 
                                                color: "var(--background-text, #2a2a2a)",
                                                letterSpacing: '0.01em'
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-sm font-medium"
                                            style={{ 
                                                color: "var(--primary-color, #4a4a4a)",
                                                fontFamily: 'var(--body-font-family, Montserrat)'
                                            }}
                                        >
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div 
                            className="w-32 h-px"
                            style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamSlideLayout