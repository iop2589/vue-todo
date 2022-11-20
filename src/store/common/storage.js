export default  {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            const strTodo = localStorage.getItem("todoList");
            if (strTodo !== null) {
                arr = JSON.parse(strTodo);
            }
        }
        return arr;
    },
    setLocalStorageItem(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
};