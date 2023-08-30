
import { useEffect, useState } from "react";
import { StyleSheet,Image, View } from "react-native";

interface ImagesWeatherTypeProps{
    iconID?:string
}
export function ImagesWeatherType({iconID}:ImagesWeatherTypeProps){
    let [icon, setIcon] = useState([])
    let iconsDay = [
        {
            title:'01d',
            image:require("../../assets/images/01d.png")
        },
        {
            title:'02d',
            image:require("../../assets/images/02d.png")
        },
        {
            title:'03d',
            image:require("../../assets/images/02d.png")
        },
        {
            title:'04d',
            image:require("../../assets/images/02d.png")
        },
        {
            title:'09d',
            image:require("../../assets/images/10d.png")
        },
        {
            title:'10d',
            image:require("../../assets/images/10d.png")
        },
        {
            title:'11d',
            image:require("../../assets/images/11d.png")
        },

    ]
    let iconsNigth = [
        {
            title:'01d',
            image:require("../../assets/images/01dnight.png")
        },
        {
            title:'02d',
            image:require("../../assets/images/02dnight.png")
        },
        {
            title:'03d',
            image:require("../../assets/images/02dnight.png")
        },
        {
            title:'04d',
            image:require("../../assets/images/02dnight.png")
        },
        {
            title:'09d',
            image:require("../../assets/images/10dnight.png")
        },
        {
            title:'10d',
            image:require("../../assets/images/10dnight.png")
        },
        {
            title:'11d',
            image:require("../../assets/images/11dnight.png")
        },

    ]
    useEffect(()=>{
       
    let time = new Date().getHours();
    if(time > 5 && time < 18 ){
        let iconfilter = iconsDay.filter(icon => icon.title == iconID);
         setIcon(iconfilter);
    }else if(time > 18){
        let iconfilter = iconsNigth.filter(icon => icon.title == iconID);
        setIcon(iconfilter);
    }
    },[])
    
    if(icon !== undefined) {
        return  <Image style={styles.img} resizeMode="contain" source={icon[0]?.image} />
    } 
}

const styles = StyleSheet.create({
   
    img: {
        width: 100,
        height: 100,
    }
})