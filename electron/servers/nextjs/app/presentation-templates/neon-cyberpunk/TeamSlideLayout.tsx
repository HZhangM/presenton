import React from 'react'
import * as z from "zod";

export const layoutId = 'neon-cyberpunk-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A cyberpunk-themed grid layout showcasing team members with neon glow effects and futuristic styling'

const Schema = z.object({
  title: z.string().min(3).max(40).default('Neural Network Team'),
  members: z.array(z.object({
    name: z.string().min(2).max(40).default('Alex Matrix'),
    role: z.string().min(3).max(40).default('Cyber Specialist'),
    image: z.object({ 
      __image_url__: z.string().default("https://placehold.co/300x300"), 
      __image_prompt__: z.string().min(10).max(50).default("Futuristic cyberpunk professional headshot") 
    })
  })).min(2).max(4).default([
    {
      name: 'Alex Matrix',
      role: 'Lead Engineer',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Cyberpunk engineer with neon lighting'
      }
    },
    {
      name: 'Nova Chen',
      role: 'Data Architect',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Futuristic data scientist portrait'
      }
    },
    {
      name: 'Zero Knight',
      role: 'Security Expert',
      image: {
        __image_url__: 'https://placehold.co/300x300',
        __image_prompt__: 'Cybersecurity specialist headshot'
      }
    }
  ])
})

export { Schema }

interface NeonCyberpunkTeamSlideProps {
  data?: Partial<z.infer<typeof Schema>>
}

const NeonCyberpunkTeamSlide: React.FC<NeonCyberpunkTeamSlideProps> = ({ data }) => {
  const members = data?.members || []
  
  const getGridCols = (count: number) => {
    if (count === 2) return 'grid-cols-2'
    if (count === 3) return 'grid-cols-3'
    return 'grid-cols-2'
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Orbitron)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-12 pt-6">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-lg font-bold tracking-wide"
                  style={{ 
                    color: 'var(--primary-text, #ffffff)',
                    textShadow: '0 0 10px var(--primary-color, #ff2d95)'
                  }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Decorative corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-3 h-8 border-l-2 border-t-2"
            style={{ borderColor: 'var(--primary-color, #ff2d95)' }}
          />
          <div 
            className="absolute top-0 left-0 w-8 h-3 border-l-2 border-t-2"
            style={{ borderColor: 'var(--primary-color, #ff2d95)' }}
          />
        </div>
        
        <div className="absolute top-8 right-8 w-12 h-12 pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-3 h-8 border-r-2 border-t-2"
            style={{ borderColor: 'var(--primary-color, #ff2d95)' }}
          />
          <div 
            className="absolute top-0 right-0 w-8 h-3 border-r-2 border-t-2"
            style={{ borderColor: 'var(--primary-color, #ff2d95)' }}
          />
        </div>

        {/* Glitch bars */}
        <div className="absolute left-0 top-32 opacity-60">
          <div 
            className="w-24 h-1 mb-2"
            style={{ 
              background: 'var(--primary-color, #ff2d95)',
              boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
            }}
          />
          <div 
            className="w-16 h-1 mb-2"
            style={{ 
              background: '#00ffff',
              boxShadow: '0 0 8px #00ffff'
            }}
          />
          <div 
            className="w-20 h-1"
            style={{ 
              background: 'var(--primary-color, #ff2d95)',
              boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
            }}
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col h-full px-12 pt-20 pb-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-5xl font-black tracking-wider mb-4"
              style={{ 
                color: 'var(--primary-text, #ffffff)',
                textShadow: '0 0 20px var(--primary-color, #ff2d95)',
                fontFamily: "var(--heading-font-family, Orbitron)"
              }}
            >
              {data?.title || 'Neural Network Team'}
            </h1>
            <div 
              className="w-32 h-1 mx-auto"
              style={{ 
                background: `linear-gradient(90deg, var(--primary-color, #ff2d95), #00ffff, var(--primary-color, #ff2d95))`,
                boxShadow: '0 0 15px var(--primary-color, #ff2d95)'
              }}
            />
          </div>

          {/* Team grid */}
          <div className={`grid ${getGridCols(members.length)} gap-8 flex-1 justify-items-center items-center max-w-5xl mx-auto`}>
            {members.map((member, index) => (
              <div 
                key={index}
                className="text-center p-6 w-full max-w-xs"
                style={{
                  border: '1px solid rgba(255,45,149,0.2)',
                  background: 'rgba(10,10,30,0.7)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '4px',
                  boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                }}
              >
                {/* Profile image */}
                <div className="relative mb-4">
                  <div 
                    className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 relative"
                    style={{ 
                      borderColor: index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : '#00ffff',
                      boxShadow: `0 0 20px ${index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : '#00ffff'}`
                    }}
                  >
                    <img 
                      src={member.image.__image_url__} 
                      alt={member.image.__image_prompt__}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 
                  className="text-lg font-bold mb-2 tracking-wide"
                  style={{ 
                    color: 'var(--primary-text, #ffffff)',
                    fontFamily: "var(--heading-font-family, Orbitron)"
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p 
                  className="text-sm font-mono tracking-widest"
                  style={{ 
                    color: index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : '#00ffff',
                    fontFamily: "var(--body-font-family, 'Share Tech Mono')",
                    textShadow: `0 0 10px ${index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : '#00ffff'}`
                  }}
                >
                  {member.role.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom neon line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ 
            background: `linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), #00ffff, var(--primary-color, #ff2d95), transparent)`,
            boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
          }}
        />
      </div>
    </>
  )
}

export default NeonCyberpunkTeamSlide