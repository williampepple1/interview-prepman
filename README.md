# Interview Preparation Platform

A NeetCode.io-inspired platform for technical interview preparation with multiple specialized dashboards, Firebase authentication, and markdown support for code explanations.

## Features

- 🔐 **Google OAuth Authentication** - Secure login with Firebase
- 📊 **Multiple Dashboards** - Specialized sections for different interview types
- 📝 **Markdown Support** - Rich text and code explanations with syntax highlighting
- 🎯 **Question Filtering** - Search and filter questions by difficulty and category
- 📱 **Responsive Design** - Modern UI built with Tailwind CSS
- 🔒 **Protected Routes** - Dashboard access requires authentication
- ⚡ **Fast Development** - Built with Vite for lightning-fast builds and hot reload

## Dashboards

1. **Data Structures & Algorithms** - Classic coding problems and algorithms
2. **React Questions** - React-specific technical interview questions
3. **Data Engineering** - ETL, data pipelines, and big data concepts
4. **Algorithm Explanations** - Detailed explanations with code examples

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite (fast development and builds)
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth (Google OAuth)
- **Database**: Firebase Firestore
- **Routing**: React Router v6
- **Markdown**: React Markdown with syntax highlighting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interview-prep
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   
   Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   
   Enable Google Authentication:
   - Go to Authentication > Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains
   
   Update Firebase configuration in `src/firebase.ts`:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
interview-prep/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── DashboardCard.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── constants/          # Application constants
│   │   └── dashboards.ts
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx
│   ├── data/              # Sample data and content
│   │   └── questions.ts
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── QuestionDetail.tsx
│   │   └── AlgorithmExplanations.tsx
│   ├── routes/            # Routing configuration
│   │   └── AppRoutes.tsx
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component (clean and minimal)
│   ├── firebase.ts        # Firebase configuration
│   └── main.tsx           # App entry point (Vite)
├── index.html             # Main HTML file (Vite)
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Usage

1. **Home Page**: View all available dashboards
2. **Authentication**: Click "Sign in with Google" to access dashboards
3. **Dashboard Navigation**: Click on any dashboard card to access questions
4. **Question Filtering**: Use search and filter options to find specific questions
5. **Algorithm Explanations**: Browse detailed algorithm explanations with code examples

## Customization

### Adding New Questions

Questions are defined in the respective dashboard components. To add new questions:

1. Navigate to the dashboard file (e.g., `src/App.tsx` for main dashboards)
2. Add new question objects to the questions array
3. Follow the `Question` interface structure

### Adding New Algorithms

To add new algorithm explanations:

1. Open `src/pages/AlgorithmExplanations.tsx`
2. Add new algorithm objects to the `algorithms` array
3. Include markdown content in the `explanation` field

### Styling

The app uses Tailwind CSS for styling. Custom styles can be added in:
- `src/index.css` for global styles
- `tailwind.config.js` for Tailwind configuration

## Development

### Why Vite?

- **Lightning Fast**: Instant server start and hot module replacement
- **Modern Build**: Uses native ES modules for faster builds
- **Rich Features**: Built-in TypeScript, JSX, and CSS support
- **Optimized Production**: Automatic code splitting and tree shaking

### Development Workflow

1. Run `npm run dev` for development
2. Make changes - they'll be reflected instantly with hot reload
3. Run `npm run build` to create optimized production build
4. Run `npm run preview` to test production build locally

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

3. Set build directory to `dist` (Vite's default output)

4. Deploy:
   ```bash
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository. 