import React from 'react'
import * as z from "zod"

export const layoutId = 'dark-academia-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in a rich library aesthetic.'

const memberSchema = z.object({
  name: z.string().min(2).max(40).default('Dr. Eleanor Blackthorne'),
  role: z.string().min(2).max(40).default('Lead Research Scholar'),
  image: z.object({
    __image_url__: z.string().default("https://placehold.co/640x360"),
    __image_prompt__: z.string().min(10).max(50).default("Professional academic scholar portrait")
  })
})

export const Schema = z.object({
  title: z.string().min(3).max(40).default('Distinguished Faculty').meta({
    description: "Main title of the slide"
  }),
  members: z.array(memberSchema).min(2).max(4).default([
    {
      name: 'Dr. Eleanor Blackthorne',
      role: 'Lead Research Scholar',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional academic scholar portrait'
      }
    },
    {
      name: 'Prof. Marcus Whitmore',
      role: 'Classical Literature',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Distinguished professor headshot'
      }
    },
    {
      name: 'Dr. Sophia Cambridge',
      role: 'Medieval History',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Academic female professor portrait'
      }
    },
    {
      name: 'Prof. James Thornfield',
      role: 'Philosophy & Ethics',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Scholarly gentleman professor headshot'
      }
    }
  ]).meta({
    description: "List of team members"
  })
})

type TeamSlideData = z.infer<typeof Schema>

interface DarkAcademiaTeamSlideProps {
  data?: Partial<TeamSlideData>
}

const DarkAcademiaTeamSlide: React.FC<DarkAcademiaTeamSlideProps> = ({ data: slideData }) => {
  const members = slideData?.members || []
  
  const getGridClasses = (count: number) => {
    if (count <= 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-2 lg:grid-cols-4'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Spectral)" 
        }}
      >
        {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-12 pt-6">
            <div className="flex items-center gap-3">
              {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
              {(slideData as any)?.__companyName__ && (
                <span className="text-base font-medium" style={{ color: 'var(--background-text, #e8dcc8)' }}>
                  {(slideData as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Decorative ornament - top left */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            <path d="M32 8L36 28H56L40 40L44 60L32 48L20 60L24 40L8 28H28L32 8Z" fill="var(--primary-color, #c8a882)" />
          </svg>
        </div>

        {/* Decorative rule - bottom right */}
        <div className="absolute bottom-6 right-12 w-32 h-px" style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: 'var(--primary-color, #c8a882)' }}></div>
        </div>

        {/* Main Content */}
        <div className="h-full flex flex-col px-12 py-16">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ color: 'var(--background-text, #e8dcc8)' }}
            >
              {slideData?.title || 'Distinguished Faculty'}
            </h1>
            
            {/* Ornamental divider */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-px" style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}></div>
              <div className="mx-3 text-lg" style={{ color: 'var(--primary-color, #c8a882)' }}>❦</div>
              <div className="w-16 h-px" style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}></div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-6xl`}>
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded"
                  style={{ 
                    border: '1px solid rgba(200,168,130,0.15)',
                    background: 'rgba(200,168,130,0.06)'
                  }}
                >
                  {/* Member Photo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border" style={{ borderColor: 'var(--stroke, rgba(200,168,130,0.25))' }}>
                    <img
                      src={member.image.__image_url__}
                      alt={member.image.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--background-text, #e8dcc8)' }}
                  >
                    {member.name}
                  </h3>
                  
                  <p 
                    className="text-sm font-medium italic"
                    style={{ color: 'var(--primary-color, #c8a882)' }}
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

export default DarkAcademiaTeamSlide