import React from 'react'
import * as z from "zod"

export const layoutId = 'origami-paper-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos.'

const ImageSchema = z.object({
  __image_url__: z.string().default("https://placehold.co/640x360"),
  __image_prompt__: z.string().min(10).max(50).default("Professional headshot photo")
})

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Meet Our Team'),
  members: z.array(z.object({
    name: z.string().min(1).max(40).default('John Smith'),
    role: z.string().min(1).max(40).default('Senior Developer'),
    image: ImageSchema
  })).min(2).max(4).default([
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional businesswoman headshot'
      }
    },
    {
      name: 'David Park',
      role: 'Product Manager',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional businessman headshot'
      }
    },
    {
      name: 'Maya Rodriguez',
      role: 'UX Researcher',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman headshot'
      }
    },
    {
      name: 'Alex Johnson',
      role: 'Developer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional man headshot'
      }
    }
  ])
})

const OrigamiPaperTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const members = data?.members || []
  const title = data?.title || 'Meet Our Team'

  const getGridCols = (count: number) => {
    if (count <= 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-2'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Outfit)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-6 h-6" />
              )}
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-sm font-medium" 
                  style={{ color: 'var(--background-text, #2d2d3d)' }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Decorative paper triangles */}
        <div className="absolute top-16 right-16 opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <polygon 
              points="60,10 110,100 10,100" 
              fill="var(--primary-color, #e07a5f)" 
              opacity="0.3"
            />
            <polygon 
              points="80,30 120,90 40,90" 
              fill="var(--stroke, rgba(224, 122, 95, 0.15))" 
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-16 opacity-15">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <polygon 
              points="40,5 75,70 5,70" 
              fill="var(--primary-color, #e07a5f)" 
            />
          </svg>
        </div>

        <div className="px-16 py-12 h-full flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ 
                color: 'var(--background-text, #2d2d3d)',
                fontFamily: 'var(--heading-font-family, Outfit)'
              }}
            >
              {title}
            </h1>
            <div className="flex items-center gap-2">
              <div 
                className="h-0.5 w-16"
                style={{ background: 'var(--primary-color, #e07a5f)' }}
              />
              <div 
                className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent"
                style={{ borderBottomColor: 'var(--primary-color, #e07a5f)' }}
              />
            </div>
          </div>

          {/* Team Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`grid ${getGridCols(members.length)} gap-6 max-w-4xl w-full`}>
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded border"
                  style={{
                    background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '4px',
                    boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
                  }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image.__image_url__}
                      alt={member.image.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      color: 'var(--background-text, #2d2d3d)',
                      fontFamily: 'var(--heading-font-family, Outfit)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-sm font-medium"
                    style={{ 
                      color: 'var(--primary-color, #e07a5f)',
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

export default OrigamiPaperTeamSlide