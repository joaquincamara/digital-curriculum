const axios = require('axios').default;

export const IgetPersonalProjectsInfo =  () => {
    return axios.get('https://cv-server1.herokuapp.com/personalprojects')
     .then((response) => {
       return response.data
     })
     .catch( (error) =>{
       console.log('Im the error',error);
     })
   
   }