import json
import pandas as pd
from openpyxl import load_workbook


path_file = '..\\redress_web_integrator1\\python\\info.json'


def read_json():
    with open(path_file, 'r', encoding='utf8') as file:
        info = json.load(file)
    return info


cep = read_json()['cep']

spreadsheet = load_workbook("python\\xlsx\\RedressRoutes.xlsx")
active_sheet = spreadsheet.active
active_sheet["C5"] = cep

spreadsheet.save("python\\xlsx\\RedressRoutesOpenPy.xlsx")
