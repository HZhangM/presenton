import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-corporate-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A professional dark mode team showcase with clean layout and sharp blue accents'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Chen'),
    role: z.string().min(2).max(40).default('Senior Director'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/300x300"),
        __image_prompt__: z.string().min(10).max(50).default("Professional business person headshot")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Leadership Team').meta({
        description: "Main title for the team slide"
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Chief Executive Officer',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional businesswoman CEO headshot'
            }
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Chief Technology Officer',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional businessman CTO headshot'
            }
        },
        {
            name: 'Elena Kowalski',
            role: 'Chief Operations Officer',
            image: {
                __image_url__: 'https://placehold.co/300x300',
                __image_prompt__: 'Professional businesswoman COO headshot'
            }
        }
    ]).meta({
        description: "Team members to showcase"
    })
})

type TeamSlideData = z.infer<typeof Schema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const TeamSlideLayout: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Inter)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-semibold" 
                                    style={{ color: 'var(--background-text, #e5e7eb)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative elements */}
                <div 
                    className="absolute top-0 right-0 w-96 h-48 opacity-10"
                    style={{ background: 'linear-gradient(135deg, var(--primary-color, #6366f1) 0%, transparent 70%)' }}
                />
                
                <div 
                    className="absolute bottom-0 left-0 w-80 h-32 opacity-5"
                    style={{ background: 'radial-gradient(circle, var(--primary-color, #6366f1) 0%, transparent 70%)' }}
                />

                {/* Main content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-16 py-12">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-bold mb-4"
                            style={{ color: 'var(--background-text, #e5e7eb)' }}
                        >
                            {slideData?.title || 'Our Leadership Team'}
                        </h1>
                        <div
                            className="w-24 h-1 mx-auto rounded"
                            style={{ background: 'var(--primary-color, #6366f1)' }}
                        />
                    </div>

                    {/* Team members grid */}
                    <div className={`grid ${getGridClasses(members.length)} justify-center max-w-5xl mx-auto`}>
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                {/* Member card */}
                                <div
                                    className="p-4 rounded-lg mb-4"
                                    style={{ 
                                        border: '1px solid rgba(99,102,241,0.12)',
                                        background: 'rgba(99,102,241,0.06)',
                                        borderLeft: '3px solid var(--primary-color, #6366f1)'
                                    }}
                                >
                                    {/* Photo */}
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden" style={{ border: '2px solid var(--stroke, rgba(99, 102, 241, 0.2))' }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Name */}
                                    <h3
                                        className="text-base font-bold mb-1"
                                        style={{ color: 'var(--background-text, #e5e7eb)' }}
                                    >
                                        {member.name}
                                    </h3>
                                    
                                    {/* Role */}
                                    <p
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--primary-color, #6366f1)' }}
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

export default TeamSlideLayout