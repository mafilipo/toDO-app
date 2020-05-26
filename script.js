console.log(' Script successfully loaded !');

(function() {
    'use strict';

    function Todo() {

        const input = document.querySelector("input");
        const addButton = document.querySelector(".addButton");
        const list = document.querySelector("ul");

        function removeItem(event) {
            const removeButton = event.target;
            removeButton.parentNode.remove();




        }

        function addRemoveButton(item) {
            const removeButton = document.createElement("div");
            removeButton.className = "removeButton";

            removeButton.addEventListener("click", removeItem);
            item.appendChild(removeButton);



        }

        function markDone(event) {
            const cbox = event.target;
            cbox.parentNode.classList.toggle("done");


        }

        function addCheckbox(item) {
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.addEventListener("click", markDone)
            item.insertBefore(checkbox, item.firstChild);

        }


        function addTextSpan(item, text) {
            const span = document.createElement("span");
            span.className = "text-span";
            span.innerText = text;
            item.insertBefore(span, item.firstChild.nextSibling);


        }

        function createItem(text) {
            const listItem = document.createElement("li");
            listItem.className = "todo-item";
            listItem.innerText = text;
            addRemoveButton(listItem);
            addCheckbox(listItem);
            addTextSpan(listItem, text);

            return listItem;


        }


        function addItem() {
            console.log("add item");
            //create item
            const text = input.value;

            const item = createItem(text);
            list.appendChild(item);
            input.value = "";






        }
        this.addListeners = function() {
            addButton.addEventListener("click", addItem);
        };

    }
    Todo.prototype.init = function() {
        this.addListeners();
    };

    const todo = new Todo();
    window.addEventListener("load", todo.init());





})();