import React from 'react'
import * as z from "zod";

export const layoutId = 'botanical-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in a botanical garden theme.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Chen'),
    role: z.string().min(2).max(40).default('Lead Botanist'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/300x300"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
    })
});

const botanicalTeamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Lead Botanist',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional botanist team member headshot'
            }
        },
        {
            name: 'Marcus Rivera',
            role: 'Garden Designer',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional garden designer headshot'
            }
        },
        {
            name: 'Emma Thompson',
            role: 'Research Coordinator',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional research coordinator headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = botanicalTeamSlideSchema

export type BotanicalTeamSlideData = z.infer<typeof botanicalTeamSlideSchema>

interface BotanicalTeamSlideLayoutProps {
    data?: Partial<BotanicalTeamSlideData>
}

const BotanicalTeamSlideLayout: React.FC<BotanicalTeamSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative vine element */}
                <div className="absolute top-0 right-0 w-64 h-32 opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                        <path d="M20 10 Q40 5, 60 15 Q80 25, 100 15 Q120 5, 140 20 Q160 35, 180 25" 
                              stroke="var(--primary-color, #558b2f)" 
                              strokeWidth="1" 
                              fill="none" />
                        <circle cx="40" cy="8" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6" />
                        <circle cx="80" cy="22" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6" />
                        <circle cx="120" cy="8" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6" />
                        <circle cx="160" cy="32" r="2" fill="var(--primary-color, #558b2f)" opacity="0.6" />
                    </svg>
                </div>

                {/* Subtle leaf pattern bottom left */}
                <div className="absolute bottom-0 left-0 w-48 h-24 opacity-15 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 150 75" fill="none">
                        <ellipse cx="20" cy="40" rx="8" ry="15" fill="var(--primary-color, #558b2f)" opacity="0.4" transform="rotate(-20 20 40)" />
                        <ellipse cx="40" cy="50" rx="6" ry="12" fill="var(--primary-color, #558b2f)" opacity="0.3" transform="rotate(15 40 50)" />
                        <ellipse cx="60" cy="35" rx="7" ry="14" fill="var(--primary-color, #558b2f)" opacity="0.4" transform="rotate(-45 60 35)" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 lg:px-20 py-12">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            style={{ color: "var(--background-text, #2d3a2e)" }} 
                            className="text-5xl lg:text-6xl font-bold mb-4"
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        <div 
                            className="w-24 h-0.5 mx-auto"
                            style={{ background: "var(--primary-color, #558b2f)" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-4 rounded-xl shadow-sm"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                                        border: "1px solid var(--stroke, rgba(85, 139, 47, 0.2))"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md">
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 
                                            style={{ color: "var(--background-text, #2d3a2e)" }} 
                                            className="text-base font-bold mb-1"
                                        >
                                            {member.name}
                                        </h3>
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="w-1 h-1 rounded-full mr-2" style={{ background: "var(--primary-color, #558b2f)" }}></span>
                                            <p 
                                                style={{ 
                                                    color: "var(--primary-color, #558b2f)",
                                                    fontFamily: "var(--body-font-family, Lato)"
                                                }} 
                                                className="text-sm font-medium"
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

export default BotanicalTeamSlideLayout