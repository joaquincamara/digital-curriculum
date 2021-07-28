const axios = require('axios').default;

export const IgetAboutMeInfo =  () => {
 return axios.get('https://cv-server1.herokuapp.com/aboutMe')
  .then((response) => {
    return response.data[0]
  })
  .catch( (error) =>{
    console.log('Im the error',error);
  })

}