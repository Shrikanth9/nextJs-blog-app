import Image from "next/image"

const PropertyImages = ( { images }: { images: string[] }) => {
    return (  
        <section className="bg-blue-50 p-4"> 
          <div className="font-semibold text-2xl ml-4 mb-4"> Images </div>
          <div className="container mx-auto">
            { images.length === 1 ? (
                <Image 
                  src={images[0]}
                  alt=""
                  className="object-cover h-[400px] mx-auto rounded-xl"
                  width={1800}
                  height={400}
                  priority={true}
                />
            ): (
                <div className="grid grid-cols-2 gap-4">
                    { images.map((image: string, index: number) => {
                        const colSpan = (images.length % 2 === 1 && index === images.length - 1) ? 2 : 1
                        return (
                            (
                                <div key={index} className={`col-span-${colSpan}`}>
                                    <Image
                                        src={image}
                                        alt=""
                                        className="object-cover h-[400px] w-full rounded-xl"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                    />
                                </div>
                            )
                    )})}
                </div>
            )}
          </div>
        </section>
    );
}
 
export default PropertyImages;