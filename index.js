import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{background:"#111", color:"#fff", minHeight:"100vh", padding:"40px", fontFamily:"Arial"}}>
      <h1 style={{fontSize:"40px"}}>Profesjonalne Nagrania Dronem & Video</h1>
      <p>Reklamy • Eventy • Social Media</p>

      <div style={{display:"flex", gap:"20px", marginTop:"40px"}}>
        {["Nagrania z drona","Reklamy dla firm","Eventy"].map((item,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.2}}
            style={{background:"#222", padding:"20px", borderRadius:"15px", flex:1}}>
            <h3>{item}</h3>
            <p>Profesjonalne ujęcia dopasowane do Twoich potrzeb.</p>
          </motion.div>
        ))}
      </div>

      <div style={{marginTop:"60px"}}>
        <h2>Portfolio</h2>
        <p>Tutaj dodasz swoje filmy (YouTube / Instagram)</p>
      </div>
    </div>
  );
}