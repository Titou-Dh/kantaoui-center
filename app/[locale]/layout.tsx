// app/layout.tsx
import RootLayout from './RootLayout.server';
import ClientWrapper from './RootLayout.client';
import { getMessages } from 'next-intl/server';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });
  return (
    
      <RootLayout params={params} messages={messages}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </RootLayout>
  
  );
}
