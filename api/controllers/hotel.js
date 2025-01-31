import Hotel from "../models/Hotel.js"
// create

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)
    
    try{
         

        const savedHotel = await newHotel.save()
        res.status(200).json({
            success: true,
            savedHotel
        })
    }catch(err){
        next(err);
    }

}
// put 
export const updateHotel = async(req,res,next)=>{
    
    try{

        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},
            {new: true}
        )
        res.status(200).json({
            success: true,
            updatedHotel
        })
    }catch(err){
        next(err);
    }

}
// delete
export const deleteHotel = async(req,res,next)=>{
    try{

        await Hotel.findByIdAndDelete(req.params.id
          
      );
      res.status(200).json(
          "hotel has been deleted"
         
      );
  }catch(err){
        next(err);
    }

}
// get
export const getHotel = async(req,res,next)=>{
    try{

        const hotels = await Hotel.findById(
            req. params.id
        );
            
        
        res.status(200).json(
           hotels
           
        );
    }catch(err){
        next(err);
    }

}
// get all
export const getHotels = async(req,res,next)=>{
try{
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
    }catch(err){
        next(err);
}
}





