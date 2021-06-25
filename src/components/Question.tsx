import cx from 'classnames'

import '../styles/question.scss'

interface QuestionProps {
  content: string
  author: {
    name: string
    avatar: string
  }
  isAnswered?: boolean
  isHighlight?: boolean
}

export const Question: React.FC<QuestionProps> = ({ content, author, isAnswered, isHighlight, children }) => {
  return (
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlight: isHighlight && !isAnswered }
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}