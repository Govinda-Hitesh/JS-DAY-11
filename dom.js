//DOM manipulation

const element1 = document.getElementById('ht');
console.log(element1);//full printed in output as it 
console.log(element1.innerHTML);//print only inside p tag
///same class name but diff. inside of p tag showing the index of p tag and does not innerhtml , innertext not showing
//in this condition showing output putting the index value than printing the output

const element2 = document.getElementsByClassName('yt');
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[1].innerHTML);

const element3 = document.getElementsByTagName('h1');
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[1].innerHTML);

function changeText() {
    const changeText = Document.getElementsByTagName('h1');
    console.log(changeText[0].innertext);
}

