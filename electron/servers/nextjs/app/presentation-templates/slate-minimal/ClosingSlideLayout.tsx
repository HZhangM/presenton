import React from 'react'
import * as z from "zod"

const layoutId = "slate-minimal-closing-slide"
const layoutName = "Closing Slide"
const layoutDescription = "A thank-you or call-to-action ending slide"

const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions? Let's connect and continue the conversation."),
  contactInfo: z.string().min(1).max(100).default("contact@company.com • linkedin.com/company/yourcompany")
})

const SlateMinimalClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const {
    title = "Thank You",
    subtitle = "Questions? Let's connect and continue the conversation.",
    contactInfo = "contact@company.com • linkedin.com/company/yourcompany"
  } = data

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Inter)" 
        }}
      >
        {/* Header with company branding */}
        <div className="absolute top-0 left-0 right-0 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ background: "var(--primary-color, #3b82f6)" }}
              />
              <span 
                className="font-medium text-sm"
                style={{ color: "var(--background-text, #1e293b)" }}
              >
                Your Company
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute top-20 right-12 w-32 h-32 rounded-full opacity-5"
          style={{ background: "var(--primary-color, #3b82f6)" }}
        />
        <div 
          className="absolute bottom-16 left-8 w-1 h-20 opacity-10"
          style={{ background: "var(--primary-color, #3b82f6)" }}
        />

        {/* Main content - centered */}
        <div className="h-full flex items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            {/* Title */}
            <h1 
              className="text-6xl font-bold mb-6"
              style={{ color: "var(--background-text, #1e293b)" }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p 
              className="text-2xl font-medium mb-12 leading-relaxed"
              style={{ color: "var(--background-text, #1e293b)", opacity: 0.8 }}
            >
              {subtitle}
            </p>

            {/* Contact info card */}
            <div 
              className="inline-block px-8 py-4 rounded-lg border"
              style={{
                background: "var(--card-color, rgba(255, 255, 255, 0.95))",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
              }}
            >
              <p 
                className="text-lg font-medium"
                style={{ color: "var(--background-text, #1e293b)" }}
              >
                {contactInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { layoutId, layoutName, layoutDescription, Schema }
export default SlateMinimalClosingSlide