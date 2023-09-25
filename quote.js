var data = [];
async function getData()
{
var res = await fetch('https://strangerthings-quotes.vercel.app/api/quotes/5');
data = await res.json();
console.log(data);
}
getData();
document.querySelector('.btn').addEventListener('click', function(e){
    let p = document.getElementById('txt');
    let x = document.getElementById('author');
    p.innerText = "'" +data[Math.floor(Math.random()*data.length)].quote + "'";
    x.innerText = "~ " +data[Math.floor(Math.random()*data.length)].author; 
})
function doCopy(){
    navigator.clipboard.writeText(document.getElementById('txt').innerHTML)
    .then(() => {
        console.log('Content copied to clipboard');
})}