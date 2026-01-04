# PetPal Website

A beautiful, modern landing page and blog for the PetPal app - your all-in-one pet care companion.

## 🚀 Quick Start - How to Launch the Website

### Prerequisites

Make sure you have Node.js installed (version 18 or higher). If you don't have it, install it using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or download from [nodejs.org](https://nodejs.org/).

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all the required packages (React, TypeScript, Tailwind CSS, etc.).

### Step 2: Start the Development Server

Run the development server:

```bash
npm run dev
```

The website will be available at **http://localhost:8080**

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: use --host to expose
```

### Step 3: View Your Website

Open your browser and navigate to **http://localhost:8080**

The development server will automatically reload when you make changes to the code!

### Other Useful Commands

```bash
# Build for production
npm run build

# Preview the production build
npm run preview

# Run linter to check for code issues
npm run lint
```

## 📝 Adding Blog Content

### How to Add New Blog Posts

All blog posts are stored in `src/data/blogPosts.ts`. This makes it super easy to add, edit, or remove blog posts.

### Adding a New Blog Post

1. Open `src/data/blogPosts.ts`
2. Add a new object to the `blogPosts` array. Here's the structure:

```typescript
{
  id: "your-unique-post-id",           // Used in URL (e.g., "my-new-post")
  title: "Your Blog Post Title",
  excerpt: "A short description that appears in the blog listing",
  category: "Pet Care",                 // Category name
  readTime: "5 min read",              // Estimated reading time
  date: "January 15, 2025",           // Publication date
  image: "https://images.unsplash.com/...",  // Image URL
  content: [
    "First paragraph of your blog post.",
    "## Heading (use ## for headings)",
    "Paragraph after heading.",
    "## Another Heading",
    "More content..."
  ]
}
```

### Example: Adding a New Post

```typescript
{
  id: "training-your-puppy",
  title: "Training Your Puppy: A Complete Guide",
  excerpt: "Learn the essential steps to train your new puppy and build a strong bond.",
  category: "Training",
  readTime: "8 min read",
  date: "January 20, 2025",
  image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
  content: [
    "Training a puppy is one of the most rewarding experiences for a pet parent...",
    "## Start Early",
    "The best time to start training is when your puppy is 8-12 weeks old...",
    "## Basic Commands",
    "Start with simple commands like 'sit', 'stay', and 'come'..."
  ]
}
```

### Tips for Blog Content

- **Headings**: Use `## ` prefix for section headings (e.g., `"## Section Title"`)
- **Images**: Use Unsplash or other image services. Make sure images are at least 600x400px
- **ID**: Use lowercase, hyphenated IDs (e.g., `"my-blog-post"`)
- **Content**: Each string in the `content` array becomes a paragraph or heading

### Editing Existing Posts

Simply find the post in `src/data/blogPosts.ts` and update any fields you want to change. The changes will appear immediately when you refresh the page.

## 🏗️ Project Structure

```
PetPalWebsite/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── landing/        # Landing page sections
│   │   └── ui/             # shadcn-ui components
│   ├── data/
│   │   └── blogPosts.ts    # Blog posts data (edit here!)
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Landing page
│   │   ├── Blog.tsx        # Blog listing page
│   │   └── BlogPost.tsx    # Individual blog post page
│   └── App.tsx             # Main app component
├── public/                 # Static assets
└── package.json            # Dependencies
```

## 🛠️ Technologies Used

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Beautiful, accessible component library
- **React Router** - Client-side routing

## 📦 Building for Production

When you're ready to deploy:

```bash
# Build the production-ready files
npm run build
```

The built files will be in the `dist/` directory. You can deploy this to:
- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist` folder or connect via Git
- **GitHub Pages** - Use GitHub Actions to deploy
- **Any static hosting service**

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## 💡 Tips

- The development server runs on port 8080 by default
- Hot reload is enabled - changes appear instantly
- Use the browser's developer tools to debug
- Check the console for any errors

## 🐛 Troubleshooting

**Port already in use?**
- Change the port in `vite.config.ts` or kill the process using port 8080

**Dependencies not installing?**
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Build errors?**
- Run `npm run lint` to check for code issues
- Make sure all TypeScript types are correct

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Make sure all dependencies are installed (`npm install`)
3. Verify Node.js version is 18 or higher (`node --version`)

---

**Happy coding! 🐾**
