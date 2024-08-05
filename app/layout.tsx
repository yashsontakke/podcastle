import {
  ClerkProvider
} from '@clerk/nextjs'
import './globals.css'

console.log("Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}