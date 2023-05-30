from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep

from panda_to_csv import pandaToCSV


class RedressScraper():
    def __init__(self) -> None:
        self.url = 'http://127.0.0.1:5500/web/'
        # self.url = 'https://raphavtorres.github.io/redress_web_integrator1/web/'

        self.map = {
            "title": {
                'xpath': '/html/body/main/section[2]/div[2]/div[#counter#]/h5'
            },
            "price": {
                'xpath': '/html/body/main/section[2]/div[2]/div[#counter#]/p'
            }
        }

        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        self.driver = webdriver.Chrome(options=options)

    def open_site(self):
        self.driver.get(self.url)

        sleep(5)
        print("========== CLOTHES: ==========")

        products_dict = {
            'title': [],
            'price': []
        }

        counter = 1
        while True:
            try:
                title = self.driver.find_element(
                    By.XPATH, self.map['title']['xpath'].replace('#counter#', str(counter))).text
                print(title, end=": ")
                price = self.driver.find_element(
                    By.XPATH, self.map['price']['xpath'].replace('#counter#', str(counter))).text
                print(price)

                products_dict['title'].append(title)
                products_dict['price'].append(price)
                counter += 1
            except Exception:
                break

        pandaToCSV(products_dict)
