const axios = require('axios').default;

export const IgetExperienceInfo =  () => {
 return axios.get('https://cv-server1.herokuapp.com/experience')
  .then((response) => {
    return response.data
  })
  .catch( (error) =>{
    console.log('Im the error',error);
  })

}