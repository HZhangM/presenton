import React from 'react'
import * as z from "zod"

export const layoutId = 'stained-glass-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in a stained glass cathedral theme.'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Williams'),
    role: z.string().min(2).max(40).default('Senior Developer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
    })
})

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Sacred Fellowship').meta({
        description: "Main title of the slide"
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Sarah Williams',
            role: 'Senior Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman developer headshot'
            }
        },
        {
            name: 'Michael Chen',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man designer headshot'
            }
        },
        {
            name: 'Elena Rodriguez',
            role: 'Project Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman manager headshot'
            }
        },
        {
            name: 'David Thompson',
            role: 'Technical Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man technical lead headshot'
            }
        }
    ]).meta({
        description: "Team members with their information"
    })
})

type TeamSlideData = z.infer<typeof Schema>

interface TeamSlideProps {
    data?: Partial<TeamSlideData>
}

const StainedGlassTeamSlide: React.FC<TeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else if (count <= 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Merriweather)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-sm font-bold" style={{ color: 'var(--background-text, #e8e0d0)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Ornamental Cross Decoration */}
                <div className="absolute top-8 right-8 opacity-20">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M27 0H33V27H60V33H33V60H27V33H0V27H27V0Z" fill="var(--primary-color, #c0392b)" />
                        <circle cx="30" cy="30" r="8" fill="none" stroke="var(--primary-color, #c0392b)" strokeWidth="2" />
                    </svg>
                </div>

                {/* Gothic Arch Decoration */}
                <div className="absolute bottom-0 left-0 opacity-15">
                    <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
                        <path d="M10 180V40C10 20 25 5 45 5H75C95 5 110 20 110 40V180H10Z" fill="var(--stroke, rgba(192, 57, 43, 0.3))" />
                        <path d="M20 170V50C20 35 32 23 47 23H73C88 23 100 35 100 50V170" stroke="var(--primary-color, #c0392b)" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                <div className="relative z-10 h-full flex flex-col px-8 py-6">
                    {/* Header Section */}
                    <div className="text-center mb-6 pt-8">
                        <h1 
                            className="text-5xl font-black mb-4"
                            style={{ 
                                color: "var(--background-text, #e8e0d0)",
                                fontFamily: "var(--heading-font-family, Merriweather)"
                            }}
                        >
                            {slideData?.title || 'Our Sacred Fellowship'}
                        </h1>
                        
                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center mb-2">
                            <div 
                                className="h-px flex-1 max-w-24"
                                style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
                            />
                            <div className="mx-4">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6" fill="none" stroke="var(--primary-color, #c0392b)" strokeWidth="1" />
                                    <circle cx="8" cy="8" r="2" fill="var(--primary-color, #c0392b)" />
                                </svg>
                            </div>
                            <div 
                                className="h-px flex-1 max-w-24"
                                style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
                            />
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-5 rounded-lg"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        background: "rgba(0,0,0,0.4)",
                                        backdropFilter: "blur(6px)"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div 
                                        className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden"
                                        style={{ border: "2px solid rgba(192,57,43,0.25)" }}
                                    >
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 
                                            className="text-lg font-bold mb-1"
                                            style={{ 
                                                color: "var(--background-text, #e8e0d0)",
                                                fontFamily: "var(--heading-font-family, Merriweather)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-sm font-medium"
                                            style={{ 
                                                color: "var(--primary-color, #c0392b)",
                                                fontFamily: "var(--body-font-family, 'Merriweather Sans')"
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

export default StainedGlassTeamSlide