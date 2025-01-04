import { Post } from "./components/Post";
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from './App.module.css'

function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Klevison Ferreira"
            content='Back-end'
          />
          <Post 
            author="Kevin"
            content='Front-end'
          />
        </main>
      </div>
    </div>

  )
}

export default App

