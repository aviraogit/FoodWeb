import React from 'react'
import Popular1 from '../Pages/Popular1'


const Populargroup = () => {

  const data=[
    {
        id:"1",
        title:"OVEN-BAKED RIBS",
        image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/98/78/3/pEMUNH5QRqQESQTvMFX5_fudge2.jpg",
    },
    {
      id:"2",
      title:"MOZZARELLA STICKS",
      image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg",
  },
  {
    id:"3",
    title:"TURKEY MEATLOAF",
    image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/54/75/2/wc0parMsS9OTwRMHrOch_0S9A6332.jpg",
},
{
  id:"4",
  title:"LEFTOVER MASHED POTATO PANCAKES",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/90/54/QgpKo1rxQpSiZmN5F5jj_untitled-4303.jpg",
},
{
  id:"5",
  title:"SIMPLE OVEN-BAKED SEA BASS",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/35/16/31/TW8kFVRNTwKckUevzMv7_sea-bass-recipe-5393.jpg",
  
},
{
  id:"6",
  title:"BEEF & BROCCOLI STIR-FRY",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/99/47/6/j7L11nRQNeKACth1WJkg_easy-beef-broccoli-stir-fry-6106.jpg",
},
{
  id:"7",
  title:"BEEF & BROCCOLI STIR-FRY",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/63/78/6/NrPa79ZESEOqMlMoFDos_fajitas-3.jpg",
},
{
  id:"8",
  title:"FAJITAS",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/39/01/3/aeAtoOWHSeWQh9UD7W3K_0S9A6192.jpg",
},
{
  id:"9",
  title:"WHIPPED CREAM FROSTING",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/13/37/51/IrDuUPieR1GP9vviVyiM_restaurant-teriyaki-sauce-133751_-5.jpg",
},
{
  id:"10",
  title:"RESTAURANT TERIYAKI SAUCE",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/11/05/48/N7DcpuhBRW2ahWsyzNAw_0S9A6275.jpg",
},
{
  id:"11",
  title:"SKYLINE CHILI",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/48/66/41/aB9Ar2MzTy2CIyxoINma_b.jpg",
},
{
  id:"12",
  title:"BANANA NUT BREAD",
  image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/10/58/65/G9Ez7rFmQOmtdHERTPgK_AWC%25204%2520-%2520final_2.png",
},

  
  ]

  
  // console.log(d  ata)
  
  return (
    <>
      <h1 className='text-center font-bold'>FAN   
      <span className='text-danger'> FAVOURIT
      </span></h1>

  {/* <div> */}
  <div className="m-50">

   
  <div className=" ms-5 me-5 mt-3 mb-4 d-flex justify-content-between flex-wrap" id='Populargroup'>
 {
   data.map(PopularData=>(

     
     
     <Popular1 key={PopularData.id} PopularData={PopularData}/>
     )
    
   )
}
  
 
  </div>
  </div>
  
  </>
  )
}

export default Populargroup
