const BASE_URL='https://image-repository-challenge.herokuapp.com/'


function fetchUserImages(id){
  return fetch(BASE_URL+`user/${id}`).then(res=> res.json());
}

function fetchAllImages(){
  return fetch(BASE_URL+'all').then(res=> res.json());
}


export{
  fetchUserImages,
  fetchAllImages,
}