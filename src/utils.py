# Python utility functions with bugs

def process_list(data):
    result = []
    for i in range(len(data) + 1):  # BUG: Index out of range
        result.append(data[i] * 2)
    return result

def safe_divide(x, y):
    return x / y  # BUG: No exception handling

class UserManager:
    def __init__(self):
        self.users = {}
    
    def get_user(self, user_id):
        return self.users[user_id]  # BUG: KeyError if user doesn't exist