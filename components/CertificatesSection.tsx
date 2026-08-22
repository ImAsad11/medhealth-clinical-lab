import Image from "next/image";
import { CERTIFICATIONS } from "@/lib/site-data";

export default function CertificatesSection() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {CERTIFICATIONS.map((cert) => (
        <div
          key={cert.name}
          className="hover-lift flex flex-col items-center border border-line bg-white p-6 text-center transition-colors hover:border-teal-500"
        >
          <div className="relative h-20 w-20">
            <Image src={cert.image} alt={cert.name} fill className="object-contain" />
          </div>
          <p className="mt-4 text-sm font-medium text-ink/70">{cert.name}</p>
        </div>
      ))}
    </div>
  );
}
