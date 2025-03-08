export const postCars = async (req, res) => {
  const userId = req.user;
  const { model, year, capacity, addHor, fullDay, halfDay, luggage, description, image } = req.body;
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  try {
    const car = await prisma.car.create({
      data: {
        userId,
        model,
        year,
        capacity,
        addHor,
        fullDay,
        halfDay,
        luggage,
        description,
        image,
      },
    });
    res.status(201).json({ success: true, message: "Car created successfully", car });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to create car" });
  }
}