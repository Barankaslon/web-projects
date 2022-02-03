import React from 'react';
import { DiFirebase, DiReact, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the software development world.

    </SectionText>
     <List>
       <ListItem>
         <DiReact size='3rem'/>
         <ListContainer>
           <ListTitle>
             Software development
           </ListTitle>
           <ListParagraph>
             Experience with <br />
             javaScript, React.js
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiUnitySmall size='3rem'/>
         <ListContainer>
           <ListTitle>
             Game development
           </ListTitle>
           <ListParagraph>
             Experience with <br />
             C#, C++, Unity, Unreal
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
  </Section>
);

export default Technologies;
