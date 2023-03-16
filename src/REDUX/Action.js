export function addData(payload){
    
    return{
        type:'ADD_DATA',
        payload:payload
    }
}

export const deleteData = (index) => {
    return {
      type: 'DELETE_DATA',
      payload: index,
    };
  };
  