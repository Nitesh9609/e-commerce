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

    if(action.type === 'INCREMENT') {
        let updateCart = state.item.map(curElem => {
            if(curElem.id === action.payload){
                return{
                    ...curElem, quantity: curElem.quantity + 1
                }
                
            }
            return curElem
        
        })
        return{...state, item: updateCart}
    }

    if(action.type === 'DECREMENT'){
        let updateCart = state.item.map(currEle =>{
            if(currEle.id === action.payload){
                return{
                    ...currEle, quantity: currEle.quantity - 1
                }
            }
            return currEle
        }).filter(currEle =>{
            return currEle.quantity !== 0
        })

        return{ ...state,item: updateCart}
    }

    if(action.type === 'CART_ITEM'){
        let {totalItem, totalAmount} = state.item.reduce((accum, curVal) =>{
            let {quantity, price} = curVal
            accum.totalItem += quantity
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
            return accum
        },
        {
            totalItem:0,
            totalAmount:0
        }
        )
        return{...state, totalItem, totalAmount}
    }

        return state
}