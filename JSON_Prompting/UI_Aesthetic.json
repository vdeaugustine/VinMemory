{
  "meta": {
    "name": "Calm Premium — App Design Language",
    "version": "1.0",
    "purpose": "Codify an airy, refined aesthetic for any product surface. Use as design-tokens + component specs + acceptance tests.",
    "platforms": ["iOS/SwiftUI", "Android/Compose", "Web/React", "RN/Flutter"]
  },

  "aesthetic": {
    "personality": ["calm", "premium", "minimal", "confident", "warm but modern"],
    "principles": [
      "Whitespace is a feature.",
      "Hierarchy comes from type scale, spacing, and contrast — not borders.",
      "Shapes are rounded and friendly; shadows are soft and realistic.",
      "Icons are crisp and quiet; labels are short.",
      "Motion is subtle and purposeful; nothing bouncy."
    ]
  },

  "tokens": {
    "colors": {
      "base": {
        "background": "#F6F7FB",
        "surface": "#FFFFFF",
        "surface_elevated": "#FFFFFF",
        "overlay_scrim": "rgba(0,0,0,0.25)"
      },
      "text": {
        "primary": "#0F172A",
        "secondary": "#475569",
        "tertiary": "#94A3B8",
        "inverse": "#FFFFFF"
      },
      "accents": {
        "primary": "#3B82F6",
        "secondary": "#111827",
        "positive": "#10B981",
        "warning": "#F59E0B",
        "critical": "#EF4444",
        "chip_bg": "#F1F5F9",
        "divider": "#E5E7EB"
      },
      "dark_mode_overrides": {
        "background": "#0B1020",
        "surface": "#0F1528",
        "surface_elevated": "#141B2E",
        "text_primary": "#E5E7EB",
        "text_secondary": "#B6C0D2",
        "text_tertiary": "#7C8AA6",
        "chip_bg": "#1B2338",
        "divider": "#1E2A44"
      }
    },
    "typography": {
      "display": { "font": "SF Pro Rounded|Inter Rounded|Poppins", "size": 34, "weight": "bold", "tracking": -0.5 },
      "title":   { "font": "SF Pro Display|Inter", "size": 22, "weight": "semibold" },
      "headline":{ "font": "SF Pro Display|Inter", "size": 17, "weight": "semibold" },
      "body":    { "font": "SF Pro Text|Inter", "size": 15, "weight": "regular" },
      "caption": { "font": "SF Pro Text|Inter", "size": 13, "weight": "regular" },
      "dynamic_type": true
    },
    "radii": { "xl": 28, "lg": 20, "md": 14, "sm": 10, "pill": 999 },
    "spacing": { "xs": 4, "sm": 8, "md": 12, "lg": 16, "xl": 20, "xxl": 28, "gutter": 20 },
    "elevation": {
      "card":   { "shadow": "0 10 24 rgba(15,23,42,0.08)" },
      "chip":   { "shadow": "0 4 10 rgba(15,23,42,0.06)" },
      "modal":  { "shadow": "0 20 48 rgba(0,0,0,0.30)" }
    },
    "iconography": {
      "library": ["SF Symbols", "Material Symbols"],
      "sizes": { "sm": 16, "md": 20, "lg": 24, "xl": 28 }
    }
  },

  "motion": {
    "defaults": { "curve": "spring", "response": 0.35, "damping": 0.9, "blend": 0.2 },
    "patterns": {
      "press": "scale 0.99, shadow reduces",
      "reveal": "fade + 8pt upward slide",
      "carousel": "snap paging with light parallax (6–8pt)",
      "toggle": "scale to 1.12 then settle"
    },
    "duration_ms": { "fast": 120, "base": 200, "slow": 300 }
  },

  "accessibility": {
    "min_tap_size": 44,
    "dynamic_type": true,
    "voice_over_rules": [
      "Controls read complete state (e.g., 'Favorited').",
      "Badges read semantic meaning (e.g., '35 percent off')."
    ],
    "contrast": "Meet or exceed WCAG AA; apply image scrims when text overlays photos."
  },

  "imagery": {
    "style": "Natural light, slightly desaturated, clean lines. Avoid heavy filters.",
    "crops": ["16:9", "4:3"], 
    "treatments": ["rounded corners", "subtle gradient scrim for text legibility"]
  },

  "component_primitives": [
    {
      "name": "Card",
      "role": "Primary container for grouped content",
      "props": { "cornerRadius": "radii.xl", "padding": "spacing.lg", "elevation": "elevation.card" },
      "states": ["default", "pressed", "disabled"],
      "content_patterns": [
        "Header image (rounded) with optional corner badge",
        "Title + optional subtitle",
        "Metadata row (chips, rating, price, etc.)",
        "Trailing affordance (chevron, heart, more)"
      ]
    },
    {
      "name": "Badge",
      "role": "Emphasize short status/discount",
      "variants": {
        "highlight": { "bg": "tokens.colors.accents.warning", "fg": "tokens.colors.text.inverse", "shape": "pill", "paddingX": 10, "paddingY": 6 },
        "neutral":   { "bg": "tokens.colors.accents.chip_bg", "fg": "tokens.colors.text.primary" }
      }
    },
    {
      "name": "Chip",
      "role": "Compact icon + label",
      "props": { "height": 28, "cornerRadius": "radii.pill", "bg": "tokens.colors.accents.chip_bg", "paddingX": 10 }
    },
    {
      "name": "Rating",
      "role": "Star + numeric score",
      "props": { "icon": "star.fill", "color": "tokens.colors.accents.positive" }
    },
    {
      "name": "CTAButton",
      "role": "Primary action",
      "props": { "height": 56, "cornerRadius": "radii.pill", "bg": "tokens.colors.accents.secondary", "fg": "tokens.colors.text.inverse" }
    },
    {
      "name": "SearchBar",
      "role": "Rounded search input with optional trailing action",
      "props": { "height": 44, "shape": "pill", "bg": "tokens.colors.surface", "shadow": "elevation.chip" }
    },
    {
      "name": "Segmented",
      "role": "Rounded segmented control for mode switching",
      "props": { "height": 36, "shape": "pill", "bg": "tokens.colors.accents.chip_bg" }
    },
    {
      "name": "Carousel",
      "role": "Horizontal pager with snapping and dots",
      "props": { "cornerRadius": "radii.xl", "height": 240, "pageIndicator": "dots" }
    },
    {
      "name": "ListItem",
      "role": "Compact row card",
      "layout": "Leading thumbnail (rounded) + text stack + trailing price/affordance",
      "metrics": { "height": 92, "thumb": [84,84], "cornerRadius": "radii.lg" }
    },
    {
      "name": "TopBar",
      "role": "Lightweight header (avatar/title/actions)",
      "metrics": { "height": 52, "avatar": 36, "icon": 22, "spacing": 12 }
    }
  ],

  "layout_system": {
    "grid": { "page_padding": "tokens.spacing.gutter", "section_spacing": "tokens.spacing.xl", "card_gap": "tokens.spacing.lg" },
    "safe_areas": "Respect OS safe areas; bottom CTA sits above home indicator.",
    "density": { "comfortable": 1.0, "compact": 0.9, "cozy": 0.85 }
  },

  "patterns": [
    {
      "name": "Discovery",
      "recipe": ["TopBar", "Display heading", "Segmented", "Carousel of Card", "Quick actions row"],
      "goal": "Inspire exploration with big imagery and clear actions."
    },
    {
      "name": "Detail",
      "recipe": ["Carousel", "Title + metadata row", "Chips", "Body copy (2–3 lines + See more)", "CTAButton fixed"],
      "goal": "Deep dive; one obvious primary action."
    },
    {
      "name": "SearchResults",
      "recipe": ["SearchBar", "Filter Chips (optional)", "List of ListItem"],
      "goal": "Scannable list; stable layout; price visibility."
    },
    {
      "name": "FormStandard",
      "recipe": ["Grouped fields on Card", "Pill buttons", "Inline validation (quiet colors)"],
      "goal": "Low-friction input with generous spacing."
    }
  ],

  "acceptance_criteria": [
    "Pages use light neutral background; content surfaces are white with soft shadows and large radii.",
    "Primary headline uses rounded display type (~34pt) and tight tracking.",
    "Interactive elements are ≥44pt touch targets and support Dynamic Type.",
    "Primary calls-to-action are pill buttons (≥56pt) with strong contrast.",
    "Chips are compact, pill-shaped, and never exceed two rows per group.",
    "Carousels snap, include dots, and apply subtle parallax; no infinite bounce.",
    "Icons are simple (SF/Material) and never exceed text visual weight.",
    "Dark mode swaps neutrals but preserves overall calm feel.",
    "No dense borders; use spacing, tone, and elevation for grouping."
  ],

  "platform_adapters": {
    "swiftui": {
      "notes": [
        "Use Color/Shape styles driven by tokens.",
        "Use .contentTransition(.opacity) and .scrollTargetBehavior(.paging) on iOS 17+.",
        "AsyncImage + redacted(reason:) for loading.",
        "matchedGeometryEffect for image-to-detail transitions."
      ],
      "components": {
        "Card": "RoundedRectangle(cornerRadius: tokens.radii.xl).fill(Color.surface).shadow(tokens.elevation.card)",
        "CTAButton": "ButtonStyle with Capsule background, height 56",
        "Chip": "Capsule().fill(Color.chip_bg) with HStack(icon,label).frame(height:28)",
        "SearchBar": "HStack{ Image(systemName:\"magnifyingglass\"); TextField(...) ; trailing } in Capsule() with shadow"
      }
    },
    "compose": { "notes": ["Map radii to Shapes.large", "Use Modifier.shadow/elevation 2–6dp", "Remember touch target 48dp"], "components": {} },
    "react": { "notes": ["Use CSS vars or Tailwind tokens", "border-radius: 20–28px; box-shadow low alpha"], "components": {} }
  },

  "sample_prompts": {
    "for_llm_ui_copy": "Write UI labels and helper text in a calm, premium tone. Keep labels to ≤3 words, helper text ≤12 words.",
    "for_llm_component_gen": "Generate SwiftUI components that adhere to the 'Calm Premium' tokens and component specs provided in this JSON. Do not invent colors or radii."
  }
}
