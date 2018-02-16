var taskClass = {
    dataField: [],
    init: function(){
        /* get values from localStorage on page load */
        this.storageData = localStorage.getItem('checked-items');
        if(this.storageData !== null) {
            this.dataField = JSON.parse(this.storageData);
        }
        this.cacheDOM();
        this.addListeners();
    },
    cacheDOM: function(){
        this.list = document.querySelector('.js-task-list');
        this.item = this.list.querySelectorAll('li');
        this.label = this.list.querySelectorAll('label');
        this.checkbox = this.list.querySelectorAll('input[type=checkbox]');
    },
    addListeners: function(){
        for (var i = 0; i < this.item.length; i++) {
            taskClass.item[i].setAttribute('data-index', [i]);
            if(_.includes(JSON.parse(localStorage.getItem('checked-items')), taskClass.item[i].getAttribute('data-index'))) {        
                taskClass.item[i].classList.add('is-selected');
            }
            taskClass.item[i].addEventListener('click', function(e) {
                e.preventDefault();
                this.itemAttr = this.getAttribute('data-index');
                this.classList.toggle('is-selected');
                /* if array does not contain data attribute, add it to array */
                if(!_.includes(taskClass.dataField, this.itemAttr)) {
                    taskClass.dataField.push(this.itemAttr);
                    /* set json to localstorage */
                    localStorage.setItem('checked-items', JSON.stringify(taskClass.dataField));
                } else {
                    /* if array does contain data attribute, remove it from array */
                    _.pull(taskClass.dataField, this.itemAttr);
                    /* set json to localstorage */
                    localStorage.setItem('checked-items', JSON.stringify(taskClass.dataField));
                }
            });
        }
    }
};

taskClass.init();
