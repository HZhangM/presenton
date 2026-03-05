import React from 'react'
import * as z from "zod"

export const layoutId = "dark-corporate-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Let's continue the conversation and drive results together"),
  contactInfo: z.string().min(10).max(100).default("contact@company.com | +1 (555) 123-4567 | company.com")
})

const DarkCorporateClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Inter)" }}>
        
        {/* Decorative elements */}
        <div 
          className="absolute top-20 right-20 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, var(--primary-color, #6366f1) 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute bottom-32 left-16 w-2 h-32 opacity-30 pointer-events-none"
          style={{ background: `var(--primary-color, #6366f1)` }}
        />

        {/* Header */}
        <div className="absolute top-6 left-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #6366f1)" }}></div>
          <span className="text-lg font-semibold" style={{ color: "var(--background-text, #e5e7eb)" }}>Company</span>
        </div>

        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          
          {/* Main title */}
          <h1 
            className="text-8xl font-bold mb-8 text-center"
            style={{ 
              color: "var(--primary-color, #6366f1)",
              fontFamily: "var(--heading-font-family, Inter)"
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl font-medium text-center mb-16 max-w-4xl leading-relaxed"
            style={{ 
              color: "var(--background-text, #e5e7eb)",
              fontFamily: "var(--body-font-family, Inter)"
            }}
          >
            {subtitle}
          </p>

          {/* Contact card */}
          <div 
            className="px-12 py-8 rounded-lg border text-center relative"
            style={{ 
              background: "var(--card-color, rgba(99, 102, 241, 0.08))",
              borderColor: "var(--stroke, rgba(99, 102, 241, 0.2))"
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg" style={{ background: "var(--primary-color, #6366f1)" }}></div>
            <p 
              className="text-xl font-medium"
              style={{ 
                color: "var(--background-text, #e5e7eb)",
                fontFamily: "var(--body-font-family, Inter)"
              }}
            >
              {contactInfo}
            </p>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: "var(--primary-color, #6366f1)" }}
        />
      </div>
    </>
  )
}

export default DarkCorporateClosingSlide