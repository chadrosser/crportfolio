import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { GiGuitarBassHead, GiSmart } from "react-icons/gi";
import { GoRocket, GoVersions, GoFile } from "react-icons/go";
import { IoMdContact } from "react-icons/io";



export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
            <a href = "/"><SideBarIcon icon={<FaHome size="28" />} text={"Home"} /></a>
            <Divider />
            <a href = "/about"><SideBarIcon icon={<GiGuitarBassHead size="28" />} text={"About Me"} /></a>
            <a href = "/career"><SideBarIcon icon={<GoRocket size="28" />} text={"Career"} /></a>
            <a href = "/education"><SideBarIcon icon={<GiSmart size="32" />} text={"Education"} /></a>
            <a href = "/resume"><SideBarIcon icon={<GoFile size="28" />} text={"Resume"} /></a>
            <a href = "/contact"><SideBarIcon icon={<IoMdContact size="32" />} text={"Contact"} /></a>
            <a href = "/how"><SideBarIcon icon={<GoVersions size="32" />} text={"How I made this site"} /></a>
            <a href="https://www.github.com/chadrosser"><SideBarIcon icon={<FaGithub size="28" />} text={"GitHub"} /></a>
            <a href="https://www.linkedin.com/in/chadrosser/"><SideBarIcon icon={<FaLinkedin size="28" />} text={"LinkedIn"} /></a>
        </div>
    )
}

// deno-lint-ignore no-explicit-any
const SideBarIcon = ({ icon, text }: any) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;