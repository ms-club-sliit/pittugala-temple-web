import Image from 'next/image'
const DhammaSchoolPage = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-black container mx-auto px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-4xl lg:text-5xl mb-4 leading-normal">
            Construction of Dhatu Mandir and Sanghavasa
          </p>
        </div>
        <div className="block my-12">
          <Image
            className=" w-full"
            src="/static/coverproject.jpeg "
            width={500}
            height={100}
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-base">
            Construction of Dhatu Mandir and Sanghavasa Since the construction
            work of the new Dhatu Mandir and Sanghavasa has already started, we
            cordially invite you to contribute to this noble task of completing
            its work. <br /> Donations of money Bank of Ceylon Malabe Branch -
            85769121 <br /> Abbot - Sri Sudarshanarama Puran Vihara - Malabe |
            0715608209
          </p>
        </div>
      </div>
    </div>
  )
}

export default DhammaSchoolPage
