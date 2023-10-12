import logo from "../../assets/logo.png"
import gmail from '../../assets/icons/gmail.svg'
import instagram from '../../assets/icons/instagram.svg'
import x from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'

const socials = [
  {
    name: 'X (formerly Twitter)',
    url: 'https://twitter.com/gdgogbomoso',
    icon: x,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/wtmogbomoso',
    icon: instagram,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@gdgogbomoso',
    icon: youtube,
  },
  {
    name: 'Gmail',
    url: 'mailto:gdgogbomoso@gmail.com',
    icon: gmail,
  }
]

const Footer = () => {
  return (
    <div className="bg-lightGray px-40 py-20">
      <div className="w-[90%] max-w-[992px] mx-auto flex justify-between">
        <div className="flex items-center">
          <div>
            <a href="/">
              <img src={logo} alt="DevFest Ogbomoso 2023" className="h-10" />
            </a>
          </div>
          <div className="h-10 w-[1px] bg-dark mx-4"></div>
          <div className="font-semibold text-dark my-auto">
            &copy; 2023 GDG Ogbomoso. All Rights Reserved.
          </div>
        </div>
        <div>
          <div className="text-sm text-dark font-bold mb-4">
            Follow us on:
          </div>
          <div className="flex gap-8">
            {socials.map((s, index)=>(
              <a href={`${s.url}`}  key={index}>
                <img src={s.icon} alt={s.name} className="max-h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;