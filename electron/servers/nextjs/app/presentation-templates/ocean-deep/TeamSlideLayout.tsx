import React from 'react'
import * as z from "zod"

export const layoutId = 'ocean-deep-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in an ocean deep theme.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40),
    role: z.string().min(2).max(40),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait") 
    })
})

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team'),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Marina Chen',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b812b833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman designer headshot'
            }
        },
        {
            name: 'David Rodriguez',
            role: 'Tech Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man tech director headshot'
            }
        },
        {
            name: 'Sarah Kim',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman manager headshot'
            }
        },
        {
            name: 'Alex Thompson',
            role: 'Marketing Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man marketing lead headshot'
            }
        }
    ])
})

export const Schema = teamSlideSchema

interface OceanDeepTeamSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const OceanDeepTeamSlide: React.FC<OceanDeepTeamSlideProps> = ({ data }) => {
    const members = data?.members || []
    
    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Raleway)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && (
                                    <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />
                                )}
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-semibold" 
                                        style={{ color: 'var(--background-text, #c8e0f0)' }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Wave Elements */}
                <div className="absolute top-0 right-0 w-96 h-48 opacity-20 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                        <path 
                            d="M400 0C350 50 300 20 250 60C200 100 150 40 100 80C50 120 0 60 0 100V0H400Z" 
                            fill="var(--primary-color, #00bcd4)" 
                            opacity="0.3"
                        />
                        <circle cx="320" cy="40" r="8" fill="var(--primary-color, #00bcd4)" opacity="0.4" />
                        <circle cx="360" cy="80" r="12" fill="var(--primary-color, #00bcd4)" opacity="0.2" />
                        <circle cx="280" cy="120" r="6" fill="var(--primary-color, #00bcd4)" opacity="0.5" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-80 h-32 opacity-15 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 320 130" fill="none">
                        <path 
                            d="M0 130C80 100 160 130 240 100C280 85 320 100 320 100V130H0Z" 
                            fill="var(--primary-color, #00bcd4)" 
                            opacity="0.4"
                        />
                        <circle cx="40" cy="100" r="10" fill="var(--primary-color, #00bcd4)" opacity="0.3" />
                        <circle cx="80" cy="80" r="6" fill="var(--primary-color, #00bcd4)" opacity="0.4" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-16 py-12 flex flex-col justify-center">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #c8e0f0)",
                                fontFamily: "var(--heading-font-family, Raleway)"
                            }}
                        >
                            {data?.title || 'Meet Our Team'}
                        </h1>
                        
                        {/* Curved Divider */}
                        <div className="flex justify-center">
                            <svg width="120" height="8" viewBox="0 0 120 8" fill="none">
                                <path 
                                    d="M0 4C30 0 90 8 120 4" 
                                    stroke="var(--primary-color, #00bcd4)" 
                                    strokeWidth="2" 
                                    fill="none"
                                    opacity="0.6"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className={`grid ${getGridClasses(members.length)} gap-4 max-w-5xl mx-auto`}>
                        {members.map((member, index) => (
                            <div 
                                key={index} 
                                className="text-center p-4 rounded-2xl backdrop-blur-sm"
                                style={{
                                    border: '1px solid rgba(0,188,212,0.15)',
                                    background: 'rgba(0,188,212,0.06)',
                                    backdropFilter: 'blur(8px)'
                                }}
                            >
                                {/* Member Photo */}
                                <div
                                    className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 p-1"
                                    style={{ 
                                        border: '2px solid rgba(0,188,212,0.25)',
                                        background: 'rgba(0,188,212,0.1)'
                                    }}
                                >
                                    <img
                                        src={member.image.__image_url__ || ''}
                                        alt={member.image.__image_prompt__ || member.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                {/* Member Info */}
                                <div>
                                    <h3
                                        className="text-base font-bold mb-1"
                                        style={{ 
                                            color: "var(--background-text, #c8e0f0)",
                                            fontFamily: "var(--heading-font-family, Raleway)"
                                        }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm font-medium"
                                        style={{ 
                                            color: "var(--primary-color, #00bcd4)",
                                            fontFamily: "var(--body-font-family, 'Open Sans')"
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
        </>
    )
}

export default OceanDeepTeamSlide