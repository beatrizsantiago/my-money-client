import { useRouter } from 'next/router';
import { Dashboard, Bill } from '@icon-park/react'
import { Container, Nav, Item, IconBox } from './styles';

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    icon: <Dashboard theme="outline" size="18" />,
    route: '/dashboard',
  },
  {
    label: 'Despesas',
    icon: <Bill theme="outline" size="18" />,
    route: '/despesas',
  },
]

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <Container>
      <Nav>
        {NAV_ITEMS.map((item, index) => (
          <Item
            key={index.toString()}
            href={item.route}
            active={asPath.includes(item.route) ? 1 : 0}
          >
            <IconBox>
              {item.icon}
            </IconBox>
            {item.label}
          </Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Navbar;
