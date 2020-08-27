
const getFirstSelector = function(selector){
    return document.querySelector(selector)
}

const nestedTarget = function(){
    return document.querySelector('#nested .target')
}

const deepestChild = function(){
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];
  
    while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
    }
    return node;
  }
  

const increaseRankBy = function(n){
    const allRank = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < allRank.length; i++) {
        allRank[i].innerHTML = (Number(allRank[i].innerHTML)+Number(n));
    }
}
