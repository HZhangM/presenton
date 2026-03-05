import React from 'react'
import * as z from 'zod'

export const layoutId = "dark-academia-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("professor@university.edu | Department of Philosophy")
})

const DarkAcademiaClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex flex-col"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Spectral)"
        }}
      >
        {/* Company Logo/Name Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--stroke, rgba(200, 168, 130, 0.25))" }}>
          <div className="text-sm font-medium" style={{ color: "var(--primary-color, #c8a882)" }}>
            Academia Presentation
          </div>
          <div className="text-xs" style={{ color: "var(--background-text, #e8dcc8)", opacity: 0.7 }}>
            Scholarly Research & Discussion
          </div>
        </div>

        {/* Main Content Area - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          
          {/* Decorative Top Ornament */}
          <div className="mb-8 opacity-30">
            <div 
              className="text-2xl"
              style={{ color: "var(--primary-color, #c8a882)" }}
            >
              ❦
            </div>
          </div>

          {/* Title */}
          <h1 
            className="text-6xl font-bold mb-6 leading-tight"
            style={{ 
              color: "var(--background-text, #e8dcc8)",
              fontFamily: "var(--heading-font-family, Spectral)"
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl font-medium mb-8 max-w-3xl"
            style={{ 
              color: "var(--primary-color, #c8a882)",
              fontFamily: "var(--body-font-family, Spectral)"
            }}
          >
            {subtitle}
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center mb-8 w-64">
            <div 
              className="flex-1 h-px"
              style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
            ></div>
            <div 
              className="mx-4 text-lg opacity-60"
              style={{ color: "var(--primary-color, #c8a882)" }}
            >
              ◊
            </div>
            <div 
              className="flex-1 h-px"
              style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
            ></div>
          </div>

          {/* Contact Info */}
          <div 
            className="text-base font-medium tracking-wide"
            style={{ 
              color: "var(--background-text, #e8dcc8)",
              fontFamily: "var(--body-font-family, Spectral)",
              opacity: 0.9
            }}
          >
            {contactInfo}
          </div>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="absolute bottom-8 left-8 opacity-20">
          <div 
            className="text-sm italic"
            style={{ color: "var(--primary-color, #c8a882)" }}
          >
            "Knowledge is power"
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 opacity-20">
          <div 
            className="text-lg"
            style={{ color: "var(--primary-color, #c8a882)" }}
          >
            ⚜
          </div>
        </div>
      </div>
    </>
  )
}

export default DarkAcademiaClosingSlide