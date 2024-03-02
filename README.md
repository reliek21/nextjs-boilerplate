# Name of project here

![image banner](public/banner/image-banner.png)

_Name of project here_ is a project designed to provide a user-friendly interface for _name of the project here_.

### Project structure:

```bash
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization:

### Philosophy:

- Easy to customize
- Minimal code
- SEO-friendly
- Production-ready

### Requirements:

`Node.js 18+ and npm`

### Tech Stack:

- **Client**: TypeScript, React, Next.js
- **Type-safe ORM**: DrizzleORM
- **Authentication**: NextAuth.js with Supabase
- **Database**: Supabase Database
- **Styles**: TailwindCSS and Shacdn
- **API**: Supabase API
- **Email Service**: Resend
- **Analytics**: Google Analytics, Google Search Console
- **Multi-language (i18n)**: next-intl

## Running the Project Locally:

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
