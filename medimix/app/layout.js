import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";

import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Doctor appointment app",
  description: "Connect with doctor anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
     signInUrl="/sign-in"
      signUpUrl="/sign-up">
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className}  h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
          

        {/* Header */}
        <Header/>

        <main className="min-h-screen ">
            <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
            {children}

            </ThemeProvider>
        </main>

         {/* footer */}


         <footer className="bg-muted/12 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">

              <p>Made with love by the cponqueror</p>
          </div>
         </footer>

      </body>
    </html>
            </ClerkProvider>
  );
}
