import React from 'react'
import * as z from "zod";

export const layoutId = 'comic-book-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A comic book styled team slide showcasing team members with bold outlines and dynamic pop art design'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Hero Name').meta({
        description: "Team member's name"
    }),
    role: z.string().min(2).max(40).default('Super Role').meta({
        description: "Job title or position"
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/200x200"), 
        __image_prompt__: z.string().min(10).max(50).default("professional team member headshot") 
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('OUR SUPER TEAM!').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Captain Code',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://placehold.co/200x200',
                __image_prompt__: 'professional developer headshot'
            }
        },
        {
            name: 'Design Wonder',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://placehold.co/200x200',
                __image_prompt__: 'professional designer headshot'
            }
        },
        {
            name: 'Strategy Storm',
            role: 'Project Manager',
            image: {
                __image_url__: 'https://placehold.co/200x200',
                __image_prompt__: 'professional manager headshot'
            }
        },
        {
            name: 'Data Dynamo',
            role: 'Analytics Expert',
            image: {
                __image_url__: 'https://placehold.co/200x200',
                __image_prompt__: 'professional analyst headshot'
            }
        }
    ]).meta({
        description: "List of team members",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface ComicBookTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const ComicBookTeamSlide: React.FC<ComicBookTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bangers)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" style={{ filter: 'drop-shadow(2px 2px 0 #1a1a1a)' }} />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold"
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        textShadow: '2px 2px 0 #ffffff, -1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative halftone dots */}
                <div className="absolute top-10 right-10 w-32 h-32 opacity-20 pointer-events-none">
                    <div className="w-full h-full" style={{
                        background: `radial-gradient(circle, var(--primary-color, #e53935) 2px, transparent 2px)`,
                        backgroundSize: '12px 12px'
                    }}></div>
                </div>

                {/* POW accent badge */}
                <div className="absolute bottom-20 left-10 transform -rotate-12 opacity-30 pointer-events-none">
                    <div 
                        className="px-4 py-2 text-2xl font-bold border-4 rounded-lg"
                        style={{
                            background: '#ffeb3b',
                            border: '4px solid #1a1a1a',
                            color: '#1a1a1a',
                            textShadow: '2px 2px 0 #ffffff',
                            boxShadow: '4px 4px 0 #1a1a1a'
                        }}
                    >
                        POW!
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-8 pt-16 pb-8 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                textShadow: '3px 3px 0 #ffffff, -2px -2px 0 #1a1a1a, 2px -2px 0 #1a1a1a, -2px 2px 0 #1a1a1a, 2px 2px 0 #1a1a1a',
                                fontFamily: "var(--heading-font-family, Bangers)"
                            }}
                        >
                            {slideData?.title || 'OUR SUPER TEAM!'}
                        </h1>
                        
                        {/* Jagged divider */}
                        <div className="flex justify-center">
                            <div 
                                className="w-32 h-1"
                                style={{
                                    background: 'var(--primary-color, #e53935)',
                                    clipPath: 'polygon(0 0, 10% 100%, 20% 0, 30% 100%, 40% 0, 50% 100%, 60% 0, 70% 100%, 80% 0, 90% 100%, 100% 0, 100% 100%, 0 100%)'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-6 rounded-lg"
                                    style={{
                                        border: '3px solid #1a1a1a',
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                        borderRadius: '8px',
                                        boxShadow: '4px 4px 0 #1a1a1a',
                                        fontFamily: "var(--body-font-family, 'Comic Neue')"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div 
                                        className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden"
                                        style={{
                                            border: '3px solid #1a1a1a',
                                            boxShadow: '3px 3px 0 #1a1a1a'
                                        }}
                                    >
                                        <img
                                            src={member.image.__image_url__ || 'https://placehold.co/200x200'}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 
                                            className="text-xl font-bold mb-2"
                                            style={{ 
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--heading-font-family, Bangers)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <div 
                                            className="inline-block px-3 py-1 rounded-full text-sm font-bold"
                                            style={{
                                                background: 'var(--primary-color, #e53935)',
                                                color: 'var(--primary-text, #ffffff)',
                                                border: '2px solid #1a1a1a',
                                                boxShadow: '2px 2px 0 #1a1a1a'
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

export default ComicBookTeamSlide