
function registroLanci(){

    const lanci = [];
    
    function lanciaDado(){
        
        return new Promise ((resolve, reject)=> {
            console.log("Lancio il dado...")
            setTimeout(()=>{
                if (Math.random() < 0.20) {
                    reject("Errore: il dado si è incastrato");
                    return;
                }
                const n = Math.floor(Math.random() * 6) + 1;
                if (lanci.length > 0 && lanci[lanci.length - 1] === n) {
                    console.log("Incredibile!");
                }
                lanci.push(n);
                
                resolve(`È uscito ${n}`);
            }, 3000)
        })
    } 

    lanciaDado().then((message)=>console.log(message)).catch(err=>console.error(err));  
}

registroLanci()
