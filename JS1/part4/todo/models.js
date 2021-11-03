class Todo { // 할 일에 대한 정보
    constructor(contents, done) {
      this.contents = contents;
      this.done = done;
    }
    toggle() {
      this.done = !this.done;
    }
  }
  
  class TodoManager { // 할 일들을 관리
    constructor(todos = []) {
      this._todos = [];
      todos.forEach(todo => {
        this.addTodo(todo.contents, todo.done);
      });
    }
  
    addTodo(contents, done = false) { // 새로운 할 일을 추가
      const newTodo = new Todo(contents, done);
      this._todos.push(newTodo);
      return newTodo;
    }
  
    getList() { // 할 일 반환
      return this._todos;
    }
  
    get leftTodoCount() {
      return this._todos.reduce((p, c) => { // 반환된 값을 증가시키면서 반복하며 남은 할 일 개수를 구한다.
        if (c.done === false) {
          return ++p;
        } else {
          return p;
        }
      }, 0);
    }
  }

  export {Todo, TodoManager}