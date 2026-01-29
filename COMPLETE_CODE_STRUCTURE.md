# Luna Bistro Website - Complete Code Structure

## Project Overview
Luna Bistro is a modern, high-conversion restaurant website built with React 19, TypeScript, Tailwind CSS 4, and Vite. The design follows a sophisticated minimalism philosophy with dark charcoal backgrounds, warm beige typography, and muted gold accents.

---

## Directory Structure

```
luna-bistro/
├── client/
│   ├── public/
│   │   └── images/
│   │       ├── hero-ambiance.jpg
│   │       ├── hero-food.jpg
│   │       ├── menu-showcase.jpg
│   │       └── chef-craft.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── tooltip.tsx
│   │   │   │   └── [other shadcn/ui components]
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── COMPLETE_CODE_STRUCTURE.md
```

---

## Core Files

### 1. `client/index.html`
Entry point HTML file with Google Fonts integration.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Luna Bistro - Modern Restaurant Website</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      defer
      src="%VITE_ANALYTICS_ENDPOINT%/umami"
      data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
  </body>
</html>
```

### 2. `client/src/main.tsx`
React entry point.

```typescript
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### 3. `client/src/App.tsx`
Main application component with routing and theme setup.

```typescript
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

### 4. `client/src/index.css`
Global styles with Luna Bistro color palette and animations.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  /* Luna Bistro Color Palette */
  --primary: oklch(0.55 0.15 45); /* Muted Gold */
  --primary-foreground: oklch(0.95 0.01 45); /* Cream */
  --sidebar-primary: oklch(0.55 0.15 45);
  --sidebar-primary-foreground: oklch(0.95 0.01 45);
  --chart-1: oklch(0.55 0.15 45);
  --chart-2: oklch(0.50 0.12 40);
  --chart-3: oklch(0.60 0.10 50);
  --chart-4: oklch(0.65 0.08 55);
  --chart-5: oklch(0.70 0.06 60);
  --radius: 0.5rem;
  --background: oklch(0.12 0.01 280); /* Dark Charcoal */
  --foreground: oklch(0.92 0.01 45); /* Warm Beige */
  --card: oklch(0.18 0.01 280); /* Slightly lighter charcoal */
  --card-foreground: oklch(0.92 0.01 45);
  --popover: oklch(0.18 0.01 280);
  --popover-foreground: oklch(0.92 0.01 45);
  --secondary: oklch(0.85 0.02 45); /* Light Cream */
  --secondary-foreground: oklch(0.12 0.01 280);
  --muted: oklch(0.30 0.02 280); /* Muted Charcoal */
  --muted-foreground: oklch(0.70 0.02 45);
  --accent: oklch(0.55 0.15 45); /* Muted Gold */
  --accent-foreground: oklch(0.12 0.01 280);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.25 0.01 280);
  --input: oklch(0.25 0.01 280);
  --ring: oklch(0.55 0.15 45);
  --sidebar: oklch(0.12 0.01 280);
  --sidebar-foreground: oklch(0.92 0.01 45);
  --sidebar-accent: oklch(0.55 0.15 45);
  --sidebar-accent-foreground: oklch(0.12 0.01 280);
  --sidebar-border: oklch(0.25 0.01 280);
  --sidebar-ring: oklch(0.55 0.15 45);
}

.dark {
  /* Dark theme uses same values as root for Luna Bistro */
  --primary: oklch(0.55 0.15 45);
  --primary-foreground: oklch(0.95 0.01 45);
  --sidebar-primary: oklch(0.55 0.15 45);
  --sidebar-primary-foreground: oklch(0.95 0.01 45);
  --background: oklch(0.12 0.01 280);
  --foreground: oklch(0.92 0.01 45);
  --card: oklch(0.18 0.01 280);
  --card-foreground: oklch(0.92 0.01 45);
  --popover: oklch(0.18 0.01 280);
  --popover-foreground: oklch(0.92 0.01 45);
  --secondary: oklch(0.85 0.02 45);
  --secondary-foreground: oklch(0.12 0.01 280);
  --muted: oklch(0.30 0.02 280);
  --muted-foreground: oklch(0.70 0.02 45);
  --accent: oklch(0.55 0.15 45);
  --accent-foreground: oklch(0.12 0.01 280);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.25 0.01 280);
  --input: oklch(0.25 0.01 280);
  --ring: oklch(0.55 0.15 45);
  --chart-1: oklch(0.55 0.15 45);
  --chart-2: oklch(0.50 0.12 40);
  --chart-3: oklch(0.60 0.10 50);
  --chart-4: oklch(0.65 0.08 55);
  --chart-5: oklch(0.70 0.06 60);
  --sidebar: oklch(0.12 0.01 280);
  --sidebar-foreground: oklch(0.92 0.01 45);
  --sidebar-accent: oklch(0.55 0.15 45);
  --sidebar-accent-foreground: oklch(0.12 0.01 280);
  --sidebar-border: oklch(0.25 0.01 280);
  --sidebar-ring: oklch(0.55 0.15 45);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  h1 {
    @apply text-5xl md:text-6xl;
  }
  h2 {
    @apply text-4xl md:text-5xl;
  }
  h3 {
    @apply text-2xl md:text-3xl;
  }
  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-height: 0;
    min-width: 0;
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1280px;
    }
  }

  /* Luna Bistro Animation Utilities */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }

  /* Smooth transitions for interactive elements */
  button, a, input, select, textarea {
    transition: all 0.3s ease;
  }

  /* Hover effects for images */
  img {
    transition: transform 0.5s ease;
  }
}
```

### 5. `client/src/pages/Home.tsx`
Main homepage component with all sections (hero, menu, about, gallery, reservation).

[See the complete Home.tsx file provided in the previous response - it contains the full implementation with navigation, hero section, value proposition, interactive menu, about section, gallery, reservation form, and footer]

### 6. `client/src/pages/NotFound.tsx`
404 error page component.

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

### 7. `client/src/contexts/ThemeContext.tsx`
Theme management context for dark/light mode.

```typescript
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
```

### 8. `client/src/components/ErrorBoundary.tsx`
Error boundary for catching React errors.

```typescript
import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-background">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              className="text-destructive mb-6 flex-shrink-0"
            />

            <h2 className="text-xl mb-4">An unexpected error occurred.</h2>

            <div className="p-4 w-full rounded bg-muted overflow-auto mb-6">
              <pre className="text-sm text-muted-foreground whitespace-break-spaces">
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 cursor-pointer"
              )}
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 9. `client/src/lib/utils.ts`
Utility functions for classname merging.

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 10. `client/src/components/ui/button.tsx`
Button component with variants.

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

### 11. `client/src/components/ui/card.tsx`
Card component with subcomponents.

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
```

### 12. `package.json`
Project dependencies and scripts.

```json
{
  "name": "luna-bistro",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "axios": "^1.12.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "framer-motion": "^12.23.22",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "nanoid": "^5.1.5",
    "next-themes": "^0.4.6",
    "react": "^19.2.1",
    "react-day-picker": "^9.11.1",
    "react-dom": "^19.2.1",
    "react-hook-form": "^7.64.0",
    "react-resizable-panels": "^3.0.6",
    "recharts": "^2.15.2",
    "sonner": "^2.0.7",
    "streamdown": "^1.4.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@builder.io/vite-plugin-jsx-loc": "^0.1.1",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/express": "4.17.21",
    "@types/google.maps": "^3.58.1",
    "@types/node": "^24.7.0",
    "@types/react": "^19.2.1",
    "@types/react-dom": "^19.2.1",
    "@vitejs/plugin-react": "^5.0.4",
    "add": "^2.0.6",
    "autoprefixer": "^10.4.20",
    "esbuild": "^0.25.0",
    "pnpm": "^10.15.1",
    "postcss": "^8.4.47",
    "prettier": "^3.6.2",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.19.1",
    "tw-animate-css": "^1.4.0",
    "typescript": "5.6.3",
    "vite": "^7.1.7",
    "vite-plugin-manus-runtime": "^0.0.57",
    "vitest": "^2.1.4"
  },
  "packageManager": "pnpm@10.4.1+sha512.c753b6c3ad7afa13af388fa6d808035a008e30ea9993f58c6663e2bc5ff21679aa834db094987129aa4d488b86df57f7b634981b2f827cdcacc698cc0cfb88af",
  "pnpm": {
    "patchedDependencies": {
      "wouter@3.7.1": "patches/wouter@3.7.1.patch"
    },
    "overrides": {
      "tailwindcss>nanoid": "3.3.7"
    }
  }
}
```

### 13. `vite.config.ts`
Vite configuration with Tailwind and React plugins.

[See the complete vite.config.ts provided earlier - it includes Tailwind CSS 4, React, JSX location plugin, and Manus runtime]

### 14. `tsconfig.json`
TypeScript configuration.

```json
{
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"],
  "exclude": ["node_modules", "build", "dist", "**/*.test.ts"],
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/typescript/tsbuildinfo",
    "noEmit": true,
    "module": "ESNext",
    "strict": true,
    "lib": ["esnext", "dom", "dom.iterable"],
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "types": ["node", "vite/client"],
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  }
}
```

### 15. `server/index.ts`
Express server for production deployment.

```typescript
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
```

---

## Design System

### Color Palette
- **Background**: Dark Charcoal (`oklch(0.12 0.01 280)`)
- **Foreground**: Warm Beige (`oklch(0.92 0.01 45)`)
- **Primary/Accent**: Muted Gold (`oklch(0.55 0.15 45)`)
- **Card**: Slightly Lighter Charcoal (`oklch(0.18 0.01 280)`)

### Typography
- **Headings**: Playfair Display (serif, 700 weight)
- **Body**: Inter (sans-serif, 400 weight)
- **Letter Spacing**: -0.02em for headings

### Animations
- **Fade In Up**: 0.6s ease-out
- **Fade In**: 0.6s ease-out
- **Slide In Left**: 0.6s ease-out
- **Smooth Transitions**: 0.3s ease for all interactive elements
- **Image Hover**: 0.5s ease scale transform

---

## Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px
2. **Dark Theme**: Default dark theme with warm accents
3. **Interactive Menu**: Tab-based menu system with categories
4. **Reservation Form**: Fully functional form with validation
5. **Gallery**: Image gallery with hover animations
6. **Contact Section**: Location, phone, hours, and social links
7. **Navigation**: Fixed header with smooth scrolling
8. **Error Handling**: Error boundary for React errors
9. **Theme Management**: Context-based theme provider

---

## Installation & Running

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm check

# Format code
pnpm format
```

---

## Image Assets

Located in `client/public/images/`:
- `hero-ambiance.jpg` - Restaurant interior with warm lighting
- `hero-food.jpg` - Beautifully plated gourmet dish
- `menu-showcase.jpg` - Flat-lay of menu items
- `chef-craft.jpg` - Chef plating a dish

---

## Project Structure Summary

This is a **static frontend-only** project using React 19 with TypeScript. It includes:
- Modern component architecture with shadcn/ui
- Tailwind CSS 4 with OKLCH color space
- Client-side routing with Wouter
- Theme management with React Context
- Error boundaries for robustness
- Fully responsive mobile-first design
- Professional restaurant branding and content

The website is optimized for conversions with clear CTAs, smooth animations, and an elegant design that appeals to urban professionals seeking quality dining experiences.
