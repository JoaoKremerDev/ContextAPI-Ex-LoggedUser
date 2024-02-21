"use client"

import { Header } from "@/components/Header";
import { LoggedUserProvider } from "@/contexts/LoggedUser";

const Page = () => {
  return (
    <div className="mx-auto">
      <LoggedUserProvider >
        <Header />
      </LoggedUserProvider>
    </div >
  )
}
export default Page;     