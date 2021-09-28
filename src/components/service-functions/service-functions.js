function toggleLiked(set, l, title){
  window.localStorage.setItem(`image${title}`, l*-1);
  set(prev=>prev*-1)
}

function scrollLeft(set){
  set(prev=>prev-1)
}

function scrollRight(set){
  set(prev=>prev+1)
}

// function upload(path, params){
//   const form = document.createElement('form')
//   form.method='POST'
//   form.action=path
//   form.appendChild(createElement("input",{

//   }))
// }


export{
  toggleLiked,
  scrollLeft,
  scrollRight,
};