import React from 'react'
import * as z from 'zod'

export const layoutId = "pixel-retro-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("GAME OVER"),
  subtitle: z.string().min(1).max(100).default("THANKS FOR PLAYING! PRESS START TO CONTINUE YOUR JOURNEY"),
  contactInfo: z.string().min(1).max(100).default("PLAYER@COMPANY.COM | LEVEL 42 | HIGH SCORE: UNLIMITED")
})

const PixelRetroClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Press Start 2P)" 
        }}
      >
        {/* Header Block */}
        <div className="absolute top-0 left-0 right-0 p-6 border-b-2" style={{ borderColor: "var(--stroke, rgba(80, 200, 120, 0.35))" }}>
          <div className="flex items-center justify-between">
            <div className="text-sm" style={{ color: "var(--primary-color, #50c878)" }}>COMPANY.EXE</div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 border-2" style={{ borderColor: "var(--primary-color, #50c878)", backgroundColor: "var(--primary-color, #50c878)" }}></div>
              <div className="w-3 h-3 border-2" style={{ borderColor: "var(--stroke, rgba(80, 200, 120, 0.35))" }}></div>
              <div className="w-3 h-3 border-2" style={{ borderColor: "var(--stroke, rgba(80, 200, 120, 0.35))" }}></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 top-20 flex flex-col items-center justify-center text-center px-16">
          {/* Title */}
          <h1 
            className="text-6xl mb-12" 
            style={{ 
              color: "var(--primary-color, #50c878)",
              fontFamily: "var(--heading-font-family, Press Start 2P)",
              textShadow: "4px 4px 0px rgba(0,0,0,0.3)"
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <div 
            className="border-2 p-8 mb-12 max-w-4xl"
            style={{ 
              borderColor: "var(--stroke, rgba(80, 200, 120, 0.35))",
              backgroundColor: "var(--card-color, rgba(80, 200, 120, 0.08))",
              borderRadius: "0"
            }}
          >
            <p 
              className="text-2xl leading-relaxed"
              style={{ 
                color: "var(--background-text, #50c878)",
                fontFamily: "var(--body-font-family, VT323)"
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Contact Info */}
          <div 
            className="text-lg"
            style={{ 
              color: "var(--background-text, #50c878)",
              fontFamily: "var(--body-font-family, VT323)"
            }}
          >
            {contactInfo}
          </div>

          {/* Blinking Cursor */}
          <div 
            className="w-6 h-8 mt-8 animate-pulse"
            style={{ 
              backgroundColor: "var(--primary-color, #50c878)",
              animation: "blink 1s infinite"
            }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 left-8 opacity-20">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2" 
                style={{ 
                  backgroundColor: i % 3 === 0 ? "var(--primary-color, #50c878)" : "transparent",
                  border: "1px solid var(--stroke, rgba(80, 200, 120, 0.35))"
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-32 right-8 opacity-20">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2" 
                style={{ 
                  backgroundColor: i % 4 === 0 ? "var(--primary-color, #50c878)" : "transparent",
                  border: "1px solid var(--stroke, rgba(80, 200, 120, 0.35))"
                }}
              ></div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    </>
  )
}

export default PixelRetroClosingSlide