import React from 'react'
import * as z from "zod"

export const layoutId = "art-deco-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's connect and discuss your next project"),
  contactInfo: z.string().min(10).max(100).default("contact@company.com | (555) 123-4567 | linkedin.com/company/yourcompany")
})

const ArtDecoClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Poiret One)" }}>
        
        {/* Art Deco Decorative Elements */}
        <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
          <div className="w-16 h-16" style={{ color: "var(--primary-color, #d4af37)" }}>
            <svg viewBox="0 0 64 64" fill="currentColor">
              <path d="M32 8 L24 24 L32 16 L40 24 Z M16 24 L8 32 L24 32 Z M48 24 L56 32 L40 32 Z M24 40 L32 48 L40 40 L32 56 Z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
          <div className="w-20 h-20" style={{ color: "var(--primary-color, #d4af37)" }}>
            <svg viewBox="0 0 80 80" fill="currentColor">
              <path d="M40 10 L50 30 L40 25 L30 30 Z M20 30 L10 40 L30 40 Z M60 30 L70 40 L50 40 Z M30 50 L40 60 L50 50 L40 70 Z" />
              <rect x="35" y="35" width="10" height="10" />
            </svg>
          </div>
        </div>

        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-12 h-12 pointer-events-none">
          <div className="w-full h-0.5" style={{ background: "var(--primary-color, #d4af37)" }}></div>
          <div className="w-0.5 h-12" style={{ background: "var(--primary-color, #d4af37)" }}></div>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none">
          <div className="w-full h-0.5" style={{ background: "var(--primary-color, #d4af37)" }}></div>
          <div className="w-0.5 h-12 ml-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none">
          <div className="w-0.5 h-12" style={{ background: "var(--primary-color, #d4af37)" }}></div>
          <div className="w-full h-0.5 mt-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 pointer-events-none">
          <div className="w-0.5 h-12 ml-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
          <div className="w-full h-0.5 mt-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
        </div>

        {/* Company Header */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--primary-color, #d4af37)", color: "var(--primary-text, #0a2a2a)" }}>
              <span className="text-sm font-bold">P</span>
            </div>
            <span className="text-sm font-light tracking-widest" style={{ color: "var(--background-text, #e8d8b8)", fontFamily: "var(--body-font-family, Josefin Sans)" }}>
              PRESENTON
            </span>
          </div>
        </div>

        {/* Main Content - Centered */}
        <div className="flex flex-col items-center justify-center h-full px-16 py-20">
          
          {/* Title */}
          <h1 className="text-6xl font-light tracking-wider text-center mb-8" style={{ color: "var(--primary-color, #d4af37)", letterSpacing: "0.2em" }}>
            {title}
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-12" style={{ background: "var(--primary-color, #d4af37)" }}></div>
            <div className="w-3 h-3 rotate-45 border" style={{ borderColor: "var(--primary-color, #d4af37)" }}></div>
            <div className="h-0.5 w-12" style={{ background: "var(--primary-color, #d4af37)" }}></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl font-light text-center mb-12 max-w-3xl leading-relaxed" style={{ color: "var(--background-text, #e8d8b8)", fontFamily: "var(--body-font-family, Josefin Sans)" }}>
            {subtitle}
          </p>

          {/* Contact Card */}
          <div 
            className="px-8 py-6 relative"
            style={{ 
              border: "1px solid rgba(212,175,55,0.25)", 
              background: "rgba(212,175,55,0.04)",
              borderRadius: "0"
            }}
          >
            {/* Card Corner Brackets */}
            <div className="absolute top-2 left-2 w-4 h-4">
              <div className="w-full h-px" style={{ background: "var(--primary-color, #d4af37)" }}></div>
              <div className="w-px h-4" style={{ background: "var(--primary-color, #d4af37)" }}></div>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4">
              <div className="w-full h-px" style={{ background: "var(--primary-color, #d4af37)" }}></div>
              <div className="w-px h-4 ml-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
            </div>
            <div className="absolute bottom-2 left-2 w-4 h-4">
              <div className="w-px h-4" style={{ background: "var(--primary-color, #d4af37)" }}></div>
              <div className="w-full h-px mt-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
            </div>
            <div className="absolute bottom-2 right-2 w-4 h-4">
              <div className="w-px h-4 ml-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
              <div className="w-full h-px mt-auto" style={{ background: "var(--primary-color, #d4af37)" }}></div>
            </div>

            <p className="text-base font-light tracking-wide text-center" style={{ color: "var(--background-text, #e8d8b8)", fontFamily: "var(--body-font-family, Josefin Sans)" }}>
              {contactInfo}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default ArtDecoClosingSlide