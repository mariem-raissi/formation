from bs4 import BeautifulSoup
import requests
import json
url="https://www.tunisianet.com.tn/301-pc-portable-tunisie"
res=requests.get(url)
s=BeautifulSoup(res.text,"html.parser") 
a=s.find_all("h2",class_="h3 product-title") 
product=[] 
for i in a:
    titre=i.text 
    print(titre) 
    product.append({"titre":titre})
  
with open("js.json","w")as fjson:
    
    json.dump(product,fjson,indent=4)       
