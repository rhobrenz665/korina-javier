import Image from "next/image";

type ProfilePhotoProps = {
  containerStyles: string;
  imgSrc: string;
};

const ProfilePhoto = ({ containerStyles, imgSrc }: ProfilePhotoProps) => {
  return (
    <div className={`${containerStyles} flex justify-center items-center relative`}>
      <Image
        src={imgSrc}
        priority
        alt="Profile Blob"
        fill
        className="w-full h-full object-cover object-bottom" // Aligns image to start from the bottom
        style={{
          WebkitMaskImage: "url('/hero/shape-1.svg')",
          maskImage: "url('/hero/shape-1.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          maskSize: "contain",
        }}
      />
    </div>
  );
}

export default ProfilePhoto; 