
import './globals.css'
import Navigation from './components/Navigation'


/* contex */


export const metadata = {
  title: 'Collect Mother Mary art',
  description: 'Collect Mother Mary art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      
      <body>
          <Navigation />
          {children}
      </body>
    </html>
  )
}
