import React from 'react'
import * as z from "zod";

export const layoutId = 'glassmorphism-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A glassmorphism-themed grid layout showcasing team members with names, roles, and photos on frosted glass cards.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Alex Johnson').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Senior Developer').meta({
        description: "Job title or role"
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/400x400"), 
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot portrait") 
    }).default({
        __image_url__: "https://placehold.co/400x400",
        __image_prompt__: "Professional team member headshot portrait"
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman designer headshot'
            }
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Frontend Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman developer headshot'
            }
        },
        {
            name: 'Priya Patel',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman manager headshot'
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

const GlassmorphismTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-8 z-30">
                        <div 
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
                            style={{
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--primary-text, #ffffff)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative Glass Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-30" style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 rounded-2xl opacity-20" style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotate(15deg)'
                }}></div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full px-20 py-12">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-800 leading-tight mb-4"
                            style={{ color: "var(--primary-text, #ffffff)" }}
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        <div 
                            className="w-24 h-1 mx-auto rounded-full"
                            style={{ background: "var(--primary-text, #ffffff)" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                        {members.map((member, index) => (
                            <div 
                                key={index} 
                                className="text-center p-4 rounded-2xl transform transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                }}
                            >
                                {/* Member Photo */}
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-white/30" style={{
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                                }}>
                                    <img
                                        src={member.image.__image_url__ || ''}
                                        alt={member.image.__image_prompt__ || member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Member Info */}
                                <div>
                                    <h3
                                        className="text-base font-700 mb-1"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm font-500 opacity-90"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlassmorphismTeamSlide