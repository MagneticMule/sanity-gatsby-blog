export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60251dc923205390f924f6e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kifix9ue',
                  apiId: '1c08cece-53cb-4a21-9bf0-bb5c886750a9'
                },
                {
                  buildHookId: '60251dc9e7d11953015eea99',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qfr46dp8',
                  apiId: 'b9f0a4e4-b9cb-4ba4-bf52-a59c4dbedf40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagneticMule/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qfr46dp8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
