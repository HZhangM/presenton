import React from 'react'
import * as z from "zod";

export const layoutId = 'vintage-paper-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in vintage paper style.'

const ImageSchema = z.object({
    __image_url__: z.string().default("https://placehold.co/640x360"),
    __image_prompt__: z.string().min(10).max(50).default("professional team member portrait")
});

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Eleanor Whitmore'),
    role: z.string().min(2).max(40).default('Chief Executive Officer'),
    image: ImageSchema.default({
        __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b332c01c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'professional businesswoman portrait vintage style'
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Distinguished Team').meta({
        description: "Main title of the slide"
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Eleanor Whitmore',
            role: 'Chief Executive Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b332c01c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businesswoman CEO vintage portrait'
            }
        },
        {
            name: 'Theodore Ashworth',
            role: 'Chief Technology Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businessman CTO vintage portrait'
            }
        },
        {
            name: 'Victoria Sterling',
            role: 'Chief Operations Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businesswoman COO vintage portrait'
            }
        },
        {
            name: 'Sebastian Clarke',
            role: 'Chief Marketing Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businessman CMO vintage portrait'
            }
        }
    ]).meta({
        description: "Team members with their information"
    })
});

export type TeamSlideData = z.infer<typeof Schema>

interface VintageTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const VintageTeamSlide: React.FC<VintageTeamSlideProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-bold"
                                    style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: "var(--heading-font-family, Playfair Display)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative ornamental flourish - top */}
                <div className="absolute top-8 right-16 opacity-20">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                        <path d="M10 40C20 20 40 20 60 40C80 20 100 20 110 40" 
                              stroke="var(--primary-color, #8b4513)" strokeWidth="1" fill="none"/>
                        <circle cx="60" cy="40" r="3" fill="var(--primary-color, #8b4513)"/>
                        <path d="M25 40C35 50 45 50 55 40M65 40C75 50 85 50 95 40" 
                              stroke="var(--primary-color, #8b4513)" strokeWidth="0.5" fill="none"/>
                    </svg>
                </div>

                {/* Decorative ruled line - bottom */}
                <div className="absolute bottom-12 left-16 right-16 opacity-30">
                    <div className="flex items-center">
                        <div className="flex-1 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                        <div className="mx-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 2L10 6H14L11 9L12 14L8 11L4 14L5 9L2 6H6L8 2Z" 
                                      fill="var(--primary-color, #8b4513)"/>
                            </svg>
                        </div>
                        <div className="flex-1 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-16 pt-14 pb-10">
                    {/* Title with drop cap styling */}
                    <div className="text-center mb-6">
                        <h1 
                            className="text-5xl font-black leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--heading-font-family, Playfair Display)"
                            }}
                        >
                            <span
                                className="float-left text-6xl leading-none mr-2 mt-1"
                                style={{ color: "var(--primary-color, #8b4513)" }}
                            >
                                {(slideData?.title || 'Our Distinguished Team').charAt(0)}
                            </span>
                            {(slideData?.title || 'Our Distinguished Team').slice(1)}
                        </h1>
                        
                        {/* Ornamental divider */}
                        <div className="flex items-center justify-center mt-4 mb-4">
                            <div className="w-12 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                            <div className="mx-3">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 0L7.5 4.5H12L8.5 7L9.5 12L6 9L2.5 12L3.5 7L0 4.5H4.5L6 0Z" 
                                          fill="var(--primary-color, #8b4513)" opacity="0.6"/>
                                </svg>
                            </div>
                            <div className="w-12 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center space-y-2">
                                    {/* Member Photo with vintage frame styling */}
                                    <div
                                        className="w-20 h-20 mx-auto overflow-hidden relative"
                                        style={{ 
                                            background: "rgba(255,250,240,0.5)",
                                            border: "1px solid rgba(139,69,19,0.15)",
                                            borderRadius: "2px"
                                        }}
                                    >
                                        <div className="absolute inset-2">
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                                style={{ filter: "sepia(10%)" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="space-y-1">
                                        <h3
                                            className="text-base font-bold"
                                            style={{ 
                                                color: "var(--background-text, #3a2e1e)",
                                                fontFamily: "var(--heading-font-family, Playfair Display)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p
                                            className="text-sm font-semibold italic"
                                            style={{ 
                                                color: "var(--primary-color, #8b4513)",
                                                fontFamily: "var(--body-font-family, Crimson Text)"
                                            }}
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

export default VintageTeamSlide