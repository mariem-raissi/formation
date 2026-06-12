from bs4 import BeautifulSoup
import requests
url="http://quotes.toscrape.com" 
res=requests.get(url)
s=BeautifulSoup(res.text,"html.parser")
a=s.find_all("div", class_="quote" )
for i in a: 
    auteur = i.find("small", class_="author").text
    citation = i.find("span", class_="text").text

    print("L'auteur :", auteur)
    print("Citation :", citation)