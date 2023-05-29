let valores = [5,67,4,12,6,7,3,5]

/*
for (pos=0; pos < valores.length ;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}