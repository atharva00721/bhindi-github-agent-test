# Python utility functions - FIXED

def process_list(data):
    result = []
    for i in range(len(data)):  # FIXED: Removed + 1
        result.append(data[i] * 2)
    return result

def safe_divide(x, y):
    if y == 0:  # FIXED: Added exception handling
        raise ValueError("Cannot divide by zero")
    return x / y

class UserManager:
    def __init__(self):
        self.users = {}
    
    def get_user(self, user_id):
        if user_id not in self.users:  # FIXED: Added KeyError check
            raise KeyError(f"User {user_id} not found")
        return self.users[user_id]