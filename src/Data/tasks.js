const details = `Hello! 
My name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted!  🎉  🙌 
You really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job. 

Here's the project overview:
You'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`;

export default [
    {
        title: 'Application Setup',
        status: 'completed',
        businessContexts: [],
    },
    {
        title: 'Static Books List',
        status: 'completed',
        businessContexts: [],
    },
    {
        title: 'Administration Panel',
        status: 'completed',
        businessContexts: [],
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
                avatar: '1',
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
                details: details,
            }
        ],
    },
    {
        title: 'Book Review Feature',
        status: 'blocked',
        businessContexts: [],
    },
];