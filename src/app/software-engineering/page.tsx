import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

const service = getServiceBySlug("software-engineering")!;

export const metadata = pageMetadata({
  title: service.name,
  description: service.summary,
  path: "/software-engineering",
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
