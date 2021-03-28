
import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', ()=>{
    //instanciar objetos
    const model =  new Model();
    const view =  new View();
    
    //asignar
    model.setView(view);
    view.setModel(model);

    view.render();

});