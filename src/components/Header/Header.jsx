import { SelectTheme } from "./components/SelectTheme";
import { Profile } from "./components/Profile";

export const Header = () => {
    return (
        <header>
            <SelectTheme></SelectTheme>
            <Profile></Profile>
        </header>
    )
}