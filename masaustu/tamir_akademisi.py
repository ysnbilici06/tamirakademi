"""Tamir Akademisi – masaüstü sürümü.

Web uygulamasını (index.html, css, js...) kendi penceresinde, Windows'un
yerleşik Edge WebView2 motoruyla açar. İnternet gerekmez.
İlerleme %APPDATA%\\TamirAkademisi klasöründe saklanır.
"""
import os
import socket
import sys

import webview

SABIT_PORT = 47823  # İlerlemenin (localStorage) kalıcı olması için adres hep aynı kalmalı


def web_klasoru():
    if getattr(sys, "frozen", False):  # PyInstaller ile paketlenmiş .exe
        return os.path.join(sys._MEIPASS, "web")
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def port_bos_mu(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("127.0.0.1", port)) != 0


def main():
    kok = web_klasoru()
    veri = os.path.join(os.environ.get("APPDATA", os.path.expanduser("~")), "TamirAkademisi")
    os.makedirs(veri, exist_ok=True)

    webview.settings["ALLOW_DOWNLOADS"] = True  # Sertifikayı PNG olarak indirebilmek için

    webview.create_window(
        "Tamir Akademisi",
        url=os.path.join(kok, "index.html"),
        width=1200,
        height=820,
        min_size=(380, 600),
        background_color="#0f1318",
        text_select=True,
    )
    webview.start(
        http_server=True,
        http_port=SABIT_PORT if port_bos_mu(SABIT_PORT) else None,
        private_mode=False,
        storage_path=veri,
        icon=os.path.join(kok, "ikonlar", "ikon-512.png"),
    )


if __name__ == "__main__":
    main()
