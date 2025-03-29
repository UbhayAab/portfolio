import styles from './Experience.module.css';
import { Section } from '../section';
import { Heading } from '../heading';
import { Text } from '../text';
import { Divider } from '../divider';

export const Experience = ({ id }) => {
  const companies = [
    {
      id: 1,
      company: 'JPMorgan Chase & Co.',
      positions: [
        {
          id: 101,
          role: 'Associate',
          period: 'Feb 2024 - Present',
          description: 'Skills: Financial Markets · Financial Modeling'
        },
        {
          id: 102,
          role: 'Analyst',
          period: 'Jul 2023 - Jan 2024',
          description: 'Skills: Financial Markets · Data Analysis · Statistical Analysis'
        }
      ]
    },
    {
      id: 2,
      company: 'Jarurat Care Foundation',
      positions: [
        {
          id: 201,
          role: 'Founder & Caregiver',
          period: 'Mar 2024 - Present',
          description: 'Building Jarurat Care Foundation (NGO): Cancer Concierge for cancer patients and their family members. In loving memory of my fighter mother Rekha Joshi (1969-2023) who bravely battled with Stage 4 Cholangiocarcinoma for 7 months. Connect with me: Priyanka.joshi@jarurat.care'
        }
      ]
    },
    {
      id: 3,
      company: 'Nomura',
      positions: [
        {
          id: 301,
          role: 'Analyst',
          period: 'Nov 2022 - Jun 2023',
          description: 'Global Markets-Quantitative Investment Strategies'
        },
        {
          id: 304,
          role: 'Global Markets Summer Analyst',
          period: 'Apr 2020 - Jun 2020',
          description: 'Interned with Quantitative Investment Strategies(QIS), London Desk. Awarded Pre Placement Offer(PPO) by the senior management for exceptional performance. Automated the delivery of client pitchbook system, reducing the runtime by 95%. Generated an algorithm for paper trading of $1 million under a high volatility environment with cumulative returns of 6% in 5 weeks with a sharpe ratio of 4.3.'
        }
      ]
    },
    {
      id: 4,
      company: 'Jai Kisan',
      positions: [
        {
          id: 401,
          role: 'CEO\'s Office',
          period: 'Sep 2020 - Apr 2021',
          description: 'Jai Kisan is building the first rural fintech full-stack platform to cater to the financial needs of borrowers in rural emerging markets. The platform comprises a user-friendly loan application tool utilizing a credit scoring engine of 200+ parameters for its farmers, a customizable loan origination and management system for its lenders and a full-stack CRM solution for its channel partners.'
        }
      ]
    },
    {
      id: 5,
      company: 'Parliamentarians with Innovators for India - COVID-19 Action',
      positions: [
        {
          id: 501,
          role: 'Research and Innovator Outreach Associate',
          period: 'Mar 2020 - May 2020',
          description: 'Performed research & outbound marketing for PI India with the objective of disseminating COVID-19 related information and attracting innovations for the same which could be scaled quickly through expedited reach to Parliamentarians, VCs, Health Experts, etc.'
        }
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Dual Degree, Engineering Design, Specialisation in Biomedical Engineering',
      institution: 'Indian Institute of Technology, Madras',
      year: '2016 - 2021',
      grade: 'Grade: 8.6/10'
    },
    {
      id: 2,
      degree: 'St Theresa School, Nainital',
      institution: 'St Theresa School, Nainital',
      year: '2003 - 2016',
      grade: 'Grade: 10/10'
    }
  ];

  return (
    <Section id={id} className={styles.experience}>
      <Heading level={2} as="h2" className={styles.mainTitle}>
        Experience & Education
      </Heading>
      
      <div className={styles.container}>
        <div className={styles.section}>
          <Heading level={3} as="h3" className={styles.sectionTitle}>
            Professional Experience
          </Heading>
          
          <div className={styles.timeline}>
            {companies.map(company => (
              <div key={company.id} className={styles.companyItem}>
                <Heading level={4} as="h4" className={styles.companyName}>
                  {company.company}
                </Heading>
                
                <div className={styles.positions}>
                  {company.positions.map(position => (
                    <div key={position.id} className={styles.positionItem}>
                      <div className={styles.timelineMeta}>
                        <Text size="m" className={styles.period}>{position.period}</Text>
                      </div>
                      <div className={styles.timelineContent}>
                        <Heading level={5} as="h5" className={styles.role}>
                          {position.role}
                        </Heading>
                        <Text size="s" className={styles.description}>{position.description}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Divider />
        
        <div className={styles.section}>
          <Heading level={3} as="h3" className={styles.sectionTitle}>
            Education
          </Heading>
          
          <div className={styles.education}>
            {education.map(edu => (
              <div key={edu.id} className={styles.educationItem}>
                <div className={styles.educationMeta}>
                  <Text size="m" className={styles.year}>{edu.year}</Text>
                </div>
                <div className={styles.educationContent}>
                  <Heading level={4} as="h4" className={styles.degree}>
                    {edu.degree}
                  </Heading>
                  <Text size="m" className={styles.institution}>{edu.institution}</Text>
                  <Text size="s">{edu.grade}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}; 