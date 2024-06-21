
import generateParagraph from "../utils/generateParagraph.js";

/*==========================================getParagraph controller============================*/
export const getParagraph = async (req,res) => {
    const {type,duration} = req.query;

    // Validate input
  if (!type || !duration) {
    return res.status(400).json({ message: "Type and duration are required." });
  }

  // Parse duration to integer
  const parsedDuration = parseInt(duration, 10);
  try{
    // Generate paragraph
    const paragraph = await generateParagraph(type,parsedDuration);

    // Check if paragraph was generated successfully
    if(!paragraph){
        console.log("Sorry,not able to generate paragraph ");
        return res
                .status(400)
                .json({message:"Sorry,not able to generate paragraph"});
    }
    // Return generated paragraph
    console.log("Paragraph generated successfully");
    return res.status(200).json({paragraph});


}catch(err){
    console.error("Error in generating paragraph :",err.message);
    return res
             .status(500)
             .json({error:"Server Error in generating paragraph"})
}

};

