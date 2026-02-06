import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import { Header } from '@/components/Header';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';
import './globals.css';

import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Leilane Andreia | Estética Avançada e Sobrancelhas em Santa Rita - PB',
  description: 'Clinic Studio especializada em Estética Facial, Corporal, Epilação e Sobrancelhas. Agende sua avaliação e realce sua beleza com atendimento humanizado.',
  keywords: ['Estética', 'Sobrancelhas', 'Epilação', 'Limpeza de Pele', 'Santa Rita', 'Paraíba', 'Beleza', 'Clinic Studio'],
  openGraph: {
    title: 'Leilane Andreia | Estética Avançada e Sobrancelhas',
    description: 'Realce sua beleza com nossos tratamentos estéticos personalizados. Agende sua avaliação!',
    url: 'https://leilaneandrea.com.br', // Placeholder
    siteName: 'Leilane Andreia Clinic Studio',
    images: [
      {
        url: '/images/logocomfundoredondo.webp',
        width: 800,
        height: 600,
        alt: 'Leilane Andreia Clinic Studio Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/images/logocomfundoredondo.webp',
    shortcut: '/images/logocomfundoredondo.webp',
    apple: '/images/logocomfundoredondo.webp',
  },
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
          <JsonLd />
          <Header />
          {children}
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
