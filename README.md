# Bob Corn Store - Frontend

Angular 19 frontend application for the Bob Corn Store platform, featuring a modern and responsive user interface for corn purchasing and management.

## 🌽 Overview

This is the frontend component of the Bob Corn Store technical challenge. It provides a user-friendly interface for customers to register, login, purchase corn, and view their purchase history with real-time statistics.

## ✨ Features

- **🔐 Authentication System**: Secure login and registration forms
- **📊 Real-time Dashboard**: Live statistics showing total corn owned and last purchase
- **🛒 One-Click Purchasing**: Simple corn purchase with rate limiting feedback
- **📱 Responsive Design**: Mobile-first design using TailwindCSS
- **🔔 Smart Notifications**: Toast notifications for user feedback
- **⚡ Modern Angular**: Built with Angular 19 and latest features
- **🎯 Type Safety**: Full TypeScript implementation
- **🚀 Performance**: Lazy loading and Angular Signals for optimal performance

## 🏗️ Architecture

### Feature-Based Structure
```
src/app/
├── features/                    # Business domain features
│   ├── auth/                   # Authentication feature
│   │   ├── components/         # Auth-specific components
│   │   │   ├── login-form/     # Login form component
│   │   │   └── panel/          # Auth panel component
│   │   ├── guards/             # Route protection guards
│   │   │   └── not-auth.guard  # Redirect authenticated users
│   │   ├── pages/              # Auth pages
│   │   │   └── login/          # Login page component
│   │   └── services/           # Auth business logic
│   │       └── auth.service    # Authentication service
│   └── dashboard/              # Dashboard feature
│       ├── components/         # Dashboard components
│       │   ├── buy-corn/       # Corn purchase component
│       │   └── dashboard-stats/ # Statistics component
│       ├── pages/              # Dashboard pages
│       │   └── home/           # Dashboard home page
│       └── services/           # Dashboard services
│           └── purchase.service # Purchase management
├── layout/                     # Application layout
│   ├── footer/                 # Footer component
│   ├── navbar/                 # Navigation bar
│   └── shell/                  # Main layout shell
└── shared/                     # Shared resources
    ├── components/             # Reusable components
    │   └── notification/       # Toast notification system
    ├── interfaces/             # TypeScript interfaces
    ├── interceptors/           # HTTP interceptors
    │   └── error.interceptor   # Global error handling
    └── services/               # Shared services
        └── notification.service # Notification management
```

### Key Design Patterns

- **Feature Modules**: Organized by business domains (auth, dashboard)
- **Smart/Dumb Components**: Clear separation between container and presentation components
- **Service Layer**: Centralized business logic and API communication
- **Reactive Programming**: RxJS observables for async operations
- **Signal-based State**: Angular Signals for efficient state management
- **Guard Protection**: Route guards for authentication and authorization

## 🛠️ Technologies & Libraries

### Core Framework
- **Angular 19**: Latest version with standalone components
- **TypeScript 5.7**: Type-safe JavaScript with latest features
- **RxJS 7.8**: Reactive programming for async operations

### UI & Styling
- **TailwindCSS 4.1**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Responsive Design**: Mobile-first approach

### State Management
- **Angular Signals**: Modern reactive state management
- **Services**: Centralized business logic
- **RxJS Subjects**: Event-driven communication

### Development Tools
- **Angular CLI**: Project scaffolding and build tools
- **TypeScript Strict Mode**: Enhanced type checking
- **ESLint**: Code linting and quality assurance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Angular CLI (optional but recommended)

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   # The environment files are already configured
   # Default backend URL: http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open application**
   - Navigate to `http://localhost:4200`
   - The app will automatically reload when you make changes

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run watch      # Build in watch mode
npm test           # Run unit tests
ng serve           # Angular CLI serve command
ng build           # Angular CLI build command
ng generate        # Generate new components/services
```

## 🎨 UI Components

### Authentication Components
- **LoginFormComponent**: Reactive form with validation
- **PanelComponent**: Visual branding panel for auth pages

### Dashboard Components
- **DashboardStatsComponent**: Real-time purchase statistics
- **BuyCornComponent**: Corn purchase interface with loading states

### Layout Components
- **NavbarComponent**: Navigation with user info and logout
- **FooterComponent**: Application footer
- **ShellComponent**: Main layout wrapper

### Shared Components
- **NotificationComponent**: Toast notification system

## 📱 User Experience

### Authentication Flow
1. **Login Page**: Clean, centered login form
2. **Form Validation**: Real-time validation feedback
3. **Error Handling**: Clear error messages for failed attempts
4. **Automatic Redirect**: Seamless navigation after successful login

### Dashboard Experience
1. **Statistics Display**: Real-time corn count and last purchase time
2. **Purchase Button**: Large, prominent corn purchase button
3. **Loading States**: Visual feedback during API calls
4. **Rate Limiting**: Button disabled for 1 minute after purchase
5. **Success Feedback**: Celebration notifications for successful purchases

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for medium screens
- **Desktop Enhanced**: Full desktop experience with optimal spacing

## 🔧 Configuration

### Environment Configuration
```typescript
// src/environments/environment.development.ts
export const environment = {
  production: false,
  backendUrl: 'http://localhost:3000/api/v1'
};
```

### TailwindCSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

## 📊 State Management

### Authentication State
```typescript
// Managed by AuthService using Angular Signals
const customer = signal<Customer | null>(null);
const isAuthenticated = computed(() => !!customer());
```

### Purchase State
```typescript
// Managed by PurchaseService
const purchases = signal<Purchase[]>([]);
const totalCorn = computed(() => purchases().length);
const lastPurchase = computed(() => purchases()[0]);
```

## 🔒 Security Features

### Route Protection
- **Authentication Guards**: Prevent access to protected routes
- **Automatic Redirects**: Redirect to login when unauthenticated
- **Token Management**: Automatic token handling in HTTP requests

### Input Validation
- **Reactive Forms**: Built-in Angular form validation
- **Email Validation**: Proper email format checking
- **Password Requirements**: Minimum length validation

### HTTP Security
- **Error Interceptor**: Global error handling for HTTP requests
- **Token Injection**: Automatic JWT token inclusion
- **CORS Handling**: Proper cross-origin request management

## 🎭 UI/UX Design Principles

### Design System
- **Consistent Colors**: Defined color palette using TailwindCSS
- **Typography**: Clear hierarchy with proper font sizes
- **Spacing**: Consistent margin and padding patterns
- **Interactive Elements**: Hover and focus states for all buttons

### Accessibility
- **Semantic HTML**: Proper HTML structure for screen readers
- **Focus Management**: Keyboard navigation support
- **Color Contrast**: Sufficient contrast ratios
- **Form Labels**: Proper labeling for form inputs

### Performance Optimizations
- **Lazy Loading**: Route-based code splitting
- **OnPush Strategy**: Optimized change detection where applicable
- **Signal-based Updates**: Efficient reactive updates
- **Minimal Bundle Size**: Tree-shaking and dead code elimination

## 🧪 Testing Strategy

### Unit Testing
```bash
# Run tests
npm test

# Test with coverage
ng test --code-coverage
```

### E2E Testing
```bash
# Install E2E testing tools (if needed)
ng add @cypress/schematic

# Run E2E tests
npm run e2e
```

### Manual Testing Checklist
- [ ] User can register and login
- [ ] Dashboard shows correct statistics
- [ ] Corn purchase works correctly
- [ ] Rate limiting prevents rapid purchases
- [ ] Notifications appear for actions
- [ ] Responsive design works on all devices
- [ ] Error handling displays appropriate messages

## 🚀 Deployment

### Production Build
```bash
# Build for production
npm run build

# The built files will be in dist/ directory
# Serve these files with any static file server
```

### Environment Variables
```typescript
// src/environments/environment.ts
export const environment = {
  production: true,
  backendUrl: 'https://your-production-api.com/api/v1'
};
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional Hosting**: Apache, Nginx
- **Cloud Platforms**: AWS S3, Google Cloud Storage
- **Container Deployment**: Docker with nginx

## 📈 Performance Metrics

### Bundle Analysis
```bash
# Analyze bundle size
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🤝 Contributing

### Development Guidelines
1. **Component Structure**: Follow the established component patterns
2. **TypeScript**: Use strict typing throughout
3. **Styling**: Use TailwindCSS utility classes
4. **State Management**: Use Angular Signals for reactive state
5. **Error Handling**: Implement proper error boundaries

### Code Standards
- **ESLint**: Follow the established linting rules
- **Prettier**: Use consistent code formatting
- **Naming Conventions**: Use Angular naming conventions
- **File Organization**: Follow the feature-based structure

## 📝 Known Issues & Limitations

### Current Limitations
- No offline support (requires internet connection)
- No push notifications
- Limited to corn purchases (single product type)

### Future Enhancements
- [ ] Offline support with service workers
- [ ] Push notifications for purchase confirmations
- [ ] Multi-product support
- [ ] Purchase history pagination
- [ ] User profile management
- [ ] Dark mode theme

## 📄 License

This project is for technical challenge purposes only.

---

**Frontend built with ❤️ using Angular 19**
