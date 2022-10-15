const details = `Hello! 
My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌 
You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. 

Here's the project overview:
You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`;

const tasks = [
    {
        title: 'Application Setup',
        status: 'completed',
        businessContexts: [
            {
                author: 'John Commedy',
                avatar: '2',
                created_at: 1661771543631,
                title: 'Check your skills',
                content: 'Hi Eric, you should check your skills.',
                details: details,
            },
        ],
    },
    {
        title: 'Static Books List',
        status: 'completed',
        businessContexts: [
            {
                isNew: true,
                author: 'Kirsten Aniston',
                avatar: '3',
                created_at: 1665773543631,
                title: 'Nice to see you again!',
                content: 'That was a nice time to meet you my friend!',
                details: 'Tell me beacuse I don\'t really know Integer eu hendrerit massa, quis finibus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa mi, euismod id maximus id, tempus quis libero. Maecenas eu porttitor turpis, non mollis neque. Phasellus libero velit, tempor eu laoreet sit amet, condimentum eu enim. Cras vel dictum orci. Proin lacinia lorem ut dictum luctus. Donec efficitur pretium metus, in rutrum justo.',
            },
            {
                author: 'John Commedy',
                avatar: '2',
                created_at: 1661771543631,
                title: 'Mango or apple?',
                content: 'Which one\'s better?',
                details: details,
            },
        ],
    },
    {
        title: 'Administration Panel',
        status: 'completed',
        businessContexts: [
            {
                isNew: true,
                author: 'Kirsten Aniston',
                avatar: '3',
                created_at: 1665773543631,
                title: 'Nice to see you again!',
                content: 'That was a nice time to meet you my friend!',
                details: 'Tell me beacuse I don\'t really know Integer eu hendrerit massa, quis finibus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam massa mi, euismod id maximus id, tempus quis libero. Maecenas eu porttitor turpis, non mollis neque. Phasellus libero velit, tempor eu laoreet sit amet, condimentum eu enim. Cras vel dictum orci. Proin lacinia lorem ut dictum luctus. Donec efficitur pretium metus, in rutrum justo.',
            },
            {
                author: 'Olga Nelson',
                avatar: '1',
                created_at: 1665773543631,
                title: 'New sprint, tasks and intro information.',
                content: 'Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada magna at euismod elementum. Cras id consequat nulla. Aenean ex ipsum, aliquam ac justo et, varius accumsan sem. Suspendisse diam quam, fermentum ac fringilla in, maximus ac urna. Nullam molestie ligula quis porta suscipit. Integer vulputate, erat quis maximus mollis, massa lorem porta felis, in porta quam libero sed massa. Morbi vestibulum at lorem a ullamcorper. Suspendisse lobortis in tellus id tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sit amet suscipit turpis, id feugiat massa. Proin orci nunc, consequat vehicula tempus ac, ultrices non quam.'
            }
        ],
    },
    {
        title: 'Connect Admin with Frontend',
        status: 'active',
        active: true,
        businessContexts: [
            {
                isNew: true,
                author: 'Olga Nelson',
                avatar: '1',
                created_at: 1665773543631,
                title: 'New sprint, tasks and intro information.',
                content: 'Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...',
                details: details,
            },
            {
                author: 'Kirsten Aniston',
                avatar: '3',
                created_at: 1665773543631,
                title: 'Application has been accepted 🎉 🙌',
                content: 'Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...',
                details: details,
            },
            {
                author: 'Olga Nelson',
                avatar: '1',
                created_at: 1665773543631,
                title: 'New sprint, tasks and intro information.',
                content: 'Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada magna at euismod elementum. Cras id consequat nulla. Aenean ex ipsum, aliquam ac justo et, varius accumsan sem. Suspendisse diam quam, fermentum ac fringilla in, maximus ac urna. Nullam molestie ligula quis porta suscipit. Integer vulputate, erat quis maximus mollis, massa lorem porta felis, in porta quam libero sed massa. Morbi vestibulum at lorem a ullamcorper. Suspendisse lobortis in tellus id tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sit amet suscipit turpis, id feugiat massa. Proin orci nunc, consequat vehicula tempus ac, ultrices non quam.'
            }
        ],
    },
    {
        title: 'Book Review Feature',
        status: 'blocked',
        businessContexts: [],
    },
];

export default tasks