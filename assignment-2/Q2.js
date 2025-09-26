=begin
In Ruby, inheritance is a way to create a hierarchy of classes where a child class (or subclass) can reuse the methods and attributes of a parent class (or superclass). This avoids duplicating code and allows us to put common behavior in one place.
For a transportation company system, all vehicles (cars, trucks, motorcycles) share some common functionalities:
Calculate mileage
Check fuel levels
Perform maintenance
Instead of writing these methods separately in each class, we define them once in a general Vehicle class, and then let the specific vehicle types inherit from it.
=end
class Vehicle
  def initialize(fuel, mileage)
    @fuel = fuel
    @mileage = mileage
  end

  def check_fuel
    "Fuel level: #{@fuel} liters"
  end

  def calculate_mileage
    "Mileage: #{@mileage} km/l"
  end

  def perform_maintenance
    "General maintenance completed."
  end
end

class Car < Vehicle
  def air_conditioning
    "Air conditioning turned on."
  end
end

class Truck < Vehicle
  def load_capacity(weight)
    "Truck loaded with #{weight} kg."
  end
end

class Motorcycle < Vehicle
  def do_wheelie
    "Motorcycle performs a wheelie!"
  end
end
