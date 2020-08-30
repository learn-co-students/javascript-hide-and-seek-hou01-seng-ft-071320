function getFirstSelector(selector){
   return document.querySelector(selector)
}
function nestedTarget(){
   return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis= document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(const ele of lis){ele.innerHTML=parseInt(ele.innerHTML)+n}
}

function deepestChild(){
    const final= document.querySelector('div#grand-node div div div div')
    return final
}