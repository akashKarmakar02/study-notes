import Image from "next/image";

function Heros() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h[400px]">
          <Image
            src={"/documents.png"}
            alt="document"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src={"/documents-dark.png"}
            alt="document-dark"
            className="object-contain hidden dark:block"
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/reading.png"}
            alt="reading"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src={"/reading-dark.png"}
            alt="reading-dark"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Heros;
