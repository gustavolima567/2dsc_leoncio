const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btncalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')

function calcular(){
const n1 = Number(numero1.value)
const n2 = Number(numero2.value)
if(typeof n1 === 'number'
    && typeof n2 ==='number'  ){
        const add = `o resultado da adisão é: ${n1+n2}`
         const div = `o resultado da divisão é: ${n1/n2}`
         const sub = `o resultado da subtração é: ${n1-n2}`
         const mult = `o resultado da multiplicação é: ${n1*n2}`
        //alert(adicao)
        adicao.innerHTML = add
        divisao.innerHTML = div
        subtracao.innerHTML = sub
        multiplicacao.innerHTML = mult
    } else{
        alert('por favor,digite um numero correto')
    }
}






btncalcular.addEventListener('click', function(evento){
    evento.preventDefault()
    calcular()
})