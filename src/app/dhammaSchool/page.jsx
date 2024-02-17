import EventContainer from '@/components/dhammaSchoolEvents/eventContainer'
import events from './data/events.json'
import { DHAMMA_SCHOOL_HEADER } from '@/consts/consts'

const DhammaSchoolPage = () => {
  const filteredEvents = events.filter(
    (event) => event.category === 'Dhamma School'
  )

  return (
    <>
      <div className="text-black container mx-auto px-4 sm:px-10 lg:px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-4xl lg:text-5xl mb-4 leading-normal">
            {DHAMMA_SCHOOL_HEADER}
          </p>
        </div>
        <div className="block my-12">
          <img
            src="/static/dammaSchool.jpeg"
            className="w-full"
            alt="dhamma school image"
          />
        </div>
        <div className="block my-12 text-center font-bold">
          <p className="text-base">
            මාළඹේ ශ්‍රී තරණෝදය දහම් පාසැල වසර 300කටත් වඩා පැරණි ඉතිහාසයක් ඇති  දිවයිනේ ප්‍රමුඛ දහම් පසැල් අතරින් එකකි.
            ප්‍රදේශයේ  සිසුන් අධික සංඛ්‍යාවක්  තම දහම් දැනුම මෙම දහම් පැසැලෙන් ලබා ගන්නා අතර  ඒ්   සහා කැප වුන ඉතා දක්ෂ,
            විනයගරුක ගුරු මණ්ඩලයකින්  ද සමන්විතය.
            ශ්‍රේෂ්ඨ බුදු දහම සදාකාලිවම පවත්වා ගෙන යාමේ දැක්මක් සහිතව ආරම්භ කරන ලද මෙම  පුජනීය  ආයතනය,
            ආගමික වත්පිළිවෙත් , සමාජ ප්‍රවේශයන් සහ විවිධාකාර සංස්කෘතික ක්‍රියාකාරකම් සඳහා සිසුන් යොමු කිරීම කෙරෙහි විශේෂ අවධානයක් යොමු කෙරේ.
            එමෙන්ම අපගේ ශ්‍රේෂ්ට බුදු දහම ඉගැන්වීම හා බුද්ධ සාසන අමාත්‍යාංශය මගින් ඒ සඳහා පවත්වනු ලබන විභාග සඳහා සිසුන් යොමු කිරීම ද
            මෙම දහම් සතු විශේෂ කර්යයකි.
          </p>
          <br />
          <p className="text-base">
            කාලීන පරීක්ෂන  දහම් පාසැල් අධ්‍යාපනයේ මූලාමරම්භය වන අතර එයින් 1ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා සිසුන්ට ඹවුන්ගේ දැනුම සහ කුසලතා පෙන්නුම් කිරීමට
            අවස්ථාව ලබා දෙයි. මෙම ඇගයීම් තුළින් ශාස්ත්‍රීය ප්‍රගතිය පමණක් නොව තම පෞද්ගලික ජීවිතයේ  ජයග්‍රහණ සඳහාද වෙිදිකාවක් වනු ඇත.
            එමෙන්ම ශ්‍රාස්තීය හැදෑරීම්වලට අමතරව බෙෘද්ධ සාරධර්මවල ගැඹුරින් මුල් බැස ඇති විෂය බාහිර ක්‍රියාකාරකම් රැසක් මෙම දහම් පාසැල විසින් ඉදිරිපත් කරන
            අතර විශේෂ දක්ෂතා ඇති දරුවන්ට තම දහම් පැසැලේ නායක්තවය ලබා ගැනීමට ද අවස්ථාද උදාවනු ඇත. එමගින් තම සම වයසේ මිතුරන්ට සහකම්පනයෙන්
            සුහඳතාවයෙන් තම මඟ පෙන්වීම් ලබා දෙනු ඇත.
          </p>
        </div>
        <div className="block my-12">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredEvents.length ? (
              filteredEvents.map((event) => (
                <EventContainer key={event.id} event={event} />
              ))
            ) : (
              <p className="flex justify-center">
                No events to display for the selected category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DhammaSchoolPage
