import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalReduxProvider } from './GlobalRedux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shipmate',
  description: 'Frontend Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalReduxProvider>
          {children}
        </GlobalReduxProvider>
      </body>
    </html>
  )
}
