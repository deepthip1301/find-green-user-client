import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid mx-auto overflow-auto" style={{minHeight: "92vh"}}>{children}</div>
    </main>
  )
}

export default Main
