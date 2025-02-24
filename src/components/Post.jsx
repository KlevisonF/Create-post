import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { use } from 'react'


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const [newCommentText, SetNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })
    function handleCreateNewComment(e) {
        e.preventDefault();



        setComments([...comments, newCommentText]);
        SetNewCommentText('')


    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        SetNewCommentText(event.target.value)
    }

    function onDeleteComment(commentToDelete) {
        const commentsWithoutDeleteone = comments.filter(comment =>{
            return comment === commentToDelete;
        })
       setComments(commentsWithoutDeleteone)
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    const isNewCommentEmpty = newCommentText.length === 0
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe um Comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                    disabled={isNewCommentEmpty} 
                    type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={onDeleteComment} />


                })}
            </div>

        </article>
    )
}