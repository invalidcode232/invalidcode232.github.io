import NavigationLink from "../components/navigation-link.tsx";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center mb-10 text-white">
      <span className="text-3xl inline-block align-middle">James Sungarda</span>
      <div>
        <NavigationLink
          href={"https://github.com/invalidcode232"}
          text={"Github"}
        />
        <NavigationLink
          href={"https://www.linkedin.com/in/james-sungarda-20a735224/"}
          text={"Linkedin"}
        />
      </div>
    </div>
  );
}
