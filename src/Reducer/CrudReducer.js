let value = {
  users: JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user'))
    : [],
};

const Crud = (state = value, action) => {
  switch (action.type) {
    case 'addusers':
        let data = action.payload;
        let all = [...state.users,data]
        console.log(all);
        localStorage.setItem('user',JSON.stringify(all));
      return {
        ...state,
        users: all,
      };

      case 'viewusers':
        return state;

        case 'deleteusers':
            let id = action.payload;
            let delet = state.users.filter((item)=>{
                return item.id !== id
            })
            localStorage.setItem('user',JSON.stringify(delet));
        return {
            ...state,
            users : delet
        }




        default :
        return state
  }
};

export default Crud