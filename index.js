
const getFirstSelector = function(selector){
    return document.querySelector(selector)
}

const nestedTarget = function(){
    return document.querySelector('div.target')
}

const deepestChild = function(){
    return document.querySelector("#grand-node > div > div > div > div")
}

const increaseRankBy = function(n){
    const allRank = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < allRank.length; i++) {
        allRank[i].innerHTML = (Number(allRank[i].innerHTML)+Number(n)).toString();
    }
}
