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
                date="06/2022 - 03/2023"
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<SchoolIcon />}
                
            >
            
            <h3 className="vertical-timeline-element-title">Intégrateur Web</h3>
            <h4 className="vertical-timeline-element-subtitle">Longueuil, Québec</h4>
            
            
            <p>Développer et ajouter des fonctionnalités dans des applications de formation en ligne.</p>
            <p>Effectuer un contrôle de qualité au courant des formations.</p>
            <p>Intégrer les formations dans le Framework (Zest) de Pardeux à partir des gabarits.</p>
            <p>Participer au développement et améliorer le Framework (Zest) de Pardeux.</p>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 - 2023"
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Hôte</h3>
                <h4 className="vertical-timeline-element-subtitle">Montréal, Québec</h4>
                <p>Organisation des tables.</p>
                <p>Répondre aux besoins des clients.</p>
                <p>Planifier les réservations.</p>
  
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#767676', color: '#fff' }}
                icon={<HourglassTopIcon />}
            />
            </VerticalTimeline>
        </section>
    );
}