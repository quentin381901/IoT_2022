from typing import Any

temperature = {'temp_c': 25, 'temp_f': 12}
# global pour utiliser de partout
global name
name = "moi meme"


def display_text(test):
    if test:
        name = test
    else:
        name = "je suis dans le else"

    return name
