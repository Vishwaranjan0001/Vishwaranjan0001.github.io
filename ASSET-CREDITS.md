# Asset provenance

- portrait.png: supplied by the user, unmodified.
- trade-actual.jpg: actual screenshot from https://github.com/Vishwaranjan0001/OctaTrade/blob/main/images/tour/trading-desktop.jpg.
- storage-ui.webp and food-ui.webp: illustrative interface concepts, optimized as WebP.

React Bits components sourced from https://github.com/DavidHDev/react-bits: DotGrid, TiltedCard, ScrollReveal, Magnet, CountUp, LogoLoop, ScrollVelocity, ScrollFloat, SplitText, DecryptedText, StarBorder and AnimatedContent. Local adaptations: React imports, front-face accessibility state on flipping TiltedCards, and paragraph markup for the narrative ScrollReveal. SplitText uses the official @gsap/react integration. License included in REACT-BITS-LICENSE.md.

BlurText: sourced from https://github.com/DavidHDev/react-bits/tree/main/src/content/TextAnimations/BlurText. Adapted with a polymorphic semantic tag and a word class to use as the portfolio h1.
ScrollVelocity: adapted with an optional viewport-triggered start and a moving reading introduction. The whole first phrase moves gently within the viewport before joining the normal seamless loop; default component behavior is preserved when these props are omitted.

TargetCursor: adapted to sample background luminance and use an outlined dark pointer on light surfaces, retaining its light pointer on dark surfaces.

SplitText: https://github.com/DavidHDev/react-bits/tree/main/src/content/TextAnimations/SplitText. The name uses solid-color character flips on load and a pointer-driven letter lift, with no reflection, gradient or blur. The contact heading uses word flips on first view. ShinyText has been removed from the rendered site.
