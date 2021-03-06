import { extendTheme } from '@chakra-ui/react';

const mainTheme = extendTheme({
  colors: {
    dark: '#2E3240',
    light: '#EDE4D7',
    mid: '#65626A',
    lightAccent: '#8A5541',
    darkAccent: '#614342',
    projects: {
      language: '#eb4034',
      frontend: '#6cb6eb',
      backend: '#4ec752',
      databases: '#e6e36a',
      testing: '#f097bd',
      ci_cd: '#e03d99'
    }
  },
  components: {
    Heading: {
      variants: {
        section: {
          fontFamily: 'Bebas Neue',
          fontSize: '5xl',
          letterSpacing: 'wider'
        }
      }
    },
    Link: {
      variants: {
        active: {
          fontWeight: 'bold',
          fontSize: 'lg',
          color: 'orange.300'
        },
        inactive: {
          color: 'white'
        }
      }
    }
  }
});

export default mainTheme;
