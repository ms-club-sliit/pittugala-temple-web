import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { DONATION_HEADER } from '@/consts/consts'
const DhammaSchoolPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-black container mx-auto px-4 sm:px-10 lg:px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4 leading-normal">
            නව ධාතු මන්දිරය සහ සංඝාවාසයේ ඉදිකිරිම්
          </p>
        </div>
        <div className="block my-12">
          <p className="text-left text-md sm:text-lg md:text-xl mb-4 leading-normal">
            වර්තමාන තත්වය
          </p>
          <img
            className=" w-full"
            src="/static/coverproject.jpeg "
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-left text-md sm:text-lg md:text-xl mb-4 leading-normal">
            ඉදිකිරීම් අවසන් වූ පසු තත්වය
          </p>
          <img
            className=" w-full"
            src="/static/coverproject2.png"
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-base">
            මෙම ඉපැරිණි සිද්ධස්ථානයේ පවතින සමහර ගොඩනැගිලි මේ වන විට අබලන් තත්වයට
            පත්ව ඇත. විශේෂයෙන් භික්ෂුන්ව හන්සේලා වැඩ වෙසෙන සංඝාවාසය භාවිතයට
            නුසුදුසු ආකාරයට අබලන් වී ඇත. එබැවින් මෙම සංඝාවාසය කඩා ඉවත් කොට නව
            සංඝාවාසයක් ඉදිකිරීම කඩිනම් අවශ්‍යතාවක් ලෙස විහාරාරස්ථානය හඳුනා ගෙන
            ඇත. නව ධාතු මන්දිරය සහ සංඝාවාසයේ ඉදිකිරිම් කටයුතු දැනටමත් ආරම්භ කර
            ඇති බැවින්එහි වැඩ නිමකරවාගැනීමේ මෙම උතුම් කර්තව්‍යට දායකත්වය ලබා දෙන
            ලෙසට ශාසනාලයෙන් ආරාධනා කරමු.
          </p>
          <br />
          <br />
          <div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1w03ee5MPccFFa2I4yCjqf0Owrl1TK1-r/view?usp=sharing"
              className="  text-blue-800
             underline"
            >
              ධාතු මන්දිරය හා සංඝාවාස ගොඩනැගිල්ල ඉදිකිරීම් අභ්‍යන්තර වැඩ නිම
              කිරීමට අදාල ඇස්තයම්න්තුව.
            </a>
          </div>
          <div class="flex justify-center items-center">
            <div>
              <br />
              <br />
              <p className="text-xl text-orange text-center">{DONATION_HEADER}</p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'left',
                  flexDirection: 'column',
                }}
                className="my-4 items-center"
              >
                <Image
                  src="/static/boc.png"
                  alt="pittugala-temple-web-logo"
                  width={150}
                  height={100}
                  loading="lazy"
                />
              </div>
              <p>විහාරාධිපති</p>
              <p>ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරය - මාලඹේ</p>
              <p>ලංකා බැංකුව මාලඹේ ශාඛව - 8576912</p>
              <p>0715608209</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DhammaSchoolPage
