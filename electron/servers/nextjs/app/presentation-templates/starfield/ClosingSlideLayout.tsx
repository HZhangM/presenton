import React from 'react'
import * as z from 'zod'

export const layoutId = "starfield-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Ready to explore the infinite possibilities together?"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com • www.company.com • @company")
})

const StarfieldClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Exo 2)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-8 left-8 z-30">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 8px var(--primary-color, #7c4dff)" }}></div>
            <span style={{ color: "var(--primary-text, #ffffff)", fontSize: "18px", fontWeight: "500" }}>Company</span>
          </div>
        </div>

        {/* Decorative star elements */}
        <div className="absolute top-20 right-32 w-1 h-1 rounded-full opacity-60" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 4px var(--primary-color, #7c4dff)" }}></div>
        <div className="absolute top-40 right-48 w-0.5 h-0.5 rounded-full opacity-40" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 2px var(--primary-color, #7c4dff)" }}></div>
        <div className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full opacity-50" style={{ background: "var(--primary-color, #7c4dff)", boxShadow: "0 0 6px var(--primary-color, #7c4dff)" }}></div>

        {/* Orbital curve decoration */}
        <div className="absolute top-1/3 right-16 w-32 h-32 opacity-20" style={{ 
          border: "1px solid var(--primary-color, #7c4dff)", 
          borderRadius: "50%",
          borderTop: "transparent",
          borderLeft: "transparent",
          transform: "rotate(45deg)"
        }}></div>

        {/* Main content container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-12">
            
            {/* Main card */}
            <div className="p-12 rounded-xl" style={{
              border: "1px solid rgba(124,77,255,0.15)",
              background: "rgba(124,77,255,0.06)",
              backdropFilter: "blur(8px)"
            }}>
              
              {/* Title */}
              <h1 className="mb-8" style={{
                fontSize: "4.5rem",
                fontWeight: "700",
                color: "var(--primary-text, #ffffff)",
                textShadow: "0 0 20px var(--primary-color, #7c4dff)",
                letterSpacing: "-0.02em"
              }}>
                {data?.title || "Thank You"}
              </h1>

              {/* Subtitle */}
              <p className="mb-12" style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                color: "var(--background-text, #d0d0f0)",
                lineHeight: "1.6",
                opacity: "0.9"
              }}>
                {data?.subtitle || "Ready to explore the infinite possibilities together?"}
              </p>

              {/* Decorative divider */}
              <div className="mb-8 h-px mx-auto w-64" style={{
                background: "linear-gradient(90deg, transparent 0%, var(--primary-color, #7c4dff) 50%, transparent 100%)",
                opacity: "0.6"
              }}></div>

              {/* Contact info */}
              <div className="text-center">
                <p style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  color: "var(--primary-color, #7c4dff)",
                  letterSpacing: "0.02em"
                }}>
                  {data?.contactInfo || "contact@company.com • www.company.com • @company"}
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Light flare accent */}
        <div className="absolute bottom-16 right-20 w-24 h-24 opacity-10 rounded-full" style={{
          background: "radial-gradient(circle, var(--primary-color, #7c4dff) 0%, transparent 70%)",
          filter: "blur(8px)"
        }}></div>

      </div>
    </>
  )
}

export default StarfieldClosingSlide