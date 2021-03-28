import Alert from './alert.js';

export default class AddTodo {

    constructor() {
         this.btnAdd = document.getElementById('add');
         this.title = document.getElementById('title');
         this.description = document.getElementById('description');
         this.alert = new Alert('alert');
    }

    onClick(callback){
        this.btnAdd.onclick = () =>{
            if (title.value === '' || description.value === ''){
                this.alert.show('Title and Description are requiered');
            }else {
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
};