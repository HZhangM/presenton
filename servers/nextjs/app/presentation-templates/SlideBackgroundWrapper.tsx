import React from 'react'

/**
 * SlideBackgroundWrapper
 *
 * Wraps themed slide templates with a background image/pattern layer.
 * Used for template groups that have AI-generated or SVG backgrounds
 * (e.g., chalkboard, watercolor, blueprint).
 *
 * Rendering stack (bottom to top):
 *   Layer 0: Background image/pattern/gradient (from --slide-bg-image or fallback)
 *   Layer 1: Background overlay (semi-transparent tint for readability)
 *   Layer 2: Template component (transparent bg) + content
 *
 * CSS variables consumed:
 *   --slide-bg-image:    url('...') for background image/pattern
 *   --slide-bg-overlay:  rgba(...) for overlay color
 *   --slide-bg-fallback: CSS gradient or color as fallback when no image loaded
 */

interface SlideBackgroundWrapperProps {
    /** The slide template component to render on top of the background */
    children: React.ReactNode
    /** Whether this slide uses a themed background (if false, renders children directly) */
    hasThemedBackground?: boolean
    /** Optional inline style overrides for the background image */
    bgImageStyle?: React.CSSProperties
    /** Optional inline style overrides for the overlay */
    overlayStyle?: React.CSSProperties
}

const SlideBackgroundWrapper: React.FC<SlideBackgroundWrapperProps> = ({
    children,
    hasThemedBackground = false,
    bgImageStyle,
    overlayStyle,
}) => {
    if (!hasThemedBackground) {
        return <>{children}</>
    }

    return (
        <div className="relative w-full max-w-[1280px] max-h-[720px] aspect-video overflow-hidden mx-auto">
            {/* Layer 0: Background image/pattern */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'var(--slide-bg-image, none)',
                    background: 'var(--slide-bg-fallback, transparent)',
                    ...bgImageStyle,
                }}
            />

            {/* Layer 1: Overlay for readability */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    backgroundColor: 'var(--slide-bg-overlay, transparent)',
                    ...overlayStyle,
                }}
            />

            {/* Layer 2: Template content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default SlideBackgroundWrapper

/**
 * Helper: Check if a template group is a themed group that needs background wrapping.
 *
 * Themed groups are those defined in theme_registry.json with background assets.
 * This is a simple client-side check based on known themed group IDs.
 */
const THEMED_GROUPS = new Set([
    'chalkboard',
    'watercolor',
    'blueprint',
    // Add new themed groups here as they are generated
])

export function isThemedGroup(templateGroup: string): boolean {
    return THEMED_GROUPS.has(templateGroup)
}

/**
 * Extract template group from a full layout ID.
 * Layout ID format: "templateGroup:layoutId"
 */
export function getTemplateGroup(layoutId: string): string {
    return layoutId.split(':')[0] || ''
}
