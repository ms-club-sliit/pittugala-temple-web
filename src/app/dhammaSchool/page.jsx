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
            මාලඹේ ශ්‍රී තරුණෝදය දහම් පාසල වසර 100කටත් වඩා පැරණි ඉතිහාසයක් ඇති
            දිවයිනේ ප්‍රමුඛ දහම් පාසල් අතරින් එකකි. මෙම දහම් පාසල ප්‍රදේශයේ
            බහුතරයක් දරු දැරියන්ගේ දහම් දැනුම පෝෂණය කරණ තෝතැන්නක් වන අතර ඒ සඳහා
            ඇප කැප වුන ඉතා දක්ෂ, විනය ගරුක ගුරු මණ්ඩලයකින්ද සමන්විත වේ. ශ්‍රේෂ්ඨ
            බුදු දහම සදාකාලිවම පවත්වා ගෙනයාමේ දැක්ම සහිතව ආරම්භ කරන ලද මෙම
            පුජනීය ආයතනය, ආගමික වත්පිළිවෙත්, සමාජ ප්‍රවේශයන් සහ විවිධාකාර
            සංස්කෘතික ක්‍රියාකාරකම් සඳහා දුවා දරුවන් යොමු කිරීම සඳහා නිරතුරුව
            ප්‍රමුඛත්වය ලබා දෙයි. එමෙන්ම ශ්‍රේෂ්ඨ බුදුදහම ඉගැන්වීම හා බුද්ධ සාශන
            අමාත්‍යාශය මඟින් ඒ සඳහා පවත්වනු ලබන විභාග සඳහා සිසුන් යොමුකිරීම ද
            මෙම දහම් පාසල විසින් නොපිරිහෙළා ඉටුකරන මෙහෙවරකි.
          </p>
          <br />
          <p className="text-base">
            වසර අවසාන කාලීන පරීක්ෂණ මඟින් 1 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා
            සිසුන්ට ඔවුන්ගේ දැනුම සහ කුසලතා පෙන්නුම් කිරීමට අවකාශය සලසයි. මෙම
            ඇගයීම් ශාස්ත්‍රීය ප්‍රගතිය පමණක් නොව තම පෞද්ගලික ජීවිතයේ අරමුණු කරා
            යොමු වීමටද දරුවනට මහත් පිටුවහලක් වේ. එමෙන්ම ශාස්ත්‍රීය හැදෑරීම්වලට
            අමතරව බෞද්ධ සාරධර්ම වල වටිනාකම් ඉස්මතු කරන විෂය බාහිර ක්‍රියාකාරකම්
            රැසක් මෙම දහම් පාසල විසින් නිරන්තරයෙන් සංවිධානය කරන අතර විශේෂ දක්ෂතා
            ඇති දරුවන්ට තම දහම් පාසලේ සහ එහි ක්‍රියාකාරකම් වල නායක්තවය ලබාගැනීමට
            ද අවස්ථා ද උදා වනු ඇත. එමඟින් තම සම වයසේ මිතුරන්ට සහකම්පනයෙන් හා
            සුහඳතාවයෙන් මඟ පෙන්වීමට ලැබීම එම දරුවන්ට ලැබෙන ඉතා වටිනා අවස්ථාවකි.
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
