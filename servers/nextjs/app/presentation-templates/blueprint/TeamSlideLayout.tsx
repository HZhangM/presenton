import React from 'react'
import * as z from "zod";

export const layoutId = 'blueprint-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A blueprint-styled grid layout showcasing team members with technical drawing aesthetics and monospace typography'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('J. ANDERSON').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('LEAD ENGINEER').meta({
        description: "Job title or role"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional engineer headshot")
    })
});

const Schema = z.object({
    title: z.string().min(3).max(40).default('ENGINEERING TEAM').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'ALEX CHEN',
            role: 'SENIOR ARCHITECT',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional male engineer headshot'
            }
        },
        {
            name: 'SARAH MARTINEZ',
            role: 'PROJECT MANAGER',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female engineer headshot'
            }
        },
        {
            name: 'DAVID KIM',
            role: 'SYSTEMS ENGINEER',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional male engineer headshot'
            }
        },
        {
            name: 'EMILY JOHNSON',
            role: 'QUALITY ENGINEER',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female engineer headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export { Schema }

type TeamSlideData = z.infer<typeof Schema>

interface BlueprintTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const BlueprintTeamSlide: React.FC<BlueprintTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []
    
    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-1 md:grid-cols-2 gap-8'
        } else {
            return 'grid-cols-2 gap-6'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div 
                            className="inline-flex items-center gap-3 px-4 py-2"
                            style={{ 
                                border: '1px dashed var(--stroke, rgba(77,171,247,0.35))', 
                                background: 'var(--card-color, rgba(77,171,247,0.08))',
                                borderRadius: '2px'
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-5 h-5" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-xs font-medium tracking-wider uppercase"
                                    style={{ 
                                        color: 'var(--primary-text, #0d2137)',
                                        fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Grid Pattern Decorative Background */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" className="w-full h-full">
                        <defs>
                            <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--primary-color, #4dabf7)" strokeWidth="0.5" opacity="0.3"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                    </svg>
                </div>

                {/* Technical Corner Markers */}
                <div className="absolute top-4 left-4 text-lg font-bold" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute top-4 right-4 text-lg font-bold" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute bottom-4 left-4 text-lg font-bold" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>
                <div className="absolute bottom-4 right-4 text-lg font-bold" style={{ color: 'var(--stroke, rgba(77,171,247,0.35))' }}>+</div>

                {/* Main Content */}
                <div className="relative z-10 h-full p-12 flex flex-col">
                    {/* Title Section */}
                    <div className="mb-8">
                        <div 
                            className="inline-block px-6 py-3"
                            style={{ 
                                border: '1px dashed var(--stroke, rgba(77,171,247,0.35))', 
                                background: 'var(--card-color, rgba(77,171,247,0.08))',
                                borderRadius: '2px'
                            }}
                        >
                            <h1 
                                className="text-3xl font-bold tracking-wider uppercase"
                                style={{ color: 'var(--primary-text, #0d2137)' }}
                            >
                                {slideData?.title || 'ENGINEERING TEAM'}
                            </h1>
                            <div 
                                className="mt-2 text-xs font-medium tracking-widest uppercase"
                                style={{ 
                                    color: 'var(--background-text, #c8d8e8)',
                                    fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                }}
                            >
                                PERSONNEL SPECIFICATION
                            </div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="p-4 text-center space-y-4"
                                    style={{ 
                                        border: '1px dashed var(--stroke, rgba(77,171,247,0.35))', 
                                        background: 'var(--card-color, rgba(77,171,247,0.06))',
                                        borderRadius: '2px'
                                    }}
                                >
                                    {/* Technical ID */}
                                    <div 
                                        className="text-xs font-mono tracking-widest"
                                        style={{ 
                                            color: 'var(--background-text, #c8d8e8)',
                                            fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                        }}
                                    >
                                        + ID-{String(index + 1).padStart(3, '0')}
                                    </div>

                                    {/* Member Photo */}
                                    <div 
                                        className="w-28 h-28 mx-auto overflow-hidden"
                                        style={{ 
                                            border: '1px dashed var(--stroke, rgba(77,171,247,0.4))',
                                            borderRadius: '2px'
                                        }}
                                    >
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="space-y-2">
                                        <h3 
                                            className="text-lg font-bold tracking-wide uppercase"
                                            style={{ 
                                                color: 'var(--primary-text, #0d2137)',
                                                fontFamily: 'var(--heading-font-family, JetBrains Mono)'
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <div 
                                            className="text-sm font-medium tracking-widest uppercase"
                                            style={{ 
                                                color: 'var(--primary-color, #4dabf7)',
                                                fontFamily: 'var(--body-font-family, IBM Plex Mono)'
                                            }}
                                        >
                                            {member.role}
                                        </div>
                                    </div>

                                    {/* Dimension Line */}
                                    <div className="flex items-center justify-center space-x-2 mt-3">
                                        <div 
                                            className="w-4 h-0.5"
                                            style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}
                                        ></div>
                                        <div 
                                            className="text-xs font-mono"
                                            style={{ color: 'var(--background-text, #c8d8e8)' }}
                                        >
                                            •
                                        </div>
                                        <div 
                                            className="w-4 h-0.5"
                                            style={{ background: 'var(--stroke, rgba(77,171,247,0.35))' }}
                                        ></div>
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

export default BlueprintTeamSlide