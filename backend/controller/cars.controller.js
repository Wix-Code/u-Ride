import { paystack } from "../utils/paystackApi.js";
import prisma from "../utils/prisma.js";

export const postCars = async (req, res) => {
  const userId = Number(req?.user.id);
  const { model, capacity, addHor, type, name, fullDay, halfDay, luggage, description, image } = req.body;
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
        type,
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
  const { id, email, fname, time, startDate, endDate, age, phoneNo, city, rentalType } = req.body;
  const userId = Number(req?.user?.id);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }
  
  if (!id) {
    return res.status(400).json({ success: false, message: "Car ID is required" });
  }
  console.log(rentalType, "rent")

  try {
    const car = await prisma.car.findUnique({ where: { id: Number(id) },  select: { id: true, halfDay: true, fullDay: true } });

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    if (car.fullDay == null || car.halfDay == null) {
      return res.status(400).json({ success: false, message: "Car pricing details missing" });
    }

    //const formattedDate = new Date(startDate).toISOString();
    //const formattedEndDate = new Date(endDate).toISOString();
    let totalPrice = 0;

    if (rentalType === "halfDay") {
      totalPrice = car.halfDay;
    } else if (rentalType === "fullDay") {
      totalPrice = car.fullDay;
    } else if (rentalType === "multiDay" && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.status(400).json({ success: false, message: "Invalid date format" });
      }

      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      totalPrice = days * car.fullDay;
    } else {
      return res.status(400).json({ success: false, message: "Invalid rental type or missing dates" });
    }
    
    if (!email || !fname || !time || !startDate || !age || !phoneNo || !city || !rentalType) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
    // Store rental record
    const rent = await prisma.rent.create({
      data: {
        userId,
        carId: car.id,
        email,
        fname,
        time,
        rentalType,
        startDate: startDate ? new Date(startDate).toISOString() : null,
        endDate: endDate ? new Date(endDate).toISOString() : null,
        age,
        phoneNo,
        city,
        price: totalPrice,
      },
    });

    res.status(200).json({ success: true, message: "Car rented successfully", totalPrice, rent });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Fail to rent a car"});
  }
};

const url = "http://localhost:5173/"
export const processPayment = async (req, res) => {
  const { rentId } = req.body;
  const userId = Number(req?.user?.id);
  if (!userId) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }
  try {
    const rent = await prisma.rent.findUnique({
      where: { id: rentId },
      select: { id: true, email: true, price: true },
    })
    if (!rent) {
      return res.status(404).json({ success: false, message: "Rental record not found" });
    }

    if (!rent.price || rent.price <= 0) {
      return res.status(400).json({ success: false, message: "Invalid rental amount" });
    }
    const response = await paystack.transaction.initialize({
      email: rent.email,
      amount: Math.round(rent.price * 100),
      currency: "NGN",
      callback_url: `${url}/verify?orderId=${rentId}`,
    });
    
    res.status(200).json({ success: true, message: "Payment initialized successfully", data: response });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to make payment" });
  }
}

export const verifyPayment = async (req, res) => {
  try {
    const { reference, rentId } = req.body;
    if (!reference || !rentId) return res.status(400).json({ success: false, message: "Payment reference and Order ID are required" });

    const response = await paystack.transaction.verify(reference);
    if (!response?.data || response.data.status !== "success") {
      return res.status(400).json({ success: false, message: "Payment verification failed", details: response?.data });
    }

    const updateOrder = await prisma.book.update({
      where: { id: rentId },
      data: {
        paid: true,
        status: "paid",
        paymentReference: reference,
        paidAt: new Date(),
        paymentAmount: response.data.amount / 100,
      }
    });

    if (!updateOrder) return res.status(404).json({ success: false, message: "Booking not found" });
    res.status(200).json({ success: true, message: "Payment successful", booking: updateOrder });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to verify payment" });
  }
}