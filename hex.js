const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    let hexColor = '#';
    for(let i = 0;i<6;i++)
    {
        hexColor += hex[getRandom()];
    }

    color.textContent = hexColor;
    document.body.style .backgroundColor=hexColor;
})

color.addEventListener('click',copyDivToClipboard)

getRandom = ()=>{
    return Math.floor(Math.random()*hex.length);
}
function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copyVal"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}