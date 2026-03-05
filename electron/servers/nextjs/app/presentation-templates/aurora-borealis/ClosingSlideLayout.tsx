import React from 'react'
import * as z from 'zod'

export const layoutId = "aurora-borealis-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with aurora borealis theme"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's create something extraordinary together"),
  contactInfo: z.string().min(1).max(100).default("contact@yourcompany.com • +1 (555) 123-4567")
})

const AuroraBorealisClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Poppins)" 
        }}
      >
        {/* Decorative Aurora Effect */}
        <div 
          className="absolute top-0 left-0 w-full h-32 opacity-20 z-10"
          style={{
            background: "linear-gradient(135deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.6) 100%)",
            filter: "blur(40px)"
          }}
        />
        
        {/* Flowing Curves */}
        <svg 
          className="absolute bottom-0 right-0 w-96 h-64 opacity-10" 
          viewBox="0 0 400 300"
        >
          <path 
            d="M0,150 Q100,50 200,120 T400,100 L400,300 L0,300 Z" 
            fill="var(--primary-color, #4ecca3)"
          />
        </svg>

        {/* Header */}
        <div className="absolute top-4 left-4 flex items-center gap-3 z-30">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--primary-color, #4ecca3)" }}>
            <span className="text-sm font-bold" style={{ color: "var(--primary-text, #0a1a2a)" }}>
              L
            </span>
          </div>
          <span className="text-sm font-medium" style={{ color: "var(--background-text, #d0e8e0)" }}>
            Your Company
          </span>
        </div>

        {/* Main Content - Centered */}
        <div className="h-full flex flex-col items-center justify-center text-center px-8 relative z-20">
          <div className="max-w-4xl">
            {/* Title */}
            <h1 
              className="text-6xl font-bold mb-6"
              style={{ 
                color: "var(--background-text, #d0e8e0)",
                textShadow: "0 2px 20px rgba(78, 204, 163, 0.3)"
              }}
            >
              {title}
            </h1>

            {/* Gradient Divider */}
            <div 
              className="w-32 h-1 mx-auto mb-8 rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(147, 51, 234, 0.8) 100%)"
              }}
            />

            {/* Subtitle */}
            <p 
              className="text-2xl font-medium mb-12"
              style={{ 
                color: "var(--background-text, #d0e8e0)",
                fontFamily: "var(--body-font-family, 'Nunito Sans')",
                opacity: 0.9
              }}
            >
              {subtitle}
            </p>

            {/* Contact Info Card */}
            <div 
              className="inline-block px-8 py-4 rounded-2xl"
              style={{
                border: "1px solid rgba(78,204,163,0.15)",
                background: "rgba(78,204,163,0.06)",
                backdropFilter: "blur(10px)"
              }}
            >
              <p 
                className="text-lg font-medium"
                style={{ 
                  color: "var(--primary-color, #4ecca3)",
                  fontFamily: "var(--body-font-family, 'Nunito Sans')"
                }}
              >
                {contactInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div 
          className="absolute top-1/4 left-1/3 w-64 h-2 opacity-30 transform -rotate-12"
          style={{
            background: "linear-gradient(90deg, transparent 0%, var(--primary-color, #4ecca3) 50%, transparent 100%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    </>
  )
}

export default AuroraBorealisClosingSlide