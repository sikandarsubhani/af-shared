import { PAGE } from '@/utils/constants';
import {
  APIDocsUrls,
  navigationLinksPublic,
  toolsUrls,
} from '@/utils/navigation-links';
import { pageUrl } from '@/utils/utils';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DropdownMenu from '../../components/common/DropDownMenu';
const MobileNavigationGlobal = dynamic(
  () => import('../../components/navigation/MobileNavigationGlobal')
);

function NavBarGlobal() {
  return (
    <div className='relative bg-primary'>
      <header className='text-primary-dark-hover responsive-pad max-w-[1668px] w-full mx-auto'>
        <div className='flex-cb py-1 w-full'>
          <Link href='/' className='hidden lg:block mx-5'>
            <Image
              src={'/img/logo-black-yellow-bg.jpg'}
              width={90}
              height={90}
              alt='API Freaks logo'
              priority={true}
            />
          </Link>

          <MobileNavigationGlobal />

          <nav className='hidden lg:flex justify-between gap-0 w-3/4 py-3 px-5 mx-5 bg-white rounded-full select-none'>
            <ul className='flex-c space-x-8 xl:space-x-10'>
              {navigationLinksPublic.map((link, index) => {
                if (link.label === 'Documentation')
                  return (
                    <DropdownMenu
                      key={index}
                      items={APIDocsUrls}
                      title='Documentation'
                      page={pageUrl(PAGE.APIFreaks)}
                    />
                  );
                if (link.label === 'Tools')
                  return (
                    <DropdownMenu
                      key={index}
                      items={toolsUrls}
                      title='Tools'
                      page={pageUrl(PAGE.Tools)}
                      className='-translate-x-[20rem]'
                      linkPrefetch={false}
                    />
                  );
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='font-bold hover:text-black'
                      prefetch={link.label !== 'Tools'}
                    >
                      <div className='flex-cc'>
                        <p>{link.label}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='flex-cb gap-5 font-bold'>
              <Link className='hover:text-black' href={pageUrl(PAGE.Login)}>
                Sign In
              </Link>
              <Link
                href={pageUrl(PAGE.Signup)}
                className='bg-primary-dark text-white rounded-full py-3 px-4 hover:bg-primary-dark-hover'
              >
                Get Started For Free
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBarGlobal;
