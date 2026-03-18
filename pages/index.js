import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{background:"#111", color:"#fff", minHeight:"100vh", padding:"40px", fontFamily:"Arial"}}>
      <h1 style={{fontSize:"40px"}}>Professionelle Drohnenaufnahmen & Video Marketing</h1>
      <p>Mehr Kunden durch hochwertige Videoaufnahmen für Ihr Unternehmen</p>

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
  <h2>Unsere Leistungen</h2>
  <ul>
    <li>Drohnenaufnahmen für Unternehmen</li>
    <li>Werbevideos für Social Media</li>
    <li>Eventaufnahmen</li>
  </ul>
</div>

              <div style={{marginTop:"60px"}}>
  <h2>Kontakt</h2>
  <p>Email: drohne.de@gmail.com</p>
  <p>Telefon: +49 176 764 903 32</p>
</div>

<div style={{marginTop:"60px"}}>
  <h2>Portfolio</h2>

  <iframe width="100%" height="315"
    src="https://www.youtube.com/watch?v=NTLBPe8Y4tw"
    title="YouTube video"
    frameBorder="0"
    allowFullScreen>
  </iframe>
</div>
    </div>
  );
}
