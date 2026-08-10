import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
    subsets: ['latin'],
    variable: '--font-cinzel',
});

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={cinzel.variable}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}