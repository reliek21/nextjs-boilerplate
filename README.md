# Name of project here

![image banner](public/banner/image-banner.png)

_Name of project here_ is a project designed to provide a user-friendly interface for users.

### Philosophy:

- Easy to customize
- Minimal code
- SEO-friendly
- Production-ready
- Performance

### Requirements:

`Node.js 18+ and npm`

### Tech Stack:

- **Client**: TypeScript, React, Next.js
- **Type-safe ORM**: Prisma
- **Authentication**: NextAuth.js with Supabase
- **Database**: PostgresSQL & (Supabase Database)
- **Schema and Validation**: Zod
- **Styles**: CSS, SASS, TailwindCSS and Shacdn
- **API**: Supabase API
- **Email Service**: React Email and Resend
- **Multi-language (i18n)**: next-intl

### Analytics:

- Google Analytics
- Vercel Analytics
- Vercel SpeedInsights
- Google Search Console

### Environments Variables:

Before starting the project, you can add the following environment variables.

- `NODE_ENV`: Select the current work environment. By default, it is always in `development`
- `RESEND_API_KEY`: Sending mass mailings and user subscriptions with the [Resend](https://resend.com/) service.
- `NEXT_PUBLIC_GOOGLE_ANALYTICS`: Analysis of users through navigation between different pages.
- `NEXTAUTH_URL`: Specifies the base URL where we have hosted our project, example:
  - `Local environment`: http://localhost:3000
  - `Production environment`: https://www.example.com
- `NEXTAUTH_SECRET`: Use JWT to encrypt our current session.
  - `Local and Prod environment`: To locally generate a hash of our session: `openssl rand -base64 32`
- `GOOGLE_CLIENT_ID`: Authentication with Google, more information: https://next-auth.js.org/providers/google
- `GOOGLE_CLIENT_SECRET`: Authentication with Google, more information: https://next-auth.js.org/providers/google
- `GITHUB_ID`: Authentication with GitHub, more information: https://next-auth.js.org/providers/github
- `GITHUB_SECRET`:  Authentication with GitHub, more information: https://next-auth.js.org/providers/github
- `DATABASE_URL`: URL of the database in **PostgresSQL** of any provider, in this case [**Supabase**](https://supabase.com/).

### Running the Project Locally:

To run this project on your local machine, follow these steps:

1. Clone the project repository:

```bash
git clone https://project-link
```

2. Navigate to the project directory:

```bash
cd my-project
```

3. Install the project dependencies:

```bash
npm install
```

```bash
Start the development server:
```

### License:

This project is licensed under the [MIT License](LICENSE.md). See the `LICENSE.md` file in the project repository for more details.
