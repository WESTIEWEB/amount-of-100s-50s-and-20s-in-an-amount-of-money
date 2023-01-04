// const withdraw = amount => {

//     let notes = [100, 50 , 20];

//     let result = [];

//     let hundred_count = 0;
//     let fifty_50 = 0;
//     let twenty_20 = 0;

//     if(amount && amount > 40 && amount < 10000) {

//         while(amount > 0) {
//             for (let i = 0 ; i < notes.length; i++) {
                
//                 let denom = notes[i];

//                 if( amount - denom >=0 ) {
//                     amount -= denom;
//                     result.push(denom)
//                     break;
//                 }

//                 else if ( i === notes.length - 1 && amount > 0) {
//                     throw 'NoteUnavailableException'
//                 }
//             }
//         }
//     }
//     else {
//         throw 'InvalidArgumentExcetion';
//     }

//     let final_res = [];
//     for (let val of result) {
//         if(val === 100) {
//             hundred_count++;
//         }
//         if(val === 50) {
//             fifty_50++;
//         }
//         if(val === 20) {
//             twenty_20++;
//         }
//     }
//     final_res.push(hundred_count, fifty_50, twenty_20);

//     return final_res;


// }

// console.log(withdraw(260));

/**
 * a code snippet to find the number of ways to make change for a given amount, in denominations of 20, 50, 100
 * @param {*} amount 
 * @returns 
 */
    const withdraw = amount => {

        let hundreds = 0;
        let fifties = 0; 
        let twenties = 0;
        console.log(hundreds);

        if(amount && amount >= 20 && amount <= 10000) {

           while(amount >=20) {
            if(amount >= 100) {
                hundreds += Math.floor(amount/100)
                amount = (amount%100);
                console.log(amount)
            }

            if (amount >= 50) {
                fifties += Math.floor(amount/50);
                amount = (amount%50);
                console.log(fifties)
                // console.log(amount);
            }

            if (amount >= 20) {
                twenties += Math.floor(amount/20);
            }
            break
           }

        }
        return([hundreds, fifties, twenties]);


    }

    console.log(withdraw(370));




