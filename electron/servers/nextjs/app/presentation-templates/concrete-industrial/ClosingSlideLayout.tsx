import React from 'react'
import * as z from "zod"

export const layoutId = "concrete-industrial-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with industrial concrete styling"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("THANK YOU"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's discuss your next industrial project"),
  contactInfo: z.string().min(10).max(100).default("contact@company.com | +1 (555) 123-4567 | www.company.com")
})

const ConcreteIndustrialClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bebas Neue)" }}>
        
        {/* Company Header Block */}
        <div className="absolute top-0 left-0 right-0 h-16 flex items-center px-8" style={{ background: "var(--card-color, rgba(255,255,255,0.85))", borderLeft: "4px solid var(--primary-color, #ff6d00)", boxShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--primary-color, #ff6d00)", color: "var(--primary-text, #ffffff)" }}>
              <span style={{ fontFamily: "var(--heading-font-family, Bebas Neue)", fontSize: "18px", fontWeight: "bold" }}>C</span>
            </div>
            <span style={{ fontFamily: "var(--heading-font-family, Bebas Neue)", fontSize: "24px", color: "var(--background-text, #1a1a1a)", letterSpacing: "2px" }}>COMPANY</span>
          </div>
        </div>

        {/* Decorative Hazard Stripe */}
        <div className="absolute top-16 left-0 h-2 w-full" style={{ background: "repeating-linear-gradient(45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 10px, transparent 10px, transparent 20px)", opacity: 0.8 }}></div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full pt-20 pb-16 px-8">
          
          {/* Title */}
          <div className="text-center mb-12">
            <h1 style={{ 
              fontFamily: "var(--heading-font-family, Bebas Neue)", 
              fontSize: "128px", 
              fontWeight: "bold",
              color: "var(--background-text, #1a1a1a)",
              textShadow: "4px 4px 0 rgba(0,0,0,0.1)",
              letterSpacing: "8px",
              lineHeight: "0.9"
            }}>
              {title.toUpperCase()}
            </h1>
            <div className="w-32 h-1 mx-auto mt-6" style={{ background: "var(--primary-color, #ff6d00)" }}></div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-16 max-w-3xl">
            <p style={{
              fontFamily: "var(--body-font-family, Roboto Condensed)",
              fontSize: "32px",
              fontWeight: "400",
              color: "var(--background-text, #1a1a1a)",
              lineHeight: "1.3"
            }}>
              {subtitle}
            </p>
          </div>

          {/* Contact Info Card */}
          <div className="w-full max-w-2xl" style={{ 
            background: "rgba(255,255,255,0.9)", 
            borderLeft: "4px solid var(--primary-color, #ff6d00)", 
            borderRadius: "0", 
            boxShadow: "2px 2px 0 rgba(0,0,0,0.1)",
            padding: "32px"
          }}>
            <div className="text-center">
              <div className="mb-4">
                <span style={{
                  fontFamily: "var(--heading-font-family, Bebas Neue)",
                  fontSize: "20px",
                  color: "var(--primary-color, #ff6d00)",
                  letterSpacing: "2px",
                  fontWeight: "bold"
                }}>
                  CONTACT INFORMATION
                </span>
              </div>
              <p style={{
                fontFamily: "var(--body-font-family, Roboto Condensed)",
                fontSize: "24px",
                fontWeight: "500",
                color: "var(--background-text, #1a1a1a)",
                lineHeight: "1.4"
              }}>
                {contactInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Steel Beam Element */}
        <div className="absolute bottom-0 right-0 w-48 h-2" style={{ 
          background: "linear-gradient(90deg, transparent, var(--stroke, rgba(0,0,0,0.15)))",
          opacity: 0.6
        }}></div>

        {/* Decorative Corner Element */}
        <div className="absolute bottom-0 right-0 w-4 h-16" style={{ 
          background: "var(--primary-color, #ff6d00)",
          opacity: 0.8
        }}></div>

      </div>
    </>
  )
}

export default ConcreteIndustrialClosingSlide