import React from 'react';
import * as z from "zod";

const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(5).max(100).default("contact@company.com | @company")
});

export const layoutId = "minimalist-zen-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide.";
export { Schema };

const MinimalistZenClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Noto Serif JP)" }}>
        
        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full border border-current opacity-60" style={{ color: "var(--primary-color, #1a1a1a)" }}></div>
            <span className="text-sm tracking-wide" style={{ color: "var(--background-text, #2d2d2d)", fontFamily: "var(--body-font-family, Noto Sans JP)", fontWeight: "300" }}>Company</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-16">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--primary-color, #1a1a1a)", fontFamily: "var(--heading-font-family, Noto Serif JP)" }}>
              {title}
            </h1>
            <div className="flex justify-center mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}></div>
            </div>
            <p className="text-xl font-light tracking-wide" style={{ color: "var(--background-text, #2d2d2d)", fontFamily: "var(--body-font-family, Noto Sans JP)", fontWeight: "300" }}>
              {subtitle}
            </p>
          </div>

          <div className="mt-16">
            <p className="text-lg tracking-wide" style={{ color: "var(--background-text, #2d2d2d)", fontFamily: "var(--body-font-family, Noto Sans JP)", fontWeight: "400" }}>
              {contactInfo}
            </p>
          </div>
        </div>

        <div className="absolute top-1/3 right-24 w-8 h-8 rounded-full border opacity-20" style={{ borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}></div>
        
        <div className="absolute bottom-32 left-24 w-16 h-px opacity-30" style={{ backgroundColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}></div>

      </div>
    </>
  );
};

export default MinimalistZenClosingSlide;