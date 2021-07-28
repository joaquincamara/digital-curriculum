const axios = require('axios').default;

export const IgetCoolFeaturesInfo =  () => {
    return axios.get('https://cv-server1.herokuapp.com/coolfeatures')
     .then((response) => {
       let result = response.data.map((info, key) => {
           return info.Feature
       })
       return result
     })
     .catch( (error) =>{
       console.log('Im the error',error);
     })
   
   }