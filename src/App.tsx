import React from 'react';
import Card from "./components/Card";
import './global.css'
import Input from "./components/ui/Input";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Card style={{width: '43vw', height: '80vh'}}>
          <TodoList/>
      </Card>
    </div>
  );
}

export default App;
