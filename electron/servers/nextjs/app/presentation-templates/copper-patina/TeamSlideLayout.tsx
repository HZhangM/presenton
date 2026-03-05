import React from 'react'
import * as z from "zod";

export const layoutId = 'copper-patina-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in copper patina theme.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Smith').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Senior Developer').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide"
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional woman designer headshot'
            }
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Senior Developer',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional man developer headshot'
            }
        },
        {
            name: 'Lisa Thompson',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional woman manager headshot'
            }
        },
        {
            name: 'David Kim',
            role: 'Data Analyst',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'Professional man analyst headshot'
            }
        }
    ]).meta({
        description: "List of team members"
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
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Abril Fatface)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #f0e8d8)', fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                                {(slideData as any)?.__companyName__}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative rivet elements */}
                <div className="absolute top-8 right-8 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full opacity-30" style={{ background: "var(--primary-color, #b87333)" }}></div>
                
                {/* Decorative copper line */}
                <div className="absolute top-20 left-0 right-0 h-px opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>

                <div className="flex flex-col h-full px-8 pt-16 pb-8">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--background-text, #f0e8d8)" }}>
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        
                        {/* Divider with circle endpoints */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                            <div className="w-32 h-px" style={{ background: "var(--primary-color, #b87333)" }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-4 w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-4 relative"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 245, 230, 0.8))", 
                                        border: "1px solid var(--stroke, rgba(184, 115, 51, 0.25))", 
                                        borderRadius: "6px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                                    }}
                                >
                                    {/* Rivet accents at corners */}
                                    <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--primary-color, #b87333)" }}></div>
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--primary-color, #b87333)" }}></div>
                                    
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--primary-color, #b87333)" }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 className="text-lg font-bold mb-1" style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium" style={{ color: "var(--primary-color, #b87333)", fontFamily: 'var(--body-font-family, Fira Sans)' }}>
                                            {member.role}
                                        </p>
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