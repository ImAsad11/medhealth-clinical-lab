import os

OUT = "/home/claude/medhealth/medhealth-lab/public/images/placeholders"
os.makedirs(OUT, exist_ok=True)

# brand palette
BLUE = "#0065B3"
BLUE_DARK = "#004E8C"
RED = "#ED1B24"
GREEN = "#0C6D20"
NAVY = "#0B2540"
LIGHT = "#EEF3F8"

def svg_placeholder(filename, w, h, label, sublabel="", bg1=BLUE, bg2=BLUE_DARK, icon="cross"):
    icons = {
        "cross": f'''
          <g transform="translate({w/2},{h/2-h*0.06})" opacity="0.16">
            <rect x="-{w*0.06}" y="-{h*0.16}" width="{w*0.12}" height="{h*0.32}" fill="white"/>
            <rect x="-{w*0.16}" y="-{h*0.06}" width="{w*0.32}" height="{h*0.12}" fill="white"/>
          </g>''',
        "flask": f'''
          <g transform="translate({w/2},{h/2-h*0.05})" opacity="0.16">
            <path d="M -{w*0.05} -{h*0.18} L -{w*0.05} -{h*0.02} L -{w*0.14} {h*0.16} Q -{w*0.16} {h*0.2} -{w*0.1} {h*0.2} L {w*0.1} {h*0.2} Q {w*0.16} {h*0.2} {w*0.14} {h*0.16} L {w*0.05} -{h*0.02} L {w*0.05} -{h*0.18} Z" fill="white"/>
          </g>''',
        "camera": f'''
          <g transform="translate({w/2},{h/2-h*0.05})" opacity="0.18">
            <rect x="-{w*0.14}" y="-{h*0.09}" width="{w*0.28}" height="{h*0.2}" rx="4" fill="white"/>
            <circle cx="0" cy="0" r="{h*0.06}" fill="{bg1}"/>
          </g>''',
        "badge": f'''
          <g transform="translate({w/2},{h/2-h*0.05})" opacity="0.18">
            <circle cx="0" cy="0" r="{h*0.16}" fill="white"/>
          </g>''',
        "person": f'''
          <g transform="translate({w/2},{h/2-h*0.02})" opacity="0.18">
            <circle cx="0" cy="-{h*0.12}" r="{h*0.11}" fill="white"/>
            <path d="M -{w*0.16} {h*0.2} Q -{w*0.16} -{h*0.02} 0 -{h*0.02} Q {w*0.16} -{h*0.02} {w*0.16} {h*0.2} Z" fill="white"/>
          </g>''',
        "map": f'''
          <g transform="translate({w/2},{h/2-h*0.06})" opacity="0.18">
            <path d="M 0 -{h*0.18} C {w*0.12} -{h*0.18} {w*0.2} -{h*0.08} {w*0.2} {h*0.02} C {w*0.2} {h*0.14} 0 {h*0.28} 0 {h*0.28} C 0 {h*0.28} -{w*0.2} {h*0.14} -{w*0.2} {h*0.02} C -{w*0.2} -{h*0.08} -{w*0.12} -{h*0.18} 0 -{h*0.18} Z" fill="white"/>
            <circle cx="0" cy="0" r="{h*0.06}" fill="{bg1}"/>
          </g>''',
    }
    icon_svg = icons.get(icon, icons["cross"])
    fs_label = max(14, int(w*0.045))
    fs_sub = max(11, int(w*0.026))
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg1}"/>
      <stop offset="100%" stop-color="{bg2}"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="white" opacity="0.14"/>
    </pattern>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g)"/>
  <rect width="{w}" height="{h}" fill="url(#dots)"/>
  {icon_svg}
  <text x="{w/2}" y="{h/2 + h*0.14}" font-family="Arial, sans-serif" font-size="{fs_label}" font-weight="700" fill="white" text-anchor="middle" opacity="0.92">{label}</text>
  <text x="{w/2}" y="{h/2 + h*0.14 + fs_sub + 8}" font-family="Arial, sans-serif" font-size="{fs_sub}" fill="white" text-anchor="middle" opacity="0.75">{sublabel}</text>
  <rect x="0.5" y="0.5" width="{w-1}" height="{h-1}" fill="none" stroke="white" stroke-opacity="0.25" stroke-width="1"/>
</svg>'''
    with open(os.path.join(OUT, filename), "w") as f:
        f.write(svg)

# Hero / banner images
svg_placeholder("hero-lab.svg", 900, 1000, "REPLACE IMAGE", "hero-lab.jpg — lab / technician photo", BLUE, NAVY, "flask")
svg_placeholder("offer-full-body.svg", 900, 700, "REPLACE IMAGE", "offer-full-body.jpg — patient / doctor photo", RED, "#8E0E13", "person")
svg_placeholder("about-facility.svg", 900, 700, "REPLACE IMAGE", "about-facility.jpg — facility photo", GREEN, "#063D12", "camera")

# service category thumbnails
services = ["hematology", "biochemistry", "hormones", "microbiology", "molecular"]
cols = [(BLUE, BLUE_DARK), (RED, "#8E0E13"), (GREEN, "#063D12"), (BLUE_DARK, NAVY), (RED, GREEN)]
for i, s in enumerate(services):
    c1, c2 = cols[i % len(cols)]
    svg_placeholder(f"service-{s}.svg", 640, 480, "REPLACE IMAGE", f"service-{s}.jpg", c1, c2, "flask")

# location thumbnails
locations = ["islamabad-blue-area", "abbottabad", "haripur", "khanpur", "mansehra", "rahim-yar-khan"]
for i, loc in enumerate(locations):
    c1, c2 = cols[i % len(cols)]
    svg_placeholder(f"location-{loc}.svg", 640, 480, "REPLACE IMAGE", f"location-{loc}.jpg", c1, c2, "map")

# team / staff
for i in range(1, 5):
    c1, c2 = cols[i % len(cols)]
    svg_placeholder(f"team-{i}.svg", 480, 560, "REPLACE IMAGE", f"team-{i}.jpg — staff photo", c1, c2, "person")

# gallery / offer tiles for homepage
svg_placeholder("gallery-1.svg", 700, 560, "REPLACE IMAGE", "gallery-1.jpg — lab interior", BLUE, NAVY, "flask")
svg_placeholder("gallery-2.svg", 700, 560, "REPLACE IMAGE", "gallery-2.jpg — sample collection", RED, "#8E0E13", "person")
svg_placeholder("gallery-3.svg", 700, 560, "REPLACE IMAGE", "gallery-3.jpg — reception / branch", GREEN, "#063D12", "camera")
svg_placeholder("gallery-4.svg", 700, 560, "REPLACE IMAGE", "gallery-4.jpg — home collection", BLUE_DARK, NAVY, "map")

# founder / chairman photo
svg_placeholder("founder.svg", 480, 600, "REPLACE IMAGE", "founder.jpg — Saeed Akhtar", NAVY, BLUE_DARK, "person")

print("done")
