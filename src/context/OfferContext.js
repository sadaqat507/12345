import React, { createContext, useState, useEffect } from 'react';

// Create OfferContext
export const OfferContext = createContext();

// OfferContextProvider component
const OfferContextProvider = ({ children }) => {
  const [offers, setOffers] = useState({offerimg: '',discount: '',status: '',seasonname: '',passtime: '',price: '',passDay: 0,passHour: 0,passMinint: 0,passSecond: 0});

   // Mock fetching offers from an API or database
  useEffect(() => {const fetchedOffers = {offerimg: 'path-to-image',discount: '20%',status: 'active',seasonname: 'Winter Sale',price: 100,passDay: 1,passHour: 12,passMinint: 30,passSecond: 45};

    setOffers(fetchedOffers);
  }, []);

  return (
    <OfferContext.Provider value={{ offers, setOffers }}>
      {children}
    </OfferContext.Provider>
  );
};

export default OfferContextProvider;
