import React from 'react'
import * as z from "zod"

export const layoutId = "watercolor-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's connect and explore opportunities together"),
  contactInfo: z.string().min(1).max(100).default("hello@company.com | (555) 123-4567 | www.company.com")
})

const WatercolorClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Playfair Display)" }}>
        
        {/* Decorative watercolor blobs */}
        <div 
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full opacity-20"
          style={{ 
            background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)",
            filter: "blur(40px)"
          }}
        />
        <div 
          className="absolute bottom-[-80px] right-[-120px] w-[250px] h-[250px] rounded-full opacity-15"
          style={{ 
            background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 60%)",
            filter: "blur(35px)"
          }}
        />
        
        {/* Header with company logo/name */}
        <div className="absolute top-8 left-8 flex items-center">
          <div 
            className="w-8 h-8 rounded-full mr-3"
            style={{ background: "var(--primary-color, #7c5cbf)" }}
          />
          <span 
            className="text-lg font-medium"
            style={{ 
              color: "var(--background-text, #2d2d3d)",
              fontFamily: "var(--heading-font-family, Playfair Display)"
            }}
          >
            Company
          </span>
        </div>

        {/* Main content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
          
          {/* Main card with glass-morphism effect */}
          <div 
            className="text-center p-16 max-w-4xl mx-auto"
            style={{
              backdropFilter: "blur(12px)",
              background: "var(--card-color, rgba(255, 255, 255, 0.65))",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "24px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)"
            }}
          >
            {/* Title */}
            <h1 
              className="text-7xl font-bold mb-8"
              style={{ 
                color: "var(--primary-color, #7c5cbf)",
                fontFamily: "var(--heading-font-family, Playfair Display)"
              }}
            >
              {data.title || "Thank You"}
            </h1>

            {/* Decorative divider */}
            <div 
              className="w-24 h-px mx-auto mb-8"
              style={{
                background: "linear-gradient(90deg, transparent 0%, var(--stroke, rgba(124, 92, 191, 0.25)) 50%, transparent 100%)"
              }}
            />

            {/* Subtitle */}
            <p 
              className="text-2xl font-medium mb-12 leading-relaxed"
              style={{ 
                color: "var(--background-text, #2d2d3d)",
                fontFamily: "var(--body-font-family, Lora)"
              }}
            >
              {data.subtitle || "Let's connect and explore opportunities together"}
            </p>

            {/* Contact info */}
            <div 
              className="inline-block px-8 py-4 rounded-full"
              style={{
                background: "var(--primary-color, #7c5cbf)",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <p 
                className="text-lg font-medium"
                style={{ 
                  color: "var(--primary-text, #ffffff)",
                  fontFamily: "var(--body-font-family, Lora)"
                }}
              >
                {data.contactInfo || "hello@company.com | (555) 123-4567 | www.company.com"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatercolorClosingSlide