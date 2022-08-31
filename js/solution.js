(function () {
    'use strict'

    let list = document.getElementById('ulId').children;
    for (let node of list) {
        console.log(node)
    }

    console.log(list.length)


    const listArr = []
    for (let node of list) {
        listArr.push(node.textContent)
    }


    console.log(listArr)
})();
