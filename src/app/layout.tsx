import type { Metadata } from "next";
import ActiveQuest from "@/sections/ActiveQuest";
import Navigation from "@/sections/Navigation";
import Profile from "@/sections/Profile";
import TopBar from "@/sections/TopBar";
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "Marharyta Neskoromna - Frontend Developer",
  description: "Portfolio of Marharyta Neskoromna, a frontend developer specializing in React and Next.js. Explore projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>

            <div className="wrapper">
              <header>
                <TopBar />
              </header>
              <main className="main">
                <aside className="left-sidebar">
                  <Profile />
                </aside>
        
                <div className="content-wrapper">
                  {children}
                </div>
        
                <aside className="right-sidebar">
                  <ActiveQuest />
                </aside>
              </main>
              <Navigation />
            </div>
        
      </body>
    </html>
  );
}
