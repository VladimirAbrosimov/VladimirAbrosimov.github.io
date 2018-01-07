#!/usr/bin/env python3


import http.client
import urllib.request, urllib.parse, urllib.error
import json
import hashlib
import hmac
from collections import OrderedDict

server = "api.livecoin.net"
api_key = "5V42MhZD9ZpZ4uQbjgaNDNN4xBUP56Xy"
secret_key = "tkKkGraaj15m8RNzrhfHnZXY4aqGQJ6W"

def get_maxbid_minask(currencyPair):
    method = "/exchange/maxbid_minask"
    data = OrderedDict([("currencyPair", currencyPair)])
    encoded_data = urllib.parse.urlencode(data)
    sign = hmac.new( secret_key.encode(), msg=encoded_data.encode(), digestmod=hashlib.sha256).hexdigest().upper()
    headers = {"Api-key": api_key, "Sign": sign}
    conn = http.client.HTTPSConnection(server)
    conn.request("GET", method + "?" + encoded_data, "", headers)
    response = conn.getresponse().read().decode("utf-8")
    value = json.loads(response)
    conn.close()
    maxBid_minAsk = {
        "maxBid": float(value["currencyPairs"][0]["maxBid"]),
        "minAsk": float(value["currencyPairs"][0]["minAsk"])
    }
    return maxBid_minAsk



import telebot
import config
import time

bot = telebot.TeleBot(config.token)


maxBids_minAsks_list = []
class counter:
    i = -1
def currency_watch():
    counter.i += 1
    maxBid_minAsk = get_maxbid_minask("BTC/USD")
    text = "\nmaxBid: "+str(maxBid_minAsk["maxBid"])+ \
           "\nminAsk: "+str(maxBid_minAsk["minAsk"])
    bot.send_message(config.chat_id, text)
    print(text)
    time.sleep(20)
    currency_watch()

currency_watch()
