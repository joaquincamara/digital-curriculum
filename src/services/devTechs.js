const axios = require('axios').default;

export const IgetDevTechsInfo =  () => {
    return axios.get('https://cv-server1.herokuapp.com/devTech')
     .then((response) => {
       let result = response.data.map((info, key) => {
           return {name: info.Name, rate: info.Rank}
       })
       return result
     })
     .catch( (error) =>{
       console.log('Im the error',error);
     })
   
   }