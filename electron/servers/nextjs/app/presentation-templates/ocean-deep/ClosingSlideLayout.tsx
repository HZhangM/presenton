import React from 'react'
import * as z from 'zod'

export const layoutId = "ocean-deep-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's continue the conversation and explore new possibilities together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | www.company.com | @company")
})

const OceanDeepClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Raleway)" }}>
        
        {/* Header with logo/company */}
        <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
          <div className="w-8 h-8 rounded-full" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
          <span className="text-lg font-semibold" style={{ color: "var(--background-text, #c8e0f0)" }}>Company</span>
        </div>

        {/* Decorative wave element */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 z-0">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path 
              d="M0,100 Q100,50 200,100 T400,100 L400,0 L0,0 Z" 
              fill="var(--primary-color, #00bcd4)"
            />
            <path 
              d="M0,150 Q150,100 300,150 T400,150 L400,50 L0,50 Z" 
              fill="var(--primary-color, #00bcd4)"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Floating bubbles */}
        <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full opacity-5 z-0" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
        <div className="absolute bottom-40 left-32 w-8 h-8 rounded-full opacity-8 z-0" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
        <div className="absolute top-32 right-32 w-12 h-12 rounded-full opacity-6 z-0" style={{ background: "var(--primary-color, #00bcd4)" }}></div>

        {/* Main content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center z-10">
          
          {/* Title */}
          <h1 
            className="text-7xl font-bold mb-8 tracking-tight"
            style={{ 
              color: "var(--background-text, #c8e0f0)",
              fontFamily: "var(--heading-font-family, Raleway)"
            }}
          >
            {title}
          </h1>

          {/* Decorative wave divider */}
          <div className="mb-8">
            <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-40">
              <path 
                d="M0,10 Q50,5 100,10 T200,10" 
                stroke="var(--primary-color, #00bcd4)" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p 
            className="text-2xl font-medium mb-12 leading-relaxed max-w-4xl"
            style={{ 
              color: "var(--background-text, #c8e0f0)",
              fontFamily: "var(--body-font-family, Open Sans)",
              opacity: "0.9"
            }}
          >
            {subtitle}
          </p>

          {/* Contact info card */}
          <div 
            className="px-12 py-8 rounded-2xl backdrop-blur-lg"
            style={{
              border: "1px solid rgba(0,188,212,0.15)",
              background: "rgba(0,188,212,0.06)",
              borderRadius: "16px",
              backdropFilter: "blur(8px)"
            }}
          >
            <p 
              className="text-xl font-medium"
              style={{ 
                color: "var(--primary-color, #00bcd4)",
                fontFamily: "var(--body-font-family, Open Sans)"
              }}
            >
              {contactInfo}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OceanDeepClosingSlide