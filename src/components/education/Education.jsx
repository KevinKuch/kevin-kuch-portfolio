import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


export default function Education({}) {


    return (
        <section className='Education section' id='education'>
            <h2 className="section__title">Éducation</h2>
            <span className="section__subtitle">Mon parcours scolaire</span>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 - ajourd'hui"
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<SchoolIcon />}
                
            >
            
            <h3 className="vertical-timeline-element-title">DEC Technique d'intégration multimédia</h3>
            <h4 className="vertical-timeline-element-subtitle">Collège de Maisonneuve, montréal</h4>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2020"
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Étude en Design de présentation</h3>
                <h4 className="vertical-timeline-element-subtitle">Cégèp de Vieux-Montréal, montréal</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<SchoolIcon />}
                
            >
            
            <h3 className="vertical-timeline-element-title">DEC Sciences humaines - profil individu</h3>
            <h4 className="vertical-timeline-element-subtitle">Collège de Maisonneuve, montréal</h4>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<HourglassTopIcon />}
            />

            </VerticalTimeline>

            
        </section>
    );
}