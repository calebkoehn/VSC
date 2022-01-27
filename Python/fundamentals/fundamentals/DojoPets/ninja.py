import pet

class Ninja:

    def __init__(self,first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        self.pet.play()
        print(f"Walking {self.pet.name}. ")
        return self

    def feed(self):
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {food}.")
            self.pet.eat()
        else:
            print("Oh no. You need more pet food!")
        return self

    def bathe(self):
        print(f"Washing {self.pet.name}.")
        self.pet.make_noise()
        


pet_treats = ['Greenies','Chew Toy', 'bone' ]
pet_food = ['Dog Food', 'Dog Food 2']

baker = Pet("Baker","Golden Retriever",['jumping'],"barking")

caleb = Ninja("Caleb","Koehn",pet_treats,pet_food,baker)

caleb.feed()
caleb.feed()
caleb.walk()
caleb.bathe()