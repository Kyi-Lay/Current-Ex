document.addEventListener("DOMContentLoaded", function(){ //web-Name ထည့်ပါ//
    fetch("https://open.er-api.com/v6/latest/USD")

    .then(response => {
        return response.json()
     })

    //  .then((respones) => {
    //     if (!respones.ok) {
    //         throw new Error("Network respones was Not ok" + respones .tatusText); 
    //     }
    //     return response.json()
    //  })


    
    //  .than((data) => console.log(data))
     .then ((data) => {
        const rate = data.rates.MMK;
        // console.log(rate);

        document.querySelector('body').innerHTML = `ဒီနေ့ ဒေါ်လာ ${rate.toFixed(2)} MMK.`;
     })


    .catch((error) => {
        console.log('error;', error);
        console.error("website something wrong", error);
    });

return false;
});


