import Image from 'next/image'
import Team from '@/public/images/team.jpg'

import fb1 from '@/public/images/wbc/fb1.jpg';
import fb2 from '@/public/images/wbc/fb2.jpg';
import fb3 from '@/public/images/wbc/fb3.jpg';
import fb4 from '@/public/images/wbc/fb4.jpg';

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">About Us!</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={fb1} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    Watford Badminton Club is by far the largest badminton club in the area, with the most diverse range of events. It was formed in April 2011, playing once a week. Due to the popularity, a second evening was arranged from January 2012 and a third session was added in January 2013.  All three sessions take place in centrally loacted sports halls.
                  </p>
                  <p>
                    The club has now expanded to 70 members comprising a diverse range of age groups (18-60+) and backgrounds. <strong className="text-slate-50 font-medium">The common theme is that everybody enjoys a friendly, </strong>yet competitive evening and all are of an intermediate standard or better, in some cases a lot better!
                  </p>
                  <p>
                    Each evening the club has exclusive use of the high quality sports halls, with all four courts available for the two hour sessions. <strong className="text-slate-50 font-medium">Numbers are capped at 25 per evening for the general sessions. </strong>These are organised so that all players rotate, playing with different people throughout the evening, with just short breaks between games.
                  </p>
                  <p>
                   There are a range of competitive events including; two external leagues; the Inter Club League and the Hillingdon League (Division 2), an internal league, singles tournament, annual doubles tournament and a teams tournament.
                  </p>
                  <p>
                    There is an active social dimension to the club with regular activity events arranged throughout the year, for those that wish to participate. <a className="text-purple-500 font-medium hover:underline" href="#0">Take a look at the Facebook page</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}