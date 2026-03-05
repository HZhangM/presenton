import React from 'react'
import * as z from "zod";

export const layoutId = 'chalk-pastel-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in chalk pastel art style.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Emma Johnson'),
    role: z.string().min(2).max(40).default('Creative Director'),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot portrait") 
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Creative Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Sarah Chen',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female designer headshot'
            }
        },
        {
            name: 'Marcus Rivera',
            role: 'Art Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional male art director headshot'
            }
        },
        {
            name: 'Luna Park',
            role: 'Illustrator',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female illustrator headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface ChalkPastelTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const ChalkPastelTeamSlide: React.FC<ChalkPastelTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2 gap-8'
        } else if (count <= 4) {
            return 'grid-cols-2 gap-6'
        } else {
            return 'grid-cols-2 lg:grid-cols-3 gap-4'
        }
    }

    const pastelColors = ['#a8d8ea', '#ffb3d9', '#ffe0ac', '#d4b5d4']

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Kalam)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold" 
                                    style={{ color: 'var(--background-text, #3a3530)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative chalk dots */}
                <div className="absolute top-20 right-16 opacity-30">
                    <div className="flex space-x-2">
                        <div className="w-4 h-4 rounded-full" style={{ background: 'var(--primary-color, #e57373)' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: '#a8d8ea' }}></div>
                        <div className="w-5 h-5 rounded-full" style={{ background: '#ffe0ac' }}></div>
                    </div>
                </div>

                {/* Wavy decorative line */}
                <div className="absolute bottom-16 left-16 opacity-20">
                    <svg width="200" height="40" viewBox="0 0 200 40">
                        <path 
                            d="M0 20 Q25 10, 50 20 T100 20 T150 20 T200 20" 
                            stroke="var(--primary-color, #e57373)" 
                            strokeWidth="3" 
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-20 pb-12">
                    {/* Title with hand-drawn underline */}
                    <div className="text-center mb-16">
                        <h1 
                            className="text-5xl lg:text-6xl font-bold mb-4" 
                            style={{ color: "var(--background-text, #3a3530)" }}
                        >
                            {slideData?.title || 'Meet Our Creative Team'}
                        </h1>
                        <div className="flex justify-center">
                            <svg width="300" height="20" viewBox="0 0 300 20">
                                <path 
                                    d="M10 12 Q50 8, 100 14 T200 10 T280 12" 
                                    stroke="var(--primary-color, #e57373)" 
                                    strokeWidth="4" 
                                    fill="none"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center space-y-4">
                                    {/* Member Photo Card */}
                                    <div 
                                        className="w-48 h-48 mx-auto rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300" 
                                        style={{ 
                                            background: "var(--card-color, rgba(255, 255, 255, 0.5))",
                                            border: "2px solid rgba(229,115,115,0.15)"
                                        }}
                                    >
                                        <div className="p-3 h-full">
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-3/4 object-cover rounded-lg"
                                            />
                                            <div className="h-1/4 flex flex-col justify-center">
                                                <h3 
                                                    className="text-xl font-bold" 
                                                    style={{ color: "var(--background-text, #3a3530)", fontFamily: "var(--heading-font-family, Kalam)" }}
                                                >
                                                    {member.name}
                                                </h3>
                                                <p 
                                                    className="text-sm font-semibold" 
                                                    style={{ 
                                                        color: "var(--primary-color, #e57373)", 
                                                        fontFamily: "var(--body-font-family, Nunito)" 
                                                    }}
                                                >
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative accent dot */}
                                    <div className="flex justify-center">
                                        <div 
                                            className="w-3 h-3 rounded-full opacity-60" 
                                            style={{ background: pastelColors[index % pastelColors.length] }}
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

export default ChalkPastelTeamSlide