"""Process Nandu's headshot for the portfolio site.

Outputs into portfolio-3d/public/:
  - portrait.png      : background removed, ~900px wide
  - portrait-low.png  : 480px wide, used at low-res / placeholder
  - portrait-duotone.png : duotone (dark bg, mint highlights), used in 3D scene as a textured plane

Usage: python scripts/process_portrait.py
"""

from pathlib import Path
from PIL import Image, ImageOps, ImageFilter

SRC = Path(r"C:\Users\nandu\Downloads\updatepicfinal.jpg")
DST = Path(__file__).resolve().parent.parent / "public"
DST.mkdir(exist_ok=True)


def remove_bg(img: Image.Image) -> Image.Image:
    """Try rembg first (best). Fall back to luma threshold w/ feathering."""
    try:
        from rembg import remove

        return remove(img)
    except Exception:
        rgba = img.convert("RGBA")
        gs = img.convert("L")
        w, h = gs.size
        px = gs.load()
        rgba_px = rgba.load()
        # luma threshold — white-ish background → transparent
        for y in range(h):
            for x in range(w):
                lum = px[x, y]
                if lum > 235:
                    r, g, b, _ = rgba_px[x, y]
                    rgba_px[x, y] = (r, g, b, 0)
        # feather edges
        alpha = rgba.split()[3].filter(ImageFilter.GaussianBlur(1.2))
        rgba.putalpha(alpha)
        return rgba


def to_duotone(img: Image.Image, dark=(10, 12, 16), light=(110, 231, 183)) -> Image.Image:
    """Map luminance to a two-tone gradient (dark → light), preserve alpha."""
    rgba = img.convert("RGBA")
    gs = ImageOps.grayscale(rgba)
    # boost contrast a touch
    gs = ImageOps.autocontrast(gs, cutoff=2)

    dark_layer = Image.new("RGB", rgba.size, dark)
    light_layer = Image.new("RGB", rgba.size, light)
    duo = Image.composite(light_layer, dark_layer, gs)
    duo = duo.convert("RGBA")
    duo.putalpha(rgba.split()[3])
    return duo


def crop_face(img: Image.Image) -> Image.Image:
    """Tight crop around the face using the alpha bbox + heuristic top fraction.

    Headshot composition: head at top, shoulders below. Take the alpha bbox
    (subject mask) then keep the top ~55% vertically (face + a sliver of neck),
    centred horizontally on the bbox.
    """
    rgba = img.convert("RGBA")
    bbox = rgba.getbbox()
    if not bbox:
        return rgba
    x0, y0, x1, y1 = bbox
    h = y1 - y0
    w = x1 - x0
    # face = top 0.58 of the cutout
    face_h = int(h * 0.58)
    cx = (x0 + x1) // 2
    # square crop centred on cx, height = face_h
    half = face_h // 2
    fx0 = max(0, cx - half)
    fx1 = fx0 + face_h
    fy0 = y0
    fy1 = y0 + face_h
    return rgba.crop((fx0, fy0, fx1, fy1))


def main() -> None:
    img = Image.open(SRC).convert("RGB")
    cut = remove_bg(img)

    hi = cut.copy()
    hi.thumbnail((900, 900), Image.LANCZOS)
    hi.save(DST / "portrait.png", optimize=True)

    lo = cut.copy()
    lo.thumbnail((480, 480), Image.LANCZOS)
    lo.save(DST / "portrait-low.png", optimize=True)

    duo = to_duotone(cut)
    duo.thumbnail((900, 900), Image.LANCZOS)
    duo.save(DST / "portrait-duotone.png", optimize=True)

    face = crop_face(cut)
    face.thumbnail((512, 512), Image.LANCZOS)
    face.save(DST / "face.png", optimize=True)

    print("wrote:")
    for p in ("portrait.png", "portrait-low.png", "portrait-duotone.png", "face.png"):
        f = DST / p
        print(f"  {f.name}  {f.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
