import MeetTheTeamCard from "../components/MeetTheTeamCard";

const teamMembers = [
  {
    initials: "KS",
    name: "Karim El-Sayed",
    role: "Co-Founder & CEO",
    location: "Cairo",
  },
  {
    initials: "NA",
    name: "Nour Abdelrahman",
    role: "Co-Founder & CPO",
    location: "Cairo",
  },
  {
    initials: "MF",
    name: "Mohamed Farouk",
    role: "Head of Vendor Success",
    location: "Alexandria",
  },
  {
    initials: "SK",
    name: "Sara Khalil",
    role: "Head of Customer Experience",
    location: "Giza",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="container mt-16 sm:mt-36 px-6 pb-16 md:px-8 sm:pb-24 lg:px-6 lg:pb-32">
      <div className="mx-auto max-w-2xl text-center font-semibold">
        <h2 className="text-2xl sm:text-3xl">Meet the team</h2>
        <p className="mt-3 text-muted-foreground">
          The people building Egypt&apos;s print marketplace
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {teamMembers.map(({ initials, name, role, location }) => (
          <MeetTheTeamCard
            key={name}
            initials={initials}
            name={name}
            role={role}
            location={location}
          />
        ))}
      </div>
    </section>
  );
}
