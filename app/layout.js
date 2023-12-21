import './globals.css'

export const metadata = {
  title: 'Sebastian Gonzalez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
