import React from 'react'
import * as z from "zod";

export const layoutId = 'brutalist-web-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in raw brutalist style.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Doe').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Developer').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot photo")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('THE TEAM').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'ALEX CHEN',
            role: 'LEAD DEV',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional male developer headshot'
            }
        },
        {
            name: 'SARA JONES',
            role: 'DESIGNER',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female designer headshot'
            }
        },
        {
            name: 'MIKE TORRES',
            role: 'BACKEND',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional male backend developer headshot'
            }
        },
        {
            name: 'EMMA DAVIS',
            role: 'QA LEAD',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female QA lead headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface BrutalistWebTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const BrutalistWebTeamSlide: React.FC<BrutalistWebTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else if (count === 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-2'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Anton)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-3 p-4" style={{ 
                            border: '4px solid #111111', 
                            background: '#ffffff', 
                            boxShadow: '6px 6px 0 #111111',
                            borderRadius: '0'
                        }}>
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold tracking-wider"
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-8 w-24 h-24 opacity-20">
                    <div 
                        className="w-full h-full"
                        style={{ 
                            background: 'var(--primary-color, #ff4500)',
                            border: '4px solid #111111',
                            transform: 'rotate(45deg)'
                        }}
                    ></div>
                </div>

                <div className="absolute bottom-8 left-8 opacity-30">
                    <div 
                        className="text-8xl font-bold"
                        style={{ 
                            color: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                            fontFamily: "var(--heading-font-family, Anton)",
                            lineHeight: '1'
                        }}
                    >
                        {String(members.length).padStart(2, '0')}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-8 py-8 pt-24">
                    {/* Title Section */}
                    <div className="mb-8">
                        <div 
                            className="inline-block p-4 mb-4"
                            style={{ 
                                background: 'var(--primary-color, #ff4500)',
                                border: '4px solid #111111',
                                borderRadius: '0',
                                boxShadow: '6px 6px 0 #111111'
                            }}
                        >
                            <h1 
                                className="text-5xl font-bold tracking-wider"
                                style={{ 
                                    color: 'var(--primary-text, #ffffff)',
                                    fontFamily: "var(--heading-font-family, Anton)"
                                }}
                            >
                                {slideData?.title || 'THE TEAM'}
                            </h1>
                        </div>
                        
                        <div 
                            className="w-full h-1"
                            style={{ background: '#111111' }}
                        ></div>
                        
                        <div 
                            className="inline-block p-2 mt-4"
                            style={{ 
                                background: '#ffffff',
                                border: '4px solid #111111',
                                borderRadius: '0'
                            }}
                        >
                            <span 
                                className="text-sm font-bold tracking-widest"
                                style={{ 
                                    color: 'var(--background-text, #111111)',
                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                }}
                            >
                                SQUAD_MEMBERS
                            </span>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 h-full`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="p-4 flex flex-col"
                                    style={{ 
                                        border: '4px solid #111111', 
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.95))', 
                                        borderRadius: '0', 
                                        boxShadow: '6px 6px 0 #111111'
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div 
                                        className="w-24 h-24 mx-auto mb-4 overflow-hidden"
                                        style={{ 
                                            border: '4px solid #111111',
                                            borderRadius: '0'
                                        }}
                                    >
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="text-center flex-1 flex flex-col justify-center">
                                        <h3 
                                            className="text-lg font-bold tracking-wider mb-2"
                                            style={{ 
                                                color: 'var(--background-text, #111111)',
                                                fontFamily: "var(--heading-font-family, Anton)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        
                                        <div 
                                            className="inline-block px-3 py-1"
                                            style={{ 
                                                background: 'var(--stroke, rgba(0, 0, 0, 0.8))',
                                                border: '2px solid #111111',
                                                borderRadius: '0'
                                            }}
                                        >
                                            <span 
                                                className="text-sm font-bold tracking-widest"
                                                style={{ 
                                                    color: '#ffffff',
                                                    fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                                }}
                                            >
                                                {member.role}
                                            </span>
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

export default BrutalistWebTeamSlide