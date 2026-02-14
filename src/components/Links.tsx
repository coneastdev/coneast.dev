import '../styles/global.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

export default function StandardImageList() {
  return (
    <div>
      <p className="text-center"><b>Socials & Contacts</b></p><br />
      <ImageList cols={6} rowHeight={164} className="m-3">
      {itemData.map((item) => (
          <ImageListItem key={item.img}>
          <Link href={`${item.href}`}>
              <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
              />
          </Link>
          </ImageListItem>
      ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/protonmail.svg',
    title: 'Proton',
    href: 'mailto:coneastdev@proton.me',
  },
  {
    img: 'https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/gmail.svg',
    title: 'Gmail',
    href: 'mailto:inbox@coneast.dev',
  },
  {
    img: 'https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/linkedin.svg',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/coneastdev/',
  },
  {
    img: 'https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/github.svg',
    title: 'GitHub',
    href: 'https://github.com/coneastdev',
  },
  {
    img: '/credly-svgrepo-com.svg',
    title: 'Credly',
    href: 'https://www.credly.com/users/connor-eastwood/badges',
  },
  {
    img: '/devpost-svgrepo-com.svg',
    title: 'Dev Post',
    href: 'https://example.com',
  },
];