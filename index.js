
const getFirstSelector = (selector) => {
    return document.querySelector(selector);
}

const nestedTarget = () => {
    return document.querySelector('.target')
}

const deepestChild = () => {
    return document.querySelector('#grand-node div div div div')
}

const increaseRankBy = (n) => {
    let bigList = document.querySelectorAll('.ranked-list li')
    for ( let i =0; i < bigList.length; i++){
        let val = parseInt(bigList[i].innerHTML)
        let nn = parseInt(n)
        bigList[i].innerHTML = val + nn 
    }
}