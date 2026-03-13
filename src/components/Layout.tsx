import { ReactLenis } from 'lenis/react';
import type { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="relative min-h-screen">
        {children}
      </main>
    </ReactLenis>
  );
}
