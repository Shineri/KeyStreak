
import {generatepredefinedParagraph,generateRandomParagraph} from "../utils/generateParagraph.js";

/*==========================================getParagraph controller============================*/
export const getParagraph = async (req,res) => {
  const { type, duration,source } = req.query;


    // Validate input
  if (!type || !duration || !source) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Parse duration to integer
  const parsedDuration = parseInt(duration, 10);
  try{
    // Generate paragraph
    let paragraph;
    if (source === "predefined") {
      paragraph = await generatepredefinedParagraph(type, parsedDuration);
    } else if (source === "random") {
      paragraph = await generateRandomParagraph(type, parsedDuration);
    } else {
      return res.status(400).json({ message: "Invalid source. Must be 'predefined' or 'random'." });
    }
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

