import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Food from './components/Food/Food.jsx'
import Student from './components/Student/Student.jsx'
import List from './components/List/List.jsx'
import Button from './components/Button/Button.jsx'
import Form from './components/Form/Form.jsx'
import Todo from './components/Todo/Todo.jsx'
import Clock from './components/Clock/Clock.jsx'
import Stopwatch from './components/Stopwatch/Stopwatch.jsx'

function App() {
  const fruits = [
    {id:1, name:"Apple", calories: 95},
    {id:2, name:"Orange", calories: 45},
    {id:3, name:"Banana", calories: 105},
    {id:4, name:"Coconut", calories: 159},
    {id:5, name:"Pineapple", calories: 37},
  ]

  const vegetables = [
    {id:6, name:"Potatoes", calories: 110},
    {id:7, name:"Celery", calories: 15},
    {id:8, name:"Carrots", calories: 25},
    {id:9, name:"Corn", calories: 63},
    {id:10, name:"Broccoli", calories: 50},
  ]

  return (<>
    <Header />
    <Food />
    <hr></hr>
    <Student name="Harsh Kumar" age={21} isStudent={true} />
    <Student name="Spongebob" age={24} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidward" age= {50} isStudent={false} />
    <Student name="Larry"/>
    <hr></hr>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    <hr></hr>
    <Button />
    <hr></hr>
    <Form />
    <hr></hr>
    <Todo />
    <hr></hr>
    <Clock />
    <hr></hr>
    <Stopwatch />
    <hr></hr>
    <Footer />
  </>)
}

export default App
