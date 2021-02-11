export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60249b0b37d7b88aa95549c0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2021-studio',
                  apiId: '0fb54e72-038e-46f4-9928-8fe4add8eb2a'
                },
                {
                  buildHookId: '60249b0b03fd9e9332d28a0d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2021',
                  apiId: '25701a02-bc87-4392-b854-41efffc5989b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mfahk/sanity-kitchen-sink-2021',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2021.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
