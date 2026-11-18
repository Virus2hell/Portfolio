// Mobile apps shown under the "Mobile" tab in the Projects section.
// - link: store or download link without "https://" (e.g. "play.google.com/store/apps/details?id=com.example.app")
// - github: leave as "" if the repo is private, the Code button is hidden then
// - image: put the screenshot in public/images/projects/ (portrait phone screenshots are fine)
export const mobileProjects: {
  title: string
  description: string
  tech: string[]
  link: string
  github: string
  image: string
  imageAlt?: string
}[] = [
  {
    title: "Society Manager",
    description:
      "A full-stack housing society management app with 3 user roles (resident, watchman, secretary) that replaces WhatsApp groups and paper registers for visitor approvals, QR-code gate passes, maintenance payments with PDF receipts, and photo-based complaints. Backed by a multi-tenant Node.js/Express REST API (37 endpoints) with JWT auth and role-based access, where any society can sign up with a 6-digit join code, and 9 related PostgreSQL tables with constraints and transactions that block duplicate bills and double approvals.",
    tech: ["React Native", "Expo", "Node.js", "Express.js", "PostgreSQL", "NeonDB", "JWT", "EAS Build"],
    link: "expo.dev/accounts/atharva269/projects/society-manager/builds/dcaf0c72-e2bb-4474-893a-4f2b7b9b6853",
    github: "https://github.com/Virus2hell/Society-Management-App",
    image: "",
    imageAlt: "Society Manager mobile app screens"
  },
  {
    title: "Soccer Pucks",
    description:
      "A turn-based multiplayer soccer flick game for Android and iOS with a custom 2D physics engine (collisions, friction, rebounds). Real-time online 1v1 runs over Socket.IO, with the server running every match on the same TypeScript rules engine as the app so both players see the same game and no one can cheat. Animations run on the UI thread with Reanimated for a smooth 60 fps, plus accounts, puck stats with health drain, substitutions, upgrades, formations and a penalty shootout.",
    tech: ["React Native", "Expo", "TypeScript", "Socket.IO", "Reanimated", "Node.js"],
    link: "expo.dev/accounts/atharva269/projects/Soccer-Kicks/builds/b379188c-f781-4dd2-b8d8-2b45c1ff0ed1",
    github: "https://github.com/Virus2hell/Soccer-Kicks",
    image: "",
    imageAlt: "Soccer Pucks mobile game screens"
  },
];