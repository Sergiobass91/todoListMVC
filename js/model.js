//Las clases son objetos.
export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
          this.todos = [
            {
              id: 0,
              title: 'Learn JS',
              description: 'Web stuff',
              completed: false,
            }
          ]
          this.currentId = 1;
        } else {
          this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
      }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos(){
        return this.todos.map((todo) => ({...todo})); //retorna copia y no la referencia
    }

    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }
    
    toggleCompleted(id){
        console.log(id);
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    editTodo(id, values){
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }

    addTodo(title, description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }

        this.todos.push(todo);
        this.save();
        //Retorna un clon del objeto, de esta forma no se puede tocar el modelo.
        //return Object.assign({}, todo);
        //Sintaxis moderna, expande un clon del arreglo.
        return {...todo}
    }

    removeTodo(id){
        const index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
        this.save();
    }

}