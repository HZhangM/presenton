import React from 'react'
import * as z from "zod"

export const layoutId = "stained-glass-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's discuss how we can move forward together."),
  contactInfo: z.string().min(10).max(100).default("contact@yourcompany.com | (555) 123-4567 | www.yourcompany.com")
})

const StainedGlassClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Merriweather)" }}>
        
        {/* Company Header */}
        <div className="absolute top-6 left-6 flex items-center gap-3 z-30">
          <div className="w-8 h-8 rounded-sm" style={{ 
            background: "var(--primary-color, #c0392b)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}></div>
          <span className="text-sm font-medium tracking-wide" style={{ 
            color: "var(--background-text, #e8e0d0)",
            fontFamily: "var(--body-font-family, 'Merriweather Sans')"
          }}>
            YOUR COMPANY
          </span>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 opacity-20" style={{ 
          background: "linear-gradient(45deg, #8e44ad, #9b59b6)",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}></div>
        
        <div className="absolute bottom-1/4 right-12 w-20 h-12 opacity-15" style={{ 
          background: "linear-gradient(45deg, #27ae60, #2ecc71)",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}></div>

        {/* Ornamental Cross */}
        <div className="absolute top-20 right-20 opacity-25" style={{ color: "var(--primary-color, #c0392b)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center h-full px-12 py-16">
          
          {/* Central Card */}
          <div className="text-center p-8 rounded-lg max-w-4xl" style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(6px)"
          }}>
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-6" style={{ 
              color: "var(--background-text, #e8e0d0)",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>
              {data.title || Schema.shape.title._def.defaultValue()}
            </h1>

            {/* Ornamental Divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}></div>
              <div className="mx-4 w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #c0392b)" }}></div>
              <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}></div>
            </div>

            {/* Subtitle */}
            <p className="text-2xl mb-8 leading-relaxed" style={{ 
              color: "var(--background-text, #e8e0d0)",
              fontFamily: "var(--body-font-family, 'Merriweather Sans')",
              opacity: 0.9
            }}>
              {data.subtitle || Schema.shape.subtitle._def.defaultValue()}
            </p>

            {/* Contact Info */}
            <div className="p-4 rounded-lg" style={{
              border: "2px solid rgba(192,57,43,0.25)",
              background: "rgba(192,57,43,0.1)"
            }}>
              <p className="text-lg font-medium" style={{ 
                color: "var(--background-text, #e8e0d0)",
                fontFamily: "var(--body-font-family, 'Merriweather Sans')"
              }}>
                {data.contactInfo || Schema.shape.contactInfo._def.defaultValue()}
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default StainedGlassClosingSlide