import { Button } from './Button';

import '../styles/sidebar.scss';
interface SideBarProps{
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    selected: number;
  }>;
  selected: number,
  actionButton: (id:number) => void;
}

export function SideBar(props:SideBarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.actionButton(genre.id)}
              selected={props.selected === genre.id}
            />
          ))}
        </div>
    </nav>
  )
}