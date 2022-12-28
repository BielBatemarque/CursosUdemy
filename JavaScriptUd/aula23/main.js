// avaliação de curto e circuito
/*
&& -> e
|| -> ou
FALSY - >valores que são considerados como false em JavaScript
false
0
''
null/ undefined
NaN
*/

function falaoi(){
    return 'oi'
}

var VaiExecutar = false;
console.log(VaiExecutar && falaoi);

console.log(0 || false || null || 'luiz otavio' || true);