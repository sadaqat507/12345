import { onAuthStateChanged } from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react'
import { auth, firestore } from '../config/firestore';
import { doc, getDoc } from 'firebase/firestore';
import dayjs from 'dayjs';

export const Context=createContext()
const ContextProvider = ({children}) => {
     
    const [userUid, setUserUid] = useState(null);  
    const [useremail, setUserEmail] = useState(null);  
    const [userMeassage,setUserMessages]=useState()
    const [isProcessing, setIsProcessing] = useState(false)
    const [ sidebar, setSidebar] = useState(false);
     const customdate = dayjs().format('DD/MM/YYYY HH:mm:ss');
     const [loading, setLoading] = useState(true);


useEffect(() => {
  if (sidebar) {
    document.body.style.overflow = "hidden";  
  } else {
    document.body.style.overflow = "auto";  
  }
   
  return () => {
    document.body.style.overflow = "auto";
  };
}, [sidebar]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


    // console.log("customFormat",customdate)
  setTimeout(() => {
    setIsProcessing(false);  
  }, 2000);
    const admin=false;
    const offer=40

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                 
                const uid = user.uid;  
                const email = user.email;  
                setUserUid(uid);  
                setUserEmail(email)
                // console.log("context uid",uid)
            } else {
                 
                setUserUid(null);  
            }
        });

         
        return () => unsubscribe();
    }, []);
     useEffect(() => {
        const fetchUserMessages = async () => {

            
          try {
            const docRef = doc(firestore, "users", userUid);
            const docSnap = await getDoc(docRef);
            if (!isProcessing) {
                const existingMessages = docSnap.exists() ? docSnap.data().userMessages || [] : [];
                // console.log("existingMessages", existingMessages);
              setUserMessages(existingMessages);
            }
          } catch (e) {
            if(e){
                // return console.log("error")
            }else{
                // console.error("Error fetching user messages:", e);
                window.toastify?.("Something went wrong. Please try again.", "error");
            }
                  }finally{
          //  console.log("finally is run")
          }
        };
        fetchUserMessages();  

       
    }, [userUid, isProcessing]);   
    
  const [productCounters, setProductCounters] = useState([]);

    const [totalCount, setTotalCount] = useState(0);

    const handleCounter = (operation, productId, e) => {
      e.preventDefault(); // Prevent default behavior
  
      setProductCounters((prevCounters) => {
        const currentCount = prevCounters[productId] || 0;
        let updatedCount;
  
        if (operation === 'add') {
          updatedCount = currentCount + 1;
          setTotalCount(totalCount + 1); // Update the total count
        } else if (operation === 'sub') {
          updatedCount = Math.max(0, currentCount - 1);
          if (currentCount > 0) {
            setTotalCount(totalCount - 1); // Decrease total count if product count is above 0
          }
        } else {
          return prevCounters; // No operation, just return existing state
        }
  
        return { ...prevCounters, [productId]: updatedCount }; // Update product counter
      });
    };

     return (
    <Context.Provider value={{admin,offer,userUid,useremail,isProcessing,setIsProcessing,userMeassage,sidebar, setSidebar,customdate,loading,totalCount, setTotalCount,handleCounter,productCounters}}>
        {children}
    </Context.Provider>
    )
}

export default ContextProvider
