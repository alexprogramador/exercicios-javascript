function  addNumber ( )  {
    let  box  =  document . querySelector ( 'select # addedValues' )
    caixa . innerHTML  =   ''
let  feedback  =  document . querySelector ( 'select # addedValues' )
let  input  =  document . querySelector ( 'input # number' )
let  numbersArray  =  [ ]
deixe  resultado  =  documento . querySelector ( 'div # result' )

function  addNumber ( )  {
if  ( entrada . valor . comprimento  ==  0 )  {
    alerta ( 'Por favor, digite um número.' )

}  else  if  ( input . value  <=  0  ||  input . value  >  100 )  {
    alert ( 'Por favor, digite um número entre 1 e 100.' )

}  else  if  ( numbersArray . indexOf ( Number ( input . value ) )  ==  - 1 )  {
    numbersArray . push ( número ( entrada . valor ) )
    let  string  =  document . createElement ( 'opção' )
    string . text  =  'teste'
    caixa . appendChild ( string )
} 
    string . text  =  `O número ${ input . valor } foi adicionado.
    feedback . appendChild ( string )
    resultado . innerHTML  =  ''

} else {
    alert ( `O número $ { input . value } já foi adicionado` )
}
entrada . valor  =  ''
entrada . foco ( )
}

function  submit ( )  {
if  ( numbersArray . length  ==  0 )  {
    alerta ( 'Por favor, digite um número abaixo.' )
}  else  {
    let  total  =  numbersArray . comprimento
    let  max  =  numbersArray [ 0 ]
    let  min  =  numbersArray [ 0 ]
    deixe  soma  =  0
    for  ( i  in  numbersArray )  {
        soma  + =  matriz de números [ i ]
        if  ( numbersArray [ i ]  >  max )  {
            max  =  numbersArray [ i ]
        }  else  if  ( numbersArray [ i ]  <  min )  {
            min  =  numbersArray [ i ]
        }
    }
    deixe  significar  =  soma  /  total

    resultado . innerHTML  =  ''
    resultado . innerHTML  + =  `<p> Há um total de $ { total } número (s). </p>`
    resultado . innerHTML  + =  `<p> O maior número é $ { max } . </p>`
    resultado . innerHTML  + =  `<p> O menor número é $ { min } . </p>`
    resultado . innerHTML  + =  `<p> A soma de todos os números é $ { sum } . </p>`
    resultado . innerHTML  + =  `<p> A média de todos os números é $ { mean . toFixed ( 2 ) } . </p> `
}
} 