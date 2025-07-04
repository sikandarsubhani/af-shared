import { APIDocsUrls, toolsUrls } from '../../utils/navigation-links';
import { getBaseComponents } from '../../utils/base-components';
import { FacebookIcon, HeartIcon, LinkedinIcon, TwitterIcon } from '../Icons';

// Footer props to accept page URLs from repositories
export type FooterProps = {
  signupUrl: string;
  docsUrls: {
    documentation: string;
    swagger: string;
    pricing: string;
    login: string;
    about: string;
    resources: string;
    terms: string;
    privacy: string;
  };
};

function Footer({
  signupUrl,
  docsUrls,
}: FooterProps) {
  const { Image, Link, NoPrefetchLink } = getBaseComponents();
  
  return (
    <>
      <footer className='@container bg-black text-white responsive-pad overflow-hidden'>
        <div className='max-w-[1540px] mx-auto'>
          <div className='flex-cc py-10 flex-col @[768px]:flex-row gap-5'>
            <p className='text-3xl font-bold text-white'>
              Ready to get started?
            </p>
            <Link
              href={signupUrl}
              className='bg-primary text-center py-5 px-10 rounded-full text-black font-medium text-base'
            >
              Sign Up for Free
            </Link>
          </div>
          <hr />
          <div className='py-10 text-center @[640px]:text-left'>
            <div className='@[768px]:flex-b items-start gap-x-12 space-y-20 @[768px]:space-y-0'>
              <div className='flex flex-col justify-center space-y-3'>
                <Link href='/' className='mx-auto'>
                  <Image
                    src='/img/logo-black-bg-small.jpg'
                    width={120}
                    height={120}
                    alt='APIFreaks'
                  />
                </Link>
                <div className='flex-cc gap-2 mt-4'>
                  <Link
                    href='/'
                    className='rounded-full bg-primary w-7 h-7 flex-cc text-black'
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    href='/'
                    className='rounded-full bg-primary w-7 h-7 flex-cc text-black'
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    href='/'
                    className='rounded-full bg-primary w-7 h-7 flex-cc text-black'
                  >
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
              <div className='flex flex-col flex-wrap @[640px]:h-[500px] @[1280px]:h-[380px] @[768px]:w-[70%] gap-y-8'>
                <div className='text-lg space-y-3'>
                  <h3 className='text-primary text-xl font-bold'>
                    API Catalog
                  </h3>
                  <ul className='space-y-1'>
                    {APIDocsUrls.map(api => (
                      <li key={api.title}>
                        <Link href={api.link}>{api.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='text-lg space-y-3'>
                  <h3 className='text-primary text-xl font-bold'>
                    Tools Catalog
                  </h3>
                  <ul className='space-y-1'>
                    {toolsUrls.map(api => (
                      <li key={api.title}>
                        <NoPrefetchLink href={api.link}>
                          {api.title}
                        </NoPrefetchLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='text-lg space-y-3'>
                  <h3 className='text-primary text-xl font-bold'>Docs</h3>
                  <ul className='space-y-1'>
                    <li>
                      <Link href={docsUrls.documentation}>Documentation</Link>
                    </li>
                    <li>
                      <Link href={docsUrls.swagger}>Swagger Docs</Link>
                    </li>
                  </ul>
                </div>
                <div className='text-lg space-y-3'>
                  <h3 className='text-primary text-xl font-bold'>
                    Pricing & Accounts
                  </h3>
                  <ul className='space-y-1'>
                    <li>
                      <Link href={docsUrls.pricing}>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href={signupUrl}>Sign up</Link>
                    </li>
                    <li>
                      <Link href={docsUrls.login}>Sign In</Link>
                    </li>
                  </ul>
                </div>

                <div className='text-lg space-y-3'>
                  <h3 className='text-primary text-xl font-bold'>Company</h3>
                  <ul className='space-y-1'>
                    <li>
                      <Link href={docsUrls.about}>About Us</Link>
                    </li>
                    <li>
                      <Link href={docsUrls.resources}>Resources</Link>
                    </li>
                    <li>
                      <Link href={docsUrls.terms}>Terms</Link>
                    </li>
                    <li>
                      <Link href={docsUrls.privacy}>Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex-cc flex-col text-base mt-56'>
              <div className='rounded-full bg-primary w-10 h-10 flex-cc text-black mb-2'>
                <HeartIcon />
              </div>
              <p>Copyright © 2024</p>
              <p>Made in Pakistan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
