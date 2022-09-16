export const reducer = (state, action) =>{
    if(action.type === 'REMOVE-ITEM'){
        return{
            ...state,
            item : state.item.filter((currElement) =>{
                return currElement.id !== action.payload
            })
        }
    }

    if(action.type === 'CLEAR-CART'){
        return{
            ...state, item:[]
        }
    }

    if(action.type === 'INCREMENT'){
        let incrementCart = state.item.map(currEle =>{
            if(currEle.id === action.payload){
                return{
                    ...currEle, quantity : state.quantity + 1
                }
            }
            return currEle
        })

        return{...state, incrementCart}
    }
    return state
}