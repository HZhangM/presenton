import React from 'react'
import * as z from "zod"

export const layoutId = "woodgrain-cabin-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with rustic cabin styling"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You!"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's connect and continue the conversation."),
  contactInfo: z.string().min(10).max(100).default("john.doe@company.com | (555) 123-4567 | linkedin.com/in/johndoe")
})

const WoodgrainCabinClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Amatic SC)" }}>
        
        {/* Company Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--primary-color, #d4a76a)" }}>
              <div className="text-lg font-bold" style={{ color: "var(--primary-text, #2a1a0e)" }}>C</div>
            </div>
            <span className="text-lg font-semibold" style={{ color: "var(--background-text, #f5efe6)", fontFamily: "var(--body-font-family, Cabin)" }}>Company</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-8 opacity-20">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color, #d4a76a)" strokeWidth="1">
            <path d="M12 2L2 22h20L12 2z"/>
            <path d="M12 8v6"/>
            <path d="M12 18h.01"/>
          </svg>
        </div>
        
        <div className="absolute bottom-16 right-12 opacity-15">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color, #d4a76a)" strokeWidth="0.8">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        {/* Main Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          
          {/* Main Card */}
          <div className="text-center max-w-4xl" style={{ 
            background: "var(--card-color, rgba(255,250,240,0.9))", 
            border: "1px solid rgba(139,90,43,0.15)", 
            borderRadius: "8px", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "3rem 2rem"
          }}>
            
            {/* Decorative Top Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px" style={{ background: "rgba(139,90,43,0.3)" }}></div>
              <div className="mx-4 w-4 h-4 rotate-45 border" style={{ borderColor: "rgba(139,90,43,0.3)" }}></div>
              <div className="flex-1 h-px" style={{ background: "rgba(139,90,43,0.3)" }}></div>
            </div>

            {/* Title */}
            <h1 className="text-6xl font-bold mb-6" style={{ 
              color: "var(--primary-color, #d4a76a)", 
              fontFamily: "var(--heading-font-family, Amatic SC)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
            }}>
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl mb-8" style={{ 
              color: "var(--primary-text, #2a1a0e)", 
              fontFamily: "var(--body-font-family, Cabin)",
              lineHeight: "1.4"
            }}>
              {subtitle}
            </p>

            {/* Contact Info */}
            <div className="p-4 rounded-lg" style={{ 
              background: "rgba(212,167,106,0.1)",
              border: "1px solid rgba(212,167,106,0.25)"
            }}>
              <p className="text-lg font-medium" style={{ 
                color: "var(--primary-text, #2a1a0e)", 
                fontFamily: "var(--body-font-family, Cabin)"
              }}>
                {contactInfo}
              </p>
            </div>

            {/* Decorative Bottom Line */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex-1 h-px" style={{ background: "rgba(139,90,43,0.3)" }}></div>
              <div className="mx-4 w-4 h-4 rotate-45 border" style={{ borderColor: "rgba(139,90,43,0.3)" }}></div>
              <div className="flex-1 h-px" style={{ background: "rgba(139,90,43,0.3)" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WoodgrainCabinClosingSlide