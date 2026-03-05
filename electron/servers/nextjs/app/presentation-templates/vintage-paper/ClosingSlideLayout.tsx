import React from 'react'
import * as z from "zod"

export const layoutId = "vintage-paper-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("john.smith@company.com • +1 (555) 123-4567")
})

const VintagePaperClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Playfair Display)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-6 left-6 z-10">
          <div className="text-lg font-bold" style={{ color: "var(--primary-color, #8b4513)", fontFamily: "var(--heading-font-family, Playfair Display)" }}>
            Company Name
          </div>
        </div>

        {/* Decorative corner flourishes */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-20" style={{ color: "var(--primary-color, #8b4513)" }}>
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,50 Q30,20 50,30 Q70,40 80,20 Q70,60 50,70 Q30,80 20,50 Z" />
          </svg>
        </div>

        <div className="absolute bottom-4 left-4 w-24 h-16 opacity-15" style={{ color: "var(--primary-color, #8b4513)" }}>
          <svg viewBox="0 0 120 80" fill="currentColor">
            <path d="M10,40 Q20,10 40,20 Q60,30 80,15 Q100,25 110,40 Q100,55 80,65 Q60,50 40,60 Q20,70 10,40 Z" />
          </svg>
        </div>

        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-16 py-20">
          
          {/* Drop cap style title */}
          <div className="text-center mb-8">
            <h1 className="text-8xl font-black mb-4" style={{ 
              color: "var(--primary-color, #8b4513)", 
              fontFamily: "var(--heading-font-family, Playfair Display)",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
            }}>
              {title}
            </h1>
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center mb-8 w-full max-w-md">
            <div className="flex-1 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
            <div className="mx-4 w-4 h-4" style={{ color: "var(--primary-color, #8b4513)" }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2 L15,9 L22,9 L17,14 L19,22 L12,18 L5,22 L7,14 L2,9 L9,9 Z" />
              </svg>
            </div>
            <div className="flex-1 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-6" style={{ 
              color: "var(--background-text, #3a2e1e)", 
              fontFamily: "var(--heading-font-family, Playfair Display)"
            }}>
              {subtitle}
            </h2>
          </div>

          {/* Contact card */}
          <div className="px-8 py-6 rounded-sm" style={{
            border: "1px solid rgba(139,69,19,0.15)",
            background: "rgba(255,250,240,0.5)",
            borderRadius: "2px"
          }}>
            <p className="text-2xl text-center" style={{ 
              color: "var(--background-text, #3a2e1e)", 
              fontFamily: "var(--body-font-family, Crimson Text)",
              fontWeight: "600"
            }}>
              {contactInfo}
            </p>
          </div>

          {/* Bottom ornamental line */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-px" style={{ background: "var(--stroke, rgba(139, 69, 19, 0.25))" }}></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default VintagePaperClosingSlide