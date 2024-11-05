import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
  return <div className={`${containerStyles}`}>
        <Image src={imgSrc} fill priority alt="Kamal IDOUFKIR Profile Image"  draggable="false" />
    </div>
}

export default DevImg
