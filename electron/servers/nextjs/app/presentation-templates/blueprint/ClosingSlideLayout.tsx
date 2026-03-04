import React from 'react'
import * as z from "zod"

export const layoutId = "blueprint-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with engineering blueprint aesthetics"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's discuss your next engineering project."),
  contactInfo: z.string().min(10).max(100).default("engineering@company.com | +1 (555) 123-4567 | linkedin.com/company/engineering")
})

const BlueprintClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, JetBrains Mono)" }}>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(var(--stroke, rgba(77,171,247,0.35)) 1px, transparent 1px),
            linear-gradient(90deg, var(--stroke, rgba(77,171,247,0.35)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Corner Crosshairs */}
        <div className="absolute top-4 left-4 text-2xl" style={{ color: "var(--primary-color, #4dabf7)", opacity: 0.7 }}>+</div>
        <div className="absolute top-4 right-4 text-2xl" style={{ color: "var(--primary-color, #4dabf7)", opacity: 0.7 }}>+</div>
        <div className="absolute bottom-4 left-4 text-2xl" style={{ color: "var(--primary-color, #4dabf7)", opacity: 0.7 }}>+</div>
        <div className="absolute bottom-4 right-4 text-2xl" style={{ color: "var(--primary-color, #4dabf7)", opacity: 0.7 }}>+</div>
        
        {/* Title Block Header */}
        <div className="absolute top-8 left-8 border border-dashed" style={{ 
          borderColor: "var(--stroke, rgba(77,171,247,0.35))",
          background: "var(--card-color, rgba(77,171,247,0.08))",
          borderRadius: "2px"
        }}>
          <div className="px-4 py-2">
            <div className="text-xs uppercase tracking-widest" style={{ 
              color: "var(--primary-text, #0d2137)",
              fontFamily: "var(--body-font-family, IBM Plex Mono)"
            }}>
              PRESENTATION END
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold mb-6" style={{ 
              color: "var(--primary-color, #4dabf7)",
              fontFamily: "var(--heading-font-family, JetBrains Mono)"
            }}>
              {title}
            </h1>
            
            {/* Dimension Line Divider */}
            <div className="relative mb-8">
              <div className="h-px w-96 mx-auto border-t border-dashed" style={{ borderColor: "var(--stroke, rgba(77,171,247,0.35))" }} />
              <div className="absolute left-0 top-0 transform -translate-y-1/2 text-sm" style={{ color: "var(--primary-color, #4dabf7)" }}>◄</div>
              <div className="absolute right-0 top-0 transform -translate-y-1/2 text-sm" style={{ color: "var(--primary-color, #4dabf7)" }}>►</div>
            </div>
            
            <p className="text-2xl leading-relaxed max-w-4xl" style={{ 
              color: "var(--background-text, #c8d8e8)",
              fontFamily: "var(--body-font-family, IBM Plex Mono)"
            }}>
              {subtitle}
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="border border-dashed p-8 max-w-3xl w-full" style={{
            borderColor: "var(--stroke, rgba(77,171,247,0.35))",
            background: "var(--card-color, rgba(77,171,247,0.08))",
            borderRadius: "2px"
          }}>
            <div className="flex items-center mb-4">
              <span className="text-lg mr-3" style={{ color: "var(--primary-color, #4dabf7)" }}>+</span>
              <h3 className="text-sm uppercase tracking-widest font-medium" style={{ 
                color: "var(--primary-text, #0d2137)",
                fontFamily: "var(--heading-font-family, JetBrains Mono)"
              }}>
                CONTACT INFORMATION
              </h3>
            </div>
            <div className="text-lg" style={{ 
              color: "var(--background-text, #c8d8e8)",
              fontFamily: "var(--body-font-family, IBM Plex Mono)"
            }}>
              {contactInfo}
            </div>
          </div>
        </div>

        {/* Technical Annotation */}
        <div className="absolute bottom-8 right-8 text-xs uppercase tracking-wider" style={{ 
          color: "var(--primary-color, #4dabf7)",
          fontFamily: "var(--body-font-family, IBM Plex Mono)",
          opacity: 0.8
        }}>
          REV: FINAL | SCALE: 1:1
        </div>
        
      </div>
    </>
  )
}

export default BlueprintClosingSlide