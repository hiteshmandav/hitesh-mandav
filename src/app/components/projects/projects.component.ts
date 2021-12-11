import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [

        { title: 'Charts dashboard',
        cols: 2, rows: 1 ,
        vid1: `/assets/Chart-dashboard.gif`,
        content: `As a part hackerearth cooltrack challange, I developed a wireframe for a fictional chart dashboard.`,
        tech : `React, Redux`,
        applink:'https://charts-dashboard.herokuapp.com/',
        gitlink:'https://github.com/hiteshmandav/charts-dashboard',
      },
          { title: 'Tours and Travels Site Wireframe',
          cols: 2, rows: 1 ,
          vid1: `/assets/Tours&travels.gif`,
          content: `As a part of this project, I developed a wireframe for a fictional tours and travels company.`,
          tech : `HTML, SCSS`,
          applink:'https://hiteshmandav.github.io/tours-travels-advanced-css/',
          gitlink:'https://github.com/hiteshmandav/tours-travels-advanced-css',
        },
          { title: 'Chat Room',
          cols: 2, rows: 1 ,
          vid1: `/assets/chat-room.gif`,
          content: `As a part of this project, I developed web app that can be used to create chat rooms without an account to connect with other people.`,
          tech : `Angular, Node.js, Socket.io, Heroku`,
          applink:'https://code-colab-hitesh.herokuapp.com/',
          gitlink:'https://github.com/hiteshmandav/code-colab',
          gitlink1:'https://github.com/hiteshmandav/code-colab',
        },
          { title: 'Dynamic Programming Excercise',
          cols: 2, rows: 1 ,
          vid1: `/assets/dynamic-programming.gif`,
          content: `I created this project to solve some very common problems with different approaches of dynamic programming (Tabulation and Memoization) and compare the performance of each algorithm.`,
          tech : `HTML, CSS, JavaScript`,
          applink:'https://hiteshmandav.github.io/dynamic-programing/',
          gitlink:'https://github.com/hiteshmandav/dynamic-programing',
        },
        { title: 'Hand Tracking using Python',
        cols: 2, rows: 1 ,
        vid1: `/assets/hand-tracking.gif`,
        content: `As a part of this exercise, I built a python tool using the media pipe library to do hand detection and wrapped it with functions that make finger detection implementation easier.`,
        tech : `python`,
        applink:'',
        gitlink:'https://github.com/hiteshmandav/Hand-tracking-mediapipe',
        },
        { title: 'Brick Breakout Game',
        cols: 2, rows: 1 ,
        vid1: `/assets/brick-breakout.gif`,
        content: `As a part of this exercise, I built a basic brick breakout game to understand edge detection and canvas in javascript.`,
        tech : `HTML, CSS, JavaScript`,
        applink:'https://hiteshmandav.github.io/brick-breakout-game/',
        gitlink:'https://github.com/hiteshmandav/brick-breakout-game',
        },
        { title: 'Ping Pong Game',
        cols: 2, rows: 1 ,
        vid1: `/assets/pingpong.gif`,
        content: `As a part of this exercise, I built a basic ping-pong game to understand edge detection and canvas in javascript.`,
        tech : `HTML, SCSS`,
        applink:'https://github.com/hiteshmandav/ping-pong',
        gitlink:'https://hiteshmandav.github.io/ping-pong/',
        }
      ];
      }

      return [
        { title: 'Charts dashboard',
        cols: 1, rows: 1 ,
        vid1: `/assets/Chart-dashboard.gif`,
        content: `As a part hackerearth cooltrack challange, I developed a wireframe for a fictional chart dashboard.`,
        tech : `React, Redux`,
        applink:'https://charts-dashboard.herokuapp.com/',
        gitlink:'https://github.com/hiteshmandav/charts-dashboard',
      },
        { title: 'Tours and Travels Site Wireframe',
        cols: 1, rows: 1 ,
        vid1: `/assets/Tours&travels.gif`,
        content: `As a part of this project, I developed a wireframe for a fictional tours and travels company.`,
        tech : `HTML, SCSS`,
        applink:'https://hiteshmandav.github.io/tours-travels-advanced-css/',
        gitlink:'https://github.com/hiteshmandav/tours-travels-advanced-css',
      },
        { title: 'Chat Room',
        cols: 1, rows: 1 ,
        vid1: `/assets/chat-room.gif`,
        content: `As a part of this project, I developed web app that can be used to create chat rooms without an account to connect with other people.`,
        tech : `Angular, Node.js, Socket.io, Heroku`,
        applink:'https://code-colab-hitesh.herokuapp.com/',
        gitlink:'https://github.com/hiteshmandav/code-colab',
        gitlink1:'https://github.com/hiteshmandav/code-colab',
      },
        { title: 'Dynamic Programming Excercise',
        cols: 1, rows: 1 ,
        vid1: `/assets/dynamic-programming.gif`,
        content: `I created this project to solve some very common problems with different approaches of dynamic programming (Tabulation and Memoization) and compare the performance of each algorithm.`,
        tech : `HTML, CSS, JavaScript`,
        applink:'https://hiteshmandav.github.io/dynamic-programing/',
        gitlink:'https://github.com/hiteshmandav/dynamic-programing',
      },
      { title: 'Hand Tracking using Python',
      cols: 1, rows: 1 ,
      vid1: `/assets/hand-tracking.gif`,
      content: `As a part of this exercise, I built a python tool using the media pipe library to do hand detection and wrapped it with functions that make finger detection implementation easier.`,
      tech : `python`,
      applink:'',
      gitlink:'https://github.com/hiteshmandav/Hand-tracking-mediapipe',
      },
      { title: 'Brick Breakout Game',
      cols: 1, rows: 1 ,
      vid1: `/assets/brick-breakout.gif`,
      content: `As a part of this exercise, I built a basic brick breakout game to understand edge detection and canvas in javascript.`,
      tech : `HTML, CSS, JavaScript`,
      applink:'https://hiteshmandav.github.io/brick-breakout-game/',
      gitlink:'https://github.com/hiteshmandav/brick-breakout-game',
      },
      { title: 'Ping Pong Game',
      cols: 1, rows: 1 ,
      vid1: `/assets/pingpong.gif`,
      content: `As a part of this exercise, I built a basic ping-pong game to understand edge detection and canvas in javascript.`,
      tech : `HTML, SCSS`,
      applink:'https://github.com/hiteshmandav/ping-pong',
      gitlink:'https://hiteshmandav.github.io/ping-pong/',
      }
    ];
    })
  );

  workCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Modernization of Vanguard Legacy Retirement Portal',
            cols: 3, rows: 1,
            year: '2020-Present',
            content: `As a part of this project, our team was responsible for modernizing the legacy retirement portal and make it more user-friendly.`,
            responnibilities: [`To understand the existing functionality and business logic to develop the graphQL services and Angular components.`,
                              `Working with business to groom the sprint.`,
                              `Working on development stories and fix any defects that come from the testing team.`,
                              `Assisting and coordinating the offshore UI team.`],
            tech : `Angular 9, GraphQl, Bamboo`,
          },
          { title: 'Migration of Trade and Finance Application for Deutsche Bank',
            cols: 3, rows: 1,year: '2020-Present',
            content: `As a part of this project, our team was responsible for migration of the trade and finance application from oracle weblogic servers to Red Hat Jboss and Openshift servers.`,
            responnibilities: [`To upgrade the java application from version 6 to version 8.`,
                              `Build and deploy the docker image on openshift platform.`],
            tech : `Java, Red Hat OpenShift.`,
          },
          { title: 'Authentication & Authorization Portal for Deutsche Bank',
            cols: 3, rows: 1,year: '2020-Present',
            content: `As a part of this project, our team was responsible for building and web application that would enable admins to manage authentication and authorization access for groups and individual employees.`,
            responnibilities: [`Develop angular services to consume data from backend and make it available for all angular components.`,
                              `Working with business to groom the sprint.`,
                              `Develop a bulk upload component to update access in bulk.`,
                              `Work on defect fixes and Application routing`],
            tech : `Angular 4`,
          },
          { title: 'Best Estimates Web Application for Infosys',
            cols: 3, rows: 1,year: '2020-Present',
            content: `As a part of this project, our team was responsible for developing a web application to help managers estimate the project timelines and resource utilization`,
            responnibilities: [`Develop the UI fetch data from backend API`,
                              `Application testing`,
                              `Documentation for deploying and using the application.`],
            tech : `JavaScript, HTML, JQuery, CSS`,
          }
        ];
      }

      return [
        { title: 'Modernization of Vanguard Legacy Retirement Portal',
          cols: 1, rows: 1,
          year: '2020-Present',
          content: `As a part of this project, our team was responsible for modernizing the legacy retirement portal and make it more user-friendly.`,
          responnibilities: [`To understand the existing functionality and business logic to develop the graphQL services and Angular components.`,
                            `Working with business to groom the sprint.`,
                            `Working on development stories and fix any defects that come from the testing team.`,
                            `Assisting and coordinating the offshore UI team.`],
          tech : `Angular 9, GraphQl, Bamboo`,
        },
        { title: 'Migration of Trade and Finance Application for Deutsche Bank',
          cols: 1, rows: 1,year: '2020-Present',
          content: `As a part of this project, our team was responsible for migration of the trade and finance application from oracle weblogic servers to Red Hat Jboss and Openshift servers.`,
          responnibilities: [`To upgrade the java application from version 6 to version 8.`,
                            `Build and deploy the docker image on openshift platform.`],
          tech : `Java, Red Hat OpenShift.`,
        },
        { title: 'Authentication & Authorization Portal for Deutsche Bank',
          cols: 1, rows: 1,year: '2020-Present',
          content: `As a part of this project, our team was responsible for building and web application that would enable admins to manage authentication and authorization access for groups and individual employees.`,
          responnibilities: [`Develop angular services to consume data from backend and make it available for all angular components.`,
                            `Working with business to groom the sprint.`,
                            `Develop a bulk upload component to update access in bulk.`,
                            `Work on defect fixes and Application routing`],
          tech : `Angular 4`,
        },
        { title: 'Best Estimates Web Application for Infosys',
          cols: 1, rows: 1,year: '2020-Present',
          content: `As a part of this project, our team was responsible for developing a web application to help managers estimate the project timelines and resource utilization`,
          responnibilities: [`Develop the UI fetch data from backend API`,
                            `Application testing`,
                            `Documentation for deploying and using the application.`],
          tech : `JavaScript, HTML, JQuery, CSS`,
        }
      ];
    })
  );

  certs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [

        { title: 'Infosys Certified Angular Professional',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/angular.jpg`,
          },
          { title: 'Infosys Global Agile Developer',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/Agile.jpg`,
      },
      { title: 'Infosys Certified Front End Web developer',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/FEDeveloper.jpg`,
      },
      { title: 'Bussiness Communication level 6',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/BCA.jpg`,
      },
      { title: 'Bachelor of Technology Degree',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/Degree.jpg`,
      },
      { title: 'Hindustan Shipyard Ltd. Internship.',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/HSL.jpg`,
      },
      { title: 'Oerlikon Fairfield Atlas Ltd. Intership',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/Oerlikon.jpg`,
      },
      { title: 'Universal Bio-Mass Energy Pvt. Ltd.Internship',
        cols: 3, rows: 1 ,
        asset: `/assets/certs/UBEPL.jpg`,
      },
      ];
      }

      return [

        { title: 'Infosys Certified Angular Professional',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/angular.jpg`,
          },
          { title: 'Infosys Global Agile Developer',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/Agile.jpg`,
      },
      { title: 'Infosys Certified Front End Web developer',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/FEDeveloper.jpg`,
      },
      { title: 'Bussiness Communication level 6',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/BCA.jpg`,
      },
      { title: 'Bachelor of Technology Degree',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/Degree.jpg`,
      },
      { title: 'Hindustan Shipyard Ltd. Internship.',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/HSL.jpg`,
      },
      { title: 'Oerlikon Fairfield Atlas Ltd. Intership',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/Oerlikon.jpg`,
      },
      { title: 'Universal Bio-Mass Energy Pvt. Ltd.Internship',
        cols: 1, rows: 1 ,
        asset: `/assets/certs/UBEPL.jpg`,
      },
    ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public openProject(link) {
    window.open(link, '_blank');
  }


}
