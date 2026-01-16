async function fetchData(){
    const responce = await fetch("https://dummyjson.com/ip");
    const data = await responce.json();
    console.log(data);
}

function fetchData1(){
    try{
        const responce = fetch("https://dummyjson.com/ip").then(res => res.json()).then(data => console.log(data));
    responce.catch(err => console.log("Error:", err)); 
    }catch(err){
        console.log("Error:", err);
    }
    
}

//both can be used for same funcionality
fetchData();
fetchData1();
