
# Project Documentation

## Setup and Installation

1. Ensure you have Node.js and npm installed.
2. Clone the repository: git clone [https://github.com/aslan997/klipai.git]
3. Install dependencies: npm install
4. Run the development server: npm run dev
5. Open [http://localhost:3000](http://localhost:3000) to view the project.

## Technology Choices

- **Next.js 14**: For server-side rendering, routing, and React integration.
- **Tailwind CSS**: Utility-first styling framework for rapid UI development.
- **React**: Component-based front-end library.

## Figma Design Interpretation

- Design interpreted using default Tailwind breakpoints (sm, md, lg, xl).
- Images from Figma required manual cropping due to padding and background issues.
- Some design decisions were made without full dev tools access, relying on visual matching.

## AI Assistance Documentation

- **Tools Used**: ChatGPT
- **Effective Prompts**:
  - Implement scrolling partner logos (marquee effect) using CSS and Tailwind.
  - Create blurred linear gradient background effects for Hero section.
  - Correct and optimize custom `Button` and `Badge` components for Tailwind usage.
- **Code Sections Assisted**:
  - Partner section scrolling implementation.
  - Hero section gradient backgrounds.
  - Button and Badge component fixes.
- **Validation**:
  - Tested UI visually in multiple screen sizes.
  - Ensured Tailwind classes applied correctly and animations worked.
- **Challenges Solved**:
  - Fixing Tailwind class application in custom components.
  - Seamless marquee animation without duplicating logos.

## Responsive Breakpoints

- Tailwind default breakpoints used:
  - **sm**: 640px
  - **md**: 768px
  - **lg**: 1024px
  - **xl**: 1280px
  - **2xl**: 1536px

## Assumptions

- Hero and Partner sections adjusted for mobile-first design.
- Heading and body font sizes use custom CSS variables.
- Some image dimensions adjusted due to padding in Figma exports.

## Known Issues / Limitations

- Dev tools access for Figma was not given, requiring visual approximation to some extent.
- Images required online cropping and background removal to match design intent.
- Some AI-generated solutions needed manual fine-tuning to align with Tailwind and project structure.
