const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// to select content item
function selectItem(e) {
    //Remove all the show and border classes
    removeBorder();
    removeShow();

    //... then add a border to the currently clicked tab
    this.classList.add('tab-border');

    //take the contents to show from the DOM, string literal and placeholder from ES6
    const tabContentItem = document.querySelector('#${this.id}-content');

    // add in the show class
    tabContentItem.classList.add('show');
}

// remove bottom border from the other 2 tabs. cycle through array, use arrow functiom

function removeShow() {
    tabItems.forEach(item => {
        item.classList.remove('show');
    });
}

// listener for clicked item
tabItems.forEach(item => {
    item.addListenerEvent('click', selectItem);
});
