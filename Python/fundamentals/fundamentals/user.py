class User:

    def __init__(self, name):
        self.name = name
        self.amount = 0

    def make_deposit(self, amount):
        self.amount += amount

    def make_withdrawal(self,amount):
        self.amount -= amount

    def display_account_balance(self):
        print(f"User: {self.name}, Balance: {self.amount}")


caleb = User("Caleb")
john = User("John Doe")
sam = User("Sam smith")

caleb.make_deposit(100)
caleb.make_deposit(100)
caleb.make_deposit(100)
caleb.make_withdrawal(50)
caleb.display_account_balance()


john.make_deposit(500)
john.make_deposit(750)
john.make_withdrawal(125)
john.make_withdrawal(50)
john.display_account_balance()


sam.make_deposit(5000)
sam.make_withdrawal(350)
sam.make_withdrawal(1230)
sam.make_withdrawal(50)
sam.display_account_balance()