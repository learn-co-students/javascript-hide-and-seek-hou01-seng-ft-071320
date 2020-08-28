const getFirstSelector = (selector) => document.querySelector(selector)

const nestedTarget = () => document.querySelector('#nested .target')

function increaseRankBy(n) {
    let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    for (let i = 0; i < list.length; i++) {
        
        list[i].innerHTML = Number(list[i].innerHTML) + n;
    }
} 

function deepestChild() {
    let bigNode = document.querySelector('#grand-node')
    let babyNode = bigNode.children[0]

    while (babyNode){
        bigNode = babyNode
        babyNode = bigNode.children[0]
    }
    return (bigNode)
}