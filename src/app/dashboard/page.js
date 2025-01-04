import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import React from 'react'

function page() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      <SignOutButton />

      <div className="container mx-auto">
        <span className="font-bold">dfdf</span>
      </div>

    </div>
  )
}

export default page