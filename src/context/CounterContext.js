import React, { createContext, useReducer, useContext } from 'react';

const initialState = JSON.parse(localStorage.getItem("state")) || {
  productCounters: {},
  totalCount: 0,      
  productOrder: [],   
};

const reducer = (state, { type, productId }) => {
  const currentCount = state.productCounters[productId] || 0;
   let updatedCount;
  let updatedProductOrder = [...state.productOrder];
   switch (type) {
    case 'add':
      updatedCount = currentCount + 1;

      const updatedCountersAdd = {
        ...state.productCounters,
        [productId]: updatedCount,
      };

      const existingProductIndex = updatedProductOrder.findIndex(
        (product) => product.productId === productId
      );

      if (existingProductIndex >= 0) {
        updatedProductOrder[existingProductIndex].currentCount = updatedCount;
      } else {
        updatedProductOrder.push({ productId, currentCount: updatedCount });
      }
      localStorage.setItem('state', JSON.stringify(state));
      return {
        ...state,
        productCounters: updatedCountersAdd,
        totalCount: state.totalCount + 1,
        productOrder: updatedProductOrder,
      };

    case 'sub':
      updatedCount = Math.max(0, currentCount - 1);

      const updatedCountersSub = {
        ...state.productCounters,
        [productId]: updatedCount,
      };

      const productIndexSub = updatedProductOrder.findIndex(
        (product) => product.productId === productId
      );

      if (productIndexSub >= 0) {
        if (updatedCount > 0) {
          updatedProductOrder[productIndexSub].currentCount = updatedCount;
        } else {
          updatedProductOrder.splice(productIndexSub, 1);
        }
      }
      localStorage.setItem('state', JSON.stringify(state));

      return {
        ...state,
        productCounters: updatedCountersSub,
        totalCount: state.totalCount > 0 ? state.totalCount - 1 : 0,
        productOrder: updatedProductOrder,
      };

      case 'dele':
    
        const updatedCountersDel = { ...state.productCounters };
        const currentProductCount = updatedCountersDel[productId] || 0;
        delete updatedCountersDel[productId]
      
    
        const productIndexDel = updatedProductOrder.findIndex(
          (product) => product.productId === productId
        );
        if (productIndexDel >= 0) {
          updatedProductOrder.splice(productIndexDel, 1);
        }
      
    
        const updatedStateDel = {
          ...state,
          productCounters: updatedCountersDel,
          totalCount: state.totalCount - currentProductCount,
          productOrder: updatedProductOrder,
        };
      
        localStorage.setItem('state', JSON.stringify(updatedStateDel));
      
        return updatedStateDel;
      
    default:
      return state;
  }
};


const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
 