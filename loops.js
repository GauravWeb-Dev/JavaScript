/*
1.for loop
2.while loop
3.do while loop

*/


//1.for loop

// for(let i=33;i<=77;i++){
//     console.log(i);
// }

// console.log("\n");

// for(let i=77;i>=33;i--){
//     console.log(i);
// }


//2.while loop

// let i=0;

// while(i<=100){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// console.log();

// let j=100;
// while(j>=0){
//     if(j%2==1){
//         console.log(j);
//     }
//     j--;
// }

console.log();

//3.do while

// let m = 25;
// do{
//     console.log(m);
//     m++;
// }while(m<=75);



// let n = 75;
// do{
//     console.log(n);
//     n--;
// }while(n>=25);


let n =7;
for(let i=0;i<n;i++){
    let s = "";
    for(let j=0;j<n;j++){
        if(i==0 || j==0 || i==n-1 || j==n-1){
            s+="*";
        }
        else{
            s+=" ";
        }
    }

    console.log(s); 
}












