import '../styles/global.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

export default function StandardImageList() {
  return (
    <div className="dark:bg-stone-800 dark:text-white">
      <p className="text-center"><b>Contacts</b></p><br />
      <ImageList cols={3}>
        <ImageListItem key="Proton" className="m-1">
          <Link href="mailto:coneastdev@proton.me">
            <img
              srcSet="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/protonmail.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
              src="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/protonmail.svg?w=164&h=164&fit=crop&auto=format"
              alt="Proton"
              loading="lazy"
            />
          </Link>
        </ImageListItem>
        <ImageListItem key="Gmail" className="m-1">
          <Link href="mailto:inbox@coneast.dev">
            <img
              srcSet="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/gmail.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
              src="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/gmail.svg?w=164&h=164&fit=crop&auto=format"
              alt="Gmail"
              loading="lazy"
            />
          </Link>
        </ImageListItem>
        <ImageListItem key="LinkedIn" className="m-1">
          <Link href="https://www.linkedin.com/in/coneastdev/">
            <img
              srcSet="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/linkedin.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
              src="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/linkedin.svg?w=164&h=164&fit=crop&auto=format"
              alt="LinkedIn"
              loading="lazy"
            />
          </Link>
        </ImageListItem>
      </ImageList>
    </div>
  );
}