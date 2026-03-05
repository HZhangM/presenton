import React from 'react'
import * as z from "zod"

export const layoutId = "sunset-warm-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's build something amazing together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | (555) 123-4567 | company.com")
})

const SunsetWarmClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Nunito)" }}>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{ background: "radial-gradient(circle, var(--primary-color, #e65100), transparent)" }}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-15" style={{ background: "radial-gradient(circle, var(--primary-color, #e65100), transparent)" }}></div>

        {/* Header */}
        <div className="absolute top-6 left-6 z-30">
          <div className="text-lg font-bold" style={{ color: "var(--primary-color, #e65100)" }}>
            Your Company
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          
          {/* Central Card */}
          <div className="text-center p-12 max-w-4xl w-full" style={{ 
            background: "rgba(255,255,255,0.55)", 
            backdropFilter: "blur(12px)", 
            border: "1px solid rgba(255,255,255,0.4)", 
            borderRadius: "20px", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)" 
          }}>
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-6" style={{ 
              color: "var(--background-text, #3d1e00)",
              fontFamily: "var(--heading-font-family, Nunito)"
            }}>
              {title}
            </h1>

            {/* Divider */}
            <div className="w-32 h-1 mx-auto mb-8" style={{
              background: "linear-gradient(90deg, transparent, var(--primary-color, #e65100), transparent)",
              borderRadius: "2px"
            }}></div>

            {/* Subtitle */}
            <p className="text-2xl mb-12" style={{ 
              color: "var(--background-text, #3d1e00)",
              fontFamily: "var(--body-font-family, 'Nunito Sans')",
              fontWeight: "500"
            }}>
              {subtitle}
            </p>

            {/* Contact Info */}
            <div className="inline-block px-8 py-4" style={{ 
              background: "var(--primary-color, #e65100)", 
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(230, 81, 0, 0.3)"
            }}>
              <p className="text-lg font-semibold" style={{ 
                color: "var(--primary-text, #ffffff)",
                fontFamily: "var(--body-font-family, 'Nunito Sans')"
              }}>
                {contactInfo}
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default SunsetWarmClosingSlide