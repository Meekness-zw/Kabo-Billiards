import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kabo Billiards",
  description: "Contact Kabo Billiards for pool tables, snooker tables, table tennis, and game room solutions. Located at 8406 Stortford Road, Tywald Plots, Harare, Zimbabwe.",
  keywords: "contact Kabo Billiards, pool table sales Zimbabwe, billiards service Harare, game room consultation, pool table installation, snooker table repair, billiards equipment support",
  openGraph: {
    title: "Contact Kabo Billiards | Pool Table Sales & Service",
    description: "Contact Kabo Billiards for pool tables, snooker tables, table tennis, and game room solutions in Zimbabwe.",
    images: ["/images/modern game room with bar.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
