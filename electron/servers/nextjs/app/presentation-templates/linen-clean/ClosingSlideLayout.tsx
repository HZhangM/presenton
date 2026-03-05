import React from 'react'
import * as z from 'zod'

export const layoutId = "linen-clean-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("We appreciate your time and look forward to connecting with you"),
  contactInfo: z.string().min(1).max(100).default("hello@company.com | www.company.com | +1 (555) 123-4567")
})

const LinenCleanClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, DM Serif Text)" }}>
        
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full border" style={{ borderColor: "var(--stroke, rgba(140, 120, 81, 0.15))" }}></div>
        <div className="absolute bottom-12 right-12 w-24 h-0.5" style={{ backgroundColor: "var(--primary-color, #8c7851)", opacity: 0.3 }}></div>
        
        {/* Company Header */}
        <div className="absolute top-6 right-6">
          <div className="text-sm font-medium" style={{ color: "var(--primary-color, #8c7851)", fontFamily: "var(--body-font-family, DM Sans)" }}>
            Your Company
          </div>
        </div>
        
        {/* Main Content Container - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-16 py-16">
          
          {/* Main Content */}
          <div className="text-center max-w-4xl">
            
            {/* Title */}
            <h1 className="text-6xl font-normal mb-6" style={{ color: "var(--background-text, #3a3530)" }}>
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--background-text, #3a3530)", fontFamily: "var(--body-font-family, DM Sans)" }}>
              {subtitle}
            </p>
            
            {/* Divider */}
            <div className="w-24 h-0.5 mx-auto mb-8" style={{ backgroundColor: "var(--primary-color, #8c7851)" }}></div>
            
            {/* Contact Info Card */}
            <div className="inline-block px-8 py-4 rounded-xl" style={{ 
              background: "var(--card-color, rgba(255, 255, 255, 0.8))",
              border: "1px solid var(--stroke, rgba(140, 120, 81, 0.15))",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              <p className="text-base font-medium" style={{ color: "var(--primary-color, #8c7851)", fontFamily: "var(--body-font-family, DM Sans)" }}>
                {contactInfo}
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default LinenCleanClosingSlide