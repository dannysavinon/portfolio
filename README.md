# Danny Savinon - Portfolio

Personal portfolio website built with React Router v7 and Tailwind CSS.

## Tech Stack

- **Framework:** React Router v7
- **Styling:** Tailwind CSS v4
- **Icons:** React Icons
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Local Development

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173/portfolio/ in your browser

## Building for Production

```bash
npm run build
```

The build output will be in `build/client/`.

## Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment Setup

1. Create a new GitHub repository
2. Push this code to the repository
3. Go to Settings > Pages
4. Under "Build and deployment", select "GitHub Actions"
5. Push to `main` branch to trigger deployment

## Customization

### Update Personal Info
- Edit contact info in `src/app/components/Contact.tsx`
- Update social links in `src/app/components/Hero.tsx` and `src/app/components/Footer.tsx`
- Modify experience in `src/app/components/Experience.tsx`
- Update skills in `src/app/components/Skills.tsx`
- Update certifications in `src/app/components/Certifications.tsx`

### Change Theme Colors
Edit the CSS variables in `src/app/app.css` under `@theme`.

### Change Base Path
If your repository name is different from `portfolio`, update `basename` in `react-router.config.ts`.
