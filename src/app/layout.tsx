import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import { Header } from '@/components/Header';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leilane Andreia Clinic Studio',
  description: 'Especialista em Estética, Beleza e Epilação Humanizada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          {children}
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
