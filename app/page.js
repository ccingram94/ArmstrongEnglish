import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  cn: { nativeName: '中文' },
  es: { nativeName: 'Español'},
};

export default function Home() {
  const { t, i18n } = useTranslation();
  
  return (
    <>
    <main className="flex bg-mesh bg-center min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('Hello World')}</h1>
    </main>
    </>
  )
}
