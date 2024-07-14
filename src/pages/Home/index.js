import Toolbar from "@/components/Sidebar"
import MusicNav from "@/components/MusicNav";

const Home = () => {
    return (
        <div>
            <MusicNav />
            <div className="h-1/2"></div>
            <Toolbar />
        </div>
    )
}

export default Home