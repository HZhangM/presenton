import React from 'react'
import * as z from "zod";

export const layoutId = 'slate-minimal-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in clean white cards on slate background.'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Chen'),
    role: z.string().min(2).max(40).default('Software Engineer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/400x400"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title for the team section"
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Senior Engineer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman engineer headshot'
            }
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man product manager headshot'
            }
        },
        {
            name: 'Emily Watson',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman designer headshot'
            }
        },
        {
            name: 'David Kim',
            role: 'Data Scientist',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man data scientist headshot'
            }
        }
    ]).meta({
        description: "Team members with photos and roles"
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const TeamSlideLayout: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []
    
    const getGridCols = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-base font-medium" 
                                    style={{ color: 'var(--background-text, #1e293b)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                <div className="absolute top-6 right-6 w-4 h-4 rounded-full opacity-40" 
                     style={{ background: "var(--primary-color, #3b82f6)" }}>
                </div>
                
                <div className="absolute bottom-8 left-8 w-32 h-0.5 opacity-15" 
                     style={{ background: "var(--stroke, rgba(59, 130, 246, 0.15))" }}>
                </div>

                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-1 h-12 rounded-full" 
                                 style={{ background: "var(--primary-color, #3b82f6)" }}>
                            </div>
                            <h1 
                                className="text-4xl font-semibold" 
                                style={{ color: "var(--background-text, #1e293b)" }}
                            >
                                {slideData?.title || 'Meet Our Team'}
                            </h1>
                        </div>
                        <div className="h-px opacity-8" 
                             style={{ background: "var(--background-text, #1e293b)" }}>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridCols(members.length)} gap-6 max-w-5xl w-full`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-6 rounded-lg"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.95))",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
                                    }}
                                >
                                    <div className="relative mb-4 mx-auto w-24 h-24">
                                        <img
                                            src={member.image.__image_url__}
                                            alt={member.image.__image_prompt__}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
                                             style={{ background: "var(--primary-color, #3b82f6)" }}>
                                        </div>
                                    </div>
                                    <h3 
                                        className="text-lg font-semibold mb-1" 
                                        style={{ color: "var(--background-text, #1e293b)" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                                         style={{ 
                                             background: "var(--primary-color, #3b82f6)", 
                                             color: "var(--primary-text, #ffffff)" 
                                         }}>
                                        {member.role}
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