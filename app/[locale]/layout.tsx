// app/layout.tsx
import RootLayout from './RootLayout.server';
import ClientWrapper from './RootLayout.client';

export default function Layout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  return (
    
      <RootLayout params={params}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </RootLayout>
  
  );
}
