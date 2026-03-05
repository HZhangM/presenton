import React from 'react'
import * as z from "zod"

export const layoutId = "copper-patina-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | +1 (555) 123-4567")
})

const CopperPatinaClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title = "Thank You", subtitle = "Questions & Discussion", contactInfo = "contact@company.com | +1 (555) 123-4567" } = data

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Abril Fatface)" }}>
        
        {/* Company Logo/Name Header */}
        <div className="absolute top-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
              <span className="text-lg font-medium" style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: "var(--body-font-family, Fira Sans)" }}>Your Company</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--stroke, rgba(184, 115, 51, 0.25))" }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--stroke, rgba(184, 115, 51, 0.25))" }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--stroke, rgba(184, 115, 51, 0.25))" }}></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-16 w-24 h-24 opacity-10">
          <div className="w-full h-full border-2 rounded-lg transform rotate-45" style={{ borderColor: "var(--primary-color, #b87333)" }}>
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-12 w-16 h-px opacity-20" style={{ background: "var(--primary-color, #b87333)" }}></div>

        {/* Main Content - Centered */}
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="text-center max-w-4xl">
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-6" style={{ color: "var(--primary-color, #b87333)", fontFamily: "var(--heading-font-family, Abril Fatface)" }}>
              {title}
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
              <div className="w-24 h-px mx-4" style={{ background: "var(--primary-color, #b87333)" }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary-color, #b87333)" }}></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl mb-8" style={{ color: "var(--background-text, #f0e8d8)", fontFamily: "var(--body-font-family, Fira Sans)", fontWeight: "400" }}>
              {subtitle}
            </h2>

            {/* Contact Info Card */}
            <div className="inline-block px-8 py-4 border-radius-6" style={{ 
              background: "var(--card-color, rgba(255, 245, 230, 0.8))",
              border: "1px solid var(--stroke, rgba(184, 115, 51, 0.25))",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}>
              <p className="text-lg font-medium" style={{ color: "var(--primary-text, #1a1a1a)", fontFamily: "var(--body-font-family, Fira Sans)" }}>
                {contactInfo}
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default CopperPatinaClosingSlide