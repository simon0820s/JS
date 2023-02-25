const grafos=document.querySelector(".grafos");

console.log(grafos);

grafos.innerText="jejeje";
grafos.classList.remove("grafos")
console.log(grafos);

const img=document.createElement('img');
img.setAttribute('src',"https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg");
grafos.append(img);
img.setAttribute("width","300px")