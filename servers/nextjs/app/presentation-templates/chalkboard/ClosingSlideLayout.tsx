import React from 'react'
import * as z from "zod"

export const layoutId = "chalkboard-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide."

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You!"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's continue the conversation"),
  contactInfo: z.string().min(10).max(100).default("email@company.com | @company | company.com")
})

const ChalkboardClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Caveat)" 
        }}
      >
        {/* Decorative chalk dust dots */}
        <div 
          className="absolute top-16 left-20 w-3 h-3 rounded-full opacity-20"
          style={{ background: "var(--background-text, #e8e8d0)" }}
        />
        <div 
          className="absolute top-32 right-24 w-2 h-2 rounded-full opacity-15"
          style={{ background: "var(--background-text, #e8e8d0)" }}
        />
        <div 
          className="absolute bottom-40 left-32 w-2 h-2 rounded-full opacity-25"
          style={{ background: "var(--background-text, #e8e8d0)" }}
        />

        {/* Chalk star decoration */}
        <div 
          className="absolute top-24 right-32 text-4xl opacity-30"
          style={{ 
            color: "var(--primary-color, #f2c94c)",
            fontFamily: "var(--heading-font-family, Caveat)",
            transform: "rotate(15deg)"
          }}
        >
          ★
        </div>

        {/* Company header */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded border-2 flex items-center justify-center text-lg font-bold"
              style={{ 
                borderColor: "var(--primary-color, #f2c94c)",
                color: "var(--primary-color, #f2c94c)"
              }}
            >
              C
            </div>
            <span 
              className="text-lg font-bold"
              style={{ color: "var(--background-text, #e8e8d0)" }}
            >
              Company Name
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center h-full px-16 pb-16">
          {/* Title with hand-drawn underline */}
          <div className="text-center mb-8">
            <h1 
              className="text-8xl font-bold mb-4 relative"
              style={{ 
                color: "var(--primary-color, #f2c94c)",
                fontFamily: "var(--heading-font-family, Caveat)"
              }}
            >
              {title}
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 opacity-60"
                style={{
                  background: "var(--primary-color, #f2c94c)",
                  borderRadius: "50% 50% 50% 50% / 100% 100% 0% 0%"
                }}
              />
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            className="text-center mb-12 text-3xl max-w-3xl"
            style={{ 
              color: "var(--background-text, #e8e8d0)",
              fontFamily: "var(--body-font-family, 'Patrick Hand')"
            }}
          >
            {subtitle}
          </div>

          {/* Contact card */}
          <div 
            className="px-12 py-8 text-center"
            style={{
              border: "1px dashed rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "4px"
            }}
          >
            <div 
              className="text-2xl"
              style={{ 
                color: "var(--background-text, #e8e8d0)",
                fontFamily: "var(--body-font-family, 'Patrick Hand')"
              }}
            >
              {contactInfo}
            </div>
          </div>

          {/* Decorative dashed line */}
          <div 
            className="mt-8 w-64 h-px opacity-30"
            style={{
              background: "repeating-linear-gradient(to right, var(--background-text, #e8e8d0) 0, var(--background-text, #e8e8d0) 8px, transparent 8px, transparent 16px)"
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ChalkboardClosingSlide