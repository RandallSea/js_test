function testVar(){
    if(1 === 1){
//        console.log(message1);
        var message1 = 'This is a test 1';
//        console.log(message1);
    }
//    console.log(message1);
}
testVar();

function testLet(){
    if(1 === 1){
        //console.log(message2);
        let message2 = 'This is a test 2';
//        console.log(message2);
    }
    //console.log(message2);
}
testLet();

function testConst(){
    if(1 === 1){
        //console.log(message3);
        const message3 = 'This is a test 3';
//        console.log(message3);
        //message3 = 'This is a test 3';
    }
    //console.log(message3);
}
testConst();