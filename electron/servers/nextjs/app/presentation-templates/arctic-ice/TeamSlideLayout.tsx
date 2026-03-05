import React from 'react'
import * as z from "zod";

export const layoutId = 'arctic-ice-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in an Arctic Ice theme.'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Sarah Johnson'),
    role: z.string().min(2).max(40).default('Senior Developer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Meet Our Team').meta({
        description: "Main title for the team slide"
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Sarah Johnson',
            role: 'Senior Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman headshot'
            }
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman headshot'
            }
        },
        {
            name: 'Emma Davis',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman designer headshot'
            }
        }
    ])
});

interface TeamSlideProps {
    data: Partial<z.infer<typeof Schema>>
}

const ArcticIceTeamSlide: React.FC<TeamSlideProps> = ({ data }) => {
    const members = data?.members || []
    
    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            
            <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Outfit)" }}>
                
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(data as any)?.__companyName__ && <span className="text-lg font-medium" style={{ color: 'var(--background-text, #1a3a50)' }}>
                                    {(data as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Frosted decorative overlay - top right */}
                <div className="absolute top-0 right-0 w-96 h-48 opacity-20 overflow-hidden">
                    <div style={{ 
                        background: 'rgba(255, 255, 255, 0.4)', 
                        backdropFilter: 'blur(16px)',
                        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }} className="w-full h-full"></div>
                </div>

                {/* Crystal accent lines */}
                <div className="absolute top-32 left-16 w-24 h-px" style={{ background: 'var(--stroke, rgba(2, 136, 209, 0.15))' }}></div>
                <div className="absolute top-40 left-20 w-16 h-px" style={{ background: 'var(--stroke, rgba(2, 136, 209, 0.15))' }}></div>

                {/* Main content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-16 py-12">
                    
                    {/* Title section */}
                    <div className="mb-8 text-center">
                        <h1 
                            className="text-5xl lg:text-6xl font-light tracking-wide mb-4" 
                            style={{ color: 'var(--background-text, #1a3a50)' }}
                        >
                            {data?.title || 'Meet Our Team'}
                        </h1>
                        <div className="w-20 h-px mx-auto" style={{ background: 'var(--primary-color, #0288d1)' }}></div>
                    </div>

                    {/* Team members grid */}
                    <div className={`grid ${getGridClasses(members.length)} gap-4 max-w-5xl mx-auto`}>
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                {/* Frosted glass card */}
                                <div
                                    className="p-4 mb-4 rounded-2xl"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.65)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    {/* Member photo */}
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden" style={{ border: '1px solid rgba(2,136,209,0.12)' }}>
                                        <img 
                                            src={member.image.__image_url__} 
                                            alt={member.image.__image_prompt__}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Member details */}
                                    <h3
                                        className="text-base font-bold mb-1" 
                                        style={{ color: 'var(--background-text, #1a3a50)' }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm font-light" 
                                        style={{ color: 'var(--primary-color, #0288d1)' }}
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

export default ArcticIceTeamSlide