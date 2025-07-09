'use client';

import GlobalStyle from '@/components/common/GlobalStyle/GlobalStyle.tsx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
