
import { getCurrentPositionAsync, requestForegroundPermissionsAsync,LocationObject } from "expo-location";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/axios";
import { OPENWEATHER_API_KEY } from "@env";



export const WeatherDataContext = createContext({} as IWeatherDataContextData)
interface WeatherDataProviderProps {
    children: ReactNode
}


interface IWeatherDataContextData {
    weatherData:any;
}
function WeatherDataProvider({children}: WeatherDataProviderProps){
  const [location, setLocation] = useState<LocationObject | null>(null);
  const[weatherData,setWeatherData]=useState<any>(null)
  async function requestLocationPermissions(){
   const {granted} = await  requestForegroundPermissionsAsync();

   if(granted){
    const currentPosition = await getCurrentPositionAsync();
    console.log("location =>",currentPosition)
    setLocation(currentPosition);
   }
  }

  useEffect(()=>{
    requestLocationPermissions();
  },[])
  useEffect(()=>{
    if(location !== null){
        api.get(`data/2.5/weather?lat=${location.coords?.latitude}&lon=${location.coords?.longitude}&units=metric&appid=${OPENWEATHER_API_KEY}&lang=pt_br`).then(response =>{
            setWeatherData(response.data);
            console.log(response.data);
            console.log(location.coords)
        }).catch(err =>{
            console.log(err)
        })
    }
   
  },[location])

    return(
        <WeatherDataContext.Provider value={{weatherData}}>
            {children}
            </WeatherDataContext.Provider>
    )
}
function useWeatherData(){
    const context = useContext(WeatherDataContext);
    return context
}

export { WeatherDataProvider, useWeatherData}