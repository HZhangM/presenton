import React from 'react'
import * as z from "zod"

export const layoutId = "linen-clean-team-slide"
export const layoutName = "Team Slide"
export const layoutDescription = "A grid layout showcasing team members with names, roles, and photos."

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Meet Our Team"),
  members: z.array(z.object({
    name: z.string().min(1).max(40).default("Sarah Johnson"),
    role: z.string().min(1).max(40).default("Creative Director"),
    image: z.object({
      __image_url__: z.string().default("https://placehold.co/640x360"),
      __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
    })
  })).min(2).max(4).default([
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: {
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Professional woman creative director headshot"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: {
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Professional man developer headshot"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      image: {
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Professional woman product manager headshot"
      }
    },
    {
      name: "David Kim",
      role: "UX Designer",
      image: {
        __image_url__: "https://placehold.co/640x360",
        __image_prompt__: "Professional man UX designer headshot"
      }
    }
  ])
})

const LinenCleanTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const members = data?.members || []
  const memberCount = members.length

  const getGridCols = () => {
    if (memberCount <= 2) return "grid-cols-2"
    if (memberCount === 3) return "grid-cols-3"
    return "grid-cols-2"
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, DM Serif Text)" 
        }}
      >
        {/* Decorative Elements */}
        <div 
          className="absolute top-8 right-8 w-32 h-1 opacity-20"
          style={{ background: "var(--primary-color, #8c7851)" }}
        ></div>
        
        <div 
          className="absolute bottom-16 left-8 w-6 h-6 rounded-full opacity-10"
          style={{ background: "var(--primary-color, #8c7851)" }}
        ></div>

        {/* Company Logo/Name Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img 
                  src={(data as any)?._logo_url__} 
                  alt="logo" 
                  className="w-6 h-6 flex-shrink-0" 
                />
              )}
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-sm font-medium"
                  style={{ 
                    color: "var(--background-text, #3a3530)",
                    fontFamily: "var(--body-font-family, DM Sans)"
                  }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="h-full flex flex-col justify-center px-12 py-16">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 
              className="text-4xl font-normal mb-4"
              style={{ 
                color: "var(--background-text, #3a3530)",
                fontFamily: "var(--heading-font-family, DM Serif Text)"
              }}
            >
              {data?.title || "Meet Our Team"}
            </h1>
            
            <div 
              className="w-16 h-px mx-auto"
              style={{ background: "var(--stroke, rgba(140, 120, 81, 0.15))" }}
            ></div>
          </div>

          {/* Team Grid */}
          <div className={`grid ${getGridCols()} gap-6 max-w-4xl mx-auto`}>
            {members.map((member, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(140, 120, 81, 0.08)",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={member.image.__image_url__ || "https://placehold.co/640x360"}
                    alt={member.image.__image_prompt__ || member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg font-semibold mb-1"
                    style={{ 
                      color: "var(--background-text, #3a3530)",
                      fontFamily: "var(--body-font-family, DM Sans)"
                    }}
                  >
                    {member.name}
                  </h3>
                  
                  <p 
                    className="text-sm"
                    style={{ 
                      color: "var(--primary-color, #8c7851)",
                      fontFamily: "var(--body-font-family, DM Sans)"
                    }}
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

export default LinenCleanTeamSlide