import './App.css'

const Title = ({children}: {children: string}) => {
  return <h1>{children}</h1>
}

function App() {

  return (
    <div className='App'>
      <Title>Hello World!</Title>
    </div>
  )
}

export default App
