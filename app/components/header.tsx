import Logo from "./logo";
import ProfileIcon from "./profile-icon";
import Searchbar from "./searchbar";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-10 flex h-[7.5vh] items-center gap-1 border-b bg-background px-4 justify-between">
      <div className="flex gap-2 items-center">
        <Logo variant="medium" />
        <Badge variant="outline" className="text-xs w-fit h-fit px-2">
          Super Admin
        </Badge>
      </div>
      <div className="flex gap-2">
        <Searchbar />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
