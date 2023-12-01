import Image from 'next/image'
const DhammaSchoolPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-black container mx-auto px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-4xl lg:text-5xl mb-4 leading-normal">
            නව ධාතු මන්දිරය සහ සංඝාවාසයේ ඉදිකිරිම්
          </p>
        </div>
        <div className="block my-12">
          <img
            className=" w-full"
            src="/static/coverproject.jpeg "
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-base">
            මෙම ඉපැරිණි සිද්ධස්ථානයේ පවතින සමහර ගොඩනැගිලි මේ වන විට අබලන් තත්වයට පත්ව ඇත.
            විශේෂයෙන් භික්ෂුන්ව හන්සේලා වැඩ වෙසෙන සංඝාවාසය භාවිතයට නුසුදුසු ආකාරයට අබලන් වී ඇත.
            එබැවින් මෙම සංඝාවාසය කඩා ඉවත් කොට නව සංඝාවාසයක් ඉදිකිරීම කඩිනම් අවශ්‍යතාවක් ලෙස විහාරාරස්ථානය හඳුනා ගෙන ඇත.
            නව ධාතු මන්දිරය සහ සංඝාවාසයේ ඉදිකිරිම් කටයුතු දැනටමත් ආරම්භ කර ඇති බැවින්එහි වැඩ නිමකරවාගැනීමේ මෙම උතුම් කර්තව්‍යට දායකත්වය
            ලබා දෙන ලෙසට ශාසනාලයෙන් ආරාධනා කරමු.

            <br /> <br />
            විහාරාධිපති <br />
            ශ්‍රී සුදර්ශනාරාම පුරාණ විහාරය - මාලබේ<br />
            ලංකා බැංකුව මාලබේ ශාඛව - 8576912<br />
            0715608209
          </p>
        </div>
      </div>
    </div>
  )
}

export default DhammaSchoolPage
