export default function forms(state = {}, action) {
    if  (action.type === 'cash')  {
        return {
            ...state,
            cash: action.value
        }
    }  else if (action.type === 'newPost') {
        return {
            ...state,
            newPost: action.value
            }
        }   else if (action.type === 'name') {
            return {
                ...state,
                name: action.value
            }
        }   else if (action.type === 'surname') {
                return {
                    ...state,
                    surname: action.value
                }   
            }   else if (action.type === 'email') {
                    return {
                        ...state,
                        email: action.value
                        }
                    }   else if (action.type === 'phone') {
                        return {
                            ...state,
                            phone: action.value
                            }
                        }   else if (action.type === 'comment') {
                            return {
                                ...state,
                                comment: action.value
                                }
                            }
    return state;
} 
