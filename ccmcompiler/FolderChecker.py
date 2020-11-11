import os

def checkdir(dir_path):
    if(os.path.exists(dir_path)):
        for file in os.scandir(dir_path):
            os.remove(file.path)
    else:
        os.mkdir(dir_path)