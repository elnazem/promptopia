import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI Prompts"
}
export default function Layout({ children }) {
    return (
        <html>
            <body>
                <div className="main">
                    <div className="gradient"></div>
                    <div>hi</div>
                </div>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>

    )
}