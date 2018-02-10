var taskClass = {
    array: [],
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
        this.itemAttr = this.getAttribute('data-index');
        if(_.includes(this.array, this.itemAttr)) {
            localStorage.setItem('item-index', this.itemAttr);
        }
    },
    clearChecked: function() {

    },
    addListeners: function(){
        for (var i = 0; i < this.item.length; i++) {
            taskClass.item[i].addEventListener('click', function(e) {
                this.classList.toggle('is-selected');
                e.preventDefault();
                /* set index to localstorage */
                this.storeChecked();
            });
            taskClass.item[i].setAttribute('data-index', [i]);
        }
    }
};

taskClass.init();
