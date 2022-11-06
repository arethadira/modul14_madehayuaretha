import {useState} from "react";


const About = () => {

    const [me, setMe] = useState({
        name:"Made Hayu Aretha Adira Pangastuti",
        nim:"320200401012",
        university:"Universitas Pertahanan"

    })

    return (
        <>
        <div align="center">
            <h1>Hello my name is {me.name}</h1>
            <p>
                from {me.university} 
            </p>
            <p>
            student id {me.nim}
            </p>
        </div>
        </>
    )
  };
  
  export default About;