import './app.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}<Toaster position="top-center" reverseOrder={false} toastOptions={{error:{style:{background: '#1E1F20',color:'#fff'},duration:2000,iconTheme:{primary:'#fff',secondary: '#131314',}}}}/></body>   
        </html>
    );
}