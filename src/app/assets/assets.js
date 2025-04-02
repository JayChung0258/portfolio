import user_image from './user_image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img2.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import cursor_logo from './cursor_logo.png';
import postgresql_logo from './postgresql_logo.png';
import react_logo from './react_logo.png';
import cursor_logo_dark from './cursor_logo_dark.png';
import ml_logo from './ml_logo.png';
import mobile_develop from './mobile_develop.png';
import full_stack from './full_stack.png';
import gofreight from './Gofreight_logo-square.png';
import appar from './appar-logo.jpg';
import footer_bg_color from './footer-bg-color.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    cursor_logo,
    postgresql_logo,
    react_logo,
    cursor_logo_dark,
    ml_logo,
    mobile_develop,
    full_stack,
    gofreight,
    appar,
    footer_bg_color,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.full_stack, title: 'Web development', description: 'Web development is the process of building, programming...', link: '#work' },
    { icon: assets.mobile_develop, title: 'Mobile app', description: 'Mobile app development involves IOS/Android app development...', link: '#work' },
    { icon: assets.ml_logo, title: 'Machine Learning', description: 'Experience in implementing machine learning models into web services...', link: '#work' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, JavaScript, SQL, C++, Java' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MS. in Computer Science & BS. in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work', description: '2 yoe in software development' }
];

export const toolsData = [
    assets.vscode, assets.cursor_logo_dark, 
    assets.mongodb, assets.postgresql_logo, 
    assets.figma, assets.git,
    assets.react_logo,
    
];

export const workExperience = [
    {
        company: 'GoFreight',
        position: 'Software Engineer',
        duration: '02/2024 - 08/2024',
        achievements: [
            'Designed and implemented a scalable real-time monitoring system utilizing Python, Django, SQL, and Docker to track over 200,000 containers daily, processing over 1,000,000 data points.',
            'Orchestrated API integration using Celery and Redis to enhance real-time monitoring efficiency, enabling the system to handle over 50,000 daily shipments through parallel processing.',
            'Conducted log data analysis using Pandas, generating actionable insights that led to a 20% reduction in server costs by optimizing resource allocation.',
            'Resolved critical performance bottlenecks by redesigning Django ORM queries and optimizing database indices, reducing PostgreSQL query times by 30x.',
            'Developed a Google Chrome extension using React to streamline the element clipping process for the Customer Success team, improving their productivity by 50%.',
            'Led an automation project with Power Automate, integrating 3 new data sources and automating data crawling processes, resulting in a 30% increase in data coverage.'
        ],
        logo: assets.gofreight
    },
    {
        company: 'GoFreight',
        position: 'Software Engineer Intern',
        duration: '2023 - 2024',
        achievements: [
            'Developed a data extraction pipeline using Scrapy and Selenium, efficiently gathering structured data from multiple sources and accelerating data transmission processes, enabling quicker access to critical information.',
            'Streamlined EDI (Electronic Data Interchange) system integration by building robust backend systems with Django and RESTful APIs, allowing seamless cross-team data exchange and improving operational efficiency across departments.',
            'Deployed and monitored web crawlers on servers utilizing AWS, Airflow, Sentry, and Zyte, ensuring optimal crawler performance and timely data acquisition. Implemented monitoring and alert systems to maintain uptime and service quality.',
            'Created comprehensive unit tests with Pytest, achieving 80% test coverage and significantly enhancing product reliability. This proactive testing reduced bugs in production and facilitated smoother updates and deployments.',
            'Led a machine learning project to predict Estimated Time of Arrival (ETA) using historical shipment data. By deploying machine learning algorithms, I improved the accuracy of shipment predictions, leading to enhanced customer satisfaction and more efficient logistics planning.'
        ],
        logo: assets.gofreight
    },
    {
        company: 'Appar Technologies',
        position: 'Software Engineer Intern',
        duration: '2019 - 2020',
        achievements: [
            'Developed cross-platform exam system applications for both iOS and Android using React Native, delivering two custom apps for a local tutoring center. These apps facilitated seamless student-teacher interactions and enhanced the user experience through an intuitive interface.',
            'Built and optimized frontend components with React, working closely with UI/UX designers and backend engineers to enhance the reusability and performance of design elements. This collaboration led to more efficient development workflows and improved product consistency.',
            'Gained practical experience in mobile app development and front-end engineering, while contributing to a real-world project that positively impacted the local education sector.'
        ],
        logo: assets.appar
    }
];