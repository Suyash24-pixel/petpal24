# 📝 Blog Content Guide

## Quick Reference: Adding Blog Posts

### Location
All blog posts are in: **`src/data/blogPosts.ts`**

### Template for New Post

Copy this template and add it to the `blogPosts` array:

```typescript
{
  id: "your-post-id-here",                    // URL-friendly (lowercase, hyphens)
  title: "Your Amazing Blog Post Title",
  excerpt: "A compelling short description that makes people want to read more...",
  category: "Pet Care",                        // Choose: Pet Care, Health, Nutrition, Exercise, Training, PetPal
  readTime: "5 min read",                     // Estimate: 3-10 min read
  date: "January 15, 2025",                  // Format: "Month Day, Year"
  image: "https://images.unsplash.com/photo-...",  // Use Unsplash or your own images
  content: [
    "Your opening paragraph. This should hook the reader and introduce the topic.",
    "",
    "## Your First Section Heading",
    "Content for this section goes here. Write naturally and helpfully.",
    "",
    "## Your Second Section Heading",
    "More content here. You can have as many sections as you need.",
    "",
    "## Final Thoughts",
    "Wrap up your article with a conclusion or call to action."
  ]
}
```

### Important Notes

1. **ID Format**: Use lowercase letters and hyphens only (e.g., `"training-tips"`, `"vet-visit-guide"`)

2. **Headings**: Use `## ` (two hashes and a space) at the start of a string for section headings

3. **Empty Lines**: Use empty strings `""` in the content array to add spacing between paragraphs

4. **Image URLs**: 
   - Unsplash: `https://images.unsplash.com/photo-[ID]?w=600&h=400&fit=crop`
   - For full article view, the code automatically uses larger images
   - Make sure images are at least 600x400px

5. **Categories**: Use consistent category names. Common ones:
   - Pet Care
   - Health
   - Nutrition
   - Exercise
   - Training
   - PetPal (for app-related posts)

### Example: Complete Blog Post

```typescript
{
  id: "winter-pet-safety",
  title: "Keeping Your Pet Safe During Winter",
  excerpt: "Essential tips to protect your furry friends from cold weather hazards and keep them warm and healthy.",
  category: "Pet Care",
  readTime: "6 min read",
  date: "January 10, 2025",
  image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
  content: [
    "Winter brings unique challenges for pet parents. From icy sidewalks to freezing temperatures, it's important to take extra precautions to keep your pets safe and comfortable during the colder months.",
    "",
    "## Protect Paws from Ice and Salt",
    "Ice and road salt can be harmful to your pet's paws. Consider using pet-safe ice melt on your property and wipe your pet's paws after walks to remove any salt or ice.",
    "",
    "## Dress for the Weather",
    "Some pets, especially short-haired breeds, may benefit from a coat or sweater during winter walks. Make sure it fits properly and doesn't restrict movement.",
    "",
    "## Watch for Signs of Hypothermia",
    "If your pet is shivering, seems weak, or is seeking warmth, they may be too cold. Bring them inside immediately and contact your vet if symptoms persist.",
    "",
    "## Indoor Activities",
    "On extremely cold days, provide indoor exercise and mental stimulation. Puzzle toys and indoor games can keep your pet active without braving the cold.",
    "",
    "By following these tips, you can ensure your pet stays safe and happy throughout the winter season."
  ]
}
```

### Editing Existing Posts

1. Open `src/data/blogPosts.ts`
2. Find the post you want to edit (search by `id` or `title`)
3. Update any fields you want to change
4. Save the file
5. The changes will appear immediately in your browser (if dev server is running)

### Removing Posts

Simply delete the entire object from the `blogPosts` array. The post will disappear from the blog listing and become inaccessible.

### Tips for Great Blog Posts

- **Opening**: Start with a hook that relates to your audience's concerns
- **Structure**: Use clear headings to break up content
- **Length**: Aim for 500-1500 words (about 5-10 paragraphs)
- **Tone**: Write conversationally, as if talking to a friend
- **PetPal Integration**: Naturally mention how PetPal can help when relevant
- **Call to Action**: End with a gentle reminder about downloading PetPal

### Need Help?

If you're stuck or want to add a blog post but aren't sure how, just provide:
- The title
- The main points you want to cover
- Any specific information or data

And I can help format it properly for the blog!

