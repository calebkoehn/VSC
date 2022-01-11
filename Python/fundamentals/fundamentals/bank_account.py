class BankAccount:

    def __init__(self, int_rate, balance): 
        self.int_rate = Rate
        self.balance = Balance

    def deposit(self, amount):
        self.amount += amount
        return self

    def withdraw(self, amount):
        self.amount -= amount

    def display_account_info(self):
        print(f"User: {self.name}, Balance: {self.amount}")


    def yield_interest(self):
        self.amount = 0.01

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

caleb.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(50).yield_interest(1).display_account_balance()
john.make_deposit(500).make_deposit(750).make_withdrawal(125).make_withdrawal(50).make_withdrawal(100).make_withdrawal(25).display_account_balance()