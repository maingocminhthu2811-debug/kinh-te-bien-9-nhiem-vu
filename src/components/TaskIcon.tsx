import React from 'react';
import {
  Compass,
  Map,
  Building2,
  Cpu,
  Leaf,
  Anchor,
  Waves,
  Users,
  Shield,
  HelpCircle
} from 'lucide-react';

interface TaskIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TaskIcon: React.FC<TaskIconProps> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Compass':
      return <Compass size={size} className={className} />;
    case 'Map':
      return <Map size={size} className={className} />;
    case 'Building2':
      return <Building2 size={size} className={className} />;
    case 'Cpu':
      return <Cpu size={size} className={className} />;
    case 'Leaf':
      return <Leaf size={size} className={className} />;
    case 'Anchor':
      return <Anchor size={size} className={className} />;
    case 'Waves':
      return <Waves size={size} className={className} />;
    case 'Users':
      return <Users size={size} className={className} />;
    case 'Shield':
      return <Shield size={size} className={className} />;
    default:
      return <HelpCircle size={size} className={className} />;
  }
};
