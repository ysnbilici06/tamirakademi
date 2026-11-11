"""Tamir Akademisi masaüstü .exe dosyasını üretir.

Kullanım:  python masaustu/derle.py
Çıktı:     masaustu/dist/TamirAkademisi.exe
Gerekenler: pip install pywebview==5.4 pyinstaller==6.11.1 pillow
"""
import os
import shutil
import subprocess
import sys

from PIL import Image

BURASI = os.path.dirname(os.path.abspath(__file__))
PROJE = os.path.dirname(BURASI)
WEB_DOSYALARI = ["index.html", "manifest.webmanifest", "sw.js", "css", "js", "ikonlar"]


def main():
    # 1) Windows ikonu (.ico)
    ico = os.path.join(BURASI, "ikon.ico")
    Image.open(os.path.join(PROJE, "ikonlar", "ikon-512.png")).save(
        ico, sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    )

    # 2) PyInstaller ile tek dosya .exe
    ekler = []
    for ad in WEB_DOSYALARI:
        kaynak = os.path.join(PROJE, ad)
        hedef = "web" if os.path.isfile(kaynak) else os.path.join("web", ad)
        ekler += ["--add-data", kaynak + os.pathsep + hedef]

    komut = [
        sys.executable, "-m", "PyInstaller",
        "--noconfirm", "--clean", "--onefile", "--windowed",
        "--name", "TamirAkademisi",
        "--icon", ico,
        "--distpath", os.path.join(BURASI, "dist"),
        "--workpath", os.path.join(BURASI, "build"),
        "--specpath", os.path.join(BURASI, "build"),
        *ekler,
        os.path.join(BURASI, "tamir_akademisi.py"),
    ]
    subprocess.run(komut, check=True)
    shutil.rmtree(os.path.join(BURASI, "build"), ignore_errors=True)
    print("\nHazır:", os.path.join(BURASI, "dist", "TamirAkademisi.exe"))


if __name__ == "__main__":
    main()
