type Color = 'o' | 'w' | 'b' | 'd' | 'e' | 'n' | 'g' | 's' | 'k'

const colorMap: Record<Color, string> = {
  o: '#ff8c00', // orange (body)
  w: '#ffffff', // white (face)
  b: 'transparent', // background
  d: '#cc6600', // dark orange (inner ear)
  e: '#222222', // eyes
  n: '#ff4444', // nose
  g: '#00ff41', // green (laptop screen)
  s: '#555555', // silver (laptop)
  k: '#333333', // keyboard
}

// 16 columns x 10 rows
const pixelMap: Color[][] = [
  ['b','b','o','o','b','b','b','b','b','b','o','o','b','b','b','b'],
  ['b','o','o','d','o','b','b','b','b','b','o','d','o','o','b','b'],
  ['b','o','o','o','o','o','o','o','o','o','o','o','o','o','b','b'],
  ['b','o','o','e','o','o','w','w','w','w','o','e','o','o','b','b'],
  ['b','b','o','o','w','w','w','n','w','w','w','o','o','b','b','b'],
  ['b','b','b','o','w','w','w','w','w','w','o','o','b','b','b','b'],
  ['b','b','b','b','o','o','o','o','o','o','o','b','b','b','b','b'],
  ['b','b','b','o','o','s','s','s','s','s','s','o','o','b','b','b'],
  ['b','b','b','o','o','s','g','g','g','g','s','o','o','b','b','b'],
  ['b','b','b','b','b','k','k','k','k','k','k','b','b','b','b','b'],
]

export default function PixelFox() {
  return (
    <div className="pixel-fox" data-testid="pixel-fox">
      {pixelMap.flat().map((color, i) => (
        <div
          key={i}
          className="pixel"
          style={{ backgroundColor: colorMap[color] }}
        />
      ))}
    </div>
  )
}
