import React from 'react'
import * as z from 'zod'

export const layoutId = "arctic-ice-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with frosted glass effects"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's continue the conversation"),
  contactInfo: z.string().min(10).max(100).default("contact@company.com | linkedin.com/company/yourcompany")
})

const ArcticIceClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Outfit)" 
        }}
      >
        {/* Header with Company Logo/Name */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-12 z-30">
          <div 
            className="text-lg font-medium"
            style={{ color: "var(--primary-color, #0288d1)" }}
          >
            Your Company
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 opacity-5 transform rotate-12"
          style={{
            background: "linear-gradient(135deg, var(--primary-color, #0288d1), transparent)",
            borderRadius: "50%",
            filter: "blur(40px)"
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 opacity-3"
          style={{
            background: "radial-gradient(circle, var(--primary-color, #0288d1), transparent)",
            filter: "blur(30px)"
          }}
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="text-center p-16 max-w-4xl mx-auto"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Title */}
            <h1 
              className="text-7xl font-light mb-8 leading-tight"
              style={{ 
                color: "var(--background-text, #1a3a50)",
                fontWeight: "300"
              }}
            >
              {data.title || "Thank You"}
            </h1>

            {/* Divider */}
            <div 
              className="w-24 h-px mx-auto mb-8"
              style={{ 
                background: "var(--primary-color, #0288d1)",
                opacity: "0.3"
              }}
            />

            {/* Subtitle */}
            <p 
              className="text-2xl font-light mb-12 leading-relaxed"
              style={{ 
                color: "var(--background-text, #1a3a50)",
                fontWeight: "300"
              }}
            >
              {data.subtitle || "Questions? Let's continue the conversation"}
            </p>

            {/* Contact Info */}
            <div 
              className="text-lg font-normal"
              style={{ 
                color: "var(--primary-color, #0288d1)",
                fontWeight: "400"
              }}
            >
              {data.contactInfo || "contact@company.com | linkedin.com/company/yourcompany"}
            </div>
          </div>
        </div>

        {/* Subtle Accent Lines */}
        <div 
          className="absolute top-1/3 left-0 right-0 h-px opacity-10"
          style={{ background: "var(--primary-color, #0288d1)" }}
        />
        <div 
          className="absolute bottom-1/3 left-0 right-0 h-px opacity-10"
          style={{ background: "var(--primary-color, #0288d1)" }}
        />
      </div>
    </>
  )
}

export default ArcticIceClosingSlide