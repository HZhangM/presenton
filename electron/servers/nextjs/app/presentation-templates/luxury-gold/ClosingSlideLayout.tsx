import React from 'react'
import * as z from "zod"

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />

export const layoutId = "luxury-gold-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with premium luxury gold styling"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("THANK YOU"),
  subtitle: z.string().min(10).max(100).default("For your time and consideration. We look forward to our partnership."),
  contactInfo: z.string().min(10).max(100).default("contact@luxurycorp.com • +1 (555) 123-4567 • luxurycorp.com")
})

const LuxuryGoldClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const {
    title = "THANK YOU",
    subtitle = "For your time and consideration. We look forward to our partnership.",
    contactInfo = "contact@luxurycorp.com • +1 (555) 123-4567 • luxurycorp.com"
  } = data

  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cinzel)" }}>
      {/* Header with company name */}
      <div className="absolute top-6 left-8 z-30">
        <div className="text-lg font-bold tracking-wider" style={{ color: "var(--primary-color, #d4a843)" }}>
          LUXURY CORP
        </div>
      </div>

      {/* Decorative crown ornament - top right */}
      <div className="absolute top-8 right-12 w-8 h-8 opacity-30 z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-color, #d4a843)" strokeWidth="1" className="w-full h-full">
          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26 12,2" />
        </svg>
      </div>

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center h-full px-16">
        
        {/* Decorative top line */}
        <div className="w-32 h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, var(--primary-color, #d4a843), transparent)" }}></div>

        {/* Main title */}
        <h1 className="text-6xl font-black tracking-widest mb-6 text-center" style={{ 
          color: "var(--background-text, #e8d5b0)",
          fontFamily: "var(--heading-font-family, Cinzel)",
          background: `linear-gradient(135deg, var(--primary-color, #d4a843), var(--background-text, #e8d5b0))`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center mb-12 max-w-3xl leading-relaxed" style={{ 
          color: "var(--background-text, #e8d5b0)",
          fontFamily: "var(--body-font-family, 'EB Garamond')"
        }}>
          {subtitle}
        </p>

        {/* Contact card */}
        <div className="px-8 py-6 rounded-sm border-2" style={{ 
          border: "1px solid var(--stroke, rgba(212,168,67,0.3))",
          background: "var(--card-color, rgba(212,168,67,0.06))"
        }}>
          <p className="text-lg text-center font-medium tracking-wide" style={{ 
            color: "var(--primary-color, #d4a843)",
            fontFamily: "var(--body-font-family, 'EB Garamond')"
          }}>
            {contactInfo}
          </p>
        </div>

        {/* Decorative bottom line */}
        <div className="w-32 h-px mt-8" style={{ background: "linear-gradient(90deg, transparent, var(--primary-color, #d4a843), transparent)" }}></div>
      </div>

      {/* Decorative diamond ornament - bottom left */}
      <div className="absolute bottom-8 left-12 w-6 h-6 opacity-20 z-10 transform rotate-45" style={{ 
        border: "1px solid var(--primary-color, #d4a843)",
        background: "transparent"
      }}></div>

      {/* Subtle corner accent lines */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 z-10">
        <div className="absolute bottom-4 right-0 w-16 h-px" style={{ background: "var(--primary-color, #d4a843)" }}></div>
        <div className="absolute bottom-0 right-4 w-px h-16" style={{ background: "var(--primary-color, #d4a843)" }}></div>
      </div>
    </div>
  )
}

export default LuxuryGoldClosingSlide