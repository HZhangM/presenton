import React from 'react'
import * as z from "zod"

<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

export const layoutId = "magazine-editorial-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Ready to transform your business? Let's connect and explore new possibilities together."),
  contactInfo: z.string().min(5).max(100).default("contact@company.com | +1 (555) 123-4567 | www.company.com")
})

const MagazineEditorialClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
      
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "var(--background-text, #1a1a1a)" }}></div>
      
      <div className="absolute top-8 left-8 right-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)", fontWeight: "700" }}>
            COMPANY
          </div>
          <div className="text-xs" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)" }}>
            THANK YOU
          </div>
        </div>
        
        <div className="w-full h-[2px] mb-12" style={{ background: "var(--background-text, #1a1a1a)" }}></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
        
        <div className="text-center mb-16">
          <div className="text-8xl font-normal mb-8" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
            {title}
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-2xl leading-relaxed" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)", fontWeight: "400" }}>
              {subtitle}
            </p>
          </div>
          
          <div className="w-24 h-1 mx-auto mb-12" style={{ background: "var(--primary-color, #e53935)" }}></div>
          
          <div className="border-2 border-black bg-white px-8 py-6 inline-block">
            <p className="text-lg font-medium" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)", fontWeight: "500" }}>
              {contactInfo}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="w-full h-[2px] mb-4" style={{ background: "var(--background-text, #1a1a1a)" }}></div>
        <div className="flex items-center justify-between">
          <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)", fontWeight: "700" }}>
            CONNECT WITH US
          </div>
          <div className="text-xs" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--body-font-family, DM Sans)" }}>
            2024
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10">
        <div className="text-[200px] font-normal leading-none" style={{ color: "var(--background-text, #1a1a1a)", fontFamily: "var(--heading-font-family, DM Serif Display)" }}>
          &ldquo;
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "var(--background-text, #1a1a1a)" }}></div>
    </div>
  )
}

export default MagazineEditorialClosingSlide