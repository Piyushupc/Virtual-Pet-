# Virtual Pet Game

This is a simple text-based virtual pet game written in Python. In this game, you can take care of a virtual pet by feeding it, playing with it, and letting it rest. The goal is to keep your pet alive and happy for as long as possible.

## Features

- **Feed**: Increase your pet's hunger level.
- **Play**: Increase your pet's happiness level but decrease its energy.
- **Rest**: Increase your pet's energy level.
- **Status**: Check the current status of your pet, including hunger, energy, happiness, and health levels.

## Requirements

- Python 3.x

## Installation

1. Clone the repository or download the source code.

```bash
git clone https://github.com/yourusername/virtual-pet-game.git
Navigate to the project directory.
bash
Copy code
cd virtual-pet-game
Run the game.
bash
Copy code
python virtual_pet_game.py
How to Play
Run the game using Python.
Enter a name for your pet when prompted.
Choose from the available actions to take care of your pet:
Feed
Play
Rest
Quit
The game will continue until your pet's hunger, energy, happiness, or health level reaches 0.
Try to keep your pet alive and happy for as long as possible!
Enhancements
You can further enhance this basic game by adding more features:

Health: Add a health attribute and actions to improve or decrease health.
Aging: Make the pet age over time, affecting its stats.
Multiple Pets: Allow the user to take care of multiple pets.
Graphical Interface: Use a library like tkinter to create a GUI for the game.
Example of Enhancement: Adding Health
Here's an example of how you can add a health attribute to the Pet class:

python
Copy code
class Pet:
    def __init__(self, name):
        self.name = name
        self.hunger = 50
        self.energy = 50
        self.happiness = 50
        self.health = 100  # New attribute

    def feed(self):
        self.hunger += 10
        if self.hunger > 100:
            self.hunger = 100
        self.health += 5  # Improve health when fed
        if self.health > 100:
            self.health = 100
        print(f"{self.name} has been fed.")

    def play(self):
        if self.energy > 10:
            self.happiness += 10
            self.energy -= 10
            if self.happiness > 100:
                self.happiness = 100
            self.health += 5  # Improve health when playing
            if self.health > 100:
                self.health = 100
            print(f"{self.name} is playing and having fun!")
        else:
            print(f"{self.name} is too tired to play.")

    def rest(self):
        self.energy += 20
        if self.energy > 100:
            self.energy = 100
        self.health += 5  # Improve health when resting
        if self.health > 100:
            self.health = 100
        print(f"{self.name} is resting and regaining energy.")

    def status(self):
        print(f"Name: {self.name}")
        print(f"Hunger: {self.hunger}")
        print(f"Energy: {self.energy}")
        print(f"Happiness: {self.happiness}")
        print(f"Health: {self.health}")  # Display health

    def is_alive(self):
        return self.hunger > 0 and self.energy > 0 and self.happiness > 0 and self.health > 0
Contributing
