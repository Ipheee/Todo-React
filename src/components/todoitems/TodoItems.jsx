import './TodoItems.css'

export const TodoItems = ({todoTask, deleteTask}) => {

  return (
    <section className='task'>
        <p>{todoTask.task}</p>
        <section >
            <span onClick={() =>deleteTask(todoTask.id)}>🗑️</span>
        </section>

    </section>
  )
}
