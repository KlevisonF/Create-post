import { Post } from "./components/Post";
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/KlevisonF.png',
      name: 'Klevison Ferreira',
      role: 'CMO @ Finampy'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/KevinF.png',
      name: 'Kevin Ferreira',
      role: 'CTO @ Finampy'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-10-03 20:00:00')
  },
];


function App() {


  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post =>{
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>

  )
}

export default App

