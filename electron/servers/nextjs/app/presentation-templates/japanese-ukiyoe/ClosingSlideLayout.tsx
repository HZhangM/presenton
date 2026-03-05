import React from 'react'
import * as z from 'zod'

export const layoutId = "japanese-ukiyoe-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide with traditional Japanese woodblock print aesthetic"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Your partnership drives our shared success forward"),
  contactInfo: z.string().min(10).max(100).default("Connect with us at contact@company.com")
})

const JapaneseUkiyoeClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Shippori Mincho)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--primary-color, #c23b22)" }}></div>
            <span className="text-lg font-medium" style={{ color: "var(--background-text, #1a1a3a)", fontFamily: "var(--heading-font-family, Shippori Mincho)" }}>
              Company
            </span>
          </div>
        </div>

        {/* Decorative wave motif */}
        <div className="absolute top-20 right-12 w-32 h-8 opacity-10">
          <svg viewBox="0 0 128 32" className="w-full h-full" style={{ fill: "var(--background-text, #1a1a3a)" }}>
            <path d="M0,16 Q32,8 64,16 T128,16 L128,24 Q96,20 64,24 T0,24 Z" />
          </svg>
        </div>

        {/* Main content centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
          
          {/* Title */}
          <h1 className="text-6xl font-bold text-center mb-6" style={{ color: "var(--background-text, #1a1a3a)", fontFamily: "var(--heading-font-family, Shippori Mincho)" }}>
            {title}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px" style={{ backgroundColor: "var(--stroke, rgba(30, 30, 80, 0.15))" }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary-color, #c23b22)" }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: "var(--stroke, rgba(30, 30, 80, 0.15))" }}></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl text-center mb-8 max-w-2xl leading-relaxed" style={{ color: "var(--background-text, #1a1a3a)", fontFamily: "var(--body-font-family, 'Zen Kaku Gothic New')" }}>
            {subtitle}
          </p>

          {/* Contact info card */}
          <div className="px-8 py-4 rounded" style={{ 
            background: "var(--card-color, rgba(255, 255, 250, 0.7))", 
            border: "1px solid rgba(30,30,80,0.08)",
            borderRadius: "4px"
          }}>
            <p className="text-lg text-center" style={{ color: "var(--background-text, #1a1a3a)", fontFamily: "var(--body-font-family, 'Zen Kaku Gothic New')" }}>
              {contactInfo}
            </p>
          </div>
        </div>

        {/* Decorative hanko seal */}
        <div className="absolute bottom-12 left-12 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--primary-color, #c23b22)" }}>
          <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: "var(--primary-text, #ffffff)" }}></div>
        </div>

      </div>
    </>
  )
}

export default JapaneseUkiyoeClosingSlide