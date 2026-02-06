import { WithContext, BeautySalon } from 'schema-dts';

export const JsonLd = () => {
    const jsonLd: WithContext<BeautySalon> = {
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'Leilane Andreia Clinic Studio',
        image: 'https://leilaneandrea.com.br/images/logocomfundoredondo.webp', // Placeholder domain
        description: 'Especialista em Estética, Beleza e Epilação Humanizada com atendimento personalizado em Santa Rita - PB.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Bahia, 56',
            addressLocality: 'Santa Rita',
            addressRegion: 'PB',
            postalCode: '58301-365',
            addressCountry: 'BR',
        },
        telephone: '+5583999563338',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
            },
        ],
        sameAs: [
            'https://www.instagram.com/leilaneandreia.clinicstudio/',
        ],
        priceRange: '$$',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};
