const callToApi = () => {
  return fetch('URL')
    .then((response) => response.json())
    .then((response) => {
      const result = {
        id: response.id,
        name: response.name,
      };
      return result;
    });
};

export default callToApi;

// OTRA OPCION

const callToApi = () => {
   
    return fetch('URL') 
      .then(response => response.json())
      
  };
  
  export default callToApi;
