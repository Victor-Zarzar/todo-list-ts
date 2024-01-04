import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/Home"
import { Task } from "./interfaces/Task"

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <main className="min-h-[7rem]"></main>
      <Footer />
    </main>
  )
}
