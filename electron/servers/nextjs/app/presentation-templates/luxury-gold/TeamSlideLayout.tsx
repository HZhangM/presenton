import React from 'react'
import * as z from "zod"

export const layoutId = 'luxury-gold-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in luxury gold theme.'

const memberSchema = z.object({
  name: z.string().min(2).max(40).default('Alexander Sterling'),
  role: z.string().min(2).max(40).default('Chief Executive Officer'),
  image: z.object({
    __image_url__: z.string().default("https://placehold.co/300x300"),
    __image_prompt__: z.string().min(10).max(50).default("Professional executive portrait photo")
  })
})

export const Schema = z.object({
  title: z.string().min(3).max(40).default('OUR DISTINGUISHED TEAM'),
  members: z.array(memberSchema).min(2).max(4).default([
    {
      name: 'Victoria Blackwood',
      role: 'Chief Executive Officer',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Professional female CEO executive portrait'
      }
    },
    {
      name: 'Marcus Wellington',
      role: 'Chief Technology Officer',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Professional male CTO executive portrait'
      }
    },
    {
      name: 'Isabella Rothschild',
      role: 'Chief Operating Officer',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Professional female COO executive portrait'
      }
    },
    {
      name: 'Sebastian Ashworth',
      role: 'Chief Financial Officer',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Professional male CFO executive portrait'
      }
    }
  ])
})

const LuxuryGoldTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const members = data?.members || []
  
  const getGridClasses = (count: number) => {
    if (count <= 2) {
      return 'grid-cols-2 gap-4'
    } else if (count === 3) {
      return 'grid-cols-3 gap-4'
    } else {
      return 'grid-cols-4 gap-4'
    }
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Cinzel)" 
        }}
      >
        {/* Decorative Crown Ornament */}
        <div className="absolute top-8 right-12 opacity-20">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M30 5L35 15H25L30 5Z" fill="var(--primary-color, #d4a843)" />
            <path d="M15 10L20 20H10L15 10Z" fill="var(--primary-color, #d4a843)" />
            <path d="M45 10L50 20H40L45 10Z" fill="var(--primary-color, #d4a843)" />
            <rect x="8" y="20" width="44" height="8" rx="2" fill="var(--primary-color, #d4a843)" />
            <circle cx="30" cy="24" r="3" fill="var(--background-color, transparent)" />
          </svg>
        </div>

        {/* Gold Accent Lines */}
        <div className="absolute bottom-16 left-12 w-32 h-px opacity-30" style={{ background: "var(--primary-color, #d4a843)" }}></div>
        <div className="absolute bottom-20 left-12 w-24 h-px opacity-20" style={{ background: "var(--primary-color, #d4a843)" }}></div>

        {/* Company Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-12 pt-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-lg font-bold tracking-wide"
                    style={{ 
                      color: 'var(--background-text, #e8d5b0)',
                      fontFamily: 'var(--heading-font-family, Cinzel)'
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col h-full px-12 py-12 justify-center">
          {/* Title with Gold Gradient */}
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-black tracking-wider mb-4 uppercase"
              style={{ 
                color: 'var(--background-text, #e8d5b0)',
                fontFamily: 'var(--heading-font-family, Cinzel)',
                background: `linear-gradient(135deg, var(--primary-color, #d4a843), var(--background-text, #e8d5b0))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {data?.title || 'OUR DISTINGUISHED TEAM'}
            </h1>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px" style={{ background: "var(--stroke, rgba(212, 168, 67, 0.3))" }}></div>
              <div className="w-2 h-2 rotate-45" style={{ border: "1px solid var(--stroke, rgba(212, 168, 67, 0.3))" }}></div>
              <div className="w-12 h-px" style={{ background: "var(--stroke, rgba(212, 168, 67, 0.3))" }}></div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className={`grid ${getGridClasses(members.length)} max-w-4xl mx-auto`}>
            {members.map((member, index) => (
              <div 
                key={index} 
                className="text-center space-y-3 p-4 rounded-sm"
                style={{
                  border: "1px solid rgba(212,168,67,0.2)",
                  background: "rgba(212,168,67,0.04)",
                  borderRadius: "4px"
                }}
              >
                {/* Member Photo */}
                <div className="relative mx-auto">
                  <div
                    className="w-20 h-20 mx-auto rounded-sm overflow-hidden"
                    style={{ border: "1px solid rgba(212,168,67,0.3)" }}
                  >
                    <img
                      src={member.image.__image_url__ || ''}
                      alt={member.image.__image_prompt__ || member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gold Corner Accent */}
                  <div 
                    className="absolute -top-1 -right-1 w-4 h-4"
                    style={{ 
                      background: "var(--primary-color, #d4a843)",
                      clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)"
                    }}
                  ></div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3
                    className="text-base font-bold tracking-wide uppercase"
                    style={{ 
                      color: 'var(--background-text, #e8d5b0)',
                      fontFamily: 'var(--heading-font-family, Cinzel)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <div className="w-8 h-px mx-auto" style={{ background: "var(--primary-color, #d4a843)" }}></div>
                  <p
                    className="text-sm font-medium italic"
                    style={{ 
                      color: 'var(--primary-color, #d4a843)',
                      fontFamily: 'var(--body-font-family, EB Garamond)'
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

export default LuxuryGoldTeamSlide