import json
import pandas as pd
from openpyxl import load_workbook


path_file = '..\\redress_web_integrator1\\python\\info.json'


def read_json():
    with open(path_file, 'r', encoding='utf8') as file:
        info = json.load(file)
    return info


cep = read_json()['cep']


# def to_excel_pandas():
#     print(cep)
#     table = pd.read_excel("python\\xlsx\\RedressRoutes.xlsx")
#     table.loc[3, 'Unnamed: 2'] = cep

#     table.to_excel("python\\xlsx\\RedressRoutesPandas.xlsx")


spreadsheet = load_workbook("python\\xlsx\\RedressRoutes.xlsx")
active_sheet = spreadsheet.active
active_sheet["C5"] = cep

spreadsheet.save("python\\xlsx\\RedressRoutesOpenPy.xlsx")
