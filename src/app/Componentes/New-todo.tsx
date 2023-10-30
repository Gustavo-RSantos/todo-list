'use client';

import { KeyboardEvent,useState} from 'react'
import { List } from './List';

import './New-todo.css'
//import { type } from 'os';

export function NewTodo() {

//teste da interface de forma fixa
  const inicialActions = [
    { id: 1 , title: 'Estudar React', checked: false},
    { id: 2 , title: 'Estudar Inglês', checked: true},
    { id: 3 , title: 'Estudar Espanhol', checked: true}
  ]


  const [newAction, setNewAction] = useState('');
  const [actions, setActions] = useState(inicialActions);

  //Função será usada assim que for criado a área de aplicação da Lista
  function createNewAction(event: { preventDefault: () => void; }){
    event.preventDefault();

    setActions([...actions, { id: Date.now(), title: newAction, checked: false }])
    setNewAction('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && newAction.trim() !== '') {
      setActions([...actions, { id: Date.now(), title: newAction, checked: false }]);
      setNewAction('');
    }
  }

  const onDelete = (teste: number) => {
    let filteredActions = actions.filter((obj) => obj.id !== teste);
    setActions(filteredActions);
    console.log(filteredActions)
  }

  return (
    <div className='main'>
      <input
        className='new-todo'
        type="text"
        placeholder='O que precisa ser feito?'
        value={newAction}
        onKeyDown={handleHotKeySubmit}
        onChange={(event) => {
          setNewAction(event.target.value)
        }}
      />
        {actions.map((action) => {
      return <List
      key={action.id}
      id = {action.id}
      title={action.title}
      checked={action.checked}
      onDelete={() => onDelete(action.id)}
      />
      })}
    </div>
  )
}
