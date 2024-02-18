
// seats cont
const remingSeats= document.getElementById("remaing-seats")
const remingSeatsAll=remingSeats.innerText;
const allSeat=[];
const totalSeat=document.getElementById('total-seat')
const seatAndPrice=document.getElementById('hide')
const seatAndPrice1=document.getElementById('hide1')
const seatAndPrice2=document.getElementById('hide2')

// seat name
function seatNumber(event) {
    const seatName=event.id;
    const seatName1=document.getElementById(seatName);
    if (!seatName===allSeat.includes(seatName) ) {
        allSeat.push(seatName)
        
    }
    if (allSeat.length<=4) {
        const remingSeatsAll1=remingSeatsAll-allSeat.length
       remingSeats.innerText=remingSeatsAll1
       totalSeat.innerText=allSeat.length
    seatName1.classList.add('bg-green-500','hover:bg-green-500','text-white')
    const paymentSeatName11=document.getElementById('paymentseatname1')
    const pk= `<div  id="seatandprice" class="flex  my-5 justify-around items-center " >
    <p id="payment-seat-name" class="fok text-gray-500"></p>
    <p class=" ml-14 text-gray-500">Economy</p>
    <p class=" text-gray-500">550</p>
</div>`

        // const paymentSeatName=document.getElementById('payment-seat-name')
        for (let i = 0; i < 5; i++) {
        
            // console.log(paymentSeatName11)
           
        paymentSeatName11.innerHTML=pk
            const paymentSeatName=document.getElementById('payment-seat-name')
            paymentSeatName.innerText=seatName
            
        }


    //     paymentSeatName11.inn=pk
    // const Fok=document.getElementsByClassName('fok')
    // Fok.innerText=allSeat[allSeat.length]
   
    //   if (allSeat.length===1) {
    //     paymentSeatName.innerText=allSeat[0]
    // seatAndPrice.classList.remove('hidden')
        
    //   }
       
    // seatAndPrice1.classList.remove('hidden')
    // seatAndPrice2.classList.remove('hidden')

    }

   
   
    
 
}
// reaming seat
