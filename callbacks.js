function loadScript(callback){
    setTimeout(() => {
        console.log('Order received, kindly start production');
        callback()
    }, 2000);
}
function production() {
    setTimeout(()=>{
        console.log('production has started');
        setTimeout(() => {
            console.log('customer picked strawberry');
        }, 1000);
    }, 1000)
}
//loadScript(production);


function doStep1(init, callback) {
    const result = init + 1;
    console.log('Step 1 finished');
    callback(result);
}
  
function doStep2(init, callback) {
    const result = init + 2;
    console.log('Step 2 finished');
    callback(result);
}

function doStep3(init, callback) {
    const result = init + 3;
    console.log('Step 3 finished');
    callback(result);
}

doStep1(0, (result1)=>{
    doStep2(result1, (result2)=>{
        doStep3(result2,(result3)=>{
            console.log(`result: ${result3}`);
        })
    })
})

function callFuncBack(callMe){
    setTimeout(() => {
        console.log('Through with this, move to the next one');
        callMe()
    }, 2000);
}
function call(){
    setTimeout(() => {
        console.log('Step 2');
        setTimeout(() => {
            console.log('You can now boil the water');
            setTimeout(()=>{
                console.log('boil the chicken');
            }, 500)
        }, 1000);
    }, 2000);
}
callFuncBack(call)








// doStep1(0, (result1) => {
//     //console.log(`result: ${result1}`);
//     doStep2(result1, (result2) => {
//         console.log(`result: ${result2}`);
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
// });