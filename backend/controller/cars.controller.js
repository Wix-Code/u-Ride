import prisma from "../utils/prisma.js";

export const postCars = async (req, res) => {
  const userId = Number(req?.user.id);
  const { model, capacity, addHor, name, fullDay, halfDay, luggage, description, image } = req.body;
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  try {
    const car = await prisma.car.create({
      data: {
        userId,
        model,
        name,
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

export const getCars = async (req, res) => {
  try {
    const cars = await prisma.car.findMany();
    res.status(200).json({ success: true, cars });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to get cars" });
  }
}

export const getCar = async (req, res) => { 
  const carId = Number(req.params.id);
  try {
    const car = await prisma.car.findUnique({ where: { id: carId } });
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, message: "Car found", car });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to get car" });
  }
}

export const updateCar = async (req, res) => { 
  const carId = Number(req.params.id);
  const userId = Number(req?.user.id)
  const { model, capacity, addHor, name, fullDay, halfDay, luggage, description, image } = req.body;
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  try {
    const car = await prisma.car.update({
      where: { id: carId },
      data: {
        userId,
        model,
        name,
        capacity,
        addHor,
        fullDay,
        halfDay,
        luggage,
        description,
        image,
      },
    });
    res.status(200).json({ success: true, message: "Car updated successfully", car });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to update car" });
  }
}

export const deleteCar = async (req, res) => { 
  const carId = Number(req.params.id);
  const userId = Number(req?.user.id)
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  try {
    const car = await prisma.car.delete({ where: { id: carId } });
    res.status(200).json({ success: true, message: "Car deleted", car });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to delete car" });
  }
}

export const calculatePrice = async (req, res) => { 
  try {
    
  } catch (error) {
    console.log(error)
  }
}