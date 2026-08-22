import Image from "next/image";

const IMAGES = [
  { src: "/images/gallery/lab-interior.jpg", label: "Lab interior" },
  { src: "/images/gallery/sample-collection.jpg", label: "Sample collection" },
  { src: "/images/gallery/reception.jpg", label: "Reception / branch" },
  { src: "/images/gallery/home-collection.jpg", label: "Home collection" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {IMAGES.map((img) => (
        <div key={img.src} className="relative aspect-[4/5] overflow-hidden border border-line">
          <Image src={img.src} alt={img.label} fill className="object-cover" />
          <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white">
            {img.label}
          </span>
        </div>
      ))}
    </div>
  );
}
