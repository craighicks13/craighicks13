import { useTheme } from 'next-themes';
import { 
    HiOutlineSun as Sun, 
    HiOutlineMoon as Moon 
} from 'react-icons/hi';

export default function Nav() {
  const { theme, setTheme } = useTheme();

  return(
<button
    className='border-thin dark:hover:border-accent-200 dark:hover:text-accent-200 hover:border-accent-200 hover:text-accent-200 rounded-md p-2.5 focus:outline-none'
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >
    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
  </button>
  )
  
}