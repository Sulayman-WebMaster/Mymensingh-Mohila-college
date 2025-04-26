
export const studentDataEntry = (req, res) => {
    try {
      
      res.status(200).json({ message: "Student data entry successful" })
    } catch (e) {
      console.error("error", e)
      res.status(500).json({ message: "Server error", error: e.message })
  }
  