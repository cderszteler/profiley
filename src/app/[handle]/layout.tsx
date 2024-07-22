import React from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  )
}