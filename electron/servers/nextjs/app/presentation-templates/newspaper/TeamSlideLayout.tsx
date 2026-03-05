import React from 'react'
import * as z from "zod";

export const layoutId = 'newspaper-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A classic newspaper-styled team slide showcasing team members with photos, names, and roles in a traditional print layout.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Smith').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Editor-in-Chief').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional newspaper team member headshot")
    })
});

const newspaperTeamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Editorial Team').meta({
        description: "Main title of the team slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Margaret Thompson',
            role: 'Editor-in-Chief',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional newspaper editor woman headshot'
            }
        },
        {
            name: 'Robert Hayes',
            role: 'Managing Editor',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional newspaper managing editor headshot'
            }
        },
        {
            name: 'Sarah Collins',
            role: 'Chief Reporter',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional newspaper reporter woman headshot'
            }
        },
        {
            name: 'James Wilson',
            role: 'Photo Editor',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional newspaper photo editor headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = newspaperTeamSlideSchema

export type NewspaperTeamSlideData = z.infer<typeof newspaperTeamSlideSchema>

interface NewspaperTeamSlideProps {
    data?: Partial<NewspaperTeamSlideData>
}

const NewspaperTeamSlide: React.FC<NewspaperTeamSlideProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {/* Decorative newspaper corner flourish */}
                <div className="absolute top-8 right-8 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path d="M40 0L42 38L40 40L38 38L40 0Z" fill="var(--primary-color, #1a1a1a)" />
                        <path d="M80 40L42 38L40 40L42 42L80 40Z" fill="var(--primary-color, #1a1a1a)" />
                        <path d="M40 80L38 42L40 40L42 42L40 80Z" fill="var(--primary-color, #1a1a1a)" />
                        <path d="M0 40L38 42L40 40L38 38L0 40Z" fill="var(--primary-color, #1a1a1a)" />
                    </svg>
                </div>

                {/* Vintage press ornament */}
                <div className="absolute bottom-8 left-8 opacity-15">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="25" stroke="var(--primary-color, #1a1a1a)" strokeWidth="2" fill="none" />
                        <circle cx="30" cy="30" r="15" stroke="var(--primary-color, #1a1a1a)" strokeWidth="1" fill="none" />
                        <path d="M30 5V15M30 45V55M5 30H15M45 30H55" stroke="var(--primary-color, #1a1a1a)" strokeWidth="1" />
                    </svg>
                </div>

                {/* Company header block */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 py-6" style={{
                        borderBottom: "2px solid var(--primary-color, #1a1a1a)",
                        background: "var(--card-color, rgba(0, 0, 0, 0.02))"
                    }}>
                        <div className="flex items-center gap-4">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-xl font-bold" style={{
                                    color: 'var(--background-text, #1a1a1a)',
                                    fontFamily: "var(--heading-font-family, Unna)"
                                }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="relative z-10 h-full px-12 py-16 flex flex-col">
                    {/* Header with thick rule */}
                    <div className="mb-8">
                        <div className="border-t-4 border-b border-black mb-4" style={{
                            borderTopColor: "var(--primary-color, #1a1a1a)",
                            borderBottomColor: "var(--stroke, rgba(0, 0, 0, 0.2))"
                        }}></div>
                        <h1 className="text-5xl font-bold text-center mb-2" style={{
                            color: "var(--background-text, #1a1a1a)",
                            fontFamily: "var(--heading-font-family, Unna)"
                        }}>
                            {slideData?.title || 'Editorial Team'}
                        </h1>
                        <div className="border-b border-black" style={{
                            borderBottomColor: "var(--stroke, rgba(0, 0, 0, 0.2))"
                        }}></div>
                    </div>

                    {/* Team members grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center" style={{
                                    borderTop: "2px solid var(--primary-color, #1a1a1a)",
                                    borderBottom: "1px solid var(--stroke, rgba(0,0,0,0.2))",
                                    background: "transparent",
                                    padding: "16px 0"
                                }}>
                                    {/* Member photo with newspaper-style border */}
                                    <div className="w-40 h-48 mx-auto mb-4 overflow-hidden" style={{
                                        border: "1px solid var(--primary-color, #1a1a1a)"
                                    }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover grayscale"
                                        />
                                    </div>

                                    {/* Member info */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold uppercase tracking-wide" style={{
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, Unna)"
                                        }}>
                                            {member.name}
                                        </h3>
                                        <div className="flex items-center justify-center">
                                            <div className="h-px bg-black w-8" style={{
                                                background: "var(--stroke, rgba(0, 0, 0, 0.2))"
                                            }}></div>
                                            <p className="mx-3 text-sm font-medium italic" style={{
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--body-font-family, 'Source Serif 4')"
                                            }}>
                                                {member.role}
                                            </p>
                                            <div className="h-px bg-black w-8" style={{
                                                background: "var(--stroke, rgba(0, 0, 0, 0.2))"
                                            }}></div>
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

export default NewspaperTeamSlide