const getStoredDontaions = () =>{
   const storedDontaion = localStorage.getItem('donations');
   if(storedDontaion){
       return JSON.parse(storedDontaion);
   }
   return [];
}

const saveDontaion = id =>{
   const storedDontaions = getStoredDontaions();
   const exists = storedDontaions.find(donate => donate === id);
   if(!exists){
       storedDontaions.push(id);
       localStorage.setItem('donations', JSON.stringify(storedDontaions))
   }
}

export { getStoredDontaions, saveDontaion}