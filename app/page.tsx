import CustomFont from '@next/font/local'

const cfont = CustomFont({
  src: '../public/fonts/cfont.ttf',
  variable: '--font-cfont',
})

export default function Home() {
  return (
    <div className={`${cfont.variable}`}>
      <div className="font-cfont">
        Test
      </div>
    </div>
  )
}
