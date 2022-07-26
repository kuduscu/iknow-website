import { createContext,useReducer } from "react";

/*çalıştığında create context class'ı bir themecontext objesi oluşturacak */ 
export const themeContext=createContext();

/*state'i değiştiriyoruz*/ 
/*burayı true   yaparsak tema ve buton değişiyor*/
const initialState={darkMode:false};

/*reducer*/
/*bu kısımda 2 props olucak ilki state ikinci action*/
/*ardından değişecek switch fonksiyonu*/
const themeReducer=(state,action)=>{
    switch(action.type){
        /* eğer action.type toggle'a eşitse darkMode state değişecek*/
        case'toggle':
        return{darkMode:!state.darkMode} ;
        default:
            /*default olarak state'imiz gözükecek*/
            return state;
    }
}
/*bunlardan sonra provider'ımızı exportluyoruz*/
export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,initialState);
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}