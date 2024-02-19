
// seats cont
const remingSeats = document.getElementById("remaing-seats")
const remingSeatsAll = remingSeats.innerText;
const totalSeat = document.getElementById('total-seat')


const allSeat = [];

// seat name
function seatNumber(event) {

    const seatName = event.id;
    const seatName1 = document.getElementById(seatName);
    if (!seatName === allSeat.includes(seatName)) {
        allSeat.push(seatName)

    }  

    if (allSeat.length <= 4) {
        const remingSeatsAll1 = remingSeatsAll - allSeat.length
        remingSeats.innerText = remingSeatsAll1
        totalSeat.innerText = allSeat.length
        seatName1.classList.add('bg-green-500', 'hover:bg-green-500', 'text-white')
      
   
      
   
     }

let tt=0
if (allSeat[0]===seatName) {
    const hide=document.getElementById('hide')
    hide.classList.remove('hidden')
    const paymentSeatName=document.getElementById('payment-seat-name')
    paymentSeatName.innerText=seatName
 
    const bdt=document.getElementById('bdt')
    bdt.innerText=550;
console.log(bdt)
const bdtt=bdt.innerText
const grd=document.getElementById('grd')
grd.innerText=bdtt
    
}    
 
else if(allSeat[1]===seatName){
    const hide1=document.getElementById('hide1')
    hide1.classList.remove('hidden')
    const paymentSeatName1=document.getElementById('payment-seat-name1')
    paymentSeatName1.innerText=seatName
    const bdt=document.getElementById('bdt')
    const bdt2=parseInt(bdt.innerText)
   const bdt3=550+bdt2
   bdt.innerText=bdt3

   const grd=document.getElementById('grd')
   grd.innerText=bdt.innerText


}
else if(allSeat[2]===seatName){
    const hide2=document.getElementById('hide2')
    hide2.classList.remove('hidden')
    const paymentSeatName2=document.getElementById('payment-seat-name2')
    paymentSeatName2.innerText=seatName
    const bdt=document.getElementById('bdt')
    const bdt2=parseInt(bdt.innerText)
   const bdt3=550+bdt2
   bdt.innerText=bdt3
   const grd=document.getElementById('grd')
   grd.innerText=bdt.innerText


}
else if(allSeat[3]===seatName){
    const hide3=document.getElementById('hide3')
    hide3.classList.remove('hidden')
    const paymentSeatName3=document.getElementById('payment-seat-name3')
    paymentSeatName3.innerText=seatName
    const hidden=document.getElementById('hidden')
    hidden.classList.remove('hidden')
    const bdt=document.getElementById('bdt')
    const bdt2=parseInt(bdt.innerText)
   const bdt3=550+bdt2
   bdt.innerText=bdt3
   const grd=document.getElementById('grd')
   grd.innerText=bdt.innerText
  


}
const price1=document.getElementById('price')

const ticketPrice=price1
 console.log(price1)


}
const dis=document.getElementById('dis')

dis.addEventListener('keyup',function (event) {
const cupons2=event.target.value;
console.log(cupons2)
sf(cupons2)

}


)

function ap() {
sf()
kk()
}
    
function sf(pp) {
  
    if(pp==='NEW15'){
        const grand=(document.getElementById('grd')).innerText
        const ll=grand-(grand*(15/100))
        document.getElementById('grd').innerText=ll
        
        // const hidden=document.getElementById('hidden')
        // hidden.classList.add('hidden')
    }
    else if(pp==='Couple 20'){
        // const grand=document.getElementById('grd')
        // const ll=grand-(grand*(20/100))
        // grand.innerText=ll
        // console.log(grand.innerText)
        const grand=(document.getElementById('grd')).innerText
        const ll=grand-(grand*(20/100))
        document.getElementById('grd').innerText=ll
        // const hidden=document.getElementById('hidden')
        // hidden.classList.add('hidden')
}

}
function kk() {
    const hidden=document.getElementById('hidden')
hidden.classList.add('hidden')
    
}


        
 
    //  

    //     }

    // })

    // if (cupons==='NEW15') {
    //     const grd1=document.getElementById('grd')
    //     console.log(grd1)
        
        // }
        // else if (cupons2==='Coupon Code'){
        //     console.log("yhuihju")
        // }
    

    




// reaming seat


// pay 



  

 
//  const input=document.getElementById('nxtbtn');
//  const inputTxt=input.value
//  console.log(inputTxt)



 //     if (allSeat.length=4) {
    //         hide.classList.remove('hidden')
    //         const paymentSeatName=document.getElementById('payment-seat-name')
    //         paymentSeatName.innerText=allSeat[0]
           
    //     }else{
    //         if(allSeat.length=3) {
    //             hide1.classList.remove('hidden')
    //             const paymentSeatName1=document.getElementById('payment-seat-name1')
    //             paymentSeatName1.innerText=allSeat[1]
               
    //         }
    //         else{
                
    //     if (allSeat.length=2) {
    //         hide2.classList.remove('hidden')
    //         const paymentSeatName2=document.getElementById('payment-seat-name2')
    //         paymentSeatName2.innerText=allSeat[0]
            
    //     }
    //         }
    //     }
    //    }
    
        

//         const pk = `<div  id="seatandprice" class="flex  my-5 justify-around items-center " >
//     <p id="payment-seat-name" class="fok text-gray-500"></p>
//     <p class=" ml-14 text-gray-500">Economy</p>
//     <p class=" text-gray-500">550</p>
// </div>`
//         const paymentSeatName11 = document.getElementById('paymentseatname1')


        // const paymentSeatName=document.getElementById('payment-seat-name')
        // for (let i = 0; i < 5; i++) {

        //     // console.log(paymentSeatName11)


        //     paymentSeatName11.innerHTML = pk
        //     const paymentSeatName = document.getElementById('payment-seat-name')
        //     paymentSeatName.innerText = seatName

        // }


        //     paymentSeatName11.inn=pk
        // const Fok=document.getElementsByClassName('fok')
        // Fok.innerText=allSeat[allSeat.length]

        //   if (allSeat.length===1) {
        //     paymentSeatName.innerText=allSeat[0]
        // seatAndPrice.classList.remove('hidden')

        //   }

        // seatAndPrice1.classList.remove('hidden')
        // seatAndPrice2.classList.remove('hidden'