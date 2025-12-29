import { useReducer } from "react";
import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null, // Added user state for consistency with your Cart component
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex === -1) {
        // Item doesn't exist in basket, add it with amount: 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
        console.log("New basket after ADD (new item):", newState.basket);
                return newState;
      } else {
        // Item exists, increment amount
        const updatedBasket = state.basket.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, amount: (item.amount || 0) + 1 };
          }
          return item;
        });

        return {
          ...state,
          basket: updatedBasket,
        };
           console.log(
             "New basket after ADD (existing item):",
             newState.basket
           );
           return newState;
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        let newBasket = [...state.basket];

        if (newBasket[index].amount > 1) {
          // Decrement amount if more than 1
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          // Remove item if amount is 1
          newBasket.splice(index, 1);
        }

        return {
          ...state,
          basket: newBasket,
        };
      }
      return state; // Return state if item not found

    case Type.CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

// Optional: Action creator functions
export const addToBasket = (item) => ({
  type: Type.ADD_TO_BASKET,
  item,
});

export const removeFromBasket = (id) => ({
  type: Type.REMOVE_FROM_BASKET,
  id,
});

export const clearBasket = () => ({
  type: Type.CLEAR_BASKET,
});

export const setUser = (user) => ({
  type: Type.SET_USER,
  user,
});

export const emptyBasket = () => ({
  type: Type.EMPTY_BASKET,
});

// import { useReducer } from "react";
// import { Type } from "./action.type";
// import Switch from "@mui/material/Switch";

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       const existingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );
//       if (!existingItem) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       } else {
//         const updatedBasket = state.basket.map((item) => {
//           return item.id === action.item.i
//             ? { ...item, amount: item.amount + 1 }
//             : item;
//         });
//       }

//       return {
//         ...state,
//         basket :updatedBasket
//       };

//       case Type.REMOVE_FROM_BASKET :
//       const index = state.basket.findIndex(item=> item.id===action.id)
//       let newBasket = [...state.basket]

//       if(index >=0){
// if(newBasket[index].amount > 1){
//   newBasket[index] = {...newBasket[index],amount:newBasket[index].amount-1}
// }else{
//   newBasket.splice(index,1)
// }
// return {
//   ...state,
//   basket: newBasket
// }
//       }
//     default:
//       return state;
//   }
// };
