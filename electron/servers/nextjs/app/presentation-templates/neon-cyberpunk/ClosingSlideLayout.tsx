import React from 'react'
import * as z from "zod"

export const layoutId = "neon-cyberpunk-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with neon cyberpunk styling"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Ready to hack the future together?"),
  contactInfo: z.string().min(10).max(100).default("contact@cybercorp.io • +1-555-0199 • cybercorp.io")
})

const NeonCyberpunkClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Orbitron)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-6 left-8 flex items-center z-30">
          <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-400" style={{
            background: `linear-gradient(90deg, var(--primary-color, #ff2d95), #00d4ff)`,
            boxShadow: `0 0 8px var(--primary-color, #ff2d95)`
          }}></div>
          <span className="ml-3 text-lg font-bold" style={{
            color: "var(--primary-text, #ffffff)",
            fontFamily: "var(--heading-font-family, Orbitron)"
          }}>CYBERCORP</span>
        </div>

        {/* Decorative corner brackets */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-40">
          <div className="absolute top-0 right-0 w-6 h-1" style={{
            background: "var(--primary-color, #ff2d95)",
            boxShadow: `0 0 4px var(--primary-color, #ff2d95)`
          }}></div>
          <div className="absolute top-0 right-0 w-1 h-6" style={{
            background: "var(--primary-color, #ff2d95)",
            boxShadow: `0 0 4px var(--primary-color, #ff2d95)`
          }}></div>
        </div>

        <div className="absolute bottom-4 left-4 w-8 h-8 opacity-40">
          <div className="absolute bottom-0 left-0 w-6 h-1" style={{
            background: "#00d4ff",
            boxShadow: "0 0 4px #00d4ff"
          }}></div>
          <div className="absolute bottom-0 left-0 w-1 h-6" style={{
            background: "#00d4ff",
            boxShadow: "0 0 4px #00d4ff"
          }}></div>
        </div>

        {/* Glitch-style decorative bars */}
        <div className="absolute top-32 right-12 flex flex-col gap-1 opacity-30">
          <div className="w-16 h-0.5" style={{
            background: "var(--primary-color, #ff2d95)",
            boxShadow: `0 0 3px var(--primary-color, #ff2d95)`
          }}></div>
          <div className="w-10 h-0.5" style={{
            background: "#00d4ff",
            boxShadow: "0 0 3px #00d4ff"
          }}></div>
          <div className="w-12 h-0.5" style={{
            background: "var(--primary-color, #ff2d95)",
            boxShadow: `0 0 3px var(--primary-color, #ff2d95)`
          }}></div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          
          {/* Main title */}
          <div className="text-center mb-8">
            <h1 className="text-8xl font-black mb-4" style={{
              color: "var(--primary-text, #ffffff)",
              fontFamily: "var(--heading-font-family, Orbitron)",
              textShadow: `0 0 20px var(--primary-color, #ff2d95)`,
              letterSpacing: "0.1em"
            }}>
              {title}
            </h1>
            
            {/* Neon divider line */}
            <div className="w-32 h-0.5 mx-auto mb-6" style={{
              background: `linear-gradient(90deg, transparent, var(--primary-color, #ff2d95), transparent)`,
              boxShadow: `0 0 10px var(--primary-color, #ff2d95)`
            }}></div>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-2xl text-center max-w-2xl" style={{
              color: "var(--background-text, #e0e0f0)",
              fontFamily: "var(--body-font-family, 'Share Tech Mono')",
              lineHeight: "1.4"
            }}>
              {subtitle}
            </p>
          </div>

          {/* Contact info card */}
          <div className="p-8 rounded-lg" style={{
            border: "1px solid rgba(255,45,149,0.2)",
            background: "rgba(10,10,30,0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "4px",
            boxShadow: "0 0 15px rgba(255,45,149,0.1)"
          }}>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider mb-3" style={{
                color: "var(--primary-color, #ff2d95)",
                fontFamily: "var(--body-font-family, 'Share Tech Mono')"
              }}>
                GET IN TOUCH
              </div>
              <div className="text-lg" style={{
                color: "var(--primary-text, #ffffff)",
                fontFamily: "var(--body-font-family, 'Share Tech Mono')",
                textShadow: `0 0 8px var(--primary-color, #ff2d95)`
              }}>
                {contactInfo}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom neon glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{
          background: `linear-gradient(90deg, var(--primary-color, #ff2d95), #00d4ff, var(--primary-color, #ff2d95))`,
          boxShadow: `0 0 8px var(--primary-color, #ff2d95)`
        }}></div>

      </div>
    </>
  )
}

export default NeonCyberpunkClosingSlide