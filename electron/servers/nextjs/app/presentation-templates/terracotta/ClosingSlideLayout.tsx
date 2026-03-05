import React from 'react'
import * as z from 'zod'

export const layoutId = "terracotta-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with warm Mediterranean terracotta styling"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(10).max(100).default("contact@company.com • www.company.com • @company")
})

const TerracottaClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = data

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
        }}
      >
        {/* Header with company branding */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-16 py-6">
          <div 
            className="text-2xl font-bold tracking-wide" 
            style={{ 
              color: "var(--primary-color, #8d4e2a)",
              fontFamily: "var(--heading-font-family, Cormorant Garamond)"
            }}
          >
            COMPANY
          </div>
          <div 
            className="w-16 h-0.5 opacity-60"
            style={{ background: "var(--primary-color, #8d4e2a)" }}
          ></div>
        </div>

        {/* Decorative corner ornament */}
        <div className="absolute top-8 right-8 opacity-20">
          <div 
            className="w-3 h-3 rotate-45 border"
            style={{ borderColor: "var(--primary-color, #8d4e2a)" }}
          ></div>
        </div>

        {/* Main content centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-20">
          {/* Central card */}
          <div 
            className="text-center p-16 rounded-lg border shadow-sm max-w-4xl w-full"
            style={{ 
              background: "var(--card-color, rgba(255, 250, 240, 0.85))",
              borderColor: "var(--stroke, rgba(141, 78, 42, 0.15))"
            }}
          >
            {/* Main title */}
            <h1 
              className="text-6xl font-bold mb-8 tracking-wide"
              style={{ 
                color: "var(--primary-color, #8d4e2a)",
                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
              }}
            >
              {title}
            </h1>

            {/* Decorative divider with diamond */}
            <div className="flex items-center justify-center mb-8">
              <div 
                className="flex-1 h-px max-w-20"
                style={{ background: "var(--stroke, rgba(141, 78, 42, 0.2))" }}
              ></div>
              <div 
                className="w-2 h-2 rotate-45 mx-4 border"
                style={{ borderColor: "var(--primary-color, #8d4e2a)" }}
              ></div>
              <div 
                className="flex-1 h-px max-w-20"
                style={{ background: "var(--stroke, rgba(141, 78, 42, 0.2))" }}
              ></div>
            </div>

            {/* Subtitle */}
            <h2 
              className="text-2xl font-semibold mb-12"
              style={{ 
                color: "var(--background-text, #2d1a0e)",
                fontFamily: "var(--body-font-family, Libre Baskerville)"
              }}
            >
              {subtitle}
            </h2>

            {/* Contact information */}
            <div 
              className="text-lg font-medium"
              style={{ 
                color: "var(--primary-color, #8d4e2a)",
                fontFamily: "var(--body-font-family, Libre Baskerville)"
              }}
            >
              {contactInfo}
            </div>
          </div>
        </div>

        {/* Decorative accent lines */}
        <div className="absolute bottom-16 left-16 opacity-30">
          <div 
            className="w-24 h-px mb-2"
            style={{ background: "var(--primary-color, #8d4e2a)" }}
          ></div>
          <div 
            className="w-16 h-px"
            style={{ background: "var(--primary-color, #8d4e2a)" }}
          ></div>
        </div>

        <div className="absolute bottom-16 right-16 opacity-30">
          <div 
            className="w-24 h-px mb-2 ml-auto"
            style={{ background: "var(--primary-color, #8d4e2a)" }}
          ></div>
          <div 
            className="w-16 h-px ml-auto"
            style={{ background: "var(--primary-color, #8d4e2a)" }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default TerracottaClosingSlide