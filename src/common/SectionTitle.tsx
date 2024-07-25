import Image from "next/image";

const SectionTitle = ({title}: {title: string}) => {
    return(
        <>
        <h2 className="font-extrabold text-xl">{title}</h2>
        <Image
          width="110"
          height="25"
          alt="ghorbani-dev.ir"
          src="/images/titleLine/title.webp"
          className="object-fill"
          />
          </>
    )
}

export default SectionTitle;