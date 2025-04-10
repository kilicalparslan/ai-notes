# 🧠 AI-Assisted Note Application

A smart note-taking app powered by **Next.js**, **Supabase**, and **Cohere AI**.  
Users can log in, write notes, and receive AI-generated summaries and actionable suggestions — all in one elegant interface.

## ✨ Features

- 🔐 **Email Authentication** – Secure login via Supabase email verification.
- 📝 **Note Management** – Add and manage notes in a minimal, user-friendly UI.
- 🤖 **AI-Powered Summaries** – Notes are summarized using **Cohere AI**.
- 📌 **Next Step Suggestions** – Automatically generate actionable next steps with AI.
- ⚡ **Built with Next.js** – Fully integrated backend and frontend.
- 🎨 **Modern UI** – Clean, responsive design using TailwindCSS and ShadCN UI components.

## 🛠 Tech Stack

| Category          | Tools & Libraries                                                                 |
|------------------|------------------------------------------------------------------------------------|
| **Framework**     | [Next.js](https://nextjs.org/)                                                    |
| **Authentication**| [Supabase](https://supabase.com/) (`@supabase/supabase-js`, `@supabase/ssr`)      |
| **AI Integration**| [Cohere AI](https://cohere.com/) (`cohere-ai`, `@ai-sdk/cohere`)                  |
| **ORM / DB**      | [Prisma](https://www.prisma.io/) (`@prisma/client`) with Supabase PostgreSQL      |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/), [tailwind-merge](https://github.com/dcastil/tailwind-merge), `tw-animate-css` |
| **UI Components** | [ShadCN UI](https://ui.shadcn.dev/), [Radix UI](https://www.radix-ui.com/)        |
| **Icons**         | [Lucide React](https://lucide.dev/)                                               |
| **Utilities**     | `clsx`, `fuse.js`, `uuid`, `next-themes`, `sonner` (toast notifications)          |
| **Linting / Format** | ESLint, Prettier, Prettier Tailwind Plugin                                      |
| **Type Safety**   | TypeScript                                                                        |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kilicalparslan/ai-notes.git
cd ai-notes
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a .env.local file in the root of the project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
COHERE_API_KEY=your_cohere_api_key
```

### 4. Run the app

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to view it in the browser.

---

## 📸 Screenshots

**Notes Section**

![Imgur](https://i.imgur.com/EnroJdG.png)

---

**Ask AI Section**

![Imgur](https://i.imgur.com/TBQ8Jfg.png)




























