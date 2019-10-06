// const body = document.getElementById('lblIdos');
// var elem = document.getElementById('para');

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "localhost:3000/api/hi", true);
// xhr.onreadystatechange = function() {
//     console.log("A");
//   if (xhr.readyState == 4) {
//       console.log(elem);
//       elem.innerHTML =xhr.responseText;
//       console.log("F");
//   }
//     // WARNING! Might be evaluating an evil script!
//     // var resp = eval("(" + xhr.responseText + ")");  }
// }
// xhr.send();

const io = require("socket.io-client");
let socket = io.connect("http://localhost:3100");

socket.on("welcome",(data) => {
    console.log("rec "+ data );
});

/*        <!-- <script>
            const body = document.getElementById('lblIdos');
var elem = document.getElementById('para');
const imgElem = document.getElementById('imgToLoad');

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/api/hi", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    //   console.log(xhr.responseText);
    //   console.log(xhr.responseTekxt);
    // console.log(xhr.responseText);
    // let doc = new DOMParser().parseFromString(xhr.responseText, 'text/html');
    // let div = doc.body.firstChild;
    // console.log(xhr.responseText);
    // elem.appendChild(div);
    // console.log(xhr.responseText);
    // const resa = JSON.parse(xhr.responseText);
    // console.log(resa);

    const header = xhr.responseText.split(' ')[0];
    const img = xhr.responseText.split(' ')[1] + ' ' + xhr.responseText.split(' ')[2];
    console.log(img);
    


    let docTitle = new DOMParser().parseFromString(header, 'text/html');
    let divTitle = docTitle.body.firstChild;
    let docImg = new DOMParser().parseFromString(img, 'text/html');
    let divImg = docImg.body.firstChild;
    elem.appendChild(divTitle);
    elem.appendChild(divImg);

    // // let response = JSON.parse(xhr.responseText);
    // elem.innerHTML = `Counter: ${resa.counter}`;
    // imgElem.src = "data:image/png;base64,"+resa.img;
  
  }
}
xhr.setRequestHeader("Accept", 'application/json');

xhr.send();
</script> -->*/