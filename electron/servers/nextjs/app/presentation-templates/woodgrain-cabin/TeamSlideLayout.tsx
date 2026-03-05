import React from 'react'
import * as z from "zod"

export const layoutId = 'woodgrain-cabin-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A rustic cabin-themed grid layout showcasing team members with names, roles, and photos in a warm, handcrafted style.'

const memberSchema = z.object({
  name: z.string().min(2).max(40).default('Sarah Johnson'),
  role: z.string().min(2).max(40).default('Creative Director'),
  image: z.object({
    __image_url__: z.string().default("https://placehold.co/640x360"),
    __image_prompt__: z.string().min(10).max(50).default("Professional team member headshot")
  })
})

export const Schema = z.object({
  title: z.string().min(3).max(40).default('Our Mountain Team'),
  members: z.array(memberSchema).min(2).max(4).default([
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman creative director headshot'
      }
    },
    {
      name: 'Mike Thompson',
      role: 'Lead Developer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional man developer headshot'
      }
    },
    {
      name: 'Emma Davis',
      role: 'Design Specialist',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman designer headshot'
      }
    },
    {
      name: 'James Wilson',
      role: 'Project Manager',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional man manager headshot'
      }
    }
  ])
})

type TeamSlideData = z.infer<typeof Schema>

interface TeamSlideProps {
  data?: Partial<TeamSlideData>
}

const TeamSlide: React.FC<TeamSlideProps> = ({ data }) => {
  const members = data?.members || []
  
  const getGridCols = (count: number) => {
    if (count <= 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-4'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Amatic SC)"
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-6">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />
              )}
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-lg font-bold"
                  style={{ color: 'var(--background-text, #f5efe6)' }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L35 20H50L40 30L45 45L30 35L15 45L20 30L10 20H25L30 5Z" 
                  fill="var(--primary-color, #d4a76a)" />
          </svg>
        </div>
        
        <div className="absolute bottom-6 left-6 opacity-15">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-current" style={{ color: 'var(--primary-color, #d4a76a)' }}></div>
            <div className="w-2 h-2 rotate-45 border border-current" style={{ borderColor: 'var(--primary-color, #d4a76a)' }}></div>
            <div className="w-8 h-1 bg-current" style={{ color: 'var(--primary-color, #d4a76a)' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col h-full px-12 py-16">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: 'var(--background-text, #f5efe6)',
                fontFamily: "var(--heading-font-family, Amatic SC)"
              }}
            >
              {data?.title || 'Our Mountain Team'}
            </h1>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-0.5" style={{ background: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}></div>
              <div className="w-3 h-3 rotate-45" style={{ 
                border: '1px solid var(--stroke, rgba(212, 167, 106, 0.3))',
                background: 'var(--primary-color, #d4a76a)'
              }}></div>
              <div className="w-16 h-0.5" style={{ background: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}></div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`grid ${getGridCols(members.length)} gap-6 max-w-4xl w-full`}>
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg"
                  style={{
                    background: 'var(--card-color, rgba(255, 250, 240, 0.9))',
                    border: '1px solid rgba(139,90,43,0.15)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Member Photo */}
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2"
                       style={{ borderColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}>
                    <img
                      src={member.image.__image_url__ || ''}
                      alt={member.image.__image_prompt__ || member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ 
                      color: 'var(--primary-text, #2a1a0e)',
                      fontFamily: "var(--heading-font-family, Amatic SC)"
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-sm font-medium"
                    style={{ 
                      color: 'var(--primary-color, #d4a76a)',
                      fontFamily: "var(--body-font-family, Cabin)"
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

export default TeamSlide