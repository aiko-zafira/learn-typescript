/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */
type Post = {
    author: string
    content: string
    hashtags: string[]
    likes: number
}

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescriptPosts = posts.filter(post => 
    post.content.toLowerCase().includes("typescript") || 
    post.hashtags.includes("typescript")
);
const nestjsPosts = posts.filter(post => 
    post.content.toLowerCase().includes("nestjs") || 
    post.hashtags.includes("nestjs")
);
const mostLikedPost = posts.reduce((maxPost, currentPost) => {
    return currentPost.likes > maxPost.likes ? currentPost : maxPost;
}, posts[0]);
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("====== 1. TYPESCRIPT POSTS ======");
console.log(typescriptPosts);

console.log("====== 2. NESTSJS POSTS ======");
console.log(nestjsPosts);

console.log("====== 3. MOST LIKED POST ======");
console.log(mostLikedPost);

console.log("====== 4. TOTAL LIKES ======");
console.log(totalLikes);