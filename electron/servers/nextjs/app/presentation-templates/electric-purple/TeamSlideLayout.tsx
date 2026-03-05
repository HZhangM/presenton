import React from 'react'
import * as z from "zod";

export const layoutId = 'electric-purple-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in electric purple theme.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Smith').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Software Engineer').meta({
        description: "Job title or role"
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait") 
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Johnson',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman developer headshot'
            }
        },
        {
            name: 'Michael Chen',
            role: 'UI/UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman designer headshot'
            }
        },
        {
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman manager headshot'
            }
        },
        {
            name: 'David Park',
            role: 'DevOps Engineer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman engineer headshot'
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
            return 'grid-cols-2'
        } else if (count === 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-2 lg:grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Urbanist)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-semibold" style={{ color: 'var(--background-text, #e8d0ff)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative geometric shapes */}
                <div className="absolute top-16 right-12 w-24 h-24 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,5 95,85 5,85" fill="var(--primary-color, #bb86fc)" style={{ filter: 'drop-shadow(0 0 8px rgba(187, 134, 252, 0.3))' }} />
                    </svg>
                </div>
                
                <div className="absolute bottom-12 left-12 w-16 h-16 opacity-15">
                    <div className="w-full h-full border-2 rotate-45" style={{ borderColor: 'var(--primary-color, #bb86fc)', filter: 'drop-shadow(0 0 4px rgba(187, 134, 252, 0.2))' }}></div>
                </div>

                {/* Gradient divider line */}
                <div className="absolute top-32 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color, #bb86fc), transparent)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4" 
                            style={{ 
                                color: "var(--background-text, #e8d0ff)",
                                textShadow: '0 0 20px rgba(187, 134, 252, 0.3)'
                            }}
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-6 rounded-2xl backdrop-blur-sm"
                                    style={{ 
                                        border: '1px solid rgba(187, 134, 252, 0.2)', 
                                        background: 'rgba(187, 134, 252, 0.08)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(8px)',
                                        boxShadow: '0 0 20px rgba(187, 134, 252, 0.1)'
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden" style={{ 
                                        border: '2px solid var(--primary-color, #bb86fc)',
                                        boxShadow: '0 0 16px rgba(187, 134, 252, 0.3)'
                                    }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover flex-shrink-0"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 
                                            className="text-xl font-bold mb-2" 
                                            style={{ color: "var(--background-text, #e8d0ff)" }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-base font-medium" 
                                            style={{ color: "var(--primary-color, #bb86fc)" }}
                                        >
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