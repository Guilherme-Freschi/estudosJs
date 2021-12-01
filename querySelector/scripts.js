var itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);

// querySelectorAll retornará 4 intens li 2
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);
//itens 1 lista
var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista');

console.log(lista);

var primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span);