import React from 'react'
import * as z from "zod";

export const layoutId = 'desert-dune-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A warm desert-themed team showcase with sandy tones and glass-morphism cards'

const Schema = z.object({
  title: z.string().min(3).max(40).default('Meet Our Team').meta({
    description: "Team section title"
  }),
  members: z.array(z.object({
    name: z.string().min(2).max(40).default('Sarah Mitchell').meta({
      description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).default('Product Manager').meta({
      description: "Job title or role"
    }),
    image: z.object({ 
      __image_url__: z.string().default("https://placehold.co/640x360"), 
      __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait") 
    })
  })).min(2).max(4).default([
    {
      name: 'Sarah Mitchell',
      role: 'Product Manager',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616c14d12c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional businesswoman headshot'
      }
    },
    {
      name: 'Marcus Rivera',
      role: 'Lead Developer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional businessman headshot'
      }
    },
    {
      name: 'Elena Chen',
      role: 'UX Designer',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional woman designer headshot'
      }
    },
    {
      name: 'David Thompson',
      role: 'Marketing Director',
      image: {
        __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        __image_prompt__: 'Professional businessman marketing headshot'
      }
    }
  ]).meta({
    description: "Team members with photos, names and roles"
  })
})

export { Schema }

const DesertDuneTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const members = data?.members || []
  
  const getGridCols = (count: number) => {
    if (count <= 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-4'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Tenor Sans)" }}>
        
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
              {(data as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #3a2e1e)', fontFamily: 'var(--body-font-family, Work Sans)' }}>
                {(data as any)?.__companyName__}
              </span>}
            </div>
          </div>
        )}

        {/* Decorative arch elements */}
        <div className="absolute top-8 right-8 w-32 h-16 opacity-10">
          <svg viewBox="0 0 128 64" className="w-full h-full">
            <path d="M20 50 Q64 20 108 50" stroke="var(--primary-color, #b8860b)" strokeWidth="2" fill="none" />
            <path d="M15 55 Q64 25 113 55" stroke="var(--primary-color, #b8860b)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-12 left-8 w-24 h-12 opacity-15">
          <svg viewBox="0 0 96 48" className="w-full h-full">
            <path d="M10 38 Q48 18 86 38" stroke="var(--primary-color, #b8860b)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-center h-full px-12 py-16">
          
          {/* Title section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--background-text, #3a2e1e)" }}>
              {data?.title || 'Meet Our Team'}
            </h1>
            <div className="mx-auto w-24 h-px" style={{ background: "var(--primary-color, #b8860b)" }}></div>
          </div>

          {/* Team grid */}
          <div className={`grid ${getGridCols(members.length)} gap-6 max-w-5xl mx-auto`}>
            {members.map((member, index) => (
              <div key={index} className="text-center">
                <div 
                  className="p-5 rounded-xl backdrop-blur-sm border"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.55)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2" style={{ borderColor: "rgba(184, 134, 11, 0.2)" }}>
                    <img 
                      src={member.image.__image_url__} 
                      alt={member.image.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--background-text, #3a2e1e)", fontFamily: "var(--heading-font-family, Tenor Sans)" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-light" style={{ color: "var(--primary-color, #b8860b)", fontFamily: "var(--body-font-family, Work Sans)" }}>
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

export default DesertDuneTeamSlide