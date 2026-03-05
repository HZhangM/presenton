import React from 'react'
import * as z from "zod";

export const layoutId = 'coral-reef-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A vibrant coral reef themed team slide showcasing team members with photos, names, and roles in a tropical style.'

const ImageSchema = z.object({
    __image_url__: z.string().default("https://placehold.co/640x360"),
    __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
});

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('John Doe').meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Team Lead').meta({
        description: "Job title or role"
    }),
    image: ImageSchema
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Marina Santos',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman headshot'
            }
        },
        {
            name: 'Reef Johnson',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman headshot'
            }
        },
        {
            name: 'Coral Zhang',
            role: 'Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman headshot'
            }
        },
        {
            name: 'Teal Anderson',
            role: 'Marketing Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface CoralReefTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const CoralReefTeamSlide: React.FC<CoralReefTeamSlideProps> = ({ data: slideData }) => {
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
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Comfortaa)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #2d3436)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Organic blob decorations */}
                <div className="absolute top-10 right-16 w-32 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M44.2,-76.3C58.9,-69.8,73.3,-60.1,82.8,-46.8C92.3,-33.5,96.9,-16.7,95.1,-0.7C93.3,15.3,85.1,30.6,74.8,43.2C64.5,55.8,52.1,65.7,38.2,71.9C24.3,78.1,8.9,80.6,-7.1,80C-23.1,79.4,-39.8,75.7,-52.8,67.5C-65.8,59.3,-75.1,46.6,-80.9,32.4C-86.7,18.2,-88.9,2.5,-85.6,-11.6C-82.3,-25.7,-73.5,-38.2,-62.2,-47.8C-50.9,-57.4,-37.1,-64.1,-22.4,-70.5C-7.7,-76.9,7.9,-83,23.8,-83.7C39.7,-84.4,55.9,-79.7,44.2,-76.3Z" 
                              fill="var(--primary-color, #ff6b6b)" />
                    </svg>
                </div>

                <div className="absolute bottom-16 left-12 w-24 h-24 opacity-15 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M37.6,-65.5C49.8,-58.1,61.4,-48.7,68.5,-36.2C75.6,-23.7,78.2,-8.1,76.4,6.9C74.6,21.9,68.4,36.3,58.9,47.7C49.4,59.1,36.6,67.5,22.7,72.4C8.8,77.3,-6.2,78.7,-20.5,75.8C-34.8,72.9,-48.4,65.7,-58.2,55.2C-68,44.7,-74,30.9,-76.8,16.2C-79.6,1.5,-79.2,-14.1,-74.6,-27.9C-70,-41.7,-61.2,-53.7,-49.8,-61.2C-38.4,-68.7,-24.4,-71.7,-10.2,-73.4C4,-75.1,18.2,-75.5,37.6,-65.5Z" 
                              fill="#00b894" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-12 pt-16 pb-8 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4" 
                            style={{ color: "var(--background-text, #2d3436)" }}
                        >
                            {slideData?.title || 'Meet Our Team'}
                        </h1>
                        
                        {/* Wavy divider */}
                        <div className="flex justify-center">
                            <svg width="120" height="12" viewBox="0 0 120 12" className="mb-2">
                                <path d="M0 6C15 2 30 10 45 6C60 2 75 10 90 6C105 2 120 6 120 6" 
                                      stroke="var(--primary-color, #ff6b6b)" 
                                      strokeWidth="3" 
                                      fill="none" 
                                      strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 max-w-5xl w-full`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-6 rounded-3xl backdrop-blur-lg flex-shrink-0"
                                    style={{ 
                                        background: 'rgba(255,255,255,0.65)', 
                                        border: '1px solid rgba(255,255,255,0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-white shadow-lg flex-shrink-0">
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 
                                            className="text-lg font-bold mb-1 truncate" 
                                            style={{ color: "var(--background-text, #2d3436)" }}
                                        >
                                            {member.name}
                                        </h3>
                                        <div 
                                            className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                                            style={{ 
                                                background: index % 2 === 0 ? 'var(--primary-color, #ff6b6b)' : '#00b894',
                                                color: 'var(--primary-text, #ffffff)'
                                            }}
                                        >
                                            {member.role}
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

export default CoralReefTeamSlide