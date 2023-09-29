import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';

type IButtonPanel = {
  text: string;
  icon: string;
};

const ButtonPanel = ({ text, icon }: IButtonPanel) => {
  return (
    <Link to={`${text}`} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {icon === 'AccountBoxIcon' && <AccountBoxIcon />}
            {icon === 'LocalMallIcon' && <LocalMallIcon />}
            {icon === 'DashboardIcon' && <DashboardIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default ButtonPanel;
