import React from 'react'
import * as z from 'zod'

export const layoutId = "marble-classic-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with elegant marble styling"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com • +1 (555) 123-4567")
})

const MarbleClassicClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cormorant)" }}>
        
        {/* Company Header */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ background: "var(--primary-color, #4a4a4a)" }}></div>
            <span className="text-lg font-semibold" style={{ color: "var(--background-text, #2a2a2a)", fontFamily: "var(--heading-font-family, Cormorant)" }}>Company</span>
          </div>
          <div className="text-sm" style={{ color: "var(--primary-color, #4a4a4a)", fontFamily: "var(--body-font-family, Montserrat)" }}>
            {new Date().getFullYear()}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 left-16 w-24 h-px opacity-20" style={{ background: "var(--stroke, rgba(0,0,0,0.1))" }}></div>
        <div className="absolute bottom-32 right-16 w-32 h-px opacity-20" style={{ background: "var(--stroke, rgba(0,0,0,0.1))" }}></div>

        {/* Main Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
          
          {/* Title */}
          <h1 className="text-6xl font-bold text-center mb-6" style={{ 
            color: "var(--background-text, #2a2a2a)", 
            fontFamily: "var(--heading-font-family, Cormorant)",
            letterSpacing: "0.02em"
          }}>
            {title}
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(0,0,0,0.1))" }}></div>
            <div className="w-2 h-2 rotate-45" style={{ border: "1px solid var(--stroke, rgba(0,0,0,0.1))" }}></div>
            <div className="w-16 h-px" style={{ background: "var(--stroke, rgba(0,0,0,0.1))" }}></div>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl font-medium text-center mb-8" style={{ 
            color: "var(--primary-color, #4a4a4a)", 
            fontFamily: "var(--heading-font-family, Cormorant)",
            letterSpacing: "0.01em"
          }}>
            {subtitle}
          </h2>

          {/* Contact Info Card */}
          <div className="px-8 py-4 rounded" style={{ 
            background: "var(--card-color, rgba(255,255,255,0.75))",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "4px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)"
          }}>
            <p className="text-base font-medium text-center" style={{ 
              color: "var(--background-text, #2a2a2a)", 
              fontFamily: "var(--body-font-family, Montserrat)"
            }}>
              {contactInfo}
            </p>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default MarbleClassicClosingSlide