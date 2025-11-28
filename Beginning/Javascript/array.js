camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    let ordListe = str.split('-'); 
    let resultat = "";
    for (let i = 0; i < ordListe.length; i++) {
        let ord = ordListe[i];
        if (i == 0) {
            resultat = resultat + ord;
        } 
        else {
            let stortBogstav = ord[0].toUpperCase();
            let restenAfOrdet = ord.slice(1); 
            resultat = resultat + stortBogstav + restenAfOrdet;
        }
    }
    return resultat;
}


function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

// Er samme som overenfor
function filterRange(arr, a, b){
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>= a && arr[i] <= b){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

// fjerner elementer i et array
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i--) {
        if(arr[i] < a || b < arr[i]){
            arr.splice(i,1)
        }
    }
}

let arr = [5, 2, 1, -10, 8];

// Decreasing order
arr.sort((a,b) => b - a)

alert(arr); 


function copySorted(arr) {
    return arr.slice().sort();
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}