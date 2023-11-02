import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header>
            <h1>ToDo <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            style={{ width: '60px', height: 'auto' }}
            />
            </h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
  )
}
