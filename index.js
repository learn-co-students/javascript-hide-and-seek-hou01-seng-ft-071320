const getFirstSelector = selector => document.querySelector(selector)

const nestedTarget = () => document.querySelector('div.target')

const deepestChild = () => document.querySelector('#grand-node > div > div > div > div')

// const increaseRankBy = n => {
//     const ranked = document.querySelectorAll('.ranked-list')
//       for (const ran of ranked) {
//           const rankedChildren = ran.children
//           for (const rank of rankedChildren) {
//             rank.innerText = parseInt(rank.innerText) + n
//         }
//     }
// }

const increaseRankBy = n => {
    const ranked = document.querySelectorAll('.ranked-list');
  
    for (let i = 0, l = ranked.length; i < l; i++) {
      let rankedChildren = ranked[i].children;
  
      for (let j = 0, k = rankedChildren.length; j < k; j++) {
        rankedChildren[j].innerHTML = parseInt(rankedChildren[j].innerHTML) + n;
      }
    }
}
