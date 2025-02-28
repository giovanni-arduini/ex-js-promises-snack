function lanciaDado(){
    return new Promise ((resolve, reject)=> {
        console.log("Lancio il dado...")
        setTimeout(()=>{
                if(Math.random() < 0.20){
                    reject("Errore: il dado si è incastrato")
                    return; }
                const n = Math.floor(Math.random()*6)+1;
          resolve(`È usicto ${n}`)
        }, 3000)
    })
} 

lanciaDado().then((message)=>console.log(message)).catch(err=>console.error(err));  