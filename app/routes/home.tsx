import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SavvyRoof" },
    { name: "description", content: "Excelencia en techado para hogares de lujo" },
  ];
}

export default function Home() {
  return <Welcome />;
}
