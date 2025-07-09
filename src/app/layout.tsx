import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from "@/components/common/GlobalStyle/GlobalStyle.tsx";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <body>
        <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}