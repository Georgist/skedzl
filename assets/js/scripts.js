var taskClass = {
    init: function(){
        this.cacheDOM();
        this.clearChecked();
        this.addListeners();
    },
    cacheDOM: function(){
        this.list = document.querySelector('.js-task-list');
        this.item = this.list.querySelectorAll('li');
        this.label = this.list.querySelectorAll('label');
        this.checkbox = this.list.querySelectorAll('input[type=checkbox]');
    },
    storeChecked: function() {

    },
    clearChecked: function() {

    },
    addListeners: function(){
        for (var i = 0; i < this.item.length; i++) {
            taskClass.item[i].addEventListener('click', function(e) {
                this.classList.toggle('is-selected');
                e.preventDefault();
            });
            taskClass.item[i].setAttribute('data-index', [i]);
            this.storeChecked();
        }
    }
};

taskClass.init();
