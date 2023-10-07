'use client';

import { Avatar, Box, IconButton, useTheme } from '@mui/material';
import { GitHub, Telegram, Instagram } from '@mui/icons-material';
import Image from 'next/image';

import ThemeActionButton from '../ThemeActionButton';

import avatar from '../../assets/avatar.png';
import { useStore } from '@/store/store';

const SidebarHeader = () => {
   const theme = useTheme();
   const data = useStore((state) => state.data);

   return (
      <>
         <ThemeActionButton />
         <Avatar
            variant='circular'
            sx={{
               height: 'auto',
               width: '90%',
               margin: '0 auto',
               bgcolor: 'transparent',
               display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
               },
               borderRadius: '10%',
            }}
         >
            <Image
               src={avatar}
               alt={data?.name || ''}
               width={200}
               height={200}
            />
         </Avatar>
         <h1
            style={{
               fontSize: '20px',
               color:
                  theme.palette.mode === 'dark'
                     ? theme.palette.primary.light
                     : theme.palette.secondary.main,
            }}
         >
            {data?.name || 'بی نام'}
         </h1>

         <Box sx={{ m: '10px auto', textAlign: 'center' }}>
            <IconButton
               aria-label='Github'
               sx={{ width: 40, height: 40 }}
            >
               <a
                  href='https://github.com/AlirezaAbd-dev'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <GitHub />
               </a>
            </IconButton>
            <IconButton
               aria-label='Telegram'
               sx={{ width: 40, height: 40 }}
            >
               <a
                  href='https://t.me/AlirezaAbd_Dev'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <Telegram sx={{ color: '#0093f5' }} />
               </a>
            </IconButton>
            <IconButton
               aria-label='Instagram'
               sx={{ width: 40, height: 40 }}
            >
               <a
                  href='https://www.instagram.com/alirezaabd.dev'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <Instagram sx={{ color: '#ba23ab' }} />
               </a>
            </IconButton>
         </Box>
      </>
   );
};

export default SidebarHeader;
