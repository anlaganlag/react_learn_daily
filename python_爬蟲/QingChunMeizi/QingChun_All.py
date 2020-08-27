import os
import time
import random
import requests
from bs4 import BeautifulSoup


class BundleHandler(object):
    def __init__(self, url):
        self.url = url
        self.title = ""
        self.html = ""
        self.path = ""
        self.get_html = get_html
        self.header = headers
    def getAllUrl(self):
        return [ self.url+f"/{i+1}" for i in range(int(self.all_num))]
    def get_title(self):
        self.title = self.html.find("h2").get_text()
        print(f"标题 {self.title}")
        self.path = os.path.join( "絕密", self.title[:8])
        if not os.path.exists(self.path):
            os.makedirs(self.path)
    def get_all_num(self): # 通过第一页链接获取总的页数
        self.html = self.get_html(self.url)
        next_link = self.html.select(".pagenavi a span") # [<span>«上一组</span>, <span>2</span>, <span>3</span>, <span>4</span>, <span>54</span>, <span>下一页»</span>]
        
        self.all_num = [i.get_text() for i in next_link][4]
        print(f"本文件共有{all_num}張圖片")
    def find_jpg(self):
        temp_img = self.html.select("p a img")
        img_src = [i.get("src") for i in temp_img]
        if img_src:
            return img_src[0]
    def find_jpgs(self):
        allUrl = self.getAllUrl()
        all_imgs = []
        for i in allUrl:
            imageHtml = self.get_html(i)#獲取當前圖片的Html
            temp_img = imageHtml.select("p a img")#tag [<img alt="送福利！大胸妹子徐微微湿身喷血实拍图集" class="blur" height="1050" src="https://cdn.jsdelivr.net/gh/zmzt/202008/c57845c39ddec92221c3c65115af54cb.jpg" width="700"/>]
            all_imgs.append([i.get("src") for i in temp_img][0]) #該圖片url https://cdn.jsdelivr.net/gh/zmzt/202008/c57845c39ddec92221c3c65115af54cb.jpg
            print(f"正在添加{i}的圖片")
        return all_imgs
    def down_jpg(self, nameint, img_url):
        # 开始下载图片
        name = str("%02d"%nameint) + ".jpg"
        print(f"开始下载图片{name}-------->")
        res = requests.get(img_url, headers=self.header)
        if res.status_code >=400:
            print(f"图片{img_url}下载出错,代碼{res.status_code}------->")
        img_name = os.path.join(self.path, name)
        with open(img_name, "wb") as f:
            f.write(res.content)
        print(f"图片{name}下载完成--------->")
    def run(self):         # 获取所有页面链接
        self.get_all_num()#這步沒問題是54
        self.get_title()
        all_imgs = self.find_jpgs()
        print(all_imgs)
        for num, jpglink in enumerate(all_imgs,start=1):
            self.down_jpg(num, jpglink)
            time.sleep(2)







class DownLoadPhoto(object):
    def __init__(self):
        self.title = ""
        self.html = ""
        self.path = ""
        self.get_html = get_html
    def run(self):
        input("开始")
        url = f"https://www.mzitu.com/mm/page/1/"
        html = self.get_html(url)#獲取正常html文件
        aTag = html.select("li span a")#都是a標籤
        allImageAddress=[j.get("href") for j in aTag]#所有可爬地址
        random.shuffle(allImageAddress)
        print(allImageAddress)
        for imageBundleUrl in allImageAddress:
            print(f"开始爬取链接{imageBundleUrl}")
            BundleHandler(imageBundleUrl).run()
            time.sleep(2)
headers={
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36",
    "Referer": "https://www.mzitu.com/245734/54"
}
def get_html(url):
    res = requests.get(url, headers=headers, timeout=50)#類似登錄網頁
    res_html = res.content.decode("utf-8")#查看內容和解碼
    html = BeautifulSoup(res_html, "html.parser")#正確格式
    return html#返回正常的html
if __name__ == '__main__':
    downLoad = DownLoadPhoto()
    downLoad.run()
