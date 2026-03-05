import React from 'react'
import * as z from "zod";

export const layoutId = 'sunset-warm-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A warm sunset-themed team slide showcasing team members with photos, names, and roles in glassmorphic cards.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Alex Johnson').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Product Manager').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot of team member")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Marcus Thompson',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman developer headshot'
            }
        },
        {
            name: 'Elena Rodriguez',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman designer headshot'
            }
        },
        {
            name: 'David Kim',
            role: 'Marketing Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman marketing headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface SunsetWarmTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const SunsetWarmTeamSlide: React.FC<SunsetWarmTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-1 md:grid-cols-2 gap-8'
        } else if (count <= 4) {
            return 'grid-cols-2 gap-6'
        } else {
            return 'grid-cols-2 lg:grid-cols-3 gap-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Nunito)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #3d1e00)' }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative warm glow elements */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{ 
                    background: 'radial-gradient(circle, var(--primary-color, #e65100) 0%, transparent 70%)' 
                }}></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-15" style={{ 
                    background: 'radial-gradient(circle, #ff8f00 0%, transparent 70%)' 
                }}></div>

                {/* Gradient divider */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px opacity-30" style={{
                    background: 'linear-gradient(to right, transparent, var(--primary-color, #e65100), transparent)'
                }}></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-12 py-16">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h1 
                            className="text-5xl lg:text-6xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #3d1e00)",
                                fontFamily: "var(--heading-font-family, Nunito)"
                            }}
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        
                        {/* Decorative pill accent */}
                        <div 
                            className="inline-block px-6 py-2 rounded-full text-sm font-medium"
                            style={{
                                background: 'var(--primary-color, #e65100)',
                                color: 'var(--primary-text, #ffffff)'
                            }}
                        >
                            Excellence in Every Role
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center">
                                    {/* Glassmorphic Card */}
                                    <div 
                                        className="p-6 rounded-3xl backdrop-blur-md border"
                                        style={{
                                            background: 'rgba(255,255,255,0.55)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(255,255,255,0.4)',
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <div className="space-y-3">
                                            <h3 
                                                className="text-2xl font-bold"
                                                style={{ 
                                                    color: "var(--background-text, #3d1e00)",
                                                    fontFamily: "var(--heading-font-family, Nunito)"
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            
                                            {/* Role tag */}
                                            <div 
                                                className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                                                style={{
                                                    background: 'rgba(230, 81, 0, 0.15)',
                                                    color: 'var(--primary-color, #e65100)',
                                                    border: '1px solid rgba(230, 81, 0, 0.2)'
                                                }}
                                            >
                                                {member.role}
                                            </div>
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

export default SunsetWarmTeamSlide