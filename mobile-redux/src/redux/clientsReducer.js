import clientsArr from '../clients.json';

const initState={
    clients: clientsArr,  // how many apples there are
  }
  
  function clientsReducer(state=initState,action) {
    switch (action.type) {

      case 'delete_client': {
        const id = action.clientId
        let newState={...state,
          clients: state.clients.filter(el => el.id !== id),
        };
        console.log(newState)
        return newState;
      }
  
      case 'edit_client': {
        const obj = action.clientInfo
        let newState={...state,
          clients: [...state.clients].map(el => obj.id === el.id ? obj : el)
        };
        console.log(newState)
        return newState;
      }

      case 'add_client': {
        const obj = action.clientAddInfo
        var maxId = state.clients.length !== 0? state.clients.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id : 0;
        var newObj = {...obj, id: maxId + 1}
        var newArr = [...state.clients, newObj];
        let newState={...state,
          clients: newArr
        };
        console.log(newState)
        return newState;
      }
  
      default:
        return state;
    }
  }
  
  export default clientsReducer;
  