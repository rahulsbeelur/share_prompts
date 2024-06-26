import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: 'Share Prompts',
    description: 'Discover and Share AI powered prompts'
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
