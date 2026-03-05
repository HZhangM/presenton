import React from 'react'
import * as z from 'zod'

export const layoutId = "coral-reef-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You!"),
  subtitle: z.string().min(1).max(100).default("Ready to dive deeper into your next project?"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | www.company.com | (555) 123-4567")
})

const CoralReefClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Comfortaa)" }}>
        
        {/* Top Logo/Company Header */}
        <div className="absolute top-6 left-6 z-30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ background: "var(--primary-color, #ff6b6b)" }}></div>
            <span className="text-lg font-semibold" style={{ color: "var(--background-text, #2d3436)" }}>Company</span>
          </div>
        </div>

        {/* Decorative coral blob - top right */}
        <div 
          className="absolute top-16 right-12 w-32 h-24 rounded-full opacity-10 z-10"
          style={{ 
            background: "var(--primary-color, #ff6b6b)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
          }}
        ></div>

        {/* Decorative teal blob - bottom left */}
        <div 
          className="absolute bottom-20 left-16 w-28 h-20 rounded-full opacity-15 z-10"
          style={{ 
            background: "#00b894",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
          }}
        ></div>

        {/* Main Content Container - Centered */}
        <div className="flex flex-col items-center justify-center h-full px-16 relative z-20">
          
          {/* Main Card */}
          <div 
            className="text-center p-12 max-w-4xl"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "24px",
              backdropFilter: "blur(10px)"
            }}
          >
            
            {/* Title */}
            <h1 
              className="text-6xl font-bold mb-6"
              style={{ 
                color: "var(--primary-color, #ff6b6b)",
                fontFamily: "var(--heading-font-family, Comfortaa)"
              }}
            >
              {title}
            </h1>

            {/* Decorative wavy divider */}
            <div className="flex justify-center mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" className="opacity-60">
                <path 
                  d="M0 4 Q30 0 60 4 T120 4" 
                  stroke="var(--primary-color, #ff6b6b)" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </div>

            {/* Subtitle */}
            <p 
              className="text-2xl mb-8"
              style={{ 
                color: "var(--background-text, #2d3436)",
                fontFamily: "var(--body-font-family, Rubik)"
              }}
            >
              {subtitle}
            </p>

            {/* Contact Info */}
            <div 
              className="inline-block px-8 py-4 rounded-full"
              style={{
                background: "var(--primary-color, #ff6b6b)",
                color: "var(--primary-text, #ffffff)"
              }}
            >
              <p 
                className="text-lg font-medium"
                style={{ fontFamily: "var(--body-font-family, Rubik)" }}
              >
                {contactInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Small decorative coral elements */}
        <div 
          className="absolute top-1/3 left-8 w-4 h-4 rounded-full opacity-20"
          style={{ background: "#00b894" }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-8 w-6 h-6 rounded-full opacity-20"
          style={{ background: "var(--primary-color, #ff6b6b)" }}
        ></div>
      </div>
    </>
  )
}

export default CoralReefClosingSlide