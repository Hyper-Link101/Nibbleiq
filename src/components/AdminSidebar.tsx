import { 
  LayoutDashboard, 
  FileText, 
  Podcast, 
  Link2, 
  Settings, 
  LogOut, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function AdminSidebar({ 
  activeTab, 
  onTabChange, 
  onLogout,
  isCollapsed,
  setIsCollapsed
}: AdminSidebarProps) {
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'podcast', label: 'Podcasts', icon: Podcast },
    { id: 'links', label: 'Resources', icon: Link2 },
  ];

  return (
    <div 
      className={cn(
        "h-screen bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 border-r border-slate-800",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center px-4 border-b border-slate-800">
        {!isCollapsed ? (
          <img src={logoImage} alt="NibbleIQ" className="h-6 brightness-0 invert" />
        ) : (
          <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold">
            N
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-2 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === item.id 
                ? "bg-orange-500 text-white" 
                : "hover:bg-slate-800 hover:text-white"
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 min-w-[20px]" />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-slate-800 space-y-1">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-slate-400"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!isCollapsed && <span>Collapse</span>}
        </button>
        
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-900/20 hover:text-red-400 transition-colors text-slate-400"
        >
          <LogOut className="w-5 h-5 min-w-[20px]" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}