import React from 'react'
import * as z from 'zod'

export const layoutId = "retro-synthwave-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with 80s retrowave aesthetic"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Ready to embrace the future together?"),
  contactInfo: z.string().min(10).max(100).default("contact@retrosynth.com | +1 (555) 123-4567")
})

const RetroSynthwaveClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bungee)" }}>
        
        {/* Decorative scan lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${(i + 1) * 60}px`,
                background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff3366), transparent)',
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Corner triangular accents */}
        <div className="absolute top-0 left-0 z-10">
          <div 
            className="w-0 h-0"
            style={{
              borderTop: '40px solid var(--primary-color, #ff3366)',
              borderRight: '40px solid transparent',
              opacity: 0.6
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <div 
            className="w-0 h-0"
            style={{
              borderBottom: '40px solid var(--primary-color, #ff3366)',
              borderLeft: '40px solid transparent',
              opacity: 0.6
            }}
          />
        </div>

        {/* Header block */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="flex items-center justify-between">
            <div style={{ fontFamily: "var(--heading-font-family, Bungee)", color: "var(--primary-color, #ff3366)", fontSize: '1.5rem' }}>
              RETROSYNTH
            </div>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff)' }} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center h-full px-16 relative z-30">
          
          {/* Main title with gradient effect */}
          <div className="text-center mb-8">
            <h1 
              className="text-8xl font-bold mb-6"
              style={{
                fontFamily: "var(--heading-font-family, Bungee)",
                background: 'linear-gradient(45deg, var(--primary-color, #ff3366), #00ffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(255, 51, 102, 0.5)'
              }}
            >
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <p 
              className="text-3xl font-medium"
              style={{
                fontFamily: "var(--body-font-family, Rajdhani)",
                color: "var(--background-text, #f0e0ff)",
                textShadow: '0 0 10px rgba(240, 224, 255, 0.3)'
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Gradient divider */}
          <div className="w-96 h-1 mb-12" style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366), #00ffff, var(--primary-color, #ff3366))' }} />

          {/* Contact info card */}
          <div 
            className="px-8 py-6"
            style={{
              border: '2px solid rgba(255,51,102,0.3)',
              background: 'rgba(20,0,40,0.6)',
              backdropFilter: 'blur(4px)',
              borderRadius: '0'
            }}
          >
            <p 
              className="text-xl font-semibold text-center"
              style={{
                fontFamily: "var(--body-font-family, Rajdhani)",
                color: "var(--primary-text, #ffffff)",
                letterSpacing: '0.05em'
              }}
            >
              {contactInfo}
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color, #ff3366))' }} />
              <div 
                className="w-3 h-3"
                style={{ 
                  background: 'var(--primary-color, #ff3366)',
                  boxShadow: '0 0 10px var(--primary-color, #ff3366)'
                }}
              />
              <div className="w-32 h-px" style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff3366), transparent)' }} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default RetroSynthwaveClosingSlide