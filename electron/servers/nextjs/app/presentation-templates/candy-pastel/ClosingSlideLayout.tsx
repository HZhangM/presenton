import React from 'react'
import * as z from 'zod'

export const layoutId = "candy-pastel-closing-slide"
export const layoutName = "Closing Slide"
export const layoutDescription = "A thank-you or call-to-action ending slide"

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You!"),
  subtitle: z.string().min(10).max(100).default("Let's connect and create something amazing together"),
  contactInfo: z.string().min(10).max(100).default("hello@company.com • www.company.com • @company")
})

const CandyPastelClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Fredoka)" }}>
        
        {/* Header with Company Logo/Name */}
        <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--primary-color, #ab47bc)" }}>
            <span className="text-lg font-bold" style={{ color: "var(--primary-text, #ffffff)" }}>C</span>
          </div>
          <span className="text-lg font-semibold" style={{ color: "var(--background-text, #4a3560)" }}>Company</span>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-16 right-24 w-16 h-16 rounded-full opacity-20" style={{ background: "linear-gradient(135deg, #ab47bc, #ff9ccc)" }}></div>
        <div className="absolute bottom-24 left-32 w-12 h-12 rounded-full opacity-15" style={{ background: "linear-gradient(135deg, #81c784, #ffeb3b)" }}></div>
        <div className="absolute top-32 right-64 w-8 h-8 rounded-full opacity-25" style={{ background: "linear-gradient(135deg, #64b5f6, #ba68c8)" }}></div>
        
        {/* Star Decorations */}
        <div className="absolute top-48 left-24 text-2xl opacity-30" style={{ color: "var(--primary-color, #ab47bc)" }}>✨</div>
        <div className="absolute bottom-32 right-32 text-xl opacity-25" style={{ color: "#ff9ccc" }}>💫</div>

        {/* Main Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
          
          {/* Main Card */}
          <div className="text-center p-12 max-w-4xl" style={{
            background: "rgba(255,255,255,0.65)",
            border: "2px solid rgba(171,71,188,0.12)",
            borderRadius: "32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
          }}>
            
            {/* Title */}
            <h1 className="text-7xl font-bold mb-6" style={{
              color: "var(--primary-color, #ab47bc)",
              fontFamily: "var(--heading-font-family, Fredoka)",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl font-medium mb-8" style={{
              color: "var(--background-text, #4a3560)",
              fontFamily: "var(--body-font-family, Quicksand)"
            }}>
              {subtitle}
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 rounded-full" style={{ background: "var(--primary-color, #ab47bc)", opacity: "0.3" }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary-color, #ab47bc)", opacity: "0.5" }}></div>
              <div className="w-16 h-1 rounded-full" style={{ background: "var(--primary-color, #ab47bc)", opacity: "0.3" }}></div>
            </div>

            {/* Contact Info Card */}
            <div className="inline-block px-8 py-4 rounded-full" style={{
              background: "rgba(255,255,255,0.8)",
              border: "2px solid rgba(171,71,188,0.15)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
              <p className="text-lg font-semibold" style={{
                color: "var(--background-text, #4a3560)",
                fontFamily: "var(--body-font-family, Quicksand)"
              }}>
                {contactInfo}
              </p>
            </div>
            
          </div>
          
        </div>

        {/* Bottom Accent Pills */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          <div className="px-4 py-2 rounded-full text-sm font-medium" style={{
            background: "linear-gradient(135deg, #ab47bc, #ba68c8)",
            color: "var(--primary-text, #ffffff)"
          }}>
            Stay Connected
          </div>
          <div className="px-4 py-2 rounded-full text-sm font-medium" style={{
            background: "linear-gradient(135deg, #81c784, #a5d6a7)",
            color: "var(--primary-text, #ffffff)"
          }}>
            Let's Collaborate
          </div>
        </div>

      </div>
    </>
  )
}

export default CandyPastelClosingSlide