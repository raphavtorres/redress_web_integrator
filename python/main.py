from scraper import RedressScraper


def runScraper():
    web_scraper = RedressScraper()
    web_scraper.open_site()


if __name__ == "__main__":
    runScraper()
