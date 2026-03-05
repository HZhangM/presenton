import React from 'react'
import * as z from "zod";

export const layoutId = 'magazine-editorial-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A bold editorial layout showcasing team members with strong typography hierarchy and high contrast design.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Alex Johnson'),
    role: z.string().min(2).max(40).default('Creative Director'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/300x400"),
        __image_prompt__: z.string().min(10).max(50).default("Professional portrait headshot")
    })
});

const Schema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Editorial Team').meta({
        description: "Main title of the team slide"
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Mitchell',
            role: 'Editor-in-Chief',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
                __image_prompt__: 'Professional female editor headshot'
            }
        },
        {
            name: 'David Chen',
            role: 'Art Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
                __image_prompt__: 'Professional male art director headshot'
            }
        },
        {
            name: 'Maya Patel',
            role: 'Senior Writer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
                __image_prompt__: 'Professional female writer headshot'
            }
        }
    ])
})

export { Schema }

interface TeamSlideLayoutProps {
    data?: Partial<z.infer<typeof Schema>>
}

const TeamSlideLayout: React.FC<TeamSlideLayoutProps> = ({ data }) => {
    const members = data?.members || []
    const title = data?.title || 'Meet Our Editorial Team'

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(data as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, DM Sans)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-2 h-full opacity-60" style={{ background: 'var(--primary-color, #e53935)' }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-1 opacity-80" style={{ background: 'var(--background-text, #1a1a1a)' }}></div>
                
                {/* Large Drop Number */}
                <div className="absolute top-16 right-8 text-6xl font-bold opacity-10" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--heading-font-family, DM Serif Display)' }}>
                    01
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-12 py-12 flex flex-col">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-normal leading-tight" style={{ 
                            color: 'var(--background-text, #1a1a1a)',
                            fontFamily: 'var(--heading-font-family, DM Serif Display)'
                        }}>
                            {title}
                        </h1>
                        <div className="mt-4 mb-6">
                            <div className="w-16 h-1" style={{ background: 'var(--primary-color, #e53935)' }}></div>
                        </div>
                        <div className="w-full h-0.5 mb-8" style={{ background: 'var(--background-text, #1a1a1a)' }}></div>
                    </div>

                    {/* Team Grid */}
                    <div className={`flex-1 grid gap-4 ${members.length <= 2 ? 'grid-cols-2' : members.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                        {members.map((member, index) => (
                            <div key={index} className="relative">
                                {/* Member Card */}
                                <div className="h-full border-2 border-solid bg-white" style={{ 
                                    borderColor: 'var(--background-text, #1a1a1a)',
                                    backgroundColor: '#ffffff'
                                }}>
                                    {/* Image */}
                                    <div className="h-48 overflow-hidden border-b-2" style={{ borderColor: 'var(--background-text, #1a1a1a)' }}>
                                        <img
                                            src={member.image.__image_url__}
                                            alt={member.image.__image_prompt__}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="p-3">
                                        <h3 className="text-base font-bold mb-1" style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: 'var(--heading-font-family, DM Serif Display)'
                                        }}>
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium uppercase tracking-wider" style={{ 
                                            color: 'var(--primary-color, #e53935)',
                                            fontFamily: 'var(--body-font-family, DM Sans)'
                                        }}>
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamSlideLayout