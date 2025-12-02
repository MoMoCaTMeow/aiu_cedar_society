export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body style={{ margin: 0, minHeight: '100vh' }}>
                {children}
            </body>
        </html>
    );
}
