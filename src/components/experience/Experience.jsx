import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Badge from '@mui/material/Badge';

export default function Experience({}) {


    return (
        <section className='Experience section' id='experiences'>
            <h2 className="section__title">Expériences</h2>
            <span className="section__subtitle">Mes expériences de travail</span>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="06/2022 - 03/2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
                
            >
            
            <h3 className="vertical-timeline-element-title">Intégrateur Web</h3>
            <h4 className="vertical-timeline-element-subtitle">Montréal, Québec</h4>
            <div className="experience__skill">
                <p className='badge-skills'><Badge color="primary" badgeContent={"Html"}></Badge></p>
                <p className='badge-skills'><Badge color="primary" badgeContent={"Less"}></Badge></p>
                <p className='badge-skills'><Badge color="primary" badgeContent={"Jquery"}></Badge></p>
            </div>
            
            <p>Développer et ajouter des fonctionnalités dans des applications de formation en ligne.</p>
            <p>Effectuer un contrôle de qualité au courant des formations.</p>
            <p>Intégrer les formations dans le Framework (Zest) de Pardeux à partir des gabarits.</p>
            <p>Participer au développement et améliorer le Framework (Zest) de Pardeux.</p>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Hôte</h3>
                <h4 className="vertical-timeline-element-subtitle">Montréal, Québec</h4>
                <p>Organisation des tables.</p>
                <p>Répondre aux besoins des clients.</p>
                <p>Planifier les réservations.</p>
  
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<HourglassTopIcon />}
            />
            </VerticalTimeline>
        </section>
    );
}