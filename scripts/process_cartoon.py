"""Process user-uploaded cartoon avatar.

Source: the cleaner of the two ChatGPT cartoons (the one already mostly
transparent). Run rembg to guarantee a clean alpha, trim padding, save into
public/.
"""

from pathlib import Path
from PIL import Image
from rembg import remove

SRC = Path(r"C:\Users\nandu\Downloads\ChatGPT Image May 15, 2026, 03_02_11 AM.png")
DST = Path(__file__).resolve().parent.parent / "public" / "cartoon-avatar.png"

img = Image.open(SRC)
out = remove(img)
# trim transparent padding
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)
# scale to max 900 tall, preserve aspect
w, h = out.size
if h > 900:
    out = out.resize((int(w * 900 / h), 900), Image.LANCZOS)
out.save(DST, optimize=True)
print(f"wrote {DST}  ({DST.stat().st_size // 1024}KB, {out.size})")
