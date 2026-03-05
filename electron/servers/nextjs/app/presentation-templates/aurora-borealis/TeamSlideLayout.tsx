import React from 'react'
import * as z from "zod"

export const layoutId = 'aurora-borealis-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A team showcase slide with aurora borealis theme featuring ethereal northern lights styling'

const memberSchema = z.object({
  name: z.string().min(2).max(40).default('Aurora Chen'),
  role: z.string().min(2).max(40).default('Lead Developer'),
  image: z.object({
    __image_url__: z.string().default("https://placehold.co/640x360"),
    __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
  })
})

export const Schema = z.object({
  title: z.string().min(3).max(40).default('Meet Our Team').meta({
    description: "Main title for the team slide"
  }),
  members: z.array(memberSchema).min(2).max(4).default([
    {
      name: 'Aurora Chen',
      role: 'Lead Developer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman developer headshot'
      }
    },
    {
      name: 'Magnus Eriksson',
      role: 'Design Director',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional man designer headshot'
      }
    },
    {
      name: 'Freya Nordahl',
      role: 'Product Manager',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman manager headshot'
      }
    },
    {
      name: 'Bjorn Larsson',
      role: 'Tech Lead',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional man tech lead headshot'
      }
    }
  ]).meta({
    description: "Team members to display"
  })
})

type TeamSlideData = z.infer<typeof Schema>

interface AuroraBorealisTeamSlideProps {
  data?: Partial<TeamSlideData>
}

const AuroraBorealisTeamSlide: React.FC<AuroraBorealisTeamSlideProps> = ({ data }) => {
  const members = data?.members || []
  
  const getGridCols = (count: number) => {
    if (count <= 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-2'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Poppins)" 
        }}
      >
        {/* Company Logo Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-6">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />
              )}
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-lg font-semibold" 
                  style={{ color: 'var(--background-text, #d0e8e0)' }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Aurora Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-48 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <defs>
              <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-color, #4ecca3)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--primary-color, #4ecca3)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,60 Q100,20 200,50 T400,40 L400,0 L0,0 Z" fill="url(#aurora1)" />
            <path d="M0,100 Q150,60 300,80 T400,70 L400,200 L0,200 Z" fill="url(#aurora1)" opacity="0.5" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-32 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 320 128" fill="none">
            <defs>
              <linearGradient id="aurora2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--primary-color, #4ecca3)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path d="M0,128 Q80,80 160,100 T320,90 L320,128 Z" fill="url(#aurora2)" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="flex flex-col h-full px-12 py-16 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-6"
              style={{ color: 'var(--background-text, #d0e8e0)' }}
            >
              {data?.title || 'Meet Our Team'}
            </h1>
            
            {/* Aurora Gradient Divider */}
            <div className="mx-auto w-24 h-1 rounded-full"
                 style={{ 
                   background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, #a855f7 50%, var(--primary-color, #4ecca3) 100%)' 
                 }}>
            </div>
          </div>

          {/* Team Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`grid ${getGridCols(members.length)} gap-6 max-w-4xl w-full`}>
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1px solid rgba(78,204,163,0.15)',
                    background: 'rgba(78,204,163,0.06)',
                    borderRadius: '16px'
                  }}
                >
                  {/* Photo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-opacity-30"
                       style={{ ringColor: 'var(--primary-color, #4ecca3)' }}>
                    <img
                      src={member.image.__image_url__}
                      alt={member.image.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ 
                      color: 'var(--background-text, #d0e8e0)',
                      fontFamily: 'var(--heading-font-family, Poppins)'
                    }}
                  >
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p 
                    className="text-base font-medium"
                    style={{ 
                      color: 'var(--primary-color, #4ecca3)',
                      fontFamily: 'var(--body-font-family, "Nunito Sans")'
                    }}
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
  )
}

export default AuroraBorealisTeamSlide