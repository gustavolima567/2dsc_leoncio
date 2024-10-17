const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btncalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')

function calcular(){
const n1 = number(numero1.vlue)
const n2 = number(numero2.vlue)
if(typeof n1 === 'number'
    && typeof n2 ==='number'  ){
        const adicao = `a soma e ${n1} e ${n2} = ${n1+n2}`
        alert(adicao)
    } else{
        alert('por favor,digite um numero correto')
    }




    const resultado = numero1.value + numero2.value
    alert('resultado:' + resultado)
}

btncalcular.addEventListener('click', function(){
    calcular()
})