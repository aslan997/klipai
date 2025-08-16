## *AI Usage Documentation

This document outlines how AI tools were leveraged during development of this project, including tools used, prompts, generated code, validation methods, and challenges solved.

1. AI Tools Used

ChatGPT (GPT-5 Mini) – Main tool for generating code snippets, explanations, and troubleshooting guidance.

GitHub Copilot – Assisted with inline code suggestions for React, TypeScript, and Tailwind CSS.

2. Effective Prompts

Some prompts that were most effective:

Create a continuously looping horizontal marquee of partner logos in React + Tailwind, without duplicating the array, and ensure seamless looping.

Implement a linear gradient blurred background behind an image using Tailwind classes.

Convert these components to use Tailwind CSS for dynamic colors, font sizes, and variants, ensuring all props apply correctly.

3. Code Sections Generated / Assisted by AI

Partners Section: Smooth horizontal scrolling marquee for partner logos.

Hero Section: Linear gradient background effect behind images.

Button Component: Corrected variant, size, and dynamic class handling using Tailwind.

Badge Component: Converted to Tailwind, ensuring dynamic text, background, and border colors work correctly.

4. Validation of AI-Generated Code

Verified responsive layout and animations in Next.js 14 with Tailwind v4.

Tested dynamic props in Button and Badge components for correct styling and interaction.

Checked marquee scrolling and gradient effects for visual accuracy against Figma designs.

Manually inspected HTML and Tailwind classes in browser to ensure proper rendering.

5. Challenges Solved Using AI

Partner marquee scrolling – seamless infinite scrolling without array duplication.

Hero & Partner section gradients – applied blurred linear gradient backgrounds using Tailwind.

Button & Badge component issues – fixed dynamic Tailwind class application for colors, sizes, and variants.
