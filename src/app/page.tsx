import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/Home"

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <main className="min-h-[35rem]"></main>
      <Footer />
    </main>
  )
}
