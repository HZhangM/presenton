import React from 'react';
import * as z from 'zod';

export const layoutId = "newspaper-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with classic newspaper styling";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com • www.company.com • (555) 123-4567")
});

const NewspaperClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Unna)" }}>
        
        {/* Header Section */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-16" style={{ borderBottom: '2px solid var(--primary-color, #1a1a1a)' }}>
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold" style={{ color: 'var(--background-text, #1a1a1a)' }}>
              THE BUSINESS HERALD
            </div>
          </div>
          <div className="text-sm" style={{ color: 'var(--background-text, #1a1a1a)', fontFamily: 'var(--body-font-family, "Source Serif 4")' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="absolute inset-0 top-20 flex flex-col items-center justify-center px-16">
          
          {/* Decorative Rule Above Title */}
          <div className="w-96 mb-8">
            <div style={{ height: '4px', background: 'var(--primary-color, #1a1a1a)' }}></div>
            <div style={{ height: '1px', background: 'var(--primary-color, #1a1a1a)', marginTop: '2px' }}></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-7xl font-bold mb-4" style={{ 
              color: 'var(--background-text, #1a1a1a)',
              fontFamily: 'var(--heading-font-family, Unna)',
              lineHeight: '1.1'
            }}>
              {title}
            </h1>
          </div>

          {/* Decorative Flourish */}
          <div className="mb-8 flex items-center space-x-4">
            <div style={{ width: '60px', height: '1px', background: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--primary-color, #1a1a1a)' }}></div>
            <div style={{ width: '60px', height: '1px', background: 'var(--stroke, rgba(0,0,0,0.2))' }}></div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium" style={{ 
              color: 'var(--background-text, #1a1a1a)',
              fontFamily: 'var(--body-font-family, "Source Serif 4")'
            }}>
              {subtitle}
            </h2>
          </div>

          {/* Contact Information Card */}
          <div className="w-full max-w-2xl" style={{ 
            borderTop: '2px solid var(--primary-color, #1a1a1a)',
            borderBottom: '1px solid var(--stroke, rgba(0,0,0,0.2))',
            background: 'transparent',
            padding: '24px 0'
          }}>
            <div className="text-center">
              <div className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ 
                color: 'var(--primary-color, #1a1a1a)',
                fontFamily: 'var(--body-font-family, "Source Serif 4")'
              }}>
                Contact Information
              </div>
              <div className="text-xl" style={{ 
                color: 'var(--background-text, #1a1a1a)',
                fontFamily: 'var(--body-font-family, "Source Serif 4")'
              }}>
                {contactInfo}
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-24 left-8 w-16 h-16 opacity-10">
          <div className="w-full h-1" style={{ background: 'var(--primary-color, #1a1a1a)' }}></div>
          <div className="w-1 h-full absolute top-0 left-0" style={{ background: 'var(--primary-color, #1a1a1a)' }}></div>
        </div>
        
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-10">
          <div className="w-full h-1 absolute bottom-0" style={{ background: 'var(--primary-color, #1a1a1a)' }}></div>
          <div className="w-1 h-full absolute top-0 right-0" style={{ background: 'var(--primary-color, #1a1a1a)' }}></div>
        </div>

      </div>
    </>
  );
};

export default NewspaperClosingSlide;