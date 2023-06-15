var websiteData = {
    currentJob: "Software Engineer",
    email: "vianjeromerayos@gmail.com",
    website: "rejj-tandoku.github.io",
    mobileNumber: "+639203287943",
    pdf: "2023-06-15 Resume.pdf",
    addressHTML: "Yakal St., SGV, <br>\
			Pamorangon, Daet, <br>\
            Camarines Norte",
    personalDescription: "Experienced software engineer with a strong proficiency in web development technologies, adept at transforming innovative ideas into functional and visually appealing websites. Skilled in popular tools used with Javascript & PHP with a passion for clean code and user-centric design.",
    workExperiences: [
        {
            jobTitle: "SOFTWARE ENGINEER",
            date: "Apr 2022 - Present",
            company: "MaroonStudios Inc.",
            description: "Design and develop server-side components for web and mobile applications. Collaborate with cross-functional teams to deliver high-quality software solutions. Use Google Cloud Platform services to utilize by/integrate to our systems. Conduct code reviews, debug and resolve issues, and stay updated with emerging technologies. Drive innovation through technical proficiency and teamwork.",
            logo: 'fa fa-briefcase'
        },
        {
            jobTitle: "COMPUTER PROGRAMMER / WEB DEVELOPER",
            date: "Jul 2019 - Mar 2022",
            company: "Camarines Norte State College",
            description: "Published different system currently being used by the institution namely Online Admission System, Medical & Dental Records System, Campus/Office Appointment, MIS Portal and AutoBackup for the automation of the backup of their databases.",
            logo: 'fa fa-briefcase'
        },
        {
            jobTitle: "WEB DEVELOPER (INTERN)",
            date: "Jul 2018 - Oct 2018",
            company: "CloudSwyft Global Systems, Inc.",
            description: "Joined the amazing team of web developers and helped in the development of a platform used to deliver Microsoft Products (powered by Microsoft Azure) to the clients by providing Virtual Machines readily accessible on-demand.",
            logo: 'fa fa-briefcase'
        }
    ],
    educations: [
        {
            course: "Bachelor of Science in Information Technology",
            date: "July 2014 - June 2015",
            school: "Camarines Norte State College",
            description:
                `<ul>
                    <li> <b style="font-weight:bold">Academic Distinction Awardee</b></i></li >\
                    <li><b style="font-weight:bold">Best Thesis Awardee</b></i> <i>(GOLIVE: Live Streaming Platform for Filipino Business Entrepreneurs</i></li >\
                    <li><b style="font-weight:bold">Dean\'s Lister</b> <i>(2017 - 2018)</i></li>
                </ul>`,
            logo: "fa fa-graduation-cap"
        }
    ],
    personalDevelopments: [
        {
            title: "Professional Google Workspace Administrator",
            date: "May 23, 2023",
            host: "Google Cloud Platform",
            description:
                `<ul>
                    <li><b style="font-weight:bold">Series ID: 3847</b></li>
                    <li><b style="font-weight:bold">Certification ID: z74JZf</b></li>
                    <li><b style="font-weight:bold">Google Cloud Certified</b></li>
                </ul>`,
            logo: "fa fa-google"
        },
        {
            title: "Career Service Professional Eligibility",
            date: "March 17, 2019",
            host: "Civil Service Commission",
            description:
                `<ul>
                    <li><b style="font-weight:bold">PASSED - Paper & Pencil Test</b></li>
                    <li><b style="font-weight:bold">BSCAST, Naga City, Region V</b></li>
                </ul>`,
            logo: "fa fa-file-text"
        }
    ]
}

var loadData = function () {
    $("#personalDescription").html(websiteData.personalDescription);
    $(".currentJob").html(websiteData.currentJob);
    $(".website").html(websiteData.website);
    $(".email").html(websiteData.email);
    $(".mobileNumber").html(websiteData.mobileNumber);
    $(".address").html(websiteData.addressHTML);

    $(".mailTo").prop('href', 'mailto:' + websiteData.email);
    $(".telephoneTo").prop('href', 'tel:' + websiteData.mobileNumber);
    $("#pdfDownload").prop('href', "resources/" + websiteData.pdf);

    workExperiences = "";
    websiteData.workExperiences.forEach(job => {
        workExperiences +=
            `<div class="timeline-block">
                <div class="timeline-ico">
                    <i class="${job.logo}"></i>
                </div>
                <div class="timeline-header">
                    <h3>${job.jobTitle}</h3>
                    <p>${job.date}</p>
                </div>\
                <div class="timeline-content">
                    <h4>${job.company}</h4>
                    <p>${job.description}</p>
                </div>\
            </div>`;
        console.log(workExperiences)
    });
    $(".workExperienceTimeline").html(workExperiences);

    educations = "";
    websiteData.educations.forEach(education => {
        educations +=
            `<div class="timeline-block"> 
                <div class="timeline-ico">
                    <i class="${education.logo}"></i>
                </div>
                <div class="timeline-header">
                    <h3>${education.course}</h3>
                    <p>${education.date}</p>
                </div>
                <div class="timeline-content">
                    <h4>${education.school}</h4>
                    <p>${education.description}</p>
                </div>
            </div>`
    });
    $(".educationTimeline").html(educations);

    personalDevelopments = "";
    websiteData.personalDevelopments.forEach(personalDevelopment => {
        personalDevelopments +=
            `<row><div class="timeline-block"> 
                <div class="timeline-ico">
                    <i class="${personalDevelopment.logo}"></i>
                </div>
                <div class="timeline-header">
                    <h3>${personalDevelopment.title}</h3>
                    <p>${personalDevelopment.date}</p>
                </div>
                <div class="timeline-content">
                    <h4>${personalDevelopment.host}</h4>
                    <p>${personalDevelopment.description}</p>
                </div>
            </div></row>`
    });
    $(".personalDevelopmentTimeline").html(personalDevelopments);
}