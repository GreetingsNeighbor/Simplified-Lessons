import Link from "next/link"
import '../styles/globals.css'
export const metadata = {
  title: 'simplified-lessons',
  description: 'simplified-lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="flex flex-col mx-auto ">
        <div className="flex flex-row justify-between navbar">
          <Link className="btn btn-outline" href="/">Home</Link>
          <Link className="btn btn-outline" href="/reflections">Reflections</Link>
        </div>
        <main className="flex-grow-0 container mx-auto">{children}</main>      
        <footer className=""/>
      </body>
    </html>
  )
}
