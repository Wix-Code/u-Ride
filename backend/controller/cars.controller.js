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
  const { id, email, fname, startDate, endDate, age, phoneNo, city, rentalType } = req.body;
  const userId = Number(req?.user?.id);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }
  
  /*if (!id) {
    return res.status(400).json({ success: false, message: "Car ID is required" });
  }*/

  try {
    const car = await prisma.car.findUnique({ where: { id: Number(id) } });

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    const formattedDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();

    const rent = await prisma.rent.create({
      data: {
        userId,
        carId: car.id, // Fixed: Use `car.id`
        email,
        fname,
        rentalType,
        startDate: formattedDate,
        endDate: formattedEndDate,
        age,
        phoneNo,
        city,
      },
    });

    let totalPrice = 0;
    if (rentalType === "halfDay") {
      totalPrice = car.halfDay;
    } else if (rentalType === "fullDay") {
      totalPrice = car.fullDay;
    } else {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      totalPrice = days * car.fullDay;
    }

    res.status(200).json({ success: true, message: "Car rented successfully", totalPrice, rent });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
