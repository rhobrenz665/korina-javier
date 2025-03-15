import Image from "next/image";

type ProfilePhotoProps = {
  containerStyles: string;
  imgSrc: string;
  imgStyles?: string;
  maskUrl?: string;
};

const ProfilePhoto = ({ containerStyles, imgSrc, imgStyles, maskUrl }: ProfilePhotoProps) => {
  const maskStyles = maskUrl
  ? {
      WebkitMaskImage: `url('${maskUrl}')`,
      maskImage: `url('${maskUrl}')`,
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskRepeat: "no-repeat",
      maskSize: "contain",
    }
  : {};

  return (
  <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        priority
        alt="Profile Blob"
        fill
        className={imgStyles}
        style={maskStyles}
      />
    </div>
  );
}

export default ProfilePhoto; 