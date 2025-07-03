import { BellIcon, ChevronRight, PanelLeft, Search } from 'lucide-react';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b bg-white">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                    <PanelLeft className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-gray-700">Workspace</span>
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span>Folder 2</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="font-semibold text-black">Spreadsheet 3</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search within sheet"
                        className="pl-8 pr-3 py-1 rounded-md border border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-100"
                    />
                </div>

                <div className="relative hover:cursor-pointer" onClick={() => {
                    console.log("Notifications");
                }}>
                    <BellIcon className="w-5 h-5 text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full px-1.5">
                        2
                    </span>
                </div>

                <div className="flex items-center gap-2 hover:cursor-pointer" onClick={() => {
                    console.log("Profile page");
                }}>
                    <img
                        src="https://i.pravatar.cc/32?img=1"
                        alt="John Doe"
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="text-sm leading-tight hidden md:block">
                        <p className="text-black font-medium">John Doe</p>
                        <p className="text-gray-500 text-xs">john.doe@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
