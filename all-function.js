
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
    

if (allSeat.length===1) {
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
const phn55=document.getElementById('phn')
phn55.addEventListener('keyup',function(event){
    const phn555=event.target.value
    if ( phn555===0 || phn555>=1 ) {
        qq()
    
        
    }
})

}    
 
else if(allSeat.length===2){
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

   const phn55=document.getElementById('phn')
   phn55.addEventListener('keyup',function(event){
       const phn555=event.target.value
       if ( phn555===0 || phn555>1 ) {
           qq()
       
           
       }
   })
}
else if(allSeat.length===3){
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

   const phn55=document.getElementById('phn')
   phn55.addEventListener('keyup',function(event){
       const phn555=event.target.value
       if ( phn555===0 || phn555>1 ) {
           qq()
       
           
       }
   })
}
else if(allSeat.length===4){
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
  
   const phn55=document.getElementById('phn')
   phn55.addEventListener('keyup',function(event){
       const phn555=event.target.value
       if ( phn555===0 || phn555>1 ) {
           qq()
       
           
       }
   })

}
console.log(allSeat.length)

const price1=document.getElementById('price')

const ticketPrice=price1
 console.log(price1)


}
const dis=document.getElementById('dis')

dis.addEventListener('keyup',function (event) {
const cupons2=event.target.value;
console.log(cupons2)
kk(cupons2)

}


)

function ap() {

ee()

const hidden=document.getElementById('hidden')
hidden.classList.add('hidden')
}
    


const code=[]
function kk(pp) {
    
if(pp==='Couple 20'){
 
    const grand=(document.getElementById('grd')).innerText
    const ll=grand-(grand*(20/100))
    code.push(ll)

}
else if(pp==="NEW15"){
    const grand=(document.getElementById('grd')).innerText
    const ll=grand-(grand*(15/100))
    code.push(ll)
   
}
}


function ee() {

    document.getElementById('grd').innerText=code[0]
    




    
}
function nxt() {
const hiddenAll1=document.getElementById('hiddenAll')
    hiddenAll1.classList.add('hidden')
const success1=document.getElementById('hidden1')

    success1.classList.remove('hidden')
}
function confirm() {
    const hiddenAll1=document.getElementById('hiddenAll')
    hiddenAll1.classList.remove('hidden')
const success1=document.getElementById('hidden1')

    success1.classList.add('hidden')
    
}

function qq() {
    const lstBtn1=document.getElementById('lstBtn')
    lstBtn1.removeAttribute('disabled')
}
const lstBtn1=document.getElementById('lstBtn')
console.log(lstBtn1)
function phnNum() {
    const phn55=document.getElementById('phn')
    
    
}
