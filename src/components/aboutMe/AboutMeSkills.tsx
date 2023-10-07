'use client';

import { SelfImprovementRounded } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';

import Skill from '../../page-components/Skill';
import HeaderDivider from '../../components/ui/HeaderDivider';
import { useStore } from '@/store/store';

const AboutMeSkills = () => {
   const data = useStore((state) => state.data);

   return (
      <Grid container>
         <Grid sx={{ width: 1, mt: 1 }}>
            <HeaderDivider
               color='primary.dark'
               animation={false}
               // @ts-ignore
               icon={<SelfImprovementRounded color='text.primary' />}
            >
               مهارت های من
            </HeaderDivider>
            {data?.skills?.map((s) => {
               const randomColor = (Math.random() * 0xfffff * 1000000)
                  .toString(16)
                  .slice(0, 6);

               return (
                  <Skill
                     value={s.rate}
                     name={s.name}
                     color={`#${randomColor}`}
                  />
               );
            })}
         </Grid>
      </Grid>
   );
};

export default AboutMeSkills;
