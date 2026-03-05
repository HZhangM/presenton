import React from 'react'
import * as z from "zod";

export const layoutId = 'starfield-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A cosmic-themed slide layout showcasing team members with photos, names, and roles in a starfield design.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Alex Nova'),
    role: z.string().min(2).max(40).default('Space Engineer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/400x400"),
        __image_prompt__: z.string().min(10).max(50).default("Professional astronaut team member portrait")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Stellar Team').meta({
        description: "Main title of the slide"
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Commander Nova',
            role: 'Mission Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional space commander portrait'
            }
        },
        {
            name: 'Dr. Cosmos',
            role: 'Chief Scientist',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional female scientist portrait'
            }
        },
        {
            name: 'Captain Stellar',
            role: 'Flight Operations',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional pilot captain portrait'
            }
        },
        {
            name: 'Engineer Orbit',
            role: 'Systems Specialist',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional engineer portrait'
            }
        }
    ]).meta({
        description: "List of team members with their information"
    })
});

type StarfieldTeamSlideData = z.infer<typeof Schema>;

interface StarfieldTeamSlideProps {
    data?: Partial<StarfieldTeamSlideData>;
}

const StarfieldTeamSlide: React.FC<StarfieldTeamSlideProps> = ({ data }) => {
    const members = data?.members || [];
    
    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
        return 'grid-cols-2';
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Exo 2)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(data as any)?._logo_url__ && (
                                <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />
                            )}
                            {(data as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-medium"
                                    style={{ color: 'var(--background-text, #d0d0f0)' }}
                                >
                                    {(data as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative star elements */}
                <div className="absolute top-20 right-32 w-2 h-2 rounded-full opacity-60" style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 8px var(--primary-color, #7c4dff)' }}></div>
                <div className="absolute top-40 right-20 w-1 h-1 rounded-full opacity-40" style={{ background: 'var(--primary-color, #7c4dff)' }}></div>
                <div className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full opacity-50" style={{ background: 'var(--primary-color, #7c4dff)', boxShadow: '0 0 6px var(--primary-color, #7c4dff)' }}></div>

                {/* Orbital curve decoration */}
                <div className="absolute top-1/2 left-0 w-96 h-96 opacity-10 -translate-y-1/2 -translate-x-1/2">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                        <circle cx="200" cy="200" r="180" fill="none" stroke="var(--primary-color, #7c4dff)" strokeWidth="1" opacity="0.3" />
                    </svg>
                </div>

                {/* Main content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Title section */}
                    <div className="text-center mb-12">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: 'var(--background-text, #d0d0f0)',
                                textShadow: '0 0 20px rgba(124, 77, 255, 0.3)'
                            }}
                        >
                            {data?.title || 'Our Stellar Team'}
                        </h1>
                        <div 
                            className="w-24 h-0.5 mx-auto rounded"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent, var(--primary-color, #7c4dff), transparent)' 
                            }}
                        ></div>
                    </div>

                    {/* Team members grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-8 max-w-4xl w-full`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-6 rounded-2xl"
                                    style={{
                                        border: '1px solid rgba(124,77,255,0.15)',
                                        background: 'rgba(124,77,255,0.06)',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                >
                                    {/* Member photo */}
                                    <div className="relative mb-4 mx-auto w-32 h-32">
                                        <div 
                                            className="w-full h-full rounded-full overflow-hidden border-2 relative"
                                            style={{ 
                                                borderColor: 'var(--stroke, rgba(124, 77, 255, 0.25))',
                                                boxShadow: '0 0 20px rgba(124, 77, 255, 0.2)'
                                            }}
                                        >
                                            <img
                                                src={member.image.__image_url__}
                                                alt={member.image.__image_prompt__}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Glow effect */}
                                        <div 
                                            className="absolute inset-0 rounded-full opacity-20"
                                            style={{ 
                                                background: 'radial-gradient(circle, var(--primary-color, #7c4dff) 0%, transparent 70%)' 
                                            }}
                                        ></div>
                                    </div>

                                    {/* Member info */}
                                    <h3 
                                        className="text-xl font-semibold mb-2"
                                        style={{ color: 'var(--primary-text, #ffffff)' }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p 
                                        className="text-sm font-medium opacity-80"
                                        style={{ color: 'var(--background-text, #d0d0f0)' }}
                                    >
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StarfieldTeamSlide