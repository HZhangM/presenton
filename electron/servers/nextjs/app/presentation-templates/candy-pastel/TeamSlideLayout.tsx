import React from 'react'
import * as z from "zod";

export const layoutId = 'candy-pastel-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A playful team showcase with pastel colors and rounded bubbly design'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40),
    role: z.string().min(2).max(40),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Amazing Team'),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Emma Rodriguez',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Alex Chen',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman developer headshot'
            }
        },
        {
            name: 'Sofia Martinez',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman designer headshot'
            }
        },
        {
            name: 'Marcus Johnson',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman manager headshot'
            }
        }
    ])
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

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

    const pastelColors = ['#ffb3d1', '#b3e5fc', '#c8e6c9', '#fff3c4', '#e1bee7', '#ffccbc']

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Fredoka)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 rounded-full" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-lg font-bold" style={{ color: 'var(--background-text, #4a3560)' }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 opacity-20">
                    <div 
                        className="w-24 h-24 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #ffb3d1, #e1bee7)' }}
                    ></div>
                </div>
                <div className="absolute bottom-12 left-8 opacity-15">
                    <div className="flex gap-2">
                        {[1,2,3].map(i => (
                            <div 
                                key={i}
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: pastelColors[i] }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-12 pt-14 pb-10">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #4a3560)",
                                textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                            }}
                        >
                            {slideData?.title || 'Meet Our Amazing Team'}
                        </h1>
                        <div 
                            className="w-24 h-2 mx-auto rounded-full"
                            style={{ background: "var(--primary-color, #ab47bc)" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div 
                                        className="p-4 rounded-3xl mb-4 relative overflow-hidden"
                                        style={{ 
                                            background: 'rgba(255,255,255,0.65)',
                                            border: '2px solid rgba(171,71,188,0.12)',
                                            boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="relative mb-4">
                                            <div
                                                className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg"
                                                style={{ 
                                                    borderColor: pastelColors[index % pastelColors.length]
                                                }}
                                            >
                                                <img
                                                    src={member.image.__image_url__ || ''}
                                                    alt={member.image.__image_prompt__ || member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Decorative badge */}
                                            <div 
                                                className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xl"
                                                style={{ backgroundColor: pastelColors[(index + 2) % pastelColors.length] }}
                                            >
                                                ★
                                            </div>
                                        </div>

                                        {/* Member Info */}
                                        <div>
                                            <h3
                                                className="text-base font-bold mb-1"
                                                style={{ color: "var(--background-text, #4a3560)" }}
                                            >
                                                {member.name}
                                            </h3>
                                            <div 
                                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                                                style={{ 
                                                    backgroundColor: pastelColors[index % pastelColors.length],
                                                    color: "var(--background-text, #4a3560)",
                                                    fontFamily: "var(--body-font-family, Quicksand)"
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

export default TeamSlideLayout