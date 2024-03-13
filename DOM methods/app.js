function countallparas(){
    let all = document.getElementsByTagName("p");
    const all_count = all.length;
    alert(`Count of all the paragraphs are: ${all_count} `);
}

function first_div(){
    let div2 = document.getElementById("div2");
    let parasInDiv2 = div2.getElementsByTagName("p");
    let countInDiv2 = parasInDiv2.length;
    alert(`The number of paras in division 1 is : ${countInDiv2}`);
}

function second_div_para() {
    const div2 = document.getElementById("div2");
    const div2Paras = div2.getElementsByTagName("p");
    const num2 = div2Paras.length;
    alert(`The number of paras in division 2 is ${num2}`);
}
