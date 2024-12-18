import NavigationLink from "../components/navigation-link.tsx";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center mb-10 text-white">
      <span className="text-3xl inline-block align-middle">James Sungarda</span>
      <div>
        <NavigationLink href={"/blog"} text={"Github"} />
        <NavigationLink href={"/"} text={"Linkedin"} />
      </div>
    </div>
  );
}
