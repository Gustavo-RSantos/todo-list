import "./globals.css"
import { NewTodo } from "./Componentes/New-todo"

export default function Home() {
  return (
    <main>
      <div className="container">
        <header>
          <h1 className="title">Todo</h1>
        </header>
        <div className="main">
          <NewTodo />
        </div>

      </div>
    </main>
  )
}
