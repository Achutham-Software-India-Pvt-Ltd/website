import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

const service = getServiceBySlug("it-staffing")!;

export const metadata = pageMetadata({
  title: service.name,
  description: service.summary,
  path: "/it-staffing",
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
