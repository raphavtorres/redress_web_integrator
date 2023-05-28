import json


path_file = '..\\redress_web_integrator1\\python\\info.json'


def read_json():
    with open(path_file, 'r', encoding='utf8') as file:
        info = json.load(file)
    return info


# print(read_json())
