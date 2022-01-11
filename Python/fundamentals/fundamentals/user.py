class User:

    def __init__(self, name):
        self.name = name
        self.amount = 0

    def make_deposit(self, amount):
        self.amount += amount
        return self

    def make_withdrawal(self,amount):
        self.amount -= amount
        return self

    def display_account_balance(self):
        print(f"User: {self.name}, Balance: {self.amount}")


caleb = User("Caleb")
john = User("John Doe")
sam = User("Sam smith")

caleb.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(50).display_account_balance()


john.make_deposit(500).make_deposit(750).make_withdrawal(125).make_withdrawal(50).display_account_balance()


sam.make_deposit(5000).make_withdrawal(350).make_withdrawal(1230).make_withdrawal(50).display_account_balance()