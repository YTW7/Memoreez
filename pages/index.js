import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useTodo } from '../hooks/todo'
import Loading from '../components/Loading'
import TodoSection from '../components/todo/TodoSection'
import styles from '../styles/Home.module.css'


const Home = () => {
    const { avatar, initialized, initializeStaticUser, loading, userAddress, transactionPending, completedTodos, incompleteTodos, addTodo, markTodo, removeTodo, markStaticTodo,removeStaticTodo, addStaticTodo, input,  handleChange, initializeUser } = useTodo()
    

    return (
    
        <div className={styles.container}>
                <div className={styles.actionsContainer}>
                    <h1 className='text-5xl'>Hello, Welcome to Memoreez</h1>
                    <div className="h-16 w-16 rounded-full border-2 border-white">
                    <div className="flex cursor-pointer flex-col items-center space-y-3">
            <div className="h-16 w-16 rounded-full border-2 border-white">
                <img className="h-full w-full rounded-full object-cover" src={avatar} />
            </div>

        </div>
            </div>
                </div>

            <div className={styles.actionsContainer}>
                {initialized ? (
                    <div className={styles.todoInput}>
                        <div className={`${styles.todoCheckbox} ${styles.checked}`} />
                        <div className={styles.inputContainer}>
                            <form onSubmit={addTodo}>
                                <input value = {input} onChange={handleChange} id={styles.inputField} type="text" placeholder='Store memories on-Chain...' />
                            </form>
                            
                        </div>
                        
                        <div className={styles.iconContainer}>
                        
       
                        </div>
                    </div>
                   
                    
                ) : (
                    <button type="button" className={styles.button} onClick={() => initializeUser()} disabled={transactionPending}>
                        Initialize Account
                    </button>
                )}
                <WalletMultiButton />
            </div>

            <div className={styles.mainContainer}>
                <Loading loading={loading}>
                    <TodoSection title="Your Memories" todos={incompleteTodos} action={markTodo}  />

                    {/* <TodoSection title="Completed" todos={completedTodos} action={removeTodo} /> */}
                </Loading>
            </div>
        </div>
    )
}

export default Home
