import pandas as pd


def pandaToCSV(dict):
    data = pd.DataFrame(data=dict)

    print(data)

    data.to_csv('RedressData.csv', index=False)
