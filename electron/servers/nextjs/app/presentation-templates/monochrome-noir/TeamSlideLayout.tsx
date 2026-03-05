import React from 'react'
import * as z from "zod";

export const layoutId = 'monochrome-noir-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in stark black and white contrast.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Smith').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Senior Director').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional business person headshot portrait")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Leadership Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Marcus Chen',
            role: 'Chief Executive Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman CEO executive headshot'
            }
        },
        {
            name: 'Sarah Williams',
            role: 'Chief Technology Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman CTO tech leader headshot'
            }
        },
        {
            name: 'David Rodriguez',
            role: 'Chief Operating Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman COO operations headshot'
            }
        },
        {
            name: 'Emily Johnson',
            role: 'Chief Marketing Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman CMO marketing headshot'
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

const MonochromeNoirTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else if (count === 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-2 lg:grid-cols-4'
        }
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Space Grotesk)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-lg font-bold" style={{ color: 'var(--background-text, #000000)' }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Geometric Decorative Elements */}
                <div className="absolute top-16 right-16 w-32 h-32 opacity-10">
                    <div className="w-full h-full border-8 border-black transform rotate-45"></div>
                </div>
                <div className="absolute bottom-20 left-20 w-20 h-20 bg-black opacity-5"></div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-12 pt-20 pb-12 flex flex-col">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-6xl font-bold leading-tight mb-4" 
                            style={{ color: "var(--background-text, #000000)" }}
                        >
                            {slideData?.title || 'Our Leadership Team'}
                        </h1>
                        <div 
                            className="w-full h-1" 
                            style={{ background: "var(--primary-color, #000000)" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-6"
                                    style={{ 
                                        border: "2px solid #000000",
                                        background: "#ffffff",
                                        borderRadius: "0"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden border-2 border-black">
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 
                                            className="text-xl font-bold mb-1"
                                            style={{ color: "var(--background-text, #000000)" }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-sm font-medium uppercase tracking-wide"
                                            style={{ color: "var(--background-text, #000000)" }}
                                        >
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div 
                        className="w-full h-1 mt-6" 
                        style={{ background: "var(--primary-color, #000000)" }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default MonochromeNoirTeamSlide